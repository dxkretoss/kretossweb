import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { jobsData } from '../data/jobs';
import AnimatedButton from './ui/AnimatedButton';

export default function JobDetailsPage() {
    const { slug } = useParams();
    const job = jobsData.find(j => j.slug === slug);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        appliedFor: job ? job.title : '',
        experience: '',
        currentSalary: '',
        expectedSalary: '',
        linkedinUrl: '',
        resume: null
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Application submitted successfully!');
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            appliedFor: job ? job.title : '',
            experience: '',
            currentSalary: '',
            expectedSalary: '',
            linkedinUrl: '',
            resume: null
        });
    };

    React.useLayoutEffect(() => {
        const scrollToTop = () => {
            if (window.lenis) {
                window.lenis.scrollTo(0, { immediate: true });
            }
            window.scrollTo(0, 0);
        };

        scrollToTop();
        const timeoutId = setTimeout(scrollToTop, 50);

        return () => clearTimeout(timeoutId);
    }, [slug]);

    if (!job) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#fafcff]">
                <div className="text-[#111] text-2xl font-bold">Job not found</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#fafcff] text-[#111] pt-10 md:pt-20 pb-10 md:pb-20 font-sans">
            {/* Header Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-5xl mb-10 md:mb-16 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight break-words">
                    <span className="bg-gradient-to-r from-[#44c7f6] to-[#0037f0] text-transparent bg-clip-text">
                        {job.title.split(' ')[0]}
                    </span>{' '}
                    {job.title.split(' ').slice(1).join(' ')}
                </h1>
                <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                    {job.description}
                </p>
            </div>

            {/* Info Grid */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl mb-12 md:mb-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                    {/* Category */}
                    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 mb-2 sm:mb-3 border border-gray-100">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="7" height="7"></rect>
                                <rect x="14" y="3" width="7" height="7"></rect>
                                <rect x="14" y="14" width="7" height="7"></rect>
                                <rect x="3" y="14" width="7" height="7"></rect>
                            </svg>
                        </div>
                        <span className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-1 font-medium">Category</span>
                        <span className="text-sm sm:text-base font-semibold text-[#111]">{job.category}</span>
                    </div>

                    {/* Location */}
                    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 mb-2 sm:mb-3 border border-gray-100">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                        </div>
                        <span className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-1 font-medium">Location</span>
                        <span className="text-sm sm:text-base font-semibold text-[#111]">{job.location}</span>
                    </div>

                    {/* Experience */}
                    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 mb-2 sm:mb-3 border border-gray-100">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                        </div>
                        <span className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-1 font-medium">Experience</span>
                        <span className="text-sm sm:text-base font-semibold text-[#111]">{job.experience}</span>
                    </div>

                    {/* Job Type */}
                    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 mb-2 sm:mb-3 border border-gray-100">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                            </svg>
                        </div>
                        <span className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-1 font-medium">Job Type</span>
                        <span className="text-sm sm:text-base font-semibold text-[#111]">{job.type}</span>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                    {/* Left Column (Job Details) */}
                    <div className="lg:col-span-1 flex flex-col gap-8">

                        {/* Job Description */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6 text-[#111]">Job Description</h2>
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                {job.description}
                            </p>
                        </section>

                        <div className="h-[1px] w-full bg-gray-200/60"></div>

                        {/* Key Responsibilities */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6 text-[#111]">Key Responsibilities</h2>
                            <ul className="flex flex-col gap-3 md:gap-4">
                                {job.responsibilities.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-600 leading-relaxed text-sm sm:text-base">
                                        <div className="w-5 h-5 rounded-full bg-[#44c7f6]/15 flex items-center justify-center shrink-0 mt-0.5">
                                            <div className="w-2 h-2 rounded-full bg-gradient-to-b from-[#44c7f6] to-[#0037f0]"></div>
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <div className="h-[1px] w-full bg-gray-200/60"></div>

                        {/* Key Requirements */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6 text-[#111]">Key Requirements</h2>
                            <ul className="flex flex-col gap-3 md:gap-4">
                                {job.requirements.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-600 leading-relaxed text-sm sm:text-base">
                                        <div className="w-5 h-5 rounded-full bg-[#44c7f6]/15 flex items-center justify-center shrink-0 mt-0.5">
                                            <div className="w-2 h-2 rounded-full bg-gradient-to-b from-[#44c7f6] to-[#0037f0]"></div>
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <div className="h-[1px] w-full bg-gray-200/60"></div>

                        {/* Nice to Have */}
                        {job.niceToHave && job.niceToHave.length > 0 && (
                            <section>
                                <h2 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6 text-[#111]">Nice to Have</h2>
                                <ul className="flex flex-col gap-3 md:gap-4">
                                    {job.niceToHave.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-600 leading-relaxed text-sm sm:text-base">
                                            <div className="w-5 h-5 rounded-full bg-[#44c7f6]/15 flex items-center justify-center shrink-0 mt-0.5">
                                                <div className="w-2 h-2 rounded-full bg-gradient-to-b from-[#44c7f6] to-[#0037f0]"></div>
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}
                    </div>

                    {/* Right Column (Application Form) */}
                    <div className="lg:col-span-1 lg:sticky lg:top-0 w-full mt-6 lg:mt-0">
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
                            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900 leading-snug">
                                Apply for {job.title}
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Full Name */}
                                    <div className='single-contact-group'>
                                        <label className="contact-label !text-gray-800 text-sm mb-1 block">Full Name<span className="text-blue-500 ml-1">*</span></label>
                                        <input type="text" name="fullName" required value={formData.fullName} onChange={handleInputChange} placeholder="Enter Your Name" className="h-[40px] w-full bg-gray-50 border border-gray-200 rounded-md px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#44c7f6] focus:ring-1 focus:ring-[#44c7f6] transition-colors text-sm" />
                                    </div>

                                    <div className='single-contact-group'>
                                        <label className="contact-label !text-gray-800 text-sm mb-1 block">Email<span className="text-blue-500 ml-1">*</span></label>
                                        <input type="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="Enter Your Email" className="h-[40px] w-full bg-gray-50 border border-gray-200 rounded-md px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#44c7f6] focus:ring-1 focus:ring-[#44c7f6] transition-colors text-sm" />
                                    </div>
                                </div>
                                {/* Email & Phone */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Experience */}
                                    <div className='single-contact-group'>
                                        <label className="contact-label !text-gray-800 text-sm mb-1 block">Experience<span className="text-blue-500 ml-1">*</span></label>
                                        <select name="experience" required value={formData.experience} onChange={handleInputChange} className="h-[40px] w-full bg-gray-50 border border-gray-200 rounded-md px-3 text-gray-900 focus:outline-none focus:border-[#44c7f6] focus:ring-1 focus:ring-[#44c7f6] transition-colors appearance-none text-sm">
                                            <option value="" disabled className="text-gray-400">Select</option>
                                            <option value="Fresher">Fresher</option>
                                            <option value="1-2 Years">1-2 Years</option>
                                            <option value="3-5 Years">3-5 Years</option>
                                            <option value="5+ Years">5+ Years</option>
                                        </select>
                                    </div>

                                    <div className='single-contact-group'>
                                        <label className="contact-label !text-gray-800 text-sm mb-1 block">Phone<span className="text-blue-500 ml-1">*</span></label>
                                        <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} placeholder="Enter Your Number" className="h-[40px] w-full bg-gray-50 border border-gray-200 rounded-md px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#44c7f6] focus:ring-1 focus:ring-[#44c7f6] transition-colors text-sm" />
                                    </div>
                                </div>

                                {/* Salary */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className='single-contact-group'>
                                        <label className="contact-label !text-gray-800 text-sm mb-1 block">Current Salary<span className="text-blue-500 ml-1">*</span></label>
                                        <input type="text" name="currentSalary" required value={formData.currentSalary} onChange={handleInputChange} placeholder="e.g. 25,000" className="h-[40px] w-full bg-gray-50 border border-gray-200 rounded-md px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#44c7f6] focus:ring-1 focus:ring-[#44c7f6] transition-colors text-sm" />
                                    </div>
                                    <div className='single-contact-group'>
                                        <label className="contact-label !text-gray-800 text-sm mb-1 block">Expected Salary<span className="text-blue-500 ml-1">*</span></label>
                                        <input type="text" name="expectedSalary" required value={formData.expectedSalary} onChange={handleInputChange} placeholder="e.g. 35,000" className="h-[40px] w-full bg-gray-50 border border-gray-200 rounded-md px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#44c7f6] focus:ring-1 focus:ring-[#44c7f6] transition-colors text-sm" />
                                    </div>
                                </div>
                                {/* LinkedIn */}
                                <div className='single-contact-group'>
                                    <label className="contact-label !text-gray-800 text-sm mb-1 block">LinkedIn Profile<span className="text-blue-500 ml-1">*</span></label>
                                    <input type="url" name="linkedinUrl" required value={formData.linkedinUrl} onChange={handleInputChange} placeholder="Enter URL" className="h-[40px] w-full bg-gray-50 border border-gray-200 rounded-md px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#44c7f6] focus:ring-1 focus:ring-[#44c7f6] transition-colors text-sm" />
                                </div>
                                {/* Resume */}
                                <div className='single-contact-group'>
                                    <label className="contact-label !text-gray-800 text-sm mb-1 block">Resume Attachment<span className="text-blue-500 ml-1">*</span></label>
                                    <div className="h-[40px] relative w-full bg-gray-50 border border-gray-200 rounded-md focus-within:border-[#44c7f6] focus-within:ring-1 focus-within:ring-[#44c7f6] transition-colors text-sm">
                                        <input type="file" name="resume" required onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" accept=".pdf,.doc,.docx" />
                                        <div className="h-[40px] flex items-center justify-between px-3">
                                            <span className={formData.resume ? 'text-gray-900 truncate' : 'text-gray-400'}>{formData.resume ? formData.resume.name : 'Choose File'}</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <button type="submit" className="h-[44px] flex justify-center items-center mt-3 w-full rounded-md text-white font-bold uppercase hover:shadow-lg hover:shadow-[#0037f0]/20 hover:opacity-90 transition-all duration-300" style={{ background: 'linear-gradient(#44c7f6,#0037f0)', border: '1px solid #f8f8f8', fontSize: '14px' }}>
                                        Submit Application
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
