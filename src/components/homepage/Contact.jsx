import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedButton from '../ui/AnimatedButton';
import Badge from '../ui/Badge';

gsap.registerPlugin(ScrollTrigger);

// SplitText helper for dynamic GSAP word/letter layouts inside Contact
const SplitText = ({ text, wordClassPrefix = "gsap_split_word", letterClassPrefix = "gsap_split_letter", startIndex = 1, letterStyle }) => {
    const words = text.split(" ");
    let globalLetterIdx = startIndex;

    const defaultStyle = letterStyle || {
        position: "relative",
        display: "inline-block",
        opacity: "0",
        translate: "none",
        rotate: "none",
        scale: "none",
        transform: "translate3d(20px, 0px, 0px) scale(0.8)"
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
                                        style={defaultStyle}
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

export default function Contact() {
    const contactRef = useRef(null);

    // Dropdown and form configuration
    const budgetOptions = [
        { value: "First", label: "1000$ - 5000$" },
        { value: "Second", label: "5000$ - 15000$" },
        { value: "Third", label: "15000$ - 30000$" },
        { value: "Fourth", label: "30000$ - 50000$" },
    ];

    useLayoutEffect(() => {
        let ctx;
        const timer = setTimeout(() => {
            gsap.registerPlugin(ScrollTrigger);
            ctx = gsap.context(() => {
                // Scale star subtitle icon on viewport entrance
                gsap.fromTo(".contact-about-block .subtitle-image-icon",
                    { scale: 0 },
                    {
                        scale: 1,
                        duration: 1.2,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: ".contact-about-block",
                            start: "top 90%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );

                // Continuous spin for the subtitle star icon
                gsap.to(".contact-about-block .subtitle-image-icon", {
                    rotate: 360,
                    ease: "none",
                    duration: 10,
                    repeat: -1,
                });

                // Stagger fade-in/slide up for form block and about block
                gsap.fromTo(".contact-form-block",
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: ".contact-form-block",
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".contact-about-block",
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                });

                tl.fromTo(".contact-about-block",
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
                );

                // Animate SplitText characters in title (slide left + scale up)
                const titleLetters = contactRef.current.querySelectorAll(".contact-title-02 .gsap_split_letter");
                tl.fromTo(titleLetters,
                    { opacity: 0, x: 20, scale: 0.8 },
                    { opacity: 1, x: 0, scale: 1, duration: 0.8, stagger: 0.02, ease: "power4.out" },
                    "-=0.7"
                );

                tl.fromTo(".contact-text",
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
                    "-=0.5"
                );

                // Stagger zoom-in star review ratings inside badge
                tl.fromTo(".hero-icon-rating._02",
                    { opacity: 0, scale: 0.8 },
                    { opacity: 1, scale: 1, duration: 0.6, ease: "power4.out" },
                    "-=0.4"
                );

                const ratingStars = contactRef.current.querySelectorAll(".hero-icon-rating._02 .single-review-star");
                tl.fromTo(ratingStars,
                    { scale: 0 },
                    { scale: 1, duration: 0.5, stagger: 0.06, ease: "back.out(1.5)" },
                    "-=0.2"
                );

                // Loop rotation on decorative background star shape
                gsap.to(".contact-shape-icon", {
                    rotate: 360,
                    ease: "none",
                    duration: 25,
                    repeat: -1,
                });

            }, contactRef);
        }, 100);

        return () => {
            clearTimeout(timer);
            if (ctx) ctx.revert();
        };
    }, []);

    return (
        <>
            <section ref={contactRef} id="Contact" className="contact">
                <div className="container-full-width w-layout-blockcontainer container">
                    <div className="contact-content-wrapper">
                        {/* Contact Form Block */}
                        <div style={{ "opacity": "0" }} className="contact-form-block">
                            <div className="contact-form-wrapper">
                                <div className="contact-form-wrapper-dev">
                                    <div className="contact-form-box w-form">
                                        <form id="email-form" name="email-form" data-name="Email Form" method="get"
                                            className="contact-form" data-wf-page-id="6996a337655d586ffe288774"
                                            data-wf-element-id="b09bb3e0-8acd-7f5d-cd42-fa88661e496a" aria-label="Email Form">

                                            <div className="single-contact-group">
                                                <label htmlFor="Name" className="contact-label">Full Name</label>
                                                <input className="contact-input w-input" maxLength="256" name="Name"
                                                    data-name="Name" placeholder="Enter Your Name" type="text" id="Name" />
                                            </div>

                                            <div className="contact-group">
                                                <div className="single-contact-group">
                                                    <label htmlFor="Company-Name" className="contact-label">Company name</label>
                                                    <input className="contact-input w-input" maxLength="256" name="Company-Name"
                                                        data-name="Company Name" placeholder="Enter name" type="text" id="Company-Name" />
                                                </div>
                                                <div className="single-contact-group">
                                                    <label htmlFor="email" className="contact-label">Email*</label>
                                                    <input className="contact-input w-input" maxLength="256" name="email" data-name="Email"
                                                        placeholder="Enter Your Email" type="email" id="email" />
                                                </div>
                                            </div>

                                            <div className="contact-group">
                                                <div className="single-contact-group">
                                                    <label htmlFor="Services-1" className="contact-label" >Services required*</label>
                                                    <select id="Services-1" name="Services" data-name="Services" className="contact-input input-dropdown w-select !py-0" defaultValue="">
                                                        <option value="" disabled>Select Your Service</option>
                                                        <option value="UI/UX Design" className="bg-[#0f0f0f] text-white">UI/UX Design</option>
                                                        <option value="Web Development" className="bg-[#0f0f0f] text-white">Web Development</option>
                                                        <option value="App Development" className="bg-[#0f0f0f] text-white">App Development</option>
                                                    </select>
                                                </div>
                                                <div className="single-contact-group">
                                                    <label htmlFor="field-2" className="contact-label">Project budget*</label>
                                                    <select id="field-2" name="field-2" data-name="Field 2" className="contact-input input-dropdown w-select !py-0">
                                                        <option value="">Select Your Range</option>
                                                        {budgetOptions.map(opt => (
                                                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="single-contact-group">
                                                <label htmlFor="field" className="contact-label">Projects Details*</label>
                                                <textarea placeholder="Tell us more about your idea" maxLength="5000" id="field" name="field" data-name="Field"
                                                    className="textarea w-input"></textarea>
                                            </div>

                                            <div className="contact-button-text">
                                                <div className="form-button">
                                                    <div className="button-text-wrapper _02">
                                                        <input type="submit" data-wait="Please wait..." className="button-front-text form-text w-button" value="let’s work together" />
                                                    </div>
                                                </div>
                                                <div className="contact-call-box">
                                                    <div className="contact-call-text">Not in the mood to submit the from?</div>
                                                    <a href="/#Contact" className="call-link w-inline-block">
                                                        <div>Book A Call Directly</div>
                                                    </a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Author / Intro Block */}
                        <div style={{ "opacity": "0" }} className="contact-about-block">
                            <div className="contact-title-text">
                                <div className="contact-title-subtitle">
                                    <Badge variant='blue'>Project idea</Badge>

                                    <h2 className="title contact-title-02" aria-label="Have A Project Idea In Mind?">
                                        <SplitText text="Have A Project Idea In" startIndex={1} />{' '}
                                        <span className="review-subtitle-2">
                                            <SplitText text="Mind?" startIndex={19} />
                                        </span>
                                    </h2>
                                </div>
                                <div className="contact-text">We'll schedule a call to discuss your idea. After discovery sessions,
                                    we'll send a proposal, and upon approval, we'll get started.</div>

                                <AnimatedButton href="https://calendly.com/ankur-k-kretoss/30min" text="BOOK A CALL"
                                    target="_blank"></AnimatedButton>
                            </div>

                            <div className="contact-author-review">
                                <div className="contact-auhtor-box">

                                    <div className="author-image-box">
                                        <img src="/grouppics/ankursir.png"
                                            loading="lazy" alt="Author Image" className="author-image" />
                                    </div>
                                </div>
                                <div className="author-title-designation">
                                    <h3 className="author-title">Ankur Patel</h3>
                                    <div className="author-designation">CEO & Founder</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Shape */}
                {/* <div className="contact-shape-block" style={{ overflow: "hidden" }}>
                    <img
                        src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b0f8518b8df300bcd021c1_emojistar%202%20(1).svg"
                        loading="lazy" alt="Icon" className="contact-shape-icon"
                        style={{ "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d" }}
                    />
                </div> */}
            </section>
        </>
    );
}