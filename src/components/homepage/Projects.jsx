import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FastAverageColor } from 'fast-average-color';
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

    const techs = techString.split(/[\+,&|-]/).map(t => t.trim().toLowerCase());
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

gsap.registerPlugin(ScrollTrigger);

// SplitText helper for dynamic GSAP word/letter layouts
const SplitText = ({ text, wordClassPrefix = "gsap_split_word", letterClassPrefix = "gsap_split_letter", startIndex = 1, plainStyle = false }) => {
    const words = text.split(" ");
    let globalLetterIdx = startIndex;

    const letterStyle = plainStyle
        ? { position: "relative", display: "inline-block" }
        : {
            position: "relative",
            display: "inline-block",
            opacity: "1",
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate3d(0px, 0px, 0px)"
        };

    return (
        <>
            {words.map((word, wordIdx) => {
                const chars = word.split("");
                return (
                    <React.Fragment key={wordIdx}>
                        <div
                            className={`${wordClassPrefix} ${wordClassPrefix}${wordIdx + 1}`}
                            aria-hidden="true"
                            style={{ position: "relative", display: "inline-block" }}
                        >
                            {chars.map((char, charIdx) => {
                                const currentIdx = globalLetterIdx++;
                                return (
                                    <div
                                        key={charIdx}
                                        className={`${letterClassPrefix} ${letterClassPrefix}${currentIdx}`}
                                        aria-hidden="true"
                                        style={letterStyle}
                                    >
                                        {char}
                                    </div>
                                );
                            })}
                        </div>
                        {wordIdx < words.length - 1 && " "}
                    </React.Fragment>
                );
            })}
        </>
    );
};

