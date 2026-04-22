import React from 'react';
import { Link } from 'react-router-dom';
import { SolutionItem } from '../data/solutionData';

interface SolutionDropdownProps {
    items: SolutionItem[];
    title: string;
    titleKorean: string;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    timeoutRef: React.MutableRefObject<number | null>;
    routePrefix: string;
    onTabHover: (e: React.MouseEvent) => void;
    onTabLeave: () => void;
}

const LINK_CLASSES = "group block text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2.5 rounded transition-colors";
const BUTTON_CLASSES = "cursor-pointer text-black hover:text-blue-300 transition-colors duration-300 font-medium flex flex-col items-end";
const THUMB_CLASSES = "mt-2 w-full aspect-[4/3] overflow-hidden rounded-md bg-gray-50 border border-gray-200 flex items-center justify-center";
const THUMB_IMG_CLASSES = "w-full h-full object-contain transition-transform duration-300 ease-out group-hover:scale-105";

const folderFromPrefix = (routePrefix: string): string => routePrefix.replace(/\//g, '');

const SolutionDropdown: React.FC<SolutionDropdownProps> = ({
    items,
    title,
    titleKorean,
    isOpen,
    setIsOpen,
    timeoutRef,
    routePrefix,
    onTabHover,
    onTabLeave
}) => {
    const handleMouseEnter = (e: React.MouseEvent) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsOpen(true);
        onTabHover(e);
    };

    const handleMouseLeave = (e: React.MouseEvent) => {
        timeoutRef.current = window.setTimeout(() => {
            setIsOpen(false);
        }, 200);
        onTabLeave();
    };

    return (
        <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={BUTTON_CLASSES}>
                <span>{title}</span>
                <span className="text-[70%] text-right">{titleKorean}</span>
            </div>
            
            <div className={`fixed top-[65px] left-0 right-0 w-full bg-white mt-1 shadow-2xl border-t border-gray-200 z-40 transition-all duration-300 ease-out ${
                isOpen   
                    ? 'opacity-100 translate-y-0 pointer-events-auto' 
                    : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}>
                <div className="max-w-7xl lg:mx-22 p-6 mx-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">{title} ({titleKorean})</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
                        {items.map((item) => {
                            const thumb = item.images?.[0];
                            const folder = folderFromPrefix(routePrefix);
                            return (
                                <Link
                                    key={item.id}
                                    to={`${routePrefix}${item.id}`}
                                    className={LINK_CLASSES}
                                >
                                    <span className="block font-medium">{item.shortname}</span>
                                    <span className="block text-gray-400 text-xs mt-0.5">{item.nameKorean}</span>
                                    {thumb && (
                                        <div className={THUMB_CLASSES}>
                                            <img
                                                src={`/img/${folder}/${thumb}`}
                                                alt={item.shortname}
                                                className={THUMB_IMG_CLASSES}
                                                loading="lazy"
                                            />
                                        </div>
                                    )}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolutionDropdown;

