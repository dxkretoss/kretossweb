import React from 'react';

const posts = [
    {
        category: "Business",
        date: "March 30, 2026",
        title: "Impact with Digital Campaigns",
        desc: "Content marketing serves as a powerful tool for increasing brand visibility and awareness.",
        image: "https://cdn.prod.website-files.com/69c95b070d7e68dff978af81/69ca0057d75fb54a427d82ce_Frame%202147240068.webp",
        link: "/blogs/impact-with-digital-campaigns"
    },
    {
        category: "Design",
        date: "March 30, 2026",
        title: "Visibility via Smart Advertising",
        desc: "Content marketing serves as a powerful tool for increasing brand visibility and awareness.",
        image: "https://cdn.prod.website-files.com/69c95b070d7e68dff978af81/69c9ffdf405268bb0e8341db_Frame%202147240067.webp",
        link: "/blogs/visibility-via-smart-advertising"
    },
    {
        category: "Branding",
        date: "March 30, 2026",
        title: "The Power of a Visual System",
        desc: "Content marketing serves as a powerful tool for increasing brand visibility and awareness.",
        image: "https://cdn.prod.website-files.com/69c95b070d7e68dff978af81/69c9ff2d7ffa18001880f8c2_Frame%202147240066.webp",
        link: "/blogs/the-power-of-a-visual-system"
    }
];

