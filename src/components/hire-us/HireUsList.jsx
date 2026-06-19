import React, { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { developersData } from '../../data/hire-us';
import Badge from '../ui/Badge';
import AnimatedButton from '../ui/AnimatedButton';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function HireUsList() {
    const listRef = useRef(null);
    const [activeTab, setActiveTab] = useState('All');

    const tabs = ['All', 'Frontend', 'Backend', 'Mobile', 'CMS/eCommerce'];

    const filteredData = activeTab === 'All'
        ? developersData
        : developersData.filter(dev => dev.category === activeTab);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.developer-card');

            // Complex Entrance Animation
            gsap.fromTo(cards,
                { opacity: 0, scale: 0.8, rotationY: 45, y: 100 },
                {
                    opacity: 1,
                    scale: 1,
                    rotationY: 0,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "back.out(1.4)",
                    scrollTrigger: {
                        trigger: listRef.current,
                        start: "top 75%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, listRef);

        return () => ctx.revert();
    }, [activeTab]); // Re-run animation when tab changes

    return (
        <section ref={listRef} className="py-10 lg:py-20 relative overflow-hidden bg-[#fafcff]">
            {/* Ambient Background Blur */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0037f0] rounded-full blur-[200px] opacity-[0.03] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#44c7f6] rounded-full blur-[150px] opacity-[0.04] pointer-events-none"></div>

            <div className="container mx-auto max-w-7xl px-4 relative z-10">

                <div className="text-center mb-12 flex flex-col items-center">
                    <div className='mb-5'>
                        <Badge variant="blue">Top Talent</Badge>
                    </div>
                    <h2 className="text-[24px] lg:text-[36px] font-bold text-[#111] tracking-tight mb-6">
                        Hire Dedicated Developers
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                        Scale your engineering capacity instantly with our pre-vetted, top-tier developers.
                        Choose your technology stack and get started today.
                    </p>

                    {/* Modern Animated Tabs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full justify-start lg:justify-center items-center gap-2 mb-16 p-2 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 max-w-full lg:max-w-fit mx-auto"
                    >
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`relative px-6 py-3 rounded-xl text-sm md:text-base font-semibold transition-colors duration-300 outline-none whitespace-nowrap shrink-0 ${activeTab === tab ? "!text-white" : "!text-gray-500 hover:text-gray-900"
                                    }`}
                                style={{ WebkitTapHighlightColor: "transparent" }}
                            >
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="active-hire-us-tab"
                                        className="absolute inset-0 rounded-xl shadow-md"
                                        style={{ backgroundImage: 'linear-gradient(#44c7f6, #0037f0)' }}
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{tab}</span>
                            </button>
                        ))}
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[2000px]">
                    {filteredData.map((dev) => (
                        <div
                            key={dev.id}
                            className="developer-card group relative p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(0,55,240,0.08)] flex flex-col h-full transform-style-3d"
                        >
                            {/* Animated Glowing Border Effect on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#44c7f6] to-[#0037f0] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10" style={{ padding: '2px' }}>
                                <div className="w-full h-full bg-white rounded-3xl"></div>
                            </div>

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Header with Icon */}
                                <div className="flex items-center gap-5 mb-6">
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center p-3 shadow-sm transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                                        style={{ backgroundColor: dev.bgColor, border: `1px solid ${dev.color}20` }}
                                    >
                                        <img src={dev.icon} alt={dev.title} className="w-full h-full object-contain" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">{dev.category}</div>
                                        <h3 className="text-2xl font-bold text-[#111]">{dev.title}</h3>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-8 leading-relaxed flex-grow text-[15px]">
                                    {dev.description}
                                </p>

                                {/* Features List */}
                                <ul className="space-y-4 mb-10">
                                    {dev.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm font-semibold text-gray-700">
                                            <div className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center bg-gray-50 border border-gray-100 shadow-sm group-hover:border-[#0037f0] group-hover:bg-[#0037f0]/10 transition-colors duration-300">
                                                <svg className="w-3.5 h-3.5 text-[#0037f0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Action Button */}
                                <div className="mt-auto pt-6 border-t border-gray-100 group-hover:border-transparent transition-colors duration-300">
                                    <AnimatedButton
                                        text={`Hire ${dev.title.split(' ')[0]} Expert`}
                                        href={`/hire-us/${dev.slug}`}
                                        className="w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
