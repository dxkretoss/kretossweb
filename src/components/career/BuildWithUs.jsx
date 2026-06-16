import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedButton from '../ui/AnimatedButton';
import Badge from '../ui/Badge';

const CounterBox = ({ columns, suffix, label, hasLeftLine, rightOneClass = '' }) => {
    return (
        <div className="relative flex flex-col items-start gap-2">
            <div className="flex items-center text-3xl md:text-4xl font-bold text-black">
                <div className="h-[40px] overflow-hidden flex relative">
                    {columns.map((col, colIdx) => (
                        <div key={colIdx} className={`counter-digit-column flex flex-col ${col.direction === 'up' ? 'scroll-up' : 'scroll-down'}`}>
                            {col.digits.map((d, i) => (
                                <div key={i} className={`h-[40px] flex items-center justify-center ${colIdx === 1 ? rightOneClass : ''}`}>{d}</div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="h-[40px] flex items-center ml-1">{suffix}</div>
            </div>
            <div className="text-sm text-gray-600 font-medium tracking-wide text-left">{label}</div>
            {hasLeftLine && (
                <div className="hidden md:block absolute -left-6 top-1/2 -translate-y-1/2 h-10 w-[1px] bg-black/10"></div>
            )}
        </div>
    );
};

export default function BuildWithUs() {
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
            hasLeftLine: false
        },
        {
            columns: [
                { digits: ["1", "2", "3", "4", "5", "6", "7", "8", "9"], direction: "down" },
                { digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "5"], direction: "up" }
            ],
            suffix: "%",
            label: "Our Transformative",
            hasLeftLine: true
        },
        {
            columns: [
                { digits: ["9", "8", "7", "6", "5", "4", "3", "2", "3"], direction: "down" },
                { digits: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], direction: "up" }
            ],
            suffix: "+",
            label: "Award Winning",
            hasLeftLine: true
        },
        {
            columns: [
                { digits: ["9", "8", "7", "6", "5", "4", "3", "2", "2"], direction: "down" }
            ],
            suffix: "k +",
            label: "Projects Delivered",
            hasLeftLine: true
        }
    ];

    const listItems = [
        "Collaborative Work Environment",
        "Career Growth Opportunities",
        "Work-Life Balance",
        "Competitive Compensation"
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
            gsap.set(".build-counter-container", { opacity: 0 });

            const counterDigitColumns = sectionRef.current?.querySelectorAll(".counter-digit-column");
            if (counterDigitColumns) {
                counterDigitColumns.forEach((colBox, idx) => {
                    const direction = colBox.classList.contains("scroll-up") ? -1 : 1;
                    const childrenCount = colBox.children.length;
                    const digitHeight = 40; // Must match h-[40px] in Tailwind

                    if (direction === -1) {
                        gsap.set(colBox, { y: 0 });
                        gsap.to(colBox, {
                            y: -1 * digitHeight * (childrenCount - 1),
                            duration: 1.8 + idx * 0.15,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: ".build-counter-container",
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
                                trigger: ".build-counter-container",
                                start: "top 85%",
                                toggleActions: "play none none reverse"
                            }
                        });
                    }
                });
            }

            gsap.to(".build-counter-container", {
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".build-counter-container",
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-[#fafcff] relative overflow-hidden text-black">
            {/* Ambient Gradients - Blue Shades */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#44c7f6]/10 via-[#0037f0]/5 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#0037f0]/10 via-[#44c7f6]/5 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">

                    {/* Left Column */}
                    <div className="w-full lg:w-5/12 flex flex-col gap-8 fade-up-element">
                        {/* Badge */}

                        <div className='mb-5 flex justify-start'>
                            <Badge variant="blue">Build with us!</Badge>
                        </div>

                        {/* Image */}
                        <div className="w-full aspect-[4/5] overflow-hidden rounded-xl shadow-2xl relative">
                            <img
                                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Team walking in office"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full lg:w-7/12 flex flex-col justify-center gap-8 fade-up-element">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#222] tracking-tight leading-tight">
                            Be part of something extraordinary
                        </h2>

                        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                            Joining our team means being part of a dynamic group of professionals dedicated to shaping the future.
                        </p>

                        <ul className="flex flex-col gap-4">
                            {listItems.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-gray-800 font-medium">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-black shrink-0">
                                        <path d="M12 2L14.09 8.26L20 9.27L15 13.14L16.18 19.02L12 15.77L7.82 19.02L9 13.14L4 9.27L9.91 8.26L12 2Z" fill="currentColor" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-4">
                            <AnimatedButton href="/about" text="More About Us" className="!w-auto" />
                        </div>

                        {/* Numbers Section */}
                        <div className="mt-12 pt-8 border-t border-black/10 w-full">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 build-counter-container pl-6">
                                {statisticsCounters.map((counter, idx) => (
                                    <CounterBox
                                        key={idx}
                                        columns={counter.columns}
                                        suffix={counter.suffix}
                                        label={counter.label}
                                        hasLeftLine={counter.hasLeftLine}
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
