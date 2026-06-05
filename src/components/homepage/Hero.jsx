import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Globe, Settings, Palette, Code } from 'lucide-react';
import AnimatedButton from '../ui/AnimatedButton';

// Subcomponent: SplitText
const SplitText = ({ text }) => {
    return text.split(" ").map((word, wordIdx, wordsArr) => (
        <span key={wordIdx} className="hero-word" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {word.split("").map((char, charIdx) => (
                <span key={charIdx} className="hero-char" style={{ opacity: 0, display: 'inline-block' }}>
                    {char}
                </span>
            ))}
            {wordIdx < wordsArr.length - 1 && <span className="hero-char" style={{ opacity: 0, display: 'inline-block', whiteSpace: 'pre' }}> </span>}
        </span>
    ));
};
// Subcomponent: RatingBadge
const RatingBadge = () => {
    const ratingsData = [
        { platform: "Google", score: "4.9", isScore: true, icon: <img src="/Google.svg" alt="Google" className="h-4 object-contain rating-icon" style={{ transform: "scale(0)", transformOrigin: "center left" }} /> },
        { platform: "Clutch", score: "5.0", isScore: true, icon: <img src="/clutch.png" alt="Clutch" className="h-4  object-contain rating-icon" style={{ transform: "scale(0)", transformOrigin: "center left" }} /> },
        { platform: "Trustpilot", score: "4.7", isScore: true, icon: <img src="/trustpilot.webp" alt="Trustpilot" className="h-5 object-contain rating-icon" style={{ transform: "scale(0)", transformOrigin: "center left" }} /> },
        { platform: "Sitejabber", score: "4.0", isScore: true, icon: <img src="/sitejabber.svg" alt="Sitejabber" className="h-5 object-contain rating-icon" style={{ transform: "scale(0)", transformOrigin: "center left", filter: "brightness(0) invert(1)" }} /> },
        { platform: "Global Clients", score: "952+", isScore: false, icon: <Globe color="#fff" size={24} className="single-review-star" style={{ transform: "scale(0)", transformOrigin: "center left" }} /> }
    ];

    return (
        <div className='flex items-center justify-center gap-2'>
            <div style={{ opacity: 0, position: "relative", minHeight: "48px", minWidth: "300px" }} className="hero-icon-rating">
                {ratingsData.map((item, idx) => (
                    <div key={idx} className="rating-block-wrapper" style={{ display: idx === 0 ? "flex" : "none", width: "100%", alignItems: "center", justifyContent: 'center', height: "100%", gap: "16px" }}>
                        <div className="hero-meta-icon-box">
                            <img
                                src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69acfcaea6bf20ffc4b2d559_Vector.svg"
                                alt="Hero Icon"
                                className="hero-meta-box-icon"
                                style={{ transform: "rotateY(57.28deg)" }}
                            />
                        </div>

                        <div className="hero-icon-box flex items-center rating-icon">
                            {item.platform}
                        </div>

                        <div className="single-review-star" style={{ width: "1px", height: "22px", backgroundColor: "rgba(255,255,255,0.3)" }}></div>

                        <div className="hero-rating-text">
                            <div className="hero-star-wrapper" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                <div className="hero-rating-text single-review-star" style={{ transform: "scale(0)", display: "inline-block", transformOrigin: "center left", width: "auto", height: "auto", fontWeight: "600" }}>{item.score}</div>

                                {item.isScore && [...Array(5)].map((_, i) => {
                                    const isFilled = i < Math.floor(parseFloat(item.score));
                                    const isHalf = !isFilled && i < parseFloat(item.score);
                                    return (
                                        <img
                                            key={i}
                                            src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69acfb7509f4926e7df68a47_Vector.svg"
                                            alt="Review Star"
                                            className={`single-review-star _0${i + 1}`}
                                            style={{ transform: "scale(0)", opacity: isFilled || isHalf ? 1 : 0.3, display: "inline-block", transformOrigin: "center left", width: "16px", height: "16px" }}
                                        />
                                    );
                                })}

                                {/* {item.isScore === false &&
                                    <div className="single-review-star" style={{ transform: "scale(0)", whiteSpace: "nowrap", display: "inline-block", transformOrigin: "center left", width: "auto", height: "auto", color: "rgba(255,255,255,0.7)", marginLeft: "4px" }}>
                                        {item.platform}
                                    </div>
                                } */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Subcomponent: ScrollingTags
// const ScrollingTags = () => {
//     const tags = [
//         { key: "_01", text: "Certified Partner" },
//         { key: "_02", text: "Trusted Quality" },
//         { key: "_03", text: "Expert Support" },
//         { key: "_04", text: "Secure Service" }
//     ];

//     return (
//         <div style={{ opacity: 0 }} className="hero-icon-text">
//             <div className="hero-meta-icon-box">
//                 <img
//                     src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69acfcaea6bf20ffc4b2d559_Vector.svg"
//                     alt="Hero Icon"
//                     className="hero-meta-box-icon"
//                     style={{ transform: "rotateY(57.28deg)" }}
//                 />
//             </div>
//             <div className="hero-meta-tag-box">
//                 {tags.map((tag) => (
//                     <div
//                         key={tag.key}
//                         className={`single-tag-item ${tag.key}`}
//                     >
//                         {tag.text}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// Subcomponent: Reusable FloatingBadge
const FloatingBadge = ({ text, type = 'purple', arrowRot = -17.9137, badgeClass = '', iconSrc, iconComponent }) => {
    let bgColor, textColor, arrowClass, shapeClass;

    // Default Purple
    bgColor = "#BD73E8";
    textColor = "#fff";
    arrowClass = "hero-arrow-box _01";
    shapeClass = "hero-shape-box _01";

    if (type === 'orange') {
        bgColor = "#F8902A";
        textColor = "#fff";
        arrowClass = "hero-arrow-box right-arrow hero-arrow-box _04";
        shapeClass = "hero-shape-box right-shape";
        if (arrowRot === -17.9137) arrowRot = -90.375;
    } else if (type === 'web') {
        bgColor = "#a9bf15";
        textColor = "#fff";
        arrowClass = "hero-arrow-box _03"; // Bottom-right
        shapeClass = "hero-shape-box _01";
        if (arrowRot === -17.9137) arrowRot = 72.086; // Point down-right
    } else if (type === 'erp') {
        bgColor = "#dd986d";
        textColor = "#fff";
        arrowClass = "hero-arrow-box _02"; // Bottom-left
        shapeClass = "hero-shape-box right-shape";
        if (arrowRot === -17.9137) arrowRot = -202.086; // Point down-left
    }

    const arrowStyle = {
        translate: "none",
        rotate: "none",
        scale: "none",
        transform: `translate3d(0px, 0px, 0px) rotate(${arrowRot}deg)`
    };

    return (
        <div style={{ opacity: 0 }} className={`hero-shap-wrapper ${shapeClass.includes('right-shape') ? 'right-shape' : '_01'} !hidden lg:!flex ${badgeClass}`}>
            <div className={arrowClass} style={arrowStyle}>
                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
                    <path d="M1.45581 8.15328L29.6548 0.0773835C30.427 -0.143754 31.2565 0.118491 31.7613 0.743292L32.2338 1.32828C32.7261 1.93767 32.8173 2.77836 32.4671 3.47912L18.8725 30.683C18.077 32.275 15.747 32.119 15.1643 30.4375C13.5195 25.6914 11.0705 18.8236 10.387 17.9776C9.72978 17.164 4.69393 14.0604 0.980583 11.8303C-0.528692 10.9238 -0.236698 8.638 1.45581 8.15328Z" fill={bgColor} />
                </svg>
            </div>
            <div className={shapeClass} style={{ backgroundColor: bgColor }}>
                {iconComponent ? (
                    <div className="hero-shaper-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {iconComponent}
                    </div>
                ) : (
                    <img src={iconSrc} alt="Hero Shaper Icon" className="hero-shaper-icon" />
                )}
                <div className="hero-shape-text" style={{ color: textColor }}>{text}</div>
            </div>
        </div>
    );
};


export default function Hero() {
    const heroRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Initial states (replaces inline styles to prevent React VDOM conflicts)
            gsap.set(".hero-char", { opacity: 0 });
            gsap.set(".brans-star-image", { scale: 0, rotate: 0 });
            gsap.set(".hero-image-01", { opacity: 0, scale: 1.3 });
            gsap.set(".hero-image-02", { opacity: 0, scale: 1.3 });

            // ========================================================
            // WEBFLOW-EXACT ANIMATION: outQuart easing, 1000ms duration
            // ========================================================

            // 1. Rating Badge initial fade in
            gsap.to(".hero-icon-rating", {
                opacity: 1, y: 0, duration: 1, ease: "power4.out"
            });

            // Loop timeline for 5 platforms
            const blocks = gsap.utils.toArray(".rating-block-wrapper");
            if (blocks.length > 0) {
                gsap.set(blocks, { opacity: 0, display: "none" });

                const ratingLoopTl = gsap.timeline({ repeat: -1 });

                blocks.forEach((block) => {
                    const elements = block.querySelectorAll(".rating-icon, .single-review-star");

                    // Show this block immediately
                    ratingLoopTl.set(block, { display: "flex", opacity: 1 });

                    // Stagger elements pop in
                    ratingLoopTl.fromTo(elements,
                        { scale: 0 },
                        { scale: 1, duration: 0.5, stagger: 0.06, ease: "back.out(1.5)" }
                    );

                    // Wait for 2s
                    ratingLoopTl.to({}, { duration: 2 });

                    // Stagger elements pop out
                    ratingLoopTl.to(elements, {
                        scale: 0, duration: 0.4, stagger: 0.04, ease: "power2.in"
                    });

                    // Hide block
                    ratingLoopTl.set(block, { display: "none", opacity: 0 });
                });
            }

            // 2. Main Timeline – Add a slight delay so users don't miss the initial animations
            const tl = gsap.timeline({ delay: 0.2 });

            // Scrolling tags container fade in
            tl.to(".hero-icon-text", {
                opacity: 1, y: 0, duration: 1, ease: "power4.out"
            }, 0);

            // Hero title containers
            tl.fromTo(".hero-top-title .hero-char",
                { opacity: 0 },
                { opacity: 1, duration: 1.5, ease: "power4.out", stagger: { amount: 1.2, from: "center" } },
                0.1
            );
            tl.fromTo(".hero-title.banner-02 .hero-char",
                { opacity: 0 },
                { opacity: 1, duration: 1.5, ease: "power4.out", stagger: { amount: 1.2, from: "end" } },
                0.2
            );
            tl.fromTo(".hero-title._03 .hero-char",
                { opacity: 0 },
                { opacity: 1, duration: 1.5, ease: "power4.out", stagger: { amount: 1.2, from: "start" } },
                0.3
            );
            tl.fromTo(".hero-bbottom-ttitle.banner-04 .hero-char",
                { opacity: 0 },
                { opacity: 1, duration: 0.6, ease: "power4.out", stagger: { amount: 0.4, from: "center" } },
                0.4
            );

            // Star icon: scale 0→1
            tl.fromTo(".brans-star-image",
                { scale: 0 },
                { scale: 1, duration: 1, ease: "power4.out" },
                0.2
            );

            // Star icon continuous spin
            gsap.to(".brans-star-image", {
                rotate: 360,
                duration: 10,
                repeat: -1,
                ease: "linear"
            });

            // Hero meta icon continuous Y-axis spin
            gsap.to(".hero-meta-box-icon", {
                rotationY: 360,
                duration: 6,
                repeat: -1,
                ease: "linear"
            });

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

            // Wiggle animation for all floating badge arrows (half rotate back and forth)
            gsap.to(".hero-arrow-box", {
                rotation: "+=30",
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
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
                                {/* <ScrollingTags /> */}
                            </div>

                            {/* Building Future-Ready Software for Enterprises and Disruptive Startups */}
                            <div className="hero-title-box">
                                <FloatingBadge
                                    text="Web"
                                    type="web"
                                    badgeClass="!absolute !top-12 md:!-top-20 !-left-[10px] md:!left-[200px] !z-10 scale-75 md:scale-100"
                                    iconComponent={<Globe size={18} color="#fff" />}
                                />

                                <FloatingBadge
                                    text="ERP/Automation"
                                    type="erp"
                                    badgeClass="!absolute !top-12 md:!-top-20 !right-[10px] md:!-right-[-150px] !z-10 scale-75 md:scale-100"
                                    iconComponent={<Settings size={18} color="#fff" />}
                                />
                                <div className="hero-top-title">
                                    <h1 className="hero-title banner" aria-label="Building Future-Ready Software for" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                        {"Building Future-Ready Software for".split(" ").map((word, wordIdx, wordsArr) => (
                                            <span key={wordIdx} className="hero-word" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                                                {word.split("").map((char, charIdx) => (
                                                    <span key={charIdx} className="hero-char" style={{ opacity: 0, display: 'inline-block' }}>
                                                        {char}
                                                    </span>
                                                ))}
                                                {wordIdx < wordsArr.length - 1 && <span className="hero-char" style={{ opacity: 0, display: 'inline-block' }}> </span>}
                                            </span>
                                        ))}
                                    </h1>

                                </div>
                                <div className="hero-title-box-two">
                                    <div className="star-image">
                                        <img src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69a7bdd8a6aca7844d7d9c03_star.webp"
                                            loading="lazy" alt="img" className="brans-star-image" />
                                    </div>
                                    <div className="hero-brand-ttitle relative" aria-label="brands  &">
                                        <h2 className="hero-title banner-02" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                            <span className="hero-text-span"><SplitText text="Enterprises" /></span>{" "}
                                            <span className="hero-text-span _03"><SplitText text="&" /></span>
                                        </h2>
                                    </div>
                                    <div className="hero-title-image-box">
                                        <div className="hero-image-01">
                                            <img
                                                src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69a920fbf513673f9f509557_ee.png"
                                                alt="img" className="hero-box-image-01"
                                            />
                                        </div>
                                        <div className="hero-image-02">
                                            <img
                                                src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996e56b0a887493352d810d_hero-02.webp"
                                                alt="img" className="hero-box-image-02"
                                            />
                                        </div>
                                    </div>
                                    <div className="digital-title-box relative" aria-label="digital">
                                        <h2 className="hero-title _03" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                            <span className="hero-text-span banner-03"><SplitText text="Disruptive" /></span>
                                        </h2>
                                    </div>
                                </div>
                                <div className="hero-text-three">
                                    <FloatingBadge
                                        text="UI Design"
                                        type="purple"
                                        iconComponent={<Palette size={18} color="#fff" />}
                                    />
                                    <div className="hero-bottom-title" aria-label="Startups.">
                                        <h2 className="hero-bbottom-ttitle banner-04 !text-center" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                            <SplitText text="Startups" />
                                        </h2>
                                    </div>
                                    <FloatingBadge
                                        text="App Development"
                                        type="orange"
                                        iconComponent={<Code size={18} color="#fff" />}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="hero-top-content">
                            <div className="hero-text-button" style={{ opacity: 0 }}>
                                <div className="hero-text">We partner with enterprises and startups to build high-performance digital products—fast, secure, and designed for real-world scalability</div>
                                <AnimatedButton href="#Contact" text="LET'S TALK" />
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