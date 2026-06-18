import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { portfolioDetailsData } from '../data/portfoliodetails';
import AnimatedButton from './ui/AnimatedButton';
import CtaSection from './about/CTASection';
import { FaChevronRight } from 'react-icons/fa';

export default function PortfolioDetailsPage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);
    const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [desktopScrollMode, setDesktopScrollMode] = useState('auto');

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

    useEffect(() => {
        if (!project?.mobileScreens) return;
        const intervalId = setInterval(() => {
            setCurrentScreenIndex((prev) => (prev + 1) % project.mobileScreens.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, [project, currentScreenIndex]);

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
            <div className={`grid grid-cols-1 md:grid-cols-2 ${isMobileLayout ? 'gap-6 mb-10' : 'gap-10 mb-8 md:mb-16'}`}>
                <div className={`bg-[#111] border border-[#222] ${isMobileLayout ? 'p-5 md:p-8' : 'p-5 md:p-10'} rounded-3xl hover:border-[#44c7f6]/30 hover:shadow-[0_0_30px_rgba(68,199,246,0.1)] transition-all duration-500 group`}>
                    <h3 className={`${isMobileLayout ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'} text-white font-bold mb-4 flex items-center gap-3`}>
                        <div className={`${isMobileLayout ? 'w-8 h-8' : 'w-10 h-10'} rounded-full bg-red-500/10 text-red-500 flex items-center justify-center ${isMobileLayout ? 'text-base' : 'text-lg'} font-black`}>!</div>
                        The Challenge
                    </h3>
                    <p className={`text-gray-400 leading-relaxed ${isMobileLayout ? 'text-[14px] md:text-base' : 'text-[14px] md:text-lg'}`}>
                        {project.challenge}
                    </p>
                </div>
                <div className={`bg-[#111] border border-[#222] ${isMobileLayout ? 'p-5 md:p-8' : 'p-5 md:p-10'} rounded-3xl hover:border-[#0037f0]/30 hover:shadow-[0_0_30px_rgba(0,55,240,0.1)] transition-all duration-500 group`}>
                    <h3 className={`${isMobileLayout ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'} text-white font-bold mb-4 flex items-center gap-3`}>
                        <div className={`${isMobileLayout ? 'w-8 h-8' : 'w-10 h-10'} rounded-full bg-[#44c7f6]/10 text-[#44c7f6] flex items-center justify-center ${isMobileLayout ? 'text-base' : 'text-lg'} font-black`}>✓</div>
                        The Solution
                    </h3>
                    <p className={`text-gray-400 leading-relaxed ${isMobileLayout ? 'text-[14px] md:text-base' : 'text-[14px] md:text-lg'}`}>
                        {project.solution}
                    </p>
                </div>
            </div>

            {/* Key Features */}
            {project.keyFeatures && (
                <div>
                    <h3 className={`${isMobileLayout ? 'text-xl md:text-2xl mb-6' : 'text-2xl md:text-3xl mb-8'} text-white font-bold tracking-tight`}>Key Features</h3>
                    <div className={`grid grid-cols-1 sm:grid-cols-2 ${isMobileLayout ? 'lg:grid-cols-2 gap-4' : 'lg:grid-cols-4 gap-6'}`}>
                        {project.keyFeatures.map((feature, idx) => (
                            <div key={idx} className={`bg-gradient-to-br from-[#161616] to-[#0a0a0a] border border-[#333] ${isMobileLayout ? 'p-5' : 'p-6'} rounded-2xl flex items-center gap-4 hover:-translate-y-1 hover:border-[#44c7f6]/50 transition-all duration-300`}>
                                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#44c7f6]/10 text-[#44c7f6] shrink-0 border border-[#44c7f6]/30 shadow-[0_0_10px_rgba(68,199,246,0.3)]">
                                    <FaChevronRight className="w-3 h-3 ml-0.5" />
                                </div>
                                <span className={`text-gray-300 font-medium ${isMobileLayout ? 'text-sm' : 'text-sm md:text-base'}`}>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );

    const renderCaseStudy = () => {
        if (!project.caseStudy) return null;
        return (
            <div className="pb-10 md:pb-10 pt-10 md:pt-10 border-t border-[#222] relative z-10 container mx-auto px-4 sm:px-6 max-w-[1400px]">
                <div className="text-center mb-10 md:mb-16">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#44c7f6] to-[#0037f0] text-sm md:text-base font-bold uppercase tracking-widest mb-3 block">In-Depth Review</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">Case Study</h2>
                </div>

                <div className="bg-[#111] rounded-3xl p-6 sm:p-10 md:p-16 border border-[#222]">
                    {/* Overview */}
                    <div className="mb-12 md:mb-20">
                        <h3 className="text-white text-xl md:text-2xl font-bold mb-4">Overview</h3>
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                            {project.caseStudy.overview}
                        </p>
                    </div>

                    {/* Process */}
                    <div className="mb-12 md:mb-20">
                        <h3 className="text-white text-xl md:text-2xl font-bold mb-8 md:mb-10">Our Approach</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                            {project.caseStudy.process.map((step, idx) => (
                                <div key={idx} className="relative">
                                    <div className="text-6xl md:text-8xl font-black text-[#1a1a1a] absolute -top-6 -left-4 z-0 pointer-events-none select-none transition-transform group-hover:-translate-y-2">
                                        0{idx + 1}
                                    </div>
                                    <div className="relative z-10 pt-4">
                                        <h4 className="text-white text-lg md:text-xl font-bold mb-3">{step.title}</h4>
                                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Results & Testimonial */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Results */}
                        <div>
                            <h3 className="text-white text-xl md:text-2xl font-bold mb-6">The Impact</h3>
                            <ul className="space-y-4 md:space-y-6">
                                {project.caseStudy.results.map((res, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#44c7f6]/10 text-[#44c7f6] shrink-0 mt-0.5 border border-[#44c7f6]/30 shadow-[0_0_10px_rgba(68,199,246,0.2)]">
                                            <FaChevronRight className="w-3 h-3 ml-0.5" />
                                        </div>
                                        <span className="text-gray-300 text-base md:text-lg font-medium">{res}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Testimonial */}
                        <div className="bg-gradient-to-br from-[#161616] to-[#0a0a0a] p-8 md:p-10 rounded-2xl border border-[#333] relative">
                            <svg className="absolute top-6 left-6 w-12 h-12 text-[#222]" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                            <div className="relative z-10 pt-6">
                                <p className="text-gray-300 italic text-lg leading-relaxed mb-8">"{project.caseStudy.testimonial.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#333] flex items-center justify-center text-white font-bold text-xl uppercase">
                                        {project.caseStudy.testimonial.author.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">{project.caseStudy.testimonial.author}</h4>
                                        <p className="text-[#44c7f6] text-sm font-medium">{project.caseStudy.testimonial.position}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="min-h-screen bg-[#0a0a0a] py-10 md:py-20">
                <div className="container mx-auto px-6 lg:px-12 max-w-[1200px]">

                    {/* Header & Meta Section */}
                    <div className="flex flex-col lg:flex-row justify-between gap-10 md:gap-12 lg:gap-16 mb-12 md:mb-16 pb-12 md:pb-16 border-b border-white/10">

                        {/* Header Section */}
                        <div className="lg:w-1/2">
                            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                                <button
                                    onClick={() => navigate(-1)}
                                    className="text-white hover:text-gray-300 transition-colors cursor-pointer flex items-center justify-center p-2 -ml-2 rounded-full hover:bg-white/10 shrink-0"
                                    aria-label="Go back"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className="md:w-[36px] md:h-[36px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="19" y1="12" x2="5" y2="12"></line>
                                        <polyline points="12 19 5 12 12 5"></polyline>
                                    </svg>
                                </button>
                                <h1 className="text-[28px] sm:text-[36px] lg:text-[48px] font-bold text-white tracking-tight leading-tight m-0">
                                    {project.name}
                                </h1>
                            </div>
                            <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
                                {project.purpose}
                            </p>
                        </div>

                        {/* Meta Grid */}
                        <div className="lg:w-1/2 mt-2 lg:mt-0">
                            <div className="grid grid-cols-2 h-full">
                                <div className="flex flex-col justify-center gap-1 md:gap-2 pb-6 md:pb-8 lg:pr-8 border-b border-r border-white/10 pr-4">
                                    <span className="text-gray-500 uppercase tracking-widest text-[10px] sm:text-xs font-bold">Country</span>
                                    <span className="text-white text-sm sm:text-base md:text-lg font-semibold">{project.country}</span>
                                </div>
                                <div className="flex flex-col justify-center gap-1 md:gap-2 pb-6 md:pb-8 pl-4 md:pl-6 lg:pl-8 border-b border-white/10">
                                    <span className="text-gray-500 uppercase tracking-widest text-[10px] sm:text-xs font-bold">Category</span>
                                    <span className="text-white text-sm sm:text-base md:text-lg font-semibold">{project.category}</span>
                                </div>
                                <div className="flex flex-col justify-center gap-1 md:gap-2 pt-6 md:pt-8 lg:pr-8 border-r border-white/10 pr-4">
                                    <span className="text-gray-500 uppercase tracking-widest text-[10px] sm:text-xs font-bold">Timeline</span>
                                    <span className="text-white text-sm sm:text-base md:text-lg font-semibold">{project.timeline}</span>
                                </div>
                                <div className="flex flex-col justify-center gap-1 md:gap-2 pt-6 md:pt-8 pl-4 md:pl-6 lg:pl-8">
                                    <span className="text-gray-500 uppercase tracking-widest text-[10px] sm:text-xs font-bold">Tech Stack</span>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#44c7f6] to-[#0037f0] text-sm sm:text-base md:text-lg font-bold">{project.techStack}</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Showcase Section */}
                    {project.category === "Mobile app" ? (
                        <div className="w-full bg-[#161616] border-[1px] border-[#333] rounded-2xl sm:rounded-3xl overflow-hidden p-5 sm:p-8 lg:p-12 shadow-2xl relative group/showcase">
                            {/* Subtle background glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#44c7f6]/5 to-transparent pointer-events-none group-hover/showcase:from-[#44c7f6]/10 transition-colors duration-700"></div>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
                                {/* Left Side: Mobile Mockup */}
                                <div className="lg:col-span-5 flex flex-col items-center">
                                    {/* Mobile Mockup */}
                                    <div className="relative w-[85%] sm:w-full max-w-[240px] sm:max-w-[300px] mx-auto bg-[#0a0a0a] rounded-[1.5rem] sm:rounded-[2rem] border-[8px] sm:border-[10px] border-[#222] shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden [transform:translateZ(0)]">
                                        {/* Notch */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-4 sm:h-5 bg-[#222] rounded-b-lg sm:rounded-b-xl z-30"></div>

                                        {/* Screen */}
                                        {project.mobileScreens ? (
                                            <div
                                                className="w-full relative group/screen select-none rounded-[16px] sm:rounded-[22px] overflow-hidden"
                                                onTouchStart={handleTouchStart}
                                                onTouchMove={handleTouchMove}
                                                onTouchEnd={handleTouchEnd}
                                            >
                                                {/* Left/Right click areas */}
                                                <div className="absolute inset-y-0 left-0 w-1/2 z-20 cursor-pointer" onClick={prevScreen}></div>
                                                <div className="absolute inset-y-0 right-0 w-1/2 z-20 cursor-pointer" onClick={nextScreen}></div>

                                                {/* Invisible placeholder for height */}
                                                <img src={project.mobileScreens[0]} className="w-full h-auto block invisible pointer-events-none" alt="placeholder" />

                                                {/* Fading Screens */}
                                                {project.mobileScreens.map((src, index) => (
                                                    <img
                                                        key={index}
                                                        src={src}
                                                        alt={`Screen ${index + 1}`}
                                                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out pointer-events-none ${index === currentScreenIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                                        draggable="false"
                                                    />
                                                ))}

                                                {/* Left Navigation Hint */}
                                                <div className="absolute inset-y-0 left-0 w-1/4 flex items-center justify-start pl-4 opacity-0 md:group-hover/screen:opacity-100 transition-opacity pointer-events-none z-30 hidden md:flex">
                                                    <div className="bg-black/50 backdrop-blur-sm rounded-full p-2 text-white shadow-lg">
                                                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
                                                    </div>
                                                </div>

                                                {/* Right Navigation Hint */}
                                                <div className="absolute inset-y-0 right-0 w-1/4 flex items-center justify-end pr-4 opacity-0 md:group-hover/screen:opacity-100 transition-opacity pointer-events-none z-30 hidden md:flex">
                                                    <div className="bg-black/50 backdrop-blur-sm rounded-full p-2 text-white shadow-lg">
                                                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="w-full aspect-[9/19.5] bg-[#121212] overflow-hidden relative">
                                                <div className="w-full h-full bg-top animate-auto-scroll-bg md:animate-none md:hover:bg-bottom md:transition-[background-position] md:duration-[12s] ease-in-out cursor-pointer" style={{ backgroundImage: `url(${project.portfolioImage})`, backgroundSize: '100% auto', backgroundRepeat: 'no-repeat' }}></div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Download Links */}
                                    {project.appLinks && (
                                        <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
                                            {project.appLinks.android && (
                                                <a href={project.appLinks.android} target="_blank" rel="noreferrer" className="block hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-all duration-300 rounded-lg">
                                                    <img src="/portfolio/google_play_btn.jpg" alt="Get it on Google Play" className="h-[38px] sm:h-[45px] w-auto rounded-lg object-contain" />
                                                </a>
                                            )}
                                            {project.appLinks.ios && (
                                                <a href={project.appLinks.ios} target="_blank" rel="noreferrer" className="block hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-all duration-300 rounded-lg">
                                                    <img src="/portfolio/app_store_btn.jpg" alt="Download on the App Store" className="h-[38px] sm:h-[45px] w-auto rounded-lg object-contain" />
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
                            <div className="w-full bg-[#161616] border-[1px] border-[#333] rounded-2xl sm:rounded-3xl overflow-hidden p-5 sm:p-8 md:p-16 flex flex-col items-center shadow-2xl mb-10 md:mb-16 relative group/showcase">
                                {/* Subtle background glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#0037f0]/5 to-transparent pointer-events-none group-hover/showcase:from-[#0037f0]/10 transition-colors duration-700"></div>

                                {/* Laptop Container */}
                                <div className="relative w-[86%] sm:w-[90%] lg:w-full max-w-[1000px] mx-auto group z-10">
                                    {/* Laptop Lid */}
                                    <div className="relative w-full bg-[#0a0a0a] rounded-t-xl sm:rounded-t-2xl md:rounded-t-3xl border-[6px] sm:border-[8px] md:border-[12px] border-[#222] shadow-[0_0_50px_rgba(0,0,0,0.8)] aspect-video overflow-hidden z-20">
                                        {/* Screen Content */}
                                        <div className="relative w-full h-full bg-[#121212] overflow-hidden rounded-sm">
                                            <div
                                                onClick={() => setDesktopScrollMode(prev => (prev === 'auto' || prev === 'playing') ? 'paused' : 'playing')}
                                                className={`w-full h-full bg-top animate-auto-scroll-bg md:animate-none desktop-scroll-container desktop-scroll-mode-${desktopScrollMode} cursor-pointer`}
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
                                <div className="mt-8 md:mt-16 z-10">
                                    <AnimatedButton
                                        text="VISIT LIVE SITE"
                                        href={project.link}
                                        className="!w-auto"
                                        target="_blank"
                                    />
                                </div>
                            </div>
                            {renderCaseStudy()}
                            {renderProjectContent(false)}
                        </>
                    )}

                </div>
            </div>

            {project.mobileScreens && renderCaseStudy()}

            <CtaSection />
        </>
    );
}
