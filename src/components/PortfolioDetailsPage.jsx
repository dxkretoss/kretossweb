import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { portfolioDetailsData } from './portfolio/portfoliodetails';
import AnimatedButton from './ui/AnimatedButton';
import CtaSection from './about/CTASection';

export default function PortfolioDetailsPage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);

    useEffect(() => {
        // Find project by slug
        const foundProject = portfolioDetailsData.find(p => p.slug === slug);
        setProject(foundProject);
    }, [slug]);

    useEffect(() => {
        if (project) {
            // Force scroll to top after DOM update
            const timer = setTimeout(() => {
                window.scrollTo(0, 0);
                if (window.lenis) {
                    window.lenis.scrollTo(0, { immediate: true });
                }
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [project]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
                <div className="text-white text-2xl">Project not found</div>
            </div>
        );
    }

    return (
        <>
            <div className="min-h-screen bg-[#0a0a0a] pt-10 pb-20">
                <div className="container mx-auto px-6 lg:px-12 max-w-[1200px]">

                    {/* Header & Meta Section */}
                    <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 mb-16 pb-16 border-b border-white/10">
                        
                        {/* Header Section */}
                        <div className="lg:w-1/2">
                            <div className="flex items-center gap-4 mb-6">
                                <button 
                                    onClick={() => navigate(-1)}
                                    className="text-white hover:text-gray-300 transition-colors cursor-pointer flex items-center justify-center p-2 -ml-2 rounded-full hover:bg-white/10"
                                    aria-label="Go back"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="19" y1="12" x2="5" y2="12"></line>
                                        <polyline points="12 19 5 12 12 5"></polyline>
                                    </svg>
                                </button>
                                <h1 className="text-5xl md:text-6xl lg:text-[48px] font-bold text-white tracking-tight leading-tight m-0">
                                    {project.name}
                                </h1>
                            </div>
                            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                                {project.purpose}
                            </p>
                        </div>

                        {/* Meta Grid */}
                        <div className="lg:w-1/2 mt-4 lg:mt-0">
                            <div className="grid grid-cols-2 h-full">
                                <div className="flex flex-col justify-center gap-2 pb-8 lg:pr-8 border-b border-r border-white/10">
                                    <span className="text-gray-500 uppercase tracking-widest text-xs font-bold">Client</span>
                                    <span className="text-white text-lg font-semibold">{project.client}</span>
                                </div>
                                <div className="flex flex-col justify-center gap-2 pb-8 pl-6 lg:pl-8 border-b border-white/10">
                                    <span className="text-gray-500 uppercase tracking-widest text-xs font-bold">Category</span>
                                    <span className="text-white text-lg font-semibold">{project.category}</span>
                                </div>
                                <div className="flex flex-col justify-center gap-2 pt-8 lg:pr-8 border-r border-white/10">
                                    <span className="text-gray-500 uppercase tracking-widest text-xs font-bold">Timeline</span>
                                    <span className="text-white text-lg font-semibold">{project.timeline}</span>
                                </div>
                                <div className="flex flex-col justify-center gap-2 pt-8 pl-6 lg:pl-8">
                                    <span className="text-gray-500 uppercase tracking-widest text-xs font-bold">Tech Stack</span>
                                    <span className="text-[#44c7f6] text-lg font-bold">{project.techStack}</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Big Laptop Mockup Showcase */}
                    <div className="w-full bg-[#161616] border-[1px] border-[#333] rounded-3xl overflow-hidden p-8 md:p-16 flex flex-col items-center shadow-2xl mb-16 relative group/showcase">
                        {/* Subtle background glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0037f0]/5 to-transparent pointer-events-none group-hover/showcase:from-[#0037f0]/10 transition-colors duration-700"></div>

                        {/* Laptop Container */}
                        <div className="relative w-full max-w-[1000px] group z-10">
                            {/* Laptop Lid */}
                            <div className="relative w-full bg-[#0a0a0a] rounded-t-2xl sm:rounded-t-3xl border-[8px] sm:border-[12px] border-[#222] shadow-[0_0_50px_rgba(0,0,0,0.8)] aspect-video overflow-hidden z-20">
                                {/* Screen Content */}
                                <div className="relative w-full h-full bg-[#121212] overflow-hidden rounded-sm">
                                    <div
                                        className="w-full h-full bg-top hover:bg-bottom transition-[background-position] duration-[12s] ease-in-out cursor-pointer"
                                        style={{
                                            backgroundImage: `url(${project.portfolioImage})`,
                                            backgroundSize: '100% auto',
                                            backgroundRepeat: 'no-repeat'
                                        }}
                                    ></div>
                                </div>
                            </div>
                            {/* Laptop Base */}
                            <div className="relative w-[114%] -left-[7%] h-4 sm:h-6 bg-[#222] rounded-b-2xl sm:rounded-b-3xl shadow-[0_30px_60px_rgba(0,0,0,0.9)] z-10 flex justify-center">
                                <div className="w-[20%] h-[40%] bg-[#111] rounded-b-lg mx-auto mt-0"></div>
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10"></div>
                            </div>
                        </div>

                        {/* Visit Site Button inside showcase */}
                        <div className="mt-16 z-10">
                            <AnimatedButton
                                text="VISIT LIVE SITE"
                                href={project.link}
                                className="!w-auto"
                                target="_blank"
                            />
                        </div>
                    </div>

                    {/* Challenge & Solution Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                        <div className="bg-[#111] border border-[#222] p-10 rounded-3xl hover:border-[#44c7f6]/30 hover:shadow-[0_0_30px_rgba(68,199,246,0.1)] transition-all duration-500 group">
                            <h3 className="text-2xl text-white font-bold mb-4 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center text-lg font-black">!</div>
                                The Challenge
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                {project.challenge}
                            </p>
                        </div>
                        <div className="bg-[#111] border border-[#222] p-10 rounded-3xl hover:border-[#0037f0]/30 hover:shadow-[0_0_30px_rgba(0,55,240,0.1)] transition-all duration-500 group">
                            <h3 className="text-2xl text-white font-bold mb-4 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#44c7f6]/10 text-[#44c7f6] flex items-center justify-center text-lg font-black">✓</div>
                                The Solution
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                {project.solution}
                            </p>
                        </div>
                    </div>

                    {/* Key Features */}
                    {project.keyFeatures && (
                        <div>
                            <h3 className="text-3xl text-white font-bold mb-8 tracking-tight">Key Features</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {project.keyFeatures.map((feature, idx) => (
                                    <div key={idx} className="bg-gradient-to-br from-[#161616] to-[#0a0a0a] border border-[#333] p-6 rounded-2xl flex items-center gap-4 hover:-translate-y-1 hover:border-[#44c7f6]/50 transition-all duration-300">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#44c7f6] shadow-[0_0_10px_#44c7f6]"></div>
                                        <span className="text-gray-300 font-medium text-sm md:text-base">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </div>

            <CtaSection />
        </>
    );
}
