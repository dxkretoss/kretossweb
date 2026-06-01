import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedButton from '../ui/AnimatedButton';

console.log("GSAP:", gsap);
console.log("registerPlugin:", gsap.registerPlugin);

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

// CounterBox component
const CounterBox = ({ leftDigits, rightDigits, suffix, label, hasLine, rightOneClass = '' }) => {
    return (
        <div className="counter-single-box !relative !pr-6 md:!pr-10">
            <div className="counter-number-box !flex-col !items-start !gap-1">
                <div className="counter-title-box" style={{ display: "flex", alignItems: "center" }}>
                    <div className="counter-block" style={{ height: "47.5px", overflow: "hidden", display: "flex", position: "relative" }}>
                        <div className="counter-left-box !text-[#0a0a0a]" style={{ display: "flex", flexDirection: "column" }}>
                            {leftDigits.map((d, i) => (
                                <div key={i} className="counter-box-title !text-4xl md:!text-5xl !tracking-tight !text-[#0a0a0a]" style={{ height: "47.5px", lineHeight: "47.5px", display: "flex", alignItems: "center", justifyContent: "center" }}>{d}</div>
                            ))}
                        </div>
                        <div className="counter-right-box !text-[#0a0a0a]" style={{ display: "flex", flexDirection: "column" }}>
                            {rightDigits.map((d, i) => (
                                <div key={i} className={`counter-box-title ${rightOneClass} !text-4xl md:!text-5xl !tracking-tight !text-[#0a0a0a]`} style={{ height: "47.5px", lineHeight: "47.5px", display: "flex", alignItems: "center", justifyContent: "center" }}>{d}</div>
                            ))}
                        </div>
                    </div>
                    <h2 className="counter-box-title !text-4xl md:!text-5xl" style={{ height: "47.5px", lineHeight: "47.5px", display: "flex", alignItems: "center", marginLeft: "2px" }}>{suffix}</h2>
                </div>
                <div className="counter-subtitle-text counter-number">
                    <div className="counter-text !text-sm md:!text-base !font-medium !text-gray-600 max-w-[100px] leading-tight pt-1">{label}</div>
                </div>
            </div>
            {hasLine && (
                <div className="counter-bar !absolute !right-0 !top-1/2 !-translate-y-1/2">
                    <img src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69ad58d10421ab7969cf6518_Line%20928.png" loading="lazy" alt="img" className="h-[60px] opacity-30" />
                </div>
            )}
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
            left: ["0", "20", "40", "60", "80", "90", "95", "98", "100"],
            right: ["", "", "", "", "", "", "", "", ""],
            suffix: "+",
            label: "Countries Served",
            hasLine: true
        },
        {
            left: ["0", "10", "30", "50", "70", "85", "90", "93", "95"],
            right: ["", "", "", "", "", "", "", "", ""],
            suffix: "%",
            label: "Our Transformative",
            hasLine: true
        },
        {
            left: ["0", "5", "10", "15", "20", "25", "28", "29", "30"],
            right: ["", "", "", "", "", "", "", "", ""],
            suffix: "+",
            label: "Award Winning",
            hasLine: true
        },
        {
            left: ["0", "0", "0", "1", "1", "1", "1", "2", "2"],
            right: ["", "", "", "", "", "", "", "", ""],
            suffix: "k+",
            label: "Projects Delivered",
            hasLine: false,
            rightOneClass: "one"
        }
    ];

    useLayoutEffect(() => {
        let ctx;
        let slideshowInterval;

        // 1. Synchronously set initial hidden states to prevent mounting flashes
        gsap.registerPlugin(ScrollTrigger);
        ctx = gsap.context(() => {
            gsap.set(".about-subtitle-box", { opacity: 0, y: 100 });
            gsap.set(".about-subtitle-box .subtitle-image-icon", { rotate: 0, scale: 0 });
            gsap.set(".about-section-title", { opacity: 0, y: 100 });
            gsap.set(".about-text", { opacity: 0, y: 100 });
            gsap.set(".about-button", { opacity: 0, y: 100 });
            gsap.set(".about-gallery-image", { opacity: 0, scale: 0.3 });
            gsap.set(".about-counter", { opacity: 0 });
        }, aboutRef);

        // 2. Defer ScrollTrigger creation to allow coordinates to settle
        const timer = setTimeout(() => {
            ctx.add(() => {
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
                            const leftTranslate = -(leftBox.children.length - 1) * 47.5;
                            const rightTranslate = -(rightBox.children.length - 1) * 47.5;

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
            });
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
                            <div className="about-subtitle-box">
                                <img
                                    src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887be_Star%2018.svg"
                                    loading="lazy" alt="Contact Subtitle Icon" className="subtitle-image-icon animate-[spin_4s_linear_infinite]"
                                />
                                <div className="about-subtitle-text">About Kretoss</div>
                            </div>
                        </div>
                        <div className="about-right-box">
                            <div className="about-title-text">
                                <div className="about-slider _02" style={{ transform: "scaleX(0)", transformOrigin: "left center" }}>
                                    <div className="about-slider-two _02"></div>
                                </div>
                                <h2 className="about-section-title">
                                    Crafting Scalable, Secure, & Smart Digital Experiences
                                </h2>
                            </div>
                            <div className="about-title-button">
                                <div className="about-block">
                                    <div className="about-text">Trusted by global clients, Kretoss Technology is your technology partner for mobile apps, websites, and digital solutions affordable, reliable, and tailored to your business needs. With over 12 years of experience, we deliver scalable, high-quality solutions that drive real business growth.</div>
                                    <div className="about-button">
                                        <AnimatedButton href="#about" text="MORE ABOUT US" />
                                    </div>
                                    <div className="about-counter !mt-3 md:!mt-6 !flex !flex-row !justify-between !items-start !w-full !gap-4 md:!gap-8">
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
                                <div className="about-block-right">
                                    {galleryImages.map((image) => (
                                        <img
                                            key={image.key}
                                            src={image.src}
                                            loading="lazy"
                                            sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 888px" alt="About Image"
                                            srcSet={image.srcSet}
                                            className={`about-gallery-image ${image.key}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}