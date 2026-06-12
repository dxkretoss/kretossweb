import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const data = [
    {
        title: "Our Mission",
        desc: "At Kretoss Technology, our mission is to empower businesses by delivering innovative, user-centric digital solutions. We are committed to crafting seamless UI/UX designs and robust web and mobile applications that drive engagement, enhance user experience, and create measurable value for our clients across industries.",
        icon: (
            <svg className="w-full h-full" fill="none" stroke="url(#mv-gradient)" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )
    },
    {
        title: "Our Vision",
        desc: "Our vision is to become a globally recognized technology partner, known for transforming ideas into impactful digital experiences. We aim to set new standards in UI/UX and application development by embracing creativity, excellence, and continuous innovation.",
        icon: (
            <svg className="w-full h-full" fill="none" stroke="url(#mv-gradient)" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        )
    },
    {
        title: "Our Goal",
        desc: "Our goal is to consistently deliver high-quality, scalable, and intuitive digital products that exceed client expectations. We strive to build long-term partnerships by maintaining transparency, meeting deadlines, and constantly evolving with emerging technologies to stay ahead in a dynamic digital world.",
        icon: (
            <svg className="w-full h-full" fill="none" stroke="url(#mv-gradient)" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        )
    }
];

export default function MissionVisionSection() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let ctx = gsap.context(() => {
            gsap.fromTo('.mv-card',
                { opacity: 0, y: 80, rotateX: -15, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    scale: 1,
                    duration: 1,
                    stagger: 0.2,
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
        <section className="bg-[#fafcff] text-gray-900 py-24 px-6 md:px-12 relative overflow-hidden" ref={sectionRef}>
            {/* Define SVG Gradient globally for icons */}
            <svg width="0" height="0" className="absolute">
                <defs>
                    <linearGradient id="mv-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#44c7f6" />
                        <stop offset="100%" stopColor="#0037f0" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-gradient-to-b from-[#44c7f6]/10 to-transparent blur-[120px] pointer-events-none -z-10"></div>

            <div className="max-w-7xl mx-auto relative z-10" style={{ perspective: '1200px' }}>
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">Driving Digital Excellence</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">Discover the core principles that guide our journey in transforming ideas into powerful digital realities.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {data.map((item, idx) => (
                        <div key={idx} className="mv-card relative group p-[1.5px] rounded-3xl bg-[linear-gradient(135deg,#44c7f6_0%,#0037f0_30%,#ffffff_50%,#ffffff_100%)] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgb(0,55,240,0.08)] hover:-translate-y-2">

                            <div className="relative w-full h-full bg-white rounded-[23px] p-8 md:p-10 flex flex-col items-start overflow-hidden">
                                {/* Background Watermark Icon (Gradient) */}
                                <div className="absolute -right-8 -top-8 w-40 h-40 opacity-10 group-hover:opacity-25 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 pointer-events-none z-0">
                                    {item.icon}
                                </div>

                                {/* Hover Glow Shade */}
                                <div className="absolute -top-32 -right-32 w-80 h-80 bg-[linear-gradient(to_bottom_right,#44c7f6,#0037f0)] opacity-0 group-hover:opacity-15 blur-[60px] transition-all duration-700 pointer-events-none rounded-full z-0"></div>

                                <h3 className="relative z-10 text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#0037f0] transition-colors duration-500 mt-2">{item.title}</h3>
                                <p className="relative z-10 text-gray-600 leading-relaxed text-sm md:text-base transition-colors duration-500">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
