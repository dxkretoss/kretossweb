import React from 'react';

// Highly-efficient React component to dynamically generate the exact nested HTML structures
// and sequential classNames expected by Webflow's external CSS and GSAP SplitText engines.
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

// Subcomponent: RatingBadge
const RatingBadge = () => {
    return (
        <div data-w-id="7bf5d453-3919-ceec-d900-dbc18b9514f9" style={{ opacity: "1" }} className="hero-icon-rating">
            <div className="hero-icon-box">
                <img
                    src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887f8_Frame%202147227821.svg"
                    alt="Hero Icon"
                    className="hero-left-meta-icon _01"
                />
                <img
                    src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887f9_Frame%202147227822.svg"
                    alt="Hero Icon"
                    className="hero-left-meta-logo _02"
                />
            </div>
            <div className="hero-rating-text">
                <div className="hero-rating-text">4.8</div>
                <div className="hero-star-wrapper">
                    {[...Array(5)].map((_, i) => (
                        <img
                            key={i}
                            src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69acfb7509f4926e7df68a47_Vector.svg"
                            alt="Review Star"
                            className={`single-review-star _0${i + 1}`}
                            style={{
                                transform: "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                transformStyle: "preserve-3d"
                            }}
                        />
                    ))}
                    <div
                        data-w-id="24d529b2-eddf-a276-b94a-c690df1fa54f"
                        className="trust-score"
                        style={{
                            transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                            opacity: "0.999609",
                            willChange: "transform, opacity"
                        }}
                    >
                        Trust Score
                    </div>
                </div>
            </div>
        </div>
    );
};

