import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const logos = [
    "LUDIC", "ColorMetrics", "ROAMALY", "DreamLab", "Affect",
    "LUDIC", "ColorMetrics", "ROAMALY", "DreamLab", "Affect"
];

export default function ClientLogos() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Infinite marquee scroll
            gsap.to(".about-client-ticker", {
                xPercent: -50,
                ease: "none",
                duration: 25,
                repeat: -1,
            });

            // Fade-in on scroll
            gsap.fromTo(sectionRef.current,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, sectionRef.current);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-6 overflow-hidden">
            <div className="about-client-ticker flex gap-16 whitespace-nowrap items-center" style={{ width: "max-content" }}>
                {logos.map((logo, i) => (
                    <React.Fragment key={i}>
                        <span className="text-black/30 hover:text-[#ff6b35] text-xl font-semibold tracking-wider uppercase transition-colors duration-300 cursor-default">
                            {logo}
                        </span>
                        <img
                            src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe28879c_Star%2018%20(1).svg"
                            alt="separator" className="w-3 h-3 opacity-30"
                        />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}