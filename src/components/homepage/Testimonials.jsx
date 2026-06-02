import React, { useLayoutEffect, useState, useRef } from 'react';
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

// Reusable MarqueeReviewCard Component
const MarqueeReviewCard = ({ id, author, text, img, srcset, dataWId }) => {
    const cardRef = useRef(null);

    useLayoutEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const ctx = gsap.context(() => {
            const authorStar = card.querySelector(".review-author-star");
            const textBox = card.querySelector(".review-text-box");
            const overly = card.querySelector(".testimonial-image-overly");
            const image = card.querySelector(".testimonial-image");

            const mm = gsap.matchMedia();

            mm.add("(min-width: 992px)", () => {
                // Initial states (force visible in the marquee track)
                gsap.set(authorStar, { y: 0, opacity: 1 });
                gsap.set(textBox, { y: 20, opacity: 0 });
                gsap.set(overly, { opacity: 1 });
                gsap.set(image, { scale: 1 });

                // Interactive hover listeners
                const onEnter = () => {
                    gsap.killTweensOf([authorStar, textBox, overly, image]);
                    gsap.to(authorStar, { y: -20, opacity: 0, duration: 0.3, ease: "power2.out" });
                    gsap.to(overly, { opacity: 0, duration: 0.3, ease: "power2.out" });
                    gsap.to(image, { scale: 1.1, duration: 0.5, ease: "power2.out" });
                    gsap.to(textBox, { y: 0, opacity: 1, duration: 0.3, delay: 0.1, ease: "power2.out" });
                };

                const onLeave = () => {
                    gsap.killTweensOf([authorStar, textBox, overly, image]);
                    gsap.to(textBox, { y: 20, opacity: 0, duration: 0.3, ease: "power2.out" });
                    gsap.to(image, { scale: 1.0, duration: 0.5, ease: "power2.out" });
                    gsap.to(overly, { opacity: 1, duration: 0.3, ease: "power2.out" });
                    gsap.to(authorStar, { y: 0, opacity: 1, duration: 0.3, delay: 0.1, ease: "power2.out" });
                };

                card.addEventListener("mouseenter", onEnter);
                card.addEventListener("mouseleave", onLeave);

                return () => {
                    card.removeEventListener("mouseenter", onEnter);
                    card.removeEventListener("mouseleave", onLeave);
                };
            });

            mm.add("(max-width: 991px)", () => {
                // Mobile: Always show review text, hide hover states
                gsap.set(authorStar, { y: -20, opacity: 0 });
                gsap.set(textBox, { y: 0, opacity: 1 });
                gsap.set(overly, { opacity: 0 });
                gsap.set(image, { scale: 1 });
            });
        }, card);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={cardRef}
            data-w-id={dataWId}
            className={`testimonial-item-content _${id}`}
            style={{ "willChange": "opacity, transform", "transformStyle": "preserve-3d" }}
        >
            <div className="testimonial-image-box">
                <img
                    src={img}
                    loading="lazy"
                    sizes="100vw" alt="Review Box"
                    srcSet={srcset}
                    className="testimonial-image"
                />
                <img
                    src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b0eb4b7d940baadd7ed25d_Rectangle%20240649182.png"
                    loading="lazy" style={{ "opacity": "1" }}
                    alt="Abstract gradient overlay"
                    className="testimonial-image-overly"
                />
            </div>
            <div className="review-content-box">
                <div className="review-author-star">
                    <img
                        src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69ae9736111a514c404138c5_Frame%202147223258.svg"
                        loading="lazy" alt="Icon" className="author-star-icon"
                    />
                    <div className="review-author">{author}</div>
                </div>
                <div className="review-text-box">
                    <div className="review-text-wrapper">
                        <div className="rating-icon-quote">
                            <img
                                src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69ae9736111a514c404138c5_Frame%202147223258.svg"
                                loading="lazy" alt="Rating Star" className="rating-star"
                            />
                            <img
                                src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69ae99d70d1219d30b26d147_Group%202087325426.svg"
                                loading="lazy" alt="Quote" className="rating-quote"
                            />
                        </div>
                        <p className="review-box-text">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Reusable SliderReviewCard Component
const SliderReviewCard = ({ id, author, designation, text, img, rating, lightboxVideoUrl }) => {
    const lightboxJson = {
        items: [
            {
                url: lightboxVideoUrl,
                originalUrl: lightboxVideoUrl,
                width: 940,
                height: 528,
                thumbnailUrl: "https://i.ytimg.com/vi/677IU_NErto/hqdefault.jpg",
                html: `<iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F677IU_NErto%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D677IU_NErto&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F677IU_NErto%2Fhqdefault.jpg&type=text%2Fhtml&schema=youtube" width="940" height="528" scrolling="no" title="YouTube embed" frameborder="0" allow="autoplay; fullscreen; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe>`,
                type: "video"
            }
        ],
        group: ""
    };

    return (
        <div className="review-single-card">
            <div className="review-card-title-text">
                <div className="review-image-box">
                    <img src={img} loading="lazy" alt="Review Image" className="review-image" />
                </div>
                <div className="review-title-designation">
                    <h3 className="review-author-title">{author}</h3>
                    <div className="review-author-designation">{designation}</div>
                </div>
            </div>
            <div className="review-text-light-box">
                <div className="review-text">{text}</div>
                <div className="review-light-box-area">
                    <div className="light-box-title-rating">
                        <img
                            src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe288820_Frame%202147223258.svg"
                            loading="lazy" alt="Light Box Rating" className="light-box-rating"
                        />
                        <div className="review-rating-text">{rating}</div>
                    </div>
                    <div className="review-light-box-block">
                        <a
                            href="#"
                            className="review-light-box w-inline-block w-lightbox"
                            aria-label="open lightbox"
                            aria-haspopup="dialog"
                        >
                            <img
                                src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887f1_Frame%202147228701.svg"
                                loading="lazy" alt="Light Box Icon" className="light-box-icon"
                            />
                            <script
                                type="application/json"
                                className="w-json"
                                dangerouslySetInnerHTML={{ __html: JSON.stringify(lightboxJson) }}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Testimonials() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const testimonialsRef = useRef(null);

    // Scrolling Marquee Testimonials
    const marqueeList = [
        {
            id: "01",
            author: "Kartik",
            text: "“Kretoss Technology helped develop the mobile app and did an incredible job. They are incredibly knowledgeable and were able to pivot and build new features. Really enjoy working with this team.”",
            img: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69ae945d663264bd9a69185a_Rectangle%20240649177.webp",
            srcset: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69ae945d663264bd9a69185a_Rectangle%20240649177-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69ae945d663264bd9a69185a_Rectangle%20240649177.webp 700w",
            dataWId: "7b05b637-365e-040c-56d8-088ee9ff7413"
        },
        {
            id: "02",
            author: "Chirstine",
            text: "“Ankur and his team are the best developers I have ever worked with. I am very impressed by the quality of work, communication skills, and deliverables.”",
            img: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69aea0bafa3ba75245d197f6_Rectangle%20240649176.webp",
            srcset: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69aea0bafa3ba75245d197f6_Rectangle%20240649176-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69aea0bafa3ba75245d197f6_Rectangle%20240649176.webp 700w",
            dataWId: "7b05b637-365e-040c-56d8-088ee9ff7423"
        },
        {
            id: "03",
            author: "Kelly Yoga Teacher",
            text: "“Ankur is a fantastic designer and developer! His work ethic is impeccable, his communication is top of the line, and the work he delivers is out of this world!”",
            img: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69aea0ad2b1630454c293acf_Group%202087325433.webp",
            srcset: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69aea0ad2b1630454c293acf_Group%202087325433-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69aea0ad2b1630454c293acf_Group%202087325433.webp 700w",
            dataWId: "7b05b637-365e-040c-56d8-088ee9ff7433"
        },
        {
            id: "04",
            author: "Activelab",
            text: "“The entire team of Kretoss Technology; led by Ankur and Chintan delivered quality work on our ActiveLab app.”",
            img: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69aea1255e565fa4c0fffbb8_Group%202087325416.webp",
            srcset: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69aea1255e565fa4c0fffbb8_Group%202087325416-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69aea1255e565fa4c0fffbb8_Group%202087325416.webp 700w",
            dataWId: "7b05b637-365e-040c-56d8-088ee9ff7443"
        },
        {
            id: "05",
            author: "Martynas Jonaitis",
            text: "“Excellent team and quality of work. We've been working with Kretoss technology for over 3 years and I can only say good things about the team.”",
            img: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69aea16824f377f293dd2d23_Group%202087325431.webp",
            srcset: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69aea16824f377f293dd2d23_Group%202087325431-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69aea16824f377f293dd2d23_Group%202087325431.webp 700w",
            dataWId: "7b05b637-365e-040c-56d8-088ee9ff7453"
        },
        {
            id: "06",
            author: "Jorge Andre",
            text: "“Ankur is one of the very best designers and coders I've ever had the pleasure to work with. He and his team are extremely knowledgeable, work fast, and are always in contact.”",
            img: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69aea19783fc0466264dbc28_Rectangle%20240649173.webp",
            srcset: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69aea19783fc0466264dbc28_Rectangle%20240649173-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69aea19783fc0466264dbc28_Rectangle%20240649173.webp 700w",
            dataWId: "7b05b637-365e-040c-56d8-088ee9ff7463"
        }
    ];

    // Standard Slide Showcase Reviews Array
    const sliderList = [
        {
            id: "1",
            author: "Kocy Nilo",
            designation: "Founder at Softera IT",
            text: "“Kretoss Technology helped develop the mobile app and did an incredible job. They are incredibly knowledgeable and were able to pivot and build new features.”",
            img: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887f0_Frame%202147228701.webp",
            rating: "4.5/ 2k reviews",
            lightboxVideoUrl: "https://youtube.com/watch?v=677IU_NErto?si=zjBXB-oFR2KyoKe2"
        },
        {
            id: "2",
            author: "Benjamin Nilo",
            designation: "Founder at Softera IT",
            text: "“Their team completely overhauled our legacy ERP system. The communication was flawless, and the final product has drastically improved our operational efficiency.”",
            img: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe28881f_Frame%202147228701.webp",
            rating: "4.5/ 2k reviews",
            lightboxVideoUrl: "https://youtube.com/watch?v=677IU_NErto?si=zjBXB-oFR2KyoKe2"
        },
        {
            id: "3",
            author: "Okat Puio",
            designation: "CTO at LaunchPad",
            text: "“We brought Kretoss Technology on board for a complex web application build. They delivered high-quality code ahead of schedule and were an absolute pleasure to work with.”",
            img: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe28881e_Frame%202147228701%20(1).webp",
            rating: "4.5/ 2k reviews",
            lightboxVideoUrl: "https://youtube.com/watch?v=677IU_NErto?si=zjBXB-oFR2KyoKe2"
        },
        {
            id: "4",
            author: "Agro Seenty",
            designation: "Product Lead at VibeTech",
            text: "“The vibe-coding approach they use is revolutionary. We launched our MVP in half the expected time, and the UI design is stunning. Highly recommend them for startups!”",
            img: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887f0_Frame%202147228701.webp",
            rating: "4.5/ 2k reviews",
            lightboxVideoUrl: "https://youtube.com/watch?v=677IU_NErto?si=zjBXB-oFR2KyoKe2"
        },
        {
            id: "5",
            author: "Michael Anderson",
            designation: "Director of IT",
            text: "“From cloud infrastructure setup to frontend excellence, Kretoss handled our entire tech stack migration with zero downtime. True professionals.”",
            img: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe28881f_Frame%202147228701.webp",
            rating: "4.5/ 2k reviews",
            lightboxVideoUrl: "https://youtube.com/watch?v=677IU_NErto?si=zjBXB-oFR2KyoKe2"
        },
        {
            id: "6",
            author: "Ava Collins",
            designation: "CEO at DataSync",
            text: "“Exceptional data analytics implementation! They seamlessly integrated our fragmented data pipelines into a clean, actionable dashboard that our executives love.”",
            img: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe28881e_Frame%202147228701%20(1).webp",
            rating: "4.5/ 2k reviews",
            lightboxVideoUrl: "https://youtube.com/watch?v=677IU_NErto?si=zjBXB-oFR2KyoKe2"
        }
    ];

    // 1. Core Scroll and ScrollTrigger Animations (Mount-only, stable coordinates)
    useLayoutEffect(() => {
        let ctx;
        const timer = setTimeout(() => {
            gsap.registerPlugin(ScrollTrigger);
            ctx = gsap.context(() => {
                const mm = gsap.matchMedia();

                // Desktop layout animations (>= 992px)
                mm.add("(min-width: 992px)", () => {
                    // Eliminate potential transition stutters
                    gsap.set([".testimonial-item-content", ".review-slider-content"], { transition: "none" });

                    // Initial states matching Webflow starting positions at keyframe 0
                    gsap.set(".testimonial-item-content", { x: 60, scale: 1.1, opacity: 0 });
                    gsap.set(".review-slider-content", { xPercent: 0 });

                    // Create parallax scroll timeline bound to scroll progress
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: testimonialsRef.current,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 1.2, // Ultra-smooth scrolling integration
                        }
                    });

                    // Keyframe mapping from Webflow a-55 continuous scroll action:
                    // Staggered card entrance: 5% -> 40%
                    tl.fromTo(".testimonial-item-content._01", { x: 60, scale: 1.1, opacity: 0 }, { x: 0, scale: 1.0, opacity: 1, duration: 10, ease: "none" }, 5)
                        .fromTo(".testimonial-item-content._02", { x: 60, scale: 1.1, opacity: 0 }, { x: 0, scale: 1.0, opacity: 1, duration: 5, ease: "none" }, 15)
                        .fromTo(".testimonial-item-content._03", { x: 60, scale: 1.1, opacity: 0 }, { x: 0, scale: 1.0, opacity: 1, duration: 5, ease: "none" }, 20)
                        .fromTo(".testimonial-item-content._04", { x: 60, scale: 1.1, opacity: 0 }, { x: 0, scale: 1.0, opacity: 1, duration: 5, ease: "none" }, 25)
                        .fromTo(".testimonial-item-content._05", { x: 60, scale: 1.1, opacity: 0 }, { x: 0, scale: 1.0, opacity: 1, duration: 5, ease: "none" }, 30)
                        .fromTo(".testimonial-item-content._06", { x: 60, scale: 1.1, opacity: 0 }, { x: 0, scale: 1.0, opacity: 1, duration: 5, ease: "none" }, 35)
                        // Horizontal scroll tracking: 40% -> 100%
                        .to(".review-slider-content", { xPercent: -50, duration: 60, ease: "none" }, 40);

                    // Section header elements fade/zoom entrance
                    gsap.fromTo(".testimonial-title",
                        { opacity: 0 },
                        {
                            opacity: 1,
                            duration: 1.0,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: ".review-ssubtitle-title",
                                start: "top 85%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );

                    gsap.fromTo(".review-section-quote",
                        { scale: 0, opacity: 0 },
                        {
                            scale: 1,
                            opacity: 1,
                            duration: 1.2,
                            ease: "back.out(1.5)",
                            scrollTrigger: {
                                trigger: ".review-black-box",
                                start: "top 80%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );

                    // Scale star subtitle icon on viewport entrance
                    gsap.fromTo(".review-ssubtitle-title .subtitle-image-icon",
                        { scale: 0 },
                        {
                            scale: 1,
                            duration: 1.2,
                            ease: "power4.out",
                            scrollTrigger: {
                                trigger: ".review-ssubtitle-title",
                                start: "top 90%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );
                });

                // Mobile/Tablet reset (width < 991px)
                mm.add("(max-width: 991px)", () => {
                    gsap.set([".testimonial-item-content", ".review-slider-content"], { transition: "none" });

                    gsap.set(".testimonial-item-content", { x: 30, scale: 1.05, opacity: 0 });
                    gsap.set(".review-slider-content", { xPercent: 0 });

                    // Entrance animations on scroll (no scrub)
                    gsap.to(".testimonial-item-content", {
                        x: 0,
                        scale: 1,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: testimonialsRef.current,
                            start: "top 80%",
                        }
                    });

                    // Infinite continuous horizontal scroll
                    gsap.to(".review-slider-content", {
                        xPercent: -50,
                        duration: 30,
                        ease: "none",
                        repeat: -1
                    });

                    gsap.fromTo(".review-ssubtitle-title .subtitle-image-icon",
                        { scale: 0 },
                        {
                            scale: 1,
                            duration: 1.2,
                            ease: "power4.out",
                            scrollTrigger: {
                                trigger: ".review-ssubtitle-title",
                                start: "top 90%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );
                });

                // Continuous spin for the subtitle star icon
                gsap.to(".review-ssubtitle-title .subtitle-image-icon", {
                    rotate: 360,
                    ease: "none",
                    duration: 10,
                    repeat: -1,
                });

            }, testimonialsRef);
        }, 100);

        return () => {
            clearTimeout(timer);
            if (ctx) ctx.revert();
        };
    }, []);

    // 2. Slider Dot Navigation Translation (Only triggers when slide changes)
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const slides = gsap.utils.toArray(".review-slider-item");
            gsap.to(slides, {
                xPercent: -100 * currentSlideIndex,
                duration: 0.6,
                ease: "power2.out"
            });
        }, testimonialsRef);
        return () => ctx.revert();
    }, [currentSlideIndex]);

    const handlePrev = () => {
        setCurrentSlideIndex(prev => (prev - 1 + sliderList.length) % sliderList.length);
    };

    const handleNext = () => {
        setCurrentSlideIndex(prev => (prev + 1) % sliderList.length);
    };

    return (
        <>
            <section ref={testimonialsRef} id="Testimonials" data-w-id="582f9675-a38e-2687-4a72-2679bbd25ff9" className="review update-review">
                <div className="update-review-box">
                    <div className="testimonial-content">
                        <div className="review-box-content">
                            <div className="review-black-box">
                                <div className="review-ssubtitle-title">
                                    <div className="project-subtitle-box">
                                        <img
                                            src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe28879c_Star%2018%20(1).svg"
                                            loading="lazy" alt="Step Subtitle Icon" className="subtitle-image-icon"
                                            style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate3d(0px, 0px, 0px) rotate(116.964deg)" }}
                                        />
                                        <div className="subtitle-text white">Testimonials</div>
                                    </div>
                                    <h2 data-w-id="b3e45bb1-96f9-fd73-2b1c-3c29c32c513c" style={{ "opacity": "1" }} className="testimonial-title">
                                        Happy Clients <span className="review-subtitle">Observation</span>
                                    </h2>
                                </div>
                                <img
                                    src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69aeb31a38bdebd46ea4e4eb_Group%202087325413.svg"
                                    loading="lazy"
                                    style={{ "opacity": "1", "transformStyle": "preserve-3d" }}
                                    data-w-id="d5730785-2cee-187c-5afb-e116ff888dc1" alt="Quote Icon"
                                    className="review-section-quote"
                                />
                            </div>
                        </div>
                        <div className="review-testimonial">
                            <div className="review-scroll-slider">
                                <div
                                    className="review-slider-content"
                                    style={{ "willChange": "transform", "transform": "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d" }}
                                >
                                    <div className="single-review-box">
                                        {marqueeList.map((review) => (
                                            <MarqueeReviewCard
                                                key={`marquee-1-${review.id}`}
                                                id={review.id}
                                                author={review.author}
                                                text={review.text}
                                                img={review.img}
                                                srcset={review.srcset}
                                                dataWId={review.dataWId}
                                            />
                                        ))}
                                    </div>
                                    <div className="single-review-box">
                                        {marqueeList.map((review) => (
                                            <MarqueeReviewCard
                                                key={`marquee-2-${review.id}`}
                                                id={review.id}
                                                author={review.author}
                                                text={review.text}
                                                img={review.img}
                                                srcset={review.srcset}
                                                dataWId={review.dataWId}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-layout-blockcontainer container w-container">
                    <div className="review-content-wrapper">
                        <div className="review-title-area">
                            <div className="review-subtitle-box">
                                <img
                                    src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887be_Star%2018.svg"
                                    loading="lazy" alt="Review Subtitle Icon" className="subtitle-image-icon"
                                    style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate3d(0px, 0px, 0px) rotate(116.964deg)" }}
                                />
                                <div className="review-subtitle-text">Testimonials</div>
                            </div>
                            <h2 className="title testimonial-title" aria-label="Happy Clients Observation">
                                <SplitText text="Happy Clients Observation" startIndex={1} />
                            </h2>
                        </div>
                        <div
                            data-delay="4000" data-animation="slide" className="review-slider w-slider" data-autoplay="false"
                            data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0"
                            data-nav-spacing="3" data-duration="500" data-infinite="true" role="region" aria-label="carousel"
                        >
                            <div className="review-mask w-slider-mask" id="w-slider-mask-0" style={{ display: "flex", overflow: "hidden" }}>
                                {sliderList.map((slide, idx) => (
                                    <div
                                        key={idx}
                                        className="review-slider-item w-slide"
                                        aria-label={`${slide.id} of ${sliderList.length}`}
                                        role="group"
                                        aria-hidden={idx !== currentSlideIndex}
                                        style={{
                                            flex: "0 0 100%",
                                            width: "100%",
                                            display: "block",
                                            opacity: "1"
                                        }}
                                    >
                                        <SliderReviewCard
                                            id={slide.id}
                                            author={slide.author}
                                            designation={slide.designation}
                                            text={slide.text}
                                            img={slide.img}
                                            rating={slide.rating}
                                            lightboxVideoUrl={slide.lightboxVideoUrl}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="review-left-arrow w-slider-arrow-left" role="button" tabIndex="0" onClick={handlePrev} aria-label="previous slide" style={{ cursor: "pointer" }}>
                                <img src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/699d1705da9a1ee8953e9a5f_Union.svg" loading="lazy" alt="img" className="review-icon-arrow" />
                            </div>
                            <div className="review-right-arrow w-slider-arrow-right" role="button" tabIndex="0" onClick={handleNext} aria-label="next slide" style={{ cursor: "pointer" }}>
                                <img src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/699d1705e6b5d673ce0c553e_Union-2.svg" loading="lazy" alt="img" className="review-icon-arrow" />
                            </div>
                            <div className="slide-nav w-slider-nav w-round w-num">
                                {sliderList.map((slide, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-slider-dot ${idx === currentSlideIndex ? 'w-active' : ''}`}
                                        data-wf-ignore=""
                                        aria-label={`Show slide ${slide.id} of ${sliderList.length}`}
                                        aria-pressed={idx === currentSlideIndex}
                                        role="button"
                                        onClick={() => setCurrentSlideIndex(idx)}
                                        tabIndex={idx === currentSlideIndex ? 0 : -1}
                                        style={{ "marginLeft": "3px", "marginRight": "3px", cursor: "pointer" }}
                                    >
                                        {slide.id}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}