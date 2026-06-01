import React from 'react';

const teamMembersTop = [
    {
        name: "Solgan Millik",
        role: "Worer",
        image: "https://cdn.prod.website-files.com/69c95b070d7e68dff978af81/69c962a4c6681f6cd315d9a5_team01%20(8).webp",
        link: "/teams/solgan-millik"
    },
    {
        name: "Flamex Gill",
        role: "Worker",
        image: "https://cdn.prod.website-files.com/69c95b070d7e68dff978af81/69c961880bebdfb6126c3066_team01%20(9).webp",
        link: "/teams/flamex-gill"
    }
];

const teamMembersBottom = [
    {
        name: "Sujana Mendal",
        role: "Worker",
        image: "https://cdn.prod.website-files.com/69c95b070d7e68dff978af81/69c9614a708b546e99e9dbe8_team01%20(10).webp",
        link: "/teams/sujana-mendal"
    },
    {
        name: "Pixel Pauls",
        role: "CTO",
        image: "https://cdn.prod.website-files.com/69c95b070d7e68dff978af81/69c9610495343e8ebec78f56_team01%20(12).webp",
        link: "/teams/pixel-pauls"
    },
    {
        name: "Camron Kiltis",
        role: "Worker",
        image: "https://cdn.prod.website-files.com/69c95b070d7e68dff978af81/69c95f29f9ac118cbb69d811_team01%20(1).webp",
        link: "/teams/camron-kiltis"
    },
    {
        name: "Orsha Gomez",
        role: "Worker",
        image: "https://cdn.prod.website-files.com/69c95b070d7e68dff978af81/69c95ee5a858e3b0a355b0a7_team01%20(4).webp",
        link: "/teams/orsha-gomez"
    }
];

export default function TeamSection() {
    return (
        <section className="team-section section-padding">
            <div className="w-layout-blockcontainer container w-container">
                <div className="team-contant-wrapper">
                    <div className="team-top-contant">
                        <div className="team-left-contant">
                            <div className="team-logo-button-box">
                                <div className="gradient-subtitle-box">
                                    <div className="gradient-subtitle">
                                        <img 
                                            loading="lazy" 
                                            src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69bb87e98872e9273f75433b_shape.svg" 
                                            alt="Subtitle Star" 
                                            className="subtitle-star" 
                                        />
                                        <div className="section-subtitle-text">Our Teams</div>
                                    </div>
                                    <div className="gradient-subtitle-shape"></div>
                                </div>
                                <div className="team-left-title-text-box">
                                    <h2 className="team-title">
                                        Meet our teams that <span className="team-subtitle">professional in this field</span>
                                    </h2>
                                    <div className="team-text">Meet the talented people behind our creative process—designers, strategists, and thinkers working together to bring ideas to life.</div>
                                </div>
                            </div>
                            <div className="orange-button-box">
                                <a href="/team" className="orange-button w-inline-block">
                                    <div className="button-content-box">
                                        <div className="button-text-box">
                                            <div className="button-text-front">Meet the Team</div>
                                            <div className="button-text-back white">Meet the Team</div>
                                        </div>
                                        <div className="button-icon-box _02">
                                            <img 
                                                loading="lazy" 
                                                src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69a3cbac79af0e495c37fca8_cxczdc.svg" 
                                                alt="Icon" 
                                                className="button-front-icon _02" 
                                            />
                                            <img 
                                                loading="lazy" 
                                                src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69a3cbac79af0e495c37fca8_cxczdc.svg" 
                                                alt="Icon" 
                                                className="button-back-icon _02" 
                                            />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="top-right-contant">
                            <div className="team-collection _01 w-dyn-list">
                                <div role="list" className="team-collection-list w-dyn-items">
                                    {teamMembersTop.map((member, idx) => (
                                        <div key={idx} role="listitem" className="team-collection-item w-dyn-item">
                                            <a href={member.link} className="single-team-card w-inline-block">
                                                <div className="single-team-card-image-box">
                                                    <img 
                                                        loading="lazy" 
                                                        alt={member.name} 
                                                        src={member.image} 
                                                        className="single-team-card-image" 
                                                    />
                                                </div>
                                                <div className="team-card-title-text">
                                                    <h3 className="team-card-title">{member.name}</h3>
                                                    <div className="team-card-text">{member.role}</div>
                                                </div>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="team-buttom-contant">
                        <div className="team-collection _02 w-dyn-list">
                            <div role="list" className="team-collection-list _02 w-dyn-items">
                                {teamMembersBottom.map((member, idx) => (
                                    <div key={idx} role="listitem" className="team-collection-item w-dyn-item">
                                        <a href={member.link} className="single-team-card w-inline-block">
                                            <div className="single-team-card-image-box">
                                                <img 
                                                    loading="lazy" 
                                                    alt={member.name} 
                                                    src={member.image} 
                                                    className="single-team-card-image" 
                                                />
                                            </div>
                                            <div className="team-card-title-text">
                                                <h4 className="team-card-title">{member.name}</h4>
                                                <div className="team-card-text">{member.role}</div>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <img src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69c8db184a3afd8a87765d86_Group%201597883177.png" loading="lazy" alt="Shape" className="sectyion-shape" />
                    <img src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69c8db184a3afd8a87765d86_Group%201597883177.png" loading="lazy" alt="Shape" className="sectyion-shape _02" />
                </div>
            </div>
        </section>
    );
}