import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FastAverageColor } from 'fast-average-color';
import { hireUsData } from '../data/hireus';
import {
    FaStar, FaChevronLeft, FaChevronRight,
    FaReact, FaAngular, FaVuejs, FaNodeJs, FaPython,
    FaLaravel, FaJava, FaSwift, FaApple, FaAws,
    FaDigitalOcean, FaWordpress, FaShopify, FaMagento,
    FaDrupal, FaJs, FaChartBar, FaChartLine, FaMicrosoft, FaDatabase,
    FaHtml5, FaCss3Alt, FaCode, FaPhp, FaHubspot
} from 'react-icons/fa';
import {
    SiNextdotjs, SiNestjs, SiFlutter, SiKotlin,
    SiPandas, SiGooglecloud, SiBigcommerce,
    SiSupabase, SiSolidity, SiMysql, SiCodeigniter, SiTensorflow
} from 'react-icons/si';
import { ArrowRight } from 'lucide-react';
import AnimatedButton from './ui/AnimatedButton';

const getCountryFlag = (country) => {
    if (!country) return '';
    const flags = {
        'usa': '🇺🇸',
        'united states': '🇺🇸',
        'uk': '🇬🇧',
        'united kingdom': '🇬🇧',
        'australia': '🇦🇺',
        'germany': '🇩🇪',
        'brazil': '🇧🇷',
        'canada': '🇨🇦',
        'uae': '🇦🇪',
        'india': '🇮🇳',
        'singapore': '🇸🇬',
        'switzerland': '🇨🇭',
        'portugal': '🇵🇹',
        'vietnam': '🇻🇳',
        'indonesia': '🇮🇩',
        'sweden': '🇸🇪'
    };
    return flags[country.toLowerCase()] || '🌍';
};

const getTechIcons = (techString) => {
    if (!techString) return [<FaCode />];
    const techMap = {
        'angular': <FaAngular />,
        'node.js': <FaNodeJs />,
        'node js': <FaNodeJs />,
        'html': <FaHtml5 />,
        'css': <FaCss3Alt />,
        'js': <FaJs />,
        'javascript': <FaJs />,
        'react.js': <FaReact />,
        'reactjs': <FaReact />,
        'react': <FaReact />,
        'react native': <FaReact />,
        'supabase': <SiSupabase />,
        'blockchain': <SiSolidity />,
        'python': <FaPython />,
        'vue.js': <FaVuejs />,
        'laravel': <FaLaravel />,
        'ai': <FaChartLine />,
        'bubble': <FaCode />,
        'mysql': <SiMysql />,
        'flutter': <SiFlutter />,
        'ios swift': <FaSwift />,
        'swift': <FaSwift />,
        'shopify': <FaShopify />,
        'codeigniter': <SiCodeigniter />,
        'wordpress': <FaWordpress />,
        'php': <FaPhp />,
        'magento': <FaMagento />,
        'bigcommerce': <SiBigcommerce />,
        'hubspot': <FaHubspot />,
    };

    const techs = techString.split(/[\+,&|-]/).map(t => t.trim().toLowerCase());
    const icons = techs.map(tech => techMap[tech] || <FaCode />);

    const uniqueIcons = [];
    const seen = new Set();
    for (const icon of icons) {
        if (!seen.has(icon.type)) {
            seen.add(icon.type);
            uniqueIcons.push(icon);
        }
    }
    return uniqueIcons;
};


