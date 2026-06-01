import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const milestones = [
    "Pro Web & App Developers",
    "Creative Impact Award",
    "Best UI Design Award",
    "Web Development Experts",
    "Top Mobile App Developers"
];

export default function TimelineSection() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        let ctx;
        const timer = setTimeout(() => {
            gsap.registerPlugin(ScrollTrigger);
            ctx = gsap.context(() => {
                // Title reveal
                gsap.fromTo(".timeline-title",
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1, y: 0, duration: 1, ease: "power4.out",
                        scrollTrigger: { trigger: ".timeline-title", start: "top 85%", toggleActions: "play none none reverse" }
                    }
                );

                // Star spin
                gsap.fromTo(".timeline-star",
                    { rotate: 0, scale: 0 },
                    {
                        rotate: 116.964, scale: 1, duration: 1.2, ease: "power4.out",
                        scrollTrigger: { trigger: ".timeline-title", start: "top 90%", toggleActions: "play none none reverse" }
                    }
                );

                // Milestones staggered entrance and line draw
                const items = gsap.utils.toArray(".timeline-item");
                
                // Scrubbing animation for the connecting line/highlight
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".timeline-list",
                        start: "top 60%",
                        end: "bottom 80%",
                        scrub: 1
                    }
                });

                items.forEach((item, index) => {
                    const line = item.querySelector(".timeline-line-fill");
                    const dot = item.querySelector(".timeline-dot");
                    
                    // Fade in the text item normally on scroll
                    gsap.fromTo(item, 
                        { opacity: 0, x: -30 }, 
                        { 
                            opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
                            scrollTrigger: { trigger: item, start: "top 85%", toggleActions: "play none none reverse" }
                        }
                    );

                    // Scrub the line fill and dot color
                    if (line) {
                        tl.to(line, { scaleY: 1, duration: 1, ease: "none" }, index);
                    }
                    if (dot) {
                        tl.to(dot, { backgroundColor: "#ff6b35", borderColor: "#ff6b35", duration: 0.2 }, index + 0.5);
                    }
                });

            }, sectionRef.current);
        }, 100);

        return () => {
            clearTimeout(timer);
            if (ctx) ctx.revert();
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-24 relative overflow-hidden">
            {/* Background Shape */}
            <div className="absolute right-0 top-1/3 w-[400px] h-[400px] bg-[#0e54f1]/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-4xl">
                
                <div className="timeline-title text-center mb-20">
                    <div className="about-subtitle-box inline-flex items-center gap-2 bg-black/5 border border-black/10 px-4 py-2 rounded-full mb-6">
                        <img
                            src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe28879c_Star%2018%20(1).svg"
                            loading="lazy" alt="Star" className="timeline-star subtitle-image-icon w-4 h-4"
                        />
                        <span className="text-[#ff6b35] text-sm font-semibold tracking-wider uppercase">Our Journey</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Our <span className="text-[#ff6b35]">Milestones</span>
                    </h2>
                </div>

                <div className="timeline-list relative">
                    {milestones.map((item, i) => {
                        const isLast = i === milestones.length - 1;
                        return (
                            <div key={item} className="timeline-item flex group">
                                {/* Vertical Line & Dot Column */}
                                <div className="flex flex-col items-center mr-8 relative">
                                    <div className="timeline-dot w-5 h-5 rounded-full border-2 border-black/20 bg-white z-10 transition-colors duration-300 group-hover:border-[#ff6b35]"></div>
                                    {!isLast && (
                                        <div className="w-[2px] flex-grow bg-black/10 relative">
                                            {/* The fill line that animates down */}
                                            <div className="timeline-line-fill absolute top-0 left-0 w-full h-full bg-[#ff6b35] origin-top scale-y-0"></div>
                                        </div>
                                    )}
                                </div>
                                
                                {/* Content Column */}
                                <div className="flex-grow flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-black/5 pb-10 mb-2">
                                    <h3 className="text-xl md:text-2xl font-semibold text-black group-hover:text-[#ff6b35] transition-colors duration-300">
                                        {item}
                                    </h3>
                                    <span className="text-black/50 font-mono text-sm mt-2 md:mt-0 px-4 py-1 rounded-full bg-black/5 border border-black/10">
                                        Year {2020 + i}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}