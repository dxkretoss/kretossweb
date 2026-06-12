import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedButton from '../ui/AnimatedButton';

const CounterBox = ({ columns, suffix, label, hasLine, rightOneClass = '' }) => {
    return (
        <div className="relative flex flex-col gap-2">
            <div className="flex items-center text-4xl md:text-5xl font-bold">
                <div className="h-[48px] overflow-hidden flex relative">
                    {columns.map((col, colIdx) => (
                        <div key={colIdx} className={`counter-digit-column flex flex-col ${col.direction === 'up' ? 'scroll-up' : 'scroll-down'}`}>
                            {col.digits.map((d, i) => (
                                <div key={i} className={`h-[48px] flex items-center justify-center ${colIdx === 1 ? rightOneClass : ''}`}>{d}</div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="h-[48px] flex items-center ml-1">{suffix}</div>
            </div>
            <div className="text-sm text-gray-600 font-medium tracking-wide">{label}</div>
            {hasLine && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 h-8 w-[1px] bg-black/10"></div>
            )}
        </div>
    );
};

export default function CompanyIntro() {
    const sectionRef = useRef(null);

    const statisticsCounters = [
        {
            columns: [
                { digits: ["9", "8", "7", "6", "5", "4", "3", "2", "1"], direction: "down" },
                { digits: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], direction: "up" },
                { digits: ["9", "8", "7", "6", "5", "4", "3", "2", "0"], direction: "down" }
            ],
            suffix: "+",
            label: "Countries Served",
            hasLine: true
        },
        {
            columns: [
                { digits: ["1", "2", "3", "4", "5", "6", "7", "8", "9"], direction: "down" },
                { digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "5"], direction: "up" }
            ],
            suffix: "%",
            label: "Our Transformative",
            hasLine: true
        },
        {
            columns: [
                { digits: ["9", "8", "7", "6", "5", "4", "3", "2", "3"], direction: "down" },
                { digits: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], direction: "up" }
            ],
            suffix: "+",
            label: "Award Winning",
            hasLine: true
        },
        {
            columns: [
                { digits: ["9", "8", "7", "6", "5", "4", "3", "2", "2"], direction: "down" }
            ],
            suffix: "k +",
            label: "Projects Delivered",
            hasLine: false
        }
    ];

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let ctx = gsap.context(() => {
            gsap.from(".fade-up-element", {
                opacity: 0,
                y: 50,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });

            // Counter animations
            gsap.set(".about-counter-container", { opacity: 0 });

            const counterDigitColumns = sectionRef.current?.querySelectorAll(".counter-digit-column");
            if (counterDigitColumns) {
                counterDigitColumns.forEach((colBox, idx) => {
                    const direction = colBox.classList.contains("scroll-up") ? -1 : 1;
                    const childrenCount = colBox.children.length;
                    const digitHeight = 48; // Must match h-[48px] in Tailwind

                    if (direction === -1) {
                        gsap.set(colBox, { y: 0 });
                        gsap.to(colBox, {
                            y: -1 * digitHeight * (childrenCount - 1),
                            duration: 1.8 + idx * 0.15,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: ".about-counter-container",
                                start: "top 85%",
                                toggleActions: "play none none reverse"
                            }
                        });
                    } else {
                        gsap.set(colBox, { y: -1 * digitHeight * (childrenCount - 1) });
                        gsap.to(colBox, {
                            y: 0,
                            duration: 1.8 + idx * 0.15,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: ".about-counter-container",
                                start: "top 85%",
                                toggleActions: "play none none reverse"
                            }
                        });
                    }
                });
            }

            gsap.to(".about-counter-container", {
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".about-counter-container",
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="bg-[#fafcff] text-black py-24 px-6 md:px-12 relative overflow-hidden" ref={sectionRef}>
            <div className="mx-auto flex flex-col gap-10 relative z-10">

                {/* Top Section */}
                <div className="text-center fade-up-element">
                    <h2 className="testimonial-title aboutus" style={{ opacity: 1 }}>We’re focused on scaling <span className="review-subtitle">brands to the next level.</span></h2>
                </div>

                {/* Main Video Thumbnail */}
                <div className="relative w-full rounded-xl overflow-hidden aspect-video md:aspect-[21/9] fade-up-element shadow-2xl">
                    <img
                        src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69c8eef098116fbca4332e3b_hhhcck.webp"
                        alt="Team meeting"
                        className="w-full h-full object-cover"
                    />

                    {/* Play Button Action Box */}
                    <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white/80 backdrop-blur-md px-5 py-4 rounded-xl border border-black/10 cursor-pointer hover:bg-white/90 transition-colors">
                        <div className="w-12 h-12 shrink-0  bg-[linear-gradient(#44c7f6,#0037f0)] flex items-center justify-center rounded-lg shadow-lg">
                            <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6V4z" /></svg>
                        </div>
                        <div className="text-gray-900 font-medium text-sm md:text-base leading-snug max-w-[180px]">
                            See how we advice your business idea
                        </div>
                    </div>

                    {/* Circular Badge */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-2xl group cursor-pointer">
                        <img
                            src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69c8fbd3887fba8b3fa6feca_Group%202085662821.png"
                            alt="Explore Concepts"
                            className="w-[85%] h-[85%] object-contain animate-[spin_12s_linear_infinite]"
                        />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-[linear-gradient(#44c7f6,#0037f0)] rounded-full flex items-center justify-center text-white transition-transform duration-300">
                            <svg
                                className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:-rotate-[40deg]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between">
                    <h3 className="max-w-lg text-3xl md:text-4xl font-semibold leading-tight pr-4 text-black">
                        Crafting Scalable, Secure, & Smart Digital Experiences
                    </h3>

                    {/* Rating Badge */}
                    <div className="flex w-auto items-center gap-4">
                        <div className="flex -space-x-3">
                            <img src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69b7f5c19e3153ce127bdc8d_Ellipse%2021879.svg" className="w-10 h-10 rounded-full border-2 border-[#fafcff]" alt="Author" />
                            <img src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69b7f5c1cba7e2177c148e74_Ellipse%2021880.svg" className="w-10 h-10 rounded-full border-2 border-[#fafcff]" alt="Author" />
                            <img src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69b7f5c0f924d96af1332fb0_Ellipse%2021881.svg" className="w-10 h-10 rounded-full border-2 border-[#fafcff]" alt="Author" />
                            <div className="w-10 h-10 rounded-full border-2 border-[#fafcff] bg-gray-800 flex items-center justify-center text-[11px] font-bold text-white z-10 relative">99+</div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="text-sm font-bold"><span className="text-[#ff6b35]">1000+</span> Happy Clients</div>
                            <div className="text-[11px] text-gray-600 font-medium">Trusted by creators worldwide</div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-stretch mt-4">

                    {/* Left Column */}
                    <div className="lg:col-span-4 flex flex-col gap-10 fade-up-element">

                        <div className="rounded-3xl overflow-hidden aspect-square relative shadow-xl">
                            <img
                                src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69c9034269c400cc32d3d258_jochxlk.webp"
                                alt="Team collaboration"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-8 flex flex-col justify-between fade-up-element h-full py-2">
                        <div className="flex flex-col gap-8 items-start">


                            {/* Description Text */}
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Trusted by global clients, Kretoss Technology is your technology partner for mobile apps, websites, and digital solutions affordable, reliable, and tailored to your business needs. With over 12 years of experience, we deliver scalable, high-quality solutions that drive real business growth.
                            </p>

                            {/* Call to Action Button */}
                            <div className="mt-2">
                                <AnimatedButton href="/contact" text="LEARN MORE" />
                            </div>
                        </div>

                        {/* Animated Counters Row */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 mt-16 pt-12 border-t border-black/10 about-counter-container">
                            {statisticsCounters.map((counter, idx) => (
                                <CounterBox
                                    key={idx}
                                    columns={counter.columns}
                                    suffix={counter.suffix}
                                    label={counter.label}
                                    hasLine={counter.hasLine}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}