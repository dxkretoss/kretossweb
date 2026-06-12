import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedButton from '../ui/AnimatedButton';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
    {
        id: "01",
        title: "Cloud Infrastructure",
        desc: "Scalable and secure cloud architecture optimized for high-demand enterprise applications and 99.9% uptime.",
        image: "/services/cloud_infra.png",
        technologies: [
            { num: "01", name: "AWS" },
            { num: "02", name: "Google Cloud" },
            { num: "03", name: "Azure" },
            { num: "04", name: "Terraform" }
        ]
    },
    {
        id: "02",
        title: "AI & Machine Learning",
        desc: "Scalable and secure cloud architecture optimized for high-demand enterprise applications and 99.9% uptime.",
        image: "/services/ai_ml.png",
        technologies: [
            { num: "01", name: "AWS" },
            { num: "02", name: "Google Cloud" },
            { num: "03", name: "Azure" },
            { num: "04", name: "Terraform" }
        ]
    },
    {
        id: "03",
        title: "Web Development",
        desc: "Scalable and secure cloud architecture optimized for high-demand enterprise applications and 99.9% uptime.",
        image: "/services/web_dev.png",
        technologies: [
            { num: "01", name: "AWS" },
            { num: "02", name: "Google Cloud" },
            { num: "03", name: "Azure" },
            { num: "04", name: "Terraform" }
        ]
    },
    {
        id: "04",
        title: "Mobile App Development",
        desc: "Scalable and secure cloud architecture optimized for high-demand enterprise applications and 99.9% uptime.",
        image: "/services/mobile_app.png",
        technologies: [
            { num: "01", name: "AWS" },
            { num: "02", name: "Google Cloud" },
            { num: "03", name: "Azure" },
            { num: "04", name: "Terraform" }
        ]
    },
    {
        id: "05",
        title: "UI/UX Design",
        desc: "Scalable and secure cloud architecture optimized for high-demand enterprise applications and 99.9% uptime.",
        image: "/services/ui_ux.png",
        technologies: [
            { num: "01", name: "AWS" },
            { num: "02", name: "Google Cloud" },
            { num: "03", name: "Azure" },
            { num: "04", name: "Terraform" }
        ]
    },
    {
        id: "06",
        title: "Cybersecurity",
        desc: "Scalable and secure cloud architecture optimized for high-demand enterprise applications and 99.9% uptime.",
        image: "/services/cybersecurity.png",
        technologies: [
            { num: "01", name: "AWS" },
            { num: "02", name: "Google Cloud" },
            { num: "03", name: "Azure" },
            { num: "04", name: "Terraform" }
        ]
    }
];

