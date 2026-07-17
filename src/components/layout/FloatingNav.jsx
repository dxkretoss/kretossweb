import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ArrowRight, ChevronRight } from 'lucide-react';
import { hireUsData } from '../../data/hireus';
import MegaMenu from './MegaMenu';
import { BookCallButton } from './Header';

export default function FloatingNav() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const location = useLocation();
    const megaMenuRef = useRef(null);
    let hideTimer = useRef(null);

    const categories = ["App Developers", "Frontend Developers", "Backend Developers", "Web Developer"];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
                setIsMegaMenuOpen(false); // Close menu when nav hides
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // useEffect(() => {
    //     if (isMegaMenuOpen) {
    //         document.documentElement.style.overflow = 'hidden';
    //         document.body.style.overflow = 'hidden';
    //         if (window.lenis) window.lenis.stop();
    //     } else {
    //         document.documentElement.style.overflow = '';
    //         document.body.style.overflow = '';
    //         if (window.lenis) window.lenis.start();
    //     }
    //     return () => {
    //         document.documentElement.style.overflow = '';
    //         document.body.style.overflow = '';
    //         if (window.lenis) window.lenis.start();
    //     };
    // }, [isMegaMenuOpen]);

    const getLinkClass = (path) => {
        const isActive = location.pathname === path;
        return `text-base font-medium transition-colors whitespace-nowrap ${isActive ? 'text-[#44c7f6]' : 'text-gray-300 hover:text-white'}`;
    };

    const handleMegaMenuEnter = () => {
        if (hideTimer.current) clearTimeout(hideTimer.current);
        setIsMegaMenuOpen(true);
    };

    const handleMegaMenuLeave = () => {
        hideTimer.current = setTimeout(() => {
            setIsMegaMenuOpen(false);
        }, 300);
    };

    return (
        <div
            className={`fixed bottom-8 left-0 right-0 w-full z-[100] transition-all duration-500 ease-in-out pointer-events-none flex items-center justify-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            {/* Screen Centered Menu */}
            <div className="relative w-max z-[60] pointer-events-auto">
                {/* 4 Corner White Dots */}
                <div className="absolute top-2 left-2 w-[4px] h-[4px] bg-white rounded-sm z-10"></div>
                <div className="absolute top-2 right-2 w-[4px] h-[4px] bg-white rounded-sm z-10"></div>
                <div className="absolute bottom-2 left-2 w-[4px] h-[4px] bg-white rounded-sm z-10"></div>
                <div className="absolute bottom-2 right-2 w-[4px] h-[4px] bg-white rounded-sm z-10"></div>

                <div className="h-[44px] bg-[#0c0c0c]/90 backdrop-blur-lg border border-white/10 rounded-md px-8 py-3 flex flex-row flex-nowrap items-center justify-center space-x-6 shadow-2xl overflow-x-visible no-scrollbar">
                    <Link to="/" className={getLinkClass('/')}>
                        Home
                    </Link>
                    <Link to="/about" className={getLinkClass('/about')}>
                        About Us
                    </Link>
                    <Link to="/services" className={getLinkClass('/services')}>
                        Services
                    </Link>
                    <Link to="/portfolio" className={getLinkClass('/portfolio')}>
                        Portfolio
                    </Link>
                    <Link to="/careers" className={getLinkClass('/careers')}>
                        Careers
                    </Link>

                    {/* Hire Us Mega Menu Trigger */}
                    {/* 
                    <div
                        className="relative flex items-center"
                        onMouseEnter={handleMegaMenuEnter}
                        onMouseLeave={handleMegaMenuLeave}
                    >
                        <button
                            onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                            className={`flex items-center gap-1 text-base font-medium transition-colors whitespace-nowrap ${location.pathname.includes('/hire-us') ? 'text-[#44c7f6]' : 'text-gray-300 hover:text-white'}`}
                        >
                            <span className="text-transparent bg-clip-text  bg-[linear-gradient(110deg,#3eb9f5,45%,#ffffff,55%,#3eb9f5)] animate-shine">Hire Us!</span>
                            <ChevronDown className={`w-4 h-4 text-[#44c7f6] transition-transform duration-300 ${isMegaMenuOpen ? "rotate-180" : ""}`} />
                        </button>
                    </div> 
                    */}
                    <Link to="/hire-us" className={`flex items-center gap-1 text-base font-medium transition-colors whitespace-nowrap ${location.pathname === '/hire-us' ? 'text-[#44c7f6]' : 'text-gray-300 hover:text-white'}`}>
                        <span className="text-transparent bg-clip-text  bg-[linear-gradient(110deg,#3eb9f5,45%,#ffffff,55%,#3eb9f5)] animate-shine">Hire Us!</span>
                    </Link>
                </div>
            </div>

            <MegaMenu
                ref={megaMenuRef}
                isOpen={isMegaMenuOpen}
                onClose={() => setIsMegaMenuOpen(false)}
                position="bottom"
                onMouseEnter={handleMegaMenuEnter}
                onMouseLeave={handleMegaMenuLeave}
            />

            {/* Button inside max-w overlay */}
            <div className="hidden lg:block absolute inset-0 w-full h-full flex items-center pointer-events-none">
                <div className="w-layout-blockcontainer container-full-width w-container mx-auto relative w-full h-full flex items-center">
                    <div className="absolute right-0 lg:right-5 pointer-events-auto flex items-center">
                        <div className="scale-75 origin-right sm:scale-90 md:scale-100">
                            <BookCallButton />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
