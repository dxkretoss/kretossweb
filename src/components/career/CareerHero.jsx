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

export default function CareerHero() {
    const heroRef = useRef(null);
    const fadeGradientRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const cards = [
        {
            title: "CULTURE",
            icon: (
                <svg className="w-4 h-4 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            subtitle: "Collaborative & Inclusive",
            gradient: "from-[#44c7f6] to-[#0037f0]",
            bgText: "CULTURE DIVERSITY INCLUSION TEAMWORK INNOVATION FLEXIBILITY EMPOWERMENT RESPECT FUN COLLABORATION CREATIVITY ",
            desc: "We foster an open, inclusive, and collaborative environment where every voice matters. We believe that a positive culture drives innovation and empowers our team to do their best work while actually enjoying the journey."
        },
        {
            title: "GROWTH",
            icon: (
                <svg className="w-4 h-4 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
            subtitle: "Continuous Learning",
            gradient: "from-[#f86602] to-[#ff9b50]",
            bgText: "GROWTH MENTORSHIP SKILLS DEVELOPMENT LEARNING OPPORTUNITIES LEADERSHIP CAREER PATH ADVANCEMENT TRAINING ",
            desc: "Your career progression is our priority. We provide continuous learning opportunities, mentorship, and resources to help you master new skills, take on leadership roles, and accelerate your professional growth."
        },
        {
            title: "PERKS",
            icon: (
                <svg className="w-4 h-4 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            subtitle: "Work-Life Harmony",
            gradient: "from-[#10b981] to-[#3b82f6]",
            bgText: "PERKS BENEFITS WELLNESS REMOTE FLEXIBLE SCHEDULE HEALTHCARE BONUSES BALANCE RETREATS ",
            desc: "We believe in rewarding hard work. Enjoy a comprehensive benefits package including flexible working hours, remote work options, wellness programs, and competitive bonuses designed to support a healthy work-life balance."
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
                            <span className="text-xs text-gray-300 font-medium tracking-widest uppercase mt-0.5">Careers</span>

                        </div>

                        <h1 className="banner-title text-5xl sm:text-6xl lg:text-[60px] font-bold text-white leading-[1.1] tracking-tight mb-8">
                            <AnimatedWord text="Unlock new " isGradient={false} />
                            <AnimatedWord text="career" isGradient={true} />
                            <AnimatedWord text="Opportunities with us" isGradient={false} />
                        </h1>

                        <p className="banner-text text-lg sm:text-xl text-gray-300 max-w-lg font-medium mb-8">
                            <AnimatedWord text="Join a passionate team where innovation, creativity, and growth come together to shape impactful digital experiences and future-ready solutions." isGradient={false} />
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
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[linear-gradient(#44c7f6,#0037f0)] opacity-20 blur-[80px] -z-20 rounded-full pointer-events-none"></div>
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
                                            <div className="relative w-full h-[35%] bg-[#080808] overflow-hidden flex items-center justify-center border-b border-white/5">
                                                {/* Text Background Pattern */}
                                                <div className={`absolute inset-0 opacity-10 flex flex-wrap content-start p-3 text-xs font-mono overflow-hidden break-all leading-tight select-none bg-gradient-to-br ${card.gradient} text-transparent bg-clip-text`}>
                                                    {Array(15).fill(card.bgText).join(" ")}
                                                </div>

                                                {/* Big Title Area */}
                                                <div className="relative z-10 flex flex-col items-center">
                                                    {/* <span className="text-sm font-bold tracking-[0.2em] uppercase text-white/50 -mb-1">Our</span> */}
                                                    <h3 className={`text-4xl sm:text-5xl font-black tracking-tighter bg-gradient-to-r ${card.gradient} text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]`}>
                                                        {card.title}
                                                    </h3>
                                                </div>
                                            </div>

                                            {/* Card Bottom / Details Area */}
                                            <div className="h-[65%] p-5 sm:p-6 flex flex-col bg-gradient-to-b from-[#181818] to-[#0a0a0a]">
                                                <div className="flex items-center justify-between text-gray-300 mb-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="bg-white/5 w-8 h-8 rounded-full flex items-center justify-center text-sm border border-white/10 shadow-inner">
                                                            {card.icon}
                                                        </div>
                                                        <span className="font-semibold tracking-wide text-sm sm:text-base text-white">{card.subtitle}</span>
                                                    </div>
                                                </div>

                                                <p className="text-gray-400 text-sm leading-relaxed">
                                                    {card.desc}
                                                </p>
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