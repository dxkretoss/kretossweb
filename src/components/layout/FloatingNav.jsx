import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function FloatingNav() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show the floating nav when scrolled down past 200px (approx height of top header)
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
        >
            <div className="relative w-max mx-auto">
                {/* 4 Corner White Dots */}
                <div className="absolute top-2 left-2 w-[4px] h-[4px] bg-white rounded-sm z-10"></div>
                <div className="absolute top-2 right-2 w-[4px] h-[4px] bg-white rounded-sm z-10"></div>
                <div className="absolute bottom-2 left-2 w-[4px] h-[4px] bg-white rounded-sm z-10"></div>
                <div className="absolute bottom-2 right-2 w-[4px] h-[4px] bg-white rounded-sm z-10"></div>

                <nav className="bg-[#0c0c0c]/90 backdrop-blur-lg border border-white/10 rounded-md px-8 py-3 flex flex-row items-center justify-center space-x-6 shadow-2xl overflow-x-auto no-scrollbar">
                    <Link to="/" className="text-base font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap">
                        Home
                    </Link>
                    <Link to="/about" className="text-base font-medium text-[#44c7f6] hover:text-white transition-colors whitespace-nowrap">
                        About Us
                    </Link>
                    <Link to="#" className="text-base font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap">
                        Services
                    </Link>
                    <Link to="#" className="text-base font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap">
                        Portfolio
                    </Link>
                    <Link to="#" className="text-base font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap">
                        Careers
                    </Link>
                </nav>
            </div>
        </div>
    );
}
