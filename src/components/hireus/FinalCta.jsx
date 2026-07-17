import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HireFormModal from './HireFormModal';

const FinalCta = () => {
    const [showHireModal, setShowHireModal] = useState(false);

    return (
        <section className="py-10 lg:py-20 bg-white font-sans">
            <div className="container mx-auto px-6 max-w-[1200px]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#2563eb] to-[#8b5cf6] px-8 py-16 md:py-20 text-center shadow-lg"
                >

                    {/* Background decorative circles */}
                    <div className="absolute top-[-30%] left-[-5%] w-[400px] h-[400px] rounded-full bg-white/10 pointer-events-none mix-blend-overlay"></div>
                    <div className="absolute bottom-[-40%] right-[-5%] w-[600px] h-[600px] rounded-full bg-white/10 pointer-events-none mix-blend-overlay"></div>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-[24px] md:text-[36px] font-semibold text-white mb-4 tracking-tight leading-tight">
                            Ready to Build Your Next Digital Product?
                        </h2>
                        <p className="text-white/90 text-[16px] md:text-lg mb-10 max-w-2xl mx-auto font-medium">
                            Talk with our experts and receive a free project consultation today.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button onClick={() => setShowHireModal(true)} className="h-[44px] flex justify-center items-center w-full sm:w-auto px-8 py-4 bg-white text-[#2563eb] font-semibold text-[16px] rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-center">
                                Hire Developer
                            </button>
                            <button onClick={() => window.open('https://calendly.com/ankur-k-kretoss/30min', '_blank')} className="h-[44px] flex justify-center items-center w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold text-[16px] rounded-xl hover:bg-white/10 hover:border-white/50 transition-all text-center">
                                Schedule Meeting
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>

            <HireFormModal
                isOpen={showHireModal}
                onClose={() => setShowHireModal(false)}
                title="Hire Developer"
            />
        </section>
    );
};

export default FinalCta;
