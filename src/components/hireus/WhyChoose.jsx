import React from 'react';
import { Award, GraduationCap, Gem, RefreshCw, Shield, BarChart3, Target, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import Badge from '../ui/Badge';

const reasons = [
    {
        icon: <Award className="w-5 h-5 text-orange-500" />,
        bg: "bg-orange-50",
        title: "12+ Years Experience",
        description: "A decade-plus of shipping production software across industries."
    },
    {
        icon: <GraduationCap className="w-5 h-5 text-purple-600" />,
        bg: "bg-purple-50",
        title: "Certified Developers",
        description: "Vetted, certified engineers with proven delivery records."
    },
    {
        icon: <Gem className="w-5 h-5 text-blue-500" />,
        bg: "bg-blue-50",
        title: "Transparent Pricing",
        description: "Clear estimates upfront — no hidden costs, ever."
    },
    {
        icon: <RefreshCw className="w-5 h-5 text-blue-600" />,
        bg: "bg-blue-50",
        title: "Agile Methodology",
        description: "Sprint-based delivery with continuous feedback loops."
    },
    {
        icon: <Shield className="w-5 h-5 text-indigo-500" />,
        bg: "bg-indigo-50",
        title: "NDA & IP Protection",
        description: "Your code, data, and ideas stay 100% yours."
    },
    {
        icon: <BarChart3 className="w-5 h-5 text-emerald-500" />,
        bg: "bg-emerald-50",
        title: "Daily Progress Reports",
        description: "Full visibility into what your team ships every day."
    },
    {
        icon: <Target className="w-5 h-5 text-rose-500" />,
        bg: "bg-rose-50",
        title: "Dedicated Project Manager",
        description: "A single point of contact who owns your outcome."
    },
    {
        icon: <Heart className="w-5 h-5 text-yellow-500" />,
        bg: "bg-yellow-50",
        title: "Long-term Support",
        description: "Post-launch maintenance, upgrades, and scaling support."
    }
];

const WhyChoose = () => {
    return (
        <section className="py-10 lg:py-20 bg-white">
            <div className="container mx-auto px-6 w-layout-blockcontainer container-full-width w-container">

                {/* Header */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >

                    <div className="flex items-center justify-center mb-4">
                        <Badge variant='blue'>Why Choose Kretoss</Badge>
                    </div>
                    <h2 className="text-[24px] md:text-[36px] font-semibold leading-tight text-[#0a1520]">
                        Built on Trust, Delivered with Discipline
                    </h2>
                </motion.div>

                {/* Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                >
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-2xl p-4 md:p-6 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(0,55,240,0.06)] hover:-translate-y-1 transition-all duration-300 group"
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        >
                            <div className='flex items-center gap-4 mb-4'>
                                <div className={`w-8 h-8 shrink-0 rounded-xl flex items-center justify-center ${reason.bg} transition-transform group-hover:scale-110 duration-300`}>
                                    {reason.icon}
                                </div>
                                <h4 className="text-base font-bold text-[#0a1520] leading-tight">
                                    {reason.title}
                                </h4>
                            </div>
                            <p className="text-gray-500 text-[14px] leading-relaxed">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default WhyChoose;
