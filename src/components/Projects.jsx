import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
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
    author,
    authorImg,
    thumbnailImg,
    srcset,
    linkIcon,
    linkUrl,
    dataWId,
    linkDataWId
}) => {
    const isEven = parseInt(id, 10) % 2 === 0;
    const cardRef = useRef(null);

    const itemClass = isEven ? `project-single-item _${id}` : "project-single-item";
    const cardLeftClass = `project-card-left _${id}`;
    const authorWrapperClass = isEven ? `project-author-wrapper _${id}` : "project-author-wrapper";
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
                    gsap.set(card, { scale: 0.8, y: 150 });

                    gsap.to(card, {
                        scale: 1,
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

                // Mobile layout fallback reset
                mm.add("(max-width: 991px)", () => {
                    gsap.set(card, { scale: 1, y: 0 });
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
                            <img src={authorImg} loading="lazy" alt="Project Author" className="project-author-image" />
                        </div>
                        <div className="project-title-designation">
                            <h3 className="project-author-title">{author.name}</h3>
                            <div className="project-author-text">{author.role}</div>
                        </div>
                    </div>
                    <img
                        src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887c5_arrow-turn-forward.svg"
                        loading="lazy" alt="Project Card Icon" className="project-card-icon"
                    />
                </div>
            </div>
        </div>
    );

    const rightBlock = (
        <div className="project-right-box">
            <div className="project-right-wrapper">
                <div className="project-thumbnail-box">
                    <img
                        src={thumbnailImg}
                        loading="lazy"
                        sizes="100vw" alt="Project Thumbnail"
                        srcSet={srcset}
                        className="project-thumbnail"
                    />
                </div>
                <div className="project-card-overlay">
                    <div className="project-link-overlay">
                        <div className="project-link-icon-title">
                            <div className={linkIconBoxClass}>
                                <img src={linkIcon} loading="lazy" alt="Project Link Icon" className="project-link-icon" />
                            </div>
                            <div className="link-box-title-text">
                                <h3 className="link-box-title">Scroll Down</h3>
                                <div className="link-box-text">Step into 2026 with bold looks, limited releases, and trend-Design Ideas.</div>
                            </div>
                        </div>
                        <a
                            data-w-id={linkDataWId}
                            href={linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-box w-inline-block"
                        >
                            <div className="project-button-text">View Design</div>
                            <div className="project-icon-box">
                                <img
                                    src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b13771c3fe4b103672b9f0_Vector%20(Stroke).svg"
                                    loading="lazy"
                                    alt="Project Card Link Icon" className="front-button-icon"
                                />
                                <img
                                    src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b13771c3fe4b103672b9f0_Vector%20(Stroke).svg"
                                    loading="lazy"
                                    alt="Project Card Link Icon" className="back-button-icon"
                                />
                            </div>
                        </a>
                    </div>
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
                "willChange": "transform", 
                "transformStyle": "preserve-3d",
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
            tag: "Delivery",
            title: "Delivery Service Projects",
            description: "Kawika brought us his pride and joy, a classic fastback that had seen better days.Years of island sun and salt air had dulled the shine,",
            timeline: "2.5 Months",
            acquisition: "80%",
            authorImg: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887c4_Ellipse%204010.webp",
            author: { name: "Windy", role: "Yenex CEO" },
            thumbnailImg: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887c1_Frame%202147227851.webp",
            srcset: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887c1_Frame%25202147227851-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887c1_Frame%202147227851.webp 736w",
            linkIcon: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887c7_Group%202085664886.svg",
            linkUrl: "https://dribbble.com/shots/26978225-AGENCE-modern-Modern-Creative-Agency-Landing-Page-webflow",
            dataWId: "3f73e51d-3176-e96d-293b-9d441d9d29dd",
            linkDataWId: "3f73e51d-3176-e96d-293b-9d441d9d2a10"
        },
        {
            id: "02",
            tag: "Delivery",
            title: "Delivery Service Projects",
            description: "Kawika brought us his pride and joy, a classic fastback that had seen better days.Years of island sun and salt air had dulled the shine,",
            timeline: "2.3 Months",
            acquisition: "70%",
            authorImg: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887c4_Ellipse%204010.webp",
            author: { name: "Windy", role: "Yenex CEO" },
            thumbnailImg: "https://cdn.prod.website-files.com/6996a337655d586ffe2887c9_Frame%202147239829.webp",
            srcset: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887c9_Frame%25202147239829-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887c9_Frame%25202147239829-p-800.webp 800w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887c9_Frame%25202147239829-p-1080.webp 1080w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887c9_Frame%202147239829.webp 1472w",
            linkIcon: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887dc_Group%202085664886.svg",
            linkUrl: "https://dribbble.com/shots/26482298-Creative-Modern-Analytics-Admin-Dashboard",
            dataWId: "3f73e51d-3176-e96d-293b-9d441d9d2a14",
            linkDataWId: "60167cee-d76c-8340-045b-2fd9ca89e8c3"
        },
        {
            id: "03",
            tag: "Delivery",
            title: "Delivery Service Projects",
            description: "Kawika brought us his pride and joy, a classic fastback that had seen better days.Years of island sun and salt air had dulled the shine,",
            timeline: "2.2 Months",
            acquisition: "60%",
            authorImg: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887c4_Ellipse%204010.webp",
            author: { name: "Windy", role: "Yenex CEO" },
            thumbnailImg: "https://cdn.prod.website-files.com/6996a337655d586ffe2887e8_Frame%202147239830.webp",
            srcset: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887e8_Frame%25202147239830-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887e8_Frame%202147239830.webp 736w",
            linkIcon: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887e4_Group%202085664913.svg",
            linkUrl: "https://dribbble.com/shots/27049558-Digital-Agency-Landing-Page-UI-Design",
            dataWId: "3f73e51d-3176-e96d-293b-9d441d9d2a4b",
            linkDataWId: "ba84ca82-d5ed-9a54-7f48-878593d3d333"
        },
        {
            id: "04",
            tag: "Delivery",
            title: "Delivery Service Projects",
            description: "Kawika brought us his pride and joy, a classic fastback that had seen better days.Years of island sun and salt air had dulled the shine,",
            timeline: "2.1 Months",
            acquisition: "60%",
            authorImg: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887c4_Ellipse%204010.webp",
            author: { name: "Windy", role: "Yenex CEO" },
            thumbnailImg: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887ec_Frame%202147239834.webp",
            srcset: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887ec_Frame%25202147239834-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887ec_Frame%202147239834.webp 736w",
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
                // Spin and scale star subtitle icon on viewport entrance
                gsap.fromTo(".project-subtitle-box .subtitle-image-icon",
                    { rotate: 0, scale: 0 },
                    {
                        rotate: 116.964,
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
                            <h2 className="title white" aria-label="Where Great Ideas Became Real">
                                <SplitText text="Where Great Ideas Became Real " startIndex={1} />
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
                                        authorImg={project.authorImg}
                                        author={project.author}
                                        thumbnailImg={project.thumbnailImg}
                                        srcset={project.srcset}
                                        linkIcon={project.linkIcon}
                                        linkUrl={project.linkUrl}
                                        dataWId={project.dataWId}
                                        linkDataWId={project.linkDataWId}
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