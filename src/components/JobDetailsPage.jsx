import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { jobsData } from '../data/jobs';
import AnimatedButton from './ui/AnimatedButton';

export default function JobDetailsPage() {
    const { slug } = useParams();
    const job = jobsData.find(j => j.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!job) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#fafcff]">
                <div className="text-[#111] text-2xl font-bold">Job not found</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#fafcff] text-[#111] pt-32 pb-20 font-sans">
            {/* Header Section */}
            <div className="container mx-auto px-6 lg:px-12 max-w-5xl mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                    <span className="bg-gradient-to-r from-[#44c7f6] to-[#0037f0] text-transparent bg-clip-text">
                        {job.title.split(' ')[0]}
                    </span>{' '}
                    {job.title.split(' ').slice(1).join(' ')}
                </h1>
                <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                    {job.description}
                </p>
            </div>

            {/* Info Grid */}
            <div className="container mx-auto px-6 lg:px-12 max-w-6xl mb-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {/* Category */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 mb-3 border border-gray-100">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="7" height="7"></rect>
                                <rect x="14" y="3" width="7" height="7"></rect>
                                <rect x="14" y="14" width="7" height="7"></rect>
                                <rect x="3" y="14" width="7" height="7"></rect>
                            </svg>
                        </div>
                        <span className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-medium">Category</span>
                        <span className="font-semibold text-[#111]">{job.category}</span>
                    </div>

                    {/* Location */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 mb-3 border border-gray-100">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                        </div>
                        <span className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-medium">Location</span>
                        <span className="font-semibold text-[#111]">{job.location}</span>
                    </div>

                    {/* Experience */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 mb-3 border border-gray-100">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                        </div>
                        <span className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-medium">Experience</span>
                        <span className="font-semibold text-[#111]">{job.experience}</span>
                    </div>

                    {/* Job Type */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 mb-3 border border-gray-100">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                            </svg>
                        </div>
                        <span className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-medium">Job Type</span>
                        <span className="font-semibold text-[#111]">{job.type}</span>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">

                    {/* Left Column (Job Details) */}
                    <div className="lg:col-span-2 flex flex-col gap-12">

                        {/* Job Description */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6 text-[#111]">Job Description</h2>
                            <p className="text-gray-600 leading-relaxed">
                                {job.description}
                            </p>
                        </section>

                        <div className="h-[1px] w-full bg-gray-200/60"></div>

                        {/* Key Responsibilities */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6 text-[#111]">Key Responsibilities</h2>
                            <ul className="flex flex-col gap-4">
                                {job.responsibilities.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                                        <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                                            <div className="w-2 h-2 rounded-full bg-[#ff6b35]"></div>
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <div className="h-[1px] w-full bg-gray-200/60"></div>

                        {/* Key Requirements */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6 text-[#111]">Key Requirements</h2>
                            <ul className="flex flex-col gap-4">
                                {job.requirements.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                                        <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                                            <div className="w-2 h-2 rounded-full bg-[#ff6b35]"></div>
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
                                <h2 className="text-2xl font-bold mb-6 text-[#111]">Nice to Have</h2>
                                <ul className="flex flex-col gap-4">
                                    {job.niceToHave.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                                            <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                                                <div className="w-2 h-2 rounded-full bg-[#ff6b35]"></div>
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}
                    </div>

                    {/* Right Column (Sticky Sidebar) */}
                    <div className="lg:col-span-1 lg:sticky lg:top-32">
                        <div className="bg-[#111] text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden group">

                            {/* Subtle background glow effect */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6b35] rounded-full blur-[60px] opacity-20 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>

                            <h3 className="text-2xl font-bold mb-6 leading-snug">
                                Build your future with us, together we grow
                            </h3>

                            <div className="mb-8">
                                <AnimatedButton href="/contact" text="APPLY NOW" />
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                Join us and shape a successful future through innovative projects and collaborative growth.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
