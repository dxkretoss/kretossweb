import React, { useEffect } from 'react';
import ContactHero from './contact/ContactHero';

export default function ContactPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#fafcff]">
            {/* Contact Hero Animated Component */}
            <ContactHero />

            {/* Contact Section Wrapper */}
            <section className="pt-20 pb-20 px-6 lg:px-12 container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">

                    {/* Left: Dark Form matching screenshot */}
                    <div className="bg-[#0f0f0f] rounded-xl p-8 md:p-10 shadow-2xl">
                        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                            {/* Full Name */}
                            <div className="flex flex-col gap-2.5">
                                <label className="text-sm font-semibold text-white tracking-wide">Full Name</label>
                                <input type="text" placeholder="Enter Your Name" className="px-4 py-3.5 rounded-md bg-transparent border border-white/10 text-white focus:border-[#44c7f6] focus:ring-1 focus:ring-[#44c7f6] outline-none transition-all placeholder:text-gray-600 text-sm" />
                            </div>

                            {/* Company Name & Email */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2.5">
                                    <label className="text-sm font-semibold text-white tracking-wide">Company name</label>
                                    <input type="text" placeholder="Enter name" className="px-4 py-3.5 rounded-md bg-transparent border border-white/10 text-white focus:border-[#44c7f6] focus:ring-1 focus:ring-[#44c7f6] outline-none transition-all placeholder:text-gray-600 text-sm" />
                                </div>
                                <div className="flex flex-col gap-2.5">
                                    <label className="text-sm font-semibold text-white tracking-wide">Email*</label>
                                    <input type="email" placeholder="Enter Your Email" className="px-4 py-3.5 rounded-md bg-transparent border border-white/10 text-white focus:border-[#44c7f6] focus:ring-1 focus:ring-[#44c7f6] outline-none transition-all placeholder:text-gray-600 text-sm" />
                                </div>
                            </div>

                            {/* Services & Budget */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2.5">
                                    <label className="text-sm font-semibold text-white tracking-wide">Services required*</label>
                                    <select className="px-4 py-3.5 rounded-md bg-transparent border border-white/10 text-gray-400 focus:text-white focus:border-[#44c7f6] focus:ring-1 focus:ring-[#44c7f6] outline-none transition-all appearance-none cursor-pointer text-sm">
                                        <option value="" disabled selected>Select Your Service</option>
                                        <option value="uiux" className="bg-[#0f0f0f] text-white">UI/UX Design</option>
                                        <option value="web" className="bg-[#0f0f0f] text-white">Web Development</option>
                                        <option value="mobile" className="bg-[#0f0f0f] text-white">Mobile Apps</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2.5">
                                    <label className="text-sm font-semibold text-white tracking-wide">Project budget*</label>
                                    <select className="px-4 py-3.5 rounded-md bg-transparent border border-white/10 text-gray-400 focus:text-white focus:border-[#44c7f6] focus:ring-1 focus:ring-[#44c7f6] outline-none transition-all appearance-none cursor-pointer text-sm">
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
                                <label className="text-sm font-semibold text-white tracking-wide">Projects Details*</label>
                                <textarea rows="4" placeholder="Tell us more about your idea" className="px-4 py-3.5 rounded-md bg-transparent border border-white/10 text-white focus:border-[#44c7f6] focus:ring-1 focus:ring-[#44c7f6] outline-none transition-all resize-none placeholder:text-gray-600 text-sm"></textarea>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="mt-3 w-full py-4 rounded-md bg-[linear-gradient(to_right,#44c7f6,#0037f0)] text-white font-bold text-sm tracking-wider uppercase hover:shadow-lg hover:shadow-[#0037f0]/20 hover:opacity-90 transition-all duration-300">
                                LET'S WORK TOGETHER
                            </button>

                            <p className="text-gray-400 text-sm mt-1">
                                Not in the mood to submit the form? <a href="https://calendly.com" target="_blank" rel="noreferrer" className="text-[#44c7f6] font-medium hover:underline">Book A Call Directly</a>
                            </p>
                        </form>
                    </div>

                    {/* Right: Contact Details (User's Text) Perfectly Styled */}
                    <div className="flex flex-col gap-10 lg:pl-6 py-4">
                        {/* Header Area */}
                        <div className="flex flex-col items-start gap-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-md text-[#0037f0] text-xs font-semibold uppercase tracking-wider">
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                Contact Us
                            </div>
                            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                                Have questions?
                            </h2>
                            <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                                Contact us using the form and details on this page. We're ready to help bring your ideas to life.
                            </p>
                        </div>

                        <hr className="border-gray-100" />

                        {/* Quick Contact Info */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {/* Phone */}
                            <div className="flex flex-col gap-3 group">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-md bg-white border border-gray-100 text-[#0037f0] flex items-center justify-center shadow-sm group-hover:bg-[#0037f0] group-hover:text-white transition-colors duration-300">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-base font-bold text-gray-900 tracking-wide">Call Us</h4>
                                </div>
                                <p className="text-gray-600 font-medium text-lg ml-13">(+91) 63534-23473</p>
                            </div>

                            {/* Email */}
                            <div className="flex flex-col gap-3 group">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-md bg-white border border-gray-100 text-[#0037f0] flex items-center justify-center shadow-sm group-hover:bg-[#0037f0] group-hover:text-white transition-colors duration-300">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-base font-bold text-gray-900 tracking-wide">Email</h4>
                                </div>
                                <p className="text-[#0037f0] font-medium text-lg ml-13 underline decoration-[#0037f0]/30 underline-offset-4">info@kretoss.com</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
