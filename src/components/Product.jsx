import React from 'react';

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
            transform: "translate(20px, 0px) scale(0.8, 0.8)",
            opacity: "0"
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

    const styleObj = directionClass === "top"
        ? { "transform": "translate3d(73.336%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d", "willChange": "transform" }
        : { "transform": "translate3d(-7.967%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d", "willChange": "transform" };

    const renderTrack = () => (
        <div className={contentClass} style={styleObj}>
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
        <div className={`product-ticker-block ${directionClass}`}>
            <div className={wrapperClass}>
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
        <div className={boxClass}>
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
        "Remedive Medicine Delivery",
        "Mobile App",
        "Website",
        "UI Design",
        "Agency Website",
        "Management Dashboard",
        "Healthcare Website"
    ];

    // Image tracks for slider row 1 (Track _01)
    const trackOneList = [
        {
            type: "horizontal",
            img: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887a7_Rectangle%2034624350.webp",
            srcset: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887a7_Rectangle%252034624350-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887a7_Rectangle%2034624350.webp 608w"
        },
        {
            type: "vertical",
            img: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887a6_iPhone%2014%20%26%2015%20Pro%20-%201.webp"
        },
        {
            type: "horizontal",
            img: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887a8_Rectangle%2034624351.webp",
            srcset: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887a8_Rectangle%252034624351-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887a8_Rectangle%2034624351.webp 608w"
        },
        {
            type: "horizontal",
            img: "https://cdn.prod.website-files.com/6996a337655d586ffe28879e_Rectangle%2034624352.webp",
            srcset: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe28879e_Rectangle%252034624352-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe28879e_Rectangle%252034624352-p-800.webp 800w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe28879e_Rectangle%252034624352-p-1080.webp 1080w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe28879e_Rectangle%252034624352.webp 1215w"
        }
    ];

    // Image tracks for slider row 2 (Track _02)
    const trackTwoRepOne = [
        {
            type: "horizontal",
            img: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69af0d0fa7355a6eeb12d350_Rectangle%2034624350.webp",
            srcset: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69af0d0fa7355a6eeb12d350_Rectangle%2034624350-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69af0d0fa7355a6eeb12d350_Rectangle%2034624350-p-800.webp 800w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69af0d0fa7355a6eeb12d350_Rectangle%2034624350-p-1080.webp 1080w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69af0d0fa7355a6eeb12d350_Rectangle%2034624350.webp 1215w"
        },
        {
            type: "vertical",
            img: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69af0d23dad7c3f15494afb3_iPhone%2014%20%26%2015%20Pro%20-%201.webp",
            srcset: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69af0d23dad7c3f15494afb3_iPhone%2014%20%26%2015%20Pro%20-%201-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69af0d23dad7c3f15494afb3_iPhone%2014%20%26%2015%20Pro%20-%201.webp 527w"
        },
        {
            type: "horizontal",
            img: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69af0dbf2fc8523467b5bff0_Rectangle%2034624351.webp",
            srcset: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69af0dbf2fc8523467b5bff0_Rectangle%2034624351-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69af0dbf2fc8523467b5bff0_Rectangle%2034624351-p-800.webp 800w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69af0dbf2fc8523467b5bff0_Rectangle%2034624351-p-1080.webp 1080w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69af0dbf2fc8523467b5bff0_Rectangle%2034624351.webp 1215w"
        },
        {
            type: "horizontal",
            img: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69af0dd7d0e284809d49d9c2_Rectangle%2034624352.webp",
            srcset: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69af0dd7d0e284809d49d9c2_Rectangle%2034624352-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69af0dd7d0e284809d49d9c2_Rectangle%2034624352-p-800.webp 800w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69af0dd7d0e284809d49d9c2_Rectangle%2034624352-p-1080.webp 1080w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69af0dd7d0e284809d49d9c2_Rectangle%2034624352.webp 1215w"
        }
    ];

    const trackTwoRepTwo = trackOneList;

    const trackTwoRepThree = [
        {
            type: "horizontal",
            img: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887bb_Rectangle%2034624353.webp",
            srcset: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887bb_Rectangle%252034624353-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887bb_Rectangle%2034624353.webp 608w"
        },
        {
            type: "vertical",
            img: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887b9_iPhone%2014%20%26%2015%20Pro%20-%202.webp"
        },
        {
            type: "horizontal",
            img: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887bd_Rectangle%2034624354.webp",
            srcset: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887bd_Rectangle%252034624354-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887bd_Rectangle%2034624354.webp 608w"
        },
        {
            type: "horizontal",
            img: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887bc_Rectangle%2034624355.webp",
            srcset: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887bc_Rectangle%252034624355-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887bc_Rectangle%2034624355.webp 608w"
        }
    ];

    return (
        <>
            <div className="product-block">
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
                                    <h2 className="title white" aria-label="&quot;Our Successful Products Highlight&quot;">
                                        <SplitText text='"Our Successful Products Highlight"' startIndex={1} />
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-content-block">
                            <ProductTicker directionClass="top" list={tickerItems} />
                            
                            <div className="product-tab-pane-dev">
                                <div className="product-slider-wrapper">
                                    {/* Slide row 1: Track _01 duplicated three times for infinite marquee */}
                                    <div className="product-single-slider _01" style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate3d(-33.755%, 0px, 0px)" }}>
                                        {trackOneList.map((item, idx) => (
                                            <SlideImage key={`track1-1-${idx}`} type={item.type} img={item.img} srcset={item.srcset} />
                                        ))}
                                    </div>
                                    <div className="product-single-slider _01" style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate3d(-33.755%, 0px, 0px)" }}>
                                        {trackOneList.map((item, idx) => (
                                            <SlideImage key={`track1-2-${idx}`} type={item.type} img={item.img} srcset={item.srcset} />
                                        ))}
                                    </div>
                                    <div className="product-single-slider _01" style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate3d(-33.755%, 0px, 0px)" }}>
                                        {trackOneList.map((item, idx) => (
                                            <SlideImage key={`track1-3-${idx}`} type={item.type} img={item.img} srcset={item.srcset} />
                                        ))}
                                    </div>
                                </div>

                                <div className="product-slider-wrapper">
                                    {/* Slide row 2: Track _02 duplicated with subtle variations in Webflow tracks */}
                                    <div className="product-single-slider _02" style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate3d(-66.245%, 0px, 0px)" }}>
                                        {trackTwoRepOne.map((item, idx) => (
                                            <SlideImage key={`track2-1-${idx}`} type={item.type} img={item.img} srcset={item.srcset} />
                                        ))}
                                    </div>
                                    <div className="product-single-slider _02" style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate3d(-66.245%, 0px, 0px)" }}>
                                        {trackTwoRepTwo.map((item, idx) => (
                                            <SlideImage key={`track2-2-${idx}`} type={item.type} img={item.img} srcset={item.srcset} />
                                        ))}
                                    </div>
                                    <div className="product-single-slider _02" style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate3d(-66.245%, 0px, 0px)" }}>
                                        {trackTwoRepThree.map((item, idx) => (
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