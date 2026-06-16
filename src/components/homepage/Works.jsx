import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Badge from '../ui/Badge';

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

// Reusable WorkStep Component
const WorkStep = ({ id, duration, title, description, icon, isFirst, isLast }) => {
    const isEven = parseInt(id, 10) % 2 === 0;

    // Classes setup
    const wrapperClass = isFirst
        ? "step-card-wrapper-data _01 !h-full !flex !flex-col"
        : isLast
            ? "step-card-wrapper-data last-card !h-full !flex !flex-col"
            : "step-card-wrapper-data !h-full !flex !flex-col";

    const borderBoxClass = isFirst ? "border-box-work _01" : "border-box-work";
    const borderBoxBorderClass = `border-box-border _${id}`;
    const cardBoxClass = `step-card-wrapper-box _${id} !flex-1 !flex !flex-col`;
    const cardClass = isEven ? "step-single-card _02 !flex-1 !flex !flex-col !justify-between" : "step-single-card !flex-1 !flex !flex-col !justify-between";

    return (
        <div className={wrapperClass}>
            <div className={borderBoxClass}>
                <div
                    className={borderBoxBorderClass}
                    style={{ "willChange": "background", "backgroundColor": "rgb(180, 210, 249)" }}
                >
                    <div className="border-circel-one">
                        <div className="border-circel-two"></div>
                    </div>
                    {isFirst && <div className="border-circel-two-two"></div>}
                </div>
                <div className="border-work-title-box">
                    <div className="border-work-title">STEP {id}</div>
                </div>
            </div>
            <div
                className={cardBoxClass}
                style={{
                    "willChange": "opacity, transform",
                    "opacity": "0",
                    "transformStyle": "preserve-3d"
                }}
            >
                <div className={cardClass}>
                    <div className="step-card-top">
                        <div className="step-icon-box">
                            {id}
                            {/* <img src={icon} loading="lazy" alt="Step Icon" className="step-icon" /> */}
                        </div>
                        <div className="step-date-box">
                            <img
                                src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe288818_clock-01.svg"
                                loading="lazy" alt="Step Date Icon" className="step-date-icon"
                            />
                            <div className="step-date-text">{duration}</div>
                        </div>
                    </div>
                    <div className="step-card-bottom">
                        <h3 className="step-card-title">{title}</h3>
                        <div className="step-card-text">{description}</div>
                    </div>
                </div>
            </div>
            {isLast && (
                <img
                    src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b3a122ef14b16145540e79_Vector%202779.svg"
                    loading="lazy" alt="Card Icon" className="last-card-arrow-icon"
                />
            )}
        </div>
    );
};

export default function Works() {
    // Step configuration details
    const stepsData = [
        {
            id: "01",
            duration: "2 Hours",
            title: "Discover",
            description: "We dive deep into your vision, goals, audience, and requirements to understand exactly what your business needs to succeed.",
            icon: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe288817_files-02.svg"
        },
        {
            id: "02",
            duration: "2-5 Days",
            title: "Strategize",
            description: "We create a clear roadmap, structure, and execution plan to ensure a smooth and scalable development process.",
            icon: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe288817_files-02.svg"
        },
        {
            id: "03",
            duration: "2-4 Days",
            title: "Create & Develop",
            description: "Our team designs and develops powerful digital experiences with modern technology, seamless functionality, and stunning visuals.",
            icon: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe288817_files-02.svg"
        },
        {
            id: "04",
            duration: "2-4 Days",
            title: "Launch & Level Up",
            description: "After launch, we optimize, improve, and scale your product continuously to help your business grow faster and stay ahead.",
            icon: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe288817_files-02.svg"
        }
    ];

    const worksRef = useRef(null);

    useLayoutEffect(() => {
        let ctx;
        const timer = setTimeout(() => {
            gsap.registerPlugin(ScrollTrigger);
            ctx = gsap.context(() => {
                const cards = gsap.utils.toArray(".step-card-wrapper-data");

                // Infinite 3D rotation on decorative helix background shape
                gsap.to(".step-shape-icon", {
                    rotateZ: "+=360",
                    ease: "none",
                    duration: 40,
                    repeat: -1,
                });

                // Scale star subtitle icon on viewport entrance
                gsap.fromTo(".work-title .subtitle-image-icon",
                    { scale: 0 },
                    {
                        scale: 1,
                        duration: 1.2,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: ".work-title",
                            start: "top 90%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );

                // Continuous spin for the subtitle star icon
                gsap.to(".work-title .subtitle-image-icon", {
                    rotate: 360,
                    ease: "none",
                    duration: 10,
                    repeat: -1,
                });

                // Title block slide entrance
                gsap.fromTo(".work-title",
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: ".work-title",
                            start: "top 90%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );

                // Staggered Scroll-highlighting and fade-scale for step cards
                // Initialize starting states
                cards.forEach((card) => {
                    const border = card.querySelector("[class^='border-box-border']");
                    const cardBox = card.querySelector("[class^='step-card-wrapper-box']");
                    gsap.set(cardBox, { scale: 0.8, opacity: 0 });
                    gsap.set(border, { backgroundColor: "rgb(180, 210, 249)" });
                });

                // Single ScrollTrigger timeline bound to the parent sticky scrolling container
                const stepTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: worksRef.current,
                        start: "top 60px",
                        end: "bottom bottom",
                        scrub: 1,
                    }
                });

                cards.forEach((card, index) => {
                    const border = card.querySelector("[class^='border-box-border']");
                    const cardBox = card.querySelector("[class^='step-card-wrapper-box']");

                    stepTl.to(cardBox, {
                        scale: 1,
                        opacity: 1,
                        duration: 1.0,
                        ease: "power2.out"
                    }, index * 1.2)
                        .to(border, {
                            backgroundColor: "#0e54f1",
                            duration: 1.0,
                            ease: "power2.out"
                        }, "<");
                });

            }, worksRef);
        }, 100);

        return () => {
            clearTimeout(timer);
            if (ctx) ctx.revert();
        };
    }, []);

    return (
        <>
            <section ref={worksRef} id="Work" className="step">
                <div className="step-shape-box">
                    <img
                        src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b111dabcb84206b63f263a_cube-helix%202.svg"
                        loading="lazy" alt="Step Shape Icon" className="step-shape-icon"
                        style={{ "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(29.668deg) rotateY(14.834deg) rotateZ(267.012deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d", "willChange": "transform" }}
                    />
                </div>
                <div className="step-block">
                    <div className="step-block-data">
                        <div className="w-layout-blockcontainer container w-container">
                            <div className="step-content-wrapper">
                                <div className="project-title-area work-title"
                                    style={{ "willChange": "transform", "transformStyle": "preserve-3d" }}>
                                    <Badge variant='white'>Process</Badge>
                                    <h2 className="title white" aria-label="Our Approach to Success">
                                        <SplitText text="Our Approach to Success" startIndex={1} />
                                    </h2>
                                </div>
                                <div className="step-card-block-data">
                                    <div data-w-id="bb7856e3-93e6-b16d-dea6-bc4e2f65e613" className="step-card-wrapper !items-stretch">
                                        {stepsData.map((step, idx) => (
                                            <WorkStep
                                                key={step.id}
                                                id={step.id}
                                                duration={step.duration}
                                                title={step.title}
                                                description={step.description}
                                                icon={step.icon}
                                                isFirst={idx === 0}
                                                isLast={idx === stepsData.length - 1}
                                            />
                                        ))}
                                        <img
                                            src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/699c625038a0e177239d679e_dd.svg"
                                            loading="lazy" alt="img" className="process-middel-icon"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}