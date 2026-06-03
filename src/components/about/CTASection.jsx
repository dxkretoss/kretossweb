import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        let ctx;
        const timer = setTimeout(() => {
            gsap.registerPlugin(ScrollTrigger);
            ctx = gsap.context(() => {
                // CTA Box Reveal
                gsap.fromTo(".cta-box",
                    { opacity: 0, scale: 0.95, y: 40 },
                    {
                        opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power4.out",
                        scrollTrigger: { trigger: ".cta-box", start: "top 85%", toggleActions: "play none none reverse" }
                    }
                );

                // Text slide up
                gsap.fromTo(".cta-text",
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.3,
                        scrollTrigger: { trigger: ".cta-box", start: "top 85%", toggleActions: "play none none reverse" }
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
        <section ref={sectionRef} className="py-24 relative px-6">
            <div className="container mx-auto max-w-5xl">
                <div className="cta-box rounded-3xl p-12 md:p-20 text-center border border-black/10 bg-gradient-to-br from-[#161616] to-[#0c0c0c] shadow-2xl relative overflow-hidden group">

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#ff6b35]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                    <div className="relative z-10">
                        <div className="cta-text about-subtitle-box inline-flex items-center gap-2 bg-black/5 border border-black/10 px-4 py-2 rounded-full mb-8">
                            <span className="text-[#ff6b35] text-sm font-semibold tracking-wider uppercase">Get In Touch</span>
                        </div>

                        <h2 className="cta-text text-4xl md:text-6xl font-bold leading-tight">
                            READY TO START A <br className="hidden md:block" />
                            <span className="text-[#ff6b35]">PROJECT?</span>
                        </h2>

                        <div className="cta-text mt-12">
                            <a
                                href="https://calendly.com/ankur-k-kretoss/30min"
                                target="_blank"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.hash = '#home';
                                    setTimeout(() => {
                                        const el = document.getElementById('Contact');
                                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                                    }, 100);
                                }}
                                className="inline-flex items-center gap-3 px-10 py-5 bg-[#ff6b35] hover:bg-[#e55a25] text-black font-semibold text-lg rounded-xl transition-all duration-300 hover:shadow-[0_8px_32px_rgba(255,107,53,0.35)] hover:-translate-y-1"
                            >
                                BOOK A CALL
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                                    <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Decorative Star Background */}
                    <img
                        src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69aeb31a38bdebd46ea4e4eb_Group%202087325413.svg"
                        alt="Decorative Star"
                        className="absolute -bottom-10 -right-10 w-64 h-64 opacity-[0.03] group-hover:opacity-[0.06] group-hover:rotate-12 transition-all duration-700 pointer-events-none"
                    />
                </div>
            </div>
        </section>
    );
}