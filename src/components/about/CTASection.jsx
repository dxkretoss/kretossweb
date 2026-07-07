import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedButton from '../ui/AnimatedButton';

export default function CtaSection() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let ctx = gsap.context(() => {
            gsap.fromTo(".cta-content",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="w-full bg-[#0c0c0c] text-white py-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden" ref={sectionRef}>
            {/* Background Glow */}
            <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-[#0037f0] opacity-40 blur-[100px] rounded-full pointer-events-none z-0"></div>

            {/* Modern Grid Background */}
            <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_100%,#000_20%,transparent_100%)]"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center cta-content">
                <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-semibold tracking-tight mb-4 uppercase text-white leading-tight">
                    Ready to start a project?
                </h2>
                <p className="text-gray-400 text-sm sm:text-base mb-8 sm:mb-10 tracking-wide max-w-[280px] sm:max-w-none mx-auto">
                    Ready to Partner with Kretoss & unlock the full potential?
                </p>

                {/* Button */}
                <AnimatedButton
                    text="LET'S TALK"
                    href="/contact"
                />

            </div>
        </section>
    );
}