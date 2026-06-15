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

export default function PortfolioHero() {
    const heroRef = useRef(null);
    const fadeGradientRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const cards = [
        {
            image: "/portfolio/Drawn.png"
        },
        {
            image: "/portfolio/fily.webp"
        },
        {
            image: "/portfolio/palzea.webp"
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
        <section className="relative h-[calc(100dvh-100px)] flex items-center bg-[#0a0a0a] overflow-hidden py-24" ref={heroRef}>
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
                            <span className="text-xs text-gray-300 font-medium tracking-widest uppercase mt-0.5">Portfolio</span>

                        </div>

                        <h1 className="banner-title text-5xl sm:text-6xl lg:text-[60px] font-bold text-white leading-[1.1] tracking-tight mb-8">
                            <AnimatedWord text="Check " isGradient={false} />
                            <AnimatedWord text="Out " isGradient={false} />
                            <AnimatedWord text="Our " isGradient={false} />
                            <AnimatedWord text="Best " isGradient={false} /><br />
                            <AnimatedWord text="Design " isGradient={true} />
                            <AnimatedWord text="& " isGradient={true} />
                            <AnimatedWord text="Development " isGradient={true} /><br />
                            <AnimatedWord text="Works" isGradient={false} />
                        </h1>

                        <p className="banner-text text-lg sm:text-xl text-gray-300 max-w-lg font-medium mb-8">
                            <AnimatedWord text="We specialize in innovative design and development solutions, tailored for impactful brand growth." isGradient={false} />
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

                    {/* Right Content - Laptop Mockup */}
                    <div className="w-full lg:w-[50%] relative z-20 flex justify-center mt-12 lg:mt-0">
                        <div className="hero-video-box relative w-full max-w-[600px] lg:mr-[-30px]">
                            {/* Background Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[linear-gradient(#44c7f6,#0037f0)] opacity-20 blur-[80px] -z-20 rounded-full pointer-events-none"></div>
                            
                            {/* Laptop Container */}
                            <div className="relative w-full">
                                {/* Screen Lid */}
                                <div className="relative w-full bg-[#0a0a0a] rounded-t-2xl sm:rounded-t-3xl border-[4px] sm:border-[8px] border-[#222] shadow-2xl aspect-[16/10] overflow-hidden z-20">
                                    {/* Camera dot */}
                                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#111] rounded-full z-30 ring-1 ring-white/10 hidden sm:block"></div>
                                    
                                    {/* Screen Content */}
                                    <div className="relative w-full h-full bg-[#121212] overflow-hidden">
                                        {/* Browser Header / Navigation Bar Mockup */}
                                        <div className="absolute top-0 left-0 w-full h-6 sm:h-8 bg-[#1a1a1a] flex items-center px-3 sm:px-4 gap-1.5 sm:gap-2 z-40 border-b border-white/5">
                                            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ff5f56]"></div>
                                            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ffbd2e]"></div>
                                            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#27c93f]"></div>
                                            {/* URL Bar */}
                                            <div className="hidden sm:block ml-4 flex-1 max-w-xs h-4 sm:h-5 bg-[#2a2a2a] rounded text-[8px] text-white/30 px-2 flex items-center">
                                                kretoss.com/portfolio
                                            </div>
                                        </div>
                                        <div className="relative w-full h-full mt-6 sm:mt-8">
                                            {cards.map((card, idx) => {
                                                const isActive = idx === activeIndex;
                                                return (
                                                    <div
                                                        key={idx}
                                                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                                    >
                                                        <img 
                                                            src={card.image} 
                                                            alt={`Portfolio Work ${idx + 1}`} 
                                                            className="w-full h-full object-cover object-top"
                                                        />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>

                                {/* Laptop Base */}
                                <div className="relative w-[114%] -left-[7%] h-3 sm:h-5 bg-[#222] rounded-b-xl sm:rounded-b-2xl shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-10 flex justify-center">
                                    <div className="w-[20%] h-[40%] bg-[#111] rounded-b-md mx-auto mt-0"></div>
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10"></div>
                                </div>
                            </div>

                            {/* Controls / Dots */}
                            <div className="absolute -bottom-10 sm:-bottom-14 left-1/2 -translate-x-1/2 flex gap-3">
                                {cards.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveIndex(idx)}
                                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'bg-[#44c7f6] scale-125 shadow-[0_0_10px_#44c7f6]' : 'bg-white/20 hover:bg-white/50'}`}
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
