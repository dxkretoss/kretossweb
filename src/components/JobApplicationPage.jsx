import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { jobsData } from '../data/jobs';
import useDocumentMetadata from '../hooks/useDocumentMetadata';

export default function JobApplicationPage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [selectedJob, setSelectedJob] = useState('');

    useDocumentMetadata({
        title: `Apply for ${selectedJob || 'Job'} | Careers | Kretoss Technology`,
        description: `Apply for the ${selectedJob || 'Job'} position at Kretoss Technology. Fill out the application form and attach your resume.`
    });

    // Form state
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        appliedFor: '',
        experience: '',
        currentSalary: '',
        expectedSalary: '',
        linkedinUrl: '',
        resume: null
    });

    useEffect(() => {
        if (slug) {
            const job = jobsData.find(j => j.slug === slug);
            if (job) {
                setSelectedJob(job.title);
                setFormData(prev => ({ ...prev, appliedFor: job.title }));
            }
        }
    }, [slug]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Application submitted successfully!');
        navigate('/careers');
    };

    return (
        <div className="bg-[#fafcff] py-10 md:py-20 relative font-sans overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-[#0e54f1]/10 rounded-full blur-[80px]"></div>
                <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[80px]"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-[42px] font-semibold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#44c7f6] to-[#0037f0]">Job Application</span> <span className="text-black">Form</span>
                    </h1>
                </div>

                {/* Form Container */}
                <div className="max-w-[800px] mx-auto bg-white border border-dashed border-gray-300 shadow-xl p-6 sm:p-10 lg:p-12 rounded-xl">
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Full Name */}
                        <div className='single-contact-group'>
                            <label className="contact-label !text-gray-800">Full Name<span className="text-blue-500 ml-1">*</span></label>
                            <input
                                type="text"
                                name="fullName"
                                required
                                value={formData.fullName}
                                onChange={handleInputChange}
                                placeholder="Enter Your Name"
                                className="h-[40px] w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#44c7f6] focus:ring-1 focus:ring-[#44c7f6] transition-colors"
                            />
                        </div>

                        {/* Email & Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className='single-contact-group'>
                                <label className="contact-label !text-gray-800">Email<span className="text-blue-500 ml-1">*</span></label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter Your Email"
                                    className="h-[40px] w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#44c7f6] focus:ring-1 focus:ring-[#44c7f6] transition-colors"
                                />
                            </div>
                            <div className='single-contact-group'>
                                <label className="contact-label !text-gray-800">Phone Number<span className="text-blue-500 ml-1">*</span></label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Enter Your Number"
                                    className="h-[40px] w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#44c7f6] focus:ring-1 focus:ring-[#44c7f6] transition-colors"
                                />
                            </div>
                        </div>

                        {/* Applied for & Experience */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className='single-contact-group'>
                                <label className="contact-label !text-gray-800">Applied for<span className="text-blue-500 ml-1">*</span></label>
                                <select
                                    name="appliedFor"
                                    required
                                    value={formData.appliedFor}
                                    onChange={handleInputChange}
                                    className="h-[40px]  w-full bg-gray-50 border border-gray-200 rounded-md px-4 text-gray-900 focus:outline-none focus:border-[#44c7f6] focus:ring-1 focus:ring-[#44c7f6] transition-colors appearance-none"
                                >
                                    <option value="" disabled className="text-gray-400">Position Name</option>
                                    {jobsData.map((job, idx) => (
                                        <option key={idx} value={job.title}>{job.title}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='single-contact-group'>
                                <label className="contact-label !text-gray-800">Experience (in Years)<span className="text-blue-500 ml-1">*</span></label>
                                <select
                                    name="experience"
                                    required
                                    value={formData.experience}
                                    onChange={handleInputChange}
                                    className="h-[40px] w-full bg-gray-50 border border-gray-200 rounded-md px-4 text-gray-900 focus:outline-none focus:border-[#44c7f6] focus:ring-1 focus:ring-[#44c7f6] transition-colors appearance-none"
                                >
                                    <option value="" disabled className="text-gray-400">Select</option>
                                    <option value="Fresher">Fresher</option>
                                    <option value="1-2 Years">1-2 Years</option>
                                    <option value="3-5 Years">3-5 Years</option>
                                    <option value="5+ Years">5+ Years</option>
                                </select>
                            </div>
                        </div>

                        {/* Current & Expected Salary */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className='single-contact-group'>
                                <label className="contact-label !text-gray-800">Current Salary<span className="text-blue-500 ml-1">*</span></label>
                                <input
                                    type="text"
                                    name="currentSalary"
                                    required
                                    value={formData.currentSalary}
                                    onChange={handleInputChange}
                                    placeholder="e.g. 25,000"
                                    className="h-[40px] w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#44c7f6] focus:ring-1 focus:ring-[#44c7f6] transition-colors"
                                />
                            </div>
                            <div className='single-contact-group'>
                                <label className="contact-label !text-gray-800">Expected Salary<span className="text-blue-500 ml-1">*</span></label>
                                <input
                                    type="text"
                                    name="expectedSalary"
                                    required
                                    value={formData.expectedSalary}
                                    onChange={handleInputChange}
                                    placeholder="e.g. 35,000"
                                    className="h-[40px] w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#44c7f6] focus:ring-1 focus:ring-[#44c7f6] transition-colors"
                                />
                            </div>
                        </div>

                        {/* LinkedIn */}
                        <div className='single-contact-group'>
                            <label className="contact-label !text-gray-800">LinkedIn Profile Url<span className="text-blue-500 ml-1">*</span></label>
                            <input
                                type="url"
                                name="linkedinUrl"
                                required
                                value={formData.linkedinUrl}
                                onChange={handleInputChange}
                                placeholder="Enter URL"
                                className="h-[40px] w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#44c7f6] focus:ring-1 focus:ring-[#44c7f6] transition-colors"
                            />
                        </div>

                        {/* Resume Attachment */}
                        <div className='single-contact-group'>
                            <label className="contact-label !text-gray-800">Resume Attachment<span className="text-blue-500 ml-1">*</span></label>
                            <div className="h-[40px] relative w-full bg-gray-50 border border-gray-200 rounded-md focus-within:border-[#44c7f6] focus-within:ring-1 focus-within:ring-[#44c7f6] transition-colors">
                                <input
                                    type="file"
                                    name="resume"
                                    required
                                    onChange={handleFileChange}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                    accept=".pdf,.doc,.docx"
                                />
                                <div className="h-[40px] flex items-center justify-between px-4">
                                    <span className={formData.resume ? 'text-gray-900' : 'text-gray-400'}>
                                        {formData.resume ? formData.resume.name : 'Choose File'}
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="h-[44px] flex justify-center items-center  mt-3 w-full py-3 rounded-md text-white font-bold  uppercase hover:shadow-lg hover:shadow-[#0037f0]/20 hover:opacity-90 transition-all duration-300"
                                style={{ background: 'linear-gradient(#44c7f6,#0037f0)', border: '1px solid #f8f8f8', fontSize: '16px', fontWeight: '600' }}

                            >
                                Submit Application
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
