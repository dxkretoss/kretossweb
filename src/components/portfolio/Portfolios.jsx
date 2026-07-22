import React, { useState, useEffect, useRef } from 'react';
import { FastAverageColor } from 'fast-average-color';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AnimatedButtonwithoutaero from '../ui/AnimatedButtonwithoutaero';
import AnimatedButtonBorder from '../ui/AnimatedButtonBorder';
import { portfolioData } from '../../data/portfolio';
import Badge from '../ui/Badge';
import {
    FaReact, FaAngular, FaVuejs, FaNodeJs, FaPython,
    FaLaravel, FaJava, FaSwift, FaApple, FaAws,
    FaDigitalOcean, FaWordpress, FaShopify, FaMagento,
    FaDrupal, FaJs, FaChartBar, FaChartLine, FaMicrosoft, FaDatabase,
    FaHtml5, FaCss3Alt, FaCode, FaPhp, FaHubspot
} from 'react-icons/fa';
import {
    SiNextdotjs, SiNestjs, SiFlutter, SiKotlin,
    SiPandas, SiGooglecloud, SiBigcommerce,
    SiSupabase, SiSolidity, SiMysql, SiCodeigniter, SiTensorflow
} from 'react-icons/si';

const getCountryFlag = (country) => {
    if (!country) return '';
    const flags = {
        'usa': '🇺🇸',
        'united states': '🇺🇸',
        'uk': '🇬🇧',
        'united kingdom': '🇬🇧',
        'australia': '🇦🇺',
        'germany': '🇩🇪',
        'brazil': '🇧🇷',
        'canada': '🇨🇦',
        'uae': '🇦🇪',
        'india': '🇮🇳',
        'singapore': '🇸🇬',
        'switzerland': '🇨🇭',
        'portugal': '🇵🇹',
        'vietnam': '🇻🇳',
        'indonesia': '🇮🇩',
        'sweden': '🇸🇪'
    };
    return flags[country.toLowerCase()] || '🌍';
};

const getTechIcons = (techString) => {
    if (!techString) return [<FaCode />];
    const techMap = {
        'angular': <FaAngular />,
        'node.js': <FaNodeJs />,
        'node js': <FaNodeJs />,
        'html': <FaHtml5 />,
        'css': <FaCss3Alt />,
        'js': <FaJs />,
        'javascript': <FaJs />,
        'react.js': <FaReact />,
        'reactjs': <FaReact />,
        'react': <FaReact />,
        'react native': <FaReact />,
        'supabase': <SiSupabase />,
        'blockchain': <SiSolidity />,
        'python': <FaPython />,
        'vue.js': <FaVuejs />,
        'laravel': <FaLaravel />,
        'ai': <FaChartLine />,
        'bubble': <FaCode />,
        'mysql': <SiMysql />,
        'flutter': <SiFlutter />,
        'ios swift': <FaSwift />,
        'swift': <FaSwift />,
        'shopify': <FaShopify />,
        'codeigniter': <SiCodeigniter />,
        'wordpress': <FaWordpress />,
        'php': <FaPhp />,
        'magento': <FaMagento />,
        'bigcommerce': <SiBigcommerce />,
        'hubspot': <FaHubspot />,
    };

    const techs = techString.split(/[\+,&]/).map(t => t.trim().toLowerCase());
    const icons = techs.map(tech => techMap[tech] || <FaCode />);

    const uniqueIcons = [];
    const seen = new Set();
    for (const icon of icons) {
        if (!seen.has(icon.type)) {
            seen.add(icon.type);
            uniqueIcons.push(icon);
        }
    }
    return uniqueIcons;
};

const hexToRgb = (hex) => {
    if (!hex) return { r: 68, g: 199, b: 246 };
    let cleanHex = hex.replace('#', '');
    if (cleanHex.length === 3) {
        cleanHex = cleanHex.split('').map(c => c + c).join('');
    }
    const num = parseInt(cleanHex, 16);
    if (isNaN(num)) return { r: 68, g: 199, b: 246 };
    return {
        r: (num >> 16) & 255,
        g: (num >> 8) & 255,
        b: num & 255
    };
};

