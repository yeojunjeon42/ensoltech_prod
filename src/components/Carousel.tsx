import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Carousel() {
    // Array of equipment images from both folders
    const equipmentImages = [
        {
            src: '/img/equipment/1.png',
            alt: 'Horizontal Inline Desmear-PTH-Flash Cu Line',
            link: '/equipment/horizontal-inline-desmear-pth-flash-cu'
        },
        {
            src: '/img/enproductive/2-2.png',
            alt: 'Smart filter – Desmear sludgy/particle automatic discharge system',
            link: '/enproductive/smart-filter-particle-sludgy-auto-discharger'
        },
        {
            src: '/img/enproductive/1-1.png', 
            alt: 'TOPWAY - Real time Online Chemical Analyzer & Dosing System',
            link: '/enproductive/topway-online-chemical-analyzer'
        },
        {
            src: '/img/equipment/4.png',
            alt: 'Horizontal Wet process',
            link: '/equipment/horizontal-wet-process'
        },
        {
            src: '/img/equipment/2.png',
            alt: 'Steel belt type VCP',
            link: '/equipment/steel-belt-vcp'
        },
        {
            src: '/img/equipment/5-1.png',
            alt: 'Horizontal Vacuum Hole Plugging',
            link: '/equipment/horizontal-vacuum-hole-plugging'
        }
    ];

    // State to track current image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // State for tooltip
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    // Ref to store interval ID for timer reset
    const intervalRef = useRef<number | null>(null);

    // Function to start/reset the auto-rotate timer
    const startTimer = () => {
        // Clear existing interval if any
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        // Start new interval
        intervalRef.current = window.setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                (prevIndex + 1) % equipmentImages.length
            );
        }, 3500);
    };

    // Auto-rotate images every 3.5 seconds
    useEffect(() => {
        startTimer();
        // Cleanup interval on component unmount
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [equipmentImages.length]);

    // Navigate to next image
    const goToNext = () => {
        setCurrentImageIndex((prevIndex) => 
            (prevIndex + 1) % equipmentImages.length
        );
        startTimer(); // Reset timer
    };

    // Navigate to previous image
    const goToPrevious = () => {
        setCurrentImageIndex((prevIndex) => 
            (prevIndex - 1 + equipmentImages.length) % equipmentImages.length
        );
        startTimer(); // Reset timer
    };

    // Navigate to specific image (for dots)
    const goToImage = (index: number) => {
        setCurrentImageIndex(index);
        startTimer(); // Reset timer
    };

    // Handle mouse move for tooltip positioning
    const handleMouseMove = (e: React.MouseEvent) => {
        if (showTooltip) {
            setTooltipPosition({ x: e.clientX, y: e.clientY });
        }
    };

    // Handle mouse enter for images with links
    const handleMouseEnter = (e: React.MouseEvent) => {
        setTooltipPosition({ x: e.clientX, y: e.clientY });
        setShowTooltip(true);
    };

    // Handle mouse leave
    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <div className="w-full flex flex-col justify-center items-center mt-8 px-2 lg:px-4 relative">
            {/* Tooltip */}
            {showTooltip && (
                <div
                    className="fixed z-50 pointer-events-none"
                    style={{
                        left: `${tooltipPosition.x + 10}px`,
                        top: `${tooltipPosition.y + 10}px`,
                    }}
                >
                    <div className="bg-gray-800 text-white text-sm px-3 py-1.5 rounded shadow-lg">
                        Click to view
                    </div>
                </div>
            )}
            {/* Image Container with Sliding Animation */}
            <div className="w-full overflow-hidden rounded-lg shadow-sm relative">
                {/* Left Arrow Button */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white/95 backdrop-blur-sm rounded-r-lg px-3 py-16 shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer flex items-center justify-center"
                    aria-label="Previous image"
                >
                    <span className="text-gray-800 text-4xl font-bold select-none leading-none">&lt;</span>
                </button>
                
                {/* Right Arrow Button */}
                <button
                    onClick={goToNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white/95 backdrop-blur-sm rounded-l-lg px-3 py-16 shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer flex items-center justify-center"
                    aria-label="Next image"
                >
                    <span className="text-gray-800 text-4xl font-bold select-none leading-none">&gt;</span>
                </button>
                <div 
                    className="flex transition-transform duration-1000 ease-in-out"
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                    {equipmentImages.map((image, index) => {
                        const imageContent = (
                            <>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className={`w-full h-130 object-contain ${image.link ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''}`}
                                />
                                {/* Semi-transparent overlay with image name */}
                                <div className="absolute top-4 left-4 bg-gray-400/100 backdrop-blur-sm px-4 py-4 rounded-lg">
                                    <p className="text-white font-medium text-lg">
                                        {image.alt}
                                    </p>
                                </div>
                            </>
                        );

                        return (
                            <div 
                                key={index} 
                                className="relative w-full flex-shrink-0 p-4 lg:p-8"
                                onMouseMove={image.link ? handleMouseMove : undefined}
                                onMouseEnter={image.link ? handleMouseEnter : undefined}
                                onMouseLeave={image.link ? handleMouseLeave : undefined}
                            >
                                {image.link ? (
                                    <Link to={image.link}>
                                        {imageContent}
                                    </Link>
                                ) : (
                                    imageContent
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex gap-3 mt-6">
                {equipmentImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                            index === currentImageIndex 
                                ? 'bg-blue-600 w-8 shadow-lg shadow-blue-500/50' 
                                : 'bg-gray-300 w-3 hover:bg-blue-400 hover:scale-110 hover:shadow-md hover:w-4'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carousel;

