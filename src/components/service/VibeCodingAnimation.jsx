import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaCode, FaRobot, FaTerminal, FaPlayCircle, FaLayerGroup, FaCheck, FaServer, FaChartLine, FaReact, FaPython, FaJs } from 'react-icons/fa';
import { FiMessageSquare } from 'react-icons/fi';

export default function VibeCodingAnimation() {
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

            {/* Glowing Orbs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[60px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[60px] pointer-events-none"></div>

            {/* SVG Connections Container */}
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <defs>
                    <linearGradient id="vibe-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                    <filter id="vibe-glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="1" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* --- Static Base Paths --- */}
                {/* Inputs to Engine */}
                <path d="M 22 35 C 35 35, 35 50, 48 50" stroke="#e2e8f0" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                <path d="M 22 65 C 35 65, 35 50, 48 50" stroke="#e2e8f0" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                {/* Engine to Outputs */}
                <path d="M 52 50 C 65 50, 68 20, 78 20" stroke="#e2e8f0" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                <path d="M 52 50 C 65 50, 68 40, 78 40" stroke="#e2e8f0" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                <path d="M 52 50 C 65 50, 68 60, 78 60" stroke="#e2e8f0" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                <path d="M 52 50 C 65 50, 68 80, 78 80" stroke="#e2e8f0" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />

                {/* --- Animated Data Packets --- */}
                {/* Input Packets */}
                <motion.path d="M 22 35 C 35 35, 35 50, 48 50" stroke="url(#vibe-gradient)" strokeWidth="1.5" fill="none" filter="url(#vibe-glow)" strokeLinecap="round" vectorEffect="non-scaling-stroke"
                    initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
                    animate={{ pathLength: [0, 0.15, 0.15, 0], pathOffset: [0, 0, 0.85, 1], opacity: [0, 1, 1, 0] }}
                    transition={syncTransition(0.5, 1.5)} />
                <motion.path d="M 22 65 C 35 65, 35 50, 48 50" stroke="url(#vibe-gradient)" strokeWidth="1.5" fill="none" filter="url(#vibe-glow)" strokeLinecap="round" vectorEffect="non-scaling-stroke"
                    initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
                    animate={{ pathLength: [0, 0.15, 0.15, 0], pathOffset: [0, 0, 0.85, 1], opacity: [0, 1, 1, 0] }}
                    transition={syncTransition(0.7, 1.5)} />

                {/* Output Packets */}
                {[
                    { d: "M 52 50 C 65 50, 68 20, 78 20", delay: 4.5 },
                    { d: "M 52 50 C 65 50, 68 40, 78 40", delay: 4.7 },
                    { d: "M 52 50 C 65 50, 68 60, 78 60", delay: 4.9 },
                    { d: "M 52 50 C 65 50, 68 80, 78 80", delay: 5.1 }
                ].map((packet, i) => (
                    <motion.path key={i} d={packet.d} stroke="url(#vibe-gradient)" strokeWidth="1.5" fill="none" filter="url(#vibe-glow)" strokeLinecap="round" vectorEffect="non-scaling-stroke"
                        initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
                        animate={{ pathLength: [0, 0.15, 0.15, 0], pathOffset: [0, 0, 0.85, 1], opacity: [0, 1, 1, 0] }}
                        transition={syncTransition(packet.delay, 1.5)} />
                ))}
            </svg>

            {/* --- LEFT COLUMN: PROMPTS (REQUIREMENTS) --- */}
            {/* Input 1 */}
            <motion.div className="absolute top-[35%] left-[22%] -translate-x-1/2 -translate-y-1/2 w-[28%] bg-white/90 backdrop-blur-md border border-white shadow-lg rounded-xl p-2 sm:p-3 flex flex-col gap-1 sm:gap-2 z-10"
                animate={{ borderColor: ["#ffffff", "#3b82f6", "#ffffff"], boxShadow: ["0 4px 6px -1px rgba(0,0,0,0.05)", "0 10px 20px -3px rgba(59,130,246,0.2)", "0 4px 6px -1px rgba(0,0,0,0.05)"] }}
                transition={syncTransition(0, 1)}>
                <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-50 text-blue-500 rounded-md flex items-center justify-center shrink-0">
                        <FiMessageSquare className="text-[10px] sm:text-xs" />
                    </div>
                    <div className="flex flex-col min-w-0">
                        <span className="text-[8px] sm:text-[10px] text-slate-500 font-semibold leading-none truncate">USER PROMPT</span>
                        <span className="text-[10px] sm:text-xs text-slate-800 font-bold leading-tight truncate">"Build SaaS Dashboard"</span>
                    </div>
                </div>
            </motion.div>

            {/* Input 2 */}
            <motion.div className="absolute top-[65%] left-[22%] -translate-x-1/2 -translate-y-1/2 w-[28%] bg-white/90 backdrop-blur-md border border-white shadow-lg rounded-xl p-2 sm:p-3 flex flex-col gap-1 sm:gap-2 z-10"
                animate={{ borderColor: ["#ffffff", "#8b5cf6", "#ffffff"], boxShadow: ["0 4px 6px -1px rgba(0,0,0,0.05)", "0 10px 20px -3px rgba(139,92,246,0.2)", "0 4px 6px -1px rgba(0,0,0,0.05)"] }}
                transition={syncTransition(0.2, 1)}>
                <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-50 text-purple-500 rounded-md flex items-center justify-center shrink-0">
                        <FiMessageSquare className="text-[10px] sm:text-xs" />
                    </div>
                    <div className="flex flex-col min-w-0">
                        <span className="text-[8px] sm:text-[10px] text-slate-500 font-semibold leading-none truncate">USER PROMPT</span>
                        <span className="text-[10px] sm:text-xs text-slate-800 font-bold leading-tight truncate">"Add Payment Flow"</span>
                    </div>
                </div>
            </motion.div>

            {/* --- CENTER: AI CODING ENGINE --- */}
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[38%] bg-white/95 backdrop-blur-xl border border-white shadow-[0_20px_40px_-10px_rgba(59,130,246,0.15)] rounded-xl z-20 flex flex-col overflow-hidden">
                {/* Editor Header */}
                <div className="bg-slate-100 px-2 py-1.5 sm:py-2 border-b border-slate-200 flex items-center justify-between">
                    <div className="flex gap-1">
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-400"></div>
                    </div>

                    {/* Changing File Names */}
                    <div className="relative flex items-center h-4 w-24 sm:w-32 justify-center">
                        {[
                            { name: "Dashboard.jsx", delay: 1.5, dur: 1.2 },
                            { name: "api.py", delay: 2.7, dur: 1.0 },
                            { name: "auth.ts", delay: 3.7, dur: 1.5 },
                        ].map((file, i) => (
                            <motion.span key={i} className="absolute text-[8px] sm:text-[9px] text-slate-700 font-mono font-semibold"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 1, 1, 0] }}
                                transition={syncTransition(file.delay, file.dur)}>
                                {file.name}
                            </motion.span>
                        ))}
                        <span className="text-[8px] sm:text-[9px] text-slate-400 font-mono font-semibold">index.ts</span>
                    </div>

                    <div className="flex items-center gap-1 text-blue-500">
                        <FaRobot className="text-[10px] sm:text-xs" />
                        <span className="text-[7px] sm:text-[8px] font-bold">AI</span>
                    </div>
                </div>

                {/* Editor Body */}
                <div className="p-2 sm:p-3 flex flex-col gap-2 sm:gap-3">
                    {/* Terminal Status Output */}
                    <div className="bg-slate-50 border border-slate-200 rounded p-1.5 flex items-center gap-1.5 relative overflow-hidden h-6 sm:h-7 shadow-inner">
                        <FaTerminal className="text-slate-400 text-[8px] sm:text-[10px] shrink-0" />

                        {[
                            { text: "Understanding Prompt...", delay: 1.5, dur: 0.8 },
                            { text: "Generating Components...", delay: 2.3, dur: 1.2 },
                            { text: "Writing API Routes...", delay: 3.5, dur: 0.8 },
                            { text: "Optimizing Code...", delay: 4.3, dur: 1.0 },
                            { text: "Waiting for Input...", delay: 5.3, dur: 2.2 }
                        ].map((status, i) => (
                            <motion.span key={i} className="absolute left-5 sm:left-6 text-[8px] sm:text-[9px] font-mono text-green-600 font-semibold truncate"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 1, 1, 0] }}
                                transition={syncTransition(status.delay, status.dur)}>
                                {status.text}
                            </motion.span>
                        ))}
                    </div>

                    {/* Animated Code Lines */}
                    <div className="flex flex-col gap-1 sm:gap-1.5 pl-1 border-l-2 border-slate-200 relative h-16 sm:h-20">
                        {[
                            { width: "80%", color: "bg-blue-400", delay: 2.4, dur: 2 },
                            { width: "60%", color: "bg-purple-400", delay: 2.6, dur: 1.8 },
                            { width: "90%", color: "bg-amber-400", delay: 2.8, dur: 1.6 },
                            { width: "40%", color: "bg-green-400", delay: 3.5, dur: 1.5 },
                            { width: "75%", color: "bg-emerald-400", delay: 3.7, dur: 1.3 },
                            { width: "50%", color: "bg-blue-300", delay: 4.2, dur: 1.0 }
                        ].map((line, i) => (
                            <div key={i} className="h-1 sm:h-1.5 bg-slate-100 rounded-full w-full relative overflow-hidden">
                                <motion.div className={`absolute top-0 left-0 h-full ${line.color} rounded-full`}
                                    initial={{ width: "0%" }}
                                    animate={{ width: ["0%", line.width, line.width, "0%"] }}
                                    transition={syncTransition(line.delay, line.dur)}
                                />
                            </div>
                        ))}

                        {/* Blinking Cursor */}
                        <motion.div className="absolute w-1.5 h-2.5 sm:h-3 bg-slate-800"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            style={{ bottom: "2px", left: "4px" }}
                        />
                    </div>
                </div>
            </div>

            {/* --- RIGHT COLUMN: OUTPUTS (PIPELINE) --- */}
            {[
                { top: '20%', icon: FaLayerGroup, title: 'UI Generated', color: 'text-indigo-500', bg: 'bg-indigo-50', border: 'border-indigo-100', delay: 5.5 },
                { top: '40%', icon: FaServer, title: 'API Connected', color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-100', delay: 5.7 },
                { top: '60%', icon: FaCheckCircle, title: 'Tests Passed', color: 'text-emerald-500', bg: 'bg-emerald-50', border: 'border-emerald-100', delay: 5.9 },
                { top: '80%', icon: FaPlayCircle, title: 'Ready to Deploy', color: 'text-purple-500', bg: 'bg-purple-50', border: 'border-purple-100', delay: 6.1 }
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
                            <FaCheck className="text-[8px] sm:text-[10px] m-[2px]" />
                        </motion.div>
                    </div>

                    <div className="flex flex-col min-w-0">
                        <span className="text-[8px] sm:text-[9px] text-slate-800 font-bold leading-tight truncate">{output.title}</span>
                        <motion.span className="text-[7px] sm:text-[8px] text-green-500 font-semibold truncate"
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
                <FaChartLine className="text-[12px] sm:text-[16px] text-slate-800" />
                <FaCode className="text-[12px] sm:text-[16px] text-slate-800" />
                <FaReact className="text-[12px] sm:text-[16px] text-slate-800" />
                <FaPython className="text-[12px] sm:text-[16px] text-slate-800" />
                <FaJs className="text-[12px] sm:text-[16px] text-slate-800" />
            </div>

        </div>
    );
}
