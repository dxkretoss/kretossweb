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

// Reusable Ticker Component
const ProductTicker = ({ directionClass = "top", list }) => {
    const wrapperClass = directionClass === "top"
        ? "ticker-box-wrapper project-top-ticker"
        : "ticker-wrapper project-ticker";

    const contentClass = directionClass === "top"
        ? "top-single-ticker"
        : "ticker-content-box";

    const renderTrack = () => (
        <div className={contentClass} style={{ display: "flex", flexShrink: 0 }}>
            {list.map((item, idx) => (
                <div key={idx} className="product-ticker-single">
                    <img
                        src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe28879c_Star%2018%20(1).svg"
                        loading="lazy" alt="Ticker Icon" className="ticker-icon"
                    />
                    <div className="ticker-text">{item}</div>
                </div>
            ))}
        </div>
    );

    return (
        <div className={`product-ticker-block ${directionClass}`} style={{ overflow: "hidden", display: "flex" }}>
            <div className={wrapperClass} style={{ display: "flex", width: "max-content", flexShrink: 0 }}>
                {renderTrack()}
                {renderTrack()}
            </div>
        </div>
    );
};

// Reusable SlideImage Component
const SlideImage = ({ type, img, srcset }) => {
    const boxClass = type === "vertical"
        ? "product-single-image-box vertical-image"
        : "product-single-image-box horizontal-image";

    return (
        <div className={boxClass} style={{ flexShrink: 0 }}>
            <img
                src={img}
                loading="lazy"
                sizes="100vw"
                srcSet={srcset}
                alt="Product Single Image"
                className="product-single-image"
            />
        </div>
    );
};

