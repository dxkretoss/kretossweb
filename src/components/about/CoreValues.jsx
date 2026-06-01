import React from 'react';

const values = [
    {
        title: "Development",
        desc: "Our growth work process is designed to ensure sustainable and measurable",
        className: "left"
    },
    {
        title: "Team Work",
        desc: "Our Team work process is designed to ensure sustainable and measurable",
        className: "center"
    },
    {
        title: "Innovation",
        desc: "Our Innovation process is designed to ensure sustainable and measurable success",
        className: "right"
    },
    {
        title: "Precision",
        desc: "Our Precision process is designed to ensure sustainable and measurable",
        className: "left"
    },
    {
        title: "Adaptability",
        desc: "Our Adaptability process is designed to ensure sustainable and measurable",
        className: "center"
    },
    {
        title: "Execution",
        desc: "Our Excution is designed to ensure sustainable and measurable success",
        className: "right"
    }
];

export default function CoreValues() {
    return (
        <section className="core-value section-padding">
            <div className="w-layout-blockcontainer container w-container">
                <div className="value-contant-wrapper">
                    <div className="value-top-contant">
                        <div className="buttom-title-wrapper">
                            <div className="gradient-subtitle-box">
                                <div className="gradient-subtitle">
                                    <img 
                                        loading="lazy" 
                                        src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69bb87e98872e9273f75433b_shape.svg" 
                                        alt="Subtitle Star" 
                                        className="subtitle-star" 
                                    />
                                    <div className="section-subtitle-text">Core values</div>
                                </div>
                                <div className="gradient-subtitle-shape"></div>
                            </div>
                            <h3 className="core-value-title">What are our <span className="corevalue-subtitle">core values</span></h3>
                        </div>
                    </div>
                    <div className="value-buttom-contant">
                        {values.map((val, idx) => (
                            <div key={idx} className={`single-card-wrapper ${val.className}`}>
                                <div className="value-single-card-style-box">
                                    <img 
                                        loading="lazy" 
                                        src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69c90d3846893a3b52616a9a_shape.svg" 
                                        alt="Value Style Icon Image" 
                                        className="value-style-icon-image" 
                                    />
                                    <img 
                                        src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69c90e11edeb6f4413ca7caa_Line%20993.png" 
                                        loading="lazy" 
                                        alt="Shape Line Border" 
                                        className="shape-border-line" 
                                    />
                                </div>
                                <div className="value-single-card-title-text-card">
                                    <h3 className="value-card-title">{val.title}</h3>
                                    <div className="value-card-text">{val.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}