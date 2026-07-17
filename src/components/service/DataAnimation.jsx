import React from 'react';
import { motion } from 'framer-motion';
import { FaChartBar, FaUsers, FaBullhorn, FaDatabase, FaCogs, FaLightbulb, FaBolt, FaChartLine, FaPython } from 'react-icons/fa';
import { SiPython, SiPandas } from 'react-icons/si';

export default function DataAnimation() {
    // Timing cycle: 10 seconds total
    const CYCLE = 10;

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
                    <linearGradient id="data-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                    <filter id="data-glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="1" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* --- Static Base Paths --- */}
                {/* Inputs to Engine */}
                <path d="M 26 20 C 30 20, 30 50, 33 50" stroke="#e2e8f0" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                <path d="M 26 50 L 33 50" stroke="#e2e8f0" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                <path d="M 26 80 C 30 80, 30 50, 33 50" stroke="#e2e8f0" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />

                {/* Engine to Dashboard */}
                <path d="M 59 50 C 62 50, 62 32, 66 32" stroke="#e2e8f0" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />

                {/* --- Animated Data Packets --- */}
                {/* Input Packets */}
                {[
                    { d: "M 26 20 C 30 20, 30 50, 33 50", delay: 0 },
                    { d: "M 26 50 L 33 50", delay: 0.2 },
                    { d: "M 26 80 C 30 80, 30 50, 33 50", delay: 0.4 }
                ].map((packet, i) => (
                    <motion.path key={i} d={packet.d} stroke="url(#data-gradient)" strokeWidth="1.5" fill="none" filter="url(#data-glow)" strokeLinecap="round" vectorEffect="non-scaling-stroke"
                        initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
                        animate={{ pathLength: [0, 0.2, 0.2, 0], pathOffset: [0, 0, 0.8, 1], opacity: [0, 1, 1, 0] }}
                        transition={syncTransition(packet.delay, 1.2)} />
                ))}

                {/* Transformation Packets (Scattered rows to Dashboard) */}
                {[0, 0.15, 0.3, 0.45, 0.6].map((delay, i) => (
                    <motion.path key={`out-${i}`} d="M 59 50 C 62 50, 62 32, 66 32" stroke="url(#data-gradient)" strokeWidth="1.2" fill="none" filter="url(#data-glow)" strokeLinecap="round" vectorEffect="non-scaling-stroke"
                        initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
                        animate={{ pathLength: [0, 0.1, 0.1, 0], pathOffset: [0, 0, 0.9, 1], opacity: [0, 1, 1, 0] }}
                        transition={syncTransition(5.5 + delay, 0.8)} />
                ))}
            </svg>

            {/* --- LEFT COLUMN: INPUT SOURCES --- */}
            {[
                { y: '20%', icon: FaChartBar, title: 'Sales Data', sub: '12,480 rows', color: 'text-blue-500', bg: 'bg-blue-50', delay: 0 },
                { y: '50%', icon: FaUsers, title: 'Customer Data', sub: '8,240 records', color: 'text-emerald-500', bg: 'bg-emerald-50', delay: 0.2 },
                { y: '80%', icon: FaBullhorn, title: 'Marketing Data', sub: '24 campaigns', color: 'text-purple-500', bg: 'bg-purple-50', delay: 0.4 }
            ].map((input, i) => (
                <motion.div key={i} className="absolute left-[15%] -translate-x-1/2 -translate-y-1/2 w-[22%] bg-white/90 backdrop-blur-md border border-white shadow-md rounded-xl p-1.5 sm:p-2.5 flex items-center gap-1.5 sm:gap-2 z-10"
                    style={{ top: input.y }}
                    animate={{ borderColor: ["#ffffff", "#3b82f6", "#ffffff"], boxShadow: ["0 4px 6px -1px rgba(0,0,0,0.05)", "0 10px 15px -3px rgba(59,130,246,0.2)", "0 4px 6px -1px rgba(0,0,0,0.05)"] }}
                    transition={syncTransition(input.delay, 1.5)}>

                    <div className={`w-5 h-5 sm:w-6 sm:h-6 ${input.bg} ${input.color} rounded-md flex items-center justify-center shrink-0`}>
                        <input.icon className="text-[8px] sm:text-[10px]" />
                    </div>

                    <div className="flex flex-col min-w-0">
                        <span className="text-[7px] sm:text-[9px] text-slate-800 font-bold leading-tight truncate">{input.title}</span>
                        <span className="text-[5px] sm:text-[7px] text-slate-500 font-semibold truncate">{input.sub}</span>
                    </div>
                </motion.div>
            ))}

            {/* --- CENTER: DATA ENGINE --- */}
            <div className="absolute top-[50%] left-[46%] -translate-x-1/2 -translate-y-1/2 w-[26%] bg-white/95 backdrop-blur-xl border border-white shadow-[0_20px_40px_-10px_rgba(139,92,246,0.15)] rounded-2xl p-2.5 sm:p-3 z-20 flex flex-col">
                <div className="flex justify-between items-center border-b border-slate-100 pb-1.5 sm:pb-2 mb-1.5 sm:mb-2">
                    <div className="flex items-center gap-1.5 min-w-0">
                        <FaDatabase className="text-purple-500 text-[9px] sm:text-[11px] shrink-0" />
                        <span className="text-[7px] sm:text-[9px] font-extrabold text-slate-800 truncate tracking-wider">DATA ENGINE</span>
                    </div>
                    <div className="flex items-center gap-1 bg-purple-50 px-1.5 py-0.5 rounded-full border border-purple-100 shrink-0">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-500 rounded-full animate-pulse"></div>
                        <span className="text-[5px] sm:text-[7px] text-purple-700 font-bold uppercase">Processing</span>
                    </div>
                </div>

                {/* Processing Stages */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 flex flex-col items-center justify-center h-12 sm:h-16 relative overflow-hidden shadow-inner">
                    {[
                        { step: "Collecting Data...", sub: "Aggregating sources...", delay: 1, dur: 1 },
                        { step: "Cleaning Dataset...", sub: "Removing duplicates... ✓", delay: 2, dur: 1 },
                        { step: "Analyzing Patterns...", sub: "Processing 44,720 rows...", delay: 3, dur: 1 },
                        { step: "Generating Insights...", sub: "Pattern detected ✓", delay: 4, dur: 1 },
                        { step: "Analysis Complete", sub: "Data ready for visualization", delay: 5, dur: 4.8 }
                    ].map((st, i) => (
                        <motion.div key={i} className="absolute flex flex-col items-center w-full px-1"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 0.9] }}
                            transition={syncTransition(st.delay, st.dur)}>
                            <FaCogs className="text-purple-400 text-[10px] sm:text-xs mb-1" />
                            <span className="text-[7px] sm:text-[9px] font-bold text-slate-700 text-center truncate w-full">{st.step}</span>
                            <span className="text-[5px] sm:text-[6px] text-green-600 font-mono text-center truncate w-full mt-0.5">{st.sub}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Tech Indicators */}
                <div className="flex justify-center gap-3 mt-2 sm:mt-2.5 pt-1.5 border-t border-slate-50">
                    <SiPython className="text-slate-300 text-[9px] sm:text-[11px] hover:text-blue-500 transition-colors" />
                    <SiPandas className="text-slate-300 text-[9px] sm:text-[11px] hover:text-purple-500 transition-colors" />
                </div>
            </div>

            {/* --- RIGHT COLUMN: DASHBOARD & INSIGHTS --- */}
            {/* Dashboard Component */}
            <motion.div className="absolute top-[32%] left-[80%] -translate-x-1/2 -translate-y-1/2 w-[28%] bg-white/95 backdrop-blur-md border border-white shadow-xl rounded-xl p-2 sm:p-2.5 flex flex-col gap-1.5 z-10"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: [0, 1, 1, 0], scale: [0.95, 1, 1, 0.95] }}
                transition={syncTransition(6.2, 3.8)}>

                {/* Dashboard Header */}
                <div className="flex justify-between items-center border-b border-slate-100 pb-1">
                    <span className="text-[7px] sm:text-[9px] font-bold text-slate-700">Analytics Overview</span>
                    <div className="flex gap-1.5">
                        <FaChartBar className="text-blue-500 text-[8px] sm:text-[10px]" />
                        <FaChartLine className="text-yellow-500 text-[8px] sm:text-[10px]" />
                    </div>
                </div>

                {/* KPIs */}
                <div className="flex gap-1 sm:gap-1.5">
                    {[
                        { label: "Revenue", val: "₹2.4M", inc: "18.6%" },
                        { label: "Customers", val: "12.8K", inc: "8.2%" },
                        { label: "Conversion", val: "6.4%", inc: "1.8%" }
                    ].map((kpi, i) => (
                        <motion.div key={i} className="flex-1 bg-slate-50 border border-slate-100 rounded p-1"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: [0, 1, 1, 1], y: [5, 0, 0, 0] }}
                            transition={syncTransition(6.5 + i * 0.2, 3.5 - i * 0.2)}>
                            <div className="text-[5px] sm:text-[6px] text-slate-400 font-semibold">{kpi.label}</div>
                            <div className="text-[6px] sm:text-[8px] font-bold text-slate-800">{kpi.val}</div>
                            <div className="text-[4px] sm:text-[5px] text-green-500 font-bold flex items-center">↑ {kpi.inc}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Chart Area */}
                <div className="h-10 sm:h-14 bg-slate-50 border border-slate-100 rounded mt-0.5 flex items-end gap-1 px-1 sm:px-2 pb-1 relative overflow-hidden">
                    {/* Grid lines */}
                    <div className="absolute inset-0 flex flex-col justify-between py-1 opacity-30">
                        <div className="border-t border-slate-200 w-full"></div>
                        <div className="border-t border-slate-200 w-full"></div>
                        <div className="border-t border-slate-200 w-full"></div>
                    </div>
                    {/* Bars */}
                    {[40, 70, 45, 90, 60, 100].map((h, i) => (
                        <motion.div key={i} className="flex-1 bg-gradient-to-t from-blue-400 to-purple-400 rounded-t-[1px] z-10"
                            initial={{ height: "0%" }}
                            animate={{ height: ["0%", `${h}%`, `${h}%`, "0%"] }}
                            transition={syncTransition(6.7 + i * 0.1, 3.3 - i * 0.1)}
                        />
                    ))}
                    {/* SVG Line Chart overlapping */}
                    <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none" preserveAspectRatio="none">
                        <motion.path d="M 0 12 L 20 5 L 40 10 L 60 2 L 80 6 L 100 0" stroke="#10b981" strokeWidth="1.5" fill="none" vectorEffect="non-scaling-stroke"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: [0, 1, 1, 0] }}
                            transition={syncTransition(7.0, 3.0)}
                        />
                    </svg>
                </div>
            </motion.div>

            {/* Insight Card */}
            <motion.div className="absolute top-[65%] left-[80%] -translate-x-1/2 -translate-y-1/2 w-[28%] bg-white/95 backdrop-blur-md border border-slate-100 shadow-lg rounded-xl p-2 flex flex-col gap-1 z-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
                transition={syncTransition(7.5, 2.5)}>
                <div className="flex items-center gap-1.5">
                    <FaLightbulb className="text-amber-500 text-[8px] sm:text-[10px]" />
                    <span className="text-[7px] sm:text-[9px] font-bold text-slate-800">Insight Detected</span>
                </div>
                <span className="text-[6px] sm:text-[7px] text-slate-600 leading-tight">
                    Sales increased <strong className="text-green-600">24%</strong> in the highest-performing region.
                </span>
            </motion.div>

            {/* Recommended Action Card */}
            <motion.div className="absolute top-[86%] left-[80%] -translate-x-1/2 -translate-y-1/2 w-[28%] bg-blue-50/95 backdrop-blur-md border border-blue-100 shadow-md rounded-xl p-2 flex flex-col gap-1 z-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
                transition={syncTransition(8.2, 1.8)}>
                <div className="flex items-center gap-1.5">
                    <FaBolt className="text-blue-500 text-[8px] sm:text-[10px]" />
                    <span className="text-[7px] sm:text-[9px] font-bold text-blue-800">Recommended Action</span>
                </div>
                <span className="text-[6px] sm:text-[7px] text-blue-700 font-semibold leading-tight">
                    Increase campaign budget by 15%
                </span>
            </motion.div>

            {/* --- BOTTOM: TECHNOLOGY BRANDS --- */}
            <div className="absolute bottom-[4%] sm:bottom-[6%] left-[50%] -translate-x-1/2 flex items-center justify-center gap-4 sm:gap-8 opacity-20 hover:opacity-50 transition-opacity z-0">
                <FaPython className="text-[12px] sm:text-[16px] text-slate-800" />
                <SiPandas className="text-[12px] sm:text-[16px] text-slate-800" />
                <FaChartBar className="text-[12px] sm:text-[16px] text-slate-800" />
                <FaChartLine className="text-[12px] sm:text-[16px] text-slate-800" />
            </div>

        </div>
    );
}