// Reusable ProjectCard Component
const ProjectCard = ({ project, id }) => {
    const isEven = parseInt(id, 10) % 2 === 0;
    const outerRef = useRef(null);
    const innerRef = useRef(null);

    // Dynamic top offset to recreate the staggered sticky stacking (20px, 40px, 60px...)
    const topOffset = parseInt(id, 10) * 20;
    const itemClass = "w-full md:sticky origin-top [transform:perspective(2000px)] h-full flex flex-col";

    const [bgColor, setBgColor] = useState('#111111');
    const imgRef = useRef(null);

    useEffect(() => {
        if (imgRef.current) {
            const fac = new FastAverageColor();

            const extractColor = async () => {
                try {
                    const color = await fac.getColorAsync(imgRef.current, {
                        left: 10,
                        top: 10,
                        width: 50,
                        height: 50,
                        algorithm: 'dominant'
                    });
                    setBgColor(color.hex);
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
    }, [project.portfolioImage]);

    useLayoutEffect(() => {
        let ctx;
        const timer = setTimeout(() => {
            gsap.registerPlugin(ScrollTrigger);
            const outer = outerRef.current;
            const inner = innerRef.current;
            if (!outer || !inner) return;

            ctx = gsap.context(() => {
                const mm = gsap.matchMedia();

                // Desktop: staggered scroll scaling + translation parallax
                mm.add("(min-width: 992px)", () => {
                    gsap.set(inner, { y: 150 });

                    gsap.to(inner, {
                        y: 0,
                        ease: "none",
                        scrollTrigger: {
                            trigger: outer,
                            start: "top bottom",
                            end: "center center",
                            scrub: 1.2,
                        }
                    });
                });

                // Mobile layout smooth entrance animation
                mm.add("(max-width: 991px)", () => {
                    gsap.fromTo(inner,
                        { scale: 0.95, opacity: 0, y: 50 },
                        {
                            scale: 1,
                            opacity: 1,
                            y: 0,
                            duration: 0.8,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: outer,
                                start: "top 85%",
                                toggleActions: "play none none none"
                            }
                        }
                    );
                });
            }, outer);
        }, 100);

        return () => {
            clearTimeout(timer);
            if (ctx) ctx.revert();
        };
    }, []);

    return (
        <div
            ref={outerRef}
            className={itemClass}
            style={{
                transition: "none", // Disable standard CSS transition to allow conflict-free GSAP scrubbing!
                top: `${topOffset}px`
            }}
        >
            <div ref={innerRef} className="w-full overflow-hidden min-h-[400px] lg:min-h-[500px]">
                <div className="flex flex-col xl:flex-row gap-3 rounded-[10px] p-2 sm:p-3 transition-colors duration-500 h-full" style={{ background: bgColor }}>

                    {/* Left Side - Image Panel */}
                    <div className="w-full xl:w-[65%] relative flex items-center justify-center self-stretch">
                        <img
                            ref={imgRef}
                            src={project.portfolioImage}
                            alt={project.title}
                            className="w-full h-full object-cover rounded-[5px]"
                        />
                    </div>

                    {/* Right Side - Content Panel */}
                    <div
                        className="w-full xl:w-[35%] rounded-[5px] p-4 md:p-8 flex flex-col justify-between self-stretch relative overflow-hidden transition-colors duration-500"
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
                                    {project.tags?.map((tag, idx) => (
                                        <span key={idx} className="bg-white/10 text-white border border-[#FFFFFF1A] text-xs md:text-sm px-3 md:px-4 rounded-[4px] flex items-center justify-center h-[32px] md:h-[36px]">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                {project.portfolioLogo &&
                                    <div className="flex items-center justify-center shrink-0 ml-2 self-start bg-white/10 border border-[#FFFFFF1A] px-3 rounded-[4px] w-[100px] md:w-[120px] h-[32px] md:h-[36px]">
                                        <img src={project.portfolioLogo} alt={project.title} className="max-w-full max-h-[16px] md:max-h-[20px] object-contain" />
                                    </div>
                                }
                            </div>

                            {/* Title & Description */}
                            {/* <h3 className={`text-2xl sm:text-[32px] font-semibold text-white mb-3 sm:mb-4 leading-tight`}>
                                {project.title}
                            </h3> */}
                            <p className={`text-white text-[14px] md:text-[16px] mb-6 sm:mb-8 leading-relaxed`}>
                                {project.description}
                            </p>
                        </div>

                        {/* Stats & Actions */}
                        <div className="flex flex-col mt-auto pt-8">
                            <div className="flex flex-wrap justify-between gap-6 mb-8">
                                <div>
                                    <p className={`text-[#DADADA] text-sm mb-1`}>Project timeline</p>
                                    <p className={`font-semibold text-lg text-white`}>{project.timeline || 'N/A'}</p>
                                </div>
                                <div>
                                    <p className={`text-[#DADADA] text-sm mb-1`}>Country</p>
                                    <p className={`font-semibold text-lg flex items-center gap-2 text-white`}>
                                        {getCountryFlag(project.country)} {project.country || 'N/A'}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-4 p-3 rounded-[5px] transition-colors duration-500"
                                style={{ background: bgColor }}
                            >

                                <div className='flex gap-2 items-center'>
                                    <div className="flex items-center -space-x-2 mr-1">
                                        {getTechIcons(project.techStack || project.category).map((IconElement, i) => (
                                            <div key={i} className="w-8 h-8 rounded-full bg-[#111111] flex items-center justify-center border border-gray-600 shadow-sm relative text-white" style={{ zIndex: 10 - i }}>
                                                {React.cloneElement(IconElement, { className: "w-4 h-4 object-contain" })}
                                            </div>
                                        ))}
                                    </div>
                                    {/* Tech Stack Pill */}
                                    <div className={`hidden md:flex items-center gap-2 font-semibold text-sm sm:text-base text-white`}>
                                        {(project.techStack || project.category || '').length > 20
                                            ? `${(project.techStack || project.category || '').slice(0, 20)}...`
                                            : (project.techStack || project.category || '')}
                                    </div>
                                </div>

                                {/* View Project Button */}
                                <Link
                                    to={project.link || `/portfolio/${project.slug}`}
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
        </div>
    );
};

export default function Projects() {
    // Dynamic Portfolio Projects Array
    const projectsList = [
        {
            "id": "01",
            "slug": "klubbrabatten",
            "portfolioImage": "/portfolio/custom/klubbrabatten-new.jpg",
            "portfolioLogo": "/portfolio/custom/Klubbrabatten-logo.png",

            "category": "Custom web",
            "tags": [
                "Klubbrabatten",
                "Web"
            ],
            "title": "Klubbrabatten",
            "description": "Klubbrabatten is a digital membership and fundraising platform that helps organizations raise funds through exclusive discounts while giving members access to valuable local and national offers.",
            "timeline": "8-12 Months",
            "acquisition": "N/A",
            "country": "Germany",
            "techStack": "ReactJS + Supabase + Node.js",
            "techIcon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            "link": "/portfolio/klubbrabatten"
        },
        {
            "id": "02",
            "slug": "palzea-widget",
            "portfolioImage": "/portfolio/custom/Palzea-new.png",
            "portfolioLogo": "/portfolio/custom/palzea-logo.png",

            "category": "Custom web",
            "tags": [
                "Widget",
                "Web"
            ],
            "title": "Palzea Widget",
            "description": "Palzea is a secure peer-to-peer crypto trading platform that enables users to buy and sell digital assets with real-time trading, integrated wallets, and escrow protection.",
            "timeline": "4-6 Months",
            "acquisition": "N/A",
            "country": "UK",
            "techStack": "Blockchain + React.js + Node.js",
            "techIcon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            "link": "/portfolio/palzea-widget"
        },
        {
            "id": "03",
            "slug": "fily",
            "portfolioImage": "/portfolio/custom/Fily-new.jpg",
            "portfolioLogo": "/portfolio/custom/Fily-logo.png",

            "category": "Custom web",
            "tags": [
                "Fily",
                "Web"
            ],
            "title": "Fily",
            "description": "Fily is an AI-powered business assistant that simplifies GST compliance, invoicing, expenses, tax reminders, and financial management for Indian businesses and freelancers.",
            "timeline": "2-4 Months",
            "acquisition": "N/A",
            "country": "India",
            "techStack": "ReactJS + Supabase",
            "techIcon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            "link": "/portfolio/fily"
        },
        {
            "id": "04",
            "portfolioImage": "/portfolio/custom/domino_hub_new.jpg",
            "portfolioLogo": "/portfolio/custom/domino-logo.png",
            "category": "Custom web",
            "tags": [
                "Domino Hub - Club's Edition",
                "Web"
            ],
            "title": "Domino Hub - Club's Edition",
            "description": "Domino Hub is a tournament and club management platform that helps domino communities manage members, tournaments, player statistics, leaderboards, attendance, and club operations.",
            "timeline": "6-8 Months",
            "acquisition": "N/A",
            "country": "Australia",
            "techStack": "React.js + Node.js + Postgresql",
            "techIcon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            "link": "/portfolio/domino-hub"
        },
    ];

    const projectsRef = useRef(null);

    useLayoutEffect(() => {
        let ctx;
        const timer = setTimeout(() => {
            gsap.registerPlugin(ScrollTrigger);
            ctx = gsap.context(() => {
                // Title block scale and slide animation
                gsap.fromTo(".home-project-title",
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: ".home-project-title",
                            start: "top 90%",
                            toggleActions: "play none none none"
                        }
                    }
                );
            }, projectsRef);
        }, 100);

        return () => {
            clearTimeout(timer);
            if (ctx) ctx.revert();
        };
    }, []);

    return (
        <>
            <section ref={projectsRef} id="Projects" className="project pb-20">
                <div className="w-layout-blockcontainer container-full-width  container w-container">
                    <div className="project-content-wrapper">
                        <div className="home-project-title _02 flex flex-col items-center mb-12">

                            <Badge variant="white">Industry Hit Projects</Badge>
                            <h2 className="title white text-center mt-4" aria-label="Where Great Ideas Became Real Results">
                                <SplitText text="Where Great Ideas Became Real Results" startIndex={1} />
                            </h2>
                        </div>
                        <div className="project-card-wrapper-box">
                            <div className="project-card-wrapper flex flex-col gap-6 lg:gap-12">
                                {projectsList.map((project) => (
                                    <ProjectCard
                                        key={project.id}
                                        id={project.id}
                                        project={project}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
