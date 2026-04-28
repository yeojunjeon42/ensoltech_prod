import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

interface CarouselImage {
    src: string;
    alt: string;
    link: string;
}

const EQUIPMENT_IMAGES: CarouselImage[] = [
    { src: '/img/equipment/1.png',     alt: 'Horizontal Inline Desmear-PTH-Flash Cu Line',                    link: '/equipment/horizontal-inline-desmear-pth-flash-cu' },
    { src: '/img/enproductive/2-2.png', alt: 'Smart filter – Desmear sludgy/particle automatic discharge system', link: '/enproductive/smart-filter-particle-sludgy-auto-discharger' },
    { src: '/img/enproductive/1-1.png', alt: 'TOPWAY - Real time Online Chemical Analyzer & Dosing System',     link: '/enproductive/topway-online-chemical-analyzer' },
    { src: '/img/equipment/4.png',     alt: 'Horizontal Wet process',                                          link: '/equipment/horizontal-wet-process' },
    { src: '/img/equipment/2.png',     alt: 'Steel belt type VCP',                                             link: '/equipment/steel-belt-vcp' },
    { src: '/img/equipment/5-1.png',   alt: 'Horizontal Vacuum Hole Plugging',                                 link: '/equipment/horizontal-vacuum-hole-plugging' },
];

const AUTO_ADVANCE_MS = 4500;

function Carousel() {
    const railRef = useRef<HTMLDivElement | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isUserInteracting, setIsUserInteracting] = useState(false);
    const interactionTimer = useRef<number | null>(null);

    const scrollToIndex = useCallback((index: number, behavior: ScrollBehavior = 'smooth') => {
        const rail = railRef.current;
        if (!rail) return;
        const slide = rail.children[index] as HTMLElement | undefined;
        if (!slide) return;
        rail.scrollTo({ left: slide.offsetLeft, behavior });
    }, []);

    // Track which slide is closest to center using IntersectionObserver
    useEffect(() => {
        const rail = railRef.current;
        if (!rail) return;
        const observer = new IntersectionObserver(
            (entries) => {
                let bestEntry: IntersectionObserverEntry | null = null;
                for (const entry of entries) {
                    if (!bestEntry || entry.intersectionRatio > bestEntry.intersectionRatio) {
                        bestEntry = entry;
                    }
                }
                if (bestEntry && bestEntry.intersectionRatio > 0.6) {
                    const idx = Number((bestEntry.target as HTMLElement).dataset.index);
                    if (!Number.isNaN(idx)) setCurrentIndex(idx);
                }
            },
            { root: rail, threshold: [0.6, 0.9, 1] }
        );
        Array.from(rail.children).forEach((child) => observer.observe(child));
        return () => observer.disconnect();
    }, []);

    // Auto-advance, paused while the user is interacting
    useEffect(() => {
        if (isUserInteracting) return;
        const id = window.setInterval(() => {
            const next = (currentIndex + 1) % EQUIPMENT_IMAGES.length;
            scrollToIndex(next);
        }, AUTO_ADVANCE_MS);
        return () => window.clearInterval(id);
    }, [currentIndex, isUserInteracting, scrollToIndex]);

    const pauseInteraction = useCallback(() => {
        setIsUserInteracting(true);
        if (interactionTimer.current) window.clearTimeout(interactionTimer.current);
        interactionTimer.current = window.setTimeout(() => setIsUserInteracting(false), 4000);
    }, []);

    const goToPrev = () => {
        pauseInteraction();
        scrollToIndex((currentIndex - 1 + EQUIPMENT_IMAGES.length) % EQUIPMENT_IMAGES.length);
    };

    const goToNext = () => {
        pauseInteraction();
        scrollToIndex((currentIndex + 1) % EQUIPMENT_IMAGES.length);
    };

    return (
        <section
            aria-roledescription="carousel"
            aria-label="Featured equipment"
            className="w-full mt-8 sm:mt-12"
            onPointerDown={pauseInteraction}
        >
            <div className="relative">
                {/* Edge fade markers — purely decorative depth cue */}
                <div className="pointer-events-none hidden sm:block absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="pointer-events-none hidden sm:block absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent z-10" />

                {/* Side arrows — desktop / tablet only */}
                <button
                    onClick={goToPrev}
                    aria-label="Previous slide"
                    className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-white/90 hover:bg-white shadow-md backdrop-blur-sm transition-transform hover:scale-105"
                >
                    <span className="text-gray-800 text-2xl leading-none select-none">‹</span>
                </button>
                <button
                    onClick={goToNext}
                    aria-label="Next slide"
                    className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-white/90 hover:bg-white shadow-md backdrop-blur-sm transition-transform hover:scale-105"
                >
                    <span className="text-gray-800 text-2xl leading-none select-none">›</span>
                </button>

                <div
                    ref={railRef}
                    className="snap-rail flex overflow-x-auto rounded-xl"
                    role="group"
                >
                    {EQUIPMENT_IMAGES.map((image, index) => (
                        <div
                            key={image.src}
                            data-index={index}
                            aria-roledescription="slide"
                            aria-label={`${index + 1} of ${EQUIPMENT_IMAGES.length}`}
                            className="relative shrink-0 w-full"
                        >
                            <Link to={image.link} className="block relative">
                                <div className="relative bg-gray-50 rounded-xl overflow-hidden">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        loading={index === 0 ? 'eager' : 'lazy'}
                                        decoding="async"
                                        className="w-full h-64 sm:h-80 md:h-96 lg:h-[32.5rem] object-contain select-none"
                                        draggable={false}
                                    />
                                    {/* Caption — editorial chip, bottom-left, small on mobile */}
                                    <div className="absolute left-3 bottom-3 sm:left-4 sm:bottom-4 max-w-[85%]">
                                        <div className="inline-flex items-center gap-2 bg-gray-900/85 backdrop-blur-sm text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
                                            <span className="eyebrow-num text-[10px] sm:text-[11px] text-white/60">
                                                {String(index + 1).padStart(2, '0')} / {String(EQUIPMENT_IMAGES.length).padStart(2, '0')}
                                            </span>
                                            <span className="text-[12px] sm:text-sm font-medium leading-tight line-clamp-2">
                                                {image.alt}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots — touch-friendly */}
            <div className="flex items-center justify-center gap-2 mt-5 sm:mt-6">
                {EQUIPMENT_IMAGES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            pauseInteraction();
                            scrollToIndex(index);
                        }}
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={index === currentIndex}
                        className="group p-2 -m-1"
                    >
                        <span
                            className={`block h-1.5 rounded-full transition-all duration-300 ${
                                index === currentIndex
                                    ? 'w-7 bg-blue-600'
                                    : 'w-1.5 bg-gray-300 group-hover:bg-gray-400'
                            }`}
                        />
                    </button>
                ))}
            </div>
        </section>
    );
}

export default Carousel;
