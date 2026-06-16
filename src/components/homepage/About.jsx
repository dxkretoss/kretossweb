import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedButton from '../ui/AnimatedButton';
import Badge from '../ui/Badge';

gsap.registerPlugin(ScrollTrigger);

// CounterBox component
const CounterBox = ({ columns, suffix, label, hasLine, rightOneClass = '' }) => {
    return (
        <div className="counter-single-box ">
            <div className="counter-number-box">
                <div className="counter-title-box" style={{ display: "flex", alignItems: "center" }}>
                    <div className="counter-block" style={{ height: "47.5px", overflow: "hidden", display: "flex", position: "relative" }}>
                        {columns.map((col, colIdx) => (
                            <div key={colIdx} className={`counter-digit-column ${col.direction === 'up' ? 'scroll-up' : 'scroll-down'}`} style={{ display: "flex", flexDirection: "column" }}>
                                {col.digits.map((d, i) => (
                                    <div key={i} className={`counter-box-title ${colIdx === 1 ? rightOneClass : ''}`} style={{ height: "47.5px", lineHeight: "47.5px", display: "flex", alignItems: "center", justifyContent: "center" }}>{d}</div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <h2 className="counter-box-title" style={{ height: "47.5px", lineHeight: "47.5px", display: "flex", alignItems: "center", marginLeft: "2px" }}>{suffix}</h2>
                </div>
                <div className="counter-subtitle-text counter-number" style={{ fontSize: "14px", lineHeight: "1.2", marginTop: "4px" }}>
                    <div className="counter-text">{label}</div>
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

    const videoRef = useRef(null);

    // Statistics counters
    const statisticsCounters = [
        {
            columns: [
                { digits: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], direction: "down" },
                { digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], direction: "up" },
                { digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], direction: "down" }
            ],
            suffix: "+",
            label: "Countries Served",
            hasLine: true
        },
        {
            columns: [
                { digits: ["9", "8", "7", "6", "5", "4", "3", "2", "1"], direction: "down" },
                { digits: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "5"], direction: "up" }
            ],
            suffix: "%",
            label: "Our Transformative",
            hasLine: true
        },
        {
            columns: [
                { digits: ["3", "2", "1", "0"], direction: "down" },
                { digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], direction: "up" }
            ],
            suffix: "+",
            label: "Award Winning",
            hasLine: true
        },
        {
            columns: [
                { digits: ["0", "1", "2"], direction: "up" },
                { digits: ["", "", ""], direction: "up" }
            ],
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
            gsap.set(".about-video", { opacity: 0, scale: 0.8 });
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
                const counterDigitColumns = aboutRef.current?.querySelectorAll(".counter-digit-column");

                if (counterDigitColumns) {
                    // Add a label inside the timeline slightly overlapping the parent fade-in
                    tl.addLabel("counterStart", "0.8");

                    counterDigitColumns.forEach((colBox, idx) => {
                        const isUp = colBox.classList.contains("scroll-up");
                        const translateDist = -(colBox.children.length - 1) * 47.5;
                        // Increased base duration and variance for a slower, smoother rolling effect
                        const duration = 2.5 + (idx % 3) * 0.5;

                        if (isUp) {
                            tl.fromTo(colBox,
                                { y: 0 },
                                {
                                    y: translateDist,
                                    duration: duration,
                                    ease: "expo.out"
                                },
                                "counterStart"
                            );
                        } else {
                            tl.fromTo(colBox,
                                { y: translateDist },
                                {
                                    y: 0,
                                    duration: duration,
                                    ease: "expo.out"
                                },
                                "counterStart"
                            );
                        }
                    });
                }

                // 6. Video fade in and play
                const videoElement = videoRef.current;
                if (videoElement) {
                    tl.fromTo(videoElement,
                        { opacity: 0, scale: 0.8 },
                        {
                            opacity: 1,
                            scale: 1,
                            duration: 1,
                            ease: "power4.out",
                            onStart: () => {
                                videoElement.play().catch(e => console.log("Autoplay prevented:", e));
                            }
                        },
                        "0.4"
                    );
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
                            <Badge variant='blue'>About Kretoss</Badge>
                        </div>
                        <div className="about-right-box">
                            <div className="about-title-button" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'stretch' }}>
                                <div className="about-block" style={{ flex: 1, minWidth: '300px' }}>
                                    <div className="about-title-text" style={{ marginBottom: '20px' }}>
                                        <div className="about-slider _02" style={{ transform: "scaleX(0)", transformOrigin: "left center" }}>
                                            <div className="about-slider-two _02"></div>
                                        </div>
                                        <h2 className="about-section-title">
                                            Crafting Scalable, Secure, & Smart Digital Experiences
                                        </h2>
                                    </div>
                                    <div className="about-text">Trusted by global clients, Kretoss Technology is your technology partner for mobile apps, websites, and digital solutions affordable, reliable, and tailored to your business needs. With over 12 years of experience, we deliver scalable, high-quality solutions that drive real business growth.</div>

                                    <div className="about-button">
                                        <AnimatedButton href="/about" text="MORE ABOUT US" ></AnimatedButton>
                                    </div>
                                    <div className="about-counter">
                                        {statisticsCounters.map((counter, idx) => (
                                            <CounterBox
                                                key={idx}
                                                columns={counter.columns}
                                                suffix={counter.suffix}
                                                label={counter.label}
                                                hasLine={counter.hasLine}
                                                rightOneClass={counter.rightOneClass}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="about-block-right">
                                    <video
                                        ref={videoRef}
                                        muted
                                        loop
                                        playsInline
                                        className="about-video"
                                        style={{ width: '100%', height: '100%', minHeight: '480px', objectFit: 'cover', borderRadius: '16px' }}
                                        src="https://www.pexels.com/download/video/8814502/"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}