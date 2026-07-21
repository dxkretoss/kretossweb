import React, { useLayoutEffect, useRef, useEffect } from 'react';
import gsap from 'gsap';
import Badge from '../ui/Badge';

const AnimatedWord = ({ text, isGradient }) => {
    const gradientClass = isGradient ? "bg-gradient-to-r from-[#44c7f6] to-[#0037f0] text-transparent bg-clip-text" : "";
    return (
        <span className={`hero-word ${gradientClass}`} style={{ whiteSpace: 'pre-wrap', display: 'inline-block', opacity: 0, paddingRight: '0.1em', marginRight: '-0.1em', }}>
            {text}
        </span>
    );
};

export default function ContactHero() {
    const heroRef = useRef(null);
    const fadeGradientRef = useRef(null);

    const offices = [
        {
            country: "India",
            icon: "https://flagcdn.com/in.svg",
            label: "Headquarters",
            address: "B-1007, Shilp Corporate Park, Near Rajpath Club, Rajpath-Rangoli Road, Ahmedabad. 380054"
        },
        {
            country: "United States",
            icon: "https://flagcdn.com/us.svg",
            label: "Global Branch",
            address: "9245 East Wood Drive, SCOTTSDALE, AZ 85260"
        }
    ];

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
            gsap.set(".banner-title", { y: 30 });
            gsap.set(".banner-text", { y: 30 });
            gsap.set(".hero-word", { opacity: 0, y: 15 });
            gsap.set(".office-card", { opacity: 0, y: 40, scale: 0.95 });
            gsap.set(".circle-shape-rotate", { opacity: 0, scale: 0.8, xPercent: -50, yPercent: -50 });

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
                .fromTo(".office-card", 
                    { opacity: 0, y: 40, scale: 0.95 }, 
                    { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.2, ease: "power4.out", clearProps: "transform" }, 
                    0.4
                );

            // Continuous animations
            gsap.to(".circle-shape-rotate", {
                rotate: -360,
                duration: 15,
                repeat: -1,
                ease: "linear",
                transformOrigin: "center center"
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative min-h-[calc(100%-100px)] flex items-center justify-center bg-[#0a0a0a] overflow-hidden py-10 lg:py-20" ref={heroRef}>
            {/* Dotted Grid SVG Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
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

            {/* Abstract background elements */}
            <div className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] pointer-events-none opacity-30">
                <img
                    src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69a02bab6028915dad714a7d_Abstract%20Design.svg"
                    loading="lazy"
                    alt="Circle Shape Rotate"
                    className="circle-shape-rotate absolute top-1/2 left-1/2 w-full max-w-none mix-blend-screen"
                />
            </div>

            <div className="container mx-auto w-layout-blockcontainer container-full-width relative z-10 px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 max-w-7xl mx-auto">
                    {/* Left Side */}
                    <div className="w-full lg:w-[55%] flex flex-col items-center sm:items-start text-center sm:text-left relative z-20">
                        <div className='mb-6 subtitle-box'>
                            <Badge variant='white'>Contact Us</Badge>
                        </div>

                        <h1 className="banner-title text-[32px] lg:text-[60px] font-bold text-white leading-[1.1] tracking-tight mb-6">
                            <AnimatedWord text="Build " isGradient={false} />
                            <AnimatedWord text="Together " isGradient={false} />
                            <br className="hidden lg:block" />
                            <AnimatedWord text="Today" isGradient={true} />
                        </h1>

                        <p className="banner-text text-lg md:text-xl text-gray-300 max-w-xl font-medium mb-8">
                            <AnimatedWord text="We're a creative design & development agency crafting meaningful digital experiences for growing brands." isGradient={false} />
                        </p>
                    </div>

                    {/* Right Content - Unique Staggered Office Cards */}
                    <div className="w-full lg:w-[45%] relative z-20 flex justify-center mt-12 lg:mt-0 min-h-[350px]">
                        
                        {/* Abstract Glow Background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none">
                            <div className="absolute top-[10%] right-[10%] w-[150px] h-[150px] bg-[#44c7f6] rounded-full mix-blend-screen filter blur-[80px] opacity-30 animate-pulse"></div>
                            <div className="absolute bottom-[10%] left-[10%] w-[200px] h-[200px] bg-[#0037f0] rounded-full mix-blend-screen filter blur-[80px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>

                        <div className="relative w-full max-w-[450px] h-full flex flex-col items-center justify-center gap-6 sm:gap-0">
                            
                            <div className="flex items-center gap-4 mb-4 sm:mb-8 w-full justify-center">
                                <span className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#44c7f6]/60"></span>
                                <h2 className="text-white/90 font-medium text-sm md:text-base uppercase tracking-[0.3em] whitespace-nowrap">Our Offices</h2>
                                <span className="h-[1px] w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#0037f0]/60"></span>
                            </div>

                            {offices.map((office, idx) => {
                                const isFirst = idx === 0;
                                return (
                                    <div 
                                        key={idx}
                                        className={`office-card group relative w-full sm:w-[360px] rounded-3xl bg-[#111]/80 backdrop-blur-xl border border-white/10 p-5 transition-all duration-500 ease-out hover:border-[#44c7f6]/50 hover:bg-[#161616]/90 hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(68,199,246,0.3)] hover:z-30 ${isFirst ? 'z-20 sm:-translate-x-6 sm:-rotate-3' : 'z-10 sm:translate-x-10 sm:-mt-16 sm:rotate-2'}`}
                                    >
                                        {/* Inner glowing effect on hover */}
                                        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#44c7f6]/5 to-transparent pointer-events-none"></div>
                                        
                                        <div className="relative z-10">
                                            {/* Header */}
                                            <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center overflow-hidden shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                                        <img src={office.icon} alt={office.country} className="w-full h-full object-cover" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text tracking-wide">{office.country}</h3>
                                                        <p className="text-[#44c7f6] text-[10px] font-bold tracking-[0.2em] uppercase mt-0.5 opacity-80">{office.label}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Details */}
                                            <div>
                                                <div className="flex items-start gap-3 text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                                                    <div className="w-7 h-7 shrink-0 rounded-full bg-white/5 flex items-center justify-center mt-0.5">
                                                        <svg className="w-3.5 h-3.5 text-[#0037f0] group-hover:text-[#44c7f6] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                                    </div>
                                                    <p className="text-sm leading-relaxed font-medium">{office.address}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