export default function HireUsDetailsPage() {
    const { roleSlug } = useParams();
    const navigate = useNavigate();
    const [role, setRole] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('standard');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', summary: '', budget: '' });
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activePortfolioIndex, setActivePortfolioIndex] = useState(0);
    const [showFeatures, setShowFeatures] = useState(false);
    const [isHourlyPricing, setIsHourlyPricing] = useState(false);
    const [showAllPerfectFor, setShowAllPerfectFor] = useState(false);
    const [requestType, setRequestType] = useState('project');
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const imgRef = useRef(null);
    const [bgColor, setBgColor] = useState('#0f1115');

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
        setIsModalOpen(false);
        setFormData({ name: '', email: '', phone: '', summary: '', budget: '' });
    };

    useEffect(() => {
        setIsLoading(true);
        // Simulate a brief loading period for smoother UX
        const timer = setTimeout(() => {
            const foundRole = hireUsData.find(r => r.slug === roleSlug);
            if (foundRole) {
                setRole(foundRole);
                document.title = `${foundRole.title} | Kretoss Technology`;
            } else {
                setRole(null);
            }
            setIsLoading(false);
        }, 600); // 600ms loading duration

        return () => clearTimeout(timer);
    }, [roleSlug]);

    useEffect(() => {
        if (imgRef.current) {
            const fac = new FastAverageColor();

            const extractColor = async () => {
                try {
                    // Extract color only from the top-left 50x50 pixels to avoid the white mockups
                    const color = await fac.getColorAsync(imgRef.current, {
                        left: 10,
                        top: 10,
                        width: 50,
                        height: 50,
                        algorithm: 'dominant'
                    });
                    setBgColor(color.hex);
                    // Store if it's light or dark for dynamic text colors
                    if (color.isDark) {
                        imgRef.current.dataset.isDark = 'true';
                    } else {
                        imgRef.current.dataset.isDark = 'false';
                    }
                } catch (e) {
                    console.log('Failed to extract color:', e);
                }
            };

            if (imgRef.current.complete) {
                extractColor();
            } else {
                imgRef.current.addEventListener('load', extractColor);
                return () => imgRef.current?.removeEventListener('load', extractColor);
            }
        }
    }, [role?.portfolio, activePortfolioIndex]);

    useEffect(() => {
        const images = role?.images || [];
        if (!images || images.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentImageIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [role?.images]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafcff] relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#44c7f6]/10 to-[#0037f0]/5 rounded-full blur-3xl pointer-events-none"></div>
                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 border-4 border-blue-100 border-t-[#0037f0] rounded-full animate-spin shadow-lg"></div>
                    <p className="mt-6 text-[#0037f0] font-medium tracking-wide animate-pulse">Loading...</p>
                </div>
            </div>
        );
    }

    if (!role) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafcff] relative overflow-hidden px-4">
                {/* Background decorative elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#44c7f6]/10 to-[#0037f0]/5 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0037f0]/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3"></div>

                <div className="relative z-10 flex flex-col items-center text-center max-w-lg transition-all duration-700 ease-out transform translate-y-0 opacity-100">
                    <div className="w-24 h-24 bg-white shadow-xl shadow-blue-900/5 rounded-3xl flex items-center justify-center mb-8 rotate-3 transform transition-transform hover:rotate-6">
                        <svg className="w-12 h-12 text-[#0037f0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0a0a0a] tracking-tight mb-4">
                        Role Not Found
                    </h1>

                    <p className="text-[#62646a] text-lg mb-10 leading-relaxed">
                        Oops! The role you are looking for doesn't exist, has been moved, or the URL is incorrect.
                    </p>

                    <div className="flex items-center gap-4">
                        <AnimatedButton
                            text="BACK TO HOME"
                            href="/"
                            className="!w-auto"
                        />
                    </div>
                </div>
            </div>
        );
    }

    const images = role.images || [];

    const featuresList = role.plans?.[activeTab]?.features || [
        "Functional website/app",
        "API Integration",
        "Speed optimization",
        "Source code included",
        "Revisions included"
    ];
    const faqList = role.faqs || [
        {
            question: `Can you work on my existing Project?`,
            answer: `Yes, absolutely! We can easily take over your existing codebase to fix bugs, refactor code, add new features, or perform performance optimizations. We will perform a brief initial code review to understand the current structure and ensure a smooth continuation.`
        },
        {
            question: "Do you provide backend development as well?",
            answer: "Yes, we offer full-stack development services. We can design databases (MongoDB, PostgreSQL, MySQL), build secure APIs (REST, GraphQL), and develop backend servers using Node.js, Python, or PHP to power your web applications."
        },
        {
            question: "Can you integrate payment gateways into my app?",
            answer: "Yes, we have extensive experience integrating major payment processors like Stripe, PayPal, Razorpay, Apple Pay, Google Pay, and custom merchant accounts with secure checkout flows and webhooks."
        },
        {
            question: "Do you offer AI or advanced features?",
            answer: "Yes, we can build custom AI integrations (OpenAI ChatGPT, Google Gemini APIs, Vector databases), real-time chat systems, push notifications, background tasks, maps, and subscription models."
        },
        {
            question: "How do you handle source code ownership?",
            answer: "Upon project completion and final payment, you will have 100% ownership of the source code. We also sign an NDA (Non-Disclosure Agreement) before starting to protect your intellectual property."
        }
    ];

    const renderTechTerms = () => {
        const title = (role.title || '').toLowerCase();

        if (title.includes('android')) {
            return (
                <div className="space-y-3">
                    <p>Get skilled Developers who are fully focused on your project from start to finish.</p>
                    <p>We help businesses build <strong>Mobile Applications</strong>, <strong>Android apps</strong>, and <strong>custom software</strong> tailored to their unique requirements.</p>
                </div>
            );
        }
        if (title.includes('ios') || title.includes('apple')) {
            return (
                <div className="space-y-3">
                    <p>Get skilled Developers who are fully focused on your project from start to finish.</p>
                    <p>We help businesses build <strong>iOS Applications</strong>, <strong>iPhone & iPad apps</strong>, and <strong>custom mobile software</strong> tailored to their unique requirements.</p>
                </div>
            );
        }
        if (title.includes('flutter') || title.includes('react native') || title.includes('mobile app')) {
            return (
                <div className="space-y-3">
                    <p>Get skilled Developers who are fully focused on your project from start to finish.</p>
                    <p>We help businesses build <strong>Cross-platform mobile apps</strong>, <strong>Hybrid applications</strong>, and <strong>custom software</strong> tailored to their unique requirements.</p>
                </div>
            );
        }
        if (title.includes('shopify') || title.includes('magento') || title.includes('woocommerce') || title.includes('wordpress')) {
            return (
                <div className="space-y-3">
                    <p>Get skilled Developers who are fully focused on your project from start to finish.</p>
                    <p>We help businesses build <strong>eCommerce stores</strong>, <strong>Responsive websites</strong>, and <strong>custom CMS solutions</strong> tailored to their unique requirements.</p>
                </div>
            );
        }
        if (title.includes('laravel') || title.includes('php') || title.includes('node') || title.includes('python')) {
            return (
                <div className="space-y-3">
                    <p>Get skilled Developers who are fully focused on your project from start to finish.</p>
                    <p>We help businesses build <strong>Backend systems</strong>, <strong>Secure APIs</strong>, and <strong>Custom Server Software</strong> tailored to their unique requirements.</p>
                </div>
            );
        }
        return (
            <div className="space-y-3">
                <p>Get skilled Developers who are fully focused on your project from start to finish.</p>
                <p>We help businesses build <strong>Web Applications</strong>, <strong>eCommerce platforms</strong>, and <strong>custom software</strong> tailored to their unique requirements.</p>
            </div>
        );
    };

    const getDeveloperTitle = () => {
        const title = role.title || '';
        let devTitle = title.replace(/^Hire\s+/i, '');
        devTitle = devTitle.replace(/Developers$/i, 'Developer');
        if (devTitle.toLowerCase().includes('react js')) {
            devTitle = 'ReactJs Developer';
        }
        return devTitle;
    };

    const getCleanTechName = () => {
        const title = role.title || '';
        let tech = title.replace(/^Hire\s+/i, '').replace(/\s+Developers?$/i, '').replace(/\s+Web\s+Developer$/i, '');
        if (tech.toLowerCase() === 'ios app') {
            tech = 'iOS';
        }
        return tech;
    };

    return (
        <div className="bg-[#fafcff] min-h-screen py-8 md:py-12">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px] flex flex-col lg:flex-row justify-evenly gap-12">

                {/* Left Content Area */}
                <div className="w-full lg:w-[60%]">

                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-[13px] text-gray-500 font-medium mb-6">
                        <Link to="/" className="hover:text-blue-600 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" data-track-tag="home_icon"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m1.25 6.798 5.907-4.725a1.35 1.35 0 0 1 1.686 0l5.907 4.725M2.6 5.786v7.087c0 .746.604 1.35 1.35 1.35h8.1a1.35 1.35 0 0 0 1.35-1.35V5.786M8 9.468v1.717" vector-effect="non-scaling-stroke"></path></svg></Link>
                        {role.breadcrumbs?.map((crumb, idx) => (
                            <React.Fragment key={idx}>
                                <span>&gt;</span>
                                {idx === role.breadcrumbs.length - 1 ? (
                                    <span className="text-gray-900 font-semibold">{crumb}</span>
                                ) : (
                                    <Link className="hover:text-blue-600 transition-colors">{crumb}</Link>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Gig Title */}
                    <h1 className="text-3xl sm:text-[28px] leading-tight font-semibold text-[#222325] mb-6 capitalize">
                        {role.gigTitle}
                    </h1>

                    {/* Seller Profile Bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                        <div className="flex items-center gap-4">
                            <div className="w-15 h-15 rounded-full overflow-hidden bg-gray-200 shrink-0">
                                <img src={role.seller?.avatar} alt={role.seller?.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-[#222325] text-[15px]">{role.seller?.name}</span>
                                    <span className="text-gray-400 text-sm">|</span>
                                    <span className="text-gray-600 text-[14px]">{role.seller?.title}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="flex text-[#ffb33e] gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className="w-3.5 h-3.5" />
                                        ))}
                                    </div>
                                    <span className="font-bold text-[#222325] text-[15px] ml-1">{role.seller?.rating}</span>
                                    <a href="#reviews" className="text-gray-500 text-[14px] underline cursor-pointer hover:text-blue-600">({role.seller?.reviews} reviews)</a>
                                </div>
                            </div>
                        </div>
                        {role.seller?.ordersInQueue !== undefined && (
                            <div className="flex items-center gap-2 px-3.5 py-1.5 bg-[#f4f6f9] border border-gray-100 rounded-full text-[#62646a] text-xs sm:text-[13px] font-semibold self-start sm:self-auto shadow-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span>{role.seller?.ordersInQueue} Project ongoing</span>
                            </div>
                        )}
                    </div>

                    {role.portfolio && role.portfolio.length > 0 && (() => {
                        const project = role.portfolio[activePortfolioIndex];

                        return (
                            <div className="mb-8">
                                <h2 className="text-[20px] font-bold text-[#222325] mb-4 border-b border-gray-200 pb-2">Our Portfolio</h2>
                                <div className="rounded-[8px] shadow-lg">
                                    {/* Featured View */}
                                    <div className="flex flex-col xl:flex-row gap-3 rounded-[8px] p-2 transition-colors duration-500 h-full" style={{ background: bgColor }}>

                                        <div className="flex flex-col lg:flex-row gap-2 rounded-[8px] overflow-hidden items-stretch w-full">
                                            <div className="w-full lg:w-[60%] relative flex items-center justify-center self-stretch">
                                                <div className="w-full h-full bg-[#1a1d24]">
                                                    <img ref={imgRef} src={project.image} alt={project.title} className="w-full h-full object-cover" crossOrigin="anonymous" />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-[40%] p-4 flex flex-col justify-between self-stretch relative overflow-hidden transition-colors duration-500"
                                                style={{
                                                    background: `
                                                    repeating-linear-gradient(
                                                    to right,
                                                    transparent,
                                                    transparent 12.5%,
                                                    rgba(255,255,255,0.05) 12.5%,
                                                    rgba(255,255,255,0.05) 25%
                                                    ),
                                                    linear-gradient(
                                                    135deg,
                                                    ${bgColor} 0%,
                                                    rgba(0,0,0,0.85) 100%
                                                    )
                                                `,
                                                }}
                                            >
                                                <div>
                                                    <span className="inline-block bg-white/10 text-white/90 text-[12px] rounded-[4px] px-2 py-0.5 mb-4 backdrop-blur-sm border border-white/10">From: {project.date}</span>
                                                    <h3 className="text-[22px] font-bold text-white leading-tight mb-2">{project.title}</h3>
                                                    <p className="text-white text-[14px] leading-[1.6]">
                                                        {project.description}
                                                    </p>
                                                </div>

                                                {/* Stats & Actions */}
                                                <div className="flex flex-col mt-auto pt-8">
                                                    <div className="flex flex-wrap justify-between gap-6 mb-4">
                                                        <div>
                                                            <p className={`text-[#DADADA] text-sm mb-1`}>Project timeline</p>
                                                            <p className={`font-semibold text-base text-white`}>{project.timeline || 'N/A'}</p>
                                                        </div>
                                                        <div>
                                                            <p className={`text-[#DADADA] text-sm mb-1`}>Country</p>
                                                            <p className={`font-semibold text-base flex items-center gap-2 text-white`}>
                                                                {getCountryFlag(project.country)} {project.country || 'N/A'}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap items-center justify-between gap-4 p-3 rounded-[5px] transition-colors duration-500"
                                                        style={{ background: bgColor }}
                                                    >

                                                        <div className='flex gap-2 items-center'>
                                                            <div className="flex items-center -space-x-2 mr-1">
                                                                {getTechIcons(project.techStack || project.category).map((IconElement, i) => (
                                                                    <div key={i} className="w-8 h-8 rounded-full bg-[#111111] flex items-center justify-center border border-gray-600 shadow-sm relative text-white" style={{ zIndex: 10 - i }}>
                                                                        {React.cloneElement(IconElement, { className: "w-4 h-4 object-contain" })}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            {/* Tech Stack Pill */}
                                                            {/* <div className={`hidden md:flex items-center gap-2 font-semibold text-sm sm:text-base ${imgRef.current?.dataset?.isDark === 'true' ? 'text-white' : 'text-black'}`}>
                                                                {project.techStack || project.category}
                                                            </div> */}
                                                        </div>

                                                        {/* View Project Button */}
                                                        {project.slug ? (
                                                            <Link
                                                                to={`/portfolio/${project.slug}`}
                                                                className="flex items-center rounded overflow-hidden transition-colors hover:opacity-80"
                                                                style={{ color: 'black', backgroundColor: 'white' }}
                                                            >
                                                                <div className="px-3 py-3 flex items-center justify-center">
                                                                    <svg
                                                                        width="12"
                                                                        height="12"
                                                                        viewBox="0 0 12 12"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M1 11L11 1M11 1H3.5M11 1V8.5"
                                                                            stroke="currentColor"
                                                                            strokeWidth="1.5"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            </Link>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Thumbnails */}
                                <div className="flex flex-wrap gap-3 mt-4">
                                    {role.portfolio.map((item, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActivePortfolioIndex(idx)}
                                            className={`rounded-[4px] overflow-hidden border-2 transition-all w-24 h-16 ${activePortfolioIndex === idx ? 'border-[#44c7f6]' : 'border-transparent opacity-50 hover:opacity-100'}`}
                                        >
                                            <img src={item.image} alt="Thumbnail" className="w-full rounded-[4px] h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        );
                    })()}

                    {/* Image Slider */}
                    {/* <div className="mb-8 relative rounded-[4px] overflow-hidden group border border-[#efeff0]">
                        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] bg-[#f5f5f5]">
                            {images.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt={`Gig Thumbnail ${idx + 1}`}
                                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out ${currentImageIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                />
                            ))}
                        </div>
                        <button onClick={() => setCurrentImageIndex(prev => prev === 0 ? images.length - 1 : prev - 1)} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-gray-800 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-50 z-20">
                            <FaChevronLeft className="w-4 h-4 -ml-0.5" />
                        </button>
                        <button onClick={() => setCurrentImageIndex(prev => prev === images.length - 1 ? 0 : prev + 1)} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-gray-800 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-50 z-20">
                            <FaChevronRight className="w-4 h-4 -mr-0.5" />
                        </button>
                        <div className="flex justify-center gap-2 mt-4 absolute bottom-4 w-full z-20">
                            {images.map((_, idx) => (
                                <button key={idx} onClick={() => setCurrentImageIndex(idx)} className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === idx ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/80'}`}></button>
                            ))}
                        </div>
                    </div> */}

                    {/* About This Gig */}
                    <div className="mb-8">
                        <h2 className="text-[20px] font-bold text-[#222325] mb-4">About This Service</h2>
                        <div className="text-[#62646a] text-[16px] leading-[1.7] space-y-4">
                            {!role.aboutGig?.intro2 && (
                                <p className="font-semibold text-[#222325] bg-[#fff6cc] inline-block px-1">10+ Years Expert from Kretoss Technology!!</p>
                            )}
                            {role.aboutGig?.intro && (
                                <p dangerouslySetInnerHTML={{ __html: role.aboutGig.intro }} />
                            )}
                            {role.aboutGig?.intro2 && (
                                <p dangerouslySetInnerHTML={{ __html: role.aboutGig.intro2 }} />
                            )}

                            {/* Why Choose Us */}
                            {role.aboutGig?.whyChooseUs && (
                                <div className="pt-2">
                                    <h4 className="font-bold text-[#222325] text-[16px] mb-2">{role.aboutGig?.whyChooseUsTitle || 'Why Choose Me?'}</h4>
                                    <ul className="space-y-1.5 pl-4">
                                        {role.aboutGig.whyChooseUs.map((point, i) => (
                                            <li key={i} className="flex items-start gap-2 text-[15px] text-[#62646a]">
                                                <span className="text-gray-400 mt-1 shrink-0 text-[12px]">•</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Services / What You Get */}
                            {role.aboutGig?.whatYouGet && (
                                <div className="pt-2">
                                    <h4 className="font-bold text-[#222325] text-[16px] mb-2">{role.aboutGig?.whatYouGetTitle || 'Services:'}</h4>
                                    <ul className="space-y-1.5 pl-4">
                                        {role.aboutGig.whatYouGet.map((point, i) => (
                                            <li key={i} className="flex items-start gap-2 text-[15px] text-[#62646a]">
                                                <span className="text-gray-400 mt-1 shrink-0 text-[12px]">•</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {role.aboutGig?.note && (
                                <p className="mt-4 text-[#62646a] text-[15px]">{role.aboutGig.note}</p>
                            )}

                            {role.aboutGig?.availability && (
                                <p className="mt-4 text-[#62646a] text-[15px]">{role.aboutGig.availability}</p>
                            )}
                        </div>
                    </div>

                    {/* Metadata Grid */}
                    {/* <div className="bg-[#0f0f0f] rounded-[8px] p-4 mb-8 shadow-lg">
                        <h2 className="text-[20px] font-bold text-white mb-6 border-b border-gray-300 py-2">Tech Stack & Capabilities</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                            {role.metadata?.platformType && (
                                <div>
                                    <h4 className="text-[#a0aab2] uppercase tracking-wider text-[12px] font-bold mb-2">Platform type</h4>
                                    <p className="text-white font-semibold text-[15px]">{role.metadata.platformType}</p>
                                </div>
                            )}
                            {role.metadata?.programmingLanguage && (
                                <div>
                                    <h4 className="text-[#a0aab2] uppercase tracking-wider text-[12px] font-bold mb-2">Programming language</h4>
                                    <p className="text-white font-semibold text-[15px]">{role.metadata.programmingLanguage}</p>
                                </div>
                            )}
                            {role.metadata?.websiteFeatures && (
                                <div>
                                    <h4 className="text-[#a0aab2] uppercase tracking-wider text-[12px] font-bold mb-2">Features / Purpose</h4>
                                    <p className="text-white font-semibold text-[15px]">{role.metadata.websiteFeatures}</p>
                                </div>
                            )}
                            {role.metadata?.expertise && (
                                <div>
                                    <h4 className="text-[#a0aab2] uppercase tracking-wider text-[12px] font-bold mb-2">Expertise</h4>
                                    <p className="text-white font-semibold text-[15px]">{role.metadata.expertise}</p>
                                </div>
                            )}
                            {role.metadata?.frameworks && (
                                <div>
                                    <h4 className="text-[#a0aab2] uppercase tracking-wider text-[12px] font-bold mb-2">Frameworks</h4>
                                    <p className="text-white font-semibold text-[15px]">{role.metadata.frameworks}</p>
                                </div>
                            )}
                            {role.metadata?.tools && (
                                <div>
                                    <h4 className="text-[#a0aab2] uppercase tracking-wider text-[12px] font-bold mb-2">Tools</h4>
                                    <p className="text-white font-semibold text-[15px]">{role.metadata.tools}</p>
                                </div>
                            )}
                        </div>
                        {role.metadata?.plugins && (
                            <div className="mt-8 pt-6 border-t border-white/10">
                                <h4 className="text-[#a0aab2] uppercase tracking-wider text-[12px] font-bold mb-3">Plugins / Core Tech</h4>
                                <div className="flex flex-wrap gap-2">
                                    {role.metadata.plugins.map((skill, i) => (
                                        <span key={i} className="text-white text-[13px] font-semibold bg-white/10 px-3 py-1.5 rounded-md hover:bg-[#0037f0] hover:text-white transition-colors cursor-default border border-white/5">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div> */}


                    {/* Reviews Section */}
                    <div id="reviews" className="mb-8 scroll-mt-28">
                        <div className="flex items-center justify-between mb-4 pb-4 border-b-2 border-gray-100">
                            <h2 className="text-[20px] font-bold text-[#222325] m-0">Client Reviews</h2>
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-[#222325] text-[16px]">{role.seller?.rating}</span>
                                <div className="flex text-[#ffb33e]">
                                    {[...Array(5)].map((_, i) => <FaStar key={i} className="w-4 h-4" />)}
                                </div>
                                <span className="text-gray-500 text-sm">({role.seller?.reviews})</span>
                            </div>
                        </div>
                        <div className="space-y-5">
                            {role.reviews?.map((review) => (
                                <div key={review.id} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-4">
                                            {review.avatar ? (
                                                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
                                            ) : (
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#44c7f6] to-[#0037f0] flex items-center justify-center text-white font-bold text-[18px] shadow-sm">
                                                    {review.name.charAt(0).toUpperCase()}
                                                </div>
                                            )}
                                            <div>
                                                <h4 className="font-bold text-[#222325] text-[15px] capitalize">{review.name}</h4>
                                                <div className="flex items-center gap-2 text-[13px] text-gray-500 mt-0.5">
                                                    <img src={review.country === 'Singapore' ? "https://flagcdn.com/w20/sg.png" : "https://flagcdn.com/w20/us.png"} alt="Country" className="w-4 h-auto shadow-sm" />
                                                    <span>{review.country}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex  flex-col items-end'>
                                            <div className="flex items-center gap-1.5 text-[#ffb33e]">
                                                {[...Array(Math.floor(review.rating))].map((_, i) => <FaStar key={i} className="w-3.5 h-3.5" />)}
                                                <span className="font-bold text-[#222325] text-[14px] ml-1">{review.rating}/5</span>
                                            </div>

                                            <span className="text-gray-400 text-[13px] font-medium hidden sm:flex items-center gap-1.5">
                                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                {review.date}
                                            </span>
                                        </div>
                                    </div>

                                    <div className='border border-gray-200 mb-4' />
                                    <p className="text-[#62646a] text-[15px] leading-[1.6]  italic">
                                        "{review.comment}"
                                    </p>
                                    {/* <div className="flex items-center gap-6 text-[#222325] text-[14px] font-semibold border-t border-gray-100 pt-4">
                                        <div>
                                            <span className="text-gray-400 block text-[12px] uppercase tracking-wider font-bold mb-0.5">Price</span>
                                            {review.price}
                                        </div>
                                        <div className="w-px h-8 bg-gray-200"></div>
                                        <div>
                                            <span className="text-gray-400 block text-[12px] uppercase tracking-wider font-bold mb-0.5">Duration</span>
                                            {review.duration}
                                        </div>
                                    </div> */}
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* FAQ Section */}
                    <div className="mb-8 scroll-mt-28">
                        <h2 className="text-[20px] font-bold text-[#222325] mb-4">FAQ</h2>
                        <div>
                            {faqList.map((faq, idx) => {
                                const isOpen = openFaqIndex === idx;
                                return (
                                    <div
                                        key={idx}
                                        className="border-b border-gray-200"
                                    >
                                        <button
                                            type="button"
                                            onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                                            className="w-full flex items-center justify-between text-left py-4 font-semibold text-[#404145]  transition-colors text-[16px]"
                                            style={{ fontWeight: 600, fontSize: '16px' }}
                                        >
                                            <span>{faq.question}</span>
                                            <svg
                                                className={`w-4 h-4 text-gray-400 transition-transform duration-200 shrink-0 ml-4 ${isOpen ? 'rotate-180 text-[#0037f0]' : ''}`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[300px] pb-4' : 'max-h-0'}`}
                                        >
                                            <div className="text-[#62646a] text-[15px] leading-[1.6]">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="mb-8">
                        <h2 className="text-[20px] font-bold text-[#222325] mb-4">Related tags</h2>
                        <div className="flex flex-wrap gap-3">
                            {(role.tags || []).map((tag, i) => (
                                <span key={i} className="bg-[#f5f5f5] hover:bg-[#e4e5e7] text-[#62646a] text-[14px] px-4 py-2 rounded-md cursor-pointer transition-colors capitalize">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
                <div className="w-full lg:w-[30%] relative">
                    <div className="sticky top-5 flex flex-col gap-3">

                        {/* Box 1: Project-Based Developer (Fixed Cost / Contract) */}
                        <div className="bg-white border border-gray-200 rounded-[8px] shadow-sm overflow-hidden flex flex-col">
                            {/* Header Bar */}
                            <div className="relative py-1.5 bg-gray-100 border-b border-gray-200 flex items-center justify-center px-12">
                                <h3 className="font-bold text-[#222325] text-[14px] text-center">
                                    Hire Fixed Cost Project Developer
                                </h3>
                            </div>
                            <div className="p-5 bg-white flex flex-col flex-grow">
                                <div className="mb-4 space-y-3">
                                    <p className="text-[#404145] text-[14px] leading-[1.6] capitalize">
                                        {renderTechTerms()}
                                    </p>
                                </div>

                                {/* Continue Button */}
                                <button
                                    onClick={() => {
                                        setRequestType('project');
                                        setIsModalOpen(true);
                                    }}
                                    className="relative h-[40px] w-full bg-black hover:bg-neutral-900 text-white py-2.5 rounded-[4px] text-[14px] font-bold flex items-center justify-center transition-all shadow-sm group"
                                    style={{ fontSize: '14px' }}
                                >
                                    Contact us
                                    <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                        </div>

                        {/* Box 2: Hourly-Based Developer (Flexible Resource) */}
                        <div className="bg-white border border-gray-200 rounded-[8px] shadow-sm overflow-hidden flex flex-col">
                            {/* Header Bar */}
                            <div className="relative py-1.5 bg-gray-100 border-b border-gray-200 flex items-center justify-center px-12">
                                <h3 className="font-bold text-[#222325] text-[14px] text-center">
                                    Hire Hourly Basis / Flexible Developer
                                </h3>
                            </div>
                            <div className="p-5 bg-white flex flex-col flex-grow">
                                <div className="mb-4">
                                    <div className="flex items-center gap-2.5 mb-3">
                                        {role.seller?.avatar ? (
                                            <img
                                                src={role.seller.avatar}
                                                alt={role.seller.name}
                                                className="w-9 h-9 rounded-full object-cover shrink-0 border border-gray-200"
                                            />
                                        ) : (
                                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#44c7f6] to-[#0037f0] flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-sm">
                                                {role.seller?.name?.charAt(0).toUpperCase()}
                                            </div>
                                        )}
                                        <h4 className="font-bold text-[#222325] text-[14px]">Need flexibility when hiring?</h4>
                                    </div>
                                    <p className="text-[#404145] text-[14px] leading-relaxed capitalize">
                                        {`Hire Dedicated ${getCleanTechName()} developers on an hourly basis, part-time, or full-time basis for development, maintenance, support, and feature enhancements.`}
                                    </p>
                                </div>

                                {/* Continue Button */}
                                <button
                                    onClick={() => {
                                        setRequestType('hourly');
                                        setIsModalOpen(true);
                                    }}
                                    className="relative h-[40px] w-full bg-black hover:bg-neutral-900 text-white py-2.5 rounded-[4px] text-[14px] font-bold flex items-center justify-center transition-all shadow-sm group"
                                    style={{ fontSize: '14px' }}
                                >
                                    Get Quote
                                    <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            {/* Guarantee Policy */}
                            <div className="border-t border-gray-200 p-2 bg-gray-50/50 flex items-center justify-center gap-2">
                                <svg className="w-4 h-4 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <span className="text-[12px] text-gray-600 font-medium text-center leading-normal">
                                    If not satisfied with the work, get a full <a href="#" className='underline'>refund.</a>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* Modal */}
            {
                isModalOpen && (
                    <div className="fixed inset-0 bg-[#0a1520]/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
                        <div className="bg-white border border-[#44c7f6]/20 rounded-[8px] w-full max-w-2xl p-6 md:p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-6 right-6 text-gray-500 hover:text-[#0037f0] transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>

                            <h2 className="text-[24px] font-semibold text-[#222325] mb-2">
                                {requestType === 'hourly' ? "Request Hourly Developer Offer" : "Request Project-Based Offer"}
                            </h2>
                            <p className="text-[#62646a] text-[14px] mb-8">
                                {requestType === 'hourly'
                                    ? "Fill out the form below to hire this developer on an hourly basis."
                                    : "Fill out the form below to get a fixed-cost proposal for your project."}
                            </p>
                            <form onSubmit={handleFormSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-[#62646a] mb-2">Name<span className="text-red-500 ml-1">*</span></label>
                                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full h-[40px] bg-white border border-[#e4e5e7] rounded-[4px] px-3 text-[#222325] text-sm placeholder-gray-400 focus:outline-none focus:border-[#1dbf73] transition-colors" placeholder="Enter Your Name" style={{ fontSize: '14px', height: '40px' }} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-[#62646a] mb-2">Email<span className="text-red-500 ml-1">*</span></label>
                                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full h-[40px] bg-white border border-[#e4e5e7] rounded-[4px] px-3 text-[#222325] text-sm placeholder-gray-400 focus:outline-none focus:border-[#1dbf73] transition-colors" placeholder="Enter Your Email" style={{ fontSize: '14px', height: '40px' }} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-[#62646a] mb-2">Phone<span className="text-red-500 ml-1">*</span></label>
                                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full h-[40px] bg-white border border-[#e4e5e7] rounded-[4px] px-3 text-[#222325] text-sm placeholder-gray-400 focus:outline-none focus:border-[#1dbf73] transition-colors" placeholder="Enter Your Number" style={{ fontSize: '14px', height: '40px' }} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-[#62646a] mb-2">Estimated Budget<span className="text-red-500 ml-1">*</span></label>
                                        <select name="budget" value={formData.budget} onChange={handleInputChange} required className={`w-full h-[40px] bg-white border border-[#e4e5e7] rounded-[4px] px-3 text-sm focus:outline-none focus:border-[#1dbf73] transition-colors appearance-none ${formData.budget ? 'text-[#222325]' : 'text-gray-400'}`} style={{ fontSize: '14px', height: '40px' }}>
                                            <option value="" disabled className="text-gray-400 text-sm" style={{ fontSize: '14px' }}>Select Budget Range</option>
                                            <option value="<$5k" className="text-[#222325] text-sm" style={{ fontSize: '14px' }}>&lt;$5k</option>
                                            <option value="$5k-$10k" className="text-[#222325] text-sm" style={{ fontSize: '14px' }}>$5k - $10k</option>
                                            <option value="$10k-$25k" className="text-[#222325] text-sm" style={{ fontSize: '14px' }}>$10k - $25k</option>
                                            <option value="$25k+" className="text-[#222325] text-sm" style={{ fontSize: '14px' }}>$25k+</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-[#62646a] mb-2">Project Summary<span className="text-red-500 ml-1">*</span></label>
                                    <textarea name="summary" value={formData.summary} onChange={handleInputChange} required rows="4" className="w-full bg-white border border-[#e4e5e7] rounded-[4px] px-3 py-2 text-[#222325] text-sm placeholder-gray-400 focus:outline-none focus:border-[#1dbf73] transition-colors resize-none" placeholder="Describe your project briefly..." style={{ fontSize: '14px' }}></textarea>
                                </div>

                                <div className="pt-4 flex justify-end">
                                    <button type="submit"
                                        className="w-full text-white py-3 px-4 rounded-[4px] transition-all duration-300 text-[16px] font-semibold flex items-center justify-center gap-2 border border-[#f8f8f8]"
                                        style={{
                                            background: "linear-gradient(rgb(68, 199, 246), rgb(0, 55, 240))",
                                            fontSize: "16px",
                                            fontWeight: 600,
                                        }}>
                                        Submit Request
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )
            }
        </div >
    );
}