const rgbToHsl = (r, g, b) => {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: Math.round(h * 360), s, l };
};

const hslToRgb = (h, s, l) => {
    let r, g, b;
    if (s === 0) {
        r = g = b = l;
    } else {
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1/6) return p + (q - p) * 6 * t;
            if (t < 1/2) return q;
            if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        };
        r = hue2rgb(p, q, (h / 360) + 1/3);
        g = hue2rgb(p, q, (h / 360));
        b = hue2rgb(p, q, (h / 360) - 1/3);
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
};

const getDynamicBadgeStyle = (bgColor) => {
    const rgb = hexToRgb(bgColor);
    const { h, s } = rgbToHsl(rgb.r, rgb.g, rgb.b);

    let accentRgb;
    if (s < 0.1) {
        accentRgb = { r: 68, g: 199, b: 246 };
    } else {
        accentRgb = hslToRgb(h, Math.max(s, 0.85), 0.65);
    }

    const { r, g, b } = accentRgb;

    return {
        accentColor: `rgb(${r}, ${g}, ${b})`,
        badgeStyle: {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            color: '#FFFFFF',
            borderColor: `rgba(${r}, ${g}, ${b}, 0.65)`,
            boxShadow: `0 0 12px rgba(${r}, ${g}, ${b}, 0.35)`
        }
    };
};

