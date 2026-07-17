import React, { useState } from 'react';
import { Check, Lock } from 'lucide-react';
import PhoneInputModule from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

const PhoneInput = PhoneInputModule.default ? PhoneInputModule.default : PhoneInputModule;

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        whatsappNumber: '',
        budget: '',
        projectDescription: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.fullName || !formData.email || !formData.whatsappNumber || !formData.projectDescription) {
            toast.error("Please fill in all required fields.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        try {
            setLoading(true);
            const apiUrl = import.meta.env.VITE_API_URL || '';
            const payload = {
                name: formData.fullName,
                email: formData.email,
                whatsappNumber: formData.whatsappNumber,
                message: `Budget: ${formData.budget || 'Not specified'}\nProject Description: ${formData.projectDescription}`,
                developerTitle: "Hire Top Talent (Main Form)"
            };

            const response = await axios.post(`${apiUrl}/v1/kretoss-new/hire-us`, payload);

            if (response.data.success) {
                toast.success("Inquiry submitted successfully!");
                setSubmitted(true);
                setFormData({
                    fullName: '',
                    email: '',
                    whatsappNumber: '',
                    budget: '',
                    projectDescription: ''
                });
            } else {
                toast.error(response.data.message || "Failed to submit. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting inquiry:", error);
            toast.error("An error occurred while submitting.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-10 lg:py-20 bg-[#f9fbff] font-sans">
            <Toaster />
            <div className="container mx-auto px-6 max-w-[1200px]">
                <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">

                    {/* Left Side: Info */}
                    <motion.div
                        className="lg:sticky lg:top-24"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="text-[#3b82f6] font-bold text-[12px] tracking-[0.15em] uppercase mb-4">
                            Hire Top Talent
                        </div>
                        <h2 className="text-[24px] md:text-[36px] font-semibold leading-[1.1] text-[#0f172a] mb-6 tracking-tight">
                            Build Your Dream Team Today
                        </h2>
                        <p className="text-[#64748b] text-[16px] leading-relaxed mb-10 max-w-md">
                            Whether you need a single dedicated developer, a full-stack agile team, or an expert to take over an existing project, we have the right talent ready to onboard.
                        </p>

                        <div className="flex flex-col gap-4">
                            {[
                                "Top 1% Vetted Developers",
                                "Seamless Integration & Onboarding",
                                "Flexible Engagement Models",
                                "Strict NDA & IP Protection",
                                "Risk-Free Trial Available"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="w-7 h-7 rounded-lg bg-[#eafaf0] flex items-center justify-center shrink-0">
                                        <Check className="w-4 h-4 text-[#16a34a]" strokeWidth={3} />
                                    </div>
                                    <span className="text-[#1e293b] font-bold text-[15.5px]">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side: Form Card */}
                    <motion.div
                        className="bg-white rounded-[24px] lg:rounded-[24px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-[#f1f5f9]"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {submitted ? (
                            <div className="text-center py-16">
                                <div className="w-20 h-20 rounded-full bg-[#eafaf0] text-[#16a34a] mx-auto flex items-center justify-center mb-6">
                                    <Check className="w-10 h-10" strokeWidth={3} />
                                </div>
                                <h3 className="text-3xl font-extrabold text-[#0f172a] mb-4">
                                    Thank You!
                                </h3>
                                <p className="text-[#64748b] text-lg mb-8 max-w-md mx-auto">
                                    Your inquiry has been received. Our team will reach out within 24 hours with next steps.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setSubmitted(false)}
                                    className="font-bold text-[#3b82f6] border-2 border-[#e2e8f0] hover:border-[#3b82f6] px-8 py-3 rounded-xl transition-colors"
                                >
                                    Submit Another Inquiry
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-3">

                                <div className="flex flex-col gap-0.5">
                                    <label className="text-[12px] font-extrabold text-[#475569] uppercase tracking-wider">Full Name *</label>
                                    <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="John Smith" className="w-full p-3 px-4 rounded-xl border border-[#e2e8f0] text-[15px] font-medium text-[#0f172a] placeholder-[#94a3b8] outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all bg-white normal-case" />
                                </div>

                                {/* <div className="flex flex-col gap-0.5">
                                    <label className="text-[12px] font-extrabold text-[#475569] uppercase tracking-wider">Company Name</label>
                                    <input type="text" placeholder="Acme Inc." className="w-full p-3 px-4 rounded-xl border border-[#e2e8f0] text-[15px] font-medium text-[#0f172a] placeholder-[#94a3b8] outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all bg-white normal-case" />
                                </div> */}

                                <div className="flex flex-col gap-0.5">
                                    <label className="text-[12px] font-extrabold text-[#475569] uppercase tracking-wider">Email *</label>
                                    <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" className="w-full p-3 px-4 rounded-xl border border-[#e2e8f0] text-[15px] font-medium text-[#0f172a] placeholder-[#94a3b8] outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all bg-white normal-case" />
                                </div>

                                <div data-lenis-prevent="true" className="flex flex-col gap-0.5 [&_.react-tel-input]:!font-sans [&_.country-name]:!text-[#0f172a] [&_.dial-code]:!text-[#64748b] [&_.country:hover]:!bg-[#f1f5f9] [&_.country.highlight]:!bg-[#f1f5f9]">
                                    <label className="text-[12px] font-extrabold text-[#475569] uppercase tracking-wider">Whatsapp Number</label>
                                    <PhoneInput
                                        country={'in'}
                                        value={formData.whatsappNumber}
                                        onChange={phone => setFormData({ ...formData, whatsappNumber: phone })}
                                        inputProps={{
                                            name: 'phone',
                                            required: true,
                                        }}
                                        containerClass="!w-full"
                                        inputClass="!w-full !h-[50px] !pl-[50px] !pr-4 !rounded-xl !border !border-[#e2e8f0] !text-[15px] !font-medium !text-[#0f172a] !placeholder-[#94a3b8] !outline-none focus:!border-[#3b82f6] focus:!ring-1 focus:!ring-[#3b82f6] !transition-all !bg-white !normal-case"
                                        buttonClass="!border-[#e2e8f0] !border-r-0 !rounded-l-xl !bg-[#f8fafc] hover:!bg-[#f1f5f9] !w-[42px] !pl-1"
                                        dropdownClass="!rounded-xl !border-[#e2e8f0] !shadow-lg !text-[14px] !font-medium !text-[#0f172a] !bg-white !overscroll-contain"
                                    />
                                </div>

                                {/* <div className="flex flex-col gap-0.5">
                                    <label className="text-[12px] font-extrabold text-[#475569] uppercase tracking-wider">Country</label>
                                    <select className="w-full p-3 px-4 rounded-xl border border-[#e2e8f0] text-[15px] font-medium text-[#475569] outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all bg-white appearance-none normal-case bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23475569%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1rem_center] bg-[length:1em]">
                                        <option>Select country</option>
                                        <option>United States</option>
                                        <option>United Kingdom</option>
                                        <option>Canada</option>
                                        <option>Australia</option>
                                        <option>Germany</option>
                                        <option>UAE</option>
                                        <option>India</option>
                                        <option>Other</option>
                                    </select>
                                </div> */}

                                {/* <div className="flex flex-col gap-0.5">
                                    <label className="text-[12px] font-extrabold text-[#475569] uppercase tracking-wider">Technology Needed</label>
                                    <select className="w-full p-3 px-4 rounded-xl border border-[#e2e8f0] text-[15px] font-medium text-[#475569] outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all bg-white appearance-none normal-case bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23475569%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1rem_center] bg-[length:1em]">
                                        <option>Select technology</option>
                                        <option>React.js</option>
                                        <option>Node.js</option>
                                        <option>Flutter</option>
                                        <option>Shopify</option>
                                        <option>Python</option>
                                        <option>WordPress</option>
                                        <option>.NET</option>
                                        <option>Full Stack</option>
                                        <option>Other</option>
                                    </select>
                                </div> */}

                                {/* <div className="flex flex-col gap-0.5">
                                    <label className="text-[12px] font-extrabold text-[#475569] uppercase tracking-wider">Hiring Model</label>
                                    <select className="w-full p-3 px-4 rounded-xl border border-[#e2e8f0] text-[15px] font-medium text-[#475569] outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all bg-white appearance-none normal-case bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23475569%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1rem_center] bg-[length:1em]">
                                        <option>Select model</option>
                                        <option>Dedicated Developer</option>
                                        <option>Hourly Hiring</option>
                                        <option>Fixed Cost Project</option>
                                        <option>Not sure yet</option>
                                    </select>
                                </div> */}

                                <div className="flex flex-col gap-0.5">
                                    <label className="text-[12px] font-extrabold text-[#475569] uppercase tracking-wider">Budget</label>
                                    <select name="budget" value={formData.budget} onChange={handleChange} className="w-full p-3 px-4 rounded-xl border border-[#e2e8f0] text-[15px] font-medium text-[#475569] outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all bg-white appearance-none normal-case bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23475569%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1rem_center] bg-[length:1em]">
                                        <option value="">Select budget</option>
                                        <option>Under $5,000</option>
                                        <option>$5,000 – $15,000</option>
                                        <option>$15,000 – $50,000</option>
                                        <option>$50,000+</option>
                                    </select>
                                </div>

                                <div className="col-span-1 md:col-span-2 flex flex-col gap-1.5">
                                    <label className="text-[12px] font-extrabold text-[#475569] uppercase tracking-wider">Project Description</label>
                                    <textarea name="projectDescription" value={formData.projectDescription} onChange={handleChange} required rows="4" placeholder="Tell us about your project, goals, and timeline..." className="w-full p-3 px-4 rounded-xl border border-[#e2e8f0] text-[15px] font-medium resize-y text-[#0f172a] placeholder-[#94a3b8] outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all bg-white normal-case"></textarea>
                                </div>

                                <button type="submit" disabled={loading} className="h-[44px] flex items-center justify-center col-span-1 md:col-span-2 mt-2 font-bold text-[16px] rounded-xl  bg-gradient-to-br from-[#2563eb] to-[#3b82f6] text-white shadow-[0_8px_20px_rgba(79,70,229,0.25)] hover:shadow-[0_10px_25px_rgba(79,70,229,0.35)] hover:-translate-y-0.5 transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:-translate-y-0">
                                    {loading ? "Submitting..." : "Get Free Consultation \u2192"}
                                </button>

                                <p className="col-span-1 md:col-span-2 m-0 mt-1 flex items-center justify-center gap-1.5 text-center text-[13px] text-[#94a3b8] font-medium">
                                    <Lock className="w-3.5 h-3.5 text-amber-500" />
                                    Your information is 100% confidential and protected by NDA.
                                </p>

                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
