import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { jobsData } from '../../data/jobs';
import Badge from '../ui/Badge';
import AnimatedButton from '../ui/AnimatedButton';

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
        <section ref={sectionRef} className="py-10 lg:py-20 bg-[#fafcff] relative">
            <div className="container mx-auto w-layout-blockcontainer container-full-width relative z-10">
                {/* Header */}
                <div className="job-header flex flex-col items-center text-center mb-8 sm:mb-16">
                    {/* Badge */}
                    <div className='mb-5'>
                        <Badge>We're Hiring</Badge>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-semibold text-[#111] tracking-tight">
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
                                    className="w-full object-cover h-[250px] sm:h-[300px] lg:h-full lg:min-h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>

                            {/* Text Content */}
                            <div className={`w-full lg:w-1/2 bg-white rounded-2xl p-6 sm:p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col justify-center ${job.imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2'}`}>
                                {/* Title */}
                                <h3 className="text-2xl md:text-3xl font-semibold text-[#111] mb-4 sm:mb-5">
                                    {job.title}
                                </h3>

                                {/* Badges */}
                                <div className="flex flex-wrap gap-2 sm:gap-3 mb-5 sm:mb-6">
                                    <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium text-gray-600 bg-gray-50">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                        {job.location}
                                    </span>
                                    <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium text-gray-600 bg-gray-50">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                        {job.type}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5 md:mb-10">
                                    {job.description}
                                </p>

                                {/* Action Button */}
                                <div className="mt-4">
                                    <AnimatedButton
                                        href={`/careers/${job.slug}`}
                                        text="APPLY NOW"
                                        className="!w-auto"
                                    />
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
