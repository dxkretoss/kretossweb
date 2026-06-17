import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
        'uk': '🇬🇧',
        'australia': '🇦🇺',
        'germany': '🇩🇪',
        'brazil': '🇧🇷',
        'canada': '🇨🇦',
        'uae': '🇦🇪'
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
const ProjectCard = ({
    id,
    tag,
    title,
    description,
    timeline,
    country,
    technology,
    techicon,
    thumbnailImg,
    srcset,
    linkIcon,
    linkUrl,
    dataWId,
    linkDataWId,
    slug
}) => {
    const isEven = parseInt(id, 10) % 2 === 0;
    const cardRef = useRef(null);

    const itemClass = isEven ? `project-single-item _${id} even` : `project-single-item _${id}`;
    const cardLeftClass = isEven ? `project-card-left _${id} even` : `project-card-left _${id}`;
    const authorWrapperClass = isEven ? `project-author-wrapper _${id}` : `project-author-wrapper _${id}`;
    const linkIconBoxClass = isEven ? `project-link-icon-box _${id}` : "project-link-icon-box";

    useLayoutEffect(() => {
        let ctx;
        const timer = setTimeout(() => {
            gsap.registerPlugin(ScrollTrigger);
            const card = cardRef.current;
            if (!card) return;

            ctx = gsap.context(() => {
                const mm = gsap.matchMedia();

                // Desktop: staggered scroll scaling + translation parallax
                mm.add("(min-width: 992px)", () => {
                    gsap.set(card, { y: 150 });

                    gsap.to(card, {
                        y: 0,
                        ease: "none",
                        scrollTrigger: {
                            trigger: card,
                            start: "top bottom",
                            end: "center center",
                            scrub: 1.2,
                        }
                    });
                });

                // Mobile layout smooth entrance animation
                mm.add("(max-width: 991px)", () => {
                    gsap.fromTo(card,
                        { scale: 0.95, opacity: 0, y: 50 },
                        {
                            scale: 1,
                            opacity: 1,
                            y: 0,
                            duration: 0.8,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: card,
                                start: "top 85%",
                                toggleActions: "play none none none"
                            }
                        }
                    );
                });

                // Button Hover Arrow Diagonal Slide
                const link = card.querySelector(".project-link-box");
                if (link) {
                    const frontArrow = link.querySelector(".front-button-icon");
                    const backArrow = link.querySelector(".back-button-icon");

                    gsap.set(backArrow, { x: -20, y: 20 });

                    link.addEventListener("mouseenter", () => {
                        gsap.killTweensOf([frontArrow, backArrow]);
                        gsap.to(frontArrow, { x: 20, y: -20, duration: 0.4, ease: "power2.out" });
                        gsap.to(backArrow, { x: 0, y: 0, duration: 0.4, ease: "power2.out" });
                    });

                    link.addEventListener("mouseleave", () => {
                        gsap.killTweensOf([frontArrow, backArrow]);
                        gsap.to(frontArrow, { x: 0, y: 0, duration: 0.4, ease: "power2.out" });
                        gsap.to(backArrow, { x: -20, y: 20, duration: 0.4, ease: "power2.out" });
                    });
                }
            }, card);
        }, 100);

        return () => {
            clearTimeout(timer);
            if (ctx) ctx.revert();
        };
    }, []);

    const leftBlock = (
        <div className={cardLeftClass}>
            <div className="project-card-title-text">
                <div className="project-card-title-tag">
                    <div className="project-card-tag">
                        <div className="project-tag-text">{tag}</div>
                    </div>
                    <div className="project-title-link">
                        <h3 className="project-card-title">
                            {title}&nbsp;
                            <span
                                className="title-image-span project-card"
                                style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate3d(0px, 0px, 0px) rotate(116.964deg)" }}
                            >
                                &nbsp;
                            </span>
                        </h3>
                    </div>
                </div>
                <div className="project-card-text">{description}</div>
            </div>
            <div className="project-card-bottom">
                <div className="project-number-wrapper">
                    <div className="project-number-box">
                        <div className="project-number-text">Project timeline</div>
                        <h3 className="project-number-title">{timeline}</h3>
                    </div>
                    <div className="project-number-box">
                        <div className="project-number-text">Country</div>
                        <h3 className="project-number-title flex items-center gap-2">
                            {getCountryFlag(country)} {country || 'N/A'}
                        </h3>
                    </div>
                </div>
                <div className={authorWrapperClass}>
                    <div className="project-author-box items-center">
                        <div className="flex items-center -space-x-2 mr-2">
                            {getTechIcons(technology).map((IconElement, i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-[#111111] flex items-center justify-center border border-gray-600 shadow-sm relative text-white" style={{ zIndex: 10 - i }}>
                                    {React.cloneElement(IconElement, { className: "w-4 h-4 object-contain" })}
                                </div>
                            ))}
                        </div>
                        <div className="project-title-designation">
                            <h3 className="project-author-title mb-0">{technology}</h3>
                        </div>
                    </div>

                    <div>
                        <Link to={linkUrl} className="flex items-center justify-center rounded text-black text-sm font-medium hover:scale-105 transition-all duration-300"
                            style={{ backgroundColor: 'white' }}>
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
    );

    const rightBlock = (
        <div className="project-right-box">
            <div className="project-right-wrapper !h-full">
                <div className="project-thumbnail-box">
                    <img class="project-thumbnail-bg" src={thumbnailImg} alt=""></img>
                    <img
                        src={thumbnailImg}
                        loading="lazy"
                        sizes="100vw" alt="Project Thumbnail"
                        srcSet={srcset}
                        className="project-thumbnail"
                    />
                </div>
            </div>
        </div>
    );

    return (
        <div
            ref={cardRef}
            data-w-id={dataWId}
            className={itemClass}
            style={{
                "transition": "none" // Disable standard CSS transition to allow conflict-free GSAP scrubbing!
            }}
        >
            {isEven ? (
                <>
                    {rightBlock}
                    {leftBlock}
                </>
            ) : (
                <>
                    {leftBlock}
                    {rightBlock}
                </>
            )}
        </div>
    );
};

