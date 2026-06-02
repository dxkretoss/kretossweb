import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    acquisition,
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
                                toggleActions: "play none none reverse"
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
                        <div className="project-number-text">Customer Acquisition</div>
                        <h3 className="project-number-title">{acquisition}</h3>
                    </div>
                </div>
                <div className={authorWrapperClass}>
                    <div className="project-author-box">
                        <div className="project-author-image-box">
                            <img src={techicon} loading="lazy" alt="Project Author" className="project-author-image" />
                        </div>
                        <div className="project-title-designation">
                            <h3 className="project-author-title">{technology}</h3>
                            {/* <div className="project-author-text">{technology.role}</div> */}
                        </div>
                    </div>

                    <div>
                        <Link to={`/project/${slug}`} className="flex items-center justify-center gap-2 px-6 py-3 border border-white/20 rounded-full text-white text-sm font-medium hover:scale-105 transition-all duration-300">
                            View <ArrowUpRight size={18} />
                        </Link>
                    </div>
                    {/* <img
                        src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887c5_arrow-turn-forward.svg"
                        loading="lazy" alt="Project Card Icon" className="project-card-icon"
                    /> */}
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
            slug: "drawn-dating-app",
            tag: "Dating App",
            title: "A stylish Mobile app store created for Drawn Dating App",
            description: `"The design is clean, user-friendly, and perfectly aligns with our brand vision. Everything was executed with attention to detail, and the functionality works seamlessly. The team was professional, responsive, and delivered the project on time. We couldn't be happier with the outcome-thank you for bringing our ideas to life!"`,
            timeline: "2.1 Months",
            acquisition: "60%",
            techicon: "/portfolio/icon.png",
            technology: "Vue.js & Laravel",
            thumbnailImg: "/portfolio/Drawn.png",
            srcset: "/portfolio/Drawn.png 500w, /portfolio/Drawn.png 736w",
            linkIcon: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887c7_Group%202085664886.svg",
            linkUrl: "https://dribbble.com/shots/26978225-AGENCE-modern-Modern-Creative-Agency-Landing-Page-webflow",
            dataWId: "3f73e51d-3176-e96d-293b-9d441d9d29dd",
            linkDataWId: "3f73e51d-3176-e96d-293b-9d441d9d2a10"
        },
        {
            id: "02",
            slug: "trischedule",
            tag: "Workout app",
            title: "Trischedule app",
            description: "Kawika brought us his pride and joy, a classic fastback that had seen better days.Years of island sun and salt air had dulled the shine,",
            timeline: "2.2 Months",
            acquisition: "60%",
            techicon: "/portfolio/icon.png",
            technology: "Flutter",
            thumbnailImg: "/portfolio/Trischedule.png",
            srcset: "/portfolio/Trischedule.png 500w, /portfolio/Trischedule.png 800w, /portfolio/Trischedule.png 1080w, /portfolio/Trischedule.png 1472w",
            linkIcon: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887dc_Group%202085664886.svg",
            linkUrl: "https://dribbble.com/shots/26482298-Creative-Modern-Analytics-Admin-Dashboard",
            dataWId: "3f73e51d-3176-e96d-293b-9d441d9d2a14",
            linkDataWId: "60167cee-d76c-8340-045b-2fd9ca89e8c3"
        },
        {
            id: "03",
            slug: "business-compliance",
            tag: "Business Management",
            title: "Simplify Business Compliance Management and Stay Ahead of Every Deadline",
            description: "Track GST, TDS, Income Tax, and other compliance tasks in one unified platform. Stay organized, avoid penalties, and gain full visibility into what’s done, pending, and who’s responsible.",
            timeline: "2.3 Months",
            acquisition: "70%",
            techicon: "/portfolio/icon.png",
            technology: "ReactJS + Supabase",
            thumbnailImg: "/portfolio/fily.png",
            srcset: "/portfolio/fily.png 500w, /portfolio/fily.png 736w",
            linkIcon: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887e4_Group%202085664913.svg",
            linkUrl: "https://dribbble.com/shots/27049558-Digital-Agency-Landing-Page-UI-Design",
            dataWId: "3f73e51d-3176-e96d-293b-9d441d9d2a4b",
            linkDataWId: "ba84ca82-d5ed-9a54-7f48-878593d3d333"
        },
        {
            id: "04",
            slug: "delivery-service",
            tag: "Crypto Currency",
            title: "Delivery Service Projects",
            description: "Kawika brought us his pride and joy, a classic fastback that had seen better days.Years of island sun and salt air had dulled the shine,",
            timeline: "2.1 Months",
            acquisition: "60%",
            techicon: "/portfolio/icon.png",
            technology: "Blockchain - React.js - Node.js",
            thumbnailImg: "/portfolio/palzea.png",
            srcset: "/portfolio/palzea.png 500w, /portfolio/palzea.png 736w",
            linkIcon: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887ef_Group%202085664886.svg",
            linkUrl: "https://dribbble.com/shots/26016371--Consultify-Business-Agency-Template",
            dataWId: "3f73e51d-3176-e96d-293b-9d441d9d2a82",
            linkDataWId: "6cfef261-0bbb-8b17-da19-9da8b05e50ba"
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
                            toggleActions: "play none none reverse"
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
                            toggleActions: "play none none reverse"
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
                            <div className="project-subtitle-box">
                                <img
                                    src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe28879c_Star%2018%20(1).svg"
                                    loading="lazy" alt="Project Subtitle Icon" className="subtitle-image-icon"
                                    style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate3d(0px, 0px, 0px) rotate(116.964deg)" }}
                                />
                                <div className="subtitle-text white">Industry Hit Projects</div>
                            </div>
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
                                        acquisition={project.acquisition}
                                        techicon={project.techicon}
                                        technology={project.technology}
                                        thumbnailImg={project.thumbnailImg}
                                        srcset={project.srcset}
                                        linkIcon={project.linkIcon}
                                        linkUrl={project.linkUrl}
                                        dataWId={project.dataWId}
                                        linkDataWId={project.linkDataWId}
                                        slug={project.slug}
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