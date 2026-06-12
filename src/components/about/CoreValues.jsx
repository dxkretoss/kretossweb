import React from 'react';

const values = [
    {
        title: "Development",
        desc: "Our growth work process is designed to ensure sustainable and measurable",
        delay: 0
    },
    {
        title: "Team Work",
        desc: "Our Team work process is designed to ensure sustainable and measurable",
        delay: 0.1
    },
    {
        title: "Innovation",
        desc: "Our Innovation process is designed to ensure sustainable and measurable success",
        delay: 0.2
    },
    {
        title: "Precision",
        desc: "Our Precision process is designed to ensure sustainable and measurable",
        delay: 0.1
    },
    {
        title: "Adaptability",
        desc: "Our Adaptability process is designed to ensure sustainable and measurable",
        delay: 0.2
    },
    {
        title: "Execution",
        desc: "Our Excution is designed to ensure sustainable and measurable success",
        delay: 0.3
    }
];

export default function CoreValues() {
    return (
        <section className="conatiner bg-[#0c0c0c] text-white py-24 px-6 md:px-12 relative overflow-hidden">
            <div className="flex flex-col items-center relative z-10">

                {/* Section Header */}
                <div className="flex flex-col items-center mb-16 text-center">
                    {/* Badge */}
                    <div className="cv-header-element inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/10 mb-6">
                        <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887be_Star%2018.svg"
                            alt="Star"
                            className="w-3 h-3 animate-[spin_4s_linear_infinite]"
                        />
                        <span className="text-xs text-gray-300 font-medium tracking-widest uppercase mt-0.5">Core values</span>
                    </div>

                    {/* Title */}
                    <h2 className="cv-header-element text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight">
                        What Are Our Core Values
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="cv-grid w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: '1200px' }}>
                    {values.map((val, idx) => (
                        <div
                            key={idx}
                            className="cv-card group relative border border-white/10 rounded-2xl p-8 md:p-10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.05)] cursor-pointer"
                            style={{
                                backgroundImage: `url('/about/card-bg.png')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                            {/* Dark Overlay for readability (optional, you can adjust opacity) */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 -z-10"></div>

                            {/* Icon & Divider */}
                            <div className="mb-8">
                                <img
                                    loading="lazy"
                                    src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69c90d3846893a3b52616a9a_shape.svg"
                                    alt="Star Icon"
                                    className="w-8 h-8 mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
                                />
                                <div className="w-full h-px bg-gradient-to-r from-white/20 to-transparent"></div>
                            </div>

                            {/* Text Content */}
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold tracking-wide mb-6 text-white uppercase group-hover:text-blue-200 transition-colors duration-300">
                                    {val.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed pr-4 group-hover:text-gray-300 transition-colors duration-300">
                                    {val.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}