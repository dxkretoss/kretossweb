import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GlobalPresence() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        let ctx;
        const timer = setTimeout(() => {
            gsap.registerPlugin(ScrollTrigger);
            ctx = gsap.context(() => {
                // Title slide up
                gsap.fromTo(".global-title",
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1, y: 0, duration: 1, ease: "power4.out",
                        scrollTrigger: { trigger: ".global-title", start: "top 85%", toggleActions: "play none none reverse" }
                    }
                );

                // Map fade and scale
                gsap.fromTo(".global-map",
                    { opacity: 0, scale: 0.95 },
                    {
                        opacity: 1, scale: 1, duration: 1.5, ease: "power3.out", delay: 0.2,
                        scrollTrigger: { trigger: ".global-map", start: "top 80%", toggleActions: "play none none reverse" }
                    }
                );
            }, sectionRef.current);
        }, 100);

        return () => {
            clearTimeout(timer);
            if (ctx) ctx.revert();
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 text-center">

                <div className="global-title">
                    <div className="about-subtitle-box inline-flex items-center gap-2 bg-black/5 border border-black/10 px-4 py-2 rounded-full mb-6">
                        <img
                            src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe28879c_Star%2018%20(1).svg"
                            loading="lazy" alt="Star" className="subtitle-image-icon w-4 h-4"
                        />
                        <span className="text-[#ff6b35] text-sm font-semibold tracking-wider uppercase">Our Locations</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        We Are <span className="text-[#ff6b35]">World Wide</span>
                    </h2>
                </div>

                <div className="global-map relative mt-16 max-w-5xl mx-auto">
                    {/* Fallback styling for the map image */}
                    <div className="rounded-3xl border border-black/10 bg-white p-4 md:p-8 relative">
                        <img
                            src="/world-map.png"
                            alt="Global Presence Map"
                            className="w-full h-auto opacity-70 hover:opacity-100 transition-opacity duration-500"
                            onError={(e) => {
                                // Fallback if image doesn't exist yet
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                        {/* Placeholder text if image fails to load */}
                        <div className="hidden flex-col items-center justify-center py-20 text-black/30">
                            <svg className="w-16 h-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p>Global map visualization</p>
                        </div>
                    </div>
                    
                    {/* Glowing Accent behind map */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-[#ff6b35]/5 blur-[100px] -z-10 pointer-events-none"></div>
                </div>

            </div>
        </section>
    );
}