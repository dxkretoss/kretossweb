import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { jobsData } from '../data/jobs';
import AnimatedButton from './ui/AnimatedButton';

export default function JobDetailsPage() {
    const { slug } = useParams();
    const job = jobsData.find(j => j.slug === slug);

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
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-start">

                    {/* Left Column (Job Details) */}
                    <div className="lg:col-span-2 flex flex-col gap-8 md:gap-12">

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

                    {/* Right Column (Sticky Sidebar) */}
                    <div className="lg:col-span-1 lg:sticky lg:top-32 w-full mt-6 lg:mt-0">
                        <div className="bg-[#111] text-white rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group">

                            <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 leading-snug">
                                Build your future with us, together we grow
                            </h3>

                            <div className="mb-6 sm:mb-8">
                                <AnimatedButton href={`/careers/${slug}/apply`} text="APPLY NOW" />
                            </div>

                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                Join us and shape a successful future through innovative projects and collaborative growth.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
