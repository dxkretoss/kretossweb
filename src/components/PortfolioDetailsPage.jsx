import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolioDetailsData } from './portfolio/portfoliodetails';
import AnimatedButton from './ui/AnimatedButton';
import CtaSection from './about/CTASection';

export default function PortfolioDetailsPage() {
    const { slug } = useParams();
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
            <div className="min-h-screen bg-[#0a0a0a] pt-20 pb-20">
                <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">

                    {/* Header Section */}
                    <div className="mb-12">
                        <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors mb-6 inline-flex items-center gap-2">
                            <span>←</span> Back to Portfolio
                        </Link>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            {project.name}
                        </h1>
                    </div>

                    {/* Big Laptop Mockup Showcase */}
                    <div className="w-full bg-[#161616] border-[1px] border-[#333] rounded-3xl overflow-hidden p-8 md:p-16 flex flex-col items-center shadow-2xl">

                        {/* Laptop Container */}
                        <div className="relative w-full max-w-[1000px] group">
                            {/* Laptop Lid - Decreased height using aspect-video (16:9) */}
                            <div className="relative w-full bg-[#0a0a0a] rounded-t-2xl sm:rounded-t-3xl border-[8px] sm:border-[12px] border-[#222] shadow-[0_0_50px_rgba(0,0,0,0.8)] aspect-video overflow-hidden z-20">
                                {/* Camera dot */}
                                {/* <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#111] rounded-full z-30 ring-1 ring-white/10"></div> */}

                                {/* Screen Content - Scrolling Image on Hover using background-position */}
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

                        {/* Project Meta Info Bar */}
                        <div className="w-full max-w-[1000px] mt-24 flex flex-col md:flex-row justify-between items-end gap-10">
                            <div className="flex gap-16 w-full md:w-auto">
                                <div>
                                    <p className="text-gray-400 text-sm md:text-base mb-2">Category</p>
                                    <p className="text-white text-xl md:text-2xl font-bold">{project.category}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm md:text-base mb-2">Technology</p>
                                    <p className="text-white text-xl md:text-2xl font-bold">{project.techStack}</p>
                                </div>
                            </div>

                            <AnimatedButton
                                text="VISIT SITE"
                                href={project.link}
                                className="!w-auto"
                            />
                        </div>

                    </div>
                </div>
            </div>

            <CtaSection />
        </>
    );
}