export default function Projects() {
    // Dynamic Portfolio Projects Array
    const projectsList = [
        {
            id: "01",
            slug: "drawn",
            tag: "Mobile App",
            title: "Drawn",
            description: "Experience the future of mobile applications with Drawn. Engineered for high performance, scalability, and an intuitive user experience.",
            timeline: "2-4 Months",
            country: "Germany",
            technology: "Flutter",
            thumbnailImg: "/portfolio/mobile-app/drawn/portfolio_drawn.jpg",
            srcset: "/portfolio/mobile-app/drawn/portfolio_drawn.jpg 500w",
            linkUrl: "/portfolio/drawn"
        },
        {
            id: "02",
            slug: "trischedule",
            tag: "Mobile App",
            title: "TriSchedule",
            description: "Experience the future of mobile applications with TriSchedule. Engineered for high performance, scalability, and an intuitive user experience.",
            timeline: "2-4 Months",
            country: "Canada",
            technology: "Flutter",
            thumbnailImg: "/portfolio/mobile-app/trischedule/portfolio_trischedule.jpg",
            srcset: "/portfolio/mobile-app/trischedule/portfolio_trischedule.jpg 500w",
            linkUrl: "/portfolio/trischedule"
        },
        {
            id: "03",
            slug: "fily",
            tag: "Custom web",
            title: "Fily",
            description: "Experience the future of web applications with Fily. Engineered for high performance, scalability, and an intuitive user experience.",
            timeline: "2-4 Months",
            country: "USA",
            technology: "ReactJS + Supabase",
            thumbnailImg: "/portfolio/custom/portfolio_fily.webp",
            srcset: "/portfolio/custom/portfolio_fily.webp 500w",
            linkUrl: "/portfolio/fily"
        },
        {
            id: "04",
            slug: "palzea-widget",
            tag: "Custom web",
            title: "Palzea",
            description: "Experience the future of web applications with Palzea. Engineered for high performance, scalability, and an intuitive user experience.",
            timeline: "2-4 Months",
            country: "UK",
            technology: "Blockchain + React.js + Node.js",
            thumbnailImg: "/portfolio/custom/portfolio_palzea-widget.webp",
            srcset: "/portfolio/custom/portfolio_palzea-widget.webp 500w",
            linkUrl: "/portfolio/palzea-widget"
        }
    ];

    const projectsRef = useRef(null);

    useLayoutEffect(() => {
        let ctx;
        const timer = setTimeout(() => {
            gsap.registerPlugin(ScrollTrigger);
            ctx = gsap.context(() => {
                // Scale star subtitle icon on viewport entrance
                gsap.fromTo(".project-subtitle-box .subtitle-image-icon",
                    { scale: 0 },
                    {
                        scale: 1,
                        duration: 1.2,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: ".project-subtitle-box",
                            start: "top 90%",
                            toggleActions: "play none none none"
                        }
                    }
                );

                // Continuous spin for the subtitle star icon
                gsap.to(".project-subtitle-box .subtitle-image-icon", {
                    rotate: 360,
                    ease: "none",
                    duration: 10,
                    repeat: -1,
                });

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
            <section ref={projectsRef} id="Projects" className="project">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="project-content-wrapper">
                        <div className="home-project-title _02">

                            <Badge variant="white">Industry Hit Projects</Badge>
                            <h2 className="title white" aria-label="Where Great Ideas Became Real Results">
                                <SplitText text="Where Great Ideas Became Real Results" startIndex={1} />
                            </h2>
                        </div>
                        <div className="project-card-wrapper-box">
                            <div className="project-card-wrapper">
                                {projectsList.map((project) => (
                                    <ProjectCard
                                        key={project.id}
                                        id={project.id}
                                        tag={project.tag}
                                        title={project.title}
                                        description={project.description}
                                        timeline={project.timeline}
                                        country={project.country}
                                        techicon={project.techicon}
                                        technology={project.technology}
                                        thumbnailImg={project.thumbnailImg}
                                        srcset={project.srcset}
                                        slug={project.slug}
                                        linkUrl={project.linkUrl}
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