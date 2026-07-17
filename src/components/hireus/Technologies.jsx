import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, X, Star, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaReact, FaVuejs, FaAngular, FaNodeJs, FaPython, FaPhp, FaLaravel, FaWordpress, FaMagento, FaShopify, FaHtml5, FaAndroid, FaApple, FaSwift
} from 'react-icons/fa';
import {
    SiNextdotjs, SiTailwindcss, SiDjango, SiRubyonrails, SiDotnet, SiFlutter, SiSwift, SiKotlin, SiWoocommerce, SiMongodb, SiNestjs, SiBigcommerce
} from 'react-icons/si';
import PhoneInputModule from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import HireFormModal from './HireFormModal';
const PhoneInput = PhoneInputModule.default ? PhoneInputModule.default : PhoneInputModule;

const techLogos = {
    "React.js": FaReact,
    "Next.js": SiNextdotjs,
    "Vue.js": FaVuejs,
    "Angular": FaAngular,
    "HTML/CSS": FaHtml5,
    "Tailwind CSS": SiTailwindcss,
    "Node.js": FaNodeJs,
    "NestJS": SiNestjs,
    "PHP": FaPhp,
    "Python": FaPython,
    "ASP.NET": SiDotnet,
    "Django": SiDjango,
    "Ruby on Rails": SiRubyonrails,
    "PHP / Laravel": FaLaravel,
    ".NET / C#": SiDotnet,
    "Flutter": SiFlutter,
    "React Native": FaReact,
    "Android": FaAndroid,
    "iOS": FaApple,
    "Kotlin": SiKotlin,
    "Swift": FaSwift,
    "Swift / iOS": SiSwift,
    "Kotlin / Android": SiKotlin,
    "Shopify": FaShopify,
    "WooCommerce": SiWoocommerce,
    "Magento": FaMagento,
    "BigCommerce": SiBigcommerce,
    "WordPress": FaWordpress,
    "MERN Stack": SiMongodb,
    "MEAN Stack": FaAngular,
    "Full Stack PHP": FaPhp,
    "Full Stack Python": FaPython
};

