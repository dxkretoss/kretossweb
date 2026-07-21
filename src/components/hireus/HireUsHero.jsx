import React, { useState } from 'react';
import { Check, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import HireFormModal from './HireFormModal';
import AnimatedButton from '../ui/AnimatedButton';
import AnimatedHireButton from '../ui/AnimatedHireButton';

const HireUsHero = () => {
    const [showHireModal, setShowHireModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');

    return (
        <section className="relative pt-12 pb-10 lg:pt-20 lg:pb-24 overflow-hidden bg-[linear-gradient(rgb(245,248,255)_0%,rgb(253,253,254)_100%)]">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0037f0]/5 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#8b5cf6]/5 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/3 translate-y-1/3" />

            <div className="container mx-auto px-6 relative z-10 w-layout-blockcontainer container-full-width w-container">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">

                    {/* Left Column (Text Content) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 text-slate-800 text-[10px] font-bold uppercase tracking-widest px-3 rounded-full border border-[#0037f0]/15 mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            Trusted by businesses worldwide • 12+ years
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-[#0a1520] leading-[1.1] mb-6 tracking-tight">
                            Hire Dedicated <br className="hidden md:block" />
                            Developers That <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0037f0] to-[#8b5cf6]">Deliver Results</span>
                        </h1>

                        <p className="text-[#4b5563] text-[14px] md:text-lg leading-relaxed mb-6 max-w-xl font-medium">
                            Scale your team with experienced React, Flutter, Shopify, Node.js, Python, WordPress, .NET, and Full Stack developers. Hire hourly, monthly, or get a fixed-cost project estimate from experts trusted by businesses worldwide.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                            <AnimatedButton text="HIRE DEVELOPER" onClick={(e) => { e.preventDefault(); setModalTitle(''); setShowHireModal(true); }} >
                            </AnimatedButton>
                            <AnimatedHireButton text="GET FIXED COST QUOTE" onClick={(e) => { e.preventDefault(); setModalTitle('Get Fixed Cost Quote'); setShowHireModal(true); }} className="h-[44px]" >
                            </AnimatedHireButton>
                        </div>

                        {/* Checkmark Pills */}
                        <div className="flex flex-wrap gap-3">
                            {[
                                "Global Clients",
                                "NDA Protected",
                                "Agile Development",
                                "Start within 48 Hours"
                            ].map((item, i) => (
                                <div key={i} className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-white border border-gray-200 text-[12px] font-bold text-[#555] shadow-sm hover:border-[#0037f0]/30 transition-colors">
                                    <Check className="w-3 h-3 text-[#0037f0]" strokeWidth={4} />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column (UI Mockup) */}
                    <motion.div
                        className="relative lg:pl-10 mt-10 lg:mt-0"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    >
                        {/* Start within 48 hours Badge */}
                        <div className="text-[14px] absolute -top-6 -right-2 lg:-top-6 lg:right-12 bg-white px-6 py-2.5 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] z-20 flex items-center gap-2 border border-gray-100 font-semibold text-[#0a1520] animate-bounce-slow">
                            <Zap className="w-5 h-5 text-orange-500 fill-orange-500" />
                            Start within 10 hours
                        </div>

                        {/* Browser Window Mockup */}
                        <div className="max-w-[500px] bg-white rounded-[2rem] shadow-[0_30px_80px_rgba(0,55,240,0.08)] border border-gray-100 p-4 md:p-8 relative z-10">
                            {/* Window Dots */}
                            <div className="flex gap-2 mb-8">
                                <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
                                <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
                                <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
                            </div>

                            {/* Developer Cards */}
                            <div className="space-y-4 mb-8">
                                {[
                                    { img: "/ourdevs/Raj.png", name: "Ankur", role: "Senior React Developer", skills: "React • Next.js • TypeScript", color: "bg-[#0037f0]" },
                                    { img: "/ourdevs/Neha.png", name: "Priya", role: "Flutter Engineer", skills: "Flutter • Firebase • iOS/Android", color: "bg-[#8b5cf6]" },
                                    { img: "/ourdevs/Kunal.png", name: "Rahul", role: "Full Stack Developer", skills: "Node.js • Python • AWS", color: "bg-[#0ea5e9]" }
                                ].map((dev, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-[#fbfdff] hover:border-blue-100 hover:shadow-md transition-all duration-300 group">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.08)] group-hover:scale-105 transition-transform border-2 border-white shrink-0">
                                                <img src={dev.img} alt={dev.name} className="w-full h-full object-cover grayscale" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-[#0a1520] text-base">{dev.role}</h4>
                                                <p className="text-[12px] text-gray-500 font-medium">{dev.skills}</p>
                                            </div>
                                        </div>
                                        <div className="px-4 py-1 bg-[#e8f7ec] text-[#22a04c] text-[12px] font-bold rounded-full border border-[#c1ebd0]">
                                            Available
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className="bg-[#e8f0fe] py-5 px-2 rounded-2xl text-center hover:bg-[#dbe6fd] transition-colors cursor-default">
                                    <div className="font-black text-[#0037f0] text-base lg:text-xl">12+</div>
                                    <div className="text-[13px] text-[#0037f0]/80 font-bold mt-1">Years</div>
                                </div>
                                <div className="bg-[#f3f0ff] py-5 px-2 rounded-2xl text-center hover:bg-[#eae4ff] transition-colors cursor-default">
                                    <div className="font-black text-[#8b5cf6] text-base lg:text-xl">250+</div>
                                    <div className="text-[13px] text-[#8b5cf6]/80 font-bold mt-1">Projects</div>
                                </div>
                                <div className="bg-[#f0f9ff] py-5 px-2 rounded-2xl text-center hover:bg-[#e1f4ff] transition-colors cursor-default">
                                    <div className="font-black text-[#0ea5e9] text-base lg:text-xl">30+</div>
                                    <div className="text-[13px] text-[#0ea5e9]/80 font-bold mt-1">Engineers</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <HireFormModal
                isOpen={showHireModal}
                onClose={() => setShowHireModal(false)}
                title={modalTitle}
            />
        </section>
    );
};

export default HireUsHero;
