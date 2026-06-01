import React from 'react';

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
    return (
        <section className="award-section section-padding">
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