export default function Product() {
    // Dynamic Ticker Strings
    const tickerItems = [
        "Frontend Excellence",
        "Cloud Infrastructure",
        "Backend Systems",
        "Mobile Development",
        "CMS",
        "Data Analytics",
        "Vibe Coding",
        "Python & ERP Development"
    ];

    // Image tracks for slider row 1 (Track _01)
    const trackOneList = [
        {
            type: "horizontal",
            img: "/grouppics/Group-1.jpg",
            srcset: "/grouppics/Group-1.jpg 500w, /grouppics/Group-1.jpg 608w"
        },
        {
            type: "horizontal",
            img: "/grouppics/Group-7.jpg",
            srcset: "/grouppics/Group-7.jpg 500w, /grouppics/Group-7.jpg 608w"
        },
        {
            type: "horizontal",
            img: "/grouppics/Group-2.jpg",
            srcset: "/grouppics/Group-2.jpg 500w, /grouppics/Group-2.jpg 800w, /grouppics/Group-2.jpg 1080w, /grouppics/Group-2.jpg 1215w"
        }
    ];

    // Image tracks for slider row 2 (Track _02)
    const trackTwoList = [
        {
            type: "horizontal",
            img: "/grouppics/Group-4.jpg",
            srcset: "/grouppics/Group-4.jpg 500w, /grouppics/Group-4.jpg 800w, /grouppics/Group-4.jpg 1080w, /grouppics/Group-4.jpg 1215w"
        },
        {
            type: "horizontal",
            img: "/grouppics/Group-6.jpg",
            srcset: "/grouppics/Group-6.jpg 500w, /grouppics/Group-6.jpg 800w, /grouppics/Group-6.jpg 1080w, /grouppics/Group-6.jpg 1215w"
        },
        {
            type: "horizontal",
            img: "/grouppics/Group-3.jpg",
            srcset: "/grouppics/Group-3.jpg 500w, /grouppics/Group-3.jpg 800w, /grouppics/Group-3.jpg 1080w, /grouppics/Group-3.jpg 1215w"
        }
    ];

    const trackThreeList = [
        {
            type: "horizontal",
            img: "/grouppics/Group-8.jpg",
            srcset: "/grouppics/Group-8.jpg 500w, /grouppics/Group-8.jpg 608w"
        },
        {
            type: "horizontal",
            img: "/grouppics/Group-5.jpg",
            srcset: "/grouppics/Group-5.jpg 500w, /grouppics/Group-5.jpg 608w"
        },
        {
            type: "horizontal",
            img: "/grouppics/Group-1.jpg",
            srcset: "/grouppics/Group-1.jpg 500w, /grouppics/Group-1.jpg 608w"
        }
    ];

    const productRef = useRef(null);

    useLayoutEffect(() => {
        let ctx;
        const timer = setTimeout(() => {
            gsap.registerPlugin(ScrollTrigger);
            ctx = gsap.context(() => {
                // Scale star subtitle icon on viewport entrance
                gsap.fromTo(".product-subtitle-box .subtitle-image-icon",
                    { scale: 0 },
                    {
                        scale: 1,
                        duration: 1.2,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: ".product-subtitle-box",
                            start: "top 90%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );

                // Continuous spin for the subtitle star icon
                gsap.to(".product-subtitle-box .subtitle-image-icon", {
                    rotate: 360,
                    ease: "none",
                    duration: 10,
                    repeat: -1,
                });

                // 1. Ticker Row 1 (top-ticker): continuous infinite scroll left
                gsap.to(".project-top-ticker .top-single-ticker", {
                    xPercent: -50,
                    ease: "none",
                    duration: 20,
                    repeat: -1,
                });

                // 2. Ticker Row 2 (project-ticker): continuous infinite scroll right
                gsap.fromTo(".project-ticker .ticker-content-box",
                    { xPercent: -50 },
                    { xPercent: 0, ease: "none", duration: 20, repeat: -1 }
                );

                // 3. Product image row 1 (duplicated 3 times): scroll left
                gsap.to(".product-single-slider._01", {
                    xPercent: -100 / 3,
                    ease: "none",
                    duration: 30,
                    repeat: -1,
                });

                // 4. Product image row 2 (duplicated 3 times): scroll right
                gsap.fromTo(".product-single-slider._02",
                    { xPercent: -100 / 3 },
                    { xPercent: 0, ease: "none", duration: 30, repeat: -1 }
                );

            }, productRef);
        }, 100);

        return () => {
            clearTimeout(timer);
            if (ctx) ctx.revert();
        };
    }, []);

    return (
        <>
            <div ref={productRef} className="product-block">
                <section id="Product" className="product">
                    <div className="product-content-wrapper">
                        <div className="w-layout-blockcontainer container w-container">
                            <div className="project-title-tag-box">
                                <div className="project-title-subtitle">
                                    <div className="product-subtitle-box">
                                        <img
                                            src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe28879c_Star%2018%20(1).svg"
                                            loading="lazy" alt="Subtitle Icon" className="subtitle-image-icon"
                                            style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate3d(0px, 0px, 0px) rotate(116.964deg)" }}
                                        />
                                        <div className="product-subtitle-text">Industry Hit</div>
                                    </div>
                                    <h2 className="title white" aria-label="&quot;Memories & Milestones&quot;">
                                        <SplitText text='"Memories & Milestones"' startIndex={1} />
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-content-block">
                            <ProductTicker directionClass="top" list={tickerItems} />

                            <div className="product-tab-pane-dev" style={{ overflow: "hidden" }}>
                                <div className="product-slider-wrapper" style={{ display: "flex", width: "max-content", flexShrink: 0 }}>
                                    <div className="product-single-slider _01" style={{ display: "flex", flexShrink: 0 }}>
                                        {trackOneList.map((item, idx) => (
                                            <SlideImage key={`track1-1-${idx}`} type={item.type} img={item.img} srcset={item.srcset} />
                                        ))}
                                    </div>
                                    <div className="product-single-slider _01" style={{ display: "flex", flexShrink: 0 }}>
                                        {trackTwoList.map((item, idx) => (
                                            <SlideImage key={`track1-2-${idx}`} type={item.type} img={item.img} srcset={item.srcset} />
                                        ))}
                                    </div>
                                    <div className="product-single-slider _01" style={{ display: "flex", flexShrink: 0 }}>
                                        {trackThreeList.map((item, idx) => (
                                            <SlideImage key={`track1-3-${idx}`} type={item.type} img={item.img} srcset={item.srcset} />
                                        ))}
                                    </div>
                                </div>

                                <div className="product-slider-wrapper" style={{ display: "flex", width: "max-content", flexShrink: 0 }}>
                                    <div className="product-single-slider _02" style={{ display: "flex", flexShrink: 0 }}>
                                        {trackThreeList.map((item, idx) => (
                                            <SlideImage key={`track2-1-${idx}`} type={item.type} img={item.img} srcset={item.srcset} />
                                        ))}
                                    </div>
                                    <div className="product-single-slider _02" style={{ display: "flex", flexShrink: 0 }}>
                                        {trackOneList.map((item, idx) => (
                                            <SlideImage key={`track2-2-${idx}`} type={item.type} img={item.img} srcset={item.srcset} />
                                        ))}
                                    </div>
                                    <div className="product-single-slider _02" style={{ display: "flex", flexShrink: 0 }}>
                                        {trackTwoList.map((item, idx) => (
                                            <SlideImage key={`track2-3-${idx}`} type={item.type} img={item.img} srcset={item.srcset} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <ProductTicker directionClass="two" list={tickerItems} />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}