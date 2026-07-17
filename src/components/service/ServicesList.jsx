import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedButton from '../ui/AnimatedButton';
import Badge from '../ui/Badge';
import ErpAnimation from './ErpAnimation';
import VibeCodingAnimation from './VibeCodingAnimation';
import MobileAnimation from './MobileAnimation';
import BackendAnimation from './BackendAnimation';
import DataAnimation from './DataAnimation';
import CloudAnimation from './CloudAnimation';
import FrontendAnimation from './FrontendAnimation';
import CmsAnimation from './CmsAnimation';
import {
    FaReact, FaAngular, FaVuejs, FaNodeJs, FaPython,
    FaLaravel, FaJava, FaSwift, FaApple, FaAws,
    FaDigitalOcean, FaWordpress, FaShopify, FaMagento, FaGithub, FaHeart,
    FaDrupal, FaJs, FaChartBar, FaChartLine, FaMicrosoft, FaDatabase, FaCode
} from 'react-icons/fa';
import {
    SiNextdotjs, SiNestjs, SiFlutter, SiKotlin,
    SiPandas, SiGooglecloud, SiBigcommerce, SiSap, SiN8N,
} from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);


const servicesData = [
    {
        id: "01",
        title: "ERP & Automation",
        desc: "Streamline business operations with custom ERP systems and intelligent automation solutions that connect workflows, reduce manual tasks, and improve overall efficiency.",
        isErpAnimation: true,
        technologies: [
            { num: "01", name: "Python", Icon: FaPython },
            { num: "02", name: "SAP", Icon: SiSap },
            { num: "03", name: "Odoo", Icon: FaCode },
            { num: "04", name: "n8n", Icon: SiN8N },
            { num: "05", name: "Power Automate", Icon: FaMicrosoft },
        ],
        link: "/hire-us"
    },

    {
        id: "02",
        title: "Vibe Coding",
        desc: "Accelerate product development with AI-powered coding tools and modern engineering workflows, helping transform ideas into functional, scalable digital products faster.",
        isVibeCodingAnimation: true,
        image: "/services/main_vibecoding.png",
        icon: "/services/icon_vibecoding.png",
        technologies: [
            { num: "01", name: "Cursor", Icon: FaCode },
            { num: "02", name: "GitHub Copilot", Icon: FaGithub },
            { num: "03", name: "Claude Code", Icon: FaCode },
            { num: "04", name: "Lovable", Icon: FaHeart },
            { num: "05", name: "Replit", Icon: FaCode },
        ],
        link: "/hire-us"
    },

    {
        id: "03",
        title: "Mobile App Development",
        desc: "Build fast, intuitive, and scalable mobile applications for iOS and Android that deliver seamless user experiences across devices and support long-term business growth.",
        isMobileAnimation: true,
        image: "/services/main_mobile.png",
        icon: "/services/icon_mobile.png",
        technologies: [
            { num: "01", name: "Flutter", Icon: SiFlutter },
            { num: "02", name: "React Native", Icon: FaReact },
            { num: "03", name: "Swift", Icon: FaSwift },
            { num: "04", name: "iOS", Icon: FaApple },
            { num: "05", name: "Kotlin", Icon: SiKotlin },
        ],
        link: "/hire-us"
    },

    {
        id: "04",
        title: "Backend Systems",
        desc: "Power your applications with secure, scalable backend systems designed to handle complex business logic, APIs, databases, integrations, and growing user demands.",
        isBackendAnimation: true,
        image: "/services/main_backend.png",
        icon: "/services/icon_backend.png",
        technologies: [
            { num: "01", name: "Node.js", Icon: FaNodeJs },
            { num: "02", name: "Python", Icon: FaPython },
            { num: "03", name: "NestJS", Icon: SiNestjs },
            { num: "04", name: "Laravel", Icon: FaLaravel },
            { num: "05", name: "Java", Icon: FaJava },
        ],
        link: "/hire-us"
    },

    {
        id: "05",
        title: "Data Analytics",
        desc: "Turn complex business data into clear, actionable insights with powerful analytics, interactive dashboards, reporting solutions, and intelligent data processing.",
        isDataAnimation: true,
        image: "/services/main_data.png",
        icon: "/services/icon_data.png",
        technologies: [
            { num: "01", name: "Python", Icon: FaPython },
            { num: "02", name: "Pandas", Icon: SiPandas },
            { num: "03", name: "Tableau", Icon: FaChartBar },
            { num: "04", name: "Power BI", Icon: FaChartLine }
        ],
        link: "/hire-us"
    },

    {
        id: "06",
        title: "Cloud Infrastructure",
        desc: "Build secure, scalable, and reliable cloud infrastructure that keeps your applications available, optimized, and ready to handle increasing traffic and business growth.",
        isCloudAnimation: true,
        image: "/services/main_cloud.png",
        icon: "/services/icon_cloud.png",
        technologies: [
            { num: "01", name: "AWS", Icon: FaAws },
            { num: "02", name: "Google Cloud", Icon: SiGooglecloud },
            { num: "03", name: "Azure", Icon: FaMicrosoft },
            { num: "04", name: "Oracle Cloud", Icon: FaDatabase },
            { num: "05", name: "DigitalOcean", Icon: FaDigitalOcean },
        ],
        link: "/hire-us"
    },

    {
        id: "07",
        title: "Frontend Excellence",
        desc: "Create modern, responsive, and high-performance user interfaces that deliver smooth digital experiences while maintaining accessibility, scalability, and fast loading speeds.",
        isFrontendAnimation: true,
        image: "/services/main_frontend.png",
        icon: "/services/icon_frontend.png",
        technologies: [
            { num: "01", name: "React.js", Icon: FaReact },
            { num: "02", name: "Angular", Icon: FaAngular },
            { num: "03", name: "Vue.js", Icon: FaVuejs },
            { num: "04", name: "Next.js", Icon: SiNextdotjs },
            { num: "05", name: "Knockout JS", Icon: FaJs },
        ],
        link: "/hire-us"
    },

    {
        id: "08",
        title: "CMS",
        desc: "Build flexible and easy-to-manage CMS solutions that give your team complete control over content while ensuring strong performance, scalability, and security.",
        isCmsAnimation: true,
        image: "/services/main_cms.png",
        icon: "/services/icon_cms.png",
        technologies: [
            { num: "01", name: "WordPress", Icon: FaWordpress },
            { num: "02", name: "Shopify", Icon: FaShopify },
            { num: "03", name: "Magento", Icon: FaMagento },
            { num: "04", name: "Drupal", Icon: FaDrupal },
            { num: "05", name: "BigCommerce", Icon: SiBigcommerce },
        ],
        link: "/hire-us"
    },
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
        <section className="bg-[#fafcff] py-10 lg:py-20 overflow-hidden relative" ref={containerRef}>
            {/* SVG Definitions for Gradient Icons */}
            <svg width="0" height="0" className="absolute">
                <defs>
                    <linearGradient id="service-tech-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop stopColor="rgb(68, 199, 246)" offset="0%" />
                        <stop stopColor="rgb(0, 55, 240)" offset="100%" />
                    </linearGradient>
                </defs>
            </svg>

            <div className="container mx-auto w-layout-blockcontainer container-full-width relative z-10">
                {/* Section Title */}
                <div className="text-center mb-8 lg:mb-16 service-list-title flex flex-col items-center">
                    <div className='mb-5'>
                        <Badge variant="blue">Our Capabilities</Badge>

                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-semibold text-[#111] tracking-tight">
                        Solutions We Deliver
                    </h2>
                </div>

                {/* Services List */}
                <div className="flex flex-col gap-8 md:gap-15 mt-10">
                    {servicesData.map((service, index) => {
                        const isEven = index % 2 !== 0;

                        return (
                            <div key={service.id} className="service-row relative group flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

                                {/* Text Content Area */}
                                <div className={`service-text-col w-full lg:w-7/12 flex flex-col items-start ${isEven ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'} relative z-10 ${isEven ? 'lg:order-2 lg:pl-8' : 'lg:order-1 lg:pr-8'}`}>
                                    {/* Number & Title Area */}
                                    <div className={`flex flex-row items-end gap-2 mb-3 lg:mb-6 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                                        <div className="text-3xl md:text-5xl font-black bg-gradient-to-br from-[#44c7f6] to-[#0037f0] text-transparent bg-clip-text leading-none drop-shadow-sm">
                                            {service.id}
                                        </div>
                                        <h3 className="text-lg md:text-3xl uppercase font-semibold text-[#111] tracking-tight leading-tight">
                                            {service.title}
                                        </h3>
                                    </div>

                                    <p className={`text-gray-600 text-base md:text-lg leading-relaxed mb-3 lg:mb-6 max-w-lg ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                                        {service.desc}
                                    </p>

                                    {/* Tech Pills */}
                                    <div className={`flex flex-wrap gap-2 sm:gap-3 mb-3 lg:mb-6 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                                        {service.technologies.map((tech, i) => (
                                            <span key={i} className="group flex items-center gap-2 px-3 md:px-5 py-1 md:py-2.5 rounded-full border border-gray-200 bg-white shadow-sm text-[12px] lg:text-sm font-semibold text-gray-800 hover:border-[#0037f0] hover:text-[#0037f0] transition-colors duration-300 cursor-default">
                                                {tech.Icon && <tech.Icon className="w-4 h-4 text-gray-600 group-hover:fill-[url(#service-tech-grad)] group-hover:text-transparent transition-all duration-300" />}
                                                {tech.name}
                                            </span>
                                        ))}
                                    </div>

                                    <AnimatedButton text="HIRE US!" href={service.link || "/hire-us"} />
                                </div>

                                {/* Image Area */}
                                <div className={`service-img-col w-full lg:w-5/12 relative z-10 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                    {service.isErpAnimation ? (
                                        <ErpAnimation />
                                    ) : service.isVibeCodingAnimation ? (
                                        <VibeCodingAnimation />
                                    ) : service.isMobileAnimation ? (
                                        <MobileAnimation />
                                    ) : service.isBackendAnimation ? (
                                        <BackendAnimation />
                                    ) : service.isDataAnimation ? (
                                        <DataAnimation />
                                    ) : service.isCloudAnimation ? (
                                        <CloudAnimation />
                                    ) : service.isFrontendAnimation ? (
                                        <FrontendAnimation />
                                    ) : service.isCmsAnimation ? (
                                        <CmsAnimation />
                                    ) : (
                                        <>
                                            {/* Decorative background circle */}
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#0037f0]/5 to-transparent rounded-full -z-10 blur-2xl"></div>

                                            <div className="relative w-full aspect-[16/11] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform perspective-1000 group-hover:rotate-y-[-2deg] group-hover:rotate-x-[2deg] transition-transform duration-700 ease-out">
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
                                            <div className={`absolute -bottom-6 sm:-bottom-8 ${isEven ? 'right-4 sm:-right-8' : 'left-4 sm:-left-8'} w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-xl sm:rounded-2xl shadow-xl flex items-center justify-center border border-gray-100 animate-[bounce_5s_infinite] overflow-hidden`}>
                                                <img src={service.icon} alt="tech icon" className="w-8 h-8 sm:w-12 sm:h-12 object-contain" />
                                            </div>
                                        </>
                                    )}
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
