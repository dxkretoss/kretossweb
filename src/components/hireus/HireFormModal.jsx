import React, { useState } from 'react';
import { X } from 'lucide-react';
import PhoneInputModule from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

const PhoneInput = PhoneInputModule.default ? PhoneInputModule.default : PhoneInputModule;

const HireFormModal = ({ isOpen, onClose, devName, title }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsappNumber: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const shortName = devName ? devName.split(' ')[0] : 'our developer';
    const displayName = devName ? devName : 'a Developer';

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email || !formData.whatsappNumber || !formData.message) {
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
                ...formData, 
                developerTitle: title || `Hire ${displayName}` 
            };
            // Using /v1 to match your changes in Contact.jsx
            const response = await axios.post(`${apiUrl}/v1/kretoss-new/hire-us`, payload);

            if (response.data.success) {
                toast.success(response.data.message || "Request submitted successfully!");
                setFormData({
                    name: '',
                    email: '',
                    whatsappNumber: '',
                    message: ''
                });
                setTimeout(() => {
                    onClose();
                }, 2000); // Delay closing so the toast can be seen
            } else {
                toast.error(response.data.message || "Failed to submit. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting request:", error);
            toast.error("An error occurred while submitting the request.");
        } finally {
            setLoading(false);
        }
    };

    const handleClose = () => {
        setFormData({
            name: '',
            email: '',
            whatsappNumber: '',
            message: ''
        });
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6">
            <Toaster />
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-[#0a1520]/60 backdrop-blur-sm transition-opacity"
                onClick={handleClose}
            ></div>

            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-[500px] relative z-10 overflow-hidden flex flex-col max-h-[90vh]">
                <div className="p-6 pb-4 border-b border-gray-100 flex items-center justify-between bg-gradient-to-b from-[#f8faff] to-white">
                    <div>
                        <h3 className="text-xl font-bold text-[#0a1520]">{title || `Hire ${displayName}`}</h3>
                        <p className="text-[13px] text-gray-500 font-medium mt-1">Please fill in your details below.</p>
                    </div>
                    <button
                        onClick={handleClose}
                        className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors self-start"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6 overflow-y-auto" data-lenis-prevent="true">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-[12px] font-extrabold text-[#475569] uppercase tracking-wider mb-1.5">Name</label>
                                <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Smith" className="w-full p-3 px-4 rounded-xl border border-[#e2e8f0] text-[15px] font-medium text-[#0f172a] placeholder-[#94a3b8] outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all" />
                            </div>

                            <div>
                                <label className="block text-[12px] font-extrabold text-[#475569] uppercase tracking-wider mb-1.5">Email</label>
                                <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="w-full p-3 px-4 rounded-xl border border-[#e2e8f0] text-[15px] font-medium text-[#0f172a] placeholder-[#94a3b8] outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[12px] font-extrabold text-[#475569] uppercase tracking-wider mb-1.5">Whatsapp Number</label>
                            <PhoneInput
                                country={'in'}
                                value={formData.whatsappNumber}
                                onChange={phone => setFormData({ ...formData, whatsappNumber: phone })}
                                containerClass="!w-full"
                                inputClass="!w-full !py-[23px] !pl-[60px] !pr-4 !rounded-xl !border-[#e2e8f0] focus:!border-[#3b82f6] !text-[15px] !font-medium !text-[#0f172a]"
                                buttonClass="!border-[#e2e8f0] !border-r-0 !rounded-l-xl !bg-white hover:!bg-gray-50 !px-1.5"
                                dropdownClass="!rounded-xl !shadow-xl !border-gray-100"
                            />
                        </div>

                        <div>
                            <label className="block text-[12px] font-extrabold text-[#475569] uppercase tracking-wider mb-1.5">Message</label>
                            <textarea required rows="3" name="message" value={formData.message} onChange={handleChange} placeholder={`I want to hire ${shortName} for...`} className="w-full p-3 px-4 rounded-xl border border-[#e2e8f0] text-[15px] font-medium text-[#0f172a] placeholder-[#94a3b8] outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all resize-none"></textarea>
                        </div>

                        <button type="submit" disabled={loading} className="h-[44px] w-full bg-[#0a1520] text-white font-bold text-[15px] rounded-xl transition-colors mt-2 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed">
                            {loading ? "Submitting..." : "Submit Request"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HireFormModal;