// Mock Data based on screenshots
const techData = [
    {
        id: 1,
        devImage: "/grouppics/ankursir.png",
        tech: "React.js",
        category: "FRONTEND",
        description: "Fast, scalable UIs and single-page applications.",
        devName: "Ankur Kretoss",
        devRole: "SENIOR DEVELOPER",
        rating: 4.9,
        reviews: 128,
        hiredBy: "Alex",
        countryCode: "US",
        country: "USA",
        iconText: "⚛",
        iconColor: "text-[#00d8ff]",
        iconBg: "bg-[#e6faff]",
        skills: ["React.js", "Redux", "TypeScript", "Tailwind CSS", "Next.js", "GraphQL"],
        experience: "6+",
        projects: "45+",
        english: "Fluent"
    },
    {
        id: 2,
        devImage: "/grouppics/chintansir.png",
        tech: "Next.js",
        category: "FRONTEND",
        description: "SEO-friendly, server-rendered React applications.",
        devName: "Chintan Kretoss",
        devRole: "SENIOR DEVELOPER",
        rating: 4.8,
        reviews: 96,
        hiredBy: "Alina",
        countryCode: "DE",
        country: "Germany",
        iconText: "N",
        iconColor: "text-gray-900",
        iconBg: "bg-gray-100",
        skills: ["Next.js", "React", "Node.js", "Vercel", "Server Components", "SEO"],
        experience: "5+",
        projects: "38+",
        english: "Fluent"
    },
    {
        id: 3,
        devImage: "/ourdevs/Raj.png",
        tech: "Vue.js",
        category: "FRONTEND",
        description: "Lightweight, progressive frontend framework.",
        devName: "Raj Kretoss",
        devRole: "TEAM LEAD",
        rating: 5.0,
        reviews: 142,
        hiredBy: "Michael",
        countryCode: "GB",
        country: "UK",
        iconText: "V",
        iconColor: "text-[#41b883]",
        iconBg: "bg-[#ebf8f2]",
        skills: ["Vue.js", "Nuxt.js", "Vuex", "Pinia", "JavaScript", "SCSS"],
        experience: "8+",
        projects: "70+",
        english: "Native"
    },
    {
        id: 4,
        devImage: "/ourdevs/Vishal.png",
        tech: "Angular",
        category: "FRONTEND",
        description: "Enterprise-grade structured web applications.",
        devName: "Vishal Kretoss",
        devRole: "SENIOR DEVELOPER",
        rating: 4.9,
        reviews: 87,
        showHireNow: true,
        iconText: "A",
        iconColor: "text-[#dd1b16]",
        iconBg: "bg-[#fce8e8]",
        skills: ["Angular", "TypeScript", "RxJS", "NgRx", "Jasmine", "Karma"],
        experience: "7+",
        projects: "50+",
        english: "Fluent"
    },
    {
        id: 5,
        devImage: "/ourdevs/Priya.png",
        tech: "HTML/CSS",
        category: "FRONTEND",
        description: "Pixel-perfect, responsive, accessible markup.",
        devName: "Priya Kretoss",
        devRole: "MID-LEVEL DEVELOPER",
        rating: 4.7,
        reviews: 64,
        hiredBy: "Sophie",
        countryCode: "FR",
        country: "France",
        iconText: "</>",
        iconColor: "text-[#e34c26]",
        iconBg: "bg-[#fcece8]",
        skills: ["HTML/CSS", "TypeScript", "Responsive UI", "REST APIs", "Performance Optimization", "Git & CI/CD"],
        experience: "4+",
        projects: "32+",
        english: "Fluent"
    },
    {
        id: 6,
        devImage: "/ourdevs/Harsh.png",
        tech: "Node.js",
        category: "BACKEND",
        description: "High-performance APIs and real-time services.",
        devName: "Harsh Kretoss",
        devRole: "MID-LEVEL DEVELOPER",
        rating: 4.8,
        reviews: 71,
        showHireNow: true,
        iconText: "⬡",
        iconColor: "text-[#339933]",
        iconBg: "bg-[#eaf5ea]",
        skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Redis", "Docker"],
        experience: "4+",
        projects: "40+",
        english: "Fluent"
    },
    {
        id: 7,
        devImage: "/ourdevs/Neha.png",
        tech: "NestJS",
        category: "BACKEND",
        description: "Structured, testable Node.js backends at scale.",
        devName: "Neha Kretoss",
        devRole: "SENIOR DEVELOPER",
        rating: 4.9,
        reviews: 103,
        hiredBy: "David",
        countryCode: "CA",
        country: "Canada",
        iconText: "🐱",
        iconColor: "text-[#ea2845]",
        iconBg: "bg-[#fde9ec]",
        skills: ["NestJS", "TypeScript", "Microservices", "GraphQL", "PostgreSQL", "AWS"],
        experience: "6+",
        projects: "55+",
        english: "Fluent"
    },
    {
        id: 8,
        devImage: "/ourdevs/Kunal.png",
        tech: "PHP",
        category: "BACKEND",
        description: "Reliable web backends, Laravel and custom builds.",
        devName: "Kunal Kretoss",
        devRole: "JUNIOR DEVELOPER",
        rating: 4.6,
        reviews: 38,
        showHireNow: true,
        iconText: "P",
        iconColor: "text-[#777bb4]",
        iconBg: "bg-[#f1f2f8]",
        skills: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML/CSS", "Git"],
        experience: "2+",
        projects: "15+",
        english: "Intermediate"
    },
    {
        id: 9,
        devImage: "/ourdevs/Meet.png",
        tech: "Python",
        category: "BACKEND",
        description: "APIs, automation, data pipelines, and AI backends.",
        devName: "Meet Kretoss",
        devRole: "SENIOR DEVELOPER",
        rating: 4.8,
        reviews: 92,
        hiredBy: "Emma",
        countryCode: "AU",
        country: "Australia",
        iconText: "Py",
        iconColor: "text-[#3776ab]",
        iconBg: "bg-[#eaf4fa]",
        skills: ["Python", "Django", "FastAPI", "Pandas", "PyTorch", "Docker"],
        experience: "5+",
        projects: "40+",
        english: "Fluent"
    },
    {
        id: 10,
        devImage: "/ourdevs/Dhruv.png",
        tech: "ASP.NET",
        category: "BACKEND",
        description: "Secure enterprise applications on the .NET stack.",
        devName: "Dhruv Kretoss",
        devRole: "TEAM LEAD",
        rating: 5.0,
        reviews: 156,
        hiredBy: "James",
        countryCode: "US",
        country: "USA",
        iconText: ".N",
        iconColor: "text-[#512bd4]",
        iconBg: "bg-[#f3f0fb]",
        skills: ["ASP.NET", "C#", "Entity Framework", "Azure", "Microservices", "SQL Server"],
        experience: "9+",
        projects: "80+",
        english: "Fluent"
    },
    {
        id: 11,
        devImage: "/ourdevs/Sneha.png",
        tech: "Flutter",
        category: "MOBILE",
        description: "One codebase, beautiful iOS and Android apps.",
        devName: "Sneha Kretoss",
        devRole: "MID-LEVEL DEVELOPER",
        rating: 4.7,
        reviews: 55,
        showHireNow: true,
        iconText: "F",
        iconColor: "text-[#02569b]",
        iconBg: "bg-[#e6f1f8]",
        skills: ["Flutter", "Dart", "Firebase", "Provider", "iOS", "Android"],
        experience: "3+",
        projects: "25+",
        english: "Fluent"
    },
    {
        id: 12,
        devImage: "/ourdevs/Parth.png",
        tech: "React Native",
        category: "MOBILE",
        description: "Native mobile apps powered by React.",
        devName: "Parth Kretoss",
        devRole: "JUNIOR DEVELOPER",
        rating: 4.5,
        reviews: 29,
        hiredBy: "Olivia",
        countryCode: "GB",
        country: "UK",
        iconText: "⚛",
        iconColor: "text-[#00d8ff]",
        iconBg: "bg-[#e6faff]",
        skills: ["React Native", "Redux", "TypeScript", "Expo", "iOS", "Android"],
        experience: "2+",
        projects: "15+",
        english: "Fluent"
    },
    {
        id: 13,
        devImage: "/ourdevs/Amit.png",
        tech: "Android",
        category: "MOBILE",
        description: "Native Android apps in Kotlin and Java.",
        devName: "Amit Kretoss",
        devRole: "SENIOR DEVELOPER",
        rating: 4.9,
        reviews: 128,
        hiredBy: "Alex",
        countryCode: "US",
        country: "USA",
        iconText: "🤖",
        iconColor: "text-[#3ddc84]",
        iconBg: "bg-[#eafcf2]",
        skills: ["Kotlin", "Java", "Android SDK", "Jetpack", "Coroutines", "Room"],
        experience: "6+",
        projects: "45+",
        english: "Fluent"
    },
    {
        id: 14,
        devImage: "/ourdevs/Rahul.png",
        tech: "iOS",
        category: "MOBILE",
        description: "Polished native iPhone and iPad experiences.",
        devName: "Rahul Kretoss",
        devRole: "SENIOR DEVELOPER",
        rating: 4.8,
        reviews: 96,
        hiredBy: "Alina",
        countryCode: "DE",
        country: "Germany",
        iconText: "🍎",
        iconColor: "text-gray-900",
        iconBg: "bg-gray-100",
        skills: ["Swift", "Objective-C", "iOS SDK", "SwiftUI", "Core Data", "XCode"],
        experience: "5+",
        projects: "38+",
        english: "Fluent"
    },
    {
        id: 15,
        devImage: "/ourdevs/Rohit.png",
        tech: "Kotlin",
        category: "MOBILE",
        description: "Modern, safe Android-first development.",
        devName: "Rohit Kretoss",
        devRole: "TEAM LEAD",
        rating: 5.0,
        reviews: 142,
        hiredBy: "Michael",
        countryCode: "GB",
        country: "UK",
        iconText: "K",
        iconColor: "text-[#7f52ff]",
        iconBg: "bg-[#f5f2ff]",
        skills: ["Kotlin", "Android", "Ktor", "Coroutines", "Jetpack Compose"],
        experience: "8+",
        projects: "70+",
        english: "Native"
    },
    {
        id: 16,
        devImage: "/ourdevs/Pooja.png",
        tech: "Swift",
        category: "MOBILE",
        description: "Fast, native Apple platform development.",
        devName: "Pooja Kretoss",
        devRole: "SENIOR DEVELOPER",
        rating: 4.9,
        reviews: 87,
        showHireNow: true,
        iconText: "S",
        iconColor: "text-[#f05138]",
        iconBg: "bg-[#fdebea]",
        skills: ["Swift", "SwiftUI", "Combine", "iOS", "macOS", "Core Bluetooth"],
        experience: "7+",
        projects: "50+",
        english: "Fluent"
    },
    {
        id: 17,
        devImage: "/ourdevs/Nidhi.png",
        tech: "Shopify",
        category: "E-COMMERCE",
        description: "Custom themes, apps, and Shopify Plus stores.",
        devName: "Nidhi Kretoss",
        devRole: "MID-LEVEL DEVELOPER",
        rating: 4.7,
        reviews: 64,
        hiredBy: "Sophie",
        countryCode: "FR",
        country: "France",
        iconText: "🛍️",
        iconColor: "text-[#95bf47]",
        iconBg: "bg-[#f3f9eb]",
        skills: ["Shopify", "Liquid", "React", "Polaris", "GraphQL", "Tailwind CSS"],
        experience: "4+",
        projects: "32+",
        english: "Fluent"
    },
    {
        id: 18,
        devImage: "/ourdevs/Shruti.png",
        tech: "BigCommerce",
        category: "E-COMMERCE",
        description: "Scalable headless and hosted storefronts.",
        devName: "Shruti Kretoss",
        devRole: "MID-LEVEL DEVELOPER",
        rating: 4.8,
        reviews: 71,
        showHireNow: true,
        iconText: "B",
        iconColor: "text-[#2e5299]",
        iconBg: "bg-[#ebf0f8]",
        skills: ["BigCommerce", "React", "Next.js", "Node.js", "GraphQL", "Headless CMS"],
        experience: "4+",
        projects: "40+",
        english: "Fluent"
    },
    {
        id: 19,
        devImage: "/ourdevs/Karan.png",
        tech: "WooCommerce",
        category: "E-COMMERCE",
        description: "Flexible WordPress-powered online stores.",
        devName: "Karan Kretoss",
        devRole: "SENIOR DEVELOPER",
        rating: 4.9,
        reviews: 103,
        hiredBy: "David",
        countryCode: "CA",
        country: "Canada",
        iconText: "W",
        iconColor: "text-[#96588a]",
        iconBg: "bg-[#f6f2f5]",
        skills: ["WooCommerce", "WordPress", "PHP", "MySQL", "React", "Plugin Dev"],
        experience: "6+",
        projects: "55+",
        english: "Fluent"
    },
    {
        id: 20,
        devImage: "/ourdevs/Mihir.png",
        tech: "Magento",
        category: "E-COMMERCE",
        description: "Enterprise commerce with deep customization.",
        devName: "Mihir Kretoss",
        devRole: "JUNIOR DEVELOPER",
        rating: 4.6,
        reviews: 38,
        showHireNow: true,
        iconText: "M",
        iconColor: "text-[#f26322]",
        iconBg: "bg-[#fdede6]",
        skills: ["Magento", "PHP", "MySQL", "GraphQL", "AWS", "PWA Studio"],
        experience: "2+",
        projects: "15+",
        english: "Intermediate"
    },
    {
        id: 21,
        devImage: "/ourdevs/Darshan.png",
        tech: "WordPress",
        category: "E-COMMERCE",
        description: "Custom themes, plugins, and business sites.",
        devName: "Darshan Kretoss",
        devRole: "SENIOR DEVELOPER",
        rating: 4.8,
        reviews: 92,
        hiredBy: "Emma",
        countryCode: "AU",
        country: "Australia",
        iconText: "W",
        iconColor: "text-[#21759b]",
        iconBg: "bg-[#eaf3f6]",
        skills: ["WordPress", "PHP", "React", "Gutenberg", "MySQL", "SEO"],
        experience: "5+",
        projects: "40+",
        english: "Fluent"
    },
    {
        id: 22,
        devImage: "/ourdevs/Pranav.png",
        tech: "MERN Stack",
        category: "FULL STACK",
        description: "MongoDB, Express, React, Node — end to end.",
        devName: "Pranav Kretoss",
        devRole: "TEAM LEAD",
        rating: 5.0,
        reviews: 156,
        hiredBy: "James",
        countryCode: "US",
        country: "USA",
        iconText: "▲",
        iconColor: "text-green-600",
        iconBg: "bg-green-50",
        skills: ["MongoDB", "Express", "React", "Node.js", "Redux", "TypeScript"],
        experience: "9+",
        projects: "80+",
        english: "Fluent"
    },
    {
        id: 23,
        devImage: "/ourdevs/Akash.png",
        tech: "MEAN Stack",
        category: "FULL STACK",
        description: "Angular-driven full stack JavaScript teams.",
        devName: "Akash Kretoss",
        devRole: "MID-LEVEL DEVELOPER",
        rating: 4.7,
        reviews: 55,
        showHireNow: true,
        iconText: "◆",
        iconColor: "text-red-500",
        iconBg: "bg-red-50",
        skills: ["MongoDB", "Express", "Angular", "Node.js", "TypeScript", "RxJS"],
        experience: "3+",
        projects: "25+",
        english: "Fluent"
    },
    {
        id: 24,
        devImage: "/ourdevs/Vivek.png",
        tech: "Full Stack PHP",
        category: "FULL STACK",
        description: "Laravel/PHP backends with modern frontends.",
        devName: "Vivek Kretoss",
        devRole: "JUNIOR DEVELOPER",
        rating: 4.5,
        reviews: 29,
        hiredBy: "Olivia",
        countryCode: "GB",
        country: "UK",
        iconText: "P+",
        iconColor: "text-[#777bb4]",
        iconBg: "bg-[#f1f2f8]",
        skills: ["PHP", "Laravel", "Vue.js", "MySQL", "Tailwind CSS", "Docker"],
        experience: "2+",
        projects: "15+",
        english: "Fluent"
    },
    {
        id: 25,
        devImage: "/ourdevs/Harmi.png",
        tech: "Full Stack Python",
        category: "FULL STACK",
        description: "Django/FastAPI with React or Vue frontends.",
        devName: "Harmi Kretoss",
        devRole: "SENIOR DEVELOPER",
        rating: 4.9,
        reviews: 128,
        hiredBy: "Alex",
        countryCode: "US",
        country: "USA",
        iconText: "Py+",
        iconColor: "text-yellow-500",
        iconBg: "bg-yellow-50",
        skills: ["Python", "Django", "React", "PostgreSQL", "Docker", "AWS"],
        experience: "6+",
        projects: "45+",
        english: "Fluent"
    }
];