// Subcomponent: ScrollingTags
const ScrollingTags = () => {
    const tags = [
        { key: "_01", text: "Certified Partner" },
        { key: "_02", text: "Trusted Quality" },
        { key: "_03", text: "Expert Support" },
        { key: "_04", text: "Secure Service" }
    ];

    return (
        <div data-w-id="69a0a433-8305-9809-e39a-ccf7f85fdd87" style={{ opacity: "1" }} className="hero-icon-text">
            <div className="hero-meta-icon-box">
                <img
                    src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69acfcaea6bf20ffc4b2d559_Vector.svg"
                    alt="Hero Icon"
                    className="hero-meta-box-icon"
                    style={{ translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotateY(57.28deg)" }}
                />
            </div>
            <div className="hero-meta-tag-box">
                {tags.map((tag, idx) => {
                    const translateMap = ["-100%", "-200%", "-100%", "0%"];
                    const willChangeVal = idx === 2 ? "transform" : undefined;
                    return (
                        <div
                            key={tag.key}
                            className={`single-tag-item ${tag.key}`}
                            style={{
                                transform: `translate3d(0px, ${translateMap[idx]}, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                                transformStyle: "preserve-3d",
                                willChange: willChangeVal
                            }}
                        >
                            {tag.text}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

// Subcomponent: Reusable FloatingBadge
const FloatingBadge = ({ text, type = 'purple', dataWId, arrowRot = -17.9137, badgeClass = '', iconSrc, arrowSvg }) => {
    // Arrow rotate style
    const arrowStyle = {
        translate: "none",
        rotate: "none",
        scale: "none",
        transform: `translate3d(0px, 0px, 0px) rotate(${arrowRot}deg)`
    };

    if (type === 'web') {
        return (
            <div data-w-id={dataWId} style={{ opacity: "1" }} className={`hero-shap-wrapper ${badgeClass}`}>
                <div className="hero-arrow-box _01" style={arrowStyle}>
                    {arrowSvg || (
                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.45581 8.15328L29.6548 0.0773835C30.427 -0.143754 31.2565 0.118491 31.7613 0.743292L32.2338 1.32828C32.7261 1.93767 32.8173 2.77836 32.4671 3.47912L18.8725 30.683C18.077 32.275 15.747 32.119 15.1643 30.4375C13.5195 25.6914 11.0705 18.8236 10.387 17.9776C9.72978 17.164 4.69393 14.0604 0.980583 11.8303C-0.528692 10.9238 -0.236698 8.638 1.45581 8.15328Z" fill="#A9BF15" />
                        </svg>
                    )}
                </div>
                <div className="hero-shape-box _01 web">
                    <img src={iconSrc} alt="Hero Shaper Icon" className="hero-shaper-icon" />
                    <div className="hero-shape-text">{text}</div>
                </div>
            </div>
        );
    }

    if (type === 'orange') {
        return (
            <div data-w-id={dataWId} style={{ opacity: "1" }} className={`hero-shap-wrapper right-shape ${badgeClass}`}>
                <div className="hero-arrow-box right-arrow" style={arrowStyle}>
                    <img src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe288810_Vector%204526%20(1).svg" alt="Hero Arrow Icon" className="hero-arrow-icon" />
                </div>
                <div className="hero-shape-box right-shape">
                    <img src={iconSrc} alt="Hero Shaper Icon" className="hero-shaper-icon" />
                    <div className="hero-shape-text">{text}</div>
                </div>
            </div>
        );
    }

    // Default Purple UI Design Badge
    return (
        <div data-w-id={dataWId} style={{ opacity: "1" }} className={`hero-shap-wrapper _01 ${badgeClass}`}>
            <div className="hero-arrow-box _01" style={arrowStyle}>
                <img src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe28880e_Vector%204526.svg" alt="Hero Arrow Icon" className="hero-arrow-icon" />
            </div>
            <div className="hero-shape-box _01">
                <img src={iconSrc} alt="Hero Shaper Icon" className="hero-shaper-icon" />
                <div className="hero-shape-text">{text}</div>
            </div>
        </div>
    );
};

// Subcomponent: PrimaryCTAButton
const PrimaryCTAButton = ({ href = "#Contact", dataWId }) => {
    return (
        <div className="hero-button">
            <a data-w-id={dataWId} href={href} className="primary-button w-inline-block" aria-label="LET’S TALKLET’S TALK">
                <div className="button-text-wrapper">
                    <div className="button-text-box">
                        <div className="button-front-text">
                            <SplitText text="LET’S TALK" startIndex={1} plainStyle={true} />
                        </div>
                        <div className="button-back-text">
                            <SplitText text="LET’S TALK" startIndex={10} plainStyle={true} />
                        </div>
                    </div>
                </div>
                <div className="button-arrow-box">
                    <div className="button-arrow-box-icon">
                        <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887bf_Arrow%20Right%20Up.svg"
                            alt="Button Icon"
                            className="button-front-arrow"
                            style={{ transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }}
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887bf_Arrow%20Right%20Up.svg"
                            alt="Button Icon"
                            className="button-back-arrow"
                            style={{ transform: "translate3d(-13px, 14px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }}
                        />
                    </div>
                </div>
                <div className="button-dot-box">
                    <div className="button-dot"></div>
                    <div className="button-dot"></div>
                </div>
                <div className="button-dot-box right-box">
                    <div className="button-dot"></div>
                    <div className="button-dot"></div>
                </div>
            </a>
        </div>
    );
};

export default function Hero() {
    return (
        <>
            <section id="Hero" data-w-id="7a0582b1-f9bf-b465-911c-fd471b3be13f" className="hero">
                <div className="w-layout-blockcontainer container-full-width hero-container w-container">
                    <div className="hero-content-wrapper">
                        <div className="hero-icon-title-wrapper">
                            <div className="hero-icon-wrapper">
                                <RatingBadge />
                                <ScrollingTags />
                            </div>

                            {/* Building Future-Ready Software for Enterprises and Disruptive Startups */}
                            <div className="hero-title-box">
                                <div className="hero-top-title">
                                    <h1 className="hero-title banner" aria-label="We Build Meaningful">
                                        <SplitText text="Building Future-Ready Software for" startIndex={1} />
                                    </h1>
                                </div>
                                <div className="hero-title-box-two">
                                    <div className="star-image"
                                        style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate3d(0px, 0px, 0px) rotate(-43.425deg)" }}>
                                        <img src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69a7bdd8a6aca7844d7d9c03_star.webp"
                                            loading="lazy" alt="img" className="brans-star-image" />
                                    </div>
                                    <div className="hero-brand-ttitle" aria-label="brands  &">
                                        <h2 className="hero-title banner-02">
                                            <span className="hero-text-span">
                                                <SplitText text="Enterprises" startIndex={1} />
                                            </span>{" "}
                                            <span className="hero-text-span _03">
                                                <SplitText text="&" startIndex={7} />
                                            </span>
                                        </h2>
                                    </div>
                                    <div className="hero-title-image-box">
                                        <div style={{ "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": "1", "transformStyle": "preserve-3d" }}
                                            className="hero-image-01"><img
                                                src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69a920fbf513673f9f509557_ee.png"
                                                alt="img" className="hero-box-image-01"
                                                style={{ "willChange": "transform", "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d" }} />
                                        </div>
                                        <div style={{ "opacity": "1", "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d" }}
                                            className="hero-image-02"><img
                                                src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996e56b0a887493352d810d_hero-02.webp"
                                                alt="img" className="hero-box-image-02"
                                                style={{ "willChange": "transform", "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d" }} />
                                        </div>
                                    </div>
                                    <div className="digital-title-box" aria-label="digital">
                                        <h2 className="hero-title _03">
                                            <span className="hero-text-span banner-03">
                                                <SplitText text="Disruptive" startIndex={1} />
                                            </span>
                                        </h2>
                                    </div>
                                </div>
                                <div className="hero-text-three">
                                    <FloatingBadge
                                        text="UI Design"
                                        type="purple"
                                        dataWId="21fc7176-604f-f716-f660-40a8e585dcef"
                                        iconSrc="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69ae5662b2e13877eb79af61_figma.svg"
                                    />
                                    <div className="hero-bottom-title" aria-label="experiences.">
                                        <h2 className="hero-bbottom-ttitle banner-04">
                                            <SplitText text="Startups" startIndex={1} />
                                        </h2>
                                    </div>
                                    <FloatingBadge
                                        text="Development"
                                        type="orange"
                                        dataWId="d5e042c1-3fc3-d56e-0ecc-41bdbbd9077f"
                                        arrowRot={27.375}
                                        iconSrc="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69ae563ba2e7fb14e4aaf00c_webflow.svg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="hero-top-content">
                            <div data-w-id="713abfe8-0f02-cb6e-919e-6e6f3dd4c10e"
                                style={{ "opacity": "1", "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d" }}
                                className="hero-text-button">
                                <div className="hero-text">We partner with enterprises and startups to build high-performance digital products—fast, secure, and designed for real-world scalability</div>
                                <PrimaryCTAButton dataWId="ab51d9de-df2b-4802-d942-68915cb0ab19" href="#Contact" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-contaciner-border">
                    <div className="hero-border-box"></div><img
                        src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b29e0aa9e3b73291734cce_Frame%202147228658.png"
                        loading="lazy" sizes="(max-width: 1919px) 100vw, 1920px"
                        srcSet="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b29e0aa9e3b73291734cce_Frame%202147228658-p-500.png 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b29e0aa9e3b73291734cce_Frame%202147228658-p-1080.png 1080w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b29e0aa9e3b73291734cce_Frame%202147228658-p-1600.png 1600w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b29e0aa9e3b73291734cce_Frame%202147228658.png 1920w"
                        alt="Hero Border Shaape" className="hero-border-shape" />
                </div>
            </section>
        </>
    );
}