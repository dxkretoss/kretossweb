import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedButton from '../ui/AnimatedButton';
import Badge from '../ui/Badge';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

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
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        companyName: '',
        projectBudget: '',
        projectDetails: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!formData.fullName || !formData.email || !formData.projectBudget || !formData.projectDetails) {
            toast.error("Please fill in all required fields.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        try {
            setLoading(true);
            const apiUrl = import.meta.env.VITE_API_URL || '';
            const response = await axios.post(`${apiUrl}/v1/kretoss-new/contact`, formData);

            if (response.data.success) {
                toast.success(response.data.message || "Contact form submitted successfully!");
                setFormData({
                    fullName: '',
                    email: '',
                    companyName: '',
                    projectBudget: '',
                    projectDetails: ''
                });
            } else {
                toast.error(response.data.message || "Failed to submit. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("An error occurred while submitting the form.");
        } finally {
            setLoading(false);
        }
    };

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
                <Toaster />
                <div className="container-full-width w-layout-blockcontainer container">
                    <div className="contact-content-wrapper">
                        {/* Contact Form Block */}
                        <div style={{ "opacity": "0" }} className="contact-form-block">
                            <div className="contact-form-wrapper">
                                <div className="contact-form-wrapper-dev">
                                    <div className="contact-form-box w-form">
                                        <form onSubmit={handleSubmit} name="email-form" data-name="Email Form" className="contact-form" aria-label="Email Form">


                                            <div className="contact-group">
                                                <div className="single-contact-group">
                                                    <label htmlFor="fullName" className="contact-label">Full Name*</label>
                                                    <input className="contact-input w-input" maxLength="256" name="fullName"
                                                        value={formData.fullName} onChange={handleChange}
                                                        data-name="Name" placeholder="Enter Your Name" type="text" id="fullName" required />
                                                </div>

                                                <div className="single-contact-group">
                                                    <label htmlFor="email" className="contact-label">Email*</label>
                                                    <input className="contact-input w-input" maxLength="256" name="email" data-name="Email"
                                                        value={formData.email} onChange={handleChange}
                                                        placeholder="Enter Your Email" type="email" id="email" required />
                                                </div>
                                            </div>

                                            <div className="contact-group">
                                                <div className="single-contact-group">
                                                    <label htmlFor="companyName" className="contact-label">Company name</label>
                                                    <input className="contact-input w-input" maxLength="256" name="companyName"
                                                        value={formData.companyName} onChange={handleChange}
                                                        data-name="Company Name" placeholder="Enter name" type="text" id="companyName" />
                                                </div>
                                                <div className="single-contact-group">
                                                    <label htmlFor="projectBudget" className="contact-label">Project budget*</label>
                                                    <select id="projectBudget" name="projectBudget" value={formData.projectBudget} onChange={handleChange} data-name="Project budget" className="contact-input input-dropdown w-select !py-0" required>
                                                        <option value="">Select Your Range</option>
                                                        {budgetOptions.map(opt => (
                                                            <option key={opt.value} value={opt.label}>{opt.label}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="single-contact-group">
                                                <label htmlFor="projectDetails" className="contact-label">Projects Details*</label>
                                                <textarea placeholder="Tell us more about your idea" maxLength="5000" id="projectDetails" name="projectDetails" data-name="Project Details"
                                                    value={formData.projectDetails} onChange={handleChange}
                                                    className="textarea w-input" required></textarea>
                                            </div>

                                            <div className="contact-button-text">
                                                <div className="form-button">
                                                    <div className="button-text-wrapper _02">
                                                        <input type="submit" disabled={loading} data-wait="Please wait..." className="button-front-text form-text w-button" value={loading ? "Sending..." : "let’s work together"} style={{ cursor: loading ? "not-allowed" : "pointer" }} />
                                                    </div>
                                                </div>
                                                <div className="contact-call-box">
                                                    <div className="contact-call-text">Not in the mood to submit the from?</div>
                                                    <a href="/Contact" className="call-link w-inline-block">
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