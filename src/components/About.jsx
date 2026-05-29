import React from 'react';

// SplitText helper for dynamic GSAP word/letter elements
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

// Reusable CounterBox subcomponent for the statistical animations
const CounterBox = ({ leftDigits, rightDigits, suffix, label, leftDataWId, rightDataWId, hasLine = true, rightOneClass = "" }) => {
    return (
        <div className="counter-number-box">
            <div className="counter-single-box">
                <div className="counter-block">
                    <div
                        data-w-id={leftDataWId}
                        style={{ "transform": "translate3d(0px, -800%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d" }}
                        className="counter-left-box"
                    >
                        {leftDigits.map((d, i) => (
                            <div key={i} className="counter-box-title">{d}</div>
                        ))}
                    </div>
                    <div
                        data-w-id={rightDataWId}
                        style={{ "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d" }}
                        className="counter-right-box"
                    >
                        {rightDigits.map((d, i) => (
                            <div key={i} className={`counter-box-title ${rightOneClass}`}>{d}</div>
                        ))}
                    </div>
                    <h2 className="counter-box-title">{suffix}</h2>
                    {hasLine && (
                        <div className="counter-bar">
                            <img src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69ad58d10421ab7969cf6518_Line%20928.png" loading="lazy" alt="img" />
                        </div>
                    )}
                </div>
                <div className="counter-subtitle-text counter-number">
                    <div className="counter-text">{label}</div>
                </div>
            </div>
        </div>
    );
};

export default function About() {
    // Dynamic array for gallery images
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

    // Dynamic stats counter parameters
    const statisticsCounters = [
        {
            left: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            right: [5, 4, 3, 2, 1, 0, 6, 7, 8],
            suffix: "+",
            label: "Brand Style",
            leftWId: "3f7150ac-0526-bbf5-7283-70150a356e59",
            rightWId: "3f7150ac-0526-bbf5-7283-70150a356e6c"
        },
        {
            left: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            right: [8, 7, 6, 5, 3, 3, 2, 1, 0],
            suffix: "%",
            label: "Client Satisfaction",
            leftWId: "034ce7e8-75bf-9d11-080d-7a2763f59df9",
            rightWId: "034ce7e8-75bf-9d11-080d-7a2763f59e0c"
        },
        {
            left: [8, 7, 6, 5, 0, 1, 2, 3, 4],
            right: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            suffix: "+",
            label: "International Creators",
            leftWId: "913ca829-e74c-b4e5-e8cb-2549695db558",
            rightWId: "913ca829-e74c-b4e5-e8cb-2549695db56b"
        },
        {
            left: [9, 8, 7, 6, 5, 4, 3, 2, 1],
            right: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            suffix: "+",
            label: "Years of Experience",
            leftWId: "b053d291-1dab-d7ec-e308-3c16b0ffb8bd",
            rightWId: "b053d291-1dab-d7ec-e308-3c16b0ffb8d0",
            hasLine: false,
            rightOneClass: "one"
        }
    ];

    return (
        <>
            <section id="About" className="about">
                <div className="w-layout-blockcontainer container w-container">
                    <div data-w-id="8ad7dca7-8c08-25c2-02ac-9a41ffe15d2c" className="about-content-wrapper">
                        <div className="about-left-box">
                            <div className="about-slider">
                                <div className="about-slider-two"></div>
                            </div>
                            <div data-w-id="c9b26dfc-1825-4ef4-79b9-29cb607fe6f9"
                                style={{ "opacity": "1", "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d" }}
                                className="about-subtitle-box">
                                <img
                                    src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887be_Star%2018.svg"
                                    loading="lazy" alt="Contact Subtitle Icon" className="subtitle-image-icon"
                                    style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate3d(0px, 0px, 0px) rotate(116.964deg)" }}
                                />
                                <div className="about-subtitle-text">About Krtoss</div>
                            </div>
                        </div>
                        <div className="about-right-box">
                            <div className="about-title-text">
                                <div className="about-slider _02">
                                    <div className="about-slider-two _02"></div>
                                </div>
                                <h2 className="about-section-title"
                                    style={{ "willChange": "transform", "transform": "translate3d(0px, 60px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d" }}>
                                    Crafting Scalable, Secure, & Smart Digital Experiences
                                    {/* <span className="about-subtitle">digital solutions.</span> */}
                                </h2>
                            </div>
                            <div className="about-title-button">
                                <div className="about-block"
                                    style={{ "willChange": "transform", "transform": "translate3d(0px, 120px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d" }}>
                                    <div className="about-text">Trusted by global clients, Kretoss Technology is your technology partner for mobile apps, websites, and digital solutions affordable, reliable, and tailored to your business needs. With over 12 years of experience, we deliver scalable, high-quality solutions that drive real business growth.</div>
                                    <div className="about-button">
                                        <a data-w-id="ab51d9de-df2b-4802-d942-68915cb0ab19"
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
                                                        style={{ "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d" }}
                                                    />
                                                    <img loading="lazy"
                                                        src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887bf_Arrow%20Right%20Up.svg"
                                                        alt="Button Icon" className="button-back-arrow"
                                                        style={{ "transform": "translate3d(-13px, 14px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d" }}
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
                                <div data-w-id="aa097c76-25b3-2903-ffd3-58c741da4327" className="about-block-right"
                                    style={{ "willChange": "transform", "transform": "translate3d(0px, 140px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d" }}>
                                    {galleryImages.map((image) => (
                                        <img
                                            key={image.key}
                                            src={image.src}
                                            loading="lazy"
                                            style={{ "opacity": "1", "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d" }}
                                            sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 888px" alt="About Image"
                                            srcSet={image.srcSet}
                                            className={`about-gallery-image ${image.key}`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="about-counter"
                                style={{ "willChange": "transform", "transform": "translate3d(0px, 150px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d" }}>
                                {statisticsCounters.map((counter, idx) => (
                                    <CounterBox
                                        key={idx}
                                        leftDigits={counter.left}
                                        rightDigits={counter.right}
                                        suffix={counter.suffix}
                                        label={counter.label}
                                        leftDataWId={counter.leftWId}
                                        rightDataWId={counter.rightWId}
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