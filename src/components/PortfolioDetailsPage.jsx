import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { portfolioDetailsData } from './portfolio/portfoliodetails';
import AnimatedButton from './ui/AnimatedButton';
import CtaSection from './about/CTASection';

export default function PortfolioDetailsPage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);
    const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const minSwipeDistance = 50;

    const nextScreen = () => {
        if (project?.mobileScreens) {
            setCurrentScreenIndex((prev) => (prev + 1) % project.mobileScreens.length);
        }
    };

    const prevScreen = () => {
        if (project?.mobileScreens) {
            setCurrentScreenIndex((prev) => (prev - 1 + project.mobileScreens.length) % project.mobileScreens.length);
        }
    };

    const handleTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextScreen();
        } else if (isRightSwipe) {
            prevScreen();
        }
    };

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

    const renderProjectContent = (isMobileLayout = false) => (
        <>
            {/* Challenge & Solution Section */}
            <div className={`grid grid-cols-1 md:grid-cols-2 ${isMobileLayout ? 'gap-6 mb-10' : 'gap-10 mb-16'}`}>
                <div className={`bg-[#111] border border-[#222] ${isMobileLayout ? 'p-6 md:p-8' : 'p-10'} rounded-3xl hover:border-[#44c7f6]/30 hover:shadow-[0_0_30px_rgba(68,199,246,0.1)] transition-all duration-500 group`}>
                    <h3 className={`${isMobileLayout ? 'text-xl' : 'text-2xl'} text-white font-bold mb-4 flex items-center gap-3`}>
                        <div className={`${isMobileLayout ? 'w-8 h-8' : 'w-10 h-10'} rounded-full bg-red-500/10 text-red-500 flex items-center justify-center ${isMobileLayout ? 'text-base' : 'text-lg'} font-black`}>!</div>
                        The Challenge
                    </h3>
                    <p className={`text-gray-400 leading-relaxed ${isMobileLayout ? 'text-base' : 'text-lg'}`}>
                        {project.challenge}
                    </p>
                </div>
                <div className={`bg-[#111] border border-[#222] ${isMobileLayout ? 'p-6 md:p-8' : 'p-10'} rounded-3xl hover:border-[#0037f0]/30 hover:shadow-[0_0_30px_rgba(0,55,240,0.1)] transition-all duration-500 group`}>
                    <h3 className={`${isMobileLayout ? 'text-xl' : 'text-2xl'} text-white font-bold mb-4 flex items-center gap-3`}>
                        <div className={`${isMobileLayout ? 'w-8 h-8' : 'w-10 h-10'} rounded-full bg-[#44c7f6]/10 text-[#44c7f6] flex items-center justify-center ${isMobileLayout ? 'text-base' : 'text-lg'} font-black`}>✓</div>
                        The Solution
                    </h3>
                    <p className={`text-gray-400 leading-relaxed ${isMobileLayout ? 'text-base' : 'text-lg'}`}>
                        {project.solution}
                    </p>
                </div>
            </div>

            {/* Key Features */}
            {project.keyFeatures && (
                <div>
                    <h3 className={`${isMobileLayout ? 'text-2xl mb-6' : 'text-3xl mb-8'} text-white font-bold tracking-tight`}>Key Features</h3>
                    <div className={`grid grid-cols-1 sm:grid-cols-2 ${isMobileLayout ? 'lg:grid-cols-2 gap-4' : 'lg:grid-cols-4 gap-6'}`}>
                        {project.keyFeatures.map((feature, idx) => (
                            <div key={idx} className={`bg-gradient-to-br from-[#161616] to-[#0a0a0a] border border-[#333] ${isMobileLayout ? 'p-5' : 'p-6'} rounded-2xl flex items-center gap-4 hover:-translate-y-1 hover:border-[#44c7f6]/50 transition-all duration-300`}>
                                <div className="w-2.5 h-2.5 rounded-full bg-[#44c7f6] shadow-[0_0_10px_#44c7f6]"></div>
                                <span className={`text-gray-300 font-medium ${isMobileLayout ? 'text-sm' : 'text-sm md:text-base'}`}>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );

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
                                <h1 className="text-[36px] lg:text-[48px] font-bold text-white tracking-tight leading-tight m-0">
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

                    {/* Showcase Section */}
                    {project.category === "Mobile app" ? (
                        <div className="w-full bg-[#161616] border-[1px] border-[#333] rounded-3xl overflow-hidden p-8 lg:p-12 shadow-2xl relative group/showcase">
                            {/* Subtle background glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#44c7f6]/5 to-transparent pointer-events-none group-hover/showcase:from-[#44c7f6]/10 transition-colors duration-700"></div>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                                {/* Left Side: Mobile Mockup */}
                                <div className="lg:col-span-5 flex flex-col items-center">
                                    {/* Mobile Mockup */}
                                    <div className="relative w-full max-w-[300px] bg-[#0a0a0a] rounded-[2rem] border-[10px] border-[#222] shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden [transform:translateZ(0)]">
                                        {/* Notch */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-5 bg-[#222] rounded-b-xl z-30"></div>

                                        {/* Screen */}
                                        {project.mobileScreens ? (
                                            <div
                                                className="w-full relative cursor-pointer group/screen select-none rounded-[22px] overflow-hidden"
                                                onClick={nextScreen}
                                                onTouchStart={handleTouchStart}
                                                onTouchMove={handleTouchMove}
                                                onTouchEnd={handleTouchEnd}
                                            >
                                                <img
                                                    src={project.mobileScreens[currentScreenIndex]}
                                                    alt={`Screen ${currentScreenIndex + 1}`}
                                                    className="w-full h-auto block transition-opacity duration-300 pointer-events-none"
                                                    draggable="false"
                                                />
                                                <div className="absolute inset-y-0 right-0 w-1/4 flex items-center justify-end pr-4 opacity-0 group-hover/screen:opacity-100 transition-opacity pointer-events-none z-40">
                                                    <div className="bg-black/50 backdrop-blur-sm rounded-full p-2 text-white shadow-lg">
                                                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="w-full aspect-[9/19.5] bg-[#121212] overflow-hidden relative">
                                                <div className="w-full h-full bg-top hover:bg-bottom transition-[background-position] duration-[12s] ease-in-out cursor-pointer" style={{ backgroundImage: `url(${project.portfolioImage})`, backgroundSize: '100% auto', backgroundRepeat: 'no-repeat' }}></div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Download Links */}
                                    {project.appLinks && (
                                        <div className="mt-10 flex flex-wrap justify-center gap-4">
                                            {project.appLinks.android && (
                                                <a href={project.appLinks.android} target="_blank" rel="noreferrer" className="block hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-all duration-300 rounded-lg">
                                                    <img src="/portfolio/google_play_btn.jpg" alt="Get it on Google Play" className="h-[45px] w-auto rounded-lg object-contain" />
                                                </a>
                                            )}
                                            {project.appLinks.ios && (
                                                <a href={project.appLinks.ios} target="_blank" rel="noreferrer" className="block hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-all duration-300 rounded-lg">
                                                    <img src="/portfolio/app_store_btn.jpg" alt="Download on the App Store" className="h-[45px] w-auto rounded-lg object-contain" />
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Right Side: Content */}
                                <div className="lg:col-span-7">
                                    {renderProjectContent(true)}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
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

                            {renderProjectContent(false)}
                        </>
                    )}

                </div>
            </div>

            <CtaSection />
        </>
    );
}
