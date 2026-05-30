import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

// SplitText component - generates character-level DOM elements for GSAP animation.
// Characters start at translate3d(0, 30px, 0) opacity:0 – identical to Webflow's IX2 initial state.
const SplitText = ({ text, wordClassPrefix = "gsap_split_word", letterClassPrefix = "gsap_split_letter", startIndex = 1, plainStyle = false }) => {
    const words = text.split(" ");
    let globalLetterIdx = startIndex;

    const letterStyle = plainStyle
        ? { position: "relative", display: "inline-block" }
        : {
            position: "relative",
            display: "inline-block",
            opacity: "0",
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate3d(0px, 30px, 0px)"
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
        <div style={{ opacity: 0 }} className="hero-icon-rating">
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
                            style={{ transform: "scale(0)" }}
                        />
                    ))}
                    <div
                        className="trust-score"
                        style={{ opacity: 0 }}
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
        <div style={{ opacity: 0 }} className="hero-icon-text">
            <div className="hero-meta-icon-box">
                <img
                    src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69acfcaea6bf20ffc4b2d559_Vector.svg"
                    alt="Hero Icon"
                    className="hero-meta-box-icon"
                    style={{ transform: "rotateY(57.28deg)" }}
                />
            </div>
            <div className="hero-meta-tag-box">
                {tags.map((tag) => (
                    <div
                        key={tag.key}
                        className={`single-tag-item ${tag.key}`}
                    >
                        {tag.text}
                    </div>
                ))}
            </div>
        </div>
    );
};

