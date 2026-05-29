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
    return (
        <div data-w-id={dataWId} className={`single-service-card ${cardClass}`}
            style={{ "willChange": "transform", "transform": "translate3d(0px, 50px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d" }}>
            <div className="service-title-excerpt">
                <h3 className="service-block-title">{title}</h3>
                <p className="service-block-excerpt">{excerpt}</p>
            </div>
            <div className="servide-thumbnail-button">
                <div className="service-image-box">
                    <img
                        src={imgSrc}
                        loading="lazy"
                        style={{ "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d" }}
                        sizes="100vw" alt="Service Card Image"
                        srcSet={srcSet}
                        className="service-card-image"
                    />
                    {/* <div className="service-counter-text">{number}</div> */}
                    {/* <div className="total-project-title">{projectCount}</div> */}
                </div>
                {/* <a data-w-id={linkDataWId} href="#Contact" className="service-card-link w-inline-block" aria-label="Get This ServiceGet This Service">
                    <div className="service-text-box">
                        <div className="link-front-text">
                            <SplitText text="Get This Service" startIndex={1} plainStyle={true} />
                        </div>
                        <div className="link-back-text">
                            <SplitText text="Get This Service" startIndex={15} plainStyle={true} />
                        </div>
                    </div>
                    <div className="button-icon-block">
                        <img
                            src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887bf_Arrow%20Right%20Up.svg"
                            loading="lazy"
                            style={{ "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d" }}
                            alt="Front Icon" className="link-front-icon"
                        />
                        <img
                            src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887bf_Arrow%20Right%20Up.svg"
                            loading="lazy"
                            style={{ "transform": "translate3d(-25px, 25px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d" }}
                            alt="Front Icon" className="link-back-icon"
                        />
                    </div>
                </a> */}
            </div>
        </div>
    );
};

