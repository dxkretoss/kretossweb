import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { hireUsData } from '../data/hireus';
import CtaSection from './about/CTASection';
import AnimatedButtonwithoutaero from './ui/AnimatedButtonwithoutaero';
import AnimatedButton from './ui/AnimatedButton';
import { FaReact, FaNodeJs, FaPython, FaAngular, FaVuejs, FaAws, FaDocker, FaDatabase, FaCode } from 'react-icons/fa';
import { SiRedux, SiNextdotjs, SiTailwindcss, SiTypescript, SiGraphql, SiMongodb, SiFirebase } from 'react-icons/si';


// Generic Helpers for new sections
const getSkillIcon = (skillName) => {
    const s = skillName.toLowerCase();
    if (s.includes('react')) return <FaReact className="text-[#61dafb] w-4 h-4 shrink-0" />;
    if (s.includes('redux')) return <SiRedux className="text-[#764abc] w-4 h-4 shrink-0" />;
    if (s.includes('next')) return <SiNextdotjs className="text-white w-4 h-4 shrink-0" />;
    if (s.includes('tailwind')) return <SiTailwindcss className="text-[#38b2ac] w-4 h-4 shrink-0" />;
    if (s.includes('typescript') || s.includes('ts')) return <SiTypescript className="text-[#3178c6] w-4 h-4 shrink-0" />;
    if (s.includes('graphql') || s.includes('api')) return <SiGraphql className="text-[#e10098] w-4 h-4 shrink-0" />;
    if (s.includes('node')) return <FaNodeJs className="text-[#339933] w-4 h-4 shrink-0" />;
    if (s.includes('python')) return <FaPython className="text-[#3776ab] w-4 h-4 shrink-0" />;
    if (s.includes('angular')) return <FaAngular className="text-[#dd0031] w-4 h-4 shrink-0" />;
    if (s.includes('vue')) return <FaVuejs className="text-[#4fc08d] w-4 h-4 shrink-0" />;
    if (s.includes('aws')) return <FaAws className="text-[#ff9900] w-4 h-4 shrink-0" />;
    if (s.includes('docker')) return <FaDocker className="text-[#2496ed] w-4 h-4 shrink-0" />;
    if (s.includes('mongo') || s.includes('database') || s.includes('sql')) return <SiMongodb className="text-[#47a248] w-4 h-4 shrink-0" />;
    if (s.includes('firebase')) return <SiFirebase className="text-[#ffca28] w-4 h-4 shrink-0" />;
    return <FaCode className="text-gray-400 w-4 h-4 shrink-0" />;
};
const getDefaultTechDescription = (title) => {
    const roleName = title.replace('Hire ', '');
    return {
        heading: `Talented ${roleName}s Are Available For Hire`,
        text: `Hire ${roleName.toLowerCase()}s from us to create your next application using cutting edge technologies. Our programmers have tremendous knowledge and hands-on experience in developing intuitive apps using ${roleName} tools. Regarding the creation of robust apps, developers have tremendous leeway thanks to this technology. Get in touch with us to Hire ${roleName} programmers from us at a fraction of cost.`,
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
        whoHeading: `Who Exactly Is A ${roleName}?`,
        whoText: `Our Hire ${roleName}s provide contemporary UI components and robust backend architectures to enhance application performance. To build a strong and efficient application, they use their expertise and collaborate closely with testers, designers, web designers, and project managers. Utilize our service to grow your company, and if you decide to hire our remote development team, you will also enjoy several other perks.`
    };
};

const defaultDedicatedPricing = [
    { level: 'Junior Developers', cost: '$17/hr', experience: '1-3 Years', pm: 'Yes', timezone: 'Yes', guarantee: 'Yes', hours: '40 hours/ Week' },
    { level: 'Mid-Level Developers', cost: '$22/hr', experience: '3-5 Years', pm: 'Yes', timezone: 'Yes', guarantee: 'Yes', hours: '40 hours/ Week' },
    { level: 'Senior Developers', cost: '$29/hr', experience: '5+ Years', pm: 'Yes', timezone: 'Yes', guarantee: 'Yes', hours: '40 hours/ Week' }
];

