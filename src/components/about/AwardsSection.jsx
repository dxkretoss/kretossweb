import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const awards = [
    {
        title: "Red Dot Design Award (Product Design)",
        desc: "Excellence in Product Design & Innovation",
        year: "2015",
        Tag: "h2"
    },
    {
        title: "IDEA (International Design Excellence Awards)",
        desc: "Outstanding User Experience",
        year: "2017",
        Tag: "h3"
    },
    {
        title: "Good Design Award (by The Chicago Athenaeum)",
        desc: "For Cutting-Edge Product Design",
        year: "2024",
        Tag: "h3"
    },
    {
        title: "Core77 Design Awards",
        desc: "Elevating Digital & Physical Experiences",
        year: "2025",
        Tag: "h3"
    }
];

export default function AwardsSection() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let ctx = gsap.context(() => {
            gsap.from(".award-button-title-box", {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });
            gsap.from(".single-buttom-contant-wrapper", {
                opacity: 0,
                x: -30,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".award-buttom-contant",
                    start: "top 85%",
                }
            });
            gsap.to(".star-shape, .single-star-shape", {
                rotation: 360,
                duration: 20,
                repeat: -1,
                ease: "linear"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="award-section section-padding" ref={sectionRef}>
            <div className="w-layout-blockcontainer container award-container w-container">
                <div className="award-contant-wrapper">
                    <div className="award-top-contant">
                        <div className="award-button-title-box">
                            <div className="gradient-subtitle-box">
                                <div className="gradient-subtitle">
                                    <img 
                                        loading="lazy" 
                                        src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69bb87e98872e9273f75433b_shape.svg" 
                                        alt="Subtitle Star" 
                                        className="subtitle-star" 
                                    />
                                    <div className="section-subtitle-text">Awards</div>
                                </div>
                                <div className="gradient-subtitle-shape"></div>
                            </div>
                            <h2 className="award-title">Our All Awards <span className="award-subtitle">List</span></h2>
                        </div>
                    </div>
                    <div className="award-buttom-contant">
                        {awards.map((award, idx) => {
                            const TitleTag = award.Tag;
                            return (
                                <div key={idx} className="single-buttom-contant-wrapper">
                                    <div className="award-buttom-text-title-box">
                                        <TitleTag className="award-buttom-title">{award.title}</TitleTag>
                                        <div className="award-buttom-text">{award.desc}</div>
                                    </div>
                                    <div className="award-date-box">
                                        <div className="award-date-text">Year: {award.year}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <img 
                src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69c9404a968ac97c61efbbd3_Frame.png" 
                loading="lazy" 
                alt="Award Stars" 
                className="star-shape" 
            />
            <img 
                src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69c943badee1335e3d6a545e_Vector_42.svg" 
                loading="lazy" 
                alt="Single Star Shape" 
                className="single-star-shape" 
            />
            <img 
                src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69c943badee1335e3d6a545e_Vector_42.svg" 
                loading="lazy" 
                alt="Single Star Shape" 
                className="single-star-shape _02" 
            />
            <img 
                src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69c943badee1335e3d6a545e_Vector_42.svg" 
                loading="lazy" 
                alt="Single Star Shape" 
                className="single-star-shape _03" 
            />
        </section>
    );
}
