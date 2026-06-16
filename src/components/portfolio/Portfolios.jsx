import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedButton from '../ui/AnimatedButton';
import AnimatedButtonBorder from '../ui/AnimatedButtonBorder';
import { portfolioData } from './portfolio';
import Badge from '../ui/Badge';

export default function Portfolios() {
    const [activeCategory, setActiveCategory] = useState("Custom web");

    const categories = [
        "Custom web",
        "Mobile app",
        "Shopify",
        "Magento",
        "Wordpress",
        "Bigcommerce",
        "hubspot",
        "web design",
        "ui/ux"
    ];

    const currentPortfolios = portfolioData[activeCategory] || [];

    return (
        <section className="py-20 bg-[#0a0a0a]">
            <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
                <div className="flex flex-col items-center mb-16">


                    <div className='mb-5'>
                        <Badge variant='white'>Categories</Badge>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
                        Our Expertise
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
                    {categories.map((category, index) => {
                        const isActive = category === activeCategory;
                        const handleCategoryClick = (e) => {
                            e.preventDefault();
                            setActiveCategory(category);
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
                    {currentPortfolios.length > 0 ? (
                        currentPortfolios.map((item) => (
                            <div key={item.id} className="border-1 border-[#C3C3C3] p-4 w-full rounded-[15px] overflow-hidden">
                                <div className="flex flex-col lg:flex-row gap-3 rounded-[10px] p-3" style={{ background: item.bgColor }}>

                                    {/* Left Side - Image Panel */}
                                    <div
                                        className="w-full lg:w-[60%] relative flex items-center justify-center self-stretch"
                                    >
                                        <img
                                            src={item.portfolioImage}
                                            alt={item.title}
                                            className="w-full h-full object-cover rounded-[5px]"
                                        />
                                    </div>

                                    {/* Right Side - Content Panel */}
                                    <div
                                        className="w-full lg:w-[40%] rounded-[5px] p-5 flex flex-col justify-between self-stretch"
                                        style={{
                                            backgroundImage: `url(${item.rightsidebgImage})`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                    >
                                        <div>
                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-3 mb-6">
                                                {item.tags.map((tag, idx) => (
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
                                                    <p className="text-white font-semibold text-lg">{item.timeline}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[#DADADA] text-sm mb-1">Customer Acquisition</p>
                                                    <p className="text-white font-semibold text-lg">{item.acquisition}</p>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap items-center justify-between gap-4 p-3 rounded-[5px]"
                                                style={{ background: item.bgColor }}
                                            >

                                                <div className='flex gap-2'>
                                                    <div className="project-author-image-box">
                                                        <img src={'./portfolio/icon.png'} loading="lazy" alt="Project Author" className="project-author-image" />
                                                    </div>
                                                    {/* Tech Stack Pill */}
                                                    <div className="flex items-center gap-2 text-black font-semibold text-base">
                                                        {item.techStack}
                                                    </div>
                                                </div>

                                                {/* View Project Button */}
                                                <Link
                                                    to={`/portfolio/${item.slug}`}
                                                    className="flex items-center bg-white rounded overflow-hidden hover:bg-gray-200 transition-colors"
                                                    style={{ color: "#333334" }}
                                                >
                                                    <span className="px-3 py-2 font-medium text-[18px]">
                                                        View Project
                                                    </span>

                                                    {/* Divider */}
                                                    <div className="w-[1px] self-stretch bg-[#33333430]" />

                                                    {/* Arrow Section */}
                                                    <div className="px-5 py-4 flex items-center justify-center">
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
                        ))
                    ) : (
                        <div className="text-center py-20 text-gray-500">
                            <p className="text-2xl">More portfolios coming soon.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
