import React from 'react';
import { Clock } from 'lucide-react';

const portfolios = [
    {
        category: "Healthcare",
        countryCode: "us",
        country: "USA",
        title: "Telehealth Patient Platform",
        tech: ["React", "Node.js", "AWS"],
        time: "6 months",
        impact: "3x patient bookings",
        gradient: "bg-gradient-to-br from-[#288cff] to-[#1560e8]",
    },
    {
        category: "E-commerce",
        countryCode: "GB",
        country: "UK",
        title: "Multi-vendor Fashion Marketplace",
        tech: ["Shopify Plus", "React"],
        time: "4 months",
        impact: "+62% conversion rate",
        gradient: "bg-gradient-to-br from-[#ad45ff] to-[#8d24d9]",
    },
    {
        category: "Logistics",
        countryCode: "AE",
        country: "UAE",
        title: "Logistics Fleet Management SaaS",
        tech: ["Flutter", "Python", "GCP"],
        time: "8 months",
        impact: "40% ops cost reduction",
        gradient: "bg-gradient-to-br from-[#213359] to-[#121d38]",
    }
];

const Portfolio = () => {
    return (
        <section className="py-10 lg:py-20 bg-[#f9fbff] font-sans">
            <div className="container mx-auto px-6 max-w-[1200px]">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h3 className="text-[#3b82f6] font-bold text-[13px] tracking-[0.15em] uppercase mb-4">
                        Featured Portfolio
                    </h3>
                    <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#0f172a] mb-5 tracking-tight">
                        Work That Moves the Needle
                    </h2>
                    <p className="text-[#64748b] text-[17px] font-medium">
                        Placeholder case studies — swap with real Kretoss projects.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolios.map((item, index) => (
                        <div key={index} className="bg-white rounded-[24px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300">

                            {/* Top Image/Gradient Section */}
                            <div className={`h-[200px] ${item.gradient} relative p-5 flex flex-col justify-between`}>
                                {/* Top Badges */}
                                <div className="flex justify-between items-center w-full">
                                    <span className="bg-white text-[#0f172a] text-[12.5px] font-bold py-1.5 px-4 rounded-full shadow-sm">
                                        {item.category}
                                    </span>
                                    <span className="bg-black/20 text-white text-[12.5px] font-bold py-1.5 px-4 rounded-full flex items-center gap-1.5 backdrop-blur-sm">
                                        <span className="text-[10px] uppercase opacity-70 tracking-wider font-extrabold">{item.countryCode}</span> {item.country}
                                    </span>
                                </div>

                                {/* Center Screenshot Placeholder */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/25 backdrop-blur-md text-white font-mono text-[13px] font-semibold py-2 px-5 rounded-lg whitespace-nowrap shadow-inner border border-white/10">
                                    [ project screenshot ]
                                </div>
                            </div>

                            {/* Bottom Content Section */}
                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-[20px] font-extrabold text-[#0f172a] mb-4">
                                    {item.title}
                                </h3>

                                {/* Tech Pills */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {item.tech.map((tech, i) => (
                                        <span key={i} className="bg-[#f0f4ff] text-[#3b82f6] text-[13px] font-bold py-1 px-3 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Stats */}
                                <div className="flex items-center gap-6 mb-8 mt-auto">
                                    <div className="flex items-center gap-1.5 text-[#64748b] text-[13.5px] font-semibold">
                                        <Clock className="w-4 h-4 text-[#94a3b8]" />
                                        <span>{item.time}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-[#16a34a] text-[13.5px] font-bold">
                                        <span className="text-[10px]">▲</span>
                                        <span>{item.impact}</span>
                                    </div>
                                </div>

                                {/* Button */}
                                <button className="w-full bg-white border border-[#e2e8f0] hover:border-[#3b82f6] text-[#3b82f6] hover:bg-blue-50/50 font-bold text-[15px] py-3.5 rounded-xl transition-colors">
                                    View Case Study &rarr;
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
