import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ArrowRight, ChevronRight } from 'lucide-react';
import { hireUsData } from '../../data/hireus';

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

    useEffect(() => {
        if (isMegaMenuOpen) {
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
            if (window.lenis) window.lenis.stop();
        } else {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
            if (window.lenis) window.lenis.start();
        }
        return () => {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
            if (window.lenis) window.lenis.start();
        };
    }, [isMegaMenuOpen]);

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
            className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-max transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
        >
            <div className="relative w-max mx-auto">
                {/* 4 Corner White Dots */}
                <div className="absolute top-2 left-2 w-[4px] h-[4px] bg-white rounded-sm z-10"></div>
                <div className="absolute top-2 right-2 w-[4px] h-[4px] bg-white rounded-sm z-10"></div>
                <div className="absolute bottom-2 left-2 w-[4px] h-[4px] bg-white rounded-sm z-10"></div>
                <div className="absolute bottom-2 right-2 w-[4px] h-[4px] bg-white rounded-sm z-10"></div>

                <div className="bg-[#0c0c0c]/90 backdrop-blur-lg border border-white/10 rounded-md px-8 py-3 flex flex-row flex-nowrap items-center justify-center space-x-6 shadow-2xl overflow-x-visible no-scrollbar">
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
                    <div
                        className="relative flex items-center"
                        onMouseEnter={handleMegaMenuEnter}
                        onMouseLeave={handleMegaMenuLeave}
                    >
                        <button
                            onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                            className={`flex items-center gap-1 text-base font-medium transition-colors whitespace-nowrap ${location.pathname.includes('/hire-us') ? 'text-[#44c7f6]' : 'text-gray-300 hover:text-white'}`}
                        >
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#44c7f6] to-[#0037f0]">Hire Us!</span>
                            <ChevronDown className={`w-4 h-4 text-[#44c7f6] transition-transform duration-300 ${isMegaMenuOpen ? "rotate-180" : ""}`} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Fixed Backdrop and Menu (Outside of relative wrapper so it's not constrained) */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[-1] transition-all duration-300 ${isMegaMenuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}
                style={{ bottom: '-2rem', left: '-50vw', right: '-50vw', top: '-100vh' }}
                onClick={() => setIsMegaMenuOpen(false)}
            ></div>

            <div
                ref={megaMenuRef}
                className={`fixed bottom-[70px] left-1/2 -translate-x-1/2 w-screen max-h-[calc(100vh-120px)] max-w-[95%] xl:max-w-[1400px] bg-[#fafcff] border border-blue-100 rounded-md pt-8 pb-8 shadow-[0_-30px_80px_rgba(0,55,240,0.08)] transition-all duration-300 z-50 overflow-hidden overscroll-contain ${isMegaMenuOpen ? 'opacity-100 visible pointer-events-auto -translate-y-2' : 'opacity-0 invisible pointer-events-none translate-y-0'}`}
                onMouseEnter={handleMegaMenuEnter}
                onMouseLeave={handleMegaMenuLeave}
            >
                {/* Transparent hover bridge */}
                <div className="absolute -bottom-10 left-0 w-full h-10 bg-transparent"></div>

                <div className="container mx-auto px-8 md:px-12 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-x-8 gap-y-10 text-left">
                        {categories.map(cat => {
                            const categoryRoles = hireUsData.filter(r => r.category === cat);
                            if (categoryRoles.length === 0) return null;
                            return (
                                <div key={cat} className="flex flex-col">
                                    <h4 className="text-[#0a1520]/80 text-[12px] font-black uppercase tracking-[0.2em] border-b border-[#0037f0]/10 pb-3 mb-5">{cat}</h4>
                                    <ul className="space-y-2">
                                        {categoryRoles.map(role => (
                                            <li key={role.slug}>
                                                <a href={`/hire-us/${role.slug}`} className="flex items-center gap-4 p-2.5 -ml-2.5 rounded-xl hover:bg-white border border-transparent hover:border-[#44c7f6]/15 hover:shadow-[0_4px_20px_-5px_rgba(68,199,246,0.15)] transition-all duration-300 group relative overflow-hidden pr-4">
                                                    <div className="relative w-10 h-10 shrink-0 flex items-center justify-center bg-white rounded-xl border border-gray-100 group-hover:border-[#44c7f6]/40 group-hover:shadow-[0_0_15px_rgba(68,199,246,0.2)] transition-all duration-300 z-10">
                                                        <img src={role.icon} alt="" className="w-5 h-5 opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                                                    </div>
                                                    <span className="relative whitespace-nowrap text-[#0a1520] font-bold text-[13.5px] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0037f0] group-hover:to-[#44c7f6] transition-colors z-10 flex-1">{role.title.replace('Hire ', '')}</span>
                                                    <ArrowRight className="w-4 h-4 text-[#0037f0] opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 relative z-10 shrink-0" />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom Section */}
                    <div className="w-full h-[2px] bg-gradient-to-r from-[#0037f0] to-[#44c7f6] mt-10 mb-6 rounded-full opacity-80"></div>
                    <div className="flex flex-wrap items-center justify-start gap-x-8 gap-y-4">
                        {[
                            { text: "Hire Frontend Developer", href: "/hire-us/hire-frontend-developer" },
                            { text: "Hire Backend Developer", href: "/hire-us/hire-backend-developer" },
                            { text: "Hire Mobile APP Developer", href: "/hire-us/hire-mobile-app-developer" },
                            { text: "Hire Data Analytics", href: "/hire-us/hire-data-analytics" },
                            { text: "Hire Cloud Infrastructure", href: "/hire-us/hire-cloud-infrastructure" },
                            { text: "Hire CMS Developer", href: "/hire-us/hire-cms-developer" }
                        ].map(link => (
                            <a key={link.text} href={link.href} className="group flex items-center gap-1 text-[13.5px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0037f0] to-[#44c7f6] hover:scale-105 transition-all duration-300">
                                <ChevronRight className="w-4 h-4 text-[#0037f0]" />
                                <span>{link.text}</span>
                                <ArrowRight className="w-4 h-4 text-[#44c7f6] opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-1 transition-all duration-300" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