const Technologies = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDev, setSelectedDev] = useState(null);
    const [showHireForm, setShowHireForm] = useState(false);
    const [phone, setPhone] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    // Read page from URL or default to 1
    const currentPage = parseInt(searchParams.get('page') || '1', 10);

    const filters = ["All", "Frontend", "Backend", "Mobile", "E-commerce", "Full Stack"];

    const filteredData = techData.filter(item => {
        const matchesFilter = activeFilter === 'All' || item.category.toLowerCase() === activeFilter.toLowerCase();
        const matchesSearch = item.tech.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });



    const itemsPerPage = 12;
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <section className="py-10 lg:py-20 bg-white relative">
            <div className="container mx-auto px-6 w-layout-blockcontainer container-full-width w-container">

                {/* Header Section */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-[#0037f0] font-bold text-[12px] tracking-[0.15em] uppercase mb-4">Browse Technologies</h3>
                    <h2 className="text-[24px] md:text-[36px] font-semibold text-[#0a1520] mb-4">Find the Right Expertise</h2>
                    <p className="text-[#555] text-[14px] lg:text-base mb-6">
                        From frontend frameworks to full-stack teams hire vetted engineers across every major technology.
                    </p>
                </motion.div>

                {/* Search & Filters */}
                <motion.div
                    className="max-w-4xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="relative mb-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search technologies... e.g. React, Shopify, Python"
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setSearchParams(prev => {
                                    const newParams = new URLSearchParams(prev);
                                    newParams.set('page', '1');
                                    return newParams;
                                }, { replace: true });
                            }}
                            className="h-[44px] w-full py-5 pl-10 pr-6 rounded-2xl border border-gray-200 outline-none focus:border-[#0037f0] focus:ring-4 focus:ring-[#0037f0]/10 transition-all text-lg text-gray-700"
                        />
                    </div>

                    <div className="flex md:justify-center gap-3 overflow-x-auto pb-4 scrollbar-hide" data-lenis-prevent="true">
                        {filters.map(filter => (
                            <button
                                key={filter}
                                onClick={() => {
                                    setActiveFilter(filter);
                                    setSearchParams(prev => {
                                        const newParams = new URLSearchParams(prev);
                                        newParams.set('page', '1');
                                        return newParams;
                                    }, { replace: true });
                                }}
                                className={`whitespace-nowrap shrink-0 px-5 py-1.5 rounded-full font-semibold text-[14px] border transition-all ${activeFilter === filter
                                    ? 'bg-[#0a1520] border-[#0a1520] text-white'
                                    : 'bg-white border-gray-200 text-[#444] hover:border-gray-300 hover:bg-gray-50'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${activeFilter}-${currentPage}-${searchQuery}`}
                        id="technologies-grid"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.05 }
                            },
                            exit: { opacity: 0, transition: { duration: 0.2 } }
                        }}
                    >
                        {paginatedData.map(item => (
                            <motion.div
                                key={item.id}
                                className="bg-white rounded-2xl border border-gray-200 p-3 md:p-6 hover:shadow-xl hover:shadow-[#0037f0]/5 hover:border-blue-100 transition-all duration-300 flex flex-col h-full"
                                variants={{
                                    hidden: { opacity: 0, scale: 0.95, y: 10 },
                                    visible: { opacity: 1, scale: 1, y: 0 }
                                }}
                            >

                                {/* Tech Header */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl ${item.iconBg} ${item.iconColor}`}>
                                        {techLogos[item.tech] ? (
                                            React.createElement(techLogos[item.tech], { className: "w-6 h-6" })
                                        ) : (
                                            item.iconText
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0a1520] text-[17px] leading-tight">{item.tech}</h4>
                                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{item.category}</span>
                                    </div>
                                </div>

                                <p className="text-gray-500 text-[15px] leading-relaxed mb-6 flex-1">
                                    {item.description}
                                </p>

                                {/* Dev Info */}
                                <div className="bg-[#f8faff] rounded-xl p-4 mb-5 border border-blue-50/50">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm bg-gray-100">
                                            <img src={item.devImage} alt={item.devName} className="w-full h-full object-cover grayscale" />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-[#0a1520] text-[15px] leading-tight">{item.devName}</h5>
                                            <span className={`text-[10px] font-black uppercase tracking-wider ${item.devRole.includes('SENIOR') ? 'text-[#0037f0]' :
                                                item.devRole.includes('LEAD') ? 'text-purple-600' :
                                                    item.devRole.includes('MID') ? 'text-[#0ea5e9]' : 'text-orange-500'
                                                }`}>{item.devRole}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <div className="flex text-amber-400">
                                            {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                                        </div>
                                        <span className="font-bold text-gray-800 text-[13px] ml-1">{item.rating}</span>
                                        <span className="text-gray-400 text-[13px]">({item.reviews} reviews)</span>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-stretch gap-2 mt-auto h-11">
                                    {item.showHireNow ? (
                                        <button onClick={() => { setSelectedDev(item); setShowHireForm(true); }} className="h-[44px] flex-1 bg-[#0a1520] text-white font-bold text-[14px] rounded-lg hover:bg-gray-800 transition-colors">
                                            Hire Now
                                        </button>
                                    ) : (
                                        <div className="h-[44px] flex-1 bg-[#eefaf1] text-[#22a04c] rounded-lg border border-[#cbeed5] flex flex-col justify-center px-2.5 overflow-hidden">
                                            <div className="flex items-center gap-1 text-[11.5px] font-bold leading-tight">
                                                <Check className="w-3.5 h-3.5 stroke-[3] shrink-0" />
                                                <span className="truncate">Hired: {item.hiredBy}</span>
                                            </div>
                                            <div className="text-[9.5px] font-bold opacity-80 pl-4.5 mt-0.5 truncate leading-tight flex items-center gap-1">
                                                <img src={`https://flagcdn.com/w20/${item.countryCode.toLowerCase()}.png`} alt={item.countryCode} className="w-3.5 h-auto rounded-[1px] shadow-[0_0_2px_rgba(0,0,0,0.2)]" />
                                                <span>{item.country}</span>
                                            </div>
                                        </div>
                                    )}
                                    <button
                                        onClick={() => setSelectedDev(item)}
                                        className="h-[44px] flex-1 bg-white text-[#0037f0] font-bold text-[14px] rounded-lg border border-gray-200 hover:border-[#0037f0] hover:bg-blue-50 transition-colors flex items-center justify-center"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center mt-8">
                        <div className="inline-flex bg-white rounded-full p-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                            {/* Prev Button */}
                            <button
                                onClick={() => {
                                    if (currentPage > 1) {
                                        setSearchParams(prev => {
                                            const newParams = new URLSearchParams(prev);
                                            newParams.set('page', String(currentPage - 1));
                                            return newParams;
                                        });
                                        const grid = document.getElementById('technologies-grid');
                                        if (grid) {
                                            if (window.lenis) window.lenis.scrollTo(grid, { offset: -100 });
                                            else window.scrollTo({ top: grid.offsetTop - 100, behavior: 'smooth' });
                                        }
                                    }
                                }}
                                disabled={currentPage === 1}
                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            <div className="flex items-center gap-1 px-3 border-x border-gray-100 mx-2">
                                {Array.from({ length: totalPages }).map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            setSearchParams(prev => {
                                                const newParams = new URLSearchParams(prev);
                                                newParams.set('page', String(idx + 1));
                                                return newParams;
                                            });
                                            const grid = document.getElementById('technologies-grid');
                                            if (grid) {
                                                if (window.lenis) window.lenis.scrollTo(grid, { offset: -100 });
                                                else window.scrollTo({ top: grid.offsetTop - 100, behavior: 'smooth' });
                                            }
                                        }}
                                        className={`w-10 h-10 rounded-full font-bold text-[14px] flex items-center justify-center transition-all duration-300 ${currentPage === idx + 1
                                            ? 'bg-gradient-to-tr from-[#2563eb] to-[#3b82f6] text-white shadow-md shadow-blue-500/20 scale-105'
                                            : 'bg-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                                            }`}
                                    >
                                        {idx + 1}
                                    </button>
                                ))}
                            </div>

                            {/* Next Button */}
                            <button
                                onClick={() => {
                                    if (currentPage < totalPages) {
                                        setSearchParams(prev => {
                                            const newParams = new URLSearchParams(prev);
                                            newParams.set('page', String(currentPage + 1));
                                            return newParams;
                                        });
                                        const grid = document.getElementById('technologies-grid');
                                        if (grid) {
                                            if (window.lenis) window.lenis.scrollTo(grid, { offset: -100 });
                                            else window.scrollTo({ top: grid.offsetTop - 100, behavior: 'smooth' });
                                        }
                                    }
                                }}
                                disabled={currentPage === totalPages}
                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedDev && !showHireForm && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                        {/* Backdrop */}
                        <motion.div
                            className="absolute inset-0 bg-[#0a1520]/40 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedDev(null)}
                        ></motion.div>

                        {/* Modal Content */}
                        <motion.div
                            className="bg-white rounded-3xl shadow-2xl w-full max-w-[600px] relative z-10 overflow-hidden flex flex-col max-h-[90vh]"
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.2 }}
                        >
                            {/* Header */}
                            <div className="p-6 pb-3 border-b border-gray-100 flex items-start justify-between relative bg-gradient-to-b from-[#f8faff] to-white">
                                <button
                                    onClick={() => setSelectedDev(null)}
                                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                <div className="flex gap-4 items-center">
                                    <div className="w-16 h-16 sm:w-14 sm:h-14 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-lg shrink-0">
                                        <img src={selectedDev.devImage} alt={selectedDev.devName} className="w-full h-full object-cover grayscale" />
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <div className='flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2 mb-1.5 mt-1 sm:mt-0'>
                                            <h2 className="text-[18px] sm:text-[16px] font-semibold text-[#0a1520] leading-none">{selectedDev.devName}</h2>
                                            <div className="flex flex-wrap items-center gap-1.5">
                                                <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md ${selectedDev.devRole.includes('SENIOR') ? 'bg-blue-50 text-[#0037f0]' :
                                                    selectedDev.devRole.includes('LEAD') ? 'bg-purple-50 text-purple-600' :
                                                        selectedDev.devRole.includes('MID') ? 'bg-sky-50 text-[#0ea5e9]' : 'bg-orange-50 text-orange-500'
                                                    }`}>
                                                    {selectedDev.devRole}
                                                </span>
                                                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-gray-100 text-[#0037f0]">
                                                    {selectedDev.tech}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <div className="flex text-amber-400">
                                                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                                            </div>
                                            <span className="font-bold text-gray-800 text-[12px] ml-1">{selectedDev.rating}</span>
                                            <span className="text-gray-400 text-[12px]">({selectedDev.reviews} reviews)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Body - Scrollable */}
                            <div className="p-6 pt-3 overflow-y-auto" data-lenis-prevent="true">
                                <p className="text-gray-600 text-base sm:text-[14px] leading-relaxed mb-4">
                                    {selectedDev.devName.split(' ')[0]} is a {selectedDev.devRole.toLowerCase()} at Kretoss specializing in {selectedDev.tech}. {selectedDev.description} Experienced with agile teams, daily standups, and direct client communication.
                                </p>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-4">
                                    <div className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-100">
                                        <div className="font-black text-[16px] text-[#0a1520]">{selectedDev.experience}</div>
                                        <div className="text-[12px] sm:text-xs text-gray-500 font-semibold mt-1">Years Experience</div>
                                    </div>
                                    <div className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-100">
                                        <div className="font-black text-[16px] text-[#0a1520]">{selectedDev.projects}</div>
                                        <div className="text-[12px] sm:text-xs text-gray-500 font-semibold mt-1">Projects Delivered</div>
                                    </div>
                                    <div className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-100">
                                        <div className="font-black text-[16px] text-[#0a1520]">{selectedDev.english}</div>
                                        <div className="text-[12px] sm:text-xs text-gray-500 font-semibold mt-1">English</div>
                                    </div>
                                </div>

                                {/* Core Skills */}
                                <div className="mb-4">
                                    <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">Core Skills</h4>
                                    <div className="flex flex-wrap gap-2.5">
                                        {selectedDev.skills.map((skill, i) => (
                                            <div key={i} className="px-4 py-1 rounded-full border border-gray-200 text-gray-600 text-[11px] font-semibold bg-white shadow-sm">
                                                {skill}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Benefits Pill */}
                                <div className="bg-gray-50 rounded-xl px-4 py-2.5 flex items-center gap-3 border border-gray-100 mb-4 text-[13px] sm:text-[14px] font-semibold text-gray-700">
                                    <div className="w-2 h-2 rounded-full bg-green-500 shrink-0"></div>
                                    <span className="leading-snug">Works in your timezone • Daily reporting • NDA protected</span>
                                </div>

                                {/* Footer CTA */}
                                {selectedDev.showHireNow ? (
                                    <button onClick={() => setShowHireForm(true)} className="h-[44px] flex items-center justify-center w-full bg-[#0a1520] text-white font-semibold text-[14px] py-4 rounded-xl hover:bg-gray-800 transition-colors shadow-lg">
                                        Hire {selectedDev.devName.split(' ')[0]} Now
                                    </button>
                                ) : (
                                    <div className="h-[44px] w-full bg-[#eefaf1] text-[#22a04c] font-semibold text-[14px] py-4 rounded-xl border-2 border-[#cbeed5] flex items-center justify-center gap-2">
                                        <Check className="w-5 h-5 stroke-[3]" />
                                        Hired by {selectedDev.hiredBy}
                                        <span className="opacity-70 text-sm ml-2 flex items-center gap-1.5">
                                            <img src={`https://flagcdn.com/w20/${selectedDev.countryCode.toLowerCase()}.png`} alt={selectedDev.countryCode} className="w-4 h-auto rounded-[1px] shadow-[0_0_2px_rgba(0,0,0,0.2)]" />
                                            <span>{selectedDev.country}</span>
                                        </span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Hire Form Modal */}
            <HireFormModal
                isOpen={showHireForm && selectedDev !== null}
                onClose={() => { setShowHireForm(false); setSelectedDev(null); }}
                devName={selectedDev?.devName}
            />
        </section>
    );
};

export default Technologies;
