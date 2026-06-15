import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { jobsData } from '../../data/jobs';

gsap.registerPlugin(ScrollTrigger);

export default function JobOpenings() {
    const sectionRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".job-header", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

            gsap.from(".job-card", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".jobs-container",
                    start: "top 80%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-[#fafcff] relative">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                {/* Header */}
                <div className="job-header flex flex-col items-center text-center mb-16">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm mb-6">
                        <img
                            src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe28879c_Star%2018%20(1).svg"
                            loading="lazy" alt="Star Icon" className="w-3.5 h-3.5 animate-[spin_4s_linear_infinite] filter brightness-0"
                        />
                        <span className="text-sm text-gray-800 font-medium tracking-wide uppercase mt-0.5">We're Hiring</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#111] tracking-tight">
                        Open Job Positions
                    </h2>
                </div>

                {/* Job Cards */}
                <div className="jobs-container flex flex-col gap-8">
                    {jobsData.map((job) => (
                        <div key={job.id} className="job-card flex flex-col lg:flex-row gap-6 lg:gap-8 min-h-[400px]">
                            
                            {/* Render Image First on Mobile, conditional on Desktop */}
                            <div className={`w-full lg:w-1/2 rounded-2xl overflow-hidden relative group ${job.imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'}`}>
                                <img 
                                    src={job.image} 
                                    alt={job.title} 
                                    className="w-full h-full object-cover min-h-[300px] lg:min-h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>

                            {/* Text Content */}
                            <div className={`w-full lg:w-1/2 bg-white rounded-2xl p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col justify-center ${job.imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2'}`}>
                                {/* Title */}
                                <h3 className="text-2xl md:text-3xl font-bold text-[#111] mb-5">
                                    {job.title}
                                </h3>

                                {/* Badges */}
                                <div className="flex flex-wrap gap-3 mb-6">
                                    <span className="px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium text-gray-600 bg-gray-50">
                                        {job.location}
                                    </span>
                                    <span className="px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium text-gray-600 bg-gray-50">
                                        {job.type}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 text-base leading-relaxed mb-10">
                                    {job.description}
                                </p>

                                {/* Action Button */}
                                <div>
                                    <Link to={`/careers/${job.slug}`} className="inline-flex items-center gap-2 px-6 py-3 border border-[#111] text-[#111] hover:bg-[#111] hover:text-white transition-all duration-300 rounded-md font-medium text-sm tracking-wide uppercase">
                                        Apply Now
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform -rotate-45">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
