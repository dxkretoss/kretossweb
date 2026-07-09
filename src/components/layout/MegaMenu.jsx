import React, { forwardRef } from 'react';
import { ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import { hireUsData } from '../../data/hireus';

const MegaMenu = forwardRef(({ isOpen, onClose, position = 'top', onMouseEnter, onMouseLeave }, ref) => {
    const categories = ["Frontend Developers", "Backend Developers", "Mobile App Developers", "Web Developer", "Full Stack Developers"];

    const isTop = position === 'top';

    // Original Desktop Container (hidden on mobile)
    const desktopContainerClasses = isTop
        ? `hidden lg:block fixed top-[80px] lg:top-[90px] bottom-[20px] lg:bottom-auto lg:max-h-[calc(100vh-100px)] left-0 right-0 max-w-[95%] xl:max-w-[1400px] mx-auto bg-[#fafcff] border border-blue-100 rounded-md pt-5 pb-5 shadow-[0_30px_80px_rgba(0,55,240,0.08)] transition-all duration-300 z-50 overflow-y-auto overflow-x-hidden overscroll-contain [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${isOpen ? 'opacity-100 visible pointer-events-auto translate-y-2' : 'opacity-0 invisible pointer-events-none translate-y-0'}`
        : `hidden lg:block fixed bottom-[70px] left-1/2 -translate-x-1/2 w-screen max-h-[calc(100vh-120px)] max-w-[95%] xl:max-w-[1400px] bg-[#fafcff] border border-blue-100 rounded-md pt-5 pb-5 shadow-[0_-30px_80px_rgba(0,55,240,0.08)] transition-all duration-300 z-50 overflow-y-auto overflow-x-hidden overscroll-contain [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${isOpen ? 'opacity-100 visible pointer-events-auto -translate-y-2' : 'opacity-0 invisible pointer-events-none translate-y-0'}`;

    // New Mobile Container: fixed overlay below the header, touches both sides, has native scrollbar
    const mobileContainerClasses = `lg:hidden fixed top-[75px] bottom-0 left-0 right-0 w-full bg-[#fafcff] z-[60] overflow-y-auto overflow-x-hidden transition-all duration-300 ${isOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-8'}`;

    const bridgeClasses = isTop
        ? "absolute -top-10 left-0 w-full h-10 bg-transparent hidden lg:block"
        : "absolute -bottom-10 left-0 w-full h-10 bg-transparent hidden lg:block";

    const MenuContent = () => (
        <div className="container mx-auto px-6 py-2 md:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-6 text-left">
                {categories.map(cat => {
                    const categoryRoles = hireUsData.filter(r => r.category === cat);
                    if (categoryRoles.length === 0) return null;
                    return (
                        <div key={cat} className="flex flex-col">
                            <h4 className="text-[#0a1520]/80 text-[11px] font-black uppercase tracking-[0.15em] border-b border-[#0037f0]/10 pb-2 mb-3">{cat}</h4>
                            <ul className="space-y-0">
                                {categoryRoles.map(role => (
                                    <li key={role.slug}>
                                        <a href={`/hire-us/${role.slug}`} className="flex items-center gap-2 py-1 px-1.5 -ml-1.5 rounded-lg hover:bg-gradient-to-r hover:from-white hover:to-[#f0f7ff] border border-transparent hover:border-[#44c7f6]/20 hover:shadow-sm transition-all duration-300 group relative overflow-hidden pr-3">
                                            {/* ICON */}
                                            <div className="relative w-8 h-8 shrink-0 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-100 group-hover:border-[#44c7f6]/40 group-hover:shadow-[0_2px_10px_rgba(68,199,246,0.15)] transition-all duration-300 z-10">
                                                <img src={role.icon} alt="" className="w-4 h-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-300" />
                                            </div>
                                            
                                            {/* TEXT WITHOUT "Hire" */}
                                            <span className="relative whitespace-nowrap text-[#0a1520]/80 font-semibold text-[13px] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0037f0] group-hover:to-[#44c7f6] transition-colors z-10 flex-1">{role.title.replace('Hire ', '')}</span>
                                            
                                            <ArrowRight className="w-3.5 h-3.5 text-[#0037f0] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 relative z-10 shrink-0" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>

            {/* Bottom Section */}
            <div className="w-full h-[1px] bg-gradient-to-r from-[#0037f0] to-[#44c7f6] mt-6 mb-4 rounded-full opacity-50"></div>
            <div className="flex flex-wrap items-center justify-start gap-x-6 gap-y-3 pb-8 lg:pb-0">
                {[
                    { text: "Hire Frontend Developer", href: "/hire-us/hire-frontend-developer" },
                    { text: "Hire Backend Developer", href: "/hire-us/hire-backend-developer" },
                    { text: "Hire Mobile APP Developer", href: "/hire-us/hire-mobile-app-developer" },
                    { text: "Hire Data Analytics", href: "/hire-us/hire-data-analytics" },
                    { text: "Hire Cloud Infrastructure", href: "/hire-us/hire-cloud-infrastructure" },
                    { text: "Hire CMS Developer", href: "/hire-us/hire-cms-developer" }
                ].map(link => (
                    <a key={link.text} href={link.href} className="group flex items-center gap-1 text-[12.5px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0037f0] to-[#44c7f6] hover:scale-105 transition-all duration-300">
                        <ChevronRight className="w-3.5 h-3.5 text-[#0037f0]" />
                        <span>{link.text}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#44c7f6] opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-1 transition-all duration-300" />
                    </a>
                ))}
            </div>
        </div>
    );

    return (
        <>
            {/* Backdrop Overlay (Desktop Only) */}
            <div
                className={`hidden lg:block fixed inset-0 ${isTop ? 'top-[80px] lg:top-[90px]' : ''} bg-black/60 backdrop-blur-sm z-40 transition-all duration-300 ${isOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}
                style={!isTop ? { bottom: '-2rem', left: '-50vw', right: '-50vw', top: '-100vh' } : {}}
                onClick={onClose}
            ></div>

            {/* Desktop Mega Menu */}
            <div
                ref={ref}
                className={desktopContainerClasses}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <div className={bridgeClasses}></div>
                <MenuContent />
            </div>

            {/* Mobile Mega Menu */}
            <div
                className={mobileContainerClasses}
                data-lenis-prevent="true"
                onTouchMove={(e) => e.stopPropagation()}
                onWheel={(e) => e.stopPropagation()}
            >
                <div className="sticky top-0 z-20 bg-[#fafcff] border-b border-gray-200">
                    <button
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); onClose(); }}
                        className="flex items-center gap-2 p-4 w-full text-left font-bold text-[#0a1520] hover:text-[#0037f0] transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5" /> Back to Menu
                    </button>
                </div>
                <MenuContent />
            </div>
        </>
    );
});

export default MegaMenu;
