import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
    const heroRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Initial states
            gsap.set(".subtitle-box", { opacity: 0, y: 20 });
            gsap.set(".banner-title", { opacity: 0, y: 30 });
            gsap.set(".banner-text", { opacity: 0, y: 30 });
            // gsap.set(".banner-contyent-shape", { opacity: 0, scale: 0.8 });
            gsap.set(".circle-shape-rotate", { opacity: 0, scale: 0.8 });
            gsap.set(".hero-video-box", { opacity: 0, x: 50 });

            const tl = gsap.timeline();

            tl.to(".subtitle-box", { opacity: 1, y: 0, duration: 0.8, ease: "power4.out" })
                .to(".banner-title", { opacity: 1, y: 0, duration: 0.8, ease: "power4.out" }, "-=0.6")
                .to(".banner-text", { opacity: 1, y: 0, duration: 0.8, ease: "power4.out" }, "-=0.6")
                // .to(".banner-contyent-shape", { opacity: 1, scale: 1, duration: 0.8, ease: "power4.out" }, "-=0.6")
                .to(".circle-shape-rotate", { opacity: 1, scale: 1, duration: 0.8, ease: "power4.out" }, "-=0.6")
                .to(".hero-video-box", { opacity: 1, x: 0, duration: 1, ease: "power4.out" }, "-=0.6");

            // Continuous animations
            gsap.to(".circle-shape-rotate", {
                rotate: -360,
                duration: 20,
                repeat: -1,
                ease: "linear"
            });

            // gsap.to(".banner-contyent-shape", {
            //     y: -15,
            //     duration: 2.5,
            //     repeat: -1,
            //     yoyo: true,
            //     ease: "power1.inOut"
            // });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="banner" ref={heroRef}>
            <div className="w-layout-blockcontainer container w-container">
                <div className="banner-content">
                    <div className="banner-left-content">
                        <div className="banner-content-left page-pricing">
                            <div className="banner-subtitle-title page-pricing">
                                <div className="subtitle-box">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69a0119e6fd80f24294ed217_Star%2018.svg"
                                        alt="Subtitle Icon"
                                        className="subtitle-icon"
                                    />
                                    <div className="subtitle-text">About Us</div>
                                </div>
                                <h1 className="banner-title">
                                    A Creative&nbsp;&nbsp;<span className="header-agency-text">Agency,</span> <span className="focused-title">Focused,</span> on growth
                                </h1>
                            </div>
                            <p className="banner-text">We’re a creative design agency crafting meaningful digital experiences for growing brands.</p>
                        </div>
                        <img
                            src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69a0289abdb860693feb3465_Group%202085664929.svg"
                            loading="lazy"
                            alt="Banner Shape"
                            className="banner-contyent-shape"
                        />
                        <img
                            src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69a02bab6028915dad714a7d_Abstract%20Design.svg"
                            loading="lazy"
                            alt="Circle Shape Rotate"
                            className="circle-shape-rotate"
                        />
                    </div>
                    <div className="banner-right-content">
                        <div className="banner-right-box">
                            <div className="hero-video-box page-project">
                                <div className="hero-video-block">
                                    <div className="banner-video page-project w-background-video w-background-video-atom">
                                        <video
                                            id="d28b61c6-ac9f-4876-8dbc-11496b05aee8-video"
                                            loop
                                            autoPlay
                                            muted
                                            playsInline
                                            style={{
                                                backgroundImage: 'url("https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e%2F69a00c7511ef0ec5599f20e3_Untitled%20design_poster.0000000.jpg")',
                                                objectFit: 'cover'
                                            }}
                                        >
                                            <source
                                                src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e%2F69a00c7511ef0ec5599f20e3_Untitled%20design_mp4.mp4"
                                            />
                                            <source
                                                src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e%2F69a00c7511ef0ec5599f20e3_Untitled%20design_webm.webm"
                                            />
                                        </video>
                                        <div className="video-content-year">2026<br /></div>
                                    </div>
                                </div>
                                <div className="video-process-box">
                                    <div className="video-loading-line _01"></div>
                                    <div className="video-loading-line _02"></div>
                                    <div className="video-loading-line _03"></div>
                                    <div className="video-loading-line _04"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}