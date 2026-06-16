import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedButton from '../ui/AnimatedButton';
import Badge from '../ui/Badge';

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

export default function BuildWithUs() {
    const sectionRef = useRef(null);

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

    const listItems = [
        "Collaborative Work Environment",
        "Career Growth Opportunities",
        "Work-Life Balance",
        "Competitive Compensation"
    ];

    useLayoutEffect(() => {
        let ctx;
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
            gsap.set(".about-subtitle-box", { opacity: 0, y: 100 });
            gsap.set(".about-subtitle-box .subtitle-image-icon", { rotate: 0, scale: 0 });
            gsap.set(".about-section-title", { opacity: 0, y: 100 });
            gsap.set(".about-text", { opacity: 0, y: 100 });
            gsap.set(".about-button", { opacity: 0, y: 100 });
            gsap.set(".about-image", { opacity: 0, scale: 0.8 });
            gsap.set(".about-counter", { opacity: 0 });
            gsap.set(".build-list-items", { opacity: 0, y: 100 });
        }, sectionRef);

        const timer = setTimeout(() => {
            ctx.add(() => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".about-content-wrapper",
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                });

                tl.fromTo(".about-slider", { scaleX: 0 }, { scaleX: 1, transformOrigin: "left center", duration: 1, ease: "power4.out" });
                tl.fromTo(".about-subtitle-box", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, ease: "power4.out" }, "0.2");
                tl.fromTo(".subtitle-image-icon", { rotate: 0, scale: 0 }, { rotate: 116.964, scale: 1, duration: 1, ease: "power4.out" }, "0.2");
                tl.fromTo(".about-section-title", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, ease: "power4.out" }, "0.4");
                tl.fromTo(".about-text", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, ease: "power4.out" }, "0.6");
                tl.fromTo(".build-list-items", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, ease: "power4.out" }, "0.65");
                tl.fromTo(".about-button", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, ease: "power4.out" }, "0.7");
                tl.fromTo(".about-counter", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power4.out" }, "0.8");

                const counterDigitColumns = sectionRef.current?.querySelectorAll(".counter-digit-column");
                if (counterDigitColumns) {
                    tl.addLabel("counterStart", "0.8");
                    counterDigitColumns.forEach((colBox, idx) => {
                        const isUp = colBox.classList.contains("scroll-up");
                        const translateDist = -(colBox.children.length - 1) * 47.5;
                        const duration = 2.5 + (idx % 3) * 0.5;

                        if (isUp) {
                            tl.fromTo(colBox, { y: 0 }, { y: translateDist, duration: duration, ease: "expo.out" }, "counterStart");
                        } else {
                            tl.fromTo(colBox, { y: translateDist }, { y: 0, duration: duration, ease: "expo.out" }, "counterStart");
                        }
                    });
                }

                tl.fromTo(".about-image", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1, ease: "power4.out" }, "0.4");

                const button = sectionRef.current?.querySelector(".primary-button");
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
        };
    }, []);

    return (
        <section ref={sectionRef} className="about">
            <div className="w-layout-blockcontainer container w-container">
                <div className="about-content-wrapper">
                    <div className="about-left-box">
                        <div className="about-slider" style={{ transform: "scaleX(0)", transformOrigin: "left center" }}>
                            <div className="about-slider-two"></div>
                        </div>
                        <Badge variant='blue'>Build with us!</Badge>
                    </div>
                    <div className="about-right-box">
                        <div className="about-title-button" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'stretch' }}>
                            <div className="about-block" style={{ flex: 1, minWidth: '300px' }}>
                                <div className="about-title-text" style={{ marginBottom: '20px' }}>
                                    <div className="about-slider _02" style={{ transform: "scaleX(0)", transformOrigin: "left center" }}>
                                        <div className="about-slider-two _02"></div>
                                    </div>
                                    <h2 className="about-section-title">
                                        Be part of something extraordinary
                                    </h2>
                                </div>
                                <div className="about-text">
                                    Joining our team means being part of a dynamic group of professionals dedicated to shaping the future with innovative tech.
                                </div>

                                <ul className="build-list-items flex flex-col gap-3 mb-6">
                                    {listItems.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-[#111] font-medium text-[15px]">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-[#0e54f1] shrink-0">
                                                <path d="M12 2L14.09 8.26L20 9.27L15 13.14L16.18 19.02L12 15.77L7.82 19.02L9 13.14L4 9.27L9.91 8.26L12 2Z" fill="currentColor" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="about-button">
                                    <AnimatedButton href="/career" text="MORE ABOUT US" ></AnimatedButton>
                                </div>
                                <div className="about-counter">
                                    {statisticsCounters.map((counter, idx) => (
                                        <CounterBox
                                            key={idx}
                                            columns={counter.columns}
                                            suffix={counter.suffix}
                                            label={counter.label}
                                            hasLine={counter.hasLine}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="about-block-right">
                                <img
                                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Team walking in office"
                                    className="about-image"
                                    style={{ width: '100%', height: '100%', minHeight: '480px', objectFit: 'cover', borderRadius: '16px' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
