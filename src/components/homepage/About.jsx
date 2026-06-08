import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedButton from '../ui/AnimatedButton';

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
                <div className="counter-subtitle-text counter-number">
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
                                    <AnimatedButton href="/about" text="MORE ABOUT US" ></AnimatedButton>
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