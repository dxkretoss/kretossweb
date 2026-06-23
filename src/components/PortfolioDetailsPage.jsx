import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { portfolioDetailsData } from '../data/portfoliodetails';
import AnimatedButton from './ui/AnimatedButton';
import Badge from './ui/Badge';
import CtaSection from './about/CTASection';
import { FaChevronRight, FaSearch, FaCog, FaRocket, FaExclamationCircle, FaCheckCircle, FaStar, FaCheck } from 'react-icons/fa';

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
            <div className="min-h-screen flex items-center justify-center bg-[#fafcff]">
                <div className="text-[#222325] text-2xl font-bold">Project not found</div>
            </div>
        );
    }

    const renderProjectContent = (isMobileLayout = false, isDarkBackground = false) => {
        const textWhiteClass = isDarkBackground ? 'text-white' : 'text-[#222325]';
        const textGrayClass = isDarkBackground ? 'text-gray-300' : 'text-[#62646a]';

        const challengeCardClass = isDarkBackground
            ? 'bg-[#0d0f12] border border-gray-800/80 shadow-lg hover:border-red-500/20 hover:shadow-[0_15px_40px_rgba(239,68,68,0.15)]'
            : 'bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(239,68,68,0.05)] hover:border-red-500/20';

        const solutionCardClass = isDarkBackground
            ? 'bg-[#0d0f12] border border-gray-800/80 shadow-lg hover:border-blue-500/20 hover:shadow-[0_15px_40px_rgba(0,55,240,0.15)]'
            : 'bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(0,55,240,0.05)] hover:border-blue-500/20';

        const featureCardClass = isDarkBackground
            ? 'bg-[#0d0f12] border border-gray-800 hover:border-[#0037f0]/40 shadow-md hover:shadow-lg'
            : 'bg-white border border-gray-100 hover:border-[#0037f0]/20 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_12px_30px_rgba(0,55,240,0.04)]';

        return (
            <>
                {/* Challenge & Solution Section */}
                <div className={`grid grid-cols-1 ${isMobileLayout ? 'gap-4 mb-5' : 'md:grid-cols-2 gap-6 mb-8'}`}>
                    {/* Challenge Card */}
                    <div className={`${challengeCardClass} rounded-2xl ${isMobileLayout ? 'p-5' : 'p-6 md:p-8'} transition-all duration-500 group relative overflow-hidden flex flex-col justify-between`}>
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-red-500/80"></div>
                        <div>
                            <div className="flex items-center gap-3.5 mb-3">
                                <div className="w-9 h-9 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center border border-red-500/10 shadow-sm group-hover:scale-105 transition-transform duration-300">
                                    <FaExclamationCircle className="w-4.5 h-4.5" />
                                </div>
                                <h3 className={`text-2xl ${textWhiteClass} font-bold tracking-tight`}>The Challenge</h3>
                            </div>
                            <p className={`${textGrayClass} text-base leading-relaxed`}>
                                {project.challenge}
                            </p>
                        </div>
                    </div>

                    {/* Solution Card */}
                    <div className={`${solutionCardClass} rounded-2xl ${isMobileLayout ? 'p-5' : 'p-6 md:p-8'} transition-all duration-500 group relative overflow-hidden flex flex-col justify-between`}>
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-[#0037f0]/80"></div>
                        <div>
                            <div className="flex items-center gap-3.5 mb-3">
                                <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-[#0037f0] flex items-center justify-center border border-blue-500/10 shadow-sm group-hover:scale-105 transition-transform duration-300">
                                    <FaCheckCircle className="w-4.5 h-4.5" />
                                </div>
                                <h3 className={`text-2xl ${textWhiteClass} font-bold tracking-tight`}>The Solution</h3>
                            </div>
                            <p className={`${textGrayClass} text-base leading-relaxed`}>
                                {project.solution}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Key Features */}
                {project.keyFeatures && (
                    <div>
                        <h3 className={`text-2xl ${textWhiteClass} font-bold mb-4 tracking-tight`}>Key Features</h3>
                        <div className={`grid grid-cols-1 sm:grid-cols-2 ${isMobileLayout ? 'lg:grid-cols-2 gap-3' : 'lg:grid-cols-4 gap-4'}`}>
                            {project.keyFeatures.map((feature, idx) => (
                                <div key={idx} className={`${featureCardClass} p-4 rounded-xl flex items-center justify-between hover:-translate-y-1 transition-all duration-300 group`}>
                                    <div className="flex items-center gap-3.5">
                                        <div className="w-7 h-7 rounded-lg bg-[#0037f0]/5 text-[#0037f0] flex items-center justify-center shrink-0 border border-blue-500/10 group-hover:bg-[#0037f0]/10 transition-colors">
                                            <FaChevronRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                                        </div>
                                        <span className={`${textWhiteClass} text-base font-semibold`}>{feature}</span>
                                    </div>
                                    <span className="text-[10px] font-black tracking-widest text-[#0037f0]/20 group-hover:text-[#0037f0]/40 transition-colors select-none">
                                        0{idx + 1}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </>
        );
    };

    const renderCaseStudy = () => {
        if (!project.caseStudy) return null;

        return (
            <div className="w-full bg-[#0a0c10] border-t border-b border-gray-900/60 py-12 md:py-12 relative z-10">
                <div className="container mx-auto px-6 lg:px-12 max-w-[1200px]">
                    <div className="text-center mb-8">
                        <div className="flex justify-center mb-4">
                            <Badge variant="white">In-Depth Review</Badge>
                        </div>
                        <h2 className="text-[36px] md:text-[36px] font-semibold text-white tracking-tight leading-tight">Case Study</h2>
                    </div>

                    <div className="space-y-8 md:space-y-10">
                        {/* Overview */}
                        <div className="bg-[#0d0f12] border border-gray-800/80 shadow-lg rounded-2xl p-5 sm:p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                                <div className="lg:col-span-4">
                                    <span className="text-xs font-bold tracking-widest text-[#44c7f6] uppercase block mb-1.5">Project Overview</span>
                                    <h3 className="text-white text-2xl font-bold leading-tight">The Vision & Scope</h3>
                                </div>
                                <div className="lg:col-span-8">
                                    <p className="text-gray-300 text-base leading-relaxed whitespace-pre-line">
                                        {project.caseStudy.overview}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Process */}
                        <div className="bg-[#0d0f12] border border-gray-800/80 shadow-lg rounded-2xl p-5 sm:p-8">
                            <div className="mb-6">
                                <span className="text-xs font-bold tracking-widest text-[#44c7f6] uppercase block mb-1.5">Our Execution Flow</span>
                                <h3 className="text-white text-2xl font-bold leading-tight">Our Approach</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
                                {project.caseStudy.process.map((step, idx) => (
                                    <div key={idx} className="bg-[#13171f]/80 hover:bg-[#13171f] border border-gray-800 hover:border-blue-500/40 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-full pointer-events-none"></div>
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-xs font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#44c7f6] to-[#0037f0] uppercase">Step 0{idx + 1}</span>
                                            <div className="w-7 h-7 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center">
                                                {idx === 0 ? <FaSearch className="w-3.5 h-3.5" /> : idx === 1 ? <FaCog className="w-3.5 h-3.5 animate-[spin_6s_linear_infinite]" /> : <FaRocket className="w-3.5 h-3.5" />}
                                            </div>
                                        </div>
                                        <h4 className="text-white text-lg font-bold mb-1.5 group-hover:text-blue-400 transition-colors">{step.title}</h4>
                                        <p className="text-gray-300 text-base leading-relaxed">{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Results & Testimonial */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                            {/* Results */}
                            <div className="lg:col-span-5 bg-[#0d0f12] border border-gray-800/80 shadow-lg rounded-2xl p-5 sm:p-8 flex flex-col justify-between">
                                <div>
                                    <span className="text-xs font-bold tracking-widest text-[#44c7f6] uppercase block mb-1.5">Metrics & Success</span>
                                    <h3 className="text-white text-2xl font-bold leading-tight mb-6">The Impact</h3>
                                    <div className="space-y-3.5">
                                        {project.caseStudy.results.map((res, idx) => (
                                            <div key={idx} className="flex items-start gap-3.5 p-3.5 bg-green-500/5 border border-green-500/10 rounded-xl hover:border-green-500/20 transition-all">
                                                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500/15 text-green-400 shrink-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                                </div>
                                                <div>
                                                    <span className="text-gray-200 text-base font-medium leading-relaxed block">{res}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial */}
                            <div className="lg:col-span-7 bg-gradient-to-br from-[#121620] to-[#0c0e14] border border-gray-800/80 shadow-md p-6 sm:p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-full pointer-events-none"></div>
                                {/* Giant Quotation Mark */}
                                <svg className="w-14 h-14 text-blue-500/10 absolute top-5 left-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                                <div className="relative z-10 pt-6">
                                    <p className="text-white italic text-base md:text-lg leading-relaxed font-semibold mb-6">
                                        "{project.caseStudy.testimonial.text}"
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#44c7f6] to-[#0037f0] p-[2px] shadow-md">
                                            <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-[#0037f0] font-black text-lg uppercase">
                                                {project.caseStudy.testimonial.author.charAt(0)}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-base">{project.caseStudy.testimonial.author}</h4>
                                            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#44c7f6] to-[#0037f0] text-sm font-semibold">{project.caseStudy.testimonial.position}</p>
                                        </div>
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
            <div className="bg-[#fafcff] py-6 md:py-10">
                <div className="container mx-auto px-4 lg:px-8 max-w-[1200px]">

                    {/* Header & Meta Section */}
                    <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-10 pb-8 md:pb-10 border-b border-gray-200">

                        {/* Header Section */}
                        <div className="lg:w-1/2">
                            <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                                <button
                                    onClick={() => navigate(-1)}
                                    className="text-gray-800 hover:text-black transition-colors cursor-pointer flex items-center justify-center p-2 -ml-2 rounded-full hover:bg-black/5 shrink-0"
                                    aria-label="Go back"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="19" y1="12" x2="5" y2="12"></line>
                                        <polyline points="12 19 5 12 12 5"></polyline>
                                    </svg>
                                </button>
                                <h1 className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold text-[#222325] tracking-tight leading-tight m-0">
                                    {project.name}
                                </h1>
                            </div>
                            <p className="text-[#62646a] text-base max-w-2xl leading-relaxed">
                                {project.purpose}
                            </p>
                        </div>

                        {/* Meta Grid */}
                        <div className="lg:w-1/2 mt-2 lg:mt-0">
                            <div className="grid grid-cols-2 h-full">
                                <div className="flex flex-col justify-center gap-1 pb-4 md:pb-5 lg:pr-6 border-b border-r border-gray-200 pr-3">
                                    <span className="text-gray-400 uppercase tracking-widest text-[10px] sm:text-xs font-bold">Country</span>
                                    <span className="text-[#222325] text-sm sm:text-base font-semibold">{project.country}</span>
                                </div>
                                <div className="flex flex-col justify-center gap-1 pb-4 md:pb-5 pl-3 md:pl-4 lg:pl-6 border-b border-gray-200">
                                    <span className="text-gray-400 uppercase tracking-widest text-[10px] sm:text-xs font-bold">Category</span>
                                    <span className="text-[#222325] text-sm sm:text-base font-semibold">{project.category}</span>
                                </div>
                                <div className="flex flex-col justify-center gap-1 pt-4 md:pt-5 lg:pr-6 border-r border-gray-200 pr-3">
                                    <span className="text-gray-400 uppercase tracking-widest text-[10px] sm:text-xs font-bold">Timeline</span>
                                    <span className="text-[#222325] text-sm sm:text-base font-semibold">{project.timeline}</span>
                                </div>
                                <div className="flex flex-col justify-center gap-1 pt-4 md:pt-5 pl-3 md:pl-4 lg:pl-6">
                                    <span className="text-gray-400 uppercase tracking-widest text-[10px] sm:text-xs font-bold">Tech Stack</span>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#44c7f6] to-[#0037f0] text-sm sm:text-base font-bold">{project.techStack}</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Showcase Section */}
                    {project.category === "Mobile app" ? (
                        <div className="w-full bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden p-6 sm:p-8 md:p-12 shadow-[0_15px_45px_rgba(0,0,0,0.05)] relative group/showcase">
                            {/* Subtle background glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#44c7f6]/2 to-transparent pointer-events-none group-hover/showcase:from-[#44c7f6]/5 transition-colors duration-700"></div>

                            {/* Top Section: Mockup (left) & Overview/Process (right) */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start relative z-10">
                                {/* Mobile Mockup Container */}
                                <div className="relative w-full max-w-[280px] mx-auto flex flex-col items-center lg:col-span-1">
                                    <div className="relative w-full bg-[#0a0a0a] rounded-[2rem] border-[8px] border-[#111] shadow-[0_20px_50px_rgba(0,0,0,0.25)] overflow-hidden [transform:translateZ(0)]">
                                        {/* Notch */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-4.5 bg-[#111] rounded-b-xl z-30"></div>

                                        {/* Screen */}
                                        {project.mobileScreens ? (
                                            <div
                                                className="w-full relative group/screen select-none rounded-[22px] overflow-hidden [transform:translateZ(0)]"
                                                onTouchStart={handleTouchStart}
                                                onTouchMove={handleTouchMove}
                                                onTouchEnd={handleTouchEnd}
                                            >
                                                {/* Left/Right click areas */}
                                                <div className="absolute inset-y-0 left-0 w-1/2 z-20 cursor-pointer" onClick={prevScreen}></div>
                                                <div className="absolute inset-y-0 right-0 w-1/2 z-20 cursor-pointer" onClick={nextScreen}></div>

                                                {/* Invisible placeholder for height */}
                                                <img src={project.mobileScreens[0]} className="w-full h-auto block invisible pointer-events-none rounded-[22px]" alt="placeholder" />

                                                {/* Fading Screens */}
                                                {project.mobileScreens.map((src, index) => (
                                                    <img
                                                        key={index}
                                                        src={src}
                                                        alt={`Screen ${index + 1}`}
                                                        className={`absolute top-0 left-0 w-full h-full object-cover rounded-[22px] transition-opacity duration-1000 ease-in-out pointer-events-none ${index === currentScreenIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                                        draggable="false"
                                                    />
                                                ))}

                                                {/* Hover/Touch Instruction Overlay */}
                                                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex flex-col items-center justify-center text-center opacity-100 group-hover/screen:opacity-0 pointer-events-none transition-all duration-500 z-30 rounded-[22px]">
                                                    <div className="p-3 rounded-full bg-white/10 border border-white/20 mb-2 shadow-[0_0_20px_rgba(255,255,255,0.15)] animate-pulse">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M9 18l6-6-6-6" /></svg>
                                                    </div>
                                                    <span className="text-white text-[11px] font-bold tracking-wide uppercase px-3">Swipe or Click Edges</span>
                                                    <span className="text-gray-300 text-[10px] mt-0.5">To change screens</span>
                                                </div>

                                                {/* Left Navigation Hint */}
                                                <div className="absolute inset-y-0 left-0 w-1/4 flex items-center justify-start pl-4 opacity-0 md:group-hover/screen:opacity-100 transition-opacity pointer-events-none z-30 hidden md:flex rounded-l-[22px]">
                                                    <div className="bg-black/50 backdrop-blur-sm rounded-full p-2 text-white shadow-lg">
                                                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
                                                    </div>
                                                </div>

                                                {/* Right Navigation Hint */}
                                                <div className="absolute inset-y-0 right-0 w-1/4 flex items-center justify-end pr-4 opacity-0 md:group-hover/screen:opacity-100 transition-opacity pointer-events-none z-30 hidden md:flex rounded-r-[22px]">
                                                    <div className="bg-black/50 backdrop-blur-sm rounded-full p-2 text-white shadow-lg">
                                                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="w-full aspect-[9/19.5] bg-[#121212] overflow-hidden relative rounded-[22px] [transform:translateZ(0)]">
                                                <div className="w-full h-full bg-top animate-auto-scroll-bg md:animate-none md:hover:bg-bottom md:transition-[background-position] md:duration-[12s] ease-in-out cursor-pointer rounded-[22px]" style={{ backgroundImage: `url(${project.portfolioImage})`, backgroundSize: '100% auto', backgroundRepeat: 'no-repeat' }}></div>
                                            </div>
                                        )}

                                    </div>

                                    {/* Column 1: Download Links */}
                                    <div className="flex flex-col justify-center items-center lg:col-span-1 mt-5">
                                        {project.appLinks && (
                                            <div className="flex flex-col lg:flex-row justify-center gap-2">
                                                {project.appLinks.android && (
                                                    <a href={project.appLinks.android} target="_blank" rel="noreferrer" className="block hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)] transition-all duration-300 rounded-lg">
                                                        <img src="/portfolio/google_play_btn.jpg" alt="Get it on Google Play" className="h-[38px] sm:h-[50px] w-auto rounded-lg object-contain" />
                                                    </a>
                                                )}
                                                {project.appLinks.ios && (
                                                    <a href={project.appLinks.ios} target="_blank" rel="noreferrer" className="block hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)] transition-all duration-300 rounded-lg">
                                                        <img src="/portfolio/app_store_btn.jpg" alt="Download on the App Store" className="h-[38px] sm:h-[50px] w-auto rounded-lg object-contain" />
                                                    </a>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Overview & Process (Right Column) */}
                                <div className="w-full lg:col-span-2 space-y-6">
                                    <div className="border-b border-gray-100 pb-3 flex flex-col items-center">
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <Badge variant="blue">In-Depth Review</Badge>
                                        </div>
                                        <h2 className="text-[28px] font-bold text-[#222325] tracking-tight leading-tight">Case Study</h2>
                                    </div>

                                    {/* Overview */}
                                    {project.caseStudy && (
                                        <div className="bg-gray-50 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.015)] rounded-2xl p-5">
                                            <span className="text-[10px] font-bold tracking-widest text-[#0037f0] uppercase block mb-1">Project Overview</span>
                                            <h3 className="text-[#222325] text-lg font-bold leading-tight mb-2">The Vision & Scope</h3>
                                            <p className="text-[#62646a] text-sm leading-relaxed whitespace-pre-line">
                                                {project.caseStudy.overview}
                                            </p>
                                        </div>
                                    )}

                                    {/* Process */}
                                    {project.caseStudy && (
                                        <div className="bg-gray-50 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.015)] rounded-2xl p-5">
                                            <div className="mb-4">
                                                <span className="text-[10px] font-bold tracking-widest text-[#0037f0] uppercase block mb-1">Our Execution Flow</span>
                                                <h3 className="text-[#222325] text-lg font-bold leading-tight">Our Approach</h3>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                                {project.caseStudy.process.map((step, idx) => (
                                                    <div key={idx} className="bg-white border border-gray-100 hover:border-blue-500/30 rounded-xl p-4 shadow-sm transition-all duration-300 relative overflow-hidden group">
                                                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-full pointer-events-none"></div>
                                                        <div className="flex items-center justify-between mb-1.5">
                                                            <span className="text-[10px] font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#44c7f6] to-[#0037f0] uppercase">Step 0{idx + 1}</span>
                                                            <div className="w-6 h-6 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center">
                                                                {idx === 0 ? <FaSearch className="w-3 h-3" /> : idx === 1 ? <FaCog className="w-3 h-3 animate-[spin_6s_linear_infinite]" /> : <FaRocket className="w-3 h-3" />}
                                                            </div>
                                                        </div>
                                                        <h4 className="text-[#222325] text-sm font-bold mb-1 group-hover:text-blue-500 transition-colors">{step.title}</h4>
                                                        <p className="text-[#62646a] text-xs leading-relaxed">{step.description}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Bottom Section: Download links (left) & Impact and Testimonial (right, side-by-side) */}
                            {project.caseStudy && (
                                <div className="gap-6 md:gap-8 items-stretch mt-6 pt-6 border-t border-gray-100 relative z-10">


                                    {/* Columns 2-3: Impact & Testimonial Side-by-Side */}
                                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Results / Impact */}
                                        <div className="bg-gray-50 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.015)] rounded-2xl p-5 text-left">
                                            <span className="text-[10px] font-bold tracking-widest text-[#0037f0] uppercase block mb-1">Metrics & Success</span>
                                            <h3 className="text-[#222325] text-lg font-bold leading-tight mb-4">The Impact</h3>
                                            <div className="space-y-2">
                                                {project.caseStudy.results.map((res, idx) => (
                                                    <div key={idx} className="flex items-start gap-2.5 p-2.5 bg-green-500/5 border border-green-500/10 rounded-xl">
                                                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/10 text-green-500 shrink-0">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                                        </div>
                                                        <span className="text-[#222325] text-xs font-semibold leading-relaxed">{res}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Testimonial */}
                                        <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.015)] p-5 rounded-2xl relative overflow-hidden flex flex-col justify-between text-left">
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-full pointer-events-none"></div>
                                            <svg className="w-10 h-10 text-blue-500/5 absolute top-3 left-3" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                            </svg>
                                            <div className="relative z-10 pt-4">
                                                <p className="text-[#222325] italic text-sm leading-relaxed font-semibold mb-4">
                                                    "{project.caseStudy.testimonial.text}"
                                                </p>
                                                <div className="flex items-center gap-2.5">
                                                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#44c7f6] to-[#0037f0] p-[1.5px] shadow-sm">
                                                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-[#0037f0] font-black text-xs uppercase">
                                                            {project.caseStudy.testimonial.author.charAt(0)}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-[#222325] font-bold text-xs">{project.caseStudy.testimonial.author}</h4>
                                                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#44c7f6] to-[#0037f0] text-[10px] font-semibold">{project.caseStudy.testimonial.position}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="w-full bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden p-4 sm:p-6 md:p-10 flex flex-col items-center shadow-[0_15px_45px_rgba(0,0,0,0.05)] relative group/showcase">
                            {/* Subtle background glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0037f0]/2 to-transparent pointer-events-none group-hover/showcase:from-[#0037f0]/5 transition-colors duration-700"></div>

                            {/* Laptop Container */}
                            <div className="relative w-[86%] sm:w-[90%] lg:w-full max-w-[900px] mx-auto group z-10">
                                {/* Laptop Lid */}
                                <div className="relative w-full bg-[#0a0a0a] rounded-t-xl sm:rounded-t-2xl md:rounded-t-3xl border-[6px] sm:border-[8px] md:border-[10px] border-[#1a1a1a] shadow-[0_20px_50px_rgba(0,0,0,0.3)] aspect-video overflow-hidden z-20">
                                    {/* Screen Content */}
                                    <div className="relative w-full h-full bg-[#121212] overflow-hidden rounded-sm group/screen">
                                        <div
                                            onClick={() => setDesktopScrollMode(prev => (prev === 'auto' || prev === 'playing') ? 'paused' : 'playing')}
                                            className={`w-full h-full bg-top animate-auto-scroll-bg md:animate-none desktop-scroll-container desktop-scroll-mode-${desktopScrollMode} cursor-pointer`}
                                            style={{
                                                backgroundImage: `url(${project.portfolioImage})`,
                                                backgroundSize: '100% auto',
                                                backgroundRepeat: 'no-repeat'
                                            }}
                                        ></div>
                                        {/* Hover Instruction Overlay */}
                                        <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px] flex flex-col items-center justify-center text-center opacity-100 group-hover/screen:opacity-0 pointer-events-none transition-all duration-500 z-30">
                                            <div className="p-3 rounded-full bg-white/10 border border-white/20 mb-2 shadow-[0_0_20px_rgba(255,255,255,0.15)] animate-bounce">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
                                            </div>
                                            <span className="text-white text-xs sm:text-sm font-bold tracking-wider uppercase px-4">Hover to Scroll Full Screen</span>
                                            <span className="text-gray-300 text-[10px] sm:text-xs mt-1">Tap/Click to Play or Pause</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Laptop Base */}
                                <div className="relative w-[114%] -left-[7%] h-4 sm:h-5 bg-[#1a1a1a] rounded-b-2xl sm:rounded-b-3xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] z-10 flex justify-center">
                                    <div className="w-[20%] h-[40%] bg-[#111] rounded-b-lg mx-auto mt-0"></div>
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10"></div>
                                </div>
                            </div>

                            {/* Visit Site Button inside showcase */}
                            <div className="mt-6 md:mt-8 z-10">
                                <AnimatedButton
                                    text="VISIT LIVE SITE"
                                    href={project.link}
                                    className="!w-auto"
                                    target="_blank"
                                />
                            </div>
                        </div>
                    )}

                </div>
            </div>

            {/* Case Study Section / Bottom Content */}
            {project.category === "Mobile app" ? (
                /* For Mobile App: Challenge, Solution & Key Features in dark full-width background */
                <div className="bg-[#fafcff] pb-10">
                    <div className="container mx-auto px-6 lg:px-12 max-w-[1200px]">
                        {renderProjectContent(false, false)}
                    </div>
                </div>
            ) : (
                /* For Desktop App: Case Study in dark background, then Challenge, Solution & Key Features in light background */
                <>
                    {renderCaseStudy(false)}
                    <div className="bg-[#fafcff] py-10">
                        <div className="container mx-auto px-4 lg:px-8 max-w-[1200px]">
                            {renderProjectContent(false, false)}
                        </div>
                    </div>
                </>
            )}

            <CtaSection />
        </>
    );
}