// Subcomponent: Reusable FloatingBadge
const FloatingBadge = ({ text, type = 'purple', arrowRot = -17.9137, badgeClass = '', iconSrc, arrowSvg }) => {
    // Arrow rotate style
    const arrowStyle = {
        translate: "none",
        rotate: "none",
        scale: "none",
        transform: `translate3d(0px, 0px, 0px) rotate(${arrowRot}deg)`
    };

    if (type === 'web') {
        return (
            <div style={{ opacity: 0 }} className={`hero-shap-wrapper ${badgeClass}`}>
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
            <div style={{ opacity: 0 }} className={`hero-shap-wrapper right-shape ${badgeClass}`}>
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
        <div style={{ opacity: 0 }} className={`hero-shap-wrapper _01 ${badgeClass}`}>
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
const PrimaryCTAButton = ({ href = "#Contact" }) => {
    return (
        <div className="hero-button">
            <a href={href} className="primary-button w-inline-block" aria-label="LET'S TALKLET'S TALK">
                <div className="button-text-wrapper">
                    <div className="button-text-box">
                        <div className="button-front-text">
                            <SplitText text="LET'S TALK" startIndex={1} plainStyle={true} />
                        </div>
                        <div className="button-back-text">
                            <SplitText text="LET'S TALK" startIndex={10} plainStyle={true} />
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
    const heroRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // ========================================================
            // WEBFLOW-EXACT ANIMATION: outQuart easing, 1000ms duration
            // Character-by-character from translate3d(0, 30px, 0) → (0, 0, 0)
            // opacity: 0 → 1, all with outQuart easing
            // ========================================================

            // 1. Rating Badge cross-fade (runs independently / asynchronously)
            const ratingTl = gsap.timeline();
            ratingTl.to(".hero-icon-rating", {
                opacity: 1, y: 0, duration: 1, ease: "power4.out"
            });
            ratingTl.to(".trust-score", {
                opacity: 1, scale: 1, duration: 1, ease: "power4.out"
            }, "-=0.6");
            ratingTl.to(".trust-score", {
                opacity: 0, scale: 0.8, duration: 0.4, ease: "power2.in"
            }, "+=1.5");
            ratingTl.fromTo(".single-review-star",
                { scale: 0 },
                { scale: 1, duration: 0.5, stagger: 0.06, ease: "back.out(1.5)" },
                "-=0.2"
            );

            // 2. Main Timeline – NO DELAYS, starts immediately
            const tl = gsap.timeline();

            // Scrolling tags container fade in
            tl.to(".hero-icon-text", {
                opacity: 1, y: 0, duration: 1, ease: "power4.out"
            }, 0);

            // Hero title containers: exact Webflow outQuart, 1000ms
            // Each title goes: opacity 0→1, y 100→0 (Webflow's slideInBottom)
            tl.fromTo(".hero-title.banner",
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 1, ease: "power4.out" },
                0.1
            );
            tl.fromTo(".hero-title.banner-02",
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 1, ease: "power4.out" },
                0.2
            );
            tl.fromTo(".hero-title._03",
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 1, ease: "power4.out" },
                0.3
            );
            tl.fromTo(".hero-bbottom-ttitle.banner-04",
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 1, ease: "power4.out" },
                0.4
            );

            // Star icon: scale 0→1, rotate to -43.425deg
            tl.fromTo(".brans-star-image",
                { scale: 0, rotate: 0 },
                { scale: 1, rotate: -43.425, duration: 1, ease: "power4.out" },
                0.2
            );

            // Hero images: scale3d(1.3,1.3,1) → scale3d(1,1,1), opacity 0→1
            // Matches reference: transform: translate3d(0, 0, 0) scale3d(1.3, 1.3, 1)
            tl.fromTo(".hero-image-01",
                { opacity: 0, scale: 1.3 },
                { opacity: 1, scale: 1, duration: 1, ease: "power4.out" },
                0.3
            );
            tl.fromTo(".hero-image-02",
                { opacity: 0, scale: 1.3 },
                { opacity: 1, scale: 1, duration: 1, ease: "power4.out" },
                0.4
            );

            // Floating badges
            tl.fromTo(".hero-shap-wrapper._01",
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 1, ease: "power4.out" },
                0.5
            );
            tl.fromTo(".hero-shap-wrapper.right-shape",
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 1, ease: "power4.out" },
                0.6
            );

            // Bottom text & CTA button
            tl.fromTo(".hero-text-button",
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, ease: "power4.out" },
                0.5
            );

            // Gentle continuous floating drift for badges
            gsap.to(".hero-shap-wrapper._01", {
                y: -6, duration: 2.5, repeat: -1, yoyo: true, ease: "power1.inOut"
            });
            gsap.to(".hero-shap-wrapper.right-shape", {
                y: 6, duration: 2.8, repeat: -1, yoyo: true, ease: "power1.inOut"
            });

            // Loop vertical scrolling tags
            const tags = gsap.utils.toArray(".single-tag-item");
            if (tags.length > 0) {
                gsap.set(tags, { yPercent: 0 });
                const tagTimeline = gsap.timeline({ repeat: -1 });

                tagTimeline.to(tags[0], { yPercent: -100, duration: 0.6, ease: "power2.inOut" }, "+=2.0");
                tagTimeline.to(tags[1], { yPercent: -100, duration: 0.6, ease: "power2.inOut" }, "<");

                tagTimeline.to(tags[1], { yPercent: -200, duration: 0.6, ease: "power2.inOut" }, "+=2.0");
                tagTimeline.to(tags[2], { yPercent: -100, duration: 0.6, ease: "power2.inOut" }, "<");

                tagTimeline.to(tags[2], { yPercent: -200, duration: 0.6, ease: "power2.inOut" }, "+=2.0");
                tagTimeline.to(tags[3], { yPercent: -100, duration: 0.6, ease: "power2.inOut" }, "<");

                tagTimeline.set(tags[0], { yPercent: 100 });
                tagTimeline.to(tags[3], { yPercent: -200, duration: 0.6, ease: "power2.inOut" }, "+=2.0");
                tagTimeline.to(tags[0], { yPercent: 0, duration: 0.6, ease: "power2.inOut" }, "<");

                tagTimeline.set(tags[1], { yPercent: 0 });
                tagTimeline.set(tags[2], { yPercent: 0 });
                tagTimeline.set(tags[3], { yPercent: 0 });
            }

            // Button hover – scoped to heroRef only
            const button = heroRef.current?.querySelector(".primary-button");
            if (button) {
                const frontLetters = button.querySelectorAll(".button-front-text .gsap_split_letter");
                const backLetters = button.querySelectorAll(".button-back-text .gsap_split_letter");
                const frontArrow = button.querySelector(".button-front-arrow");
                const backArrow = button.querySelector(".button-back-arrow");

                gsap.set(backLetters, { yPercent: 100 });

                button.addEventListener("mouseenter", () => {
                    gsap.killTweensOf([frontLetters, backLetters, frontArrow, backArrow]);
                    gsap.to(frontLetters, { yPercent: -100, duration: 0.4, stagger: 0.02, ease: "power2.out" });
                    gsap.to(backLetters, { yPercent: 0, duration: 0.4, stagger: 0.02, ease: "power2.out" });
                    gsap.to(frontArrow, { x: 13, y: -14, duration: 0.4, ease: "power2.out" });
                    gsap.to(backArrow, { x: 13, y: -14, duration: 0.4, ease: "power2.out" });
                });

                button.addEventListener("mouseleave", () => {
                    gsap.killTweensOf([frontLetters, backLetters, frontArrow, backArrow]);
                    gsap.to(frontLetters, { yPercent: 0, duration: 0.4, stagger: 0.02, ease: "power2.out" });
                    gsap.to(backLetters, { yPercent: 100, duration: 0.4, stagger: 0.02, ease: "power2.out" });
                    gsap.to(frontArrow, { x: 0, y: 0, duration: 0.4, ease: "power2.out" });
                    gsap.to(backArrow, { x: 0, y: 0, duration: 0.4, ease: "power2.out" });
                });
            }
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section ref={heroRef} id="Hero" className="hero">
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
                                    <h1 className="hero-title banner" style={{ opacity: 0, transform: "translate3d(0, 100px, 0)" }} aria-label="We Build Meaningful">
                                        Building Future-Ready Software for
                                    </h1>
                                </div>
                                <div className="hero-title-box-two">
                                    <div className="star-image">
                                        <img src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69a7bdd8a6aca7844d7d9c03_star.webp"
                                            loading="lazy" alt="img" className="brans-star-image" style={{ transform: "scale(0) rotate(0deg)" }} />
                                    </div>
                                    <div className="hero-brand-ttitle" aria-label="brands  &">
                                        <h2 className="hero-title banner-02" style={{ opacity: 0, transform: "translate3d(0, 100px, 0)" }}>
                                            <span className="hero-text-span">Enterprises</span>{" "}
                                            <span className="hero-text-span _03">&</span>
                                        </h2>
                                    </div>
                                    <div className="hero-title-image-box">
                                        <div className="hero-image-01" style={{ opacity: 0, transform: "translate3d(0, 0, 0) scale3d(1.3, 1.3, 1)" }}>
                                            <img
                                                src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69a920fbf513673f9f509557_ee.png"
                                                alt="img" className="hero-box-image-01"
                                            />
                                        </div>
                                        <div className="hero-image-02" style={{ opacity: 0, transform: "translate3d(0, 0, 0) scale3d(1.3, 1.3, 1)" }}>
                                            <img
                                                src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996e56b0a887493352d810d_hero-02.webp"
                                                alt="img" className="hero-box-image-02"
                                            />
                                        </div>
                                    </div>
                                    <div className="digital-title-box" aria-label="digital">
                                        <h2 className="hero-title _03" style={{ opacity: 0, transform: "translate3d(0, 100px, 0)" }}>
                                            <span className="hero-text-span banner-03">Disruptive</span>
                                        </h2>
                                    </div>
                                </div>
                                <div className="hero-text-three">
                                    <FloatingBadge
                                        text="UI Design"
                                        type="purple"
                                        iconSrc="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69ae5662b2e13877eb79af61_figma.svg"
                                    />
                                    <div className="hero-bottom-title" aria-label="experiences.">
                                        <h2 className="hero-bbottom-ttitle banner-04" style={{ opacity: 0, transform: "translate3d(0, 100px, 0)" }}>
                                            Startups
                                        </h2>
                                    </div>
                                    <FloatingBadge
                                        text="Development"
                                        type="orange"
                                        arrowRot={27.375}
                                        iconSrc="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69ae563ba2e7fb14e4aaf00c_webflow.svg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="hero-top-content">
                            <div className="hero-text-button" style={{ opacity: 0 }}>
                                <div className="hero-text">We partner with enterprises and startups to build high-performance digital products—fast, secure, and designed for real-world scalability</div>
                                <PrimaryCTAButton href="#Contact" />
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