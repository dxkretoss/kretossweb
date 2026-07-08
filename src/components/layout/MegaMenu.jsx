import React, { forwardRef } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { hireUsData } from '../../data/hireus';

const MegaMenu = forwardRef(({ isOpen, onClose, position = 'top', onMouseEnter, onMouseLeave }, ref) => {
    const categories = ["Frontend Developers", "Backend Developers", "Mobile App Developers", "Web Developer", "Full Stack Developers"];

    const isTop = position === 'top';

    const containerClasses = isTop
        ? `fixed top-[80px] lg:top-[90px] bottom-[20px] lg:bottom-auto lg:max-h-[calc(100vh-100px)] left-0 right-0 max-w-[95%] xl:max-w-[1400px] mx-auto bg-[#fafcff] border border-blue-100 rounded-md pt-8 pb-8 shadow-[0_30px_80px_rgba(0,55,240,0.08)] transition-all duration-300 z-50 overflow-y-auto overflow-x-hidden overscroll-contain [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${isOpen ? 'opacity-100 visible pointer-events-auto translate-y-2' : 'opacity-0 invisible pointer-events-none translate-y-0'}`
        : `fixed bottom-[70px] left-1/2 -translate-x-1/2 w-screen max-h-[calc(100vh-120px)] max-w-[95%] xl:max-w-[1400px] bg-[#fafcff] border border-blue-100 rounded-md pt-8 pb-8 shadow-[0_-30px_80px_rgba(0,55,240,0.08)] transition-all duration-300 z-50 overflow-y-auto overflow-x-hidden overscroll-contain [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${isOpen ? 'opacity-100 visible pointer-events-auto -translate-y-2' : 'opacity-0 invisible pointer-events-none translate-y-0'}`;

    const bridgeClasses = isTop
        ? "absolute -top-10 left-0 w-full h-10 bg-transparent"
        : "absolute -bottom-10 left-0 w-full h-10 bg-transparent";

    return (
        <>
            {/* Backdrop Overlay */}
            <div
                className={`fixed inset-0 ${isTop ? 'top-[80px] lg:top-[90px]' : ''} bg-black/60 backdrop-blur-sm z-40 transition-all duration-300 ${isOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}
                style={!isTop ? { bottom: '-2rem', left: '-50vw', right: '-50vw', top: '-100vh' } : {}}
                onClick={onClose}
            ></div>

            <div
                ref={ref}
                className={containerClasses}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <div className={bridgeClasses}></div>

                <div className="container mx-auto px-8 md:px-12 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 text-left">
                        {categories.map(cat => {
                            const categoryRoles = hireUsData.filter(r => r.category === cat);
                            if (categoryRoles.length === 0) return null;
                            return (
                                <div key={cat} className="flex flex-col">
                                    <h4 className="text-[#0a1520]/80 text-[12px] font-black uppercase tracking-[0.2em] border-b border-[#0037f0]/10 pb-3 mb-5">{cat}</h4>
                                    <ul className="space-y-0.5">
                                        {categoryRoles.map(role => (
                                            <li key={role.slug}>
                                                <a href={`/hire-us/${role.slug}`} className="flex items-center gap-3 p-1.5 -ml-1.5 rounded-lg hover:bg-gradient-to-r hover:from-white hover:to-[#f0f7ff] border border-transparent hover:border-[#44c7f6]/20 hover:shadow-sm transition-all duration-300 group relative overflow-hidden pr-3">
                                                    <div className="relative w-8 h-8 shrink-0 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-100 group-hover:border-[#44c7f6]/40 group-hover:shadow-[0_2px_10px_rgba(68,199,246,0.15)] transition-all duration-300 z-10">
                                                        <img src={role.icon} alt="" className="w-4 h-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-300" />
                                                    </div>
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
        </>
    );
});

export default MegaMenu;
