import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ContactHero from './contact/ContactHero';

gsap.registerPlugin(ScrollTrigger);

const StarRating = ({ rating }) => {
    return (
        <div className="flex gap-[2px]">
            {[1, 2, 3, 4, 5].map((star) => {
                const fillPercent = Math.min(Math.max(rating - (star - 1), 0), 1) * 100;
                return (
                    <div key={star} className="relative w-[18px] h-[18px]">
                        <svg className="absolute top-0 left-0 w-full h-full text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                        <svg className="absolute top-0 left-0 w-full h-full text-[#FFB800] overflow-hidden" fill="currentColor" viewBox="0 0 24 24" style={{ clipPath: `inset(0 ${100 - fillPercent}% 0 0)` }}>
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                    </div>
                );
            })}
        </div>
    );
};

const REVIEWS_DATA = [
    { name: 'Google', rating: 4.9 },
    { name: 'Clutch', rating: 5.0 },
    // { name: 'Sitejabber', rating: 4.0 },
    { name: 'Trustpilot', rating: 4.7 }
];

export default function ContactPage() {
    const [activeReview, setActiveReview] = useState(0);
    const reviewWrapperRef = useRef(null);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (reviewWrapperRef.current) {
                gsap.to(reviewWrapperRef.current, {
                    y: -15, opacity: 0, duration: 0.4, ease: "power2.in",
                    onComplete: () => {
                        setActiveReview(prev => (prev + 1) % REVIEWS_DATA.length);
                        gsap.fromTo(reviewWrapperRef.current,
                            { y: 15, opacity: 0 },
                            { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
                        );
                    }
                });
            }
        }, 3500); // Change review every 3.5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-[#fafcff] ">
            {/* Contact Hero Animated Component */}
            <ContactHero />

            {/* Contact Section Wrapper */}

            <section className="contact relative">
                <div className="container-full-width w-layout-blockcontainer container">
                    <div className='contact-content-wrapper flex flex-col lg:flex-row gap-12 lg:gap-12 items-start'>
                        <div className="w-full lg:w-[55%]">
                            {/* Left: Dark Form matching screenshot */}
                            <div className="bg-[#0f0f0f] rounded-xl p-6 sm:p-8 md:p-[30px] shadow-2xl">
                                <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                                    {/* Full Name */}
                                    <div className="flex flex-col gap-2.5">
                                        <label className="contact-label">Full Name</label>
                                        <input type="text" placeholder="Enter Your Name" className="px-4 py-3.5 rounded-md bg-transparent border border-white/10 text-white focus:border-[#44c7f6] focus:ring-1 focus:ring-[#44c7f6] outline-none transition-all placeholder:text-gray-600 text-sm" />
                                    </div>

                                    {/* Company Name & Email */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="flex flex-col gap-2.5">
                                            <label className="contact-label">Company name</label>
                                            <input type="text" placeholder="Enter name" className="px-4 py-3.5 rounded-md bg-transparent border border-white/10 text-white focus:border-[#44c7f6] focus:ring-1 focus:ring-[#44c7f6] outline-none transition-all placeholder:text-gray-600 text-sm" />
                                        </div>
                                        <div className="flex flex-col gap-2.5">
                                            <label className="contact-label">Email*</label>
                                            <input type="email" placeholder="Enter Your Email" className="px-4 py-3.5 rounded-md bg-transparent border border-white/10 text-white focus:border-[#44c7f6] focus:ring-1 focus:ring-[#44c7f6] outline-none transition-all placeholder:text-gray-600 text-sm" />
                                        </div>
                                    </div>

                                    {/* Services & Budget */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="flex flex-col gap-2.5">
                                            <label className="contact-label">Services required*</label>
                                            <select className="px-4 py-3.5 rounded-md bg-transparent border border-white/10 text-gray-400 focus:text-white focus:border-[#44c7f6] focus:ring-1 focus:ring-[#44c7f6] outline-none transition-all  cursor-pointer text-sm">
                                                <option value="" disabled selected>Select Your Service</option>
                                                <option value="uiux" className="bg-[#0f0f0f] text-white">UI/UX Design</option>
                                                <option value="web" className="bg-[#0f0f0f] text-white">Web Development</option>
                                                <option value="mobile" className="bg-[#0f0f0f] text-white">Mobile Apps</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col gap-2.5">
                                            <label className="contact-label">Project budget*</label>
                                            <select className="px-4 py-3.5 rounded-md bg-transparent border border-white/10 text-gray-400 focus:text-white focus:border-[#44c7f6] focus:ring-1 focus:ring-[#44c7f6] outline-none transition-all  cursor-pointer text-sm">
                                                <option value="" disabled selected>Select Your Range</option>
                                                <option value="5k" className="bg-[#0f0f0f] text-white">Less than $5k</option>
                                                <option value="10k" className="bg-[#0f0f0f] text-white">$5k - $10k</option>
                                                <option value="25k" className="bg-[#0f0f0f] text-white">$10k - $25k</option>
                                                <option value="25k+" className="bg-[#0f0f0f] text-white">$25k+</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Projects Details */}
                                    <div className="flex flex-col gap-2.5">
                                        <label className="contact-label">Projects Details*</label>
                                        <textarea rows="4" placeholder="Tell us more about your idea" className="px-4 py-3.5 rounded-md bg-transparent border border-white/10 text-white focus:border-[#44c7f6] focus:ring-1 focus:ring-[#44c7f6] outline-none transition-all resize-none placeholder:text-gray-600 text-sm"></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="h-[44px] flex justify-center items-center mt-3 w-full py-3 rounded-md text-white font-bold  uppercase hover:shadow-lg hover:shadow-[#0037f0]/20 hover:opacity-90 transition-all duration-300"
                                        style={{ background: 'linear-gradient(#44c7f6,#0037f0)', border: '1px solid #f8f8f8', fontSize: '16px', fontWeight: '600' }}
                                    >
                                        LET'S WORK TOGETHER
                                    </button>

                                    <p className="text-white text-center sm:text-start text-[16px] md:text-[18px] mt-1">
                                        Not in the mood to submit the form? <a href="https://calendly.com" target="_blank" rel="noreferrer" className="text-[#44c7f6] font-medium hover:underline">Book A Call Directly</a>
                                    </p>
                                </form>
                            </div>
                        </div>


                        {/* Right: Contact Details (User's Text) Perfectly Styled */}
                        <div className="w-full lg:w-[42%] flex flex-col mt-5 md:mt-0">

                            <div className='flex flex-col gap-6'>
                                {/* Header Area */}
                                <div className="flex flex-col items-start gap-2">

                                    <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-bold text-[#0a0a0a] leading-[1.1] tracking-tight">
                                        Have questions?
                                    </h2>
                                    <p className="text-gray-500 text-[14px] sm:text-base leading-relaxed max-w-md">
                                        Contact us using the form and details on this page. We're ready to help bring your ideas to life.
                                    </p>
                                </div>



                                {/* Quick Contact Info */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                                    {/* Phone */}
                                    <div className="flex flex-col gap-3 group">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-md bg-white border border-gray-100 text-[#0037f0] flex items-center justify-center shadow-sm group-hover:bg-[linear-gradient(to_right,#44c7f6,#0037f0)] group-hover:border-transparent group-hover:text-white transition-all duration-300">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <h4 className="text-base font-bold text-gray-900 tracking-wide">Call Us</h4>
                                        </div>
                                        <p className="text-gray-600 font-medium text-base ml-0 sm:ml-13">(+91) 63534-23473</p>
                                    </div>

                                    {/* Email */}
                                    <div className="flex flex-col gap-3 group">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-md bg-white border border-gray-100 text-[#0037f0] flex items-center justify-center shadow-sm group-hover:bg-[linear-gradient(to_right,#44c7f6,#0037f0)] group-hover:border-transparent group-hover:text-white transition-all duration-300">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <h4 className="text-base font-bold text-gray-900 tracking-wide">Email</h4>
                                        </div>
                                        <p className="text-[#0037f0] font-medium text-base sm:text-lg ml-0 sm:ml-13 underline decoration-[#0037f0]/30 underline-offset-4 break-all">info@kretoss.com</p>
                                    </div>
                                </div>

                            </div>

                            {/* Reviews above Author */}
                            <div className="flex flex-col justify-start items-start gap-5 mt-0 md:mt-12 pt-8 md:pt-10 border-t border-gray-100">
                                {/* Single Animated Review */}
                                <div className="h-[24px] overflow-hidden flex items-center">
                                    <div className="flex items-center gap-3" ref={reviewWrapperRef}>
                                        <div className="w-[85px] text-[18px] font-bold text-[#111]">
                                            {REVIEWS_DATA[activeReview].name}
                                        </div>
                                        <StarRating rating={REVIEWS_DATA[activeReview].rating} />
                                        <div className="text-[14px] font-medium text-gray-600">
                                            {REVIEWS_DATA[activeReview].rating.toFixed(1)} / 5
                                        </div>
                                    </div>
                                </div>

                                {/* Author info */}
                                <div className="contact-author-review">
                                    <div className="contact-auhtor-box">

                                        <div className="author-image-box">
                                            <img src="/grouppics/ankursir.png"
                                                loading="lazy" alt="Author Image" className="author-image" />
                                        </div>
                                    </div>
                                    <div className="author-title-designation">
                                        <h3 className="author-title">Ankur Patel</h3>
                                        <div className="author-designation">CEO & Founder</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
}
