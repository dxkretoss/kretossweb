import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedButton from '../ui/AnimatedButton';
import Badge from '../ui/Badge';

const CounterBox = ({ columns, suffix, label, valueClass, labelClass }) => {
    return (
        <div className="flex flex-col justify-center items-center text-center transform transition-transform group w-full">
            <div className="flex items-start justify-center mb-2 overflow-hidden h-[44px] lg:h-[54px]">
                {columns.map((col, colIdx) => (
                    <div key={colIdx} className={`counter-digit-column ${col.direction === 'up' ? 'scroll-up' : 'scroll-down'} flex flex-col shrink-0`}>
                        {col.digits.map((d, i) => (
                            <h4 key={i} className={`counter-box-title h-[44px] lg:h-[54px] flex items-center justify-center font-black text-2xl lg:text-3xl leading-none shrink-0 ${valueClass}`}>
                                {d}
                            </h4>
                        ))}
                    </div>
                ))}
                <h4 className={`counter-box-title h-[44px] lg:h-[54px] flex items-center font-black text-2xl lg:text-3xl leading-none shrink-0 ${valueClass}`}>{suffix}</h4>
            </div>
            <p className={labelClass}>{label}</p>
        </div>
    );
};

export default function BuildWithUs() {
    const sectionRef = useRef(null);

    const stats = {
        projects: {
            columns: [
                { digits: ["0", "1"], direction: "up" },
                { digits: [".", "."], direction: "up" },
                { digits: ["0", "1", "2"], direction: "up" }
            ],
            suffix: "k+",
            label: "Projects Delivered",
        },
        impact: {
            columns: [
                { digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], direction: "up" },
                { digits: ["0", "1", "2", "3", "4", "5"], direction: "up" }
            ],
            suffix: "%",
            label: "Transformative Impact",
        },
        countries: {
            columns: [
                { digits: ["0", "1"], direction: "up" },
                { digits: ["0", "0"], direction: "up" }
            ],
            suffix: "+",
            label: "Countries Served",
        },
        awards: {
            columns: [
                { digits: ["0", "1", "2", "3"], direction: "up" },
                { digits: ["0", "0", "0", "0"], direction: "up" }
            ],
            suffix: "+",
            label: "Award Winning",
        }
    };

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

            // Staggered entrance for the bento boxes
            tl.fromTo(".bento-box",
                { opacity: 0, scale: 0.95 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                }
            );

            // Counter animation
            const counterDigitColumns = sectionRef.current?.querySelectorAll(".counter-digit-column");
            if (counterDigitColumns && counterDigitColumns.length > 0) {
                tl.addLabel("counterStart", "0.4");
                counterDigitColumns.forEach((colBox, idx) => {
                    const isUp = colBox.classList.contains("scroll-up");
                    const numChildren = colBox.children.length;
                    const translatePercent = -(numChildren - 1) / numChildren * 100;
                    const duration = 2.5 + (idx % 3) * 0.5;

                    if (isUp) {
                        tl.fromTo(colBox, { yPercent: 0 }, { yPercent: translatePercent, duration: duration, ease: "expo.out" }, "counterStart");
                    } else {
                        tl.fromTo(colBox, { yPercent: translatePercent }, { yPercent: 0, duration: duration, ease: "expo.out" }, "counterStart");
                    }
                });
            }

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-[#f8fbff] py-10 lg:py-20 relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-[#0e54f1]/5 rounded-full blur-[120px]"></div>
                <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-cyan-400/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto w-layout-blockcontainer container-full-width relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16 flex flex-col items-center">
                    <Badge variant='blue'>Build with us!</Badge>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6">

                    {/* Left Column */}
                    <div className="flex flex-col gap-6">
                        {/* Main Hero Box */}
                        <div className="bento-box bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden group flex flex-col justify-center h-full">
                            <div className="relative z-10">
                                <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-semibold text-[#111] leading-[1.1] mb-4 tracking-tight">
                                    Be part of something <br className="hidden sm:block" />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0e54f1] to-cyan-500">
                                        extraordinary.
                                    </span>
                                </h2>
                                <p className="text-gray-500 text-sm sm:text-lg max-w-xl leading-relaxed mb-4">
                                    Joining our team means being part of a dynamic group of professionals dedicated to shaping the future with innovative tech.
                                </p>
                                <div className="inline-block">
                                    <AnimatedButton href="/career" text="MORE ABOUT US" />
                                </div>
                            </div>
                            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-gradient-to-br from-[#0e54f1]/10 to-cyan-400/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 ease-out"></div>
                        </div>

                        {/* Stats Box */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-200/80 py-4 lg:py-6 w-full bg-white/50 backdrop-blur-sm rounded-2xl shadow-sm border border-white/40">
                            <div className="flex flex-col items-center px-2 lg:px-3 group cursor-pointer hover:scale-105 transition-transform duration-300">
                                <CounterBox
                                    columns={stats.countries.columns}
                                    suffix={stats.countries.suffix}
                                    label="Countries Served"
                                    labelClass="text-gray-500 text-[12px] lg:text-[13px] mt-1"
                                />
                            </div>
                            <div className="flex flex-col items-center px-2 lg:px-3 group cursor-pointer hover:scale-105 transition-transform duration-300">
                                <CounterBox
                                    columns={stats.impact.columns}
                                    suffix={stats.impact.suffix}
                                    label="Transformative Impact"
                                    labelClass="text-gray-500 text-[12px] lg:text-[13px] mt-1"
                                />
                            </div>
                            <div className="flex flex-col items-center px-2 lg:px-3 group cursor-pointer hover:scale-105 transition-transform duration-300">
                                <CounterBox
                                    columns={stats.awards.columns}
                                    suffix={stats.awards.suffix}
                                    label="Award Winning"
                                    labelClass="text-gray-500 text-[12px] lg:text-[13px] mt-1"
                                />
                            </div>
                            <div className="flex flex-col items-center px-2 lg:px-3 group cursor-pointer hover:scale-105 transition-transform duration-300 border-r-0">
                                <CounterBox
                                    columns={stats.projects.columns}
                                    suffix={stats.projects.suffix}
                                    label="Projects Delivered"
                                    labelClass="text-gray-500 text-[12px] lg:text-[13px] mt-1"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-6">
                        {/* Perks Box */}
                        <div className="bento-box bg-gradient-to-br from-[#f8faff] via-white to-[#f0f4ff] rounded-2xl p-8 shadow-xl shadow-gray-200/50 border border-[#e6eeff] flex flex-col justify-center transform transition-transform hover:-translate-y-1 duration-300">
                            <h4 className="font-bold text-2xl text-[#111] mb-6">Perks & Benefits</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Collaborative Work Environment",
                                    "Career Growth Opportunities",
                                    "Work-Life Balance",
                                    "Competitive Compensation"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 font-medium text-gray-600">
                                        <svg className="w-6 h-6 text-slate-800 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-[15px] leading-tight mt-1">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Image Box */}
                        <div className="bento-box rounded-2xl overflow-hidden shadow-xl relative group flex-grow min-h-[200px]">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                                alt="Team Collaboration"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div>
                                    <p className="text-cyan-400 text-[11px] font-bold tracking-wider uppercase mb-1">Our Culture</p>
                                    <h4 className="text-white text-xl font-bold">Driven by Innovation</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
