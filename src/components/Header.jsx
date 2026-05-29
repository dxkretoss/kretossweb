import React from 'react';

// SplitText helper for dynamic GSAP SplitText word/letter class structures
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

// Reusable BookCallButton to encapsulate the dynamic B-o-o-k a C-a-l-l letters and styling
const BookCallButton = ({ href = "https://kretoss.com/#Contact" }) => {
    return (
        <a href={href} className="button-two w-inline-block" aria-label="Book a CallBook a Call">
            <div className="button-two-bg">
                <img
                    alt="img"
                    src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe288823_date.svg"
                    className="header-button-icon"
                />
                <div className="button-text-two">
                    <div className="button-text-one">
                        <SplitText text="Book a Call" startIndex={1} plainStyle={true} />
                    </div>
                    <div className="button-text-one _02">
                        <SplitText text="Book a Call" startIndex={10} plainStyle={true} />
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
            </div>
        </a>
    );
};

export default function Header() {
    // Dynamic navigation list array mapping all elements
    const navigationLinks = [
        { text: "Home", href: "#Hero" },
        { text: "About Us", href: "#About" },
        { text: "Services", href: "#Services" },
        { text: "Works", href: "#Work" },
        { text: "Testimonials", href: "#Testimonials" }
    ];

    // Fast scroll handler that stops propagation and uses native smooth scrolling
    const handleScroll = (e, href) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            e.stopPropagation();
            const targetId = href.substring(1);
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <>
            <section className="header">
                <div className="w-layout-blockcontainer container-full-width w-container">
                    <div className="header-content-wrapper">
                        <div data-w-id="c5dbb921-5697-94d2-30c7-149bf2164714" data-animation="default" data-collapse="medium"
                            data-duration="400" data-easing="ease" data-easing2="ease" role="banner"
                            className="navbar-wrapper w-nav">
                            <div className="navbar-content">
                                <a href="/" aria-current="page" className="nav-link w-nav-brand w--current" aria-label="home">
                                    <img
                                        alt="img"
                                        src="/kretoss-logo.svg"
                                        className="nav-logo"
                                    />
                                </a>
                                <nav role="navigation" className="nav-list w-nav-menu">
                                    {navigationLinks.map((link, idx) => (
                                        <div key={idx} className="menu-box">
                                            <a
                                                href={link.href}
                                                onClick={(e) => handleScroll(e, link.href)}
                                                aria-current={link.current ? "page" : undefined}
                                                className={`menu-link w-inline-block ${link.current ? "w--current" : ""}`}
                                            >
                                                <div className="menu-link-text">{link.text}</div>
                                            </a>
                                        </div>
                                    ))}
                                </nav>
                                <div className="header-button">
                                    <div className="header-button-box">
                                        <BookCallButton href="https://kretoss.com/#Contact" />
                                    </div>
                                    <div className="menu-button w-nav-button" style={{ "WebkitUserSelect": "text" }} aria-label="menu"
                                        role="button" tabIndex="0" aria-controls="w-nav-overlay-0" aria-haspopup="menu"
                                        aria-expanded="false">
                                        <div className="menu-bar-block">
                                            <div className="menu-bar-top"
                                                style={{ "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d" }}>
                                            </div>
                                            <div className="menu-bar-bottom"
                                                style={{ "width": "25px", "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d" }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sticky Floating Navigation Drawer */}
            <div data-w-id="40c52eab-c370-ed18-4687-f5b1cc3aee06" className="sticky-nav-box"
                style={{ "willChange": "transform, width, height, opacity", "transform": "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d", "height": "0px", "opacity": "0" }}>
                <div className="hero-link-block">
                    <div className="hero-link-bar">
                        <a href="#Hero" onClick={(e) => handleScroll(e, "#Hero")} className="hero-link w-inline-block">
                            <div className="nav-link-text">Home</div>
                        </a>
                        <a href="#About" onClick={(e) => handleScroll(e, "#About")} className="hero-link w-inline-block">
                            <div className="nav-link-text">About Us</div>
                        </a>
                        <BookCallButton href="#Contact" />
                        <a href="#Services" onClick={(e) => handleScroll(e, "#Services")} className="hero-link w-inline-block">
                            <div className="nav-link-text">Services</div>
                        </a>
                        <a href="#Work" onClick={(e) => handleScroll(e, "#Work")} className="hero-link w-inline-block">
                            <div className="nav-link-text">Works</div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}