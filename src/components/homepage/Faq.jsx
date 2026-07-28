import React, { useLayoutEffect, useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Reusable FAQ Accordion Item Component
const FaqItem = ({ id, question, answer, dataWId, isActive, onClick }) => {
    return (
        <div 
            data-w-id={dataWId} 
            style={{ "opacity": "0" }} 
            className="single-faq-box"
        >
            <div className="faq-header-box" onClick={onClick} style={{ cursor: "pointer" }}>
                <h2 className="faq-counter-title">{id}. {question}</h2>
                <div className="faq-icon-box">
                    <div className="faq-minus-line"></div>
                    <div className={`faq-plus-line ${isActive ? '' : 'active'}`}></div>
                </div>
            </div>
            <div className={`faq-block-content ${isActive ? 'active' : ''}`}>
                <div className="faq-answer-block">
                    <p className="faq-content-text">{answer}</p>
                </div>
            </div>
        </div>
    );
};

export default function Faq() {
    const [activeIndex, setActiveIndex] = useState("01"); // Initially step 1 is expanded
    const faqRef = useRef(null);

    useEffect(() => {
        const isMobile = window.innerWidth < 992;
        if (isMobile) return;

        const timer = setTimeout(() => {
            if (window.ScrollTrigger) {
                window.ScrollTrigger.refresh();
            }
        }, 300);
        return () => clearTimeout(timer);
    }, [activeIndex]);

    // Accordion data source
    const faqList = [
        {
            id: "01",
            question: "Discovery & Consulation",
            answer: "We begin with a detailed discussion to understand your idea, goals, target audience, and business needs. This helps us align our strategy with your vision.",
        },
        {
            id: "02",
            question: "Research & Planning",
            answer: "We conduct in-depth market research and competitor analysis to create a comprehensive project roadmap, ensuring all technical and business requirements are met.",
        },
        {
            id: "03",
            question: "UI/UX Design",
            answer: "Our design team crafts intuitive, engaging, and visually appealing user interfaces, focusing on seamless user experiences that resonate with your target audience.",
        },
        {
            id: "04",
            question: "Development",
            answer: "We utilize cutting-edge technologies to build scalable, robust, and secure applications. Our agile development process ensures timely delivery and high performance.",
        },
        {
            id: "05",
            question: "Testing & QA",
            answer: "Rigorous testing protocols are implemented across all devices and platforms to identify and resolve any bugs, ensuring a flawless and reliable final product.",
        },
        {
            id: "06",
            question: "Launch & Deployment",
            answer: "We handle the entire deployment process, ensuring a smooth transition to the live environment. We configure servers, set up databases, and monitor the launch.",
        },
        {
            id: "07",
            question: "Post Launch Support",
            answer: "Our commitment doesn't end at launch. We provide ongoing maintenance, regular updates, and technical support to keep your application running smoothly over time.",
        }
    ];

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            // Spin and scale star subtitle icon on viewport entrance
            gsap.fromTo(".faq-title-box .subtitle-image-icon",
                { rotate: 0, scale: 0 },
                {
                    rotate: 116.964,
                    scale: 1,
                    duration: 1.2,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: ".faq-title-box",
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Fade in title box
            gsap.fromTo(".faq-title-box",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".faq-title-box",
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Stagger fade-in FAQ items
            gsap.fromTo(".single-faq-box",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".faq-content-block",
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, faqRef);

        return () => ctx.revert();
    }, []);

    const toggleAccordion = (id) => {
        setActiveIndex(activeIndex === id ? null : id);
    };

    return (
        <>
            <section ref={faqRef} id="Faq" className="faq">
                <div data-w-id="85965d0e-8a67-be96-944f-b4e84a803a48" style={{ "opacity": "0" }} className="faq-title-box">
                    <div className="about-subtitle-box-2">
                        <img 
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887be_Star%2018.svg"
                            alt="Contact Subtitle Icon" 
                            className="subtitle-image-icon"
                            style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate3d(0px, 0px, 0px) rotate(116.964deg)" }} 
                        />
                        <div className="subtitle-text-2">Have a project in mind?</div>
                    </div>
                    <h2 className="faq-section-title">
                        We convert your ideas into reality
                    </h2>
                </div>
                <div className="faq-content-box">
                    <div className="faq-content-block">
                        {faqList.map((item) => (
                            <FaqItem
                                key={item.id}
                                id={item.id}
                                question={item.question}
                                answer={item.answer}
                                dataWId={item.dataWId}
                                isActive={activeIndex === item.id}
                                onClick={() => toggleAccordion(item.id)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}