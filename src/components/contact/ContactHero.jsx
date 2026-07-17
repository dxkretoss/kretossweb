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
            address: "B-1007, Shilp Corporate Park, Near Rajpath Club, Rajpath-Rangoli Road, Ahmedabad. 380054",
            email: "hello@kretoss.com"
        },
        {
            country: "United States",
            icon: "https://flagcdn.com/us.svg",
            address: "9245 East Wood Drive, SCOTTSDALE, AZ 85260",
            email: "hello@kretoss.com"
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
            gsap.set(".office-card", { opacity: 0, y: 30 });
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
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.8, ease: "power4.out", stagger: 0.2, clearProps: "transform" },
                    0.6
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

            <div className="container mx-auto relative z-10 px-4 md:px-8">
                <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">

                    <div className='mb-6 subtitle-box'>
                        <Badge variant='white'>Contact Us</Badge>
                    </div>

                    <h1 className="banner-title text-[32px] lg:text-[60px] font-bold text-white leading-[1.1] tracking-tight mb-6">
                        <AnimatedWord text="Build " isGradient={false} />
                        <AnimatedWord text="Together " isGradient={false} />
                        <AnimatedWord text="Today" isGradient={true} />
                    </h1>

                    <p className="banner-text text-lg md:text-xl text-gray-300 max-w-2xl font-medium mb-8">
                        <AnimatedWord text="We're a creative design & development agency crafting meaningful digital experiences for growing brands." isGradient={false} />
                    </p>

                    {/* Offices Section */}
                    <div className="w-full flex flex-col items-center pt-12 relative mt-4">
                        {/* Decorative top border */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#44c7f6]/50 to-transparent shadow-[0_0_15px_#44c7f6]"></div>

                        <div className="flex items-center gap-4 mb-4">
                            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#44c7f6]/60"></span>
                            <h2 className="text-white/90 font-medium text-sm md:text-base uppercase tracking-[0.3em]">Our Offices</h2>
                            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#0037f0]/60"></span>
                        </div>

                        <div className="w-full flex flex-col md:flex-row justify-center items-start gap-12 md:gap-24 relative z-10">
                            {offices.map((office, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center relative px-6 py-4">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 overflow-hidden">
                                            <img src={office.icon} alt={office.country} className="w-6 h-6 rounded-full object-cover" />
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">{office.country}</h3>
                                    </div>

                                    <div className="text-gray-400 max-w-[380px] text-[15px] leading-relaxed">
                                        <p>{office.address}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