export default function BlogSection() {
    return (
        <section className="blog-section section-padding">
            <div className="w-layout-blockcontainer container w-container">
                <div className="blog-contant-wrapper">
                    <div className="blog-top-contant">
                        <div className="blog-top-left-contant">
                            <div className="gradient-subtitle-box">
                                <div className="gradient-subtitle">
                                    <img 
                                        loading="lazy" 
                                        src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69bb87e98872e9273f75433b_shape.svg" 
                                        alt="Subtitle Star" 
                                        className="subtitle-star" 
                                    />
                                    <div className="section-subtitle-text">Our Blog</div>
                                </div>
                                <div className="gradient-subtitle-shape"></div>
                            </div>
                            <h2 className="blog-top-contant-title">The Studio Journal</h2>
                        </div>
                        <div className="blog-top-right-contant">
                            <div className="blog-top-right-text">Ideas, insights, and perspectives from our work and creative process.</div>
                            <div className="orange-button-box">
                                <a href="/blog" className="orange-button w-inline-block">
                                    <div className="button-content-box">
                                        <div className="button-text-box">
                                            <div className="button-text-front">See all</div>
                                            <div className="button-text-back white">See all</div>
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
                    </div>

                    <div className="featured-blog-post">
                        <div className="blog-collection featured w-dyn-list">
                            <div role="list" className="blog-collection-list w-dyn-items">
                                <div role="listitem" className="blog-collection-item w-dyn-item">
                                    <div className="blog-featured-post">
                                        <div className="blog-mid-left-box">
                                            <div className="blog-mid-buttom-title-box">
                                                <div className="featured-meta-title">
                                                    <div className="featured-top-box">
                                                        <div className="gradient-subtitle-box">
                                                            <div className="gradient-subtitle">
                                                                <div className="section-subtitle-text">Top Story</div>
                                                            </div>
                                                            <div className="gradient-subtitle-shape"></div>
                                                        </div>
                                                        <div className="blog-mid-date-text">March 30, 2026</div>
                                                    </div>
                                                    <div className="mid-text-title-wrapper">
                                                        <h2 className="blog-mid-title">Designing brands with purpose</h2>
                                                        <div className="blog-mid-text">Content marketing serves as a powerful tool for increasing brand visibility and awareness.</div>
                                                    </div>
                                                </div>
                                                <div className="blog-mid-title-text-box">
                                                    <div className="blog-mid-link-button-box">
                                                        <div className="product-button-box">
                                                            <div className="orange-button-box product-button">
                                                                <a href="/contact" className="orange-button product-button w-inline-block">
                                                                    <div className="button-content-box">
                                                                        <div className="button-text-box">
                                                                            <div className="button-text-front product-button">Brand strategy</div>
                                                                            <div className="button-text-back product-button">Brand strategy</div>
                                                                        </div>
                                                                        <div className="button-icon-box _02">
                                                                            <img loading="lazy" src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69a3cbac79af0e495c37fca8_cxczdc.svg" alt="Icon" className="button-front-icon product-button" />
                                                                            <img loading="lazy" src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69a3cbac79af0e495c37fca8_cxczdc.svg" alt="Icon" className="button-back-icon product-button" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="button-shape"></div>
                                                                </a>
                                                                <div className="button-overlay-box black-button"></div>
                                                            </div>
                                                            <div className="orange-button-box product-button">
                                                                <a href="/contact" className="orange-button product-button w-inline-block">
                                                                    <div className="button-content-box">
                                                                        <div className="button-text-box">
                                                                            <div className="button-text-front product-button">identity design</div>
                                                                            <div className="button-text-back product-button">identity design</div>
                                                                        </div>
                                                                        <div className="button-icon-box _02">
                                                                            <img loading="lazy" src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69a3cbac79af0e495c37fca8_cxczdc.svg" alt="Icon" className="button-front-icon product-button" />
                                                                            <img loading="lazy" src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69a3cbac79af0e495c37fca8_cxczdc.svg" alt="Icon" className="button-back-icon product-button" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="button-shape"></div>
                                                                </a>
                                                                <div className="button-overlay-box black-button"></div>
                                                            </div>
                                                        </div>
                                                        <div className="author-by">
                                                            <div className="blog-mid-date-text">BY-</div>
                                                            <div className="blog-mid-date-text">john Doe</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-mid-right-box">
                                            <img 
                                                loading="lazy" 
                                                alt="Blog Mid Image" 
                                                src="https://cdn.prod.website-files.com/69c95b070d7e68dff978af81/69c9fd3922327372d51e4d19_Frame%202147239897.webp" 
                                                sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 939px" 
                                                srcSet="https://cdn.prod.website-files.com/69c95b070d7e68dff978af81/69c9fd3922327372d51e4d19_Frame%202147239897-p-500.webp 500w, https://cdn.prod.website-files.com/69c95b070d7e68dff978af81/69c9fd3922327372d51e4d19_Frame%202147239897-p-800.webp 800w, https://cdn.prod.website-files.com/69c95b070d7e68dff978af81/69c9fd3922327372d51e4d19_Frame%202147239897-p-1080.webp 1080w, https://cdn.prod.website-files.com/69c95b070d7e68dff978af81/69c9fd3922327372d51e4d19_Frame%202147239897-p-1600.webp 1600w, https://cdn.prod.website-files.com/69c95b070d7e68dff978af81/69c9fd3922327372d51e4d19_Frame%202147239897-p-2000.webp 2000w, https://cdn.prod.website-files.com/69c95b070d7e68dff978af81/69c9fd3922327372d51e4d19_Frame%202147239897-p-2600.webp 2600w, https://cdn.prod.website-files.com/69c95b070d7e68dff978af81/69c9fd3922327372d51e4d19_Frame%202147239897-p-3200.webp 3200w, https://cdn.prod.website-files.com/69c95b070d7e68dff978af81/69c9fd3922327372d51e4d19_Frame%202147239897.webp 3242w" 
                                                className="blog-mid-right-image" 
                                            />
                                            <div className="featured-thumbnail-butotn">
                                                <a href="/blogs/designing-brands-with-purpose" className="featured-button w-inline-block">
                                                    <div className="circle-button-text">Read more</div>
                                                    <img 
                                                        src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69ca5c2c522a5ca0486a8193_Primary.png" 
                                                        loading="lazy" 
                                                        alt="Abstract circular shape" 
                                                        className="button-icon-shape" 
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="blog-buttom-contant">
                        <div className="post-collection w-dyn-list">
                            <div role="list" className="post-collection-list w-dyn-items">
                                {posts.map((post, idx) => (
                                    <div key={idx} role="listitem" className="post-collection-item w-dyn-item">
                                        <a href={post.link} className="blog-single-card-box w-inline-block">
                                            <div className="single-card-image-blog">
                                                <div className="single-card-image-box">
                                                    <img 
                                                        loading="lazy" 
                                                        alt="" 
                                                        src={post.image} 
                                                        className="single-card-image" 
                                                    />
                                                </div>
                                                <div className="featured-thumbnail-butotn"></div>
                                            </div>
                                            <div className="blog-card-contant-box">
                                                <div className="single-card-date-box">
                                                    <div className="single-card-date-text">{post.category}</div>
                                                    <div className="single-card-date-text">{post.date}</div>
                                                </div>
                                                <div className="blog-card-title-text">
                                                    <h2 className="single-card-title-blog">{post.title}</h2>
                                                    <div className="single-card-text-blog">{post.desc}</div>
                                                </div>
                                            </div>
                                            <div className="hide-text">This is some text inside of a div block.</div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <img 
                        src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69c8db184a3afd8a87765d86_Group%201597883177.png" 
                        loading="lazy" 
                        alt="Horizontal gradient bar" 
                        className="sectyion-shape" 
                    />
                    <img 
                        src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69c8db184a3afd8a87765d86_Group%201597883177.png" 
                        loading="lazy" 
                        alt="Horizontal gradient bar" 
                        className="sectyion-shape _02" 
                    />
                </div>
            </div>
        </section>
    );
}
