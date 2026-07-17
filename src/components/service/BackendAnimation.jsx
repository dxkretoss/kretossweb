import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaServer, FaDatabase, FaCogs, FaNetworkWired, FaClock, FaShieldAlt, FaExchangeAlt, FaNodeJs, FaPython, FaLaravel, FaJava } from 'react-icons/fa';
import { SiNodedotjs, SiPython, SiNestjs, SiLaravel } from 'react-icons/si';

export default function BackendAnimation() {
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

            {/* Live Monitoring Dashboard (Top) */}
            <div className="absolute top-[4%] sm:top-[6%] left-[50%] -translate-x-1/2 flex items-center justify-center gap-2 sm:gap-4 bg-white/90 backdrop-blur-sm border border-slate-100 rounded-full px-2 sm:px-4 py-1 sm:py-1.5 shadow-sm z-30 w-max max-w-[90%]">
                <div className="flex items-center gap-1 sm:gap-1.5">
                    <FaNetworkWired className="text-blue-500 text-[8px] sm:text-[10px]" />
                    <span className="text-[7px] sm:text-[9px] font-bold text-slate-700 whitespace-nowrap">Req: 2.4K/s</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5">
                    <FaClock className="text-purple-500 text-[8px] sm:text-[10px]" />
                    <span className="text-[7px] sm:text-[9px] font-bold text-slate-700 whitespace-nowrap">Resp: 42ms</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5">
                    <FaShieldAlt className="text-green-500 text-[8px] sm:text-[10px]" />
                    <span className="text-[7px] sm:text-[9px] font-bold text-slate-700 whitespace-nowrap">Up: 99.99%</span>
                </div>
            </div>

            {/* SVG Connections Container */}
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <defs>
                    <linearGradient id="backend-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                    <filter id="backend-glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="1" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* --- Static Base Paths --- */}
                {/* Inputs to Engine */}
                <path d="M 22 25 C 32 25, 32 35, 32 35" stroke="#e2e8f0" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                <path d="M 22 50 C 32 50, 32 35, 32 35" stroke="#e2e8f0" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                {/* Engine to Modules */}
                <path d="M 50 48 C 50 60, 32 60, 32 68" stroke="#e2e8f0" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                <path d="M 32 75 L 50 75" stroke="#e2e8f0" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                <path d="M 50 75 L 68 75" stroke="#e2e8f0" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                <path d="M 68 68 C 68 55, 50 55, 50 48" stroke="#e2e8f0" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                {/* Engine to Output */}
                <path d="M 68 35 C 75 35, 75 40, 82 40" stroke="#e2e8f0" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />

                {/* --- Animated Data Packets --- */}
                {/* Input 1 -> Engine */}
                <motion.path d="M 22 25 C 32 25, 32 35, 32 35" stroke="url(#backend-gradient)" strokeWidth="1.5" fill="none" filter="url(#backend-glow)" strokeLinecap="round" vectorEffect="non-scaling-stroke"
                    initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
                    animate={{ pathLength: [0, 0.2, 0.2, 0], pathOffset: [0, 0, 0.8, 1], opacity: [0, 1, 1, 0] }}
                    transition={syncTransition(0.3, 1.0)} />

                {/* Internal Pipeline Packets */}
                {[
                    { d: "M 50 48 C 50 60, 32 60, 32 68", delay: 2.3, dur: 0.7 },
                    { d: "M 32 75 L 50 75", delay: 3.0, dur: 0.7 },
                    { d: "M 50 75 L 68 75", delay: 3.7, dur: 0.7 },
                    { d: "M 68 68 C 68 55, 50 55, 50 48", delay: 5.5, dur: 0.7 }
                ].map((packet, i) => (
                    <motion.path key={i} d={packet.d} stroke="url(#backend-gradient)" strokeWidth="1.5" fill="none" filter="url(#backend-glow)" strokeLinecap="round" vectorEffect="non-scaling-stroke"
                        initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
                        animate={{ pathLength: [0, 0.3, 0.3, 0], pathOffset: [0, 0, 0.7, 1], opacity: [0, 1, 1, 0] }}
                        transition={syncTransition(packet.delay, packet.dur)} />
                ))}

                {/* Engine -> Output */}
                <motion.path d="M 68 35 C 75 35, 75 40, 82 40" stroke="url(#backend-gradient)" strokeWidth="1.5" fill="none" filter="url(#backend-glow)" strokeLinecap="round" vectorEffect="non-scaling-stroke"
                    initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
                    animate={{ pathLength: [0, 0.2, 0.2, 0], pathOffset: [0, 0, 0.8, 1], opacity: [0, 1, 1, 0] }}
                    transition={syncTransition(6.7, 0.8)} />
            </svg>

            {/* --- LEFT COLUMN: REQUESTS --- */}
            <motion.div className="absolute top-[25%] left-[20%] -translate-x-1/2 -translate-y-1/2 w-[26%] bg-white/90 backdrop-blur-md border border-white shadow-lg rounded-xl p-2 sm:p-3 flex flex-col gap-1 z-10"
                animate={{ borderColor: ["#ffffff", "#3b82f6", "#ffffff"], boxShadow: ["0 4px 6px -1px rgba(0,0,0,0.05)", "0 10px 20px -3px rgba(59,130,246,0.2)", "0 4px 6px -1px rgba(0,0,0,0.05)"] }}
                transition={syncTransition(0, 1)}>
                <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="px-1.5 py-0.5 bg-blue-100 text-blue-600 rounded text-[7px] sm:text-[9px] font-mono font-bold shrink-0">POST</div>
                    <span className="text-[8px] sm:text-[10px] text-slate-700 font-mono font-semibold truncate">/api/orders</span>
                </div>
            </motion.div>

            <div className="absolute top-[50%] left-[20%] -translate-x-1/2 -translate-y-1/2 w-[26%] bg-white/70 backdrop-blur-md border border-white/50 shadow-sm rounded-xl p-2 sm:p-3 flex flex-col gap-1 z-10 opacity-70">
                <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="px-1.5 py-0.5 bg-green-100 text-green-600 rounded text-[7px] sm:text-[9px] font-mono font-bold shrink-0">GET</div>
                    <span className="text-[8px] sm:text-[10px] text-slate-700 font-mono font-semibold truncate">/api/users</span>
                </div>
            </div>

            {/* --- CENTER: BACKEND ENGINE --- */}
            <div className="absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[38%] bg-white/95 backdrop-blur-xl border border-white shadow-[0_20px_40px_-10px_rgba(59,130,246,0.15)] rounded-2xl p-3 sm:p-4 z-20 flex flex-col">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
                    <div className="flex items-center gap-1.5 min-w-0">
                        <FaServer className="text-[#3b82f6] text-xs sm:text-sm shrink-0" />
                        <span className="text-[9px] sm:text-[11px] font-extrabold text-slate-800 tracking-wider truncate">BACKEND ENGINE</span>
                    </div>
                    <div className="flex items-center gap-1 bg-green-50 px-1.5 py-0.5 rounded-full border border-green-100 shrink-0">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-[7px] sm:text-[8px] text-green-700 font-bold uppercase">Online</span>
                    </div>
                </div>

                {/* Status Cycling */}
                <div className="h-6 sm:h-8 relative flex items-center justify-center bg-slate-50 rounded-lg border border-slate-100 overflow-hidden">
                    {[
                        { text: "Waiting for request...", delay: 0, dur: 1.3 },
                        { text: "Authenticating Request", delay: 1.3, dur: 1.0 },
                        { text: "Delegating to Logic", delay: 2.3, dur: 3.9 },
                        { text: "Response Ready", delay: 6.2, dur: 1.8 }
                    ].map((status, i) => (
                        <motion.span key={i} className="absolute text-[8px] sm:text-[10px] font-mono font-semibold text-blue-600 truncate px-2"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: [0, 1, 1, 0], y: [5, 0, 0, -5] }}
                            transition={syncTransition(status.delay, status.dur)}>
                            {status.text}
                        </motion.span>
                    ))}
                </div>

                {/* Tech Indicators */}
                <div className="flex justify-center gap-3 mt-3">
                    <SiNodedotjs className="text-slate-300 text-[10px] sm:text-xs hover:text-green-500 transition-colors" />
                    <SiPython className="text-slate-300 text-[10px] sm:text-xs hover:text-blue-500 transition-colors" />
                    <SiNestjs className="text-slate-300 text-[10px] sm:text-xs hover:text-red-500 transition-colors" />
                    <SiLaravel className="text-slate-300 text-[10px] sm:text-xs hover:text-red-500 transition-colors" />
                </div>
            </div>

            {/* --- BOTTOM MODULES --- */}
            {[
                { name: "API Gateway", icon: FaExchangeAlt, left: "32%", delay: 3.0, color: "text-indigo-500", bg: "bg-indigo-50" },
                { name: "Business Logic", icon: FaCogs, left: "50%", delay: 3.7, color: "text-blue-500", bg: "bg-blue-50" },
                { name: "Database", icon: FaDatabase, left: "68%", delay: 4.4, color: "text-purple-500", bg: "bg-purple-50" }
            ].map((mod, i) => (
                <motion.div key={i} className="absolute top-[75%] -translate-x-1/2 -translate-y-1/2 w-[16%] bg-white border border-slate-100 shadow-md rounded-xl p-2 sm:p-3 flex flex-col items-center justify-center gap-1 z-20"
                    style={{ left: mod.left }}
                    animate={{ scale: [1, 1.1, 1], borderColor: ['#f1f5f9', '#3b82f6', '#f1f5f9'] }}
                    transition={syncTransition(mod.delay, 1.0)}>
                    <div className={`w-5 h-5 sm:w-7 sm:h-7 rounded-full ${mod.bg} ${mod.color} flex items-center justify-center`}>
                        <mod.icon className="text-[9px] sm:text-[11px]" />
                    </div>
                    <span className="text-[6px] sm:text-[8px] font-bold text-slate-700 text-center leading-tight truncate w-full">{mod.name}</span>
                </motion.div>
            ))}

            {/* Database Output Tooltip */}
            <motion.div className="absolute top-[58%] left-[68%] -translate-x-1/2 bg-slate-800 text-green-400 text-[6px] sm:text-[8px] font-mono px-2 py-1.5 rounded-lg shadow-xl z-30 flex flex-col gap-0.5 whitespace-nowrap"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: [0, 1, 1, 0], y: [5, 0, 0, -5] }}
                transition={syncTransition(4.4, 1.1)}>
                <span> Finding user...</span>
                <span> Order saved ✓</span>
            </motion.div>

            {/* --- RIGHT COLUMN: RESPONSE --- */}
            <motion.div className="absolute top-[40%] left-[82%] -translate-x-1/2 -translate-y-1/2 w-[26%] bg-white/90 backdrop-blur-md border border-white shadow-lg rounded-xl p-2 sm:p-3 flex flex-col gap-1.5 sm:gap-2 z-10"
                animate={{ scale: [1, 1.05, 1], boxShadow: ["0 4px 6px -1px rgba(0,0,0,0.05)", "0 10px 20px -3px rgba(34,197,94,0.25)", "0 4px 6px -1px rgba(0,0,0,0.05)"] }}
                transition={syncTransition(7.5, 0.5)}>
                <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 text-green-500 rounded-md flex items-center justify-center shrink-0">
                        <FaCheckCircle className="text-[10px] sm:text-xs" />
                    </div>
                    <div className="flex flex-col min-w-0">
                        <span className="text-[8px] sm:text-[10px] text-slate-500 font-semibold leading-none truncate">RESPONSE</span>
                        <span className="text-[10px] sm:text-xs text-slate-800 font-bold leading-tight truncate">200 OK</span>
                    </div>
                </div>
                <div className="text-[6px] sm:text-[8px] text-slate-400 font-mono pt-1 sm:pt-1.5 border-t border-slate-100 flex justify-between">
                    <span className="truncate">Success</span>
                    <span className="text-green-500 shrink-0 ml-1">42ms</span>
                </div>
            </motion.div>

            {/* --- BOTTOM: TECHNOLOGY BRANDS --- */}
            <div className="absolute bottom-[4%] sm:bottom-[6%] left-[50%] -translate-x-1/2 flex items-center justify-center gap-4 sm:gap-8 opacity-20 hover:opacity-50 transition-opacity z-0">
                <FaNodeJs className="text-[12px] sm:text-[16px] text-slate-800" />
                <FaPython className="text-[12px] sm:text-[16px] text-slate-800" />
                <SiNestjs className="text-[12px] sm:text-[16px] text-slate-800" />
                <FaLaravel className="text-[12px] sm:text-[16px] text-slate-800" />
                <FaJava className="text-[12px] sm:text-[16px] text-slate-800" />
            </div>

        </div>
    );
}
