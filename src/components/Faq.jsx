import React, { useLayoutEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
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

    // Accordion data source
    const faqList = [
        {
            id: "01",
            question: "What service does your company provide?",
            answer: "Our company provides creative digital solutions including web design, branding, UI/UX design, and digital marketing services. We help businesses build strong online presence, improve user experience, and grow their brand through modern and effective strategies.",
            dataWId: "85965d0e-8a67-be96-944f-b4e84a803a53"
        },
        {
            id: "02",
            question: "How long does a typical project take?",
            answer: "A typical project usually takes between two to six weeks, depending on the scope, complexity, and specific requirements. We work closely with clients throughout the process to ensure quality results and timely delivery.",
            dataWId: "85965d0e-8a67-be96-944f-b4e84a803a5e"
        },
        {
            id: "03",
            question: "Do you work with international clients?",
            answer: "Yes, we work with clients from around the world. Our team collaborates remotely using modern communication and project management tools to ensure smooth workflow, clear communication, and successful project delivery regardless of location.",
            dataWId: "85965d0e-8a67-be96-944f-b4e84a803a69"
        },
        {
            id: "04",
            question: "What do you need from me to start a project?",
            answer: "To start a project, we typically need a brief overview of your goals, brand details, project requirements, and any references or ideas you may have. This helps us understand your vision and create a strategy that fits your needs",
            dataWId: "85965d0e-8a67-be96-944f-b4e84a803a74"
        },
        {
            id: "05",
            question: "How does the payment process work?",
            answer: "Our payment process is transparent and straightforward. Payments are typically structured based on project scope and milestones, with clear terms outlined upfront to ensure clarity, flexibility, and mutual trust throughout the engagement.",
            dataWId: "85965d0e-8a67-be96-944f-b4e84a803a7f"
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
                        <div className="subtitle-text-2">Faq</div>
                    </div>
                    <h2 className="faq-section-title">
                        Happy Clients <span className="review-subtitle-2">Observation</span>
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