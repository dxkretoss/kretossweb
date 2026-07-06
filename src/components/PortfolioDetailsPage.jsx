import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioDetailsData } from '../data/portfoliodetails';
import AnimatedButton from './ui/AnimatedButton';
import AnimatedHireButton from './ui/AnimatedHireButton';
import CtaSection from './about/CTASection';
import {
    FaChevronRight, FaCheck, FaArrowLeft, FaArrowRight,
    FaExternalLinkAlt, FaQuoteLeft, FaStar, FaLongArrowAltRight,
    FaGlobe, FaClock, FaCode
} from 'react-icons/fa';

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

export default function PortfolioDetailsPage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);
    const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
    const [desktopScrollMode, setDesktopScrollMode] = useState('auto');
    const [activeSection, setActiveSection] = useState('overview');

    const sectionRefs = {
        overview: useRef(null),
        challenge: useRef(null),
        process: useRef(null),
        results: useRef(null),
        testimonial: useRef(null),
    };

    useEffect(() => {
        const foundProject = portfolioDetailsData.find(p => p.slug === slug);
        setProject(foundProject);
    }, [slug]);

    useEffect(() => {
        if (project) {
            window.scrollTo(0, 0);
            setCurrentScreenIndex(0);
        }
    }, [project]);

    // Auto-scroll mobile screens
    useEffect(() => {
        if (!project?.mobileScreens || project.mobileScreens.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentScreenIndex((prev) => (prev + 1) % project.mobileScreens.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [project, currentScreenIndex]);

    // Scroll spy for sidebar nav
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: '-30% 0px -60% 0px' }
        );
        Object.values(sectionRefs).forEach(ref => {
            if (ref.current) observer.observe(ref.current);
        });
        return () => observer.disconnect();
    }, [project]);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafcff] relative overflow-hidden px-4">
                {/* Background decorative elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#44c7f6]/10 to-[#0037f0]/5 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0037f0]/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3"></div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative z-10 flex flex-col items-center text-center max-w-lg"
                >
                    <div className="w-24 h-24 bg-white shadow-xl shadow-blue-900/5 rounded-3xl flex items-center justify-center mb-8 rotate-3 transform transition-transform hover:rotate-6">
                        <svg className="w-12 h-12 text-[#0037f0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0a0a0a] tracking-tight mb-4">
                        Portfolio Not Found
                    </h1>

                    <p className="text-[#62646a] text-lg mb-10 leading-relaxed">
                        Oops! The case study you are looking for doesn't exist, has been moved, or the URL is incorrect.
                    </p>

                    <div className="flex items-center gap-4">
                        <AnimatedButton
                            text="BACK TO PORTFOLIOS"
                            href="/portfolio"
                            className="!w-auto"
                        />
                    </div>
                </motion.div>
            </div>
        );
    }

    const isMobileApp = project.category === 'Mobile app';
    const clientName = project.client || project.name;

    const navItems = [
        { id: 'overview', label: 'Overview' },
        { id: 'challenge', label: 'The Challenge' },
        { id: 'process', label: 'Our Process' },
        { id: 'results', label: 'Results' },
        ...(project.caseStudy?.testimonial ? [{ id: 'testimonial', label: 'Testimonial' }] : []),
    ];

    const scrollTo = (id) => {
        sectionRefs[id]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const nextScreen = () => {
        if (project.mobileScreens) setCurrentScreenIndex(p => (p + 1) % project.mobileScreens.length);
    };
    const prevScreen = () => {
        if (project.mobileScreens) setCurrentScreenIndex(p => (p - 1 + project.mobileScreens.length) % project.mobileScreens.length);
    };

    return (
        <div className="bg-white text-[#222325] min-h-screen font-sans antialiased">

            {/* ─── HERO ─── */}
            <section className="relative bg-gradient-to-b from-[#f4f7ff] to-white border-b border-gray-200 pb-0 pt-20 overflow-hidden">
                <div className='container mx-auto w-layout-blockcontainer container-full-width'>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#0037f008_1px,transparent_1px),linear-gradient(to_bottom,#0037f008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#0037f0]/5 blur-[140px] pointer-events-none" />

                    <div className="relative z-10">

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

                            {/* Left: Title + meta */}
                            <div className="lg:col-span-6 pb-10 space-y-6">
                                {/* Category pill */}
                                <span className="inline-flex items-center gap-2 text-slate-800 text-[10px] font-bold uppercase tracking-widest px-3 rounded-full border border-[#0037f0]/15">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-800 inline-block"></span>
                                    {project.category} · Case Study
                                </span>

                                <h1 className="text-[24px] md:text-[42px] font-semibold text-[#0a0f1e] tracking-tight leading-[1.0]">
                                    {project.name}
                                </h1>

                                <p className="text-[#62646a] text-lg leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Quick-stat pills */}
                                <div className="flex flex-wrap gap-3 pt-2">
                                    {[
                                        { label: 'Country', value: project.country || 'Global', icon: FaGlobe },
                                        { label: 'Timeline', value: project.timeline || 'N/A', icon: FaClock },
                                        { label: 'Stack', value: project.techStack, icon: FaCode },
                                    ].map((s) => (
                                        <div key={s.label} className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm flex items-center gap-2">
                                            <span className="flex items-center text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                                <s.icon className="text-[14px]" />
                                                {/* {s.label} */}
                                            </span>
                                            <span className="text-sm font-bold text-[#222325]">{s.value}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA & Hire Resources */}
                                <div className="pt-4 flex flex-wrap items-center gap-4">
                                    {project.appLinks ? (
                                        <div className="flex flex-wrap gap-3">
                                            {project.appLinks.android && <a href={project.appLinks.android} target="_blank" rel="noreferrer"><img src="/portfolio/google_play_btn.jpg" alt="Google Play" className="h-[44px] hover:opacity-80 transition-opacity rounded-md" /></a>}
                                            {project.appLinks.ios && <a href={project.appLinks.ios} target="_blank" rel="noreferrer"><img src="/portfolio/app_store_btn.jpg" alt="App Store" className="h-[44px] hover:opacity-80 transition-opacity rounded-md" /></a>}
                                        </div>
                                    ) : project.link && project.link !== '#' ? (
                                        <AnimatedButton
                                            text="VISIT LIVE SITE"
                                            href={project.link}
                                            target="_blank"
                                            className="!w-auto"
                                        />
                                    ) : (
                                        <span className="inline-flex items-center gap-2 text-sm text-gray-500 italic bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-200">
                                            Enterprise Internal System · Private Link
                                        </span>
                                    )}

                                    {/* Dynamic Hire Resources Button */}
                                    {project.hireResources && (
                                        <AnimatedHireButton
                                            href={project.hireResources.link}
                                            text={project.hireResources.label}
                                            className="h-[44px]"
                                        />
                                    )}
                                </div>
                            </div>

                            {/* Right: Device mockup */}
                            <div className="lg:col-span-6 flex justify-center items-end relative min-h-[500px] pt-15">
                                {isMobileApp ? (
                                    <div className="relative flex items-end">

                                        {/* Left Floating Background Phone */}
                                        {project.mobileScreens && project.mobileScreens.length > 1 && (
                                            <motion.div
                                                animate={{ y: [0, -20, 0] }}
                                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                                className="absolute -left-28 sm:-left-36 bottom-16 w-[180px] sm:w-[210px] bg-[#1c1c1e] rounded-[2rem] p-[4px] shadow-2xl border border-[#3a3a3c] -rotate-[10deg] opacity-80 blur-[1px] z-0"
                                            >
                                                <div className="relative w-full bg-black rounded-[1.8rem] p-1 shadow-[inset_0_0_2px_rgba(255,255,255,0.1)] overflow-hidden">
                                                    {/* Dynamic Island */}
                                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[35%] h-[18px] bg-black rounded-full z-40 shadow-[inset_0_-1px_1px_rgba(255,255,255,0.05)]" />
                                                    <img src={project.mobileScreens[1]} alt="App Screen" className="w-full aspect-[9/19.5] object-cover rounded-[1.5rem]" />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-[#f4f7ff]/90 via-transparent to-transparent z-40 pointer-events-none" />
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* Right Floating Background Phone */}
                                        {project.mobileScreens && project.mobileScreens.length > 2 && (
                                            <motion.div
                                                animate={{ y: [0, -20, 0] }}
                                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                                className="absolute -right-28 sm:-right-36 bottom-12 w-[180px] sm:w-[210px] bg-[#1c1c1e] rounded-[2rem] p-[4px] shadow-2xl border border-[#3a3a3c] rotate-[10deg] opacity-80 blur-[1px] z-0"
                                            >
                                                <div className="relative w-full bg-black rounded-[1.8rem] p-1 shadow-[inset_0_0_2px_rgba(255,255,255,0.1)] overflow-hidden">
                                                    {/* Dynamic Island */}
                                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[35%] h-[18px] bg-black rounded-full z-40 shadow-[inset_0_-1px_1px_rgba(255,255,255,0.05)]" />
                                                    <img src={project.mobileScreens[2]} alt="App Screen" className="w-full aspect-[9/19.5] object-cover rounded-[1.5rem]" />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-[#f4f7ff]/90 via-transparent to-transparent z-40 pointer-events-none" />
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* Main Phone */}
                                        <div className="relative w-[230px] sm:w-[270px] flex flex-col items-center z-20">
                                            <div className="relative w-full bg-[#1c1c1e] rounded-[3rem] p-[5px] sm:p-[6px] shadow-2xl border border-[#3a3a3c]">
                                                {/* Power/Volume Buttons */}
                                                <div className="absolute top-[100px] -left-[3px] w-[3px] h-10 bg-[#1c1c1e] rounded-l-sm border-y border-l border-[#3a3a3c]"></div>
                                                <div className="absolute top-[150px] -left-[3px] w-[3px] h-10 bg-[#1c1c1e] rounded-l-sm border-y border-l border-[#3a3a3c]"></div>
                                                <div className="absolute top-[120px] -right-[3px] w-[3px] h-16 bg-[#1c1c1e] rounded-r-sm border-y border-r border-[#3a3a3c]"></div>

                                                <div className="relative w-full bg-black rounded-[2.7rem] p-[4px] sm:p-[5px] shadow-[inset_0_0_4px_rgba(255,255,255,0.1)] overflow-hidden">
                                                    {/* Dynamic Island */}
                                                    <div className="absolute top-3 sm:top-3.5 left-1/2 -translate-x-1/2 w-[32%] h-[22px] bg-black rounded-full z-40 flex items-center justify-end px-2 shadow-[inset_0_-1px_1px_rgba(255,255,255,0.1)] border border-[#111]">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a24] shadow-[inset_0_0_1px_rgba(0,0,0,0.5)] mr-1"></div>
                                                    </div>

                                                    {project.mobileScreens ? (
                                                        <div className="w-full relative group/screen select-none rounded-[2.3rem] overflow-hidden bg-black">
                                                            <div className="absolute inset-y-0 left-0 w-1/2 z-20 cursor-pointer" onClick={prevScreen} />
                                                            <div className="absolute inset-y-0 right-0 w-1/2 z-20 cursor-pointer" onClick={nextScreen} />
                                                            <img src={project.mobileScreens[0]} className="w-full h-auto block invisible pointer-events-none" alt="" />
                                                            {project.mobileScreens.map((src, i) => (
                                                                <img key={i} src={src} alt={`Screen ${i + 1}`}
                                                                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 pointer-events-none ${i === currentScreenIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                                                />
                                                            ))}
                                                            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center opacity-100 group-hover/screen:opacity-0 transition-opacity duration-500 z-30 pointer-events-none">
                                                                <span className="text-white text-[10px] font-bold tracking-widest uppercase drop-shadow-md">Tap to navigate</span>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="w-full aspect-[9/19.5] bg-[#121212] overflow-hidden rounded-[2.3rem]">
                                                            <div className="w-full h-full bg-top" style={{ backgroundImage: `url(${project.portfolioImage})`, backgroundSize: '100% auto', backgroundRepeat: 'no-repeat' }} />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="relative w-[88%] max-w-[600px] mx-auto lg:ml-auto lg:mr-2 xl:mr-4">
                                        <div className="relative w-full bg-[#0d0d0d] rounded-t-2xl border-[10px] border-[#1e1e1f] shadow-[0_30px_80px_rgba(0,0,0,0.2)] aspect-video overflow-hidden">
                                            <div className="relative w-full h-full bg-[#121212] overflow-hidden group/screen">
                                                <div
                                                    onClick={() => setDesktopScrollMode(prev => prev === 'paused' ? 'playing' : 'paused')}
                                                    className={`w-full h-full bg-top desktop-scroll-container desktop-scroll-mode-${desktopScrollMode} cursor-pointer`}
                                                    style={{ backgroundImage: `url(${project.portfolioImage})`, backgroundSize: '100% auto', backgroundRepeat: 'no-repeat' }}
                                                />
                                                <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px] flex flex-col items-center justify-center text-center opacity-100 group-hover/screen:opacity-0 transition-opacity duration-500 z-30 pointer-events-none">
                                                    <FaChevronRight className="text-white w-4 h-4 rotate-90 mb-2 opacity-70" />
                                                    <span className="text-white text-[11px] font-bold tracking-wider uppercase">Hover to scroll</span>
                                                    <span className="text-gray-400 text-[10px] mt-0.5">Click to play / pause</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative w-[112%] -left-[6%] h-3.5 bg-[#1e1e1f] rounded-b-2xl shadow-xl">
                                            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />
                                        </div>

                                        {/* Status badge - Placed on the top-left of the laptop to avoid right-edge clipping */}
                                        <div className="absolute -top-4 -left-6 bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-xl z-[9999] hidden md:flex items-center gap-3">
                                            <div className="w-7 h-7 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                                                <FaCheck className="w-3 h-3" />
                                            </div>
                                            <div>
                                                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Status</p>
                                                <p className="text-xs text-[#222325] font-bold">100% Delivered</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ─── BODY: Sidebar + Content ─── */}
            <div className="container mx-auto w-layout-blockcontainer container-full-width py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">

                    {/* ── Sticky Left Sidebar Nav ── */}
                    <aside className="lg:col-span-3 hidden lg:block">
                        <div className="sticky top-10 space-y-1">
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">On this page</p>
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollTo(item.id)}
                                    className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${activeSection === item.id
                                        ? 'text-slate-900 bg-slate-100'
                                        : 'text-gray-400 hover:text-gray-700 hover:bg-gray-50'
                                        }`}
                                >
                                    <span className={`w-1 h-5 rounded-full transition-colors ${activeSection === item.id ? 'bg-slate-900' : 'bg-gray-200'}`} />
                                    {item.label}
                                </button>
                            ))}

                            {/* Project key features */}
                            {project.keyFeatures && (
                                <div className="mt-8 pt-6 border-t border-gray-200 space-y-3">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Key Features</p>
                                    {project.keyFeatures.map((f, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0" />
                                            <span className="text-xs text-[#62646a] font-medium">{f}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </aside>

                    {/* ── Main Content ── */}
                    <main className="lg:col-span-9 space-y-20">

                        {/* 1. OVERVIEW */}
                        <motion.section
                            id="overview"
                            ref={sectionRefs.overview}
                            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            className="scroll-mt-28"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">Overview</span>
                                <div className="h-px flex-1 bg-gray-200" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0f1e] tracking-tight mb-6 leading-tight">
                                About the Project
                            </h2>
                            <p className="text-[#444] text-lg leading-[1.85] mb-8">
                                {project.caseStudy?.overview || `We partnered with ${clientName} to address critical user experience challenges, optimize the system architecture, and deliver a scalable solution aligned with their long-term vision.`}
                            </p>

                            {/* Core Capabilities (Replaced Redundant Stats) */}
                            {project.caseStudy?.coreCapabilities && project.caseStudy.coreCapabilities.length > 0 && (
                                <div className="mt-8">
                                    <h3 className="text-[#0a0f1e] font-bold text-lg mb-4">Core Capabilities</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {project.caseStudy.coreCapabilities.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2.5  border border-[#0037f0]/10 rounded-full px-2 py-1 hover:bg-[#0037f0]/5 transition-colors duration-200">
                                                <div className="w-5 h-5 rounded-full bg-[#0037f0]/10 flex items-center justify-center shrink-0">
                                                    <FaCheck className="text-slate-800 w-2.5 h-2.5" />
                                                </div>
                                                <span className="text-[13px] font-bold text-[#222325]">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {/* </div> */}
                        </motion.section>

                        {/* 2. THE CHALLENGE */}
                        <motion.section
                            id="challenge"
                            ref={sectionRefs.challenge}
                            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            className="scroll-mt-28"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">The Challenge</span>
                                <div className="h-px flex-1 bg-gray-200" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0f1e] tracking-tight mb-6 leading-tight">
                                What Problem Were We Solving?
                            </h2>

                            {/* Challenge pull-quote */}
                            <div className="relative bg-[#fafbff] border-l-4 border-slate-700 rounded-r-2xl pl-6 pr-6 py-6 mb-8">
                                <p className="text-[#444] text-lg leading-relaxed italic">
                                    "{project.challenge || `${clientName} needed a robust, scalable architecture capable of handling rapid growth while delivering a seamless, high-performance experience to end users.`}"
                                </p>
                            </div>

                            <p className="text-[#62646a] text-base leading-[1.9] mb-8">
                                {project.solution || `We dove deep into the product's pain points — conducting stakeholder workshops, reviewing existing infrastructure, and mapping out user flows — before designing a solution that addressed both immediate bottlenecks and long-term scalability requirements.`}
                            </p>

                            {/* Challenge cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {[
                                    {
                                        num: '01',
                                        title: 'Scalability Gaps',
                                        body: 'Existing architecture could not sustain growing user demand without significant performance degradation.'
                                    },
                                    {
                                        num: '02',
                                        title: 'User Friction',
                                        body: 'Complex workflows and poor mobile optimization were causing drop-offs and low user retention.'
                                    },
                                    {
                                        num: '03',
                                        title: 'Data Security',
                                        body: 'Sensitive data lacked proper encryption and access control layers required for compliance.'
                                    },
                                ].map((c) => (
                                    <div key={c.num} className="relative overflow-hidden bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md hover:border-[#0037f0]/20 transition-all duration-300 group">
                                        <span className="absolute top-2 right-3 text-6xl font-black text-gray-100/70 select-none pointer-events-none z-0 transition-transform duration-500 group-hover:scale-110 group-hover:text-[#0037f0]/5">{c.num}</span>
                                        <div className="relative z-10 pt-2">
                                            <h4 className="text-[#222325] font-bold text-base mb-2">{c.title}</h4>
                                            <p className="text-[#62646a] text-sm leading-relaxed">{c.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        {/* 3. OUR PROCESS */}
                        <motion.section
                            id="process"
                            ref={sectionRefs.process}
                            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}
                            variants={fadeUp}
                            className="scroll-mt-28"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">Our Process</span>
                                <div className="h-px flex-1 bg-gray-200" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0f1e] tracking-tight mb-3 leading-tight">
                                How We Built the Solution
                            </h2>
                            <p className="text-[#62646a] text-base leading-relaxed mb-10 max-w-2xl">
                                Our engagement followed a structured, phased approach — from deep discovery through to a polished, production-ready deployment.
                            </p>

                            {/* Process steps — vertical timeline */}
                            <div className="relative">
                                <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200 hidden sm:block" />
                                <div className="space-y-8">
                                    {(project.caseStudy?.process || [
                                        { title: 'Discovery & Strategy', description: 'In-depth stakeholder workshops, competitor analysis, and technical scoping to align on goals and define the product roadmap.' },
                                        { title: 'UI/UX Design', description: 'High-fidelity wireframes and interactive prototypes refined through iterative user feedback sessions.' },
                                        { title: 'Development & Launch', description: `Full-stack implementation using ${project.techStack}, followed by rigorous QA and a phased production rollout.` },
                                    ]).map((step, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.45, delay: i * 0.1 }}
                                            className="relative sm:pl-16"
                                        >
                                            {/* Step number dot */}
                                            <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white border-2 border-slate-200 text-slate-900 font-black text-sm flex items-center justify-center shadow-sm hidden sm:flex">
                                                {String(i + 1).padStart(2, '0')}
                                            </div>

                                            <div className="bg-[#f7f9ff] border border-gray-200 rounded-2xl p-6 hover:border-[#0037f0]/25 hover:shadow-md transition-all duration-300">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className="sm:hidden text-xs font-black text-[#0037f0]">{String(i + 1).padStart(2, '0')}</span>
                                                    <h4 className="text-[#222325] font-bold text-lg">{step.title}</h4>
                                                </div>
                                                <p className="text-[#62646a] text-base leading-relaxed">{step.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.section>

                        {/* 4. RESULTS */}
                        <motion.section
                            id="results"
                            ref={sectionRefs.results}
                            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}
                            variants={fadeUp}
                            className="scroll-mt-28"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">Results & Impact</span>
                                <div className="h-px flex-1 bg-gray-200" />
                            </div>
                            <h2 className="text-3xl md:text-[36px] font-semibold text-[#0a0f1e] tracking-tight mb-3 leading-tight">
                                Measurable Outcomes Delivered
                            </h2>
                            <p className="text-[#62646a] text-base leading-relaxed mb-10 max-w-2xl">
                                Post-launch audits and client feedback confirmed that the solution exceeded every key performance target set during discovery.
                            </p>

                            {/* Results list */}
                            <div className="mb-10 grid grid-cols-2 gap-x-4 gap-y-4">
                                {(project.caseStudy?.results || [
                                    '40% reduction in average page load time',
                                    'Zero critical downtime incidents post-launch',
                                    '95%+ positive user satisfaction score in first-week feedback',
                                ]).map((result, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -16 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: i * 0.08 }}
                                        className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-3 hover:shadow-sm hover:border-green-200 transition-all duration-300"
                                    >
                                        <div className="w-7 h-7 rounded-full bg-slate-500/10 text-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                                            <FaCheck className="w-3 h-3" />
                                        </div>
                                        <p className="text-[#222325] text-base font-normal leading-snug">{result}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Impact metric cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {[
                                    { value: '+142%', label: 'Conversion Lift', sub: 'Verified increase in key client targets post-launch.' },
                                    { value: '< 1.2s', label: 'Page Load Time', sub: 'Blazing fast interactions across global regions.' },
                                    { value: '99.99%', label: 'System Uptime', sub: 'Fault-tolerant config on scalable server stacks.' },
                                ].map((m, i) => (
                                    <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 hover:shadow-sm transition-all duration-300">
                                        <span className="text-3xl font-black text-slate-900 block mb-1">{m.value}</span>
                                        <span className="text-sm font-bold text-slate-700 block mb-2">{m.label}</span>
                                        <span className="text-xs text-slate-500 leading-relaxed">{m.sub}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        {/* 5. TESTIMONIAL */}
                        {project.caseStudy?.testimonial && (
                            <motion.section
                                id="testimonial"
                                ref={sectionRefs.testimonial}
                                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                                variants={fadeUp}
                                className="scroll-mt-28"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">Client Feedback</span>
                                    <div className="h-px flex-1 bg-gray-200" />
                                </div>

                                <div className="relative bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-3xl p-8 md:p-10">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                                        <div className="flex items-center gap-4">
                                            {project.caseStudy.testimonial.image ? (
                                                <img
                                                    src={project.caseStudy.testimonial.image}
                                                    alt={project.caseStudy.testimonial.author}
                                                    className="w-14 h-14 rounded-full object-cover shrink-0 shadow-sm border border-gray-100"
                                                />
                                            ) : (
                                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0a0f1e] to-[#2a2f3e] flex items-center justify-center text-white font-bold text-xl shrink-0 shadow-sm">
                                                    {project.caseStudy.testimonial.author.charAt(0)}
                                                </div>
                                            )}
                                            <div>
                                                <h4 className="font-bold text-[#0a0f1e] text-lg leading-tight">{project.caseStudy.testimonial.author}</h4>
                                                <p className="text-gray-500 text-sm font-medium mt-1">{project.caseStudy.testimonial.position}</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col md:items-end">
                                            <div className="flex gap-1 mb-2">
                                                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-[#FFB800] w-5 h-5" />)}
                                            </div>
                                            <span className="text-xs text-gray-400 font-medium flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                Reviewed {new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="relative bg-[#f8f9fc] rounded-2xl p-6 md:p-8">
                                        <FaQuoteLeft className="absolute top-6 left-6 text-[40px] text-[#0037f0]/10 pointer-events-none" />
                                        <blockquote className="relative z-10 text-[#444] text-base md:text-lg leading-relaxed mt-4 sm:mt-2">
                                            "{project.caseStudy.testimonial.text}"
                                        </blockquote>
                                    </div>
                                </div>
                            </motion.section>
                        )}

                    </main>
                </div>
            </div>

            {/* ─── CTA ─── */}
            <CtaSection />
        </div >
    );
}
