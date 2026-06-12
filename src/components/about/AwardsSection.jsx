import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const awards = [
    {
        title: "Pro Web & App Developers",
        desc: "Web & App Developers",
        year: "2020",
        image: "/awards/award-cup-1.png"
    },
    {
        title: "Creative Impact Award",
        desc: "Brand Identity & Design",
        year: "2024",
        image: "/awards/award-cup-2.png"
    },
    {
        title: "Best UI Design Award",
        desc: "Web and Mobile Design",
        year: "2022",
        image: "/awards/award-cup-3.png"
    },
    {
        title: "Web Development Experts",
        desc: "Web GURU",
        year: "2023",
        image: "/awards/award-cup-4.png"
    },
    {
        title: "Top Mobile App Developers",
        desc: "The Genuine Quality",
        year: "2024",
        image: "/awards/award-cup-5.png"
    }
];

export default function AwardsSection() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let ctx = gsap.context(() => {
            gsap.fromTo(".award-header",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                }
            );
            gsap.fromTo(".award-row",
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".award-list",
                        start: "top 85%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className=" container bg-[#fafcff] text-gray-900 py-20 px-6 md:px-12 relative overflow-hidden" ref={sectionRef}>
            <div className=" mx-auto relative z-10 flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-12">

                {/* Left Side: Text and List */}
                <div className="flex-1 w-full lg:max-w-[65%]">
                    {/* Header */}
                    <div className="award-header flex flex-col items-start mb-16 text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-black/5 border border-black/10 mb-6">
                            <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887be_Star%2018.svg"
                                alt="Star"
                                className="w-3 h-3 animate-[spin_4s_linear_infinite]"
                            />
                            <span className="text-xs text-gray-600 font-medium tracking-widest uppercase mt-0.5">Awards</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">Our Milestones</h2>
                    </div>

                    {/* Awards List */}
                    <div className="award-list flex flex-col w-full">
                        {awards.map((award, idx) => (
                            <div
                                key={idx}
                                className="award-row group relative flex items-center justify-between py-6 border-b border-black/10 hover:border-black/30 transition-colors duration-500 cursor-pointer"
                            >
                                {/* Left: Text */}
                                <div className="flex flex-col gap-2 relative z-20">
                                    <h3 className="text-xl md:text-2xl font-bold tracking-wide text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                        {award.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm md:text-base">
                                        {award.desc}
                                    </p>
                                </div>

                                {/* Right: Year */}
                                <div className="relative z-20">
                                    <span className="text-gray-500 text-sm md:text-base tracking-widest">
                                        Year: {award.year}
                                    </span>
                                </div>

                                {/* Center Hover Image Reveal */}
                                <div className="absolute right-15 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-32 md:w-48 md:h-32 rounded-xl overflow-hidden opacity-0 scale-50 rotate-6 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 pointer-events-none shadow-2xl bg-gray-100 flex items-center justify-center p-4 border border-gray-200">
                                    <img
                                        src={award.image}
                                        alt="Award Trophy"
                                        className="w-full h-full object-contain drop-shadow-lg"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Sticky Image */}
                <div className="w-full lg:w-[32%] relative hidden lg:flex flex-col justify-center items-center sticky top-32">
                    <div className="relative w-full h-[700px] rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-black/5 bg-gray-100 group">
                        {/* Beautiful Abstract 3D Render Image */}
                        <img
                            src="https://images.pexels.com/photos/32267578/pexels-photo-32267578.jpeg"
                            alt="Achievement Design"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Overlay Gradient for polish */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#0037f0]/20 to-transparent mix-blend-overlay"></div>

                        {/* Badge */}
                        <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <p className="text-sm font-semibold text-gray-900 mb-1">Global Recognition</p>
                            <p className="text-xs text-gray-500">Celebrating excellence in digital design and architecture.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
