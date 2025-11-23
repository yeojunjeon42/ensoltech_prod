import React, { useState, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    // State to control Equipment dropdown visibility
    const [isEquipmentOpen, setIsEquipmentOpen] = useState(false);
    // Timeout ref for delayed dropdown close
    const dropdownTimeout = useRef<number | null>(null);
    // State for active tab indicator
    const [activeTab, setActiveTab] = useState<string>('');
    const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });

    // Handle opening dropdown immediately
    const handleMouseEnter = () => {
        if (dropdownTimeout.current) {
            clearTimeout(dropdownTimeout.current);
        }
        setIsEquipmentOpen(true);
    };

    // Handle closing dropdown with 0.3s delay
    const handleMouseLeave = () => {
        dropdownTimeout.current = window.setTimeout(() => {
            setIsEquipmentOpen(false);
        }, 200);
    };

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
        <nav className="flex justify-between items-center px-6 lg:px-32 py-2.5 fixed top-0 left-0 right-0 z-50 bg-gray-100/80 backdrop-blur-lg shadow-sm">
            {/* Logo and Brand Name */}
            <div className="flex items-center gap-1">
                <Link to="/">
                    <img src="/ensoltech_new/img/Ensoltech_logo.png" alt="Ensoltech logo" className="h-12" />
                </Link>
                
            </div>

            {/* Navigation Links */}
            <div className="flex gap-12 ml-auto items-center">

                {/* Equipment Link with Dropdown */}
                <div 
                    className="relative"
                    onMouseEnter={(e) => {
                        handleMouseEnter();
                        handleTabHover(e, 'equipment');
                    }}
                    onMouseLeave={(e) => {
                        handleMouseLeave();
                        handleTabLeave();
                    }}
                >
                    <div className="text-black hover:text-blue-300 transition-colors duration-300 font-medium cursor-pointer flex flex-col items-end">
                        <span>Equipment Solution</span>
                        <span className="text-[70%] text-right">생산장비솔루션</span>
                    </div>
                    
                    {/* Equipment Dropdown Menu */}
                    <div className={`fixed top-[65px] left-0 right-0 w-full bg-white mt-1 shadow-2xl border-t border-gray-200 z-40 transition-all duration-300 ease-out ${
                        isEquipmentOpen 
                            ? 'opacity-100 translate-y-0 pointer-events-auto' 
                            : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}>
                        <div className="max-w-7xl lg:mx-22 p-6 mx-10">

                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Equipment Solution (생산장비솔루션)</h3>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {/* 수직 PCB/IC 장비 */}
                                    <div className="space-y-3">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">수직 PCB/IC 장비</h4>
                                        <div className="space-y-0">
                                            <Link to="/equipment/dc-vcp" className="block text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded transition-colors">
                                                DC VCP
                                            </Link>
                                            <Link to="/equipment/ppr-vcp" className="block text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded transition-colors">
                                                PPR VCP
                                            </Link>
                                            <Link to="/equipment/carrier-cu-plating" className="block text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded transition-colors">
                                                캐리어타입 CU plating
                                            </Link>
                                            <Link to="/equipment/horizontal-electric-cu-plating" className="block text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded transition-colors">
                                                수평전기동 CU plating
                                            </Link>
                                            <Link to="/equipment/ic-plating" className="block text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded transition-colors">
                                                    IC 도금 장비 
                                            </Link>
                                        </div>
                                    </div>

                                    {/* 수평 PCB 장비 */}
                                    <div className="space-y-3">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">수평 PCB 장비</h4>
                                        <div className="space-y-0">
                                            <Link to="/equipment/desmear" className="block text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded transition-colors">
                                                Desmear
                                            </Link>
                                            <Link to="/equipment/electroless-cu" className="block text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded transition-colors">
                                                Electroless Cu
                                            </Link>
                                            <Link to="/equipment/blackhole" className="block text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded transition-colors">
                                                Blackhole
                                            </Link>
                                            <Link to="/equipment/shadow" className="block text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded transition-colors">
                                                Shadow
                                            </Link>
                                            <Link to="/equipment/flash-cu-plating" className="block text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded transition-colors">
                                                Flash Cu plating
                                            </Link>
                                            <Link to="/equipment/brownoxide" className="block text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded transition-colors">
                                                BrownOxide
                                            </Link>
                                            <Link to="/equipment/immersion-tin" className="block text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded transition-colors">
                                                Immersion Tin
                                            </Link>
                                        </div>
                                    </div>

                                    {/* 진공 홈플러깅 */}
                                    <div className="space-y-3">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">진공 홈플러깅</h4>
                                        <div className="space-y-0">
                                            <Link to="/equipment/vacuum-hole-plugging" className="block text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded transition-colors">
                                                Vacuum Hole Plugging Equipment
                                            </Link>
                                        </div>
                                    </div>

                                    {/* 양면 자동 인쇄기 */}
                                    <div className="space-y-3">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">양면 자동 인쇄기</h4>
                                        <div className="space-y-0">
                                            <Link to="/equipment/double-sided-printer" className="block text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded transition-colors">
                                                Double-sided Automatic Printer
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

                {/* EnProductive Text */}
                <div 
                    className="text-black hover:text-blue-300 transition-colors duration-300 font-medium flex flex-col items-end"
                    onMouseEnter={(e) => handleTabHover(e, 'enproductive')}
                    onMouseLeave={handleTabLeave}
                >
                    <span>EnProductive Solution</span>
                    <span className="text-[70%] text-right">부속장비/부품자재 솔루션</span>
                </div>

                {/* EnCycle Text */}
                <div 
                    className="text-black hover:text-blue-300 transition-colors duration-300 font-medium flex flex-col items-end"
                    onMouseEnter={(e) => handleTabHover(e, 'encycle')}
                    onMouseLeave={handleTabLeave}
                >
                    <span>EnCycle</span>
                    <span className="text-[70%] text-right">환경설비 솔루션</span>
                </div>

                {/* Contact Button */}
                <button 
                    onClick={handleContactClick}
                    style={{ backgroundColor: 'var(--color-primary-dark)' }} 
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
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
    );
}

export default Navbar;