export default function ServicesList() {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Animate Title
            gsap.from(".service-list-title", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".service-list-title",
                    start: "top 85%",
                }
            });

            // Iterate through each service row for staggered animations
            const rows = gsap.utils.toArray('.service-row');
            rows.forEach((row, i) => {
                const textCol = row.querySelector('.service-text-col');
                const imgCol = row.querySelector('.service-img-col');
                const techItems = row.querySelectorAll('.tech-item');
                const hugeNumber = row.querySelector('.huge-bg-number');
                const isEven = i % 2 !== 0; // matching logic

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: row,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                });

                // Text slides in
                tl.fromTo(textCol,
                    { x: isEven ? 50 : -50, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                    0
                );

                // Image scales/slides in
                tl.fromTo(imgCol,
                    { x: isEven ? -50 : 50, opacity: 0, scale: 0.95 },
                    { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
                    0.2
                );

                // Tech items stagger in
                if (techItems.length > 0) {
                    tl.fromTo(techItems,
                        { y: 20, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out" },
                        "-=0.4"
                    );
                }

                // Parallax effect on the huge background number
                if (hugeNumber) {
                    gsap.to(hugeNumber, {
                        yPercent: -50,
                        ease: "none",
                        scrollTrigger: {
                            trigger: row,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true
                        }
                    });
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="bg-[#fafcff] py-20 px-6 md:px-12 overflow-hidden relative" ref={containerRef}>


            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Title */}
                <div className="text-center mb-10 service-list-title flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-black/5 border border-black/10 mb-6">
                        <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887be_Star%2018.svg"
                            alt="Star"
                            className="w-3 h-3 animate-[spin_4s_linear_infinite]"
                        />
                        <span className="text-xs text-gray-600 font-medium tracking-widest uppercase mt-0.5">Our Capabilities</span>

                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter">
                        Solutions We Deliver
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="flex flex-col">
                    {servicesData.map((service, index) => {
                        const isEven = index % 2 !== 0;
                        const isLast = index === servicesData.length - 1;

                        return (
                            <React.Fragment key={service.id}>
                                <div className={`service-row relative group flex flex-col lg:flex-row items-center gap-16 lg:gap-24 py-8 ${isEven ? 'lg:flex-row-reverse' : ''}`}>

                                    {/* Text Content Area */}
                                    <div className="service-text-col w-full lg:w-1/2 flex flex-col items-start relative z-10">
                                        {/* Huge Background Number (Parallax with Modern Stroke Style) */}
                                        <div
                                            className="huge-bg-number absolute -top-10 lg:-top-20 right-0 lg:-right-10 text-[180px] font-black pointer-events-none select-none -z-10 leading-none"
                                            style={{
                                                fontFamily: "'Outfit', sans-serif",
                                                color: 'transparent',
                                                WebkitTextStroke: '2px rgba(0, 0, 0, 0.04)'
                                            }}
                                        >
                                            {service.id}
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight relative z-10 drop-shadow-sm">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-lg relative z-10">
                                            {service.desc}
                                        </p>

                                        {/* Hover Gradient Button */}
                                        <AnimatedButton text="LEARN MORE" />
                                    </div>

                                    {/* Image & Tech Area */}
                                    <div className="service-img-col w-full lg:w-1/2 flex flex-col gap-8 relative z-10">

                                        {/* Image Container with Offset Border */}
                                        <div className="relative w-full max-h-[300px] h-[300px] mt-4 lg:ml-4">
                                            {/* Decorative offset border */}
                                            <div className="absolute -inset-4 bg-gradient-to-tr from-[#44c7f6]/20 to-[#0037f0]/20 rounded-3xl -z-10 transform translate-x-2 translate-y-2"></div>

                                            <div className="w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative">
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    loading="lazy"
                                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                                />
                                                {/* Overlay Gradient for contrast */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                            </div>

                                            {/* Floating Decorative Shape */}
                                            <div className={`absolute -top-6 ${isEven ? '-left-6' : '-right-6'} w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center animate-[bounce_4s_infinite]`}>
                                                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#44c7f6] to-[#0037f0]"></div>
                                            </div>
                                        </div>

                                        {/* Tech Grid */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-4">
                                            {service.technologies.map((tech, i) => (
                                                <div key={i} className="tech-item flex items-center justify-between border-b border-gray-200 pb-3 group/tech cursor-pointer hover:border-[#0037f0] transition-colors duration-300">
                                                    <div className="flex items-center gap-4">
                                                        <span className="text-gray-400 font-mono text-sm tracking-widest">{tech.num}</span>
                                                        <span className="text-gray-800 font-bold text-base group-hover/tech:text-[#0037f0] transition-colors duration-300">{tech.name}</span>
                                                    </div>
                                                    <svg className="w-4 h-4 text-gray-400 transform -rotate-45 group-hover/tech:text-[#0037f0] group-hover/tech:translate-x-1 group-hover/tech:-translate-y-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </div>

                                {/* Divider between services */}
                                {!isLast && (
                                    <div className="w-full flex justify-center">
                                        <div className="w-24 h-[1px] bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                                    </div>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
