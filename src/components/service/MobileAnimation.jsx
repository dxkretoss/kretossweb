import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaMobileAlt, FaLightbulb, FaPaintBrush, FaCode, FaRocket, FaApple, FaAndroid, FaCheck, FaAppStoreIos, FaGooglePlay, FaReact, FaSwift } from 'react-icons/fa';
import { SiFlutter, SiReact, SiSwift, SiKotlin } from 'react-icons/si';

export default function MobileAnimation() {
    // Timing cycle: 8 seconds total
    const CYCLE = 8;

    // Framer motion timing function for infinite loops
    const syncTransition = (delay, duration) => ({
        duration: duration,
        delay: delay,
        repeat: Infinity,
        repeatDelay: CYCLE - duration,
        ease: "easeInOut"
    });

    return (
        <div className="relative w-full aspect-[16/11] lg:aspect-[4/3] rounded-[1rem] sm:rounded-[1.5rem] bg-[#f8fafc] overflow-hidden border-2 border-white font-sans shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]">

            {/* Technical Background */}
            <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle, #e2e8f0 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                opacity: 0.8
            }}></div>

            {/* Subtle Glows */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400/5 rounded-full blur-[60px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400/5 rounded-full blur-[60px] pointer-events-none"></div>

            {/* SVG Connections Container */}
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <defs>
                    <linearGradient id="mobile-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                    <filter id="mobile-glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="1" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* --- Static Base Paths --- */}
                {/* Inputs to Phone */}
                <path d="M 22 35 C 35 35, 35 50, 48 50" stroke="#e2e8f0" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                <path d="M 22 65 C 35 65, 35 50, 48 50" stroke="#e2e8f0" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                {/* Phone to Outputs */}
                <path d="M 52 50 C 65 50, 68 15, 78 15" stroke="#e2e8f0" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                <path d="M 52 50 C 65 50, 68 32.5, 78 32.5" stroke="#e2e8f0" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                <path d="M 52 50 C 65 50, 68 50, 78 50" stroke="#e2e8f0" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                <path d="M 52 50 C 65 50, 68 67.5, 78 67.5" stroke="#e2e8f0" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                <path d="M 52 50 C 65 50, 68 85, 78 85" stroke="#e2e8f0" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />

                {/* --- Animated Data Packets --- */}
                {/* Input Packets */}
                <motion.path d="M 22 35 C 35 35, 35 50, 48 50" stroke="url(#mobile-gradient)" strokeWidth="1.5" fill="none" filter="url(#mobile-glow)" strokeLinecap="round" vectorEffect="non-scaling-stroke"
                    initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
                    animate={{ pathLength: [0, 0.15, 0.15, 0], pathOffset: [0, 0, 0.85, 1], opacity: [0, 1, 1, 0] }}
                    transition={syncTransition(0.5, 1.5)} />
                <motion.path d="M 22 65 C 35 65, 35 50, 48 50" stroke="url(#mobile-gradient)" strokeWidth="1.5" fill="none" filter="url(#mobile-glow)" strokeLinecap="round" vectorEffect="non-scaling-stroke"
                    initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
                    animate={{ pathLength: [0, 0.15, 0.15, 0], pathOffset: [0, 0, 0.85, 1], opacity: [0, 1, 1, 0] }}
                    transition={syncTransition(0.7, 1.5)} />

                {/* Output Packets */}
                {[
                    { d: "M 52 50 C 65 50, 68 15, 78 15", delay: 3.5 },
                    { d: "M 52 50 C 65 50, 68 32.5, 78 32.5", delay: 4.5 },
                    { d: "M 52 50 C 65 50, 68 50, 78 50", delay: 5.0 },
                    { d: "M 52 50 C 65 50, 68 67.5, 78 67.5", delay: 5.5 },
                    { d: "M 52 50 C 65 50, 68 85, 78 85", delay: 6.0 }
                ].map((packet, i) => (
                    <motion.path key={i} d={packet.d} stroke="url(#mobile-gradient)" strokeWidth="1.5" fill="none" filter="url(#mobile-glow)" strokeLinecap="round" vectorEffect="non-scaling-stroke"
                        initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
                        animate={{ pathLength: [0, 0.15, 0.15, 0], pathOffset: [0, 0, 0.85, 1], opacity: [0, 1, 1, 0] }}
                        transition={syncTransition(packet.delay, 1.2)} />
                ))}
            </svg>

            {/* --- LEFT COLUMN: PROMPTS (REQUIREMENTS) --- */}
            <motion.div className="absolute top-[35%] left-[22%] -translate-x-1/2 -translate-y-1/2 w-[28%] bg-white/90 backdrop-blur-md border border-white shadow-lg rounded-xl p-2 sm:p-3 flex flex-col gap-1 sm:gap-2 z-10"
                animate={{ borderColor: ["#ffffff", "#3b82f6", "#ffffff"], boxShadow: ["0 4px 6px -1px rgba(0,0,0,0.05)", "0 10px 20px -3px rgba(59,130,246,0.2)", "0 4px 6px -1px rgba(0,0,0,0.05)"] }}
                transition={syncTransition(0, 1)}>
                <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-amber-100 text-amber-500 rounded-md flex items-center justify-center shrink-0">
                        <FaLightbulb className="text-[10px] sm:text-xs" />
                    </div>
                    <div className="flex flex-col min-w-0">
                        <span className="text-[8px] sm:text-[10px] text-slate-500 font-semibold leading-none truncate">INPUT</span>
                        <span className="text-[10px] sm:text-xs text-slate-800 font-bold leading-tight truncate">App Idea</span>
                    </div>
                </div>
            </motion.div>

            <motion.div className="absolute top-[65%] left-[22%] -translate-x-1/2 -translate-y-1/2 w-[28%] bg-white/90 backdrop-blur-md border border-white shadow-lg rounded-xl p-2 sm:p-3 flex flex-col gap-1 sm:gap-2 z-10"
                animate={{ borderColor: ["#ffffff", "#8b5cf6", "#ffffff"], boxShadow: ["0 4px 6px -1px rgba(0,0,0,0.05)", "0 10px 20px -3px rgba(139,92,246,0.2)", "0 4px 6px -1px rgba(0,0,0,0.05)"] }}
                transition={syncTransition(0.2, 1)}>
                <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-pink-100 text-pink-500 rounded-md flex items-center justify-center shrink-0">
                        <FaPaintBrush className="text-[10px] sm:text-xs" />
                    </div>
                    <div className="flex flex-col min-w-0">
                        <span className="text-[8px] sm:text-[10px] text-slate-500 font-semibold leading-none truncate">INPUT</span>
                        <span className="text-[10px] sm:text-xs text-slate-800 font-bold leading-tight truncate">Design Ready</span>
                    </div>
                </div>
            </motion.div>

            {/* --- CENTER: SMARTPHONE --- */}
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[24%] sm:w-[20%] aspect-[9/19] bg-white border-[4px] sm:border-[6px] border-slate-800 rounded-[1.25rem] sm:rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] relative overflow-hidden flex flex-col z-20">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[12px] sm:h-[14px] bg-slate-800 rounded-b-xl z-30 flex justify-center items-center gap-1">
                    <div className="w-1 h-1 rounded-full bg-slate-600"></div>
                    <div className="w-2.5 h-1 rounded-full bg-slate-700"></div>
                </div>

                {/* Screen Content Wrapper (Slides left at 4.5s) */}
                <motion.div className="flex w-[200%] h-full"
                    initial={{ x: '0%' }}
                    animate={{ x: ['0%', '0%', '-50%', '-50%', '0%'] }}
                    transition={syncTransition(4.5, 3.5)} // Slide to success at 4.5s, slide back at 8s
                >
                    {/* Screen 1 (Wireframe -> UI) */}
                    <div className="w-1/2 h-full flex flex-col p-2 sm:p-2.5 gap-1.5 sm:gap-2 relative bg-slate-50">
                        {/* Header */}
                        <div className="flex items-center gap-2 mt-3 sm:mt-4">
                            <motion.div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-200"
                                animate={{ backgroundColor: ["#e2e8f0", "#3b82f6", "#3b82f6", "#e2e8f0"] }}
                                transition={syncTransition(2.5, 5.5)} />
                            <motion.div className="h-1.5 sm:h-2 w-12 sm:w-16 bg-slate-200 rounded"
                                animate={{ backgroundColor: ["#e2e8f0", "#93c5fd", "#93c5fd", "#e2e8f0"] }}
                                transition={syncTransition(2.6, 5.4)} />
                        </div>
                        {/* Hero Image Block */}
                        <motion.div className="w-full aspect-video bg-slate-200 rounded-md mt-1"
                            animate={{ backgroundColor: ["#e2e8f0", "#bfdbfe", "#bfdbfe", "#e2e8f0"] }}
                            transition={syncTransition(2.7, 5.3)} />

                        {/* Interactive List */}
                        <div className="flex flex-col gap-1 sm:gap-1.5 mt-1">
                            {[1, 2, 3].map(i => (
                                <motion.div key={i} className="w-full h-3 sm:h-4 bg-slate-200 rounded"
                                    animate={{ backgroundColor: ["#e2e8f0", "#eff6ff", "#eff6ff", "#e2e8f0"] }}
                                    transition={syncTransition(2.7 + i * 0.1, 5.3 - i * 0.1)} />
                            ))}
                        </div>

                        {/* Action Button (Taps at 4.2s) */}
                        <motion.div className="mt-auto w-full h-5 sm:h-6 bg-slate-300 rounded-md flex items-center justify-center mb-1"
                            animate={{
                                backgroundColor: ["#cbd5e1", "#2563eb", "#2563eb", "#cbd5e1"],
                                scale: [1, 1, 0.9, 1, 1]
                            }}
                            transition={{
                                backgroundColor: syncTransition(3.0, 5.0),
                                scale: syncTransition(4.2, 0.4) // Tap animation
                            }}>
                            <motion.span className="text-[5px] sm:text-[6px] text-white font-bold opacity-0 uppercase tracking-wider"
                                animate={{ opacity: [0, 1, 1, 0] }}
                                transition={syncTransition(3.0, 5.0)}>
                                Continue
                            </motion.span>
                        </motion.div>
                    </div>

                    {/* Screen 2 (Success Launch) */}
                    <div className="w-1/2 h-full flex flex-col items-center justify-center p-2 bg-gradient-to-br from-blue-50 to-purple-50 relative border-l border-slate-200">
                        <motion.div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg mb-2"
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1.2, 1, 1, 0] }}
                            transition={syncTransition(4.8, 3.2)}>
                            <FaCheckCircle className="text-lg sm:text-xl" />
                        </motion.div>
                        <span className="text-[7px] sm:text-[9px] font-bold text-slate-800">App Launched</span>
                        <span className="text-[5px] sm:text-[6px] text-slate-500 text-center mt-1">Live in stores</span>
                    </div>
                </motion.div>
            </div>

            {/* App Store Badges Popping up around phone */}
            <motion.div className="absolute top-[30%] left-[58%] bg-white border border-slate-100 rounded-full px-2 py-1 shadow-md flex items-center gap-1 z-30"
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10], scale: [0.8, 1, 1, 0.8] }}
                transition={syncTransition(6.2, 1.8)}>
                <FaAppStoreIos className="text-blue-500 text-[8px] sm:text-[10px]" />
                <span className="text-[6px] sm:text-[7px] font-bold text-slate-700">App Store</span>
            </motion.div>

            <motion.div className="absolute top-[60%] left-[32%] bg-white border border-slate-100 rounded-full px-2 py-1 shadow-md flex items-center gap-1 z-30"
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10], scale: [0.8, 1, 1, 0.8] }}
                transition={syncTransition(6.5, 1.5)}>
                <FaGooglePlay className="text-green-500 text-[8px] sm:text-[10px]" />
                <span className="text-[6px] sm:text-[7px] font-bold text-slate-700">Google Play</span>
            </motion.div>

            {/* Subtle Tech Indicators */}
            <div className="absolute top-[40%] left-[40%] bg-white/80 backdrop-blur-sm border border-slate-200 p-1 rounded-md shadow-sm z-10 hidden sm:flex">
                <SiReact className="text-[#61dafb] text-[8px]" />
            </div>
            <div className="absolute bottom-[40%] left-[40%] bg-white/80 backdrop-blur-sm border border-slate-200 p-1 rounded-md shadow-sm z-10 hidden sm:flex">
                <SiFlutter className="text-[#02569B] text-[8px]" />
            </div>
            <div className="absolute top-[45%] right-[40%] bg-white/80 backdrop-blur-sm border border-slate-200 p-1 rounded-md shadow-sm z-10 hidden sm:flex">
                <SiSwift className="text-[#FA7343] text-[8px]" />
            </div>
            <div className="absolute bottom-[45%] right-[40%] bg-white/80 backdrop-blur-sm border border-slate-200 p-1 rounded-md shadow-sm z-10 hidden sm:flex">
                <SiKotlin className="text-[#7F52FF] text-[8px]" />
            </div>

            {/* --- RIGHT COLUMN: OUTPUTS (PIPELINE) --- */}
            {[
                { top: '15%', icon: FaPaintBrush, title: 'UI Designed', color: 'text-purple-500', bg: 'bg-purple-50', border: 'border-purple-100', delay: 3.5 },
                { top: '32.5%', icon: FaCode, title: 'Development Complete', color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-100', delay: 4.5 },
                { top: '50%', icon: FaCheckCircle, title: 'Tests Passed', color: 'text-emerald-500', bg: 'bg-emerald-50', border: 'border-emerald-100', delay: 5.0 },
                { top: '67.5%', icon: FaRocket, title: 'Performance Optimized', color: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-100', delay: 5.5 },
                { top: '85%', icon: FaMobileAlt, title: 'Ready to Launch', color: 'text-indigo-500', bg: 'bg-indigo-50', border: 'border-indigo-100', delay: 6.0 }
            ].map((output, i) => (
                <motion.div key={i} className="absolute left-[78%] -translate-x-1/2 -translate-y-1/2 w-[28%] bg-white/90 backdrop-blur-md border border-white shadow-md rounded-xl p-1.5 sm:p-2.5 flex items-center gap-1.5 sm:gap-2 z-10"
                    style={{ top: output.top }}
                    animate={{ scale: [1, 1.05, 1], borderColor: ["#ffffff", "#3b82f6", "#ffffff"], boxShadow: ["0 4px 6px -1px rgba(0,0,0,0.05)", "0 10px 15px -3px rgba(59,130,246,0.15)", "0 4px 6px -1px rgba(0,0,0,0.05)"] }}
                    transition={syncTransition(output.delay, 1)}>

                    <div className={`w-5 h-5 sm:w-7 sm:h-7 ${output.bg} ${output.color} rounded-md flex items-center justify-center shrink-0 border ${output.border} relative`}>
                        <output.icon className="text-[10px] sm:text-xs" />
                        <motion.div className="absolute -top-1 -right-1 bg-white rounded-full text-green-500"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] }}
                            transition={syncTransition(output.delay, 2.0)}>
                            <FaCheck className="text-[8px] sm:text-[10px] m-[1px]" />
                        </motion.div>
                    </div>

                    <div className="flex flex-col min-w-0">
                        <span className="text-[7px] sm:text-[9px] text-slate-800 font-bold leading-tight truncate">{output.title}</span>
                        <motion.span className="text-[6px] sm:text-[7px] text-green-500 font-semibold truncate"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 1, 0] }}
                            transition={syncTransition(output.delay, 2.0)}>
                            Done
                        </motion.span>
                    </div>
                </motion.div>
            ))}

            {/* --- BOTTOM: TECHNOLOGY BRANDS --- */}
            <div className="absolute bottom-[4%] sm:bottom-[6%] left-[50%] -translate-x-1/2 flex items-center justify-center gap-4 sm:gap-8 opacity-20 hover:opacity-50 transition-opacity z-0">
                <SiFlutter className="text-[12px] sm:text-[16px] text-slate-800" />
                <FaReact className="text-[12px] sm:text-[16px] text-slate-800" />
                <FaSwift className="text-[12px] sm:text-[16px] text-slate-800" />
                <FaApple className="text-[12px] sm:text-[16px] text-slate-800" />
                <SiKotlin className="text-[12px] sm:text-[16px] text-slate-800" />
            </div>

        </div>
    );
}
