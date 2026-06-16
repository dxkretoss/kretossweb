import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Badge from '../ui/Badge';

gsap.registerPlugin(ScrollTrigger);

export default function TeamsFuture() {
    const sectionRef = useRef(null);

    const features = [
        {
            title: "Career Growth",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
            ),
            description: "We offer opportunities for continuous education and skill growth and development."
        },
        {
            title: "Work-Life Balance",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20"></path>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
            ),
            description: "We prioritize flexibility and support for employee well-being and balance."
        },
        {
            title: "Collective mindset",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
            ),
            description: "We value diverse perspectives and encourage collaboration among team members."
        }
    ];

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".feature-card", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

            gsap.from(".section-header", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background ambient glow matching the dark theme */}
            <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#0037f0]/20 to-transparent pointer-events-none"></div>

            <div className="container  mx-auto px-6 lg:px-12 relative z-10">
                <div className="section-header flex flex-col items-center text-center mb-16">
                    {/* Standardized Badge */}


                    <div className='mb-5 flex justify-start'>
                        <Badge variant="white">Team's Future</Badge>

                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white tracking-tight">
                        What drives our <span className="bg-gradient-to-r from-[#44c7f6] to-[#0037f0] text-transparent bg-clip-text">employee experience</span>
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="feature-card">
                            <div
                                className="group relative p-8 md:p-10 rounded-2xl border border-white/5 bg-[#111] hover:bg-[#161616] hover:-translate-y-2 hover:shadow-[0_10px_40px_-15px_rgba(0,55,240,0.3)] transition-all duration-500 overflow-hidden h-full"
                            >
                                {/* Hover glow effect behind the card */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#44c7f6] rounded-full blur-[80px] opacity-20"></div>
                                    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#0037f0] rounded-full blur-[80px] opacity-20"></div>
                                </div>

                                {/* Icon */}
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-white mb-8 border border-white/10 shadow-inner group-hover:scale-110 group-hover:text-[#44c7f6] transition-all duration-500 relative z-10">
                                    {feature.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-[#44c7f6] transition-colors duration-500">
                                    {feature.title}
                                </h3>
                                <p className="text-[#DADADA] text-sm md:text-base leading-relaxed relative z-10">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
