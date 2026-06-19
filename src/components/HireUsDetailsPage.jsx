import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FastAverageColor } from 'fast-average-color';
import { hireUsData } from '../data/hireus';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function HireUsDetailsPage() {
    const { roleSlug } = useParams();
    const navigate = useNavigate();
    const [role, setRole] = useState(null);
    const [activeTab, setActiveTab] = useState('standard');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', summary: '', budget: '' });
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activePortfolioIndex, setActivePortfolioIndex] = useState(0);
    const [showFeatures, setShowFeatures] = useState(false);
    const [isHourlyPricing, setIsHourlyPricing] = useState(false);

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
        const foundRole = hireUsData.find(r => r.slug === roleSlug);
        if (foundRole) {
            setRole(foundRole);
            document.title = `${foundRole.title} | Kretoss Technology`;
        }
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

    if (!role) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#fafcff]">
                <div className="text-[#0a1520] text-2xl font-bold">Role not found</div>
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

    return (
        <div className="bg-[#fafcff] min-h-screen py-8 md:py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] flex flex-col lg:flex-row gap-12">

                {/* Left Content Area */}
                <div className="w-full lg:w-[65%]">

                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-[13px] text-gray-500 font-medium mb-6">
                        <Link to="/" className="hover:text-blue-600 transition-colors"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg></Link>
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
                    <h1 className="text-3xl sm:text-[32px] leading-tight font-bold text-[#222325] mb-6">
                        {role.gigTitle}
                    </h1>

                    {/* Seller Profile Bar */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 shrink-0">
                            <img src={role.seller?.avatar} alt={role.seller?.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-[#222325] text-[15px]">{role.seller?.name}</span>
                                <span className="text-gray-400 text-sm">|</span>
                                <span className="text-gray-600 text-[14px]">{role.seller?.title}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="flex text-[#222325]">
                                    <FaStar className="w-4 h-4" />
                                </div>
                                <span className="font-bold text-[#222325] text-[15px]">{role.seller?.rating}</span>
                                <a href="#reviews" className="text-gray-500 text-[14px] underline cursor-pointer hover:text-blue-600">({role.seller?.reviews} reviews)</a>
                            </div>
                        </div>
                    </div>

                    {/* Image Slider */}
                    <div className="mb-12 relative rounded-[4px] overflow-hidden group border border-gray-200 shadow-sm">
                        <div className="relative h-[300px] sm:h-[400px] md:h-[450px]">
                            <img src={images[currentImageIndex]} alt="Gig Thumbnail" className="w-full h-full object-cover" />
                        </div>
                        <button onClick={() => setCurrentImageIndex(prev => prev === 0 ? images.length - 1 : prev - 1)} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50">
                            <FaChevronLeft className="w-4 h-4 -ml-0.5" />
                        </button>
                        <button onClick={() => setCurrentImageIndex(prev => prev === images.length - 1 ? 0 : prev + 1)} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50">
                            <FaChevronRight className="w-4 h-4 -mr-0.5" />
                        </button>
                        {/* Mini Thumbnails */}
                        <div className="flex justify-center gap-2 mt-4 absolute bottom-4 w-full">
                            {images.map((_, idx) => (
                                <button key={idx} onClick={() => setCurrentImageIndex(idx)} className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === idx ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/80'}`}></button>
                            ))}
                        </div>
                    </div>

                    {/* About This Gig */}
                    <div className="mb-12">
                        <h2 className="text-[20px] font-bold text-[#222325] mb-6">About this gig</h2>
                        <div className="text-[#62646a] text-[16px] leading-[1.7] space-y-4">
                            {!role.aboutGig?.intro2 && (
                                <p className="font-semibold text-[#222325] bg-[#fff6cc] inline-block px-1">10+ Years Expert from Kretoss Technology!!</p>
                            )}
                            <p>{role.aboutGig?.intro}</p>
                            {role.aboutGig?.intro2 && <p>{role.aboutGig.intro2}</p>}

                            <h4 className="font-bold text-[#222325] mt-6 mb-2">{role.aboutGig?.whatYouGetTitle || 'What You Get:'}</h4>
                            <ul className="list-disc pl-5 space-y-2">
                                {role.aboutGig?.whatYouGet?.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>

                            <h4 className="font-bold text-[#222325] mt-6 mb-2">{role.aboutGig?.whyChooseUsTitle || 'Why Choose Us:'}</h4>
                            <ul className="list-disc pl-5 space-y-2">
                                {role.aboutGig?.whyChooseUs?.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>

                            {role.aboutGig?.technologies && (
                                <div className="mt-6">
                                    <h4 className="font-bold text-[#222325] mb-2">{role.aboutGig.technologies.title}</h4>
                                    <ul className="list-none space-y-1">
                                        {role.aboutGig.technologies.list.map((tech, i) => (
                                            <li key={i}><strong className="text-[#222325]">{tech.label}:</strong> {tech.value}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {role.aboutGig?.perfectFor && (
                                <p className="mt-6"><strong className="text-[#222325]">Perfect For:</strong> {role.aboutGig.perfectFor}</p>
                            )}

                            {role.aboutGig?.note && (
                                <p className="mt-6 font-medium text-[#222325]">{role.aboutGig.note}</p>
                            )}

                            <p className="mt-4">{role.aboutGig?.availability || "Ready to build a platform that generates real revenue? Let's create an experience that converts from day one!"}</p>
                            <p className="mt-4 font-bold text-[#222325]">Message me first to discuss your specific needs!</p>
                        </div>
                    </div>

                    {/* Metadata Grid */}
                    <div className="border-t border-b border-gray-200 py-6 mb-12">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {role.metadata?.platformType && (
                                <div>
                                    <h4 className="text-[#62646a] text-[15px] mb-2">Platform type</h4>
                                    <p className="text-[#222325] font-medium text-[15px]">{role.metadata.platformType}</p>
                                </div>
                            )}
                            {role.metadata?.programmingLanguage && (
                                <div>
                                    <h4 className="text-[#62646a] text-[15px] mb-2">Programming language</h4>
                                    <p className="text-[#222325] font-medium text-[15px]">{role.metadata.programmingLanguage}</p>
                                </div>
                            )}
                            {role.metadata?.websiteFeatures && (
                                <div>
                                    <h4 className="text-[#62646a] text-[15px] mb-2">Features / Purpose</h4>
                                    <p className="text-[#222325] font-medium text-[15px]">{role.metadata.websiteFeatures}</p>
                                </div>
                            )}
                            {role.metadata?.expertise && (
                                <div>
                                    <h4 className="text-[#62646a] text-[15px] mb-2">Expertise</h4>
                                    <p className="text-[#222325] font-medium text-[15px]">{role.metadata.expertise}</p>
                                </div>
                            )}
                            {role.metadata?.frameworks && (
                                <div>
                                    <h4 className="text-[#62646a] text-[15px] mb-2">Frameworks</h4>
                                    <p className="text-[#222325] font-medium text-[15px]">{role.metadata.frameworks}</p>
                                </div>
                            )}
                            {role.metadata?.tools && (
                                <div>
                                    <h4 className="text-[#62646a] text-[15px] mb-2">Tools</h4>
                                    <p className="text-[#222325] font-medium text-[15px]">{role.metadata.tools}</p>
                                </div>
                            )}
                            {role.metadata?.plugins && (
                                <div>
                                    <h4 className="text-[#62646a] text-[15px] mb-2">Plugins / Core Tech</h4>
                                    <div className="flex flex-wrap gap-1 mt-1">
                                        {role.metadata.plugins.map((skill, i, arr) => (
                                            <span key={i} className="text-[#222325] text-[15px] font-medium">{skill}{i < arr.length - 1 ? ', ' : ''}</span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Reviews Section */}
                    <div id="reviews" className="mb-12 scroll-mt-28">
                        <h2 className="text-[20px] font-bold text-[#222325] mb-6">Reviews</h2>
                        <div className="space-y-4">
                            {role.reviews?.map((review) => (
                                <div key={review.id} className="border border-gray-200 rounded-[8px] p-6 bg-white shadow-sm">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-[#ffccb6] flex items-center justify-center text-[#222325] font-bold text-[16px]">
                                            {review.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#222325] text-[15px]">{review.name}</h4>
                                            <div className="flex items-center gap-2 text-[13px] text-[#62646a]">
                                                <img src={review.country === 'Singapore' ? "https://flagcdn.com/w20/sg.png" : "https://flagcdn.com/w20/us.png"} alt="Country" className="w-4 h-auto" />
                                                <span>{review.country}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="flex text-[#222325]">
                                            {[...Array(Math.floor(review.rating))].map((_, i) => <FaStar key={i} className="w-3.5 h-3.5" />)}
                                        </div>
                                        <span className="font-bold text-[#222325] text-[14px]">{review.rating}</span>
                                        <span className="text-gray-400 text-sm">|</span>
                                        <span className="text-[#62646a] text-[14px]">{review.date}</span>
                                    </div>
                                    <p className="text-[#222325] text-[15px] leading-[1.6] mb-4">
                                        {review.comment}
                                    </p>
                                    <div className="flex items-center gap-6 text-[#222325] text-[14px] font-medium border-t border-gray-100 pt-4">
                                        <div>
                                            <span className="text-[#62646a] block text-[13px] mb-0.5">Price</span>
                                            {review.price}
                                        </div>
                                        <div className="w-px h-8 bg-gray-200"></div>
                                        <div>
                                            <span className="text-[#62646a] block text-[13px] mb-0.5">Duration</span>
                                            {review.duration}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Portfolio / Recent Work */}
                    <div className="mb-12">
                        <h2 className="text-[20px] font-bold text-[#222325] mb-6">My Portfolio</h2>
                        {role.portfolio && role.portfolio.length > 0 && (
                            <div className="border border-[#22252e] rounded-[12px] shadow-lg">
                                {/* Featured View */}
                                <div className="flex flex-col lg:flex-row  rounded-[8px] overflow-hidden border border-[#2a2d36] items-stretch">
                                    <div className="w-full lg:w-[60%] relative flex items-center justify-center self-stretch">
                                        <div className="w-full h-full bg-[#1a1d24]">
                                            <img ref={imgRef} src={role.portfolio[activePortfolioIndex]?.image} alt={role.portfolio[activePortfolioIndex]?.title} className="w-full h-full object-cover" crossOrigin="anonymous" />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-[40%]  p-6 md:p-8 flex flex-col justify-between self-stretch relative overflow-hidden transition-colors duration-500"
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
                                            <p className="text-[#9ca3af] text-[15px] mb-2">From: {role.portfolio[activePortfolioIndex]?.date}</p>
                                            <h3 className="text-[26px] font-bold text-white leading-tight mb-4">{role.portfolio[activePortfolioIndex]?.title}</h3>
                                            <p className="text-[#9ca3af] text-[16px] leading-[1.6] mb-8">
                                                {role.portfolio[activePortfolioIndex]?.description}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-12">
                                            <div>
                                                <p className="text-[#9ca3af] text-[14px] mb-1 font-medium">Project cost</p>
                                                <p className="font-bold text-white text-[16px]">{role.portfolio[activePortfolioIndex]?.cost}</p>
                                            </div>
                                            <div>
                                                <p className="text-[#9ca3af] text-[14px] mb-1 font-medium">Project duration</p>
                                                <p className="font-bold text-white text-[16px]">{role.portfolio[activePortfolioIndex]?.duration}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

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

                    {/* Tags */}
                    <div className="mb-12">
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

                {/* Right Sticky Pricing Widget */}
                <div className="w-full lg:w-[35%] relative">
                    <div className="sticky top-28 bg-white border border-[#e4e5e7] rounded-[4px] overflow-hidden shadow-sm">
                        {isHourlyPricing ? (
                            <div className="flex flex-col h-full">
                                <div className="border-b border-[#e4e5e7] bg-[#fafafa] p-6 pb-4">
                                    <h3 className="text-[20px] font-bold text-[#222325] mb-1">Hire Hourly</h3>
                                    <div className="text-[28px] font-black text-[#222325]">${role.hourlyPrice || '25'}<span className="text-[16px] font-normal text-[#62646a]">/hr</span></div>
                                </div>
                                <div className="p-6">
                                    <p className="text-[#62646a] text-[15px] leading-[1.6] mb-6">Hire a dedicated {role.title} on a flexible hourly basis. Perfect for ongoing projects, maintenance, or tasks that need continuous attention.</p>

                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="w-full text-white py-3 px-4 rounded-[4px] transition-all duration-300 text-[16px] font-semibold flex items-center justify-center gap-2"
                                        style={{ background: "linear-gradient(rgb(68, 199, 246), rgb(0, 55, 240))" }}
                                    >
                                        Hire Hourly
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </button>
                                </div>

                                <div className="border-t border-[#e4e5e7] p-4 text-center bg-[#fafafa] mt-auto">
                                    <button
                                        onClick={() => setIsHourlyPricing(false)}
                                        className="w-full text-[#0037f0] font-bold text-[14px] hover:underline transition-all"
                                    >
                                        Back to Fixed Packages
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <>
                                {/* Tabs */}
                                <div className="flex border-b border-[#e4e5e7]">
                                    <button
                                        onClick={() => setActiveTab('basic')}
                                        className={`relative flex-1 py-4 text-[15px] font-bold transition-colors ${activeTab === 'basic' ? 'bg-white text-transparent bg-clip-text bg-gradient-to-r from-[rgb(68,199,246)] to-[rgb(0,55,240)]' : 'text-[#62646a] hover:text-[#222325] bg-[#fafafa]'}`}
                                    >
                                        Basic
                                        {activeTab === 'basic' && <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[rgb(68,199,246)] to-[rgb(0,55,240)]"></div>}
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('standard')}
                                        className={`relative flex-1 py-4 text-[15px] font-bold transition-colors border-l border-r border-[#e4e5e7] ${activeTab === 'standard' ? 'bg-white text-transparent bg-clip-text bg-gradient-to-r from-[rgb(68,199,246)] to-[rgb(0,55,240)]' : 'text-[#62646a] hover:text-[#222325] bg-[#fafafa]'}`}
                                    >
                                        Standard
                                        {activeTab === 'standard' && <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[rgb(68,199,246)] to-[rgb(0,55,240)]"></div>}
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('premium')}
                                        className={`relative flex-1 py-4 text-[15px] font-bold transition-colors ${activeTab === 'premium' ? 'bg-white text-transparent bg-clip-text bg-gradient-to-r from-[rgb(68,199,246)] to-[rgb(0,55,240)]' : 'text-[#62646a] hover:text-[#222325] bg-[#fafafa]'}`}
                                    >
                                        Premium
                                        {activeTab === 'premium' && <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[rgb(68,199,246)] to-[rgb(0,55,240)]"></div>}
                                    </button>
                                </div>

                                {/* Tab Content */}
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-[16px] font-bold text-[#222325]">{role.plans?.[activeTab]?.name || `${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Package`}</h3>
                                        <span className="text-[20px] font-medium text-[#222325]">{role.plans?.[activeTab]?.price || '$199'}</span>
                                    </div>
                                    <p className="text-[#62646a] text-[15px] leading-[1.6] mb-4">
                                        {role.plans?.[activeTab]?.description || `Get a fully functional ${role.title} application with complete features.`}
                                    </p>

                                    <div className="flex items-center gap-4 text-[#222325] text-[14px] font-bold mb-5">
                                        <div className="flex items-center gap-1.5">
                                            <svg className="w-4 h-4 text-[#62646a]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            {role.plans?.[activeTab]?.deliveryTime || '14 Days Delivery'}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <svg className="w-4 h-4 text-[#62646a]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                                            Unlimited Revisions
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <button
                                            onClick={() => setShowFeatures(!showFeatures)}
                                            className="flex items-center justify-between w-full text-left font-bold text-[#62646a] text-[15px] mb-3"
                                        >
                                            What's Included
                                            <svg className={`w-4 h-4 transition-transform ${showFeatures ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {showFeatures && (
                                            <ul className="space-y-2 mt-2">
                                                {featuresList.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-[#62646a] text-[14px]">
                                                        <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="url(#check-gradient)">
                                                            <defs>
                                                                <linearGradient id="check-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                                    <stop offset="0%" stopColor="rgb(68, 199, 246)" />
                                                                    <stop offset="100%" stopColor="rgb(0, 55, 240)" />
                                                                </linearGradient>
                                                            </defs>
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>

                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="w-full text-white py-3 px-4 rounded-[4px] transition-all duration-300 text-[16px] font-semibold flex items-center justify-center gap-2 border border-[#f8f8f8]"
                                        style={{
                                            background: "linear-gradient(rgb(68, 199, 246), rgb(0, 55, 240))",
                                            fontSize: "16px",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Continue
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>

                                </div>
                                <div className="border-t border-[#e4e5e7] p-4 text-center bg-[#fafafa]">
                                    <button
                                        onClick={() => setIsHourlyPricing(true)}
                                        className="text-[#62646a] hover:text-[#0037f0] font-bold text-[14px] transition-colors"
                                    >
                                        Want to hire dedicated developer hourly basis?
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>

            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-[#0a1520]/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
                    <div className="bg-white border border-[#44c7f6]/20 rounded-[8px] w-full max-w-2xl p-6 md:p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-6 right-6 text-gray-500 hover:text-[#0037f0] transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        <h2 className="text-3xl font-black text-[#222325] mb-2">Let's Discuss Your Project</h2>
                        <p className="text-[#62646a] mb-8">Fill out the form below and we'll get back to you shortly.</p>

                        <form onSubmit={handleFormSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-[#62646a] mb-2">Name<span className="text-red-500 ml-1">*</span></label>
                                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full bg-white border border-[#e4e5e7] rounded-[4px] px-4 py-3 text-[#222325] placeholder-gray-400 focus:outline-none focus:border-[#1dbf73] transition-colors" placeholder="Enter Your Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-[#62646a] mb-2">Email<span className="text-red-500 ml-1">*</span></label>
                                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full bg-white border border-[#e4e5e7] rounded-[4px] px-4 py-3 text-[#222325] placeholder-gray-400 focus:outline-none focus:border-[#1dbf73] transition-colors" placeholder="Enter Your Email" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-[#62646a] mb-2">Phone<span className="text-red-500 ml-1">*</span></label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full bg-white border border-[#e4e5e7] rounded-[4px] px-4 py-3 text-[#222325] placeholder-gray-400 focus:outline-none focus:border-[#1dbf73] transition-colors" placeholder="Enter Your Number" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-[#62646a] mb-2">Estimated Budget<span className="text-red-500 ml-1">*</span></label>
                                    <select name="budget" value={formData.budget} onChange={handleInputChange} required className="w-full bg-white border border-[#e4e5e7] rounded-[4px] px-4 py-3 text-[#222325] focus:outline-none focus:border-[#1dbf73] transition-colors appearance-none">
                                        <option value="" disabled className="text-gray-400">Select Budget Range</option>
                                        <option value="<$5k">&lt;$5k</option>
                                        <option value="$5k-$10k">$5k - $10k</option>
                                        <option value="$10k-$25k">$10k - $25k</option>
                                        <option value="$25k+">$25k+</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-[#62646a] mb-2">Project Summary<span className="text-red-500 ml-1">*</span></label>
                                <textarea name="summary" value={formData.summary} onChange={handleInputChange} required rows="4" className="w-full bg-white border border-[#e4e5e7] rounded-[4px] px-4 py-3 text-[#222325] placeholder-gray-400 focus:outline-none focus:border-[#1dbf73] transition-colors resize-none" placeholder="Describe your project briefly..."></textarea>
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
            )}
        </div>
    );
}
