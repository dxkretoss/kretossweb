import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const values = [
    {
        title: "Development",
        desc: "Our growth work process is designed to ensure sustainable and measurable",
    },
    {
        title: "Team Work",
        desc: "Our Team work process is designed to ensure sustainable and measurable",
    },
    {
        title: "Innovation",
        desc: "Our Innovation process is designed to ensure sustainable and measurable success",
    },
    {
        title: "Precision",
        desc: "Our Precision process is designed to ensure sustainable and measurable",
    },
    {
        title: "Adaptability",
        desc: "Our Adaptability process is designed to ensure sustainable and measurable",
    },
    {
        title: "Execution",
        desc: "Our Excution is designed to ensure sustainable and measurable success",
    },
];

export default function CoreValues() {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let ctx = gsap.context(() => {
            cardsRef.current.forEach((card, idx) => {
                if (!card) return;

                // The initial states are set via inline styles, but GSAP takes over here
                // We animate them to scale 1 and rotateY 0
                gsap.to(card, {
                    rotateY: 0,
                    scale: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom", // Starts animating exactly when the section enters the bottom of the screen
                        end: "center center", // Reaches 0 exactly at center
                        scrub: 1, // Ties animation smoothly to scrollbar
                    }
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="container bg-[#0c0c0c] text-white py-20 px-6 md:px-12 relative overflow-hidden">
            <div className="flex flex-col items-center relative z-10">

                {/* Header */}
                <div className="flex flex-col items-center mb-16 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/10 mb-6">
                        <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887be_Star%2018.svg"
                            alt="Star"
                            className="w-3 h-3 animate-[spin_4s_linear_infinite]"
                        />

                        <span className="text-xs text-gray-300 font-medium tracking-widest uppercase mt-0.5">
                            Core values
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight">
                        What Are Our Core Values
                    </h2>
                </div>

                {/* Cards */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {values.map((val, idx) => {
                        const position =
                            idx % 3 === 0
                                ? "left"
                                : idx % 3 === 1
                                    ? "center"
                                    : "right";

                        return (
                            <div
                                key={idx}
                                ref={(el) => (cardsRef.current[idx] = el)}
                                className="group relative border border-white/10 rounded-2xl md:p-6 overflow-hidden transition-colors transition-shadow duration-500 hover:border-white/20 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.05)] cursor-pointer will-change-transform"
                                style={{
                                    backgroundImage: `url('/about/card-bg.png')`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    transformStyle: "preserve-3d",
                                    transform:
                                        position === "left"
                                            ? "perspective(1400px) rotateY(30deg) scale(0.8)"
                                            : position === "right"
                                                ? "perspective(1400px) rotateY(-30deg) scale(0.8)"
                                                : "perspective(1400px) rotateY(0deg) scale(0.8)",
                                }}
                            >
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 -z-10"></div>

                                {/* Icon */}
                                <div className="mb-4">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69c90d3846893a3b52616a9a_shape.svg"
                                        alt="Star Icon"
                                        className="w-8 h-8 mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
                                    />

                                    <div className="w-full h-px bg-gradient-to-r from-white/20 to-transparent"></div>
                                </div>

                                {/* Text */}
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold tracking-wide mb-4 text-white uppercase group-hover:text-blue-200 transition-colors duration-300">
                                        {val.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed pr-4 group-hover:text-gray-300 transition-colors duration-300">
                                        {val.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}