export default function Services() {
    // Dynamic service card array mapping
    const servicesList = [
        {
            number: "01",
            title: "Cloud Infrastructure",
            excerpt: "Scalable and secure cloud architecture optimized for high-demand enterprise applications and 99.9% uptime.",
            imgSrc: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b0028c78379861278d4a2e_fd.webp",
            srcSet: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b0028c78379861278d4a2e_fd-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b0028c78379861278d4a2e_fd-p-800.webp 800w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b0028c78379861278d4a2e_fd.webp 1024w",
            projectCount: "28+ Projects",
            cardClass: "_01",
            dataWId: "7ba2c9fc-e567-d38f-880a-0f0d02ad444d",
            linkDataWId: "b01d63dc-a2b6-6d4d-9b24-4ccead6b2c28"
        },
        {
            number: "02",
            title: "Frontend Excellence",
            excerpt: "Building responsive, lightning-fast user interfaces using modern frameworks and performance-first methodology.",
            imgSrc: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b00c4efe2c51bd2fe0b849_w%20(2).webp",
            srcSet: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b00c4efe2c51bd2fe0b849_w%20(2)-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b00c4efe2c51bd2fe0b849_w%20(2)-p-800.webp 800w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b00c4efe2c51bd2fe0b849_w%20(2).webp 904w",
            projectCount: "34+ Projects",
            cardClass: "_02",
            dataWId: "188b70d9-9ccb-b630-fa3e-37af8680f01d",
            linkDataWId: "55ab3599-1be6-d615-e487-c3cdff0cab92"
        },
        {
            number: "03",
            title: "Backend Systems",
            excerpt: "Robust server-side logic and sophisticated database management for mission-critical business systems.",
            imgSrc: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b00cb11b833c96697a2100_w%20(1).webp",
            srcSet: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b00cb11b833c96697a2100_w%20(1)-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b00cb11b833c96697a2100_w%20(1)-p-800.webp 800w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b00cb11b833c96697a2100_w%20(1).webp 904w",
            projectCount: "90+ Projects",
            cardClass: "_03",
            dataWId: "dea47cae-1763-3ca2-1904-948e3c97b196",
            linkDataWId: "311fb166-1826-7214-0328-b08c561a0fe5"
        },
        {
            number: "04",
            title: "Mobile Development",
            excerpt: "High-performance native and cross-platform mobile experiences that delight users on every device.",
            imgSrc: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b00cf2d78fec12c8c004a7_w%20(3).webp",
            srcSet: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b00cf2d78fec12c8c004a7_w%20(3)-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b00cf2d78fec12c8c004a7_w%20(3)-p-800.webp 800w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b00cf2d78fec12c8c004a7_w%20(3)-p-1080.webp 1080w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b00cf2d78fec12c8c004a7_w%20(3).webp 1200w",
            projectCount: "09+ Projects",
            cardClass: "_04",
            dataWId: "1c5dac51-26ed-5099-d9d1-2ae6efac5ec6",
            linkDataWId: "e4a691e5-e2a3-b6c0-a4cc-d842e9d08d8a"
        },
        {
            number: "05",
            title: "CMS",
            excerpt: "Flexible CMS solutions for easy content management, scalability, and performance.",
            imgSrc: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b00c4efe2c51bd2fe0b849_w%20(2).webp",
            srcSet: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b00c4efe2c51bd2fe0b849_w%20(2)-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b00c4efe2c51bd2fe0b849_w%20(2)-p-800.webp 800w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b00c4efe2c51bd2fe0b849_w%20(2).webp 904w",
            projectCount: "42+ Projects",
            cardClass: "_01",
            dataWId: "7ba2c9fc-e567-d38f-880a-0f0d02ad444d",
            linkDataWId: "b01d63dc-a2b6-6d4d-9b24-4ccead6b2c28"
        },
        {
            number: "06",
            title: "Data Analytics",
            excerpt: "Transforming raw data into actionable intelligence through advanced visualization & ML pipelines.",
            imgSrc: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b0028c78379861278d4a2e_fd.webp",
            srcSet: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b0028c78379861278d4a2e_fd-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b0028c78379861278d4a2e_fd-p-800.webp 800w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b0028c78379861278d4a2e_fd.webp 1024w",
            projectCount: "19+ Projects",
            cardClass: "_02",
            dataWId: "188b70d9-9ccb-b630-fa3e-37af8680f01d",
            linkDataWId: "55ab3599-1be6-d615-e487-c3cdff0cab92"
        },
        {
            number: "07",
            title: "Vibe Coding",
            excerpt: "Fast-track product development using vibe-coding tools and scalable engineering practices.",
            imgSrc: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b00cb11b833c96697a2100_w%20(1).webp",
            srcSet: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b00cb11b833c96697a2100_w%20(1)-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b00cb11b833c96697a2100_w%20(1)-p-800.webp 800w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b00cb11b833c96697a2100_w%20(1).webp 904w",
            projectCount: "37+ Projects",
            cardClass: "_03",
            dataWId: "dea47cae-1763-3ca2-1904-948e3c97b196",
            linkDataWId: "311fb166-1826-7214-0328-b08c561a0fe5"
        },
        {
            number: "08",
            title: "Python & ERP Development",
            excerpt: "High-performance ERP and backend development using Python, Django, and Odoo.",
            imgSrc: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b00cf2d78fec12c8c004a7_w%20(3).webp",
            srcSet: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b00cf2d78fec12c8c004a7_w%20(3)-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b00cf2d78fec12c8c004a7_w%20(3)-p-800.webp 800w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b00cf2d78fec12c8c004a7_w%20(3)-p-1080.webp 1080w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b00cf2d78fec12c8c004a7_w%20(3).webp 1200w",
            projectCount: "25+ Projects",
            cardClass: "_04",
            dataWId: "1c5dac51-26ed-5099-d9d1-2ae6efac5ec6",
            linkDataWId: "e4a691e5-e2a3-b6c0-a4cc-d842e9d08d8a"
        }
    ];

    return (
        <>
            <div className="service-block">
                <section id="Services" className="service">
                    <div className="we-do-card-shape">
                        <img
                            src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b11677e923db9d578c7a7b_cube-helix%201.svg"
                            loading="lazy" alt="img" className="services-shape"
                            style={{ "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(5.42395deg) rotateY(3.87425deg) rotateZ(-55.7892deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d", "willChange": "transform" }}
                        />
                    </div>
                    <div className="w-layout-blockcontainer container w-container">
                        <div data-w-id="83b6645c-69a4-34e9-aadc-848274859eb2" className="service-section-block">
                            <div className="service-content-wrapper">
                                <div className="project-title-area"
                                    style={{ "willChange": "transform", "transform": "translate3d(0px, 50px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d" }}>
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