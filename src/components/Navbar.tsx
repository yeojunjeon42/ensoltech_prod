import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { equipmentData, enproductiveData, encycleData, SolutionItem } from '../data/solutionData';
import SolutionDropdown from './SolutionDropdown';
import { useLanguage } from '../contexts/LanguageContext';

interface CategoryConfig {
    key: string;
    title: string;
    titleKorean: string;
    routePrefix: string;
    items: SolutionItem[];
}

const CATEGORIES: CategoryConfig[] = [
    { key: 'equipment',    title: 'Equipment',    titleKorean: '생산장비 솔루션', routePrefix: '/equipment/',    items: equipmentData },
    { key: 'enproductive', title: 'EnProductive', titleKorean: '부속설비 솔루션', routePrefix: '/enproductive/', items: enproductiveData },
    { key: 'encycle',      title: 'EnSave',       titleKorean: '자재 솔루션',     routePrefix: '/encycle/',      items: encycleData },
];

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const { language, toggleLanguage } = useLanguage();

    const [isEquipmentOpen, setIsEquipmentOpen] = useState(false);
    const [isEnProductiveOpen, setIsEnProductiveOpen] = useState(false);
    const [isEnCycleOpen, setIsEnCycleOpen] = useState(false);
    const equipmentTimeout = useRef<number | null>(null);
    const enProductiveTimeout = useRef<number | null>(null);
    const enCycleTimeout = useRef<number | null>(null);

    const [activeTab, setActiveTab] = useState<string>('');
    const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

    useEffect(() => {
        document.body.dataset.scrollLocked = drawerOpen ? 'true' : 'false';
        return () => { document.body.dataset.scrollLocked = 'false'; };
    }, [drawerOpen]);

    useEffect(() => {
        setDrawerOpen(false);
        setExpandedCategory(null);
    }, [location.pathname]);

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (!contactSection) return;
        const navbar = document.querySelector('nav');
        const offset = navbar ? navbar.getBoundingClientRect().height + 5 : 15;
        const elementPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    };

    const handleContactClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(scrollToContact, 120);
        } else {
            scrollToContact();
        }
        setDrawerOpen(false);
    };

    const handleTabHover = (e: React.MouseEvent, tabName: string) => {
        const element = e.currentTarget as HTMLElement;
        const rect = element.getBoundingClientRect();
        const navRect = element.closest('nav')?.getBoundingClientRect();
        if (navRect) {
            setIndicatorStyle({ left: rect.left - navRect.left, width: rect.width });
            setActiveTab(tabName);
        }
    };

    const handleTabLeave = () => {
        const currentPath = location.pathname;
        if (currentPath === '/') setActiveTab('home');
        else if (currentPath.startsWith('/equipment')) setActiveTab('equipment');
        else setActiveTab('');
    };

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50 flex">
                <nav className="flex-1 flex justify-between items-center px-4 sm:px-6 lg:px-32 py-2.5 bg-gray-100/80 backdrop-blur-lg shadow-sm relative">
                    <div className="flex items-center gap-1">
                        <Link to="/" aria-label="Ensoltech home">
                            <img src="/img/Ensoltech_logo.png" alt="Ensoltech" className="h-9 sm:h-10 lg:h-12" />
                        </Link>
                    </div>

                    {/* Desktop nav */}
                    <div className="hidden lg:flex gap-12 ml-auto items-center">
                        <SolutionDropdown
                            items={equipmentData}
                            title="Equipment"
                            titleKorean="생산장비 솔루션"
                            isOpen={isEquipmentOpen}
                            setIsOpen={setIsEquipmentOpen}
                            timeoutRef={equipmentTimeout}
                            routePrefix="/equipment/"
                            onTabHover={(e) => handleTabHover(e, 'equipment')}
                            onTabLeave={handleTabLeave}
                        />
                        <SolutionDropdown
                            items={enproductiveData}
                            title="EnProductive"
                            titleKorean="부속설비 솔루션"
                            isOpen={isEnProductiveOpen}
                            setIsOpen={setIsEnProductiveOpen}
                            timeoutRef={enProductiveTimeout}
                            routePrefix="/enproductive/"
                            onTabHover={(e) => handleTabHover(e, 'enproductive')}
                            onTabLeave={handleTabLeave}
                        />
                        <SolutionDropdown
                            items={encycleData}
                            title="EnSave"
                            titleKorean="자재 솔루션"
                            isOpen={isEnCycleOpen}
                            setIsOpen={setIsEnCycleOpen}
                            timeoutRef={enCycleTimeout}
                            routePrefix="/encycle/"
                            onTabHover={(e) => handleTabHover(e, 'encycle')}
                            onTabLeave={handleTabLeave}
                        />
                        <button
                            onClick={handleContactClick}
                            style={{ backgroundColor: 'var(--color-primary-dark)' }}
                            className="cursor-pointer text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                            onMouseEnter={(e) => handleTabHover(e, 'contact')}
                            onMouseLeave={handleTabLeave}
                        >
                            Contact
                        </button>
                    </div>

                    {/* Mobile trigger */}
                    <button
                        type="button"
                        aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={drawerOpen}
                        onClick={() => setDrawerOpen((v) => !v)}
                        className="lg:hidden ml-auto inline-flex items-center justify-center w-11 h-11 rounded-md text-gray-900 hover:bg-gray-200/60 transition-colors"
                    >
                        <span className="relative block w-5 h-3.5">
                            <span
                                className={`absolute left-0 top-0 block h-0.5 w-5 bg-current transition-transform duration-300 ${drawerOpen ? 'translate-y-1.5 rotate-45' : ''}`}
                            />
                            <span
                                className={`absolute left-0 bottom-0 block h-0.5 w-5 bg-current transition-transform duration-300 ${drawerOpen ? '-translate-y-1.5 -rotate-45' : ''}`}
                            />
                        </span>
                    </button>

                    {activeTab && (
                        <div
                            className="hidden lg:block absolute bottom-0 h-1 bg-blue-600 transition-all duration-300 ease-out"
                            style={{ left: `${indicatorStyle.left}px`, width: `${indicatorStyle.width}px` }}
                        />
                    )}
                </nav>

                <button
                    onClick={toggleLanguage}
                    className="hidden lg:block cursor-pointer text-black hover:text-blue-300 transition-colors duration-300 px-3 py-5 rounded-lg hover:bg-gray-200/50 font-medium bg-gray-100/80 backdrop-blur-lg"
                    title={language === 'en' ? 'Switch to Korean' : 'Switch to English'}
                >
                    {language === 'en' ? 'KO' : 'EN'}
                </button>
            </div>

            {/* Mobile drawer */}
            <AnimatePresence>
                {drawerOpen && (
                    <motion.div
                        key="drawer-root"
                        className="fixed inset-0 z-40 lg:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
                            onClick={() => setDrawerOpen(false)}
                        />
                        <motion.aside
                            role="dialog"
                            aria-modal="true"
                            aria-label="Site navigation"
                            className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white shadow-2xl flex flex-col"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', ease: [0.16, 1, 0.3, 1], duration: 0.35 }}
                            style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}
                        >
                            <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-gray-100">
                                <span className="text-xs uppercase tracking-[0.2em] text-gray-500">Menu</span>
                                <button
                                    onClick={toggleLanguage}
                                    className="text-xs font-semibold tracking-wider px-3 py-1.5 rounded-full border border-gray-200 hover:border-gray-400 transition-colors"
                                >
                                    {language === 'en' ? 'KO' : 'EN'}
                                </button>
                            </div>

                            <nav className="flex-1 overflow-y-auto overscroll-contain px-5 pt-6 pb-8">
                                <Link
                                    to="/"
                                    onClick={() => setDrawerOpen(false)}
                                    className="block pb-6 mb-2 border-b border-gray-100"
                                >
                                    <span className="eyebrow-num text-[11px] text-gray-400">00</span>
                                    <span className="block text-2xl font-semibold tracking-tight text-gray-900">Home</span>
                                </Link>

                                <ul className="divide-y divide-gray-100">
                                    {CATEGORIES.map((cat, idx) => {
                                        const isExpanded = expandedCategory === cat.key;
                                        return (
                                            <li key={cat.key} className="py-3">
                                                <button
                                                    type="button"
                                                    onClick={() => setExpandedCategory(isExpanded ? null : cat.key)}
                                                    aria-expanded={isExpanded}
                                                    className="w-full flex items-start justify-between gap-4 text-left py-2"
                                                >
                                                    <span className="flex-1">
                                                        <span className="eyebrow-num text-[11px] text-gray-400">
                                                            {String(idx + 1).padStart(2, '0')}
                                                        </span>
                                                        <span className="block text-2xl font-semibold tracking-tight text-gray-900">
                                                            {cat.title}
                                                        </span>
                                                        <span className="block text-xs text-gray-500 mt-0.5">{cat.titleKorean}</span>
                                                    </span>
                                                    <span
                                                        aria-hidden="true"
                                                        className={`mt-3 inline-block w-5 h-px bg-gray-900 transition-transform duration-300 origin-center ${isExpanded ? 'rotate-90' : ''}`}
                                                    />
                                                </button>

                                                <AnimatePresence initial={false}>
                                                    {isExpanded && (
                                                        <motion.div
                                                            key="content"
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                                            className="overflow-hidden"
                                                        >
                                                            <ul className="mt-2 mb-2 pl-1 space-y-1">
                                                                {cat.items.map((item) => (
                                                                    <li key={item.id}>
                                                                        <Link
                                                                            to={`${cat.routePrefix}${item.id}`}
                                                                            onClick={() => setDrawerOpen(false)}
                                                                            className="flex items-baseline gap-3 py-2.5 pr-2 text-[15px] text-gray-700 hover:text-gray-900"
                                                                        >
                                                                            <span className="text-gray-300 select-none">—</span>
                                                                            <span className="flex-1 leading-snug">
                                                                                <span className="block">{item.shortname}</span>
                                                                                <span className="block text-[11px] text-gray-400">{item.nameKorean}</span>
                                                                            </span>
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </nav>

                            <div className="px-5 pt-4 pb-6 border-t border-gray-100">
                                <button
                                    onClick={handleContactClick}
                                    style={{ backgroundColor: 'var(--color-primary-dark)' }}
                                    className="w-full text-white font-medium tracking-wide py-3.5 rounded-xl active:scale-[0.99] transition-transform"
                                >
                                    Contact us
                                </button>
                            </div>
                        </motion.aside>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Navbar;
