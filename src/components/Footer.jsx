import React from 'react';

export default function Footer() {
    // Ticker configuration for infinite rolling track
    const tickerItems = Array.from({ length: 8 }).map((_, idx) => ({
        icon: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe288792_Group%202087325406.svg",
        text: "Let’s Talk"
    }));

    // Navigation and menu arrays
    const footerMenus = [
        {
            title: "Instant Links",
            links: [
                { label: "Home", href: "/", isCurrent: true },
                { label: "About Us", href: "https://kretoss.com/#About" },
                { label: "Projects", href: "https://kretoss.com/#Projects" },
                { label: "Services", href: "https://kretoss.com/#Services" }
            ]
        },
        {
            title: "Services",
            links: [
                { label: "UX/UI Design", href: "https://kretoss.com/#Contact", textBlock: true },
                { label: "webflow Development", href: "https://kretoss.com/#Contact" },
                { label: "Framer Development", href: "https://kretoss.com/#Contact" },
                { label: "SaaS Design", href: "https://kretoss.com/#Contact" }
            ]
        },
        {
            title: "Utilities",
            links: [
                { label: "Style Guide", href: "/style-guide" },
                { label: "Changelog", href: "/changelog" },
                { label: "Licenses", href: "/license" },
                { label: "404 Error Page", href: "https://kretoss.com/404" }
            ]
        }
    ];

    // Social accounts
    const socialLinks = [
        {
            id: "instagram",
            href: "https://www.instagram.com/pixoora_agency/",
            icon: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe28878a_Social%20Icon%20(1).svg",
            dataWId: "2b015486-5275-f4d0-67a5-7bf5cd52a285"
        },
        {
            id: "linkedin",
            href: "https://www.linkedin.com/company/pixoora",
            icon: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe28878e_ri_linkedin-fill.svg",
            dataWId: "2b015486-5275-f4d0-67a5-7bf5cd52a289"
        },
        {
            id: "twitter",
            href: "https://x.com/pixoora",
            icon: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe28878c_Social%20Icon%20(3).svg",
            dataWId: "2b015486-5275-f4d0-67a5-7bf5cd52a281"
        },
        {
            id: "behance",
            href: "https://www.behance.net/pixoora",
            icon: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe28878f_Social%20Icon%20(4).svg",
            dataWId: "2b015486-5275-f4d0-67a5-7bf5cd52a27d"
        },
        {
            id: "dribbble",
            href: "https://dribbble.com/pixoora",
            icon: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe28878d_Social%20Icon.svg",
            dataWId: "2b015486-5275-f4d0-67a5-7bf5cd52a275"
        },
        {
            id: "facebook",
            href: "https://www.facebook.com/pixoora/",
            icon: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b2f1129a4011857f80c862_Vector.svg",
            dataWId: "2b015486-5275-f4d0-67a5-7bf5cd52a279",
            isFacebook: true
        }
    ];

    // Country roll lists
    const countryList = [
        "United States",
        "Singapore",
        "Malaysia",
        "Bangladesh",
        "South Africa",
        "Indonesia",
        "India"
    ];

    return (
        <>
            <section className="footer">
                {/* Scrolling let's talk ticker (Preserving Webflow double layer) */}
                <div className="ticker-wrapper">
                    {Array.from({ length: 2 }).map((_, trackIdx) => (
                        <div
                            key={trackIdx}
                            className="ticker-content-box"
                            style={{
                                "transform": "translate3d(-7.967%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                "transformStyle": "preserve-3d",
                                "willChange": "transform"
                            }}
                        >
                            {tickerItems.map((item, idx) => (
                                <div key={idx} className="ticker-single-box">
                                    <img loading="lazy" src={item.icon} alt="Ticker Icon" className="ticker-icon" />
                                    <div className="ticker-text">{item.text}</div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Footer Main Menu Area */}
                <div className="footer-top-wrapper">
                    <div className="w-layout-blockcontainer container w-container">
                        <div className="footer-top-box">
                            {/* Dynamic links columns */}
                            {footerMenus.map((menu, idx) => (
                                <div key={idx} className="footer-menu-box">
                                    <div className="footer-menu-block">
                                        <h3 className="footer-menu-title">{menu.title}</h3>
                                        <div className="footer-link-box">
                                            {menu.links.map((link, lIdx) => (
                                                <a
                                                    key={lIdx}
                                                    href={link.href}
                                                    aria-current={link.isCurrent ? "page" : undefined}
                                                    className={`footer-link w-inline-block ${link.isCurrent ? 'w--current' : ''}`}
                                                >
                                                    {link.textBlock ? (
                                                        <div className="text-block">{link.label}</div>
                                                    ) : (
                                                        <div>{link.label}</div>
                                                    )}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Social Profiles Menu */}
                            <div className="footer-menu-box">
                                <div className="footer-menu-block social-box">
                                    <h3 className="footer-menu-title _02">Follow Us</h3>
                                    <div className="footer-social-box">
                                        {socialLinks.map((social) => (
                                            <a
                                                key={social.id}
                                                data-w-id={social.dataWId}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="social-single-box w-inline-block"
                                            >
                                                <div className="social-icon-box">
                                                    <img
                                                        loading="lazy"
                                                        src={social.icon}
                                                        alt="Social Icon"
                                                        className={`social-icon-front ${social.isFacebook ? 'facebook' : ''}`}
                                                        style={{ "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d" }}
                                                    />
                                                    <img
                                                        loading="lazy"
                                                        src={social.icon}
                                                        alt="Social Icon"
                                                        className={`social-icon-back-icon ${social.isFacebook ? 'facebook' : ''}`}
                                                        style={{ "transform": "translate3d(-10px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d" }}
                                                    />
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Credits / Address Area */}
                <div className="footer-bottom-wrapper">
                    <div className="w-layout-blockcontainer container w-container">
                        <div className="footer-bottom-content">
                            <div className="copyright-box">
                                <div className="copyright-text">
                                    © All Rights Reserved <a href="/" aria-current="page" className="footer-copy-link w--current">Pixohub</a> - Powered By <a href="https://webflow.com/" target="_blank" rel="noopener noreferrer" className="footer-copy-link">Webflow</a>
                                </div>
                                <div className="copyright-text">
                                    Designed & Developed By <a href="https://pixoora.com/" target="_blank" rel="noopener noreferrer" className="footer-copy-link">Pixoora</a>
                                </div>
                            </div>

                            {/* Rolling country list */}
                            <div className="footer-address-wrapper">
                                <div className="footer-country-block">
                                    <div className="footer-country-slider">
                                        {Array.from({ length: 2 }).map((_, boxIdx) => (
                                            <div
                                                key={boxIdx}
                                                className="single-country-box"
                                                style={{
                                                    "transform": "translate3d(0px, -94.615%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                                    "transformStyle": "preserve-3d",
                                                    "willChange": "transform"
                                                }}
                                            >
                                                {countryList.map((country, idx) => (
                                                    <div key={idx} className="footer-single-address">
                                                        <div className="footer-address-text">{country}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="footer-link-gradient-bar"></div>
                                    <div className="footer-link-gradient-bar right-bar"></div>
                                </div>
                            </div>

                            {/* Massive brand text and illustration */}
                            <div className="footer-text-image-box">
                                <div className="footer-text-box">
                                    <h2 className="footer-text">KRETOSS</h2>
                                </div>
                                <div className="footer-gradient"></div>
                                <div className="footer-image-box">
                                    <img
                                        sizes="100vw"
                                        srcSet="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b90cedc2778a1e5a4bf678_footer-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b90cedc2778a1e5a4bf678_footer-p-800.webp 800w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b90cedc2778a1e5a4bf678_footer-p-1080.webp 1080w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b90cedc2778a1e5a4bf678_footer-p-1600.webp 1600w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b90cedc2778a1e5a4bf678_footer.webp 3353w"
                                        alt="Footer Illustration"
                                        src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b90cedc2778a1e5a4bf678_footer.webp"
                                        loading="lazy"
                                        className="footer-image"
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