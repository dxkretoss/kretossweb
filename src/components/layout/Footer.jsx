import React from 'react';
import AnimatedButton from '../ui/AnimatedButton';

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
                { label: "About Us", href: "/about" },
                { label: "Services", href: "#" },
                { label: "Portfolio", href: "#" },
                { label: "Careers", href: "#" },
            ],
            addresses: [
                { country: "India", icon: "https://flagcdn.com/in.svg", address: "B-1007, Shilp Corporate Park, Near Rajpath Club, Rajpath-Rangoli Road, Ahmedabad. 380054" },
                { country: "United States", icon: "https://flagcdn.com/us.svg", address: "9245 East Wood Drive, SCOTTSDALE, AZ 85260" }
            ]
        }
    ];

    // Social accounts
    const socialLinks = [
        {
            id: "facebook",
            href: "https://www.facebook.com/kretosstechnology/",
            icon: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b2f1129a4011857f80c862_Vector.svg",
            dataWId: "2b015486-5275-f4d0-67a5-7bf5cd52a279",
            isFacebook: true
        },
        {
            id: "instagram",
            href: "https://www.instagram.com/kretoss_technology_/",
            icon: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe28878a_Social%20Icon%20(1).svg",
            dataWId: "2b015486-5275-f4d0-67a5-7bf5cd52a285"
        },
        {
            id: "twitter",
            href: "https://x.com/KretossTechnol3",
            icon: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe28878c_Social%20Icon%20(3).svg",
            dataWId: "2b015486-5275-f4d0-67a5-7bf5cd52a281"
        },
        {
            id: "linkedin",
            href: "https://www.linkedin.com/company/kretoss/",
            icon: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe28878e_ri_linkedin-fill.svg",
            dataWId: "2b015486-5275-f4d0-67a5-7bf5cd52a289"
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
                <div className="ticker-wrapper !flex !overflow-hidden">
                    {Array.from({ length: 4 }).map((_, trackIdx) => (
                        <div
                            key={trackIdx}
                            className="ticker-content-box animate-marquee !flex !shrink-0"
                            style={{
                                "transformStyle": "preserve-3d",
                                "willChange": "transform"
                            }}
                        >
                            {tickerItems.map((item, idx) => (
                                <div key={idx} className="ticker-single-box !flex !items-center !shrink-0">
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
                                <div key={idx} className="footer-menu-box !w-auto">
                                    <div className="footer-menu-block">
                                        <div>
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

                                        {menu.addresses && (
                                            <div>
                                                <h3 className="footer-menu-title">Our Offices</h3>
                                                <div className="flex flex-col gap-6 text-[#a3b3c9]">
                                                    {menu.addresses.map((addr, aIdx) => (
                                                        <div key={aIdx}>
                                                            <div className="flex items-center gap-2 mb-1">
                                                                <img src={addr.icon} alt={`${addr.country} Flag`} className="w-10 h-auto object-contain" />
                                                                <h4 className="text-white font-medium text-[16px]">{addr.country}</h4>
                                                            </div>
                                                            <p className="text-[14px] leading-relaxed max-w-[280px] whitespace-normal">
                                                                {addr.address}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}

                            {/* Social Profiles Menu */}
                            <div className="footer-menu-box">
                                <div className="footer-menu-block social-box">
                                    <div className='flex flex-col gap-2'>
                                        <h3 className='!text-[24px]'>Let’s Work Together!</h3>
                                        <p> Have a great idea? We're here to bring it to life with innovative & digital solutions</p>
                                    </div>
                                    <AnimatedButton text="BOOK A CALL"></AnimatedButton>
                                    {/* <h3 className="footer-menu-title _02">Follow Us</h3> */}
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


                            {/* Rolling country list */}
                            <div className="footer-address-wrapper flex flex-col items-center">
                                <h3 className="footer-menu-title">Our Clients</h3>
                                <div className="footer-country-block">
                                    <div className="footer-country-slider ">
                                        {Array.from({ length: 2 }).map((_, boxIdx) => (
                                            <div
                                                key={boxIdx}
                                                className="single-country-box animate-marquee-vertical"
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
                                <div className="footer-image-box relative">
                                    <img
                                        sizes="100vw"
                                        srcSet="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b90cedc2778a1e5a4bf678_footer-p-500.webp 500w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b90cedc2778a1e5a4bf678_footer-p-800.webp 800w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b90cedc2778a1e5a4bf678_footer-p-1080.webp 1080w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b90cedc2778a1e5a4bf678_footer-p-1600.webp 1600w, https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b90cedc2778a1e5a4bf678_footer.webp 3353w"
                                        alt="Footer Illustration"
                                        src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b90cedc2778a1e5a4bf678_footer.webp"
                                        loading="lazy"
                                        className="footer-image"
                                    />
                                    <div className="copyright-box">
                                        <div className="copyright-text !text-center">
                                            © All Rights Reserved Kretoss Technology
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}