import React from 'react';

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
        ? "step-card-wrapper-data _01" 
        : isLast 
            ? "step-card-wrapper-data last-card" 
            : "step-card-wrapper-data";

    const borderBoxClass = isFirst ? "border-box-work _01" : "border-box-work";
    const borderBoxBorderClass = `border-box-border _${id}`;
    const cardBoxClass = `step-card-wrapper-box _${id}`;
    const cardClass = isEven ? "step-single-card _02" : "step-single-card";

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
                    "transform": "translate3d(0px, 0px, 0px) scale3d(0.8, 0.8, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", 
                    "transformStyle": "preserve-3d" 
                }}
            >
                <div className={cardClass}>
                    <div className="step-card-top">
                        <div className="step-icon-box">
                            <img src={icon} loading="lazy" alt="Step Icon" className="step-icon" />
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
            title: "Requirements Analysis",
            description: "Understanding your goals, users, and project needs from the ground up.",
            icon: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe288817_files-02.svg"
        },
        {
            id: "02",
            duration: "2-5 Days",
            title: "User Research Ideation",
            description: "Understanding your goals, users, and project needs from the ground up.",
            icon: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe288817_files-02.svg"
        },
        {
            id: "03",
            duration: "2-4 Days",
            title: "Design & Development",
            description: "Understanding your goals, users, and project needs from the ground up.",
            icon: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe288817_files-02.svg"
        },
        {
            id: "04",
            duration: "2-4 Days",
            title: "User Feedback & Launch",
            description: "Understanding your goals, users, and project needs from the ground up.",
            icon: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe288817_files-02.svg"
        }
    ];

    return (
        <>
            <section id="Work" className="step">
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
                                <div className="project-title-area work-title">
                                    <div className="project-subtitle-box">
                                        <img
                                            src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe28879c_Star%2018%20(1).svg"
                                            loading="lazy" alt="Step Subtitle Icon" className="subtitle-image-icon"
                                            style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate3d(0px, 0px, 0px) rotate(116.964deg)" }} 
                                        />
                                        <div className="subtitle-text white">Work Process</div>
                                    </div>
                                    <h2 className="title white" aria-label="Our Approach to Success">
                                        <SplitText text="Our Approach to Success" startIndex={1} />
                                    </h2>
                                </div>
                                <div className="step-card-block-data">
                                    <div data-w-id="bb7856e3-93e6-b16d-dea6-bc4e2f65e613" className="step-card-wrapper">
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