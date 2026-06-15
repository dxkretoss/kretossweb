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
        image: "/services/main_cloud.png",
        icon: "/services/icon_cloud.png",
        technologies: [
            { num: "01", name: "AWS" },
            { num: "02", name: "Google Cloud" },
            { num: "03", name: "Azure" },
            { num: "04", name: "Terraform" }
        ]
    },
    {
        id: "02",
        title: "Frontend Excellence",
        desc: "Building responsive, lightning-fast user interfaces using modern frameworks and performance-first methodology.",
        image: "/services/main_frontend.png",
        icon: "/services/icon_frontend.png",
        technologies: [
            { num: "01", name: "React.js" },
            { num: "02", name: "Angular" },
            { num: "03", name: "Vue.js" },
            { num: "04", name: "Next.js" }
        ]
    },
    {
        id: "03",
        title: "Backend Systems",
        desc: "Robust server-side logic and sophisticated database management for mission-critical business systems.",
        image: "/services/main_backend.png",
        icon: "/services/icon_backend.png",
        technologies: [
            { num: "01", name: "Node.js" },
            { num: "02", name: "NestJS" },
            { num: "03", name: "Laravel" },
            { num: "04", name: "PostgreSQL" }
        ]
    },
    {
        id: "04",
        title: "Mobile App Development",
        desc: "High-performance native and cross-platform mobile experiences that delight users on every device.",
        image: "/services/main_mobile.png",
        icon: "/services/icon_mobile.png",
        technologies: [
            { num: "01", name: "Flutter" },
            { num: "02", name: "React Native" },
            { num: "03", name: "Swift" },
            { num: "04", name: "Firebase" }
        ]
    },
    {
        id: "05",
        title: "CMS",
        desc: "Flexible CMS solutions for easy content management, scalability, and performance.",
        image: "/services/main_cms.png",
        icon: "/services/icon_cms.png",
        technologies: [
            { num: "01", name: "WordPress" },
            { num: "02", name: "Shopify" },
            { num: "03", name: "Magento" },
            { num: "04", name: "Drupal" }
        ]
    },
    {
        id: "06",
        title: "Data Analytics",
        desc: "Transforming raw data into actionable intelligence through advanced visualization and ML pipelines.",
        image: "/services/main_data.png",
        icon: "/services/icon_data.png",
        technologies: [
            { num: "01", name: "Python" },
            { num: "02", name: "Pandas" },
            { num: "03", name: "Tableau" },
            { num: "04", name: "Power BI" }
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

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: row,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                });

                // Elements fade up instead of sliding in from sides
                tl.fromTo(textCol,
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                    0
                );

                tl.fromTo(imgCol,
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
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
                <div className="text-center mb-16 service-list-title flex flex-col items-center">
                    <div className="about-subtitle-box w-max mb-6" style={{ backgroundColor: 'transparent' }}>
                        <img
                            src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe28879c_Star%2018%20(1).svg"
                            loading="lazy" alt="Subtitle Icon" className="subtitle-image-icon animate-[spin_4s_linear_infinite]"
                            style={{ filter: 'brightness(0)' }}
                        />
                        <span className="text-xs text-gray-800 font-medium tracking-widest uppercase mt-0.5">Our Capabilities</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111] tracking-tight">
                        Solutions We Deliver
                    </h2>
                </div>

                {/* Services List */}
                <div className="flex flex-col gap-15 mt-10">
                    {servicesData.map((service, index) => {
                        const isEven = index % 2 !== 0;

                        return (
                            <div key={service.id} className="service-row relative group flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                                {/* Text Content Area */}
                                <div className={`service-text-col w-full lg:w-1/2 flex flex-col items-start relative z-10 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                    {/* Number & Title Area */}
                                    <div className="flex items-end gap-6 mb-8">
                                        <div className="text-6xl md:text-8xl font-black bg-gradient-to-br from-[#44c7f6] to-[#0037f0] text-transparent bg-clip-text leading-none drop-shadow-sm">
                                            {service.id}
                                        </div>
                                        <h3 className="text-3xl md:text-5xl font-bold text-[#111] tracking-tight leading-tight mb-2">
                                            {service.title}
                                        </h3>
                                    </div>

                                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
                                        {service.desc}
                                    </p>

                                    {/* Tech Pills */}
                                    <div className="flex flex-wrap gap-3 mb-10">
                                        {service.technologies.map((tech, i) => (
                                            <span key={i} className="px-5 py-2.5 rounded-full border border-gray-200 bg-white shadow-sm text-sm font-semibold text-gray-800 hover:border-[#0037f0] hover:text-[#0037f0] transition-colors duration-300 cursor-default">
                                                {tech.name}
                                            </span>
                                        ))}
                                    </div>

                                    <AnimatedButton text="LEARN MORE" href="/contact" />
                                </div>

                                {/* Image Area */}
                                <div className={`service-img-col w-full lg:w-1/2 relative z-10 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>

                                    {/* Decorative background circle */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#0037f0]/5 to-transparent rounded-full -z-10 blur-2xl"></div>

                                    <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform perspective-1000 group-hover:rotate-y-[-2deg] group-hover:rotate-x-[2deg] transition-transform duration-700 ease-out">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                        />

                                        {/* Subtle overlay gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                    </div>

                                    {/* Floating tech element decorative */}
                                    <div className={`absolute -bottom-8 ${isEven ? '-right-8' : '-left-8'} w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-gray-100 animate-[bounce_5s_infinite] overflow-hidden`}>
                                        <img src={service.icon} alt={`${service.title} icon`} className="w-[85%] h-[85%] object-cover rounded-xl" />
                                    </div>

                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
