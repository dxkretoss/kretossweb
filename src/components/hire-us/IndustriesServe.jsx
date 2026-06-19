import React from 'react';
import { industriesData } from '../../data/hire-us';
import Badge from '../ui/Badge';

export default function IndustriesServe() {
    return (
        <section className="py-10 lg:py-20 relative overflow-hidden bg-white">
            {/* Inline CSS for marquee animation */}
            <style>
                {`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-50% - 1rem)); } /* -50% because we duplicate the array, -1rem for gap */
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                    display: flex;
                    width: max-content;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
                `}
            </style>

            <div className="container mx-auto max-w-7xl px-4 relative z-10">
                <div className="text-center mb-12 lg:mb-16 flex flex-col items-center">
                    <div className='mb-5'>
                        <Badge variant="blue">Our Expertise</Badge>
                    </div>
                    <h2 className="text-[24px] lg:text-[36px] font-bold text-[#111] tracking-tight mb-6">
                        Industries We Serve
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We bring deep domain expertise across various sectors, delivering tailor-made digital solutions that solve real-world industry challenges.
                    </p>
                </div>
            </div>

            {/* Full-width Marquee Container */}
            <div className="relative w-full overflow-hidden py-4">
                {/* Left/Right Fade Gradients for smooth entrance/exit */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                <div className="animate-marquee gap-6 px-4">
                    {/* Duplicate the data to create a seamless loop */}
                    {[...industriesData, ...industriesData].map((industry, idx) => (
                        <div
                            key={idx}
                            className="relative w-[320px] h-[220px] rounded-2xl overflow-hidden group cursor-pointer flex-shrink-0 shadow-sm border border-gray-100"
                        >
                            {/* Background Image */}
                            <img
                                src={industry.image}
                                alt={industry.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-90"></div>

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 border border-white/20 transform transition-transform duration-500 group-hover:-translate-y-2">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={industry.icon} />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white transform transition-transform duration-500 group-hover:-translate-y-1">{industry.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
