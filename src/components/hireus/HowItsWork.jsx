import React from 'react';
import { MessageSquare, FileSearch, Code2, Rocket, Target, FileEdit, MessageCircle, Puzzle } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
    {
        id: 1,
        title: "Share Your Requirement",
        description: "Tell us what you need built or who you need to hire.",
        icon: <FileEdit className="w-8 h-8 text-white" strokeWidth={1.5} />,
        bg: "bg-gradient-to-br from-[#3b82f6] to-[#6366f1]"
    },
    {
        id: 2,
        title: "Free Consultation",
        description: "Our experts review scope and recommend an approach.",
        icon: <MessageCircle className="w-8 h-8 text-white" strokeWidth={1.5} />,
        bg: "bg-gradient-to-br from-[#4f46e5] to-[#7c3aed]"
    },
    {
        id: 3,
        title: "Choose Engagement Model",
        description: "Dedicated, hourly, or fixed cost — your call.",
        icon: <Puzzle className="w-8 h-8 text-white" strokeWidth={1.5} />,
        bg: "bg-gradient-to-br from-[#6366f1] to-[#8b5cf6]"
    },
    {
        id: 4,
        title: "Project Kickoff",
        description: "Team onboarded and building within 48 hours.",
        icon: <Rocket className="w-8 h-8 text-white" strokeWidth={1.5} />,
        bg: "bg-gradient-to-br from-[#4f46e5] to-[#8b5cf6]"
    },
    {
        id: 5,
        title: "Delivery & Support",
        description: "Milestone delivery with long-term support after launch.",
        icon: <Target className="w-8 h-8 text-white" strokeWidth={1.5} />,
        bg: "bg-gradient-to-br from-[#3b82f6] to-[#7c3aed]"
    }
];

const HowItsWork = () => {
    return (
        <section className="py-10 lg:py-20 bg-white overflow-hidden font-sans">
            <div className="container mx-auto px-6 max-w-[1200px]">

                {/* Header */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-[#3b82f6] font-bold text-[12px] tracking-[0.15em] uppercase mb-4">
                        How It Works
                    </h3>
                    <h2 className="text-[24px] md:text-[36px] font-semibold text-[#0f172a] mb-5 tracking-tight">
                        Simple Development Process
                    </h2>
                    <p className="text-[#64748b] text-[16px] font-medium">
                        From first conversation to launch — a clear, five-step path.
                    </p>
                </motion.div>

                {/* Steps Container */}
                <div className="relative">
                    {/* Connecting Line (Desktop only) */}
                    <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-100 via-indigo-200 to-blue-100 z-0"></div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-4 relative z-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } }
                        }}
                    >
                        {steps.map((step) => (
                            <motion.div
                                key={step.id}
                                className="flex flex-col items-center text-center relative group"
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            >

                                {/* Icon Container */}
                                <div className={`w-20 h-20 rounded-[22px] flex items-center justify-center mb-6 shadow-xl shadow-indigo-500/20 transform transition-transform duration-300 group-hover:-translate-y-2 ${step.bg}`}>
                                    {step.icon}
                                </div>

                                {/* Step Label */}
                                <div className="text-[#4f46e5] font-bold text-[13px] uppercase tracking-wider mb-2">
                                    Step {step.id}
                                </div>

                                {/* Title */}
                                <h4 className="text-[17px] font-extrabold text-[#0f172a] mb-3 leading-snug px-2">
                                    {step.title}
                                </h4>

                                {/* Description */}
                                <p className="text-[#64748b] text-[14.5px] leading-relaxed max-w-[210px]">
                                    {step.description}
                                </p>

                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default HowItsWork;
