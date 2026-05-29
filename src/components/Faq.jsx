import React from 'react';

// Reusable FAQ Accordion Item Component
const FaqItem = ({ id, question, answer, dataWId, initiallyActive }) => {
    return (
        <div data-w-id={dataWId} style={{ "opacity": "0" }} className="single-faq-box">
            <div className="faq-header-box">
                <h2 className="faq-counter-title">{id}. {question}</h2>
                <div className="faq-icon-box">
                    <div className="faq-minus-line"></div>
                    <div className={`faq-plus-line ${initiallyActive ? 'active' : ''}`}></div>
                </div>
            </div>
            <div className={`faq-block-content ${initiallyActive ? 'active' : ''}`}>
                <div className="faq-answer-block">
                    <p className="faq-content-text">{answer}</p>
                </div>
            </div>
        </div>
    );
};

export default function Faq() {
    // Accordion data source
    const faqList = [
        {
            id: "01",
            question: "What service does your company provide?",
            answer: "Our company provides creative digital solutions including web design, branding, UI/UX design, and digital marketing services. We help businesses build strong online presence, improve user experience, and grow their brand through modern and effective strategies.",
            dataWId: "85965d0e-8a67-be96-944f-b4e84a803a53",
            initiallyActive: true
        },
        {
            id: "02",
            question: "How long does a typical project take?",
            answer: "A typical project usually takes between two to six weeks, depending on the scope, complexity, and specific requirements. We work closely with clients throughout the process to ensure quality results and timely delivery.",
            dataWId: "85965d0e-8a67-be96-944f-b4e84a803a5e",
            initiallyActive: false
        },
        {
            id: "03",
            question: "Do you work with international clients?",
            answer: "Yes, we work with clients from around the world. Our team collaborates remotely using modern communication and project management tools to ensure smooth workflow, clear communication, and successful project delivery regardless of location.",
            dataWId: "85965d0e-8a67-be96-944f-b4e84a803a69",
            initiallyActive: false
        },
        {
            id: "04",
            question: "What do you need from me to start a project?",
            answer: "To start a project, we typically need a brief overview of your goals, brand details, project requirements, and any references or ideas you may have. This helps us understand your vision and create a strategy that fits your needs",
            dataWId: "85965d0e-8a67-be96-944f-b4e84a803a74",
            initiallyActive: false
        },
        {
            id: "05",
            question: "How does the payment process work?",
            answer: "Our payment process is transparent and straightforward. Payments are typically structured based on project scope and milestones, with clear terms outlined upfront to ensure clarity, flexibility, and mutual trust throughout the engagement.",
            dataWId: "85965d0e-8a67-be96-944f-b4e84a803a7f",
            initiallyActive: false
        }
    ];

    return (
        <>
            <section id="Faq" className="faq">
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
                                initiallyActive={item.initiallyActive}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}