import React from 'react';

const ClientMarquee = () => {
    const logos = [
        { name: "UDIC", src: "/companies/ludic.svg" },
        { name: "ColorMetrics", src: "/companies/color-matrics.svg" },
        { name: "ROAMALY", src: "/companies/roamly.svg" },
        { name: "Ludic Kitchen", src: "/companies/ludic-kitchen.svg" },
        { name: "DS", src: "/companies/dreamload.svg" }
    ];

    return (
        <section className="client-marquee py-6 w-full overflow-hidden border-y border-gray-100" style={{ background: "#fafcff" }}>
            <div className="container mx-auto px-4 lg:px-8 max-w-[1620px]">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

                    {/* Left Side: Avatar & Clients Text */}
                    {/* <div className="flex items-center gap-4 shrink-0 bg-white/40 backdrop-blur-sm rounded-full py-2 px-4 border border-white/60 shadow-sm lg:ml-8 xl:ml-18"> */}
                    <div className="flex items-center gap-4 shrink-0 bg-white/40 backdrop-blur-sm rounded-full py-2 px-4 border border-white/60 shadow-sm">
                        <div className="flex -space-x-3">
                            <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="/avatar1.png" alt="Client 1" />
                            <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="/avatar2.png" alt="Client 2" />
                            <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="/avatar3.png" alt="Client 3" />
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-900 text-white flex items-center justify-center text-xs font-bold z-10 relative">
                                99+
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="font-bold text-gray-900 leading-tight">1000+ <span className="font-medium">Happy Clients</span></div>
                            <div className="text-xs text-gray-500">Trusted by brands worldwide</div>
                        </div>
                    </div>

                    {/* Right Side: Marquee Logos */}
                    <div className="flex-1 overflow-hidden relative w-full flex items-center">
                        {/* Gradient Masks for smooth fading on edges */}
                        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

                        <div className="flex items-center gap-16 animate-marquee w-max">
                            {/* Original Set */}
                            {logos.map((logo, idx) => (
                                <div key={idx} className="flex items-center justify-center shrink-0 mix-blend-multiply opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                    <img src={logo.src} alt={logo.name} className="h-8 md:h-10 object-contain max-w-[120px]" />
                                </div>
                            ))}
                            {/* Duplicate Set for infinite scroll effect */}
                            {logos.map((logo, idx) => (
                                <div key={`dup-${idx}`} className="flex items-center justify-center shrink-0 mix-blend-multiply opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                    <img src={logo.src} alt={logo.name} className="h-8 md:h-10 object-contain max-w-[120px]" />
                                </div>
                            ))}
                            {/* Triplicate Set for ultra-wide screens */}
                            {logos.map((logo, idx) => (
                                <div key={`trip-${idx}`} className="flex items-center justify-center shrink-0 mix-blend-multiply opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                    <img src={logo.src} alt={logo.name} className="h-8 md:h-10 object-contain max-w-[120px]" />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ClientMarquee;
