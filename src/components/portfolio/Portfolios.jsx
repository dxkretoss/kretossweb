import React, { useState, useEffect, useRef } from 'react';
import { FastAverageColor } from 'fast-average-color';
import { Link } from 'react-router-dom';
import AnimatedButton from '../ui/AnimatedButton';
import AnimatedButtonBorder from '../ui/AnimatedButtonBorder';
import { portfolioData } from './portfolio';
import Badge from '../ui/Badge';

const PortfolioCard = ({ item }) => {
    const [bgColor, setBgColor] = useState(item.bgColor || '#111111');
    const imgRef = useRef(null);

    useEffect(() => {
        // Auto-detect color for all images, ignoring any hardcoded JSON colors
        if (imgRef.current) {
            const fac = new FastAverageColor();
            
            const extractColor = async () => {
                try {
                    const color = await fac.getColorAsync(imgRef.current);
                    setBgColor(color.hex);
                    // Store if it's light or dark for dynamic text colors
                    if (color.isDark) {
                        imgRef.current.dataset.isDark = 'true';
                    } else {
                        imgRef.current.dataset.isDark = 'false';
                    }
                } catch (e) {
                    console.log('Failed to extract color:', e);
                }
            };
            
            if (imgRef.current.complete) {
                extractColor();
            } else {
                imgRef.current.addEventListener('load', extractColor);
                return () => imgRef.current?.removeEventListener('load', extractColor);
            }
        }
    }, [item.portfolioImage]);

    return (
        <div className="border-1 border-[#C3C3C3] p-4 w-full rounded-[15px] overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-3 rounded-[10px] p-3 transition-colors duration-500" style={{ background: bgColor }}>

                {/* Left Side - Image Panel */}
                <div
                    className="w-full lg:w-[60%] relative flex items-center justify-center self-stretch"
                >
                    <img
                        ref={imgRef}
                        src={item.portfolioImage}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-[5px]"
                    />
                </div>

                {/* Right Side - Content Panel */}
                <div
                    className="w-full lg:w-[40%] rounded-[5px] p-8 flex flex-col justify-between self-stretch relative overflow-hidden transition-colors duration-500"
                    style={{
                        background: `
                            repeating-linear-gradient(
                                to right,
                                transparent,
                                transparent 12.5%,
                                rgba(0, 0, 0, 0.15) 12.5%,
                                rgba(0, 0, 0, 0.15) 25%
                            ),
                            linear-gradient(135deg, ${item.rightsidebgColor || '#111111'}aa 0%, #0a0a0a 100%)
                        `,
                    }}
                >
                    <div>
                        {/* Tags */}
                        <div className="flex flex-wrap gap-3 mb-6">
                            {item.tags?.map((tag, idx) => (
                                <span key={idx} className="bg-white/10 text-gray-300 text-xs md:text-sm px-4 py-1.5 rounded-md border border-[#FFFFFF1A]">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-[24px] md:text-[32px] font-bold text-white mb-4 leading-tight">
                            {item.title}
                        </h3>
                        <p className="text-[#DADADA] text-[14px] md:text-[19px] mb-8 leading-relaxed">
                            {item.description}
                        </p>
                    </div>

                    {/* Stats & Actions */}
                    <div className="flex flex-col mt-auto pt-8">
                        <div className="flex flex-wrap justify-between gap-6 mb-8">
                            <div>
                                <p className="text-[#DADADA] text-sm mb-1">Project timeline</p>
                                <p className="text-white font-semibold text-lg">{item.timeline || 'N/A'}</p>
                            </div>
                            <div>
                                <p className="text-[#DADADA] text-sm mb-1">Customer Acquisition</p>
                                <p className="text-white font-semibold text-lg">{item.acquisition || 'N/A'}</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-4 p-3 rounded-[5px] transition-colors duration-500"
                            style={{ background: bgColor }}
                        >

                            <div className='flex gap-2'>
                                <div className="project-author-image-box">
                                    <img src={'./portfolio/icon.png'} loading="lazy" alt="Project Author" className="project-author-image" />
                                </div>
                                {/* Tech Stack Pill */}
                                <div className={`flex items-center gap-2 font-semibold text-base ${imgRef.current?.dataset?.isDark === 'true' ? 'text-white' : 'text-black'}`}>
                                    {item.techStack || item.category}
                                </div>
                            </div>

                            {/* View Project Button */}
                            <Link
                                to={`/portfolio/${item.slug}`}
                                className="flex items-center rounded overflow-hidden transition-colors hover:opacity-80"
                                style={{ color: imgRef.current?.dataset?.isDark === 'true' ? "#000" : "#fff", backgroundColor: imgRef.current?.dataset?.isDark === 'true' ? 'white' : '#111' }}
                            >
                                <div className="px-4 py-4 flex items-center justify-center">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 11L11 1M11 1H3.5M11 1V8.5"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Portfolios() {
    const [activeCategory, setActiveCategory] = useState("Custom web");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const sectionRef = useRef(null);

    const scrollToTop = () => {
        // Use a slightly longer timeout to ensure React and image loading 
        // have stabilized the DOM before triggering the native smooth scroll.
        setTimeout(() => {
            const anchor = document.getElementById('portfolio-scroll-anchor');
            if (anchor) {
                anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 300);
    };

    const categories = [
        "Custom web",
        "Mobile app",
        "Shopify",
        "Wordpress",
        "Bigcommerce",
        "web design",
        "ui/ux",
        "Other"
    ];

    const currentPortfolios = portfolioData[activeCategory] || [];
    const totalPages = Math.ceil(currentPortfolios.length / itemsPerPage);
    const currentItems = currentPortfolios.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <section ref={sectionRef} className="py-20 bg-[#0a0a0a] relative">
            {/* Stable anchor for smooth scrolling */}
            <div id="portfolio-scroll-anchor" className="absolute top-[-80px] left-0 w-full" />
            
            <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
                <div className="flex flex-col items-center mb-8">


                    <div className='mb-5'>
                        <Badge variant='white'>Categories</Badge>
                    </div>

                    <h2 className="text-4xl md:text-[36px] font-bold text-white text-center">
                        Our Expertise
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
                    {categories.map((category, index) => {
                        const isActive = category === activeCategory;
                        const handleCategoryClick = (e) => {
                            e.preventDefault();
                            if (category === "ui/ux") {
                                window.open("https://www.behance.net/kretoss", "_blank", "noopener,noreferrer");
                                return;
                            }
                            setActiveCategory(category);
                            setCurrentPage(1);
                        };

                        return isActive ? (
                            <AnimatedButton
                                key={index}
                                text={category.toUpperCase()}
                                href={`#${category.replace(/\s+/g, '-').toLowerCase()}`}
                                className="!w-auto"
                                onClick={handleCategoryClick}
                            />
                        ) : (
                            <AnimatedButtonBorder
                                key={index}
                                text={category.toUpperCase()}
                                href={`#${category.replace(/\s+/g, '-').toLowerCase()}`}
                                className="!w-auto"
                                onClick={handleCategoryClick}
                            />
                        );
                    })}
                </div>

                {/* Portfolio Display Area */}
                <div className="flex flex-col gap-12">
                    {currentItems.length > 0 ? (
                        currentItems.map((item, index) => (
                            <PortfolioCard key={index} item={item} />
                        ))
                    ) : (
                        <div className="text-center py-20 text-gray-500">
                            <p className="text-2xl">More portfolios coming soon.</p>
                        </div>
                    )}
                </div>

                {totalPages > 1 && (
                    <div className="flex flex-wrap justify-center items-center gap-4 mt-12">
                        <button
                            onClick={() => {
                                setCurrentPage(p => Math.max(1, p - 1));
                                scrollToTop();
                            }}
                            disabled={currentPage === 1}
                            className={`px-6 py-2.5 rounded-[10px] font-semibold transition-all duration-300 ${currentPage === 1 ? 'bg-white/10 !text-white/30 cursor-not-allowed' : 'bg-white !text-black hover:bg-gray-200'}`}
                        >
                            Previous
                        </button>

                        <div className="flex flex-wrap items-center gap-2">
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        setCurrentPage(i + 1);
                                        scrollToTop();
                                    }}
                                    className={`w-10 h-10 rounded-[10px] flex items-center justify-center font-bold transition-all duration-300 ${currentPage === i + 1 ? 'bg-[linear-gradient(to_right,#44c7f6,#0037f0)] !text-white shadow-lg shadow-[#0037f0]/20' : 'bg-white/5 !text-gray-400 hover:bg-white/10 hover:!text-white'}`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => {
                                setCurrentPage(p => Math.min(totalPages, p + 1));
                                scrollToTop();
                            }}
                            disabled={currentPage === totalPages}
                            className={`px-6 py-2.5 rounded-[10px] font-semibold transition-all duration-300 ${currentPage === totalPages ? 'bg-white/10 !text-white/30 cursor-not-allowed' : 'bg-white !text-black hover:bg-gray-200'}`}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
