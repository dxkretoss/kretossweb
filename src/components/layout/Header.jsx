import React, { useState, useLayoutEffect, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Menu, X, ChevronDown, ArrowRight, ChevronRight } from 'lucide-react';
import { hireUsData } from '../../data/hireus';

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
const BookCallButton = ({ href = "https://calendly.com/ankur-k-kretoss/30min" }) => {
    const buttonRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const button = buttonRef.current;
            if (!button) return;

            const frontLetters = button.querySelectorAll(".button-text-one:not(._02) .gsap_split_letter");
            const backLetters = button.querySelectorAll(".button-text-one._02 .gsap_split_letter");

            // Initial setup: push back text down
            gsap.set(backLetters, { yPercent: 100 });

            button.addEventListener("mouseenter", () => {
                gsap.killTweensOf([frontLetters, backLetters]);
                gsap.to(frontLetters, { yPercent: -100, duration: 0.4, stagger: 0.02, ease: "power2.out" });
                gsap.to(backLetters, { yPercent: 0, duration: 0.4, stagger: 0.02, ease: "power2.out" });
            });

            button.addEventListener("mouseleave", () => {
                gsap.killTweensOf([frontLetters, backLetters]);
                gsap.to(frontLetters, { yPercent: 0, duration: 0.4, stagger: 0.02, ease: "power2.out" });
                gsap.to(backLetters, { yPercent: 100, duration: 0.4, stagger: 0.02, ease: "power2.out" });
            });
        }, buttonRef);

        return () => ctx.revert();
    }, []);

    return (
        <a ref={buttonRef} href={href} target='_blank' className="button-two w-inline-block" aria-label="Book a Call">
            <div className="button-two-bg">
                <img
                    alt="img"
                    src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe288823_date.svg"
                    className="header-button-icon"
                />
                <div className="button-text-two" style={{ position: 'relative', overflow: 'hidden' }}>
                    <div className="button-text-one">
                        <SplitText text="Book a Call" startIndex={1} plainStyle={true} />
                    </div>
                    <div className="button-text-one _02" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
                        <SplitText text="Book a Call" startIndex={100} plainStyle={true} />
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

export default function Header({ currentRoute }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const megaMenuRef = useRef(null);
    let hideTimer = useRef(null);

    const categories = ["App Developers", "Frontend Developers", "Backend Developers", "Web Developer"];

    const handleMegaMenuEnter = () => {
        if (hideTimer.current) clearTimeout(hideTimer.current);
        setIsMegaMenuOpen(true);
    };

    const handleMegaMenuLeave = () => {
        hideTimer.current = setTimeout(() => {
            setIsMegaMenuOpen(false);
        }, 300); // slight delay to allow moving mouse to the dropdown
    };

    // Dynamic navigation list array mapping all elements
    const navigationLinks = [
        { text: "Home", href: "/", current: currentRoute === '/' },
        { text: "About Us", href: "/about", current: currentRoute === 'about' },
        { text: "Services", href: "/services", current: currentRoute === 'services' },
        { text: "Portfolio", href: "/portfolio", current: currentRoute === 'portfolio' },
        { text: "Careers", href: "/careers", current: currentRoute === 'careers' },
        { text: "Hire Us!", isMegaMenuTrigger: true, current: currentRoute === 'hire-us', highlight: true }
    ];

    // Fast scroll handler that stops propagation and uses native smooth scrolling
    const handleScroll = (e, href) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            e.stopPropagation();

            const targetId = href.substring(1);
            if (currentRoute === 'about' && href !== '#about-us') {
                window.location.hash = href;
                setTimeout(() => {
                    const element = document.getElementById(targetId);
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                    }
                }, 100);
            } else if (href === '#about-us') {
                window.location.hash = '#about-us';
            } else {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }
        }
        setIsMenuOpen(false); // Close menu on navigation
    };

    // Lock body scroll and stop Lenis smooth scrolling when mobile menu or mega menu is open
    useEffect(() => {
        if (isMenuOpen || isMegaMenuOpen) {
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
            if (window.lenis) window.lenis.stop();
        } else {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
            if (window.lenis) window.lenis.start();
        }

        return () => {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
            if (window.lenis) window.lenis.start();
        };
    }, [isMenuOpen, isMegaMenuOpen]);

    return (
        <>
            <section className="header">
                <div className="w-layout-blockcontainer container-full-width w-container">
                    <div className="header-content-wrapper">
                        <div className="navbar-wrapper w-nav">
                            <div className="navbar-content">
                                <a href="/" aria-current="page" className="nav-link w-nav-brand w--current" aria-label="home">
                                    <img
                                        alt="img"
                                        src="/kretoss-logo.svg"
                                        className="nav-logo"
                                    />
                                </a>


                                <nav
                                    role="navigation"
                                    className={`nav-list w-nav-menu ${isMenuOpen ? "mobile-menu-open" : ""
                                        }`}
                                >
                                    {navigationLinks.map((link, idx) => (
                                        <div key={idx} className={`menu-box ${link.isMegaMenuTrigger ? '' : 'relative'}`} onMouseEnter={link.isMegaMenuTrigger ? handleMegaMenuEnter : undefined} onMouseLeave={link.isMegaMenuTrigger ? handleMegaMenuLeave : undefined}>
                                            {link.isMegaMenuTrigger ? (
                                                <button
                                                    onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                                                    className={`menu-link w-inline-block !flex !flex-row !items-center !gap-1.5 ${link.current ? "w--current" : ""} ${link.highlight ? "font-bold transition-all duration-300" : ""}`}
                                                >
                                                    <div className={`menu-txt m-0 p-0 leading-none ${link.highlight ? "text-transparent bg-clip-text bg-gradient-to-r from-[#44c7f6] to-[#0037f0]" : ""}`}>{link.text}</div>
                                                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${link.highlight ? "text-[#44c7f6]" : ""} ${isMegaMenuOpen ? "rotate-180" : ""}`} />
                                                </button>
                                            ) : (
                                                <a
                                                    href={link.href}
                                                    onClick={(e) => handleScroll(e, link.href)}
                                                    aria-current={link.current ? "page" : undefined}
                                                    className={`menu-link w-inline-block ${link.current ? "w--current" : ""} ${link.highlight ? "font-bold transition-all duration-300" : ""}`}
                                                >
                                                    <div className={`menu-txt m-0 p-0 leading-none ${link.highlight ? "text-transparent bg-clip-text bg-gradient-to-r from-[#44c7f6] to-[#0037f0]" : ""}`}>{link.text}</div>
                                                </a>
                                            )}

                                            {link.isMegaMenuTrigger && (
                                                <>
                                                    {/* Backdrop Overlay */}
                                                    <div
                                                        className={`fixed inset-0 top-[80px] lg:top-[90px] bg-black/60 backdrop-blur-sm z-40 transition-all duration-300 ${isMegaMenuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}
                                                        onClick={() => setIsMegaMenuOpen(false)}
                                                    ></div>

                                                    <div
                                                        ref={megaMenuRef}
                                                        className={`fixed top-[80px] lg:top-[90px] bottom-[20px] lg:bottom-auto lg:max-h-[calc(100vh-100px)] left-0 right-0 max-w-[95%] xl:max-w-[1400px] mx-auto bg-[#fafcff] border border-blue-100 rounded-md pt-8 pb-8 shadow-[0_30px_80px_rgba(0,55,240,0.08)] transition-all duration-300 z-50 overflow-y-auto overflow-x-hidden overscroll-contain ${isMegaMenuOpen ? 'opacity-100 visible pointer-events-auto translate-y-2' : 'opacity-0 invisible pointer-events-none translate-y-0'}`}
                                                    >
                                                        {/* Transparent hover bridge to prevent menu from closing when crossing gap */}
                                                        <div className="absolute -top-10 left-0 w-full h-10 bg-transparent"></div>

                                                        <div className="container mx-auto px-8 md:px-12 relative z-10">
                                                            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-x-8 gap-y-10">
                                                                {categories.map(cat => {
                                                                    const categoryRoles = hireUsData.filter(r => r.category === cat);
                                                                    if (categoryRoles.length === 0) return null;
                                                                    return (
                                                                        <div key={cat} className="flex flex-col">
                                                                            <h4 className="text-[#0a1520]/80 text-[12px] font-black uppercase tracking-[0.2em] border-b border-[#0037f0]/10 pb-3 mb-5">{cat}</h4>
                                                                            <ul className="space-y-2">
                                                                                {categoryRoles.map(role => (
                                                                                    <li key={role.slug}>
                                                                                        <a href={`/hire-us/${role.slug}`} className="flex items-center gap-4 p-2.5 -ml-2.5 rounded-xl hover:bg-white border border-transparent hover:border-[#44c7f6]/15 hover:shadow-[0_4px_20px_-5px_rgba(68,199,246,0.15)] transition-all duration-300 group relative overflow-hidden pr-4">
                                                                                            <div className="relative w-10 h-10 shrink-0 flex items-center justify-center bg-white rounded-xl border border-gray-100 group-hover:border-[#44c7f6]/40 group-hover:shadow-[0_0_15px_rgba(68,199,246,0.2)] transition-all duration-300 z-10">
                                                                                                <img src={role.icon} alt="" className="w-5 h-5 opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                                                                                            </div>
                                                                                            <span className="relative whitespace-nowrap text-[#0a1520] font-bold text-[13.5px] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0037f0] group-hover:to-[#44c7f6] transition-colors z-10 flex-1">{role.title.replace('Hire ', '')}</span>
                                                                                            <ArrowRight className="w-4 h-4 text-[#0037f0] opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 relative z-10 shrink-0" />
                                                                                        </a>
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </div>
                                                                    );
                                                                })}
                                                            </div>

                                                            {/* Bottom Section */}
                                                            <div className="w-full h-[2px] bg-gradient-to-r from-[#0037f0] to-[#44c7f6] mt-10 mb-6 rounded-full opacity-80"></div>
                                                            <div className="flex flex-wrap items-center justify-start gap-x-8 gap-y-4">
                                                                {[
                                                                    { text: "Hire Frontend Developer", href: "/hire-us/hire-frontend-developer" },
                                                                    { text: "Hire Backend Developer", href: "/hire-us/hire-backend-developer" },
                                                                    { text: "Hire Mobile APP Developer", href: "/hire-us/hire-mobile-app-developer" },
                                                                    { text: "Hire Data Analytics", href: "/hire-us/hire-data-analytics" },
                                                                    { text: "Hire Cloud Infrastructure", href: "/hire-us/hire-cloud-infrastructure" },
                                                                    { text: "Hire CMS Developer", href: "/hire-us/hire-cms-developer" }
                                                                ].map(link => (
                                                                    <a key={link.text} href={link.href} className="group flex items-center gap-1 text-[13.5px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0037f0] to-[#44c7f6] hover:scale-105 transition-all duration-300">
                                                                        <ChevronRight className="w-4 h-4 text-[#0037f0]" />
                                                                        <span>{link.text}</span>
                                                                        <ArrowRight className="w-4 h-4 text-[#44c7f6] opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-1 transition-all duration-300" />
                                                                    </a>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    ))}
                                </nav>
                                <div className="header-button">
                                    <div className="header-button-box desktop-header-button">
                                        <BookCallButton />
                                    </div>
                                </div>
                                <div
                                    className="menu-button mobile-menu-toggle"
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    style={{ "WebkitUserSelect": "text" }} aria-label="menu"
                                    role="button" tabIndex="0" aria-controls="w-nav-overlay-0" aria-haspopup="menu"
                                    aria-expanded={isMenuOpen}>
                                    <div className="menu-bar-block">
                                        {isMenuOpen ? <X /> : <Menu />}
                                    </div>
                                </div>
                            </div>
                            <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}