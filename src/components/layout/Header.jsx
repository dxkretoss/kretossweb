import React, { useState, useLayoutEffect, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Menu, X, ChevronDown, ArrowRight, ChevronRight } from 'lucide-react';
import { hireUsData } from '../../data/hireus';
import MegaMenu from './MegaMenu';

// SplitText helper for dynamic GSAP SplitText word/letter class structures
export const SplitText = ({ text, wordClassPrefix = "gsap_split_word", letterClassPrefix = "gsap_split_letter", startIndex = 1, plainStyle = false }) => {
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
export const BookCallButton = ({ href = "https://calendly.com/ankur-k-kretoss/30min" }) => {
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

    const categories = ["Frontend Developers", "Backend Developers", "App Developers", "Web Developer"];

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
        // { text: "Hire Us!", isMegaMenuTrigger: true, current: currentRoute === 'hire-us', highlight: true }
        { text: "Hire Us!", href: "/hire-us", current: currentRoute === 'hire-us', highlight: true }
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

    // Lock body scroll and stop Lenis smooth scrolling when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
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
    }, [isMenuOpen]);

    return (
        <>
            <section className="header">
                <div className="w-layout-blockcontainer container-full-width w-container">
                    <div className="header-content-wrapper">
                        <div className="navbar-wrapper w-nav">
                            <div className="navbar-content">
                                <Link to="/" aria-current="page" className="nav-link w-nav-brand w--current" aria-label="home">
                                    <img
                                        alt="img"
                                        src="/kretoss-logo.svg"
                                        className="nav-logo"
                                    />
                                </Link>


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
                                                    className={`menu-link w-inline-block !flex !flex-row !items-center !gap-1.5 ${link.current ? "w--current" : ""} ${link.highlight ? "font-medium transition-all duration-300" : ""}`}
                                                >
                                                    <div className={`menu-txt m-0 p-0 leading-none ${link.highlight ? "text-transparent bg-clip-text bg-[linear-gradient(110deg,#3eb9f5,45%,#ffffff,55%,#3eb9f5)] animate-shine" : ""}`}>{link.text}</div>
                                                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${link.highlight ? "text-[#44c7f6]" : ""} ${isMegaMenuOpen ? "rotate-180" : ""}`} />
                                                </button>
                                            ) : (
                                                <Link
                                                    to={link.href}
                                                    onClick={(e) => handleScroll(e, link.href)}
                                                    aria-current={link.current ? "page" : undefined}
                                                    className={`menu-link w-inline-block ${link.current ? "w--current" : ""} ${link.highlight ? "font-semibold transition-all duration-300" : ""}`}
                                                >
                                                    <div className={`menu-txt m-0 p-0 leading-none ${link.highlight ? "text-transparent bg-clip-text bg-[linear-gradient(110deg,#44c7f6,45%,#ffffff,55%,#0037f0)] animate-shine" : ""}`}>{link.text}</div>
                                                </Link>
                                            )}

                                            {link.isMegaMenuTrigger && (
                                                <MegaMenu
                                                    ref={megaMenuRef}
                                                    isOpen={isMegaMenuOpen}
                                                    onClose={() => setIsMegaMenuOpen(false)}
                                                    position="top"
                                                    onMouseEnter={handleMegaMenuEnter}
                                                    onMouseLeave={handleMegaMenuLeave}
                                                />
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