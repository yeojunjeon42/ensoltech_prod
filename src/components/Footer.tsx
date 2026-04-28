import React from 'react';

const SECTION_TITLE = 'eyebrow-num text-[11px] uppercase text-gray-500 mb-3';
const BODY = 'text-gray-400 text-sm leading-relaxed';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-10 sm:pt-16 sm:pb-12">
            <div className="container mx-auto px-5 sm:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-10">
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight mb-4">ENSOLTECH</h3>
                        <p className={BODY}>
                            수직수평 웨트설비<br />
                            실시간 농도분석보충설비<br />
                            디지털유량계압력계<br />
                            스폰지롤러/특수액절롤러<br />
                            스마트필터-슬러지배출장치<br />
                            불용성아노드/다채널펄스정류기<br />
                            폐액금속회수장치 (Pd, Ni, Cu)
                        </p>
                    </div>

                    <div>
                        <h4 className={SECTION_TITLE}>Contact</h4>
                        <div className={`space-y-4 ${BODY}`}>
                            <div>
                                <p className="font-medium text-white text-sm mb-1">Tel</p>
                                <a href="tel:+821026746146" className="block hover:text-blue-300 transition-colors">+82 (KR) 010-2674-6146</a>
                                <a href="tel:+8615106132824" className="block hover:text-blue-300 transition-colors">+86 (CN) 151-0613-2824</a>
                            </div>
                            <div>
                                <p className="font-medium text-white text-sm mb-1">Email</p>
                                <a href="mailto:teiry@naver.com" className="hover:text-blue-300 transition-colors break-all">
                                    teiry@naver.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className={SECTION_TITLE}>Location</h4>
                        <address className={`${BODY} not-italic`}>
                            (15431) 안산시 단원구 풍전로 37-24,<br />
                            317동 307호<br />
                            (원곡동, 한신트리플렉스)
                        </address>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:justify-between gap-2 text-center sm:text-left">
                    <p className="text-gray-500 text-xs sm:text-sm">&copy; 2025 Ensoltech. All rights reserved.</p>
                    <p className="text-gray-500 text-xs sm:text-sm">Made by Yeojun Jeon</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
