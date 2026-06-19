import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { processData } from '../../data/hire-us';
import Badge from '../ui/Badge';

gsap.registerPlugin(ScrollTrigger);

export default function DevelopmentProcess() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const steps = gsap.utils.toArray('.process-step');

            // Animate steps fading in
            gsap.fromTo(steps,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Animate timeline line drawing (desktop/tablet)
            const timelineLines = gsap.utils.toArray('.timeline-line-fill');
            if (timelineLines.length > 0) {
                gsap.fromTo(timelineLines,
                    { scaleX: 0 },
                    {
                        scaleX: 1,
                        duration: 1.5,
                        ease: "power2.inOut",
                        transformOrigin: "left center",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 70%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-10 lg:py-10 relative overflow-hidden bg-[#0a0a0a]">
            {/* Background glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0037f0] rounded-full blur-[150px] opacity-[0.05] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#44c7f6] rounded-full blur-[150px] opacity-[0.05] pointer-events-none"></div>

            <div className="container mx-auto max-w-7xl px-4 relative z-10">

                <div className="text-center mb-8 lg:mb-10 flex flex-col items-center">
                    <div className='mb-5'>
                        <Badge variant="white">How It Works</Badge>
                    </div>
                    <h2 className="text-[24px] lg:text-[36px] font-bold text-white tracking-tight mb-6">
                        Our Development Process
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        A streamlined, transparent workflow designed to get your project from concept to launch with maximum efficiency and quality.
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 lg:gap-y-16">
                        {processData.map((process, idx) => (
                            <div key={idx} className="process-step relative flex flex-col items-center text-center group lg:mt-0 mt-4">

                                {/* Connecting Line to Next Step */}
                                {((idx + 1) % 4 !== 0) && (
                                    <div className={`hidden absolute top-[48px] left-[50%] w-full h-[2px] bg-white/10 ${(idx + 1) % 2 === 0 ? 'sm:hidden lg:block' : 'sm:block'
                                        }`}>
                                        <div className="timeline-line-fill absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#44c7f6] to-[#0037f0] shadow-[0_0_15px_rgba(0,55,240,0.5)]" style={{ transform: 'scaleX(0)' }}></div>
                                    </div>
                                )}

                                {/* Step Circle */}
                                <div className="relative w-24 h-24 rounded-full bg-[#121212] border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.5)] flex items-center justify-center mb-6 z-10 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_15px_40px_rgb(0,55,240,0.25)]">
                                    <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-[#0037f0] transition-colors duration-500"></div>
                                    <span className="text-3xl font-black bg-gradient-to-br from-[#44c7f6] to-[#0037f0] text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(0,55,240,0.3)]">
                                        {process.step}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 px-2">{process.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed px-4">
                                    {process.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
