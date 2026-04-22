#!/usr/bin/env node
/**
 * Visual check for nav dropdown thumbnails.
 * Uses puppeteer-core with the pre-installed Chromium to actually open
 * each dropdown (via real mouse hover) and screenshot it.
 */

const puppeteer = require('puppeteer-core');
const { mkdirSync, rmSync } = require('fs');
const { join } = require('path');

const CHROME = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const BASE = process.env.BASE_URL || 'http://localhost:3000';
const OUT_DIR = join(__dirname, 'screenshots');
const VIEWPORTS = [
    { name: 'desktop-1440', w: 1440, h: 900 },
    { name: 'desktop-1024', w: 1024, h: 800 },
];

const DROPDOWN_LABELS = ['Equipment', 'EnProductive', 'EnSave'];
const DROPDOWN_KEYS = ['equipment', 'enproductive', 'encycle'];

async function main() {
    rmSync(OUT_DIR, { recursive: true, force: true });
    mkdirSync(OUT_DIR, { recursive: true });

    const browser = await puppeteer.launch({
        executablePath: CHROME,
        headless: 'new',
        args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage']
    });

    try {
        for (const vp of VIEWPORTS) {
            const page = await browser.newPage();
            await page.setViewport({ width: vp.w, height: vp.h, deviceScaleFactor: 1 });
            await page.goto(BASE + '/', { waitUntil: 'networkidle2', timeout: 15000 });

            // Baseline home
            const baseOut = join(OUT_DIR, `home-${vp.name}.png`);
            await page.screenshot({ path: baseOut, fullPage: false });
            console.log('wrote', baseOut);

            for (let i = 0; i < DROPDOWN_KEYS.length; i++) {
                const key = DROPDOWN_KEYS[i];
                const label = DROPDOWN_LABELS[i];

                // Find the dropdown trigger by its visible English label and hover it
                const handle = await page.evaluateHandle((label) => {
                    const spans = document.querySelectorAll('nav .relative > div > span');
                    for (const s of spans) {
                        if (s.textContent && s.textContent.trim() === label) {
                            return s.closest('.relative');
                        }
                    }
                    return null;
                }, label);

                const el = handle.asElement();
                if (!el) {
                    console.error('could not find trigger for', label);
                    continue;
                }
                const box = await el.boundingBox();
                if (!box) continue;
                await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
                // Give React time to open and images time to lazy-load
                await new Promise((r) => setTimeout(r, 900));

                const out = join(OUT_DIR, `dropdown-${key}-${vp.name}.png`);
                await page.screenshot({ path: out, fullPage: false });
                console.log('wrote', out);

                // Move mouse far away to let it close before next capture
                await page.mouse.move(5, vp.h - 5);
                await new Promise((r) => setTimeout(r, 500));
            }

            await page.close();
        }
    } finally {
        await browser.close();
    }
    console.log('Done. Screenshots in', OUT_DIR);
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
