import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

// Reusable ServiceCard subcomponent
const ServiceCard = ({ number, title, excerpt, imgSrc, srcSet, projectCount, cardClass, dataWId, linkDataWId }) => {
    const cardRef = useRef(null);

    useLayoutEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const ctx = gsap.context(() => {
            const img = card.querySelector(".service-card-image");
            const link = card.querySelector(".service-card-link");

            // Initial scaling configuration
            gsap.set(img, { scale: 1 });

            // Service Card Hover zoom effect
            card.addEventListener("mouseenter", () => {
                gsap.to(img, { scale: 1.1, duration: 0.5, ease: "power2.out" });
            });

            card.addEventListener("mouseleave", () => {
                gsap.to(img, { scale: 1.0, duration: 0.5, ease: "power2.out" });
            });

            // Action Link button hover animation
            if (link) {
                const frontLetters = link.querySelectorAll(".link-front-text .gsap_split_letter");
                const backLetters = link.querySelectorAll(".link-back-text .gsap_split_letter");
                const frontArrow = link.querySelector(".link-front-icon");
                const backArrow = link.querySelector(".link-back-icon");

                // Initialize split texts and back arrow positions
                gsap.set(backLetters, { yPercent: 100 });
                gsap.set(backArrow, { x: -25, y: 25 });

                link.addEventListener("mouseenter", () => {
                    gsap.killTweensOf([frontLetters, backLetters, frontArrow, backArrow]);
                    gsap.to(frontLetters, { yPercent: -100, duration: 0.4, stagger: 0.02, ease: "power2.out" });
                    gsap.to(backLetters, { yPercent: 0, duration: 0.4, stagger: 0.02, ease: "power2.out" });
                    gsap.to(frontArrow, { x: 25, y: -25, duration: 0.4, ease: "power2.out" });
                    gsap.to(backArrow, { x: 0, y: 0, duration: 0.4, ease: "power2.out" });
                });

                link.addEventListener("mouseleave", () => {
                    gsap.killTweensOf([frontLetters, backLetters, frontArrow, backArrow]);
                    gsap.to(frontLetters, { yPercent: 0, duration: 0.4, stagger: 0.02, ease: "power2.out" });
                    gsap.to(backLetters, { yPercent: 100, duration: 0.4, stagger: 0.02, ease: "power2.out" });
                    gsap.to(frontArrow, { x: 0, y: 0, duration: 0.4, ease: "power2.out" });
                    gsap.to(backArrow, { x: -25, y: 25, duration: 0.4, ease: "power2.out" });
                });
            }
        }, card);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={cardRef} data-w-id={dataWId} className={`single-service-card ${cardClass}`}
            style={{
                "willChange": "transform",
                "transformStyle": "preserve-3d",
                "transition": "none" // Crucial: prevents CSS transition from fighting GSAP scroll animations!
            }}>
            <div className="service-title-excerpt">
                <h3 className="service-block-title">{title}</h3>
                <p className="service-block-excerpt">{excerpt}</p>
            </div>
            <div className="servide-thumbnail-button">
                <div className="service-image-box">
                    <img
                        src={imgSrc}
                        loading="lazy"
                        sizes="100vw" alt="Service Card Image"
                        srcSet={srcSet}
                        className="service-card-image"
                    />
                </div>
                {/* <a data-w-id={linkDataWId} href="#Contact" className="service-card-link w-inline-block" aria-label="Get This ServiceGet This Service">
                    <div className="service-text-box">
                        <div className="link-front-text">Get This Service</div>
                        <div className="link-back-text">Get This Service</div>
                    </div>
                    <div className="button-icon-block">
                        <img
                            src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887bf_Arrow%20Right%20Up.svg"
                            loading="lazy"
                            alt="Front Icon" className="link-front-icon"
                        />
                        <img
                            src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887bf_Arrow%20Right%20Up.svg"
                            loading="lazy"
                            alt="Back Icon" className="link-back-icon"
                        />
                    </div>
                </a> */}
            </div>
        </div>
    );
};

