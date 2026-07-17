import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Badge from "../ui/Badge";

const values = [
    // {
    //     title: "Development",
    //     desc: "Our growth work process is designed to ensure sustainable and measurable",
    // },
    {
        title: "AI-FIRST THINKING",
        desc: "We embrace AI to create smarter, faster, and more impactful solutions.",
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

        let mm = gsap.matchMedia();

        // Desktop Animation (3D Grid Tilt)
        mm.add("(min-width: 1024px)", () => {
            cardsRef.current.forEach((card, idx) => {
                if (!card) return;
                const position = idx % 3 === 0 ? "left" : idx % 3 === 1 ? "center" : "right";

                // Set initial perspective on the parent wrapper if needed, or directly on element via GSAP
                gsap.set(card, { transformPerspective: 1400 });

                gsap.fromTo(card,
                    {
                        rotationY: position === "left" ? 30 : position === "right" ? -30 : 0,
                        scale: 0.8
                    },
                    {
                        rotationY: 0,
                        scale: 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top bottom",
                            end: "center center",
                            scrub: 1,
                        }
                    }
                );
            });
        });

        // Mobile & Tablet Animation (Slide Up Fade)
        mm.add("(max-width: 1023px)", () => {
            cardsRef.current.forEach((card) => {
                if (!card) return;

                gsap.fromTo(card,
                    { scale: 0.9, opacity: 0.2, y: 50 },
                    {
                        scale: 1,
                        opacity: 1,
                        y: 0,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 95%",
                            end: "top 70%",
                            scrub: 1,
                        }
                    }
                );
            });
        });

        return () => mm.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-[#0c0c0c] text-white py-10 lg:py-20 relative overflow-hidden">
            <div className="container w-layout-blockcontainer container-full-width mx-auto flex flex-col items-center relative z-10">

                {/* Header */}
                <div className="flex flex-col items-center mb-8 lg:mb-16 text-center">

                    <div className="mb-5">
                        <Badge variant="white">Core values</Badge>
                    </div>

                    <h2 className="text-[28px] lg:text-[36px] font-semibold tracking-tight">
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
                                className="group relative border border-white/10 rounded-2xl p-6 sm:p-8 overflow-hidden transition-colors transition-shadow duration-500 hover:border-white/20 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.05)] cursor-pointer will-change-transform"
                                style={{
                                    backgroundImage: `url('/about/card-bg.png')`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    transformStyle: "preserve-3d"
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