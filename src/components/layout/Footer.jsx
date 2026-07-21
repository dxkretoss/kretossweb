import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedButton from '../ui/AnimatedButton';

export default function Footer({ currentRoute }) {
    const [activeBadgeIdx, setActiveBadgeIdx] = useState(0);

    // Ticker configuration for infinite rolling track
    const technologies = ["Laravel", "Node.js", "React.js", "Python", "Flutter", "React Native", "UI/UX", "PHP", "Shopify"];

    // Trust Badges Data
    const trustBadges = [
        { platform: "Google", logo: "/Review/google.svg", rating: "4.9/5", reviews: "86 Client Reviews" },
        { platform: "Clutch", logo: "/Review/cluth.png", rating: "5/5", reviews: "34 Client Reviews" },
        // { platform: "Smart Customer", logo: "https://cdn-icons-png.flaticon.com/512/4144/4144111.png", rating: "4.8/5", reviews: "28 Client Reviews" },
        { platform: "Trustpilot", logo: "/Review/trustpilot.svg", rating: "4.7/5", reviews: "38 Client Reviews" },
        { platform: "Global Clients", logo: "/Review/global.png", rating: "952+", reviews: "Satisfied Clients", hideStars: true }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveBadgeIdx((prev) => (prev + 1) % trustBadges.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [trustBadges.length]);

    const tickerItems = technologies.map((tech) => ({
        icon: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe288792_Group%202087325406.svg",
        text: tech
    }));

    // Navigation and menu arrays
    const footerMenus = [
        {
            title: "Instant Links",
            links: [
                { label: "Home", href: "/", isCurrent: currentRoute === '/' },
                { label: "About Us", href: "/about", isCurrent: currentRoute === 'about' },
                { label: "Services", href: "/services", isCurrent: currentRoute === 'services' },
                { label: "Portfolio", href: "/portfolio", isCurrent: currentRoute === 'portfolio' },
                { label: "Careers", href: "/careers", isCurrent: currentRoute === 'careers' },
                { label: "Contact", href: "/contact", isCurrent: currentRoute === 'contact' },
            ],
        }
    ];

    const officeaddress = [
        { country: "India", icon: "https://flagcdn.com/in.svg", address: "B-1007, Shilp Corporate Park, Near Rajpath Club, Rajpath-Rangoli Road, Ahmedabad. 380054" },
        { country: "United States", icon: "https://flagcdn.com/us.svg", address: "9245 East Wood Drive, SCOTTSDALE, AZ 85260" }
    ]

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
        "India",
        "USA",
        "UK",
        "Brazil",
        "South Africa",
        "Australia",
        "Germany",
        "UAE"
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
                <div className="footer-top-wrapper pt-10">
                    <div className="container-full-width w-layout-blockcontainer container w-container">
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

                                    </div>
                                </div>
                            ))}

                            <div className="footer-menu-box">
                                <div className="footer-menu-block social-box">
                                    {officeaddress && (
                                        <div>
                                            <h3 className="footer-menu-title">Our Offices</h3>
                                            <div className="flex flex-col gap-6 text-[#a3b3c9]">
                                                {officeaddress.map((addr, aIdx) => (
                                                    <div key={aIdx}>
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <img src={addr.icon} alt={`${addr.country} Flag`} className="w-8 h-auto object-contain" />
                                                            <h4 className="text-white font-medium !text-[20px] uppercase">{addr.country}</h4>
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

                            {/* Social Profiles Menu */}
                            <div className="footer-menu-box">
                                <div className="footer-menu-block social-box">
                                    <div className='flex flex-col gap-2'>
                                        <h3 className="footer-menu-title">Let’s Work Together!</h3>
                                        <p> Have a great idea? We're here to bring it to life with innovative & digital solutions</p>
                                    </div>
                                    <AnimatedButton href="https://calendly.com/ankur-k-kretoss/30min" text="BOOK A CALL"
                                        target="_blank"></AnimatedButton>
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

                            {/* Highly Rated - 4th Block */}
                            <div className="footer-menu-box">
                                <div className="footer-menu-block w-full flex flex-col">
                                    <h3 className="footer-menu-title">Highly Rated</h3>

                                    <div className="flex flex-col items-center w-full max-w-full lg:max-w-[240px]">
                                        <div className="relative w-full h-[200px] flex items-center justify-center">
                                            <AnimatePresence mode="wait">
                                                <motion.div
                                                    key={activeBadgeIdx}
                                                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: -15, scale: 0.95 }}
                                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                                    className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group"
                                                >
                                                    {/* Logo */}
                                                    <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center mb-5 shrink-0 backdrop-blur-md group-hover:scale-110 transition-transform duration-300">
                                                        <img src={trustBadges[activeBadgeIdx].logo} alt={trustBadges[activeBadgeIdx].platform} className="h-6 w-6 object-contain" />
                                                    </div>

                                                    {/* Platform Name */}
                                                    <h4 className="text-white font-bold text-base mb-1">{trustBadges[activeBadgeIdx].platform}</h4>

                                                    {/* Rating */}
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#44c7f6] to-[#0037f0] leading-none">{trustBadges[activeBadgeIdx].rating}</span>
                                                    </div>

                                                    {/* Stars */}
                                                    {!trustBadges[activeBadgeIdx].hideStars && (
                                                        <div className="flex gap-1 text-[#f59e0b] mb-4">
                                                            {[...Array(5)].map((_, i) => (
                                                                <svg key={i} className="w-4 h-4 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                </svg>
                                                            ))}
                                                        </div>
                                                    )}

                                                    {/* Reviews text */}
                                                    <div className="text-[12px] font-bold text-[#44c7f6] uppercase tracking-widest">{trustBadges[activeBadgeIdx].reviews}</div>
                                                </motion.div>
                                            </AnimatePresence>
                                        </div>
                                        <div className="flex gap-2 justify-center mt-5">
                                            {trustBadges.map((_, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setActiveBadgeIdx(idx)}
                                                    className={`h-2 rounded-full transition-all duration-300 outline-none ${idx === activeBadgeIdx ? 'bg-gradient-to-r from-[#44c7f6] to-[#0037f0] w-6' : 'bg-[#222] hover:bg-[#333] w-2'}`}
                                                    aria-label={`Show badge ${idx + 1}`}
                                                ></button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-text !text-center mt-4 block md:hidden">
                    © All Rights Reserved Kretoss Technology
                </div>

                {/* Footer Credits / Address Area */}
                <div className="footer-bottom-wrapper">
                    <div className="w-layout-blockcontainer container w-container">
                        <div className="footer-bottom-content">


                            {/* Rolling country list */}
                            <div className="footer-address-wrapper flex flex-col items-center">
                                <h3 className="footer-menu-title">Countries We Serve</h3>
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
                                </div>
                                <div className="copyright-box">
                                    <div className="copyright-text !text-left hidden md:block">
                                        © All Rights Reserved Kretoss Technology
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}