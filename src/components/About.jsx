import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// SplitText helper – IDENTICAL to Hero.jsx version
// Characters start at translate3d(0, 30px, 0) opacity:0 — matching Webflow IX2 initial state
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

// Reusable CounterBox subcomponent for the statistical animations
const CounterBox = ({ leftDigits, rightDigits, suffix, label, hasLine = true, rightOneClass = "" }) => {
    return (
        <div className="counter-number-box">
            <div className="counter-single-box">
                <div className="counter-block" style={{ height: "60px", overflow: "hidden", display: "flex", position: "relative" }}>
                    <div className="counter-left-box" style={{ display: "flex", flexDirection: "column" }}>
                        {leftDigits.map((d, i) => (
                            <div key={i} className="counter-box-title" style={{ height: "60px", lineHeight: "60px", display: "flex", alignItems: "center", justifyContent: "center" }}>{d}</div>
                        ))}
                    </div>
                    <div className="counter-right-box" style={{ display: "flex", flexDirection: "column" }}>
                        {rightDigits.map((d, i) => (
                            <div key={i} className={`counter-box-title ${rightOneClass}`} style={{ height: "60px", lineHeight: "60px", display: "flex", alignItems: "center", justifyContent: "center" }}>{d}</div>
                        ))}
                    </div>
                    <h2 className="counter-box-title" style={{ height: "60px", lineHeight: "60px", display: "flex", alignItems: "center" }}>{suffix}</h2>
                </div>
                <div className="counter-subtitle-text counter-number">
                    <div className="counter-text">{label}</div>
                </div>
                {hasLine && (
                    <div className="counter-bar">
                        <img src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69ad58d10421ab7969cf6518_Line%20928.png" loading="lazy" alt="img" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default function About() {
    const aboutRef = useRef(null);

    // Gallery images array
    const galleryImages = [
        {
            key: "_01",
            src: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b05ffe37eb094e21b329d2_Frame%202147228677.webp",
            srcSet: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b05ffe37eb094e21b329d2_Frame%202147228677-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b05ffe37eb094e21b329d2_Frame%202147228677-p-800.webp 800w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b05ffe37eb094e21b329d2_Frame%202147228677.webp 888w"
        },
        {
            key: "_02",
            src: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b06150b40e8760bb32c0ab_Frame%202147228678.webp",
            srcSet: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b06150b40e8760bb32c0ab_Frame%202147228678-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b06150b40e8760bb32c0ab_Frame%202147228678-p-800.webp 800w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b06150b40e8760bb32c0ab_Frame%202147228678.webp 888w"
        },
        {
            key: "_03",
            src: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b061673b4e2693104d760d_Frame%202147228677%20(1).webp",
            srcSet: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b061673b4e2693104d760d_Frame%202147228677%20(1)-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b061673b4e2693104d760d_Frame%202147228677%20(1)-p-800.webp 800w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b061673b4e2693104d760d_Frame%202147228677%20(1).webp 888w"
        },
        {
            key: "_04",
            src: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b0617c7ba4f8190ac35236_Frame%202147228679.webp",
            srcSet: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b0617c7ba4f8190ac35236_Frame%202147228679-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b0617c7ba4f8190ac35236_Frame%202147228679-p-800.webp 800w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b0617c7ba4f8190ac35236_Frame%202147228679.webp 888w"
        },
        {
            key: "_05",
            src: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b0618c2ccc3a3ad6e65ab5_Frame%202147228681.webp",
            srcSet: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b0618c2ccc3a3ad6e65ab5_Frame%202147228681-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b0618c2ccc3a3ad6e65ab5_Frame%202147228681-p-800.webp 800w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b0618c2ccc3a3ad6e65ab5_Frame%202147228681.webp 888w"
        },
        {
            key: "_06",
            src: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b061a0ef4d0ea49424f2bf_Frame%202147228680.webp",
            srcSet: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b061a0ef4d0ea49424f2bf_Frame%202147228680-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b061a0ef4d0ea49424f2bf_Frame%202147228680-p-800.webp 800w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b061a0ef4d0ea49424f2bf_Frame%202147228680.webp 888w"
        }
    ];

    // Statistics counters
    const statisticsCounters = [
        {
            left: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            right: [5, 4, 3, 2, 1, 0, 6, 7, 5],
            suffix: "+",
            label: "Brand Style"
        },
        {
            left: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            right: [8, 7, 6, 5, 3, 3, 2, 1, 8],
            suffix: "%",
            label: "Client Satisfaction"
        },
        {
            left: [8, 7, 6, 5, 0, 1, 2, 3, 4],
            right: [0, 1, 2, 3, 4, 5, 6, 7, 0],
            suffix: "+",
            label: "International Creators"
        },
        {
            left: [9, 8, 7, 6, 5, 4, 3, 2, 1],
            right: [0, 1, 2, 3, 4, 5, 6, 7, 0],
            suffix: "+",
            label: "Years of Experience",
            hasLine: false,
            rightOneClass: "one"
        }
    ];

    useLayoutEffect(() => {
        let ctx;
        let slideshowInterval;
        const timer = setTimeout(() => {
            gsap.registerPlugin(ScrollTrigger);
            ctx = gsap.context(() => {
                // ========================================================
                // WEBFLOW-EXACT ANIMATION: outQuart easing, 1000ms duration
                // IDENTICAL animation logic to Hero.jsx – same easing, durations
                // ========================================================

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".about-content-wrapper",
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                });

                // 1. Progress slider scale from left
                tl.fromTo(".about-slider",
                    { scaleX: 0 },
                    {
                        scaleX: 1,
                        transformOrigin: "left center",
                        duration: 1,
                        ease: "power4.out"
                    }
                );

                // 2. Subtitle box: opacity 0→1, y 100→0 (same outQuart pattern as Hero titles)
                tl.fromTo(".about-subtitle-box",
                    { opacity: 0, y: 100 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power4.out"
                    },
                    "0.2"
                );

                // Star icon: same rotate/scale animation as Hero star
                tl.fromTo(".subtitle-image-icon",
                    { rotate: 0, scale: 0 },
                    {
                        rotate: 116.964,
                        scale: 1,
                        duration: 1,
                        ease: "power4.out"
                    },
                    "0.2"
                );

                // 3. Section Title: opacity 0→1, y 100→0 (identical pattern)
                tl.fromTo(".about-section-title",
                    { opacity: 0, y: 100 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power4.out"
                    },
                    "0.4"
                );

                // 4. About text and button: same pattern
                tl.fromTo(".about-text",
                    { opacity: 0, y: 100 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power4.out"
                    },
                    "0.6"
                );

                tl.fromTo(".about-button",
                    { opacity: 0, y: 100 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power4.out"
                    },
                    "0.7"
                );

                // 5. Statistics counters box
                tl.fromTo(".about-counter",
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power4.out"
                    },
                    "0.8"
                );

                // Synchronized CounterBox digits rolling when the parent starts fading in
                const counterLeftBoxes = aboutRef.current?.querySelectorAll(".counter-left-box");
                const counterRightBoxes = aboutRef.current?.querySelectorAll(".counter-right-box");

                if (counterLeftBoxes && counterRightBoxes) {
                    // Add a label inside the timeline slightly overlapping the parent fade-in
                    tl.addLabel("counterStart", "0.8");

                    counterLeftBoxes.forEach((leftBox, idx) => {
                        const rightBox = counterRightBoxes[idx];
                        if (leftBox && rightBox) {
                            const leftTranslate = -(leftBox.children.length - 1) * 60;
                            const rightTranslate = -(rightBox.children.length - 1) * 60;

                            tl.fromTo(leftBox,
                                { y: 0 },
                                {
                                    y: leftTranslate,
                                    duration: 2.0,
                                    ease: "power3.out"
                                },
                                "counterStart"
                            );

                            tl.fromTo(rightBox,
                                { y: 0 },
                                {
                                    y: rightTranslate,
                                    duration: 2.2,
                                    ease: "power3.out"
                                },
                                "counterStart"
                            );
                        }
                    });
                }

                // 6. Gallery images slideshow – scale3d(0.3, 0.3, 1) → scale3d(1, 1, 1)
                const images = gsap.utils.toArray(".about-gallery-image");
                if (images.length > 0) {
                    gsap.set(images, { opacity: 0, scale: 0.3 });

                    // First image revealed with the scroll timeline
                    tl.fromTo(images[0],
                        { opacity: 0, scale: 0.3 },
                        {
                            opacity: 1,
                            scale: 1,
                            duration: 1,
                            ease: "power4.out"
                        },
                        "0.4"
                    );

                    // Infinite loop slideshow – 5 second pause between transitions (not too fast)
                    let currentIndex = 0;
                    slideshowInterval = setInterval(() => {
                        const nextIndex = (currentIndex + 1) % images.length;

                        // Outgoing image: fade + shrink
                        gsap.to(images[currentIndex], {
                            opacity: 0,
                            scale: 0.3,
                            duration: 1.2,
                            ease: "power2.inOut"
                        });

                        // Incoming image: grow + fade in
                        gsap.to(images[nextIndex], {
                            opacity: 1,
                            scale: 1,
                            duration: 1.2,
                            ease: "power2.inOut"
                        });

                        currentIndex = nextIndex;
                    }, 5000);
                }

                // Button hover – scoped to aboutRef only (avoids conflicts with Hero button)
                const button = aboutRef.current?.querySelector(".primary-button");
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
            }, aboutRef);
        }, 100);

        return () => {
            clearTimeout(timer);
            if (ctx) ctx.revert();
            if (slideshowInterval) clearInterval(slideshowInterval);
        };
    }, []);

    return (
        <>
            <section ref={aboutRef} id="About" className="about">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="about-content-wrapper">
                        <div className="about-left-box">
                            <div className="about-slider" style={{ transform: "scaleX(0)", transformOrigin: "left center" }}>
                                <div className="about-slider-two"></div>
                            </div>
                            <div className="about-subtitle-box" style={{ opacity: 0, transform: "translate3d(0, 100px, 0)" }}>
                                <img
                                    src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887be_Star%2018.svg"
                                    loading="lazy" alt="Contact Subtitle Icon" className="subtitle-image-icon"
                                    style={{ transform: "rotate(0deg) scale(0)" }}
                                />
                                <div className="about-subtitle-text">About Kretoss</div>
                            </div>
                        </div>
                        <div className="about-right-box">
                            <div className="about-title-text">
                                <div className="about-slider _02" style={{ transform: "scaleX(0)", transformOrigin: "left center" }}>
                                    <div className="about-slider-two _02"></div>
                                </div>
                                <h2 className="about-section-title" style={{ opacity: 0, transform: "translate3d(0, 100px, 0)" }}>
                                    Crafting Scalable, Secure, & Smart Digital Experiences
                                </h2>
                            </div>
                            <div className="about-title-button">
                                <div className="about-block">
                                    <div className="about-text" style={{ opacity: 0, transform: "translate3d(0, 100px, 0)" }}>Trusted by global clients, Kretoss Technology is your technology partner for mobile apps, websites, and digital solutions affordable, reliable, and tailored to your business needs. With over 12 years of experience, we deliver scalable, high-quality solutions that drive real business growth.</div>
                                    <div className="about-button" style={{ opacity: 0, transform: "translate3d(0, 100px, 0)" }}>
                                        <a
                                            href="https://www.pixoora.com" className="primary-button w-inline-block"
                                            aria-label="MORE ABOUT USMORE ABOUT US">
                                            <div className="button-text-wrapper">
                                                <div className="button-text-box">
                                                    <div className="button-front-text">
                                                        <SplitText text="MORE ABOUT US" startIndex={1} plainStyle={true} />
                                                    </div>
                                                    <div className="button-back-text">
                                                        <SplitText text="MORE ABOUT US" startIndex={12} plainStyle={true} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="button-arrow-box">
                                                <div className="button-arrow-box-icon">
                                                    <img loading="lazy"
                                                        src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887bf_Arrow%20Right%20Up.svg"
                                                        alt="Button Icon" className="button-front-arrow"
                                                    />
                                                    <img loading="lazy"
                                                        src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887bf_Arrow%20Right%20Up.svg"
                                                        alt="Button Icon" className="button-back-arrow"
                                                        style={{ transform: "translate3d(-13px, 14px, 0px)" }}
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
                                </div>
                                <div className="about-block-right">
                                    {galleryImages.map((image) => (
                                        <img
                                            key={image.key}
                                            src={image.src}
                                            loading="lazy"
                                            sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 888px" alt="About Image"
                                            srcSet={image.srcSet}
                                            className={`about-gallery-image ${image.key}`}
                                            style={{ opacity: 0, transform: "translate3d(0, 0, 0) scale3d(0.3, 0.3, 1)" }}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="about-counter" style={{ opacity: 0 }}>
                                {statisticsCounters.map((counter, idx) => (
                                    <CounterBox
                                        key={idx}
                                        leftDigits={counter.left}
                                        rightDigits={counter.right}
                                        suffix={counter.suffix}
                                        label={counter.label}
                                        hasLine={counter.hasLine}
                                        rightOneClass={counter.rightOneClass}
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