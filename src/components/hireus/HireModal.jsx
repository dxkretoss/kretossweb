import React, { useState } from 'react';
import { Check, User, FileText, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import HireFormModal from './HireFormModal';

const HireModal = () => {
    const [showHireModal, setShowHireModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');

    return (
        <section className="py-10 lg:py-20 bg-[#f9fbff]">
            <div className="container mx-auto px-6 w-layout-blockcontainer container-full-width w-container">

                {/* Header */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-[#0037f0] font-bold text-[13px] tracking-[0.15em] uppercase mb-4">
                        Engagement Models
                    </h3>
                    <h2 className="text-[24px] md:text-[36px] font-semibold text-[#0a1520] mb-4">
                        Choose Your Hiring Model
                    </h2>
                    <p className="text-[#555] text-base">
                        We offer flexible models tailored to your project scope, timeline, and required level of control.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    className="grid lg:grid-cols-3 gap-8 lg:gap-6 max-w-6xl mx-auto items-stretch"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                >
                    {/* Card 1: Dedicated Developer (Highlighted) */}
                    <motion.div
                        className="relative bg-[linear-gradient(160deg,#0f1e3d,#1e3a8a)] rounded-[24px] p-6 text-white shadow-2xl flex flex-col"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                        {/* Most Popular Badge */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white text-[11px] font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-lg">
                            Most Popular
                        </div>

                        <div className="w-14 h-14 bg-[#2a3754] rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                            <User className="w-7 h-7 text-[#8b5cf6]" />
                        </div>

                        <h3 className="text-2xl font-bold mb-3">Dedicated Developer</h3>
                        <p className="text-[#a0abc0] text-[15px] leading-relaxed mb-8 min-h-[60px]">
                            Perfect for long-term projects that need committed, consistent engineering talent.
                        </p>

                        <ul className="space-y-4 mb-10 flex-1">
                            {[
                                "Full-time or part-time",
                                "Direct communication",
                                "Daily reporting",
                                "Flexible hiring",
                                "Seamless team extension"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-[15px] text-gray-200 font-medium">
                                    <div className="w-5 h-5 rounded-full bg-[#0037f0] flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => { setModalTitle('Hire Dedicated Developer'); setShowHireModal(true); }}
                            className="h-[44px] flex items-center justify-center w-full bg-white text-[#0037f0] font-semibold text-[16px] py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                        >
                            Hire Dedicated Developer
                        </button>
                    </motion.div>

                    {/* Card 2: Fixed Cost Project */}
                    <motion.div
                        className="bg-white rounded-[24px] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                        <div className="w-14 h-14 bg-[#f0f4ff] rounded-2xl flex items-center justify-center mb-6">
                            <FileText className="w-7 h-7 text-[#0037f0]" />
                        </div>

                        <h3 className="text-2xl font-bold text-[#0a1520] mb-3">Fixed Cost Project</h3>
                        <p className="text-gray-500 text-[15px] leading-relaxed mb-8 min-h-[60px]">
                            Perfect for businesses with clearly defined requirements and scope.
                        </p>

                        <ul className="space-y-4 mb-10 flex-1">
                            {[
                                "Fixed budget",
                                "Fixed timeline",
                                "Dedicated project manager",
                                "Milestone-based delivery"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-[15px] text-gray-700 font-medium">
                                    <div className="w-5 h-5 rounded-full bg-[#e8f0fe] flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-3.5 h-3.5 text-[#0037f0]" strokeWidth={3} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => { setModalTitle('Hire Fixed Cost Project'); setShowHireModal(true); }}
                            className="h-[44px] flex items-center justify-center w-full bg-[#3b82f6] text-white font-semibold text-[16px] py-4 rounded-xl hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20"
                        >
                            Request Proposal
                        </button>
                    </motion.div>

                    {/* Card 3: Hourly Hiring */}
                    <motion.div
                        className="bg-white rounded-[24px] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                        <div className="w-14 h-14 bg-[#f4f0ff] rounded-2xl flex items-center justify-center mb-6">
                            <Clock className="w-7 h-7 text-[#8b5cf6]" />
                        </div>

                        <h3 className="text-2xl font-bold text-[#0a1520] mb-3">Hourly Hiring</h3>
                        <p className="text-gray-500 text-[15px] leading-relaxed mb-8 min-h-[60px]">
                            Perfect for ongoing maintenance, iterations, and quick turnaround tasks.
                        </p>

                        <ul className="space-y-4 mb-10 flex-1">
                            {[
                                "Pay only for hours worked",
                                "Fast onboarding",
                                "Flexible scaling",
                                "Weekly reporting"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-[15px] text-gray-700 font-medium">
                                    <div className="w-5 h-5 rounded-full bg-[#f4f0ff] flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-3.5 h-3.5 text-[#8b5cf6]" strokeWidth={3} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => { setModalTitle('Hire Hourly Based Developer'); setShowHireModal(true); }}
                            className="h-[44px] flex items-center justify-center w-full bg-[#3b82f6] text-white font-semibold text-[16px] py-4 rounded-xl hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20"
                        >
                            Book Developer
                        </button>
                    </motion.div>

                </motion.div>
            </div>

            <HireFormModal
                isOpen={showHireModal}
                onClose={() => setShowHireModal(false)}
                title={modalTitle}
            />
        </section>
    );
};

export default HireModal;
