import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';

const AnimatedWord = ({ text, isGradient }) => {
    const gradientClass = isGradient ? "bg-gradient-to-r from-[#44c7f6] to-[#0037f0] text-transparent bg-clip-text" : "";
    return (
        <span className={`hero-word ${gradientClass}`} style={{ whiteSpace: 'pre-wrap', display: 'inline-block', opacity: 0, paddingRight: '0.1em', marginRight: '-0.1em', lineHeight: '120%' }}>
            {text}
        </span>
    );
};

export default function HeroSection() {
    const heroRef = useRef(null);
    const fadeGradientRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const cards = [
        {
            title: "CODE",
            icon: "</>",
            subtitle: "Driven By Logic",
            gradient: "from-[#44c7f6] to-[#0037f0]",
            bgText: "01010011 01001101 01000001 01010010 01010100 00100000 01000100 01000101 01010110 00100000 01010011 01010100 01010101 01001110 01001110 01001001 01001110 01000111 00100000 01000100 01000101 01010011 01001001 01000111 01001110", // binary pattern
        },
        {
            title: "DESIGN",
            icon: "✨",
            subtitle: "Crafted With Passion",
            gradient: "from-[#f86602] to-[#ff9b50]",
            bgText: "DESIGN STUNNING PIXELS VECTOR UI UX INTERFACE EXPERIENCE CREATIVE PROTOTYPE COLOR TYPOGRAPHY LAYOUT GRID RESPONSIVE ANIMATION INTERACTION VISUAL AESTHETIC",
        },
        {
            title: "IMPACT",
            icon: "🚀",
            subtitle: "Delivering Results",
            gradient: "from-[#10b981] to-[#3b82f6]",
            bgText: "GROWTH SCALE REVENUE PERFORMANCE METRICS ANALYTICS SUCCESS LAUNCH CONVERSION ENGAGEMENT RETENTION TRAFFIC SEO OPTIMIZATION ROI STRATEGY GOALS",
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % cards.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!heroRef.current || !fadeGradientRef.current) return;
            const rect = heroRef.current.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;

            fadeGradientRef.current.setAttribute('cx', `${x}%`);
            fadeGradientRef.current.setAttribute('cy', `${y}%`);
            fadeGradientRef.current.setAttribute('fx', `${x}%`);
            fadeGradientRef.current.setAttribute('fy', `${y}%`);
        };

        const section = heroRef.current;
        if (section) {
            section.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (section) {
                section.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Initial states
            gsap.set(".subtitle-box", { opacity: 0, y: 20 });
            gsap.set(".banner-title", { y: 30 }); // Parent handles Y movement
            gsap.set(".banner-text", { y: 30 });  // Parent handles Y movement
            gsap.set(".hero-word", { opacity: 0, y: 15 }); // Words handle opacity and minor slide
            gsap.set(".circle-shape-rotate", { opacity: 0, scale: 0.8, xPercent: -50, yPercent: -50 });
            gsap.set(".hero-video-box", { opacity: 0, x: 50 });

            const tl = gsap.timeline();

            tl.to(".subtitle-box", { opacity: 1, y: 0, duration: 0.8, ease: "power4.out" }, 0)
                .to(".banner-title", { y: 0, duration: 0.8, ease: "power4.out" }, 0.2)
                .fromTo(".banner-title .hero-word",
                    { opacity: 0, y: 15 },
                    { opacity: 1, y: 0, duration: 0.8, ease: "power4.out", stagger: { each: 0.15, from: "start" }, clearProps: "opacity,transform" },
                    0.2
                )
                .to(".banner-text", { y: 0, duration: 0.8, ease: "power4.out" }, 0.4)
                .fromTo(".banner-text .hero-word",
                    { opacity: 0, y: 10 },
                    { opacity: 1, y: 0, duration: 0.8, ease: "power4.out", stagger: { each: 0.1, from: "start" }, clearProps: "opacity,transform" },
                    0.4
                )
                .to(".circle-shape-rotate", { opacity: 1, scale: 1, duration: 0.8, ease: "power4.out" }, 0.2)
                .to(".hero-video-box", { opacity: 1, x: 0, duration: 1, ease: "power4.out" }, 0.4);

            // Continuous animations
            gsap.to(".circle-shape-rotate", {
                rotate: -360,
                duration: 8,
                repeat: -1,
                ease: "linear",
                transformOrigin: "center center"
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative min-h-screen flex items-center bg-[#0a0a0a] overflow-hidden py-24" ref={heroRef}>
            {/* Dotted Grid SVG Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-60 ">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="dot-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#44c7f6" />
                            <stop offset="100%" stopColor="#0037f0" />
                        </linearGradient>
                        <pattern id="hero-dot-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1.5" fill="url(#dot-gradient)" />
                        </pattern>
                        <radialGradient id="fade-gradient" cx="50%" cy="50%" r="40%" fx="50%" fy="50%" ref={fadeGradientRef}>
                            <stop offset="0%" stopColor="#0a0a0a" stopOpacity="0" />
                            <stop offset="50%" stopColor="#0a0a0a" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#0a0a0a" stopOpacity="1" />
                        </radialGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hero-dot-pattern)" />
                    <rect width="100%" height="100%" fill="url(#fade-gradient)" />
                </svg>
            </div>

            <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">

                    {/* Left Content */}
                    <div className="w-full lg:w-[55%] flex flex-col items-start relative z-20">
                        <div className="about-subtitle-box mb-4" style={{ backgroundColor: 'transparent' }}>
                            <img
                                src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe28879c_Star%2018%20(1).svg"
                                loading="lazy" alt="Contact Subtitle Icon" className="subtitle-image-icon animate-[spin_4s_linear_infinite]"
                            />
                            <span className="text-xs text-gray-300 font-medium tracking-widest uppercase mt-0.5">About us</span>

                        </div>

                        <h1 className="banner-title text-5xl sm:text-6xl lg:text-[60px] font-bold text-white leading-[1.1] tracking-tight mb-8">
                            <AnimatedWord text="Smart " isGradient={false} />
                            <AnimatedWord text="Development" isGradient={true} /><br />
                            <AnimatedWord text="Stunning " isGradient={true} />
                            <AnimatedWord text="Design" isGradient={false} /><br />
                            <AnimatedWord text="Real " isGradient={false} />
                            <AnimatedWord text="Impact" isGradient={true} />
                        </h1>

                        <p className="banner-text text-lg sm:text-xl text-gray-300 max-w-lg font-medium mb-8">
                            <AnimatedWord text="We take you from consultation to successful launch." isGradient={false} />
                        </p>

                    </div>

                    {/* Abstract background elements positioned behind the text */}
                    <div className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 -z-10 w-[300px] h-[300px] pointer-events-none">
                        <img
                            src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69a0289abdb860693feb3465_Group%202085664929.svg"
                            loading="lazy"
                            alt="Banner Shape"
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-none"
                        />
                        <img
                            src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69a02bab6028915dad714a7d_Abstract%20Design.svg"
                            loading="lazy"
                            alt="Circle Shape Rotate"
                            className="circle-shape-rotate absolute top-1/2 left-1/2 w-[80%] max-w-none"
                        />
                    </div>

                    {/* Right Content - 3D Card Stack */}
                    <div className="w-full lg:w-[45%] relative z-20 flex justify-center  mt-12 lg:mt-0">
                        <div className="hero-video-box relative w-full max-w-[380px]">
                            {/* Background Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#0037f0]/20 to-[#f86602]/20 blur-[80px] -z-20 rounded-full pointer-events-none"></div>

                            {/* Card Stack Container */}
                            <div className="relative w-full aspect-[4/4.5] perspective-[1000px]">
                                {cards.map((card, idx) => {
                                    const offset = (idx - activeIndex + cards.length) % cards.length;

                                    let transformClass = "";
                                    let zIndex = "z-0";
                                    let opacity = "opacity-100";
                                    let shadow = "shadow-2xl";

                                    if (offset === 0) {
                                        // Front Card
                                        transformClass = "translate-y-0 scale-100 rotate-0";
                                        zIndex = "z-30";
                                    } else if (offset === 1) {
                                        // Back Right
                                        transformClass = "translate-y-4 translate-x-8 scale-[0.9] rotate-[8deg]";
                                        zIndex = "z-20";
                                        opacity = "opacity-40";
                                        shadow = "shadow-none";
                                    } else if (offset === 2) {
                                        // Back Left
                                        transformClass = "translate-y-4 -translate-x-8 scale-[0.9] rotate-[-8deg]";
                                        zIndex = "z-10";
                                        opacity = "opacity-40";
                                        shadow = "shadow-none";
                                    }

                                    return (
                                        <div
                                            key={idx}
                                            className={`absolute inset-0 bg-[#121212] border border-white/10 rounded-xl overflow-hidden transition-all duration-700 ease-out origin-bottom ${transformClass} ${zIndex} ${opacity} ${shadow}`}
                                        >
                                            {/* Card Top / Image Area */}
                                            <div className="relative w-full h-[60%] bg-[#080808] overflow-hidden flex items-center justify-center">
                                                {/* Text Background Pattern */}
                                                <div className={`absolute inset-0 opacity-10 flex flex-wrap content-start p-3 text-xs font-mono overflow-hidden break-all leading-tight select-none bg-gradient-to-br ${card.gradient} text-transparent bg-clip-text`}>
                                                    {Array(15).fill(card.bgText).join(" ")}
                                                </div>

                                                {/* Big Title */}
                                                <h3 className={`relative z-10 text-5xl sm:text-6xl font-black tracking-tighter bg-gradient-to-r ${card.gradient} text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]`}>
                                                    {card.title}
                                                </h3>
                                            </div>

                                            {/* Card Bottom / Details Area */}
                                            <div className="h-[40%] p-5 sm:p-6 flex flex-col justify-between bg-gradient-to-b from-[#181818] to-[#0a0a0a]">
                                                <div className="flex items-center justify-between text-gray-300">
                                                    <div className="flex items-center gap-3">
                                                        <div className="bg-white/5 w-8 h-8 rounded-full flex items-center justify-center text-sm border border-white/10 shadow-inner">
                                                            {card.icon}
                                                        </div>
                                                        <span className="font-medium tracking-wide text-sm sm:text-base">{card.subtitle}</span>
                                                    </div>
                                                    <span className="font-mono text-sm opacity-50 tracking-widest">2026</span>
                                                </div>

                                                <div className="flex flex-col gap-2.5 sm:gap-3 mt-4">
                                                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                                        <div className={`h-full w-[85%] bg-white/20 rounded-full transition-all duration-1000 delay-100 ${offset === 0 ? 'translate-x-0' : '-translate-x-full'}`}></div>
                                                    </div>
                                                    <div className="h-1.5 w-[90%] bg-white/5 rounded-full overflow-hidden">
                                                        <div className={`h-full w-[65%] bg-white/20 rounded-full transition-all duration-1000 delay-200 ${offset === 0 ? 'translate-x-0' : '-translate-x-full'}`}></div>
                                                    </div>
                                                    <div className="h-1.5 w-[75%] bg-white/5 rounded-full overflow-hidden">
                                                        <div className={`h-full w-[45%] bg-white/20 rounded-full transition-all duration-1000 delay-300 ${offset === 0 ? 'translate-x-0' : '-translate-x-full'}`}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Controls / Dots (Optional) */}
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                                {cards.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveIndex(idx)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === idx ? 'bg-white scale-125' : 'bg-white/20 hover:bg-white/50'}`}
                                    />
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}