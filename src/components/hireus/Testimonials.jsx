import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Badge from '../ui/Badge';

const testimonials = [
    {
        quote: "Kretoss gave us a dedicated React team that felt like our own employees. Communication was flawless and they shipped two weeks ahead of schedule.",
        image: "https://i.pravatar.cc/150?img=47",
        name: "Sarah Mitchell",
        role: "CTO, HealthBridge (USA)",
        source: "CLUTCH"
    },
    {
        quote: "We moved our entire Shopify Plus build to Kretoss after two failed agencies. Conversion is up 62% and support has been outstanding.",
        image: "https://i.pravatar.cc/150?img=11",
        name: "James Okafor",
        role: "Founder, Vestire (UK)",
        source: "GOOGLE"
    },
    {
        quote: "Their hourly model is perfect for our ongoing product work. Transparent timesheets, senior developers, zero micromanagement needed.",
        image: "https://i.pravatar.cc/150?img=5",
        name: "Elena Kovács",
        role: "Product Lead, Freightly (UAE)",
        source: "UPWORK"
    }
];

const logos = [
    { name: "UDIC", src: "/companies/ludic.svg" },
    { name: "ColorMetrics", src: "/companies/color-matrics.svg" },
    { name: "ROAMALY", src: "/companies/roamly.svg" },
    { name: "Ludic Kitchen", src: "/companies/ludic-kitchen.svg" },
    { name: "DS", src: "/companies/dreamload.svg" }
];

const Testimonials = () => {
    const [activePill, setActivePill] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActivePill(prev => (prev + 1) % 3);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const pills = [
        { text: "4.9 Google Reviews", icon: <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> },
        { text: "Top Rated on Upwork", icon: <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" /> },
        { text: "5.0 Clutch Rating", icon: <Star className="w-4 h-4 fill-red-500 text-red-500" /> }
    ];

    return (
        <section className="py-10 lg:py-20 bg-white font-sans overflow-hidden">
            <div className="container mx-auto px-6 max-w-[1200px]">

                {/* Header */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-8 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >

                    <div className="flex items-center justify-center mb-4">
                        <Badge variant='blue'>Client Testimonials</Badge>
                    </div>
                    <h2 className="text-[24px] md:text-[36px] font-semibold text-[#0f172a] mb-6 tracking-tight">
                        Loved by Teams Worldwide
                    </h2>

                    {/* Rating Pills */}
                    <motion.div
                        className="flex justify-center h-[34px] relative md:h-auto md:flex-wrap md:gap-3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } }
                        }}
                    >
                        {pills.map((pill, index) => (
                            <motion.div
                                key={index}
                                className={`absolute md:relative flex items-center gap-2 px-4 py-1 bg-white border border-[#e2e8f0] rounded-full shadow-sm transition-all duration-500
                                ${activePill === index ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-2 -z-10 md:opacity-100 md:translate-y-0 md:z-10'}`}
                                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                            >
                                {pill.icon}
                                <span className="text-[#475569] text-sm font-semibold">{pill.text}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    className="grid lg:grid-cols-3 gap-6 mb-16 lg:mb-24"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                >
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#f8fafc] border border-[#f1f5f9] p-8 md:p-10 rounded-[24px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between h-full"
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-[#64748b] text-[15px] leading-relaxed mb-8 flex-1">
                                "{item.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                                />
                                <div className="flex-1">
                                    <h4 className="text-[#0f172a] font-bold text-[15px]">
                                        {item.name}
                                    </h4>
                                    <p className="text-[#94a3b8] text-[13px]">
                                        {item.role}
                                    </p>
                                </div>
                                {/* <div className="text-[#94a3b8] text-xs font-bold tracking-wider">
                                    {item.source}
                                </div> */}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Marquee Section */}
            <motion.div
                className="relative w-full border-t border-[#f1f5f9] pt-6 pb-6 overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                {/* Scrolling content */}
                <div className="flex whitespace-nowrap animate-[marquee_40s_linear_infinite] items-center">
                    {[...logos, ...logos, ...logos].map((logo, idx) => (
                        <div key={idx} className="mx-8 lg:mx-12 shrink-0">
                            <img src={logo.src} alt={logo.name} className="h-8 md:h-10 object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                        </div>
                    ))}
                </div>
            </motion.div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.3333%); }
                }
            `}} />
        </section>
    );
};

export default Testimonials;
