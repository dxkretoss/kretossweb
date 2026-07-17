import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaCheckCircle, FaShoppingCart, FaUserPlus, FaBoxOpen, FaFileInvoiceDollar, FaChartLine, FaSyncAlt, FaPython, FaCode, FaDatabase, FaAws } from 'react-icons/fa';

export default function ErpAnimation() {
    // Timing cycle: 6 seconds total
    const CYCLE = 6;

    // Framer motion timing function for infinite loops
    const syncTransition = (delay, duration) => ({
        duration: duration,
        delay: delay,
        repeat: Infinity,
        repeatDelay: CYCLE - duration,
        ease: "easeInOut"
    });

    return (
        <div className="relative w-full aspect-[16/11] lg:aspect-[4/3] rounded-[1rem] sm:rounded-[1.5rem] bg-[#f4f7fb] overflow-hidden border-2 border-white font-sans shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]">

            {/* Technical Background */}
            <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                opacity: 0.5
            }}></div>

            {/* Glowing Orbs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#0037f0]/10 rounded-full blur-[60px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#8b5cf6]/10 rounded-full blur-[60px] pointer-events-none"></div>

            {/* SVG Connections Container */}
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <defs>
                    <linearGradient id="glow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0037f0" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="1" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* --- Static Base Paths --- */}
                {/* Inputs to Engine */}
                <path d="M 22 35 C 35 35, 35 50, 48 50" stroke="#cbd5e1" strokeWidth="0.3" fill="none" vectorEffect="non-scaling-stroke" />
                <path d="M 22 65 C 35 65, 35 50, 48 50" stroke="#cbd5e1" strokeWidth="0.3" fill="none" vectorEffect="non-scaling-stroke" />
                {/* Engine to Outputs */}
                <path d="M 52 50 C 65 50, 68 20, 78 20" stroke="#cbd5e1" strokeWidth="0.3" fill="none" vectorEffect="non-scaling-stroke" />
                <path d="M 52 50 C 65 50, 68 40, 78 40" stroke="#cbd5e1" strokeWidth="0.3" fill="none" vectorEffect="non-scaling-stroke" />
                <path d="M 52 50 C 65 50, 68 60, 78 60" stroke="#cbd5e1" strokeWidth="0.3" fill="none" vectorEffect="non-scaling-stroke" />
                <path d="M 52 50 C 65 50, 68 80, 78 80" stroke="#cbd5e1" strokeWidth="0.3" fill="none" vectorEffect="non-scaling-stroke" />

                {/* --- Animated Data Packets --- */}
                {/* Input 1 Packet */}
                <motion.path d="M 22 35 C 35 35, 35 50, 48 50" stroke="url(#glow-gradient)" strokeWidth="1" fill="none" filter="url(#glow)" strokeLinecap="round" vectorEffect="non-scaling-stroke"
                    initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
                    animate={{ pathLength: [0, 0.15, 0.15, 0], pathOffset: [0, 0, 0.85, 1], opacity: [0, 1, 1, 0] }}
                    transition={syncTransition(0.5, 1.5)} />
                {/* Input 2 Packet */}
                <motion.path d="M 22 65 C 35 65, 35 50, 48 50" stroke="url(#glow-gradient)" strokeWidth="1" fill="none" filter="url(#glow)" strokeLinecap="round" vectorEffect="non-scaling-stroke"
                    initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
                    animate={{ pathLength: [0, 0.15, 0.15, 0], pathOffset: [0, 0, 0.85, 1], opacity: [0, 1, 1, 0] }}
                    transition={syncTransition(0.7, 1.5)} />

                {/* Output Packets */}
                {[
                    { d: "M 52 50 C 65 50, 68 20, 78 20", delay: 2.5 },
                    { d: "M 52 50 C 65 50, 68 40, 78 40", delay: 2.6 },
                    { d: "M 52 50 C 65 50, 68 60, 78 60", delay: 2.7 },
                    { d: "M 52 50 C 65 50, 68 80, 78 80", delay: 2.8 }
                ].map((packet, i) => (
                    <motion.path key={i} d={packet.d} stroke="url(#glow-gradient)" strokeWidth="1" fill="none" filter="url(#glow)" strokeLinecap="round" vectorEffect="non-scaling-stroke"
                        initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
                        animate={{ pathLength: [0, 0.15, 0.15, 0], pathOffset: [0, 0, 0.85, 1], opacity: [0, 1, 1, 0] }}
                        transition={syncTransition(packet.delay, 1.5)} />
                ))}
            </svg>

            {/* --- LEFT COLUMN: INPUTS --- */}
            {/* Input 1 */}
            <motion.div className="absolute top-[35%] left-[22%] -translate-x-1/2 -translate-y-1/2 w-[28%] bg-white/80 backdrop-blur-lg border border-white shadow-lg rounded-xl p-2 sm:p-3 flex flex-col gap-1 sm:gap-2 z-10"
                animate={{ borderColor: ["#ffffff", "#0037f0", "#ffffff"], boxShadow: ["0 10px 15px -3px rgba(0,0,0,0.1)", "0 10px 20px -3px rgba(0,55,240,0.3)", "0 10px 15px -3px rgba(0,0,0,0.1)"] }}
                transition={syncTransition(0, 1)}>
                <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 text-blue-600 rounded-md flex items-center justify-center shrink-0">
                        <FaShoppingCart className="text-[10px] sm:text-xs" />
                    </div>
                    <div className="flex flex-col min-w-0">
                        <span className="text-[8px] sm:text-[10px] text-gray-500 font-semibold leading-none truncate">NEW EVENT</span>
                        <span className="text-[10px] sm:text-xs text-gray-800 font-bold leading-tight truncate">Order #2841</span>
                    </div>
                </div>
            </motion.div>

            {/* Input 2 */}
            <motion.div className="absolute top-[65%] left-[22%] -translate-x-1/2 -translate-y-1/2 w-[28%] bg-white/80 backdrop-blur-lg border border-white shadow-lg rounded-xl p-2 sm:p-3 flex flex-col gap-1 sm:gap-2 z-10"
                animate={{ borderColor: ["#ffffff", "#8b5cf6", "#ffffff"], boxShadow: ["0 10px 15px -3px rgba(0,0,0,0.1)", "0 10px 20px -3px rgba(139,92,246,0.3)", "0 10px 15px -3px rgba(0,0,0,0.1)"] }}
                transition={syncTransition(0.2, 1)}>
                <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-100 text-purple-600 rounded-md flex items-center justify-center shrink-0">
                        <FaUserPlus className="text-[10px] sm:text-xs" />
                    </div>
                    <div className="flex flex-col min-w-0">
                        <span className="text-[8px] sm:text-[10px] text-gray-500 font-semibold leading-none truncate">NEW EVENT</span>
                        <span className="text-[10px] sm:text-xs text-gray-800 font-bold leading-tight truncate">Customer Sign Up</span>
                    </div>
                </div>
            </motion.div>

            {/* --- CENTER: ERP ENGINE --- */}
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[35%] bg-white/90 backdrop-blur-xl border border-white/80 shadow-[0_20px_40px_-10px_rgba(0,55,240,0.15)] rounded-2xl p-3 sm:p-4 z-20 flex flex-col">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-2 sm:mb-3">
                    <div className="flex items-center gap-1.5 min-w-0">
                        <FaServer className="text-[#0037f0] text-sm sm:text-base shrink-0" />
                        <span className="text-[9px] sm:text-[11px] font-extrabold text-gray-800 tracking-wider truncate">ERP ENGINE</span>
                    </div>
                    <div className="flex items-center gap-1 bg-green-50 px-1.5 py-0.5 rounded-full border border-green-100 shrink-0">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-[7px] sm:text-[8px] text-green-700 font-bold uppercase">Live</span>
                    </div>
                </div>

                {/* Processing Indicators */}
                <div className="flex flex-col gap-1.5 sm:gap-2">
                    {[
                        { label: "Data Parsing", delay: 1.5, color: "bg-blue-500" },
                        { label: "Logic Routing", delay: 1.8, color: "bg-indigo-500" },
                        { label: "Syncing Nodes", delay: 2.1, color: "bg-purple-500" }
                    ].map((bar, i) => (
                        <div key={i} className="w-full bg-gray-100 rounded-full h-1 sm:h-1.5 overflow-hidden flex items-center relative">
                            <motion.div className={`h-full ${bar.color} rounded-full`}
                                initial={{ width: "0%" }}
                                animate={{ width: ["0%", "100%", "0%"] }}
                                transition={syncTransition(bar.delay, 1.5)}
                            />
                            <div className="absolute inset-0 flex items-center px-1 sm:px-2 mix-blend-difference text-white">
                                <span className="text-[6px] sm:text-[7px] font-bold uppercase tracking-widest opacity-80">{bar.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- RIGHT COLUMN: OUTPUTS --- */}
            {[
                { top: '20%', icon: FaBoxOpen, title: 'Inventory Updated', stat: '-1 Stock', color: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-100', delay: 4.0 },
                { top: '40%', icon: FaFileInvoiceDollar, title: 'Invoice Generated', stat: 'INV-992', color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-100', delay: 4.1 },
                { top: '60%', icon: FaSyncAlt, title: 'CRM Synced', stat: 'Profile Live', color: 'text-purple-500', bg: 'bg-purple-50', border: 'border-purple-100', delay: 4.2 },
                { top: '80%', icon: FaChartLine, title: 'Analytics Updated', stat: '+Rev', color: 'text-emerald-500', bg: 'bg-emerald-50', border: 'border-emerald-100', delay: 4.3 }
            ].map((output, i) => (
                <motion.div key={i} className="absolute left-[78%] -translate-x-1/2 -translate-y-1/2 w-[28%] bg-white/80 backdrop-blur-lg border border-white shadow-md rounded-xl p-1.5 sm:p-2.5 flex items-center gap-1.5 sm:gap-2 z-10"
                    style={{ top: output.top }}
                    animate={{ scale: [1, 1.05, 1], boxShadow: ["0 4px 6px -1px rgba(0,0,0,0.05)", "0 10px 15px -3px rgba(0,0,0,0.1)", "0 4px 6px -1px rgba(0,0,0,0.05)"] }}
                    transition={syncTransition(output.delay, 0.5)}>

                    <div className={`w-5 h-5 sm:w-7 sm:h-7 ${output.bg} ${output.color} rounded-md flex items-center justify-center shrink-0 border ${output.border} relative`}>
                        <output.icon className="text-[10px] sm:text-xs" />
                        <motion.div className="absolute -top-1 -right-1 bg-white rounded-full text-green-500"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] }}
                            transition={syncTransition(output.delay, 1.5)}>
                            <FaCheckCircle className="text-[10px] sm:text-xs drop-shadow-sm" />
                        </motion.div>
                    </div>

                    <div className="flex flex-col min-w-0">
                        <span className="text-[8px] sm:text-[9px] text-gray-800 font-bold leading-tight truncate">{output.title}</span>
                        <span className="text-[7px] sm:text-[8px] text-gray-500 font-semibold truncate">{output.stat}</span>
                    </div>
                </motion.div>
            ))}

            {/* --- BOTTOM: TECHNOLOGY BRANDS --- */}
            <div className="absolute bottom-[4%] sm:bottom-[6%] left-[50%] -translate-x-1/2 flex items-center justify-center gap-4 sm:gap-8 opacity-20 hover:opacity-50 transition-opacity z-0">
                <FaPython className="text-[12px] sm:text-[16px] text-slate-800" />
                <FaPython className="text-[12px] sm:text-[16px] text-slate-800" />
                <FaCode className="text-[12px] sm:text-[16px] text-slate-800" />
                <FaDatabase className="text-[12px] sm:text-[16px] text-slate-800" />
                <FaAws className="text-[12px] sm:text-[16px] text-slate-800" />
            </div>

        </div>
    );
}