const defaultCompareFeatures = [
    { feature: 'Functional website/app', basic: true, standard: true, premium: true },
    { feature: 'Content/Product upload', basic: false, standard: true, premium: true },
    { feature: 'API Integration', basic: false, standard: true, premium: true },
    { feature: 'Payment Integration', basic: true, standard: true, premium: true },
    { feature: 'Speed optimization', basic: false, standard: true, premium: true },
    { feature: 'Hosting setup', basic: true, standard: true, premium: true },
    { feature: 'Number of pages', basic: '1-2', standard: '5', premium: '10+' },
    { feature: 'Revisions', basic: 'Unlimited', standard: 'Unlimited', premium: 'Unlimited' }
];

const defaultPortfolios = [
    { title: 'NextHunt', tech: 'React.js + Supabase', image: '/portfolio/custom/portfolio_nexthunt.webp', link: '/portfolio/nexthunt' },
    { title: 'Palzea Widget', tech: 'Blockchain + React.js + Node.js', image: '/portfolio/custom/portfolio_palzea-widget.webp', link: '/portfolio/palzea-widget' }
];

const defaultReviews = [
    {
        rating: 5,
        text: "Incredible developers. They built our entire front-end architecture ahead of schedule and the code quality was superb.",
        author: "Sarah Jenkins",
        position: "CTO, TechFlow"
    },
    {
        rating: 5,
        text: "Very professional team. Communication was clear, and they integrated seamlessly with our existing backend team.",
        author: "Michael Chang",
        position: "Product Manager, InnovateX"
    }
];