const PortfolioCard = ({ item }) => {
    const [bgColor, setBgColor] = useState('#111111');
    const [imageLoaded, setImageLoaded] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        if (imgRef.current) {
            const fac = new FastAverageColor();

            const extractColor = async () => {
                try {
                    const img = imgRef.current;
                    const naturalHeight = img.naturalHeight || img.clientHeight || 400;
                    // Extract color directly from the bottom-left box region of the image canvas
                    const color = await fac.getColorAsync(img, {
                        left: 10,
                        top: Math.max(10, naturalHeight - 80),
                        width: 60,
                        height: 60,
                        algorithm: 'dominant'
                    });
                    setBgColor(color.hex);
                    if (color.isDark) {
                        img.dataset.isDark = 'true';
                    } else {
                        img.dataset.isDark = 'false';
                    }
                    setImageLoaded(true);
                } catch (e) {
                    console.log('Failed to extract color:', e);
                    setImageLoaded(true);
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
        <div className="border-1 border-[#C3C3C3] p-2 sm:p-4 w-full rounded-[15px] overflow-hidden min-h-[400px] lg:min-h-[500px]">
            <div className="flex flex-col xl:flex-row gap-3 rounded-[10px] p-2 sm:p-3 transition-colors duration-500 h-full" style={{ background: bgColor }}>

                {/* Left Side - Image Panel */}
                <div
                    className="w-full xl:w-[60%] relative flex items-center justify-center self-stretch bg-[#1a1a1a] rounded-[5px] overflow-hidden"
                >
                    {!imageLoaded && (
                        <div className="absolute inset-0 bg-white/10 animate-pulse rounded-[5px]"></div>
                    )}
                    <img
                        ref={imgRef}
                        src={item.portfolioImage}
                        alt={item.title}
                        className={`w-full h-full object-cover rounded-[5px] transition-opacity duration-500 relative z-10 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => {
                            if (imgRef.current && imgRef.current.complete) {
                                // Fallback in case extractColor event listener takes too long
                                // setImageLoaded is also handled in extractColor
                            }
                        }}
                    />
                </div>

                {/* Right Side - Content Panel */}
                <div
                    className="w-full xl:w-[40%] rounded-[5px] p-4 md:p-8 flex flex-col justify-between self-stretch relative overflow-hidden transition-colors duration-500"
                    style={{
                        background: `
                            repeating-linear-gradient(
                            to right,
                            transparent,
                            transparent 12.5%,
                            rgba(255,255,255,0.05) 12.5%,
                            rgba(255,255,255,0.05) 25%
                            ),
                            linear-gradient(
                            135deg,
                            ${bgColor} 0%,
                            rgba(0,0,0,0.85) 100%
                            )
                        `,
                    }}
                >
                    <div>
                        {/* Tags */}
                        <div className='flex justify-between items-start'>
                            <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
                                {item.tags?.map((tag, idx) => (
                                    <span key={idx} className="bg-white/10 text-white border border-[#FFFFFF1A] text-xs md:text-sm px-3 md:px-4 rounded-[4px] flex items-center justify-center h-[32px] md:h-[36px]">
                                        {tag}
                                    </span>
                                ))}
                                {item.activeUsers && (() => {
                                    const { accentColor, badgeStyle } = getDynamicBadgeStyle(bgColor);
                                    return (
                                        <span
                                            className="text-xs md:text-sm px-3 md:px-4 rounded-[4px] flex items-center justify-center gap-1.5 h-[32px] md:h-[36px] font-medium whitespace-nowrap border animate-pulse transition-all duration-500"
                                            style={badgeStyle}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                                <polyline points="16 7 22 7 22 13"></polyline>
                                            </svg>
                                            {item.activeUsers}
                                        </span>
                                    );
                                })()}
                            </div>

                            {item.portfolioLogo && (
                                <div className="flex items-center justify-center shrink-0 ml-2 self-start bg-white/10 border border-[#FFFFFF1A] px-3 rounded-[4px] w-[100px] md:w-[120px] h-[32px] md:h-[36px]">
                                    <img src={item.portfolioLogo} alt={item.title} className="max-w-full max-h-[16px] md:max-h-[20px] object-contain" />
                                </div>
                            )}
                        </div>
                        {/* Title & Description */}
                        {/* <h3 className={`text-2xl sm:text-[32px] font-semibold text-white mb-3 sm:mb-4 leading-tight`}>
                            {item.title}
                        </h3> */}
                        <p 
                            className={`hidden md:block text-white text-[14px] md:text-[16px] mb-6 sm:mb-8 leading-relaxed`}
                            dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                    </div>

                    {/* Stats & Actions */}
                    <div className="flex flex-col mt-auto pt-0 md:pt-8">
                        <div className="flex flex-wrap justify-between gap-6 mb-8">
                            <div>
                                <p className={`text-[#DADADA] text-sm mb-1`}>Project timeline</p>
                                <p className={`font-semibold text-lg text-white`}>{item.timeline || 'N/A'}</p>
                            </div>
                            <div>
                                <p className={`text-[#DADADA] text-sm mb-1`}>Country</p>
                                <p className={`font-semibold text-lg flex items-center gap-2 text-white`}>
                                    {getCountryFlag(item.country)} {item.country || 'N/A'}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-4 p-3 rounded-[5px] transition-colors duration-500"
                            style={{ background: bgColor }}
                        >

                            <div className='flex gap-2 items-center'>
                                <div className="flex items-center -space-x-2 mr-1">
                                    {getTechIcons(item.techStack || item.category).map((IconElement, i) => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-[#111111] flex items-center justify-center border border-gray-600 shadow-sm relative text-white" style={{ zIndex: 10 - i }}>
                                            {React.cloneElement(IconElement, { className: "w-4 h-4 object-contain" })}
                                        </div>
                                    ))}
                                </div>
                                {/* Tech Stack Pill */}
                                <div className={`hidden md:flex items-center gap-2 font-semibold text-sm sm:text-base text-white`}>
                                    {/* {item.techStack || item.category} */}

                                    {(item.techStack || item.category || '').length > 25
                                        ? `${(item.techStack || item.category || '').slice(0, 25)}...`
                                        : (item.techStack || item.category || '')}
                                </div>
                            </div>

                            {/* View Project Button */}
                            <Link
                                to={`/portfolio/${item.slug}`}
                                className="flex items-center rounded overflow-hidden transition-colors hover:opacity-80"
                                style={{ color: 'black', backgroundColor: 'white' }}
                            >
                                <div className="p-3 flex items-center justify-center">
                                    <svg
                                        width="14"
                                        height="14"
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
    const categories = [
        "Custom web",
        "Mobile app",
        "Shopify",
        "Python",
        // "Wordpress",
        "Bigcommerce",
        "web design",
        // "ui/ux",
        "Other"
    ];

    const location = useLocation();
    const navigate = useNavigate();

    const [activeCategory, setActiveCategory] = useState(() => {
        const query = location.search.replace('?', '');
        if (query) {
            const matched = categories.find(c => c.replace(/\s+/g, '-').toLowerCase() === query.toLowerCase());
            if (matched) return matched;
        }
        return localStorage.getItem('portfolioActiveCategory') || "Custom web";
    });
    const [visibleCount, setVisibleCount] = useState(() => {
        const savedCount = sessionStorage.getItem('portfolioVisibleCount');
        return savedCount ? parseInt(savedCount, 10) : 5;
    });

    useEffect(() => {
        sessionStorage.setItem('portfolioVisibleCount', visibleCount);
    }, [visibleCount]);

    useEffect(() => {
        localStorage.setItem('portfolioActiveCategory', activeCategory);
        const urlKey = activeCategory.replace(/\s+/g, '-').toLowerCase();
        navigate(`?${urlKey}`, { replace: true });
    }, [activeCategory, navigate]);

    const itemsPerPage = 5;
    const loadMoreRef = useRef(null);

    useEffect(() => {
        const currentPortfolios = portfolioData[activeCategory] || [];
        if (visibleCount >= currentPortfolios.length) return;

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setVisibleCount(prev => prev + itemsPerPage);
            }
        }, { threshold: 0.1 });

        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }

        return () => {
            if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
        };
    }, [visibleCount, activeCategory]);
    const sectionRef = useRef(null);

    const scrollToTop = () => {
        setTimeout(() => {
            const anchor = document.getElementById('portfolio-scroll-anchor');
            if (anchor) {
                const yOffset = -100; // Account for any fixed headers
                const y = anchor.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }, 100);
    };

    const currentPortfolios = portfolioData[activeCategory] || [];
    const currentItems = currentPortfolios.slice(0, visibleCount);

    return (
        <section ref={sectionRef} className="py-10 lg:py-20 bg-[#0a0a0a] relative">
            {/* Stable anchor for smooth scrolling */}
            <div id="portfolio-scroll-anchor" className="absolute top-0 left-0 w-full" />

            <div className="container mx-auto w-layout-blockcontainer container-full-width">
                <div className="flex flex-col items-center mb-8">


                    <div className='mb-5'>
                        <Badge variant='white'>Categories</Badge>
                    </div>

                    <h2 className="text-[28px] lg:text-[36px] font-semibold text-white text-center mb-5 mt-2">
                        Our Expertise
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-16">
                    {categories.map((category, index) => {
                        const isActive = category === activeCategory;
                        const handleCategoryClick = (e) => {
                            e.preventDefault();
                            if (category === "ui/ux") {
                                window.open("https://www.behance.net/kretoss", "_blank", "noopener,noreferrer");
                                return;
                            }
                            setActiveCategory(category);
                            setVisibleCount(5);
                        };

                        return isActive ? (
                            <AnimatedButtonwithoutaero
                                key={index}
                                text={category.toUpperCase()}
                                href="javascript:void(0)"
                                className="!w-auto"
                                onClick={handleCategoryClick}
                            />
                        ) : (
                            <AnimatedButtonBorder
                                key={index}
                                text={category.toUpperCase()}
                                href="javascript:void(0)"
                                className="!w-auto"
                                onClick={handleCategoryClick}
                            />
                        );
                    })}
                </div>

                {/* Portfolio Display Area */}
                <div className="flex flex-col gap-6 lg:gap-12">
                    {currentItems.length > 0 ? (
                        currentItems.map((item, index) => (
                            <PortfolioCard key={item.slug || index} item={item} />
                        ))
                    ) : (
                        <div className="text-center py-20 text-gray-500">
                            <p className="text-2xl">More portfolios coming soon.</p>
                        </div>
                    )}
                </div>

                {visibleCount < currentPortfolios.length && (
                    <div ref={loadMoreRef} className="flex justify-center items-center py-10 mt-8">
                        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-t-2 border-white"></div>
                    </div>
                )}
            </div>
        </section>
    );
}
