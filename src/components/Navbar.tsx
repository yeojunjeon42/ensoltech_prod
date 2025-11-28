import React, { useState, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { equipmentData, enproductiveData, encycleData } from '../data/solutionData';
import SolutionDropdown from './SolutionDropdown';
import { useLanguage } from '../contexts/LanguageContext';

// Constants for reusable CSS classes
const BUTTON_CLASSES = "cursor-pointer text-black hover:text-blue-300 transition-colors duration-300 font-medium flex flex-col items-end"

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const { language, toggleLanguage } = useLanguage();
    // State to control dropdown visibility
    const [isEquipmentOpen, setIsEquipmentOpen] = useState(false);
    const [isEnProductiveOpen, setIsEnProductiveOpen] = useState(false);
    const [isEnCycleOpen, setIsEnCycleOpen] = useState(false);
    // Timeout refs for delayed dropdown close
    const equipmentTimeout = useRef<number | null>(null);
    const enProductiveTimeout = useRef<number | null>(null);
    const enCycleTimeout = useRef<number | null>(null);
    // State for active tab indicator
    const [activeTab, setActiveTab] = useState<string>('');
    const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });

    // Handle scrolling to contact section
    const handleContactClick = (e: React.MouseEvent) => {
        e.preventDefault();
        navigate('/');
        setTimeout(() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                // Get the navbar height (assume 25pt ≈ 33px, or adjust as needed)
                const navbar = document.querySelector('nav');
                const offset = navbar ? navbar.getBoundingClientRect().height + 5 : 15; // 8px extra spacing
                const elementPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: elementPosition - offset,
                    behavior: 'smooth'
                });
            }
        }, 100);
    };

    // Handle tab indicator positioning
    const handleTabHover = (e: React.MouseEvent, tabName: string) => {
        const element = e.currentTarget as HTMLElement;
        const rect = element.getBoundingClientRect();
        const navRect = element.closest('nav')?.getBoundingClientRect();
        
        if (navRect) {
            setIndicatorStyle({
                left: rect.left - navRect.left,
                width: rect.width
            });
            setActiveTab(tabName);
        }
    };

    const handleTabLeave = () => {
        // Reset to current page indicator or hide
        const currentPath = location.pathname;
        if (currentPath === '/') {
            setActiveTab('home');
        } else if (currentPath.startsWith('/equipment')) {
            setActiveTab('equipment');
        } else {
            setActiveTab('');
        }
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex">
            <nav className="flex-1 flex justify-between items-center px-3 lg:px-32 py-2.5 bg-gray-100/80 backdrop-blur-lg shadow-sm relative">
                {/* Logo and Brand Name */}
                <div className="flex items-center gap-1">
                    <Link to="/">
                        <img src="/img/Ensoltech_logo.png" alt="Ensoltech logo" className="h-12" />
                    </Link>
                    
                </div>

                {/* Navigation Links */}
                <div className="flex gap-12 ml-auto items-center">

                    {/* Equipment Link with Dropdown */}
                    <SolutionDropdown
                        items={equipmentData}
                        title="Equipment Solution"
                        titleKorean="생산장비솔루션"
                        isOpen={isEquipmentOpen}
                        setIsOpen={setIsEquipmentOpen}
                        timeoutRef={equipmentTimeout}
                        routePrefix="/equipment/"
                        onTabHover={(e) => handleTabHover(e, 'equipment')}
                        onTabLeave={handleTabLeave}
                    />

                    {/* EnProductive Link with Dropdown */}
                    <SolutionDropdown
                        items={enproductiveData}
                        title="EnProductive Solution"
                        titleKorean="부속장비/부품자재 솔루션"
                        isOpen={isEnProductiveOpen}
                        setIsOpen={setIsEnProductiveOpen}
                        timeoutRef={enProductiveTimeout}
                        routePrefix="/enproductive/"
                        onTabHover={(e) => handleTabHover(e, 'enproductive')}
                        onTabLeave={handleTabLeave}
                    />

                    {/* EnCycle Link with Dropdown */}
                    <SolutionDropdown
                        items={encycleData}
                        title="EnCycle"
                        titleKorean="환경설비 솔루션"
                        isOpen={isEnCycleOpen}
                        setIsOpen={setIsEnCycleOpen}
                        timeoutRef={enCycleTimeout}
                        routePrefix="/encycle/"
                        onTabHover={(e) => handleTabHover(e, 'encycle')}
                        onTabLeave={handleTabLeave}
                    />

                    {/* Contact Button */}
                    <button 
                        onClick={handleContactClick}
                        style={{ backgroundColor: 'var(--color-primary-dark)' }} 
                        className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                        onMouseEnter={(e) => handleTabHover(e, 'contact')}
                        onMouseLeave={handleTabLeave}
                    >
                        Contact
                    </button>
                </div>

                {/* Active Tab Indicator */}
                {activeTab && (
                    <div 
                        className="absolute bottom-0 h-1 bg-blue-600 transition-all duration-300 ease-out"
                        style={{
                            left: `${indicatorStyle.left}px`,
                            width: `${indicatorStyle.width}px`
                        }}
                    />
                )}
            </nav>

            {/* Language Toggle Button - Outside nav */}
            <button
                onClick={toggleLanguage}
                className="cursor-pointer text-black hover:text-blue-300 transition-colors duration-300 px-3 py-5 rounded-lg hover:bg-gray-200/50 font-medium bg-gray-100/80 backdrop-blur-lg"
                title={language === 'en' ? 'Switch to Korean' : 'Switch to English'}
            >
                {language === 'en' ? 'EN' : 'KO'}
            </button>
        </div>
    );
}

export default Navbar;