export default function HireUsDetailsPage() {
    const { roleSlug } = useParams();
    const navigate = useNavigate();
    const [role, setRole] = useState(null);
    const [activeTab, setActiveTab] = useState('standard'); // basic, standard, premium, hourly
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', summary: '', budget: '' });

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

    if (!role) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
                <div className="text-white text-2xl font-bold">Role not found</div>
            </div>
        );
    }

    const renderPricingPlan = (planKey, planData) => {
        return (
            <div className="animate-fade-in">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-bold text-white">{planData.name || 'Dedicated Resource'}</h3>
                    <span className="text-xl font-black text-[#44c7f6]">{planData.price || planData.rate}</span>
                </div>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {planData.description}
                </p>
                {planData.deliveryTime && (
                    <div className="flex items-center gap-2 text-white text-sm font-semibold mb-4">
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {planData.deliveryTime}
                    </div>
                )}
                <div className="space-y-2 mb-6">
                    {planData.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center'>
                    <AnimatedButton text="Continue" onClick={() => setIsModalOpen(true)}></AnimatedButton>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-[#0a0a0a] min-h-screen py-10 md:py-20">
            {/* Breadcrumb & Header */}
            {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-10">
                <div className="flex items-center gap-2 text-sm text-gray-500 font-medium mb-6">
                    <Link to="/" className="hover:text-white transition-colors">Home</Link>
                    <span>/</span>
                    <Link to="/hire-us" className="hover:text-white transition-colors">Hire Us</Link>
                    <span>/</span>
                    <span className="text-[#44c7f6]">{role.title}</span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#111] border border-[#333] p-3 flex items-center justify-center shrink-0">
                        <img src={role.icon} alt={role.title} className="w-full h-full object-contain" />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">{role.title}</h1>
                </div>
            </div> */}

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col lg:flex-row gap-10">

                {/* Left Content Area */}
                <div className="w-full lg:w-2/3">

                    {/* About Section */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-6 border-b border-[#222] pb-4">About This Service</h2>
                        <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                            {role.about}
                        </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-6 border-b border-[#222] pb-4">Expertise & Skills</h2>
                        <div className="flex flex-wrap gap-3">
                            {role.skills.map((skill, i) => (
                                <span key={i} className="flex items-center gap-2 text-sm font-semibold text-gray-300 bg-[#111] px-4 py-2 rounded-full border border-[#333] hover:border-[#44c7f6] transition-colors cursor-default">
                                    {getSkillIcon(skill)}
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Case Study */}
                    {role.caseStudy && (
                        <div className="mb-12 bg-[#111] border border-[#222] rounded-3xl p-8 md:p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#44c7f6]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>

                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
                                <svg className="w-6 h-6 text-[#44c7f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                Highlighted Case Study
                            </h2>
                            <p className="text-gray-400 mb-8 relative z-10 text-lg">{role.caseStudy.overview}</p>

                            <div className="grid md:grid-cols-2 gap-8 relative z-10">
                                <div>
                                    <h4 className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-4">Our Process</h4>
                                    <ul className="space-y-4">
                                        {role.caseStudy.process.map((p, i) => (
                                            <li key={i} className="flex gap-3 text-gray-300">
                                                <span className="text-[#44c7f6] font-bold">0{i + 1}.</span>
                                                <div>
                                                    <span className="block font-semibold text-white mb-1">{p.title}</span>
                                                    <span className="text-sm text-gray-400">{p.description}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-4">The Impact</h4>
                                    <ul className="space-y-3">
                                        {role.caseStudy.results.map((res, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-300">
                                                <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>{res}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}


                    {/* Tech Description Section */}
                    <div className="mb-12">
                        <div className="flex flex-col xl:flex-row gap-10 items-center mb-12">
                            <div className="w-full xl:w-1/2">
                                <div className="relative rounded-2xl overflow-hidden border border-[#222] group shadow-2xl shadow-black/50">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10"></div>
                                    <img src={getDefaultTechDescription(role.title).image} alt="Developers" className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                            </div>
                            <div className="w-full xl:w-1/2">
                                <h2 className="text-2xl font-bold text-white mb-6 border-b border-[#222] pb-4 leading-tight">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#44c7f6] to-[#0037f0]">{getDefaultTechDescription(role.title).heading}</span>
                                </h2>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {getDefaultTechDescription(role.title).text}
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#111] border border-[#222] rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-2xl shadow-black/50">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-[#0037f0]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
                            <h3 className="text-2xl font-bold text-white mb-6 border-b border-[#222] pb-4 relative z-10">{getDefaultTechDescription(role.title).whoHeading}</h3>
                            <p className="text-gray-400 leading-relaxed text-lg relative z-10">
                                {getDefaultTechDescription(role.title).whoText}
                            </p>
                        </div>
                    </div>

                    {/* Dedicated Developers Pricing Table */}
                    <div className="mb-12 mt-16">
                        <h2 className="text-2xl font-bold text-white mb-6 border-b border-[#222] pb-4">Hire Dedicated Developers To Empower Your Business</h2>
                        <p className="text-gray-400 mb-12 text-lg">Hire {role.title.replace('Hire ', '')}s to meet your business perks by leveraging our technical elegance.</p>

                        <div className="overflow-x-auto rounded-3xl border border-[#222] shadow-2xl shadow-black/50 bg-[#111] mt-10">
                            <table className="w-full text-left min-w-[700px]">
                                <thead>
                                    <tr className="bg-gradient-to-r from-[#44c7f6]/10 to-[#0037f0]/10 border-b border-[#222]">
                                        <th className="py-4 px-4 text-white font-bold whitespace-nowrap">Range of Developers</th>
                                        <th className="py-4 px-4 text-[#44c7f6] font-bold whitespace-nowrap">Junior Developers</th>
                                        <th className="py-4 px-4 text-[#44c7f6] font-bold whitespace-nowrap">Mid-Level Developers</th>
                                        <th className="py-4 px-4 text-[#44c7f6] font-bold whitespace-nowrap">Senior Developers</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-[#222] hover:bg-[#1a1a1a] transition-colors">
                                        <td className="py-4 px-4 text-white font-semibold whitespace-nowrap">Approx Cost</td>
                                        {defaultDedicatedPricing.map((p, i) => <td key={i} className="py-6 px-4 text-gray-300 font-medium">{p.cost}</td>)}
                                    </tr>
                                    <tr className="border-b border-[#222] hover:bg-[#1a1a1a] transition-colors">
                                        <td className="py-4 px-4 text-white font-semibold whitespace-nowrap">Years of Experience</td>
                                        {defaultDedicatedPricing.map((p, i) => <td key={i} className="py-6 px-4 text-gray-300">{p.experience}</td>)}
                                    </tr>
                                    <tr className="border-b border-[#222] hover:bg-[#1a1a1a] transition-colors">
                                        <td className="py-4 px-4 text-white font-semibold whitespace-nowrap">Project Manager</td>
                                        {defaultDedicatedPricing.map((p, i) => <td key={i} className="py-6 px-4 text-gray-300">{p.pm}</td>)}
                                    </tr>
                                    <tr className="border-b border-[#222] hover:bg-[#1a1a1a] transition-colors">
                                        <td className="py-4 px-4 text-white font-semibold whitespace-nowrap">Time Zone Flexibility</td>
                                        {defaultDedicatedPricing.map((p, i) => <td key={i} className="py-6 px-4 text-gray-300">{p.timezone}</td>)}
                                    </tr>
                                    <tr className="border-b border-[#222] hover:bg-[#1a1a1a] transition-colors">
                                        <td className="py-4 px-4 text-white font-semibold whitespace-nowrap">Quality Guarantee</td>
                                        {defaultDedicatedPricing.map((p, i) => <td key={i} className="py-6 px-4 text-gray-300">{p.guarantee}</td>)}
                                    </tr>
                                    <tr className="hover:bg-[#1a1a1a] transition-colors">
                                        <td className="py-4 px-4 text-white font-semibold whitespace-nowrap">Working Hours</td>
                                        {defaultDedicatedPricing.map((p, i) => <td key={i} className="py-6 px-4 text-gray-300">{p.hours}</td>)}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Compare Packages Table */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-6 border-b border-[#222] pb-4">Compare Packages</h2>

                        <div className="overflow-x-auto rounded-2xl border border-[#222] shadow-2xl shadow-black/50">
                            <table className="w-full text-left min-w-[800px]">
                                <thead>
                                    <tr className="border-b border-[#222] bg-[#111]">
                                        <th className="p-6 md:p-8 text-gray-400 font-medium align-top min-w-[200px]">Package</th>
                                        <th className="p-4 md:p-4 align-top w-1/4">
                                            <div className="text-2xl lg:text-3xl font-black text-white">{role.plans.basic.price}</div>
                                            <div className="text-[#44c7f6] font-bold uppercase tracking-wider text-sm mt-2">Basic</div>
                                            <div className="text-gray-500 text-xs mt-3 font-normal leading-relaxed">{role.plans.basic.description}</div>
                                        </th>
                                        <th className="p-4 md:p-4 border-l border-r border-[#222] bg-[#1a1a1a] align-top w-1/4 relative overflow-hidden">
                                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#44c7f6] to-[#0037f0]"></div>
                                            <div className="text-2xl lg:text-3xl font-black text-white relative z-10">{role.plans.standard.price}</div>
                                            <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#44c7f6] to-[#0037f0] font-bold uppercase tracking-wider text-sm mt-2 relative z-10">Standard</div>
                                            <div className="text-gray-400 text-xs mt-3 font-normal leading-relaxed relative z-10">{role.plans.standard.description}</div>
                                        </th>
                                        <th className="p-6 md:p-4 align-top w-1/4">
                                            <div className="text-2xl lg:text-3xl font-black text-white">{role.plans.premium.price}</div>
                                            <div className="text-[#44c7f6] font-bold uppercase tracking-wider text-sm mt-2">Premium</div>
                                            <div className="text-gray-500 text-xs mt-3 font-normal leading-relaxed">{role.plans.premium.description}</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-[#0a0a0a]">
                                    {defaultCompareFeatures.map((f, i) => (
                                        <tr key={i} className="border-b border-[#222] hover:bg-[#111] transition-colors">
                                            <td className="p-4 md:p-4 text-gray-300 font-medium">{f.feature}</td>
                                            <td className="p-4 md:p-4 text-center">
                                                {typeof f.basic === 'boolean' ? (f.basic ? <span className="text-[#44c7f6] text-xl font-black">✓</span> : <span className="text-gray-600">-</span>) : <span className="text-gray-400 font-medium">{f.basic}</span>}
                                            </td>
                                            <td className="py-4 px-4 text-center border-l border-r border-[#222] bg-[#111]">
                                                {typeof f.standard === 'boolean' ? (f.standard ? <span className="text-[#44c7f6] text-xl font-black drop-shadow-[0_0_8px_rgba(68,199,246,0.6)]">✓</span> : <span className="text-gray-600">-</span>) : <span className="text-white font-medium">{f.standard}</span>}
                                            </td>
                                            <td className="py-4 px-4 text-center">
                                                {typeof f.premium === 'boolean' ? (f.premium ? <span className="text-[#44c7f6] text-xl font-black">✓</span> : <span className="text-gray-600">-</span>) : <span className="text-gray-400 font-medium">{f.premium}</span>}
                                            </td>
                                        </tr>
                                    ))}
                                    <tr className="bg-[#111]">
                                        <td className="p-4 font-bold text-white uppercase tracking-wider text-sm">Action</td>
                                        <td className="p-4 text-center">
                                            <AnimatedButton text="Basic" onClick={() => setIsModalOpen(true)}></AnimatedButton>
                                        </td>
                                        <td className="p-4 text-center border-l border-r border-[#222] bg-[#1a1a1a]">
                                            <AnimatedButton text="Standard" onClick={() => setIsModalOpen(true)}></AnimatedButton>
                                        </td>
                                        <td className="p-6 md:p-4 text-center">
                                            <AnimatedButton text="Premium" onClick={() => setIsModalOpen(true)}></AnimatedButton>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Portfolios Section */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-6 pb-4 border-b border-[#222] pb-6 flex items-center justify-between">
                            Recent Work & Portfolios
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {defaultPortfolios.map((portfolio, i) => (
                                <Link to={portfolio.link || '/portfolio'} key={i} className="block group cursor-pointer rounded-3xl overflow-hidden border border-[#222] bg-[#111] shadow-xl hover:shadow-[#44c7f6]/10 transition-shadow">
                                    <div className="h-56 overflow-hidden relative">
                                        <img src={portfolio.image} alt={portfolio.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                                    </div>
                                    <div className="p-6 md:p-8 relative">
                                        <div className="absolute top-0 right-8 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-[#44c7f6] to-[#0037f0] rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-[#0037f0]/40 opacity-0 group-hover:opacity-100 group-hover:-translate-y-3/4 transition-all duration-300">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#44c7f6] group-hover:to-[#0037f0] transition-colors">{portfolio.title}</h3>
                                        <p className="text-gray-500 font-medium flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-[#44c7f6]"></span>
                                            {portfolio.tech}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>


                    {/* Reviews */}
                    {true && (
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6 border-b border-[#222] pb-4">Client Reviews</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {(role.reviews || defaultReviews).map((review, i) => (
                                    <div key={i} className="bg-[#111] p-8 rounded-3xl border border-[#222] shadow-xl">
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(review.rating)].map((_, idx) => (
                                                <svg key={idx} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                            ))}
                                        </div>
                                        <p className="text-gray-300 italic mb-6">"{review.text}"</p>
                                        <div>
                                            <span className="block text-white font-bold">{review.author}</span>
                                            <span className="text-sm text-gray-500">{review.position}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Sticky Pricing Widget */}
                <div className="w-full lg:w-1/3 mt-10 lg:mt-0">
                    <div className="sticky top-32 bg-[#111] border border-[#222] rounded-2xl overflow-hidden shadow-xl shadow-black/50 max-w-sm mx-auto lg:ml-auto lg:mr-0">
                        {/* Tabs */}
                        <div className="flex bg-[#050505]">
                            <button
                                onClick={() => setActiveTab('basic')}
                                className={`relative flex-1 py-3 text-sm font-semibold tracking-wide transition-colors ${activeTab === 'basic' ? 'bg-[#111] text-white' : 'text-gray-500 hover:text-gray-300'}`}
                            >
                                Basic
                                {activeTab === 'basic' && (
                                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#44c7f6] to-[#0037f0] shadow-[0_0_10px_rgba(68,199,246,0.6)]"></div>
                                )}
                            </button>
                            <button
                                onClick={() => setActiveTab('standard')}
                                className={`relative flex-1 py-3 text-sm font-semibold tracking-wide transition-colors ${activeTab === 'standard' ? 'bg-[#111] text-white' : 'text-gray-500 hover:text-gray-300 border-l border-r border-[#1a1a1a]'}`}
                            >
                                Standard
                                {activeTab === 'standard' && (
                                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#44c7f6] to-[#0037f0] shadow-[0_0_10px_rgba(68,199,246,0.6)]"></div>
                                )}
                            </button>
                            <button
                                onClick={() => setActiveTab('premium')}
                                className={`relative flex-1 py-3 text-sm font-semibold tracking-wide transition-colors ${activeTab === 'premium' ? 'bg-[#111] text-white' : 'text-gray-500 hover:text-gray-300'}`}
                            >
                                Premium
                                {activeTab === 'premium' && (
                                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#44c7f6] to-[#0037f0] shadow-[0_0_10px_rgba(68,199,246,0.6)]"></div>
                                )}
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className="p-5 md:p-6">
                            {activeTab === 'basic' && renderPricingPlan('basic', role.plans.basic)}
                            {activeTab === 'standard' && renderPricingPlan('standard', role.plans.standard)}
                            {activeTab === 'premium' && renderPricingPlan('premium', role.plans.premium)}

                            {/* Hourly Option */}
                            {activeTab !== 'hourly' && (
                                <div className="flex flex-col mt-5 pt-4 border-t border-[#222] text-center">
                                    <span className="text-gray-500 text-xs mb-2 block">Looking for continuous development?</span>
                                    <button
                                        onClick={() => setActiveTab('hourly')}
                                        className="text-white hover:text-[#44c7f6] text-xs font-bold flex items-center justify-center gap-1 mx-auto transition-colors"
                                    >
                                        View Hourly Dedicated Rates
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                    </button>
                                </div>
                            )}

                            {activeTab === 'hourly' && (
                                <div className="animate-fade-in relative pt-2">
                                    <button
                                        onClick={() => setActiveTab('standard')}
                                        className="absolute -top-1 right-0 text-gray-500 hover:text-white"
                                    >
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                    {renderPricingPlan('hourly', role.hourly)}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-20">
                <CtaSection />
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
                    <div className="bg-[#111] border border-[#222] rounded-3xl w-full max-w-2xl p-6 md:p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl shadow-black/80">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        <h2 className="text-3xl font-black text-white mb-2">Let's Discuss Your Project</h2>
                        <p className="text-gray-400 mb-8">Fill out the form below and we'll get back to you shortly.</p>

                        <form onSubmit={handleFormSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-300 mb-2">Name<span className="text-[#44c7f6] ml-1">*</span></label>
                                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full bg-[#050505] border border-[#222] rounded-md px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#44c7f6] transition-colors" placeholder="Enter Your Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-300 mb-2">Email<span className="text-[#44c7f6] ml-1">*</span></label>
                                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full bg-[#050505] border border-[#222] rounded-md px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#44c7f6] transition-colors" placeholder="Enter Your Email" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-300 mb-2">Phone<span className="text-[#44c7f6] ml-1">*</span></label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full bg-[#050505] border border-[#222] rounded-md px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#44c7f6] transition-colors" placeholder="Enter Your Number" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-300 mb-2">Estimated Budget<span className="text-[#44c7f6] ml-1">*</span></label>
                                    <select name="budget" value={formData.budget} onChange={handleInputChange} required className="w-full bg-[#050505] border border-[#222] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#44c7f6] transition-colors appearance-none">
                                        <option value="" disabled className="text-gray-600">Select Budget Range</option>
                                        <option value="<$5k">&lt;$5k</option>
                                        <option value="$5k-$10k">$5k - $10k</option>
                                        <option value="$10k-$25k">$10k - $25k</option>
                                        <option value="$25k+">$25k+</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-300 mb-2">Project Summary<span className="text-[#44c7f6] ml-1">*</span></label>
                                <textarea name="summary" value={formData.summary} onChange={handleInputChange} required rows="4" className="w-full bg-[#050505] border border-[#222] rounded-md px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#44c7f6] transition-colors resize-none" placeholder="Describe your project briefly..."></textarea>
                            </div>

                            <div className="pt-4 flex justify-end">
                                <button type="submit" className="bg-gradient-to-r from-[#44c7f6] to-[#0037f0] hover:from-[#0037f0] hover:to-[#44c7f6] text-white font-bold py-3 px-8 rounded-lg transition-all duration-500 shadow-lg shadow-[#0037f0]/30">
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
