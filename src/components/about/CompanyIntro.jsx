import React from 'react';

export default function CompanyIntro() {
    return (
        <section className="about-section section-padding">
            <div className="w-layout-blockcontainer container w-container">
                <div className="about-section-content">
                    <img 
                        src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69c8db184a3afd8a87765d86_Group%201597883177.png" 
                        loading="lazy" 
                        alt="Horizontal gradient bar blending colors from blue to orange." 
                        className="sectyion-shape" 
                    />
                    <img 
                        src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69c8db184a3afd8a87765d86_Group%201597883177.png" 
                        loading="lazy" 
                        alt="Horizontal gradient bar blending colors from blue to orange." 
                        className="sectyion-shape _02" 
                    />
                    <div className="about-page-contents">
                        <div className="anout-ticker-block">
                            <div className="single-ticker-block">
                                {[...Array(7)].map((_, i) => (
                                    <img 
                                        key={i}
                                        src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69c8ec89adaca391d1e8d5d1_Mask%20group.svg" 
                                        loading="lazy" 
                                        alt="Single Ticker Logo" 
                                        className="single-ticker-logo" 
                                    />
                                ))}
                            </div>
                            <div className="single-ticker-block">
                                {[...Array(7)].map((_, i) => (
                                    <img 
                                        key={i}
                                        src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69c8ec89adaca391d1e8d5d1_Mask%20group.svg" 
                                        loading="lazy" 
                                        alt="Single Ticker Logo" 
                                        className="single-ticker-logo" 
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="about-middle-box">
                            <h2 className="about-middle-title">
                                We’re focused on scaling <span className="about-page-subtitle">brands to the next level.</span>
                            </h2>
                            <div className="about-page-thumbnail">
                                <a href="/contact" className="about-base w-inline-block">
                                    <img 
                                        src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69c8fbd3887fba8b3fa6feca_Group%202085662821.png" 
                                        loading="lazy" 
                                        sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 795px" 
                                        srcSet="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69c8fbd3887fba8b3fa6feca_Group%202085662821-p-500.png 500w, https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69c8fbd3887fba8b3fa6feca_Group%202085662821.png 795w" 
                                        alt="Circular arrangement of black blocks spelling 'FOREVER NEW COLLECTION'" 
                                        className="base-text" 
                                    />
                                    <div className="base-action-box">
                                        <img 
                                            src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69c8fe1836c2afd901406c02_Vector.svg" 
                                            loading="lazy" 
                                            alt="Icon" 
                                            className="about-base-icon" 
                                        />
                                    </div>
                                </a>
                                <img 
                                    src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69c8eef098116fbca4332e3b_hhhcck.webp" 
                                    loading="lazy" 
                                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 840px" 
                                    srcSet="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69c8eef098116fbca4332e3b_hhhcck-p-500.webp 500w, https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69c8eef098116fbca4332e3b_hhhcck-p-800.webp 800w, https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69c8eef098116fbca4332e3b_hhhcck.webp 840w" 
                                    alt="About Thumbnail Image" 
                                    className="about-thumbnail-image" 
                                />
                                <div className="middle-box-content">
                                    <a href="#" className="about-light-box w-inline-block w-lightbox">
                                        <img 
                                            src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69b7a931b47d359a8b1fb3f6_Frame%202147228617.svg" 
                                            loading="lazy" 
                                            alt="Popup Icon Box" 
                                            className="popup-icon _02" 
                                        />
                                    </a>
                                    <div className="about-devider-line _02"></div>
                                    <div className="popup-box-text _02">See how we advice your business idea</div>
                                </div>
                            </div>
                        </div>

                        <div className="about-content-block">
                            <div className="about-top-title">
                                <h2 className="about-page-title">
                                    We are guiding your <span className="counter-subtitle">excellence business journey</span>
                                </h2>
                                <div className="about-ratting-block type-02">
                                    <div className="ratting-image-box">
                                        <img src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69b7f5c19e3153ce127bdc8d_Ellipse%2021879.svg" loading="lazy" alt="Author Image" className="single-author-image _01" />
                                        <img src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69b7f5c1cba7e2177c148e74_Ellipse%2021880.svg" loading="lazy" alt="Author Image" className="single-author-image _02" />
                                        <img src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69b7f5c0f924d96af1332fb0_Ellipse%2021881.svg" loading="lazy" alt="Author Image" className="single-author-image _03" />
                                        <div className="author-counter">
                                            <div className="author-counter-text">99+</div>
                                        </div>
                                    </div>
                                    <div className="author-title-text">
                                        <div className="counter-authot-title _02"><span className="total-user _02">5k&nbsp;</span>&nbsp;+ Personal Brands Built</div>
                                        <div className="counter-author-text _02">Trusted by creators worldwide</div>
                                    </div>
                                </div>
                            </div>

                            <div className="about-counter-box">
                                <div className="about-counter-thumbnail">
                                    <img 
                                        src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69c9034269c400cc32d3d258_jochxlk.webp" 
                                        loading="lazy" 
                                        sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px" 
                                        srcSet="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69c9034269c400cc32d3d258_jochxlk-p-500.webp 500w, https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69c9034269c400cc32d3d258_jochxlk-p-800.webp 800w, https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69c9034269c400cc32d3d258_jochxlk-p-1080.webp 1080w, https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69c9034269c400cc32d3d258_jochxlk.webp 1200w" 
                                        alt="Thumbnail" 
                                        className="about-box-thumbnail" 
                                    />
                                </div>
                                <div className="about-counter-section">
                                    <div className="about-counter-content">
                                        <div className="about-title-text">
                                            <div className="about-text-button">
                                                <p className="about-box-text _02">
                                                    <span className="about-color-text _02">PixoHut over the past 8 years, worked as a product designer,</span> collaborating with cross- functional teams to create <span className="about-color-text _02">impactful designs that solve real-world problems.</span>
                                                </p>
                                                <div className="orange-button-box">
                                                    <a href="/contact" className="orange-button w-inline-block">
                                                        <div className="button-content-box">
                                                            <div className="button-text-box">
                                                                <div className="button-text-front">Learn more</div>
                                                                <div className="button-text-back white">Learn more</div>
                                                            </div>
                                                            <div className="button-icon-box _02">
                                                                <img loading="lazy" src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69a3cbac79af0e495c37fca8_cxczdc.svg" alt="Icon" className="button-front-icon _02" />
                                                                <img loading="lazy" src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69a3cbac79af0e495c37fca8_cxczdc.svg" alt="Icon" className="button-back-icon _02" />
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="about-counter _02">
                                            {[
                                                { label: "Brand Style", suffix: "+", val: 85 },
                                                { label: "Client Satisfaction", suffix: "%", val: 98 },
                                                { label: "International Creators", suffix: "+", val: 40 },
                                                { label: "Years of Experience", suffix: "+", val: 12 }
                                            ].map((stat, idx) => (
                                                <div key={idx} className="counter-number-box">
                                                    <div className="counter-single-box">
                                                        <div className="counter-block">
                                                            <div className="counter-left-box _02">
                                                                <div className="counter-box-title">{Math.floor(stat.val / 10)}</div>
                                                            </div>
                                                            <div className="counter-right-box _02">
                                                                <div className="counter-box-title">{stat.val % 10}</div>
                                                            </div>
                                                            <h2 className="counter-box-suffix _02">{stat.suffix}</h2>
                                                            {idx !== 3 && (
                                                                <div className="counter-bar">
                                                                    <img loading="lazy" src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69b7e9840453d3a584bd702f_Line%20928.png" alt="img" />
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="counter-subtitle-text counter-number">
                                                            <div className="counter-text _02">{stat.label}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}