export default function Services() {
    const servicesRef = useRef(null);

    // Dynamic service card array mapping
    const servicesList = [
        {
            number: "01",
            title: "Cloud Infrastructure",
            excerpt: "Scalable and secure cloud architecture optimized for high-demand enterprise applications and 99.9% uptime.",
            imgSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
            srcSet: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80 800w",
            projectCount: "28+ Projects",
            cardClass: "_01",
            dataWId: "7ba2c9fc-e567-d38f-880a-0f0d02ad444d",
            linkDataWId: "b01d63dc-a2b6-6d4d-9b24-4ccead6b2c28"
        },
        {
            number: "02",
            title: "Frontend Excellence",
            excerpt: "Building responsive, lightning-fast user interfaces using modern frameworks and performance-first methodology.",
            imgSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
            srcSet: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80 800w",
            projectCount: "34+ Projects",
            cardClass: "_02",
            dataWId: "188b70d9-9ccb-b630-fa3e-37af8680f01d",
            linkDataWId: "55ab3599-1be6-d615-e487-c3cdff0cab92"
        },
        {
            number: "03",
            title: "Backend Systems",
            excerpt: "Robust server-side logic and sophisticated database management for mission-critical business systems.",
            imgSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
            srcSet: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80 800w",
            projectCount: "90+ Projects",
            cardClass: "_03",
            dataWId: "dea47cae-1763-3ca2-1904-948e3c97b196",
            linkDataWId: "311fb166-1826-7214-0328-b08c561a0fe5"
        },
        {
            number: "04",
            title: "Mobile Development",
            excerpt: "High-performance native and cross-platform mobile experiences that delight users on every device.",
            imgSrc: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
            srcSet: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80 800w",
            projectCount: "09+ Projects",
            cardClass: "_04",
            dataWId: "1c5dac51-26ed-5099-d9d1-2ae6efac5ec6",
            linkDataWId: "e4a691e5-e2a3-b6c0-a4cc-d842e9d08d8a"
        },
        {
            number: "05",
            title: "CMS",
            excerpt: "Flexible CMS solutions for easy content management, scalability, and performance.",
            imgSrc: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80",
            srcSet: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80 800w",
            projectCount: "42+ Projects",
            cardClass: "_01",
            dataWId: "7ba2c9fc-e567-d38f-880a-0f0d02ad444d",
            linkDataWId: "b01d63dc-a2b6-6d4d-9b24-4ccead6b2c28"
        },
        {
            number: "06",
            title: "Data Analytics",
            excerpt: "Transforming raw data into actionable intelligence through advanced visualization & ML pipelines.",
            imgSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
            srcSet: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80 800w",
            projectCount: "19+ Projects",
            cardClass: "_02",
            dataWId: "188b70d9-9ccb-b630-fa3e-37af8680f01d",
            linkDataWId: "55ab3599-1be6-d615-e487-c3cdff0cab92"
        },
        {
            number: "07",
            title: "Vibe Coding",
            excerpt: "Fast-track product development using vibe-coding tools and scalable engineering practices.",
            imgSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
            srcSet: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80 800w",
            projectCount: "37+ Projects",
            cardClass: "_03",
            dataWId: "dea47cae-1763-3ca2-1904-948e3c97b196",
            linkDataWId: "311fb166-1826-7214-0328-b08c561a0fe5"
        },
        {
            number: "08",
            title: "Python & ERP Development",
            excerpt: "High-performance ERP and backend development using Python, Django, and Odoo.",
            imgSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
            srcSet: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80 800w",
            projectCount: "25+ Projects",
            cardClass: "_04",
            dataWId: "1c5dac51-26ed-5099-d9d1-2ae6efac5ec6",
            linkDataWId: "e4a691e5-e2a3-b6c0-a4cc-d842e9d08d8a"
        }
    ];

    useLayoutEffect(() => {
        let ctx;
        const timer = setTimeout(() => {
            gsap.registerPlugin(ScrollTrigger);
            ctx = gsap.context(() => {
                const mm = gsap.matchMedia();

                // Desktop layout animations (>= 992px)
                mm.add("(min-width: 992px)", () => {
                    // Initial styling matching Webflow starting positions
                    gsap.set(".project-title-area", { y: 20 });
                    gsap.set(".single-service-card._01", { y: 50 });
                    gsap.set(".single-service-card._02", { y: 200 });
                    gsap.set(".single-service-card._03", { y: 400 });
                    gsap.set(".single-service-card._04", { y: 600 });

                    // Create parallax scroll timeline with linear mapping to scroll progress
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: ".service-section-block",
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 1.5, // Ultra-smooth scrolling transition
                        }
                    });

                    // Map keyframes 0% -> 45% and 0% -> 60% linearly
                    tl.fromTo(".project-title-area", { y: 20 }, { y: 0, duration: 45, ease: "none" }, 0)
                        .fromTo(".single-service-card._01", { y: 50 }, { y: 0, duration: 45, ease: "none" }, 0)
                        .fromTo(".single-service-card._02", { y: 200 }, { y: 0, duration: 60, ease: "none" }, 0)
                        .fromTo(".single-service-card._03", { y: 400 }, { y: 0, duration: 60, ease: "none" }, 0)
                        .fromTo(".single-service-card._04", { y: 600 }, { y: 0, duration: 60, ease: "none" }, 0)
                        // Fill remaining timeline up to 100 to scale scroll progress to 100% exactly
                        .to({}, { duration: 40 }, 60);

                    // Scale star subtitle icon on viewport entrance
                    gsap.fromTo(".project-subtitle-box .subtitle-image-icon",
                        { scale: 0 },
                        {
                            scale: 1,
                            duration: 1.2,
                            ease: "power4.out",
                            scrollTrigger: {
                                trigger: ".project-subtitle-box",
                                start: "top 90%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );
                });

                // Mobile/Tablet layout smooth entrance animations
                mm.add("(max-width: 991px)", () => {
                    // Animate title block
                    gsap.fromTo(".project-title-area",
                        { opacity: 0, y: 30 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.8,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: ".project-title-area",
                                start: "top 85%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );

                    // Animate each individual service card
                    const cards = gsap.utils.toArray(".single-service-card");
                    cards.forEach((card) => {
                        gsap.fromTo(card,
                            { opacity: 0, y: 40, scale: 0.95 },
                            {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                duration: 0.8,
                                ease: "power3.out",
                                scrollTrigger: {
                                    trigger: card,
                                    start: "top 85%",
                                    toggleActions: "play none none reverse"
                                }
                            }
                        );
                    });

                    // Subtitle star icon entrance
                    gsap.fromTo(".project-subtitle-box .subtitle-image-icon",
                        { scale: 0 },
                        {
                            scale: 1,
                            duration: 1.2,
                            ease: "power4.out",
                            scrollTrigger: {
                                trigger: ".project-subtitle-box",
                                start: "top 90%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );
                });

                // Continuous spin for the subtitle star icon
                gsap.to(".project-subtitle-box .subtitle-image-icon", {
                    rotate: 360,
                    ease: "none",
                    duration: 10,
                    repeat: -1,
                });

                // 3D rotation float animation on the decorative background services-shape
                gsap.to(".services-shape", {
                    rotateZ: "-=360",
                    ease: "none",
                    duration: 10,
                    repeat: -1,
                });
            }, servicesRef);
        }, 100);

        return () => {
            clearTimeout(timer);
            if (ctx) ctx.revert();
        };
    }, []);

    return (
        <>
            <div ref={servicesRef} className="service-block">
                <section id="Services" className="service">
                    <div className="we-do-card-shape">
                        <img
                            src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b11677e923db9d578c7a7b_cube-helix%201.svg"
                            loading="lazy" alt="img" className="services-shape"
                            style={{ "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(5.42395deg) rotateY(3.87425deg) rotateZ(-55.7892deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d", "willChange": "transform" }}
                        />
                    </div>
                    <div className="w-layout-blockcontainer container w-container">
                        <div className="service-section-block">
                            <div className="service-content-wrapper !overflow-visible">
                                <div className="project-title-area"
                                    style={{ "willChange": "transform", "transformStyle": "preserve-3d" }}>
                                    <div className="project-subtitle-box">
                                        <img
                                            src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe28879c_Star%2018%20(1).svg"
                                            loading="lazy" alt="Service Subtitle Icon" className="subtitle-image-icon"
                                            style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate3d(0px, 0px, 0px) rotate(116.964deg)" }}
                                        />
                                        <div className="subtitle-text white">What We Do</div>
                                    </div>
                                    <h2 className="title white" aria-label="Our Services">
                                        <SplitText text="Our Services" startIndex={1} />
                                    </h2>
                                </div>
                                <div className="service-card-box">
                                    {servicesList.map((service, idx) => (
                                        <ServiceCard
                                            key={idx}
                                            number={service.number}
                                            title={service.title}
                                            excerpt={service.excerpt}
                                            imgSrc={service.imgSrc}
                                            srcSet={service.srcSet}
                                            projectCount={service.projectCount}
                                            cardClass={service.cardClass}
                                            dataWId={service.dataWId}
                                            linkDataWId={service.linkDataWId}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}