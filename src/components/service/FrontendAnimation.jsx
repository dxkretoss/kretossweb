import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaCheckCircle, FaMousePointer, FaDesktop, FaTabletAlt, FaMobileAlt, FaBolt, FaReact, FaAngular, FaVuejs, FaJs, FaPaintBrush } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

export default function FrontendAnimation() {
    // Timing cycle: 14 seconds total
    const CYCLE = 14;
    
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/5 rounded-full blur-[60px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/5 rounded-full blur-[60px] pointer-events-none"></div>

            {/* --- LEFT: DESIGN & CODE EDITOR --- */}
            {/* Design Ready Card */}
            <motion.div className="absolute left-[12%] top-[25%] -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm border border-slate-100 shadow-md rounded-lg p-1.5 sm:p-2 z-20 flex items-center gap-1.5 w-max"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: [0, 1, 1, 0], x: [-10, 0, 0, -10] }}
                transition={syncTransition(0, 3.5)}>
                <FaPaintBrush className="text-purple-500 text-[8px] sm:text-[10px]" />
                <span className="text-[7px] sm:text-[9px] font-bold text-slate-700">Design Ready</span>
            </motion.div>

            {/* Code Editor */}
            <div className="absolute left-[16%] top-[55%] -translate-x-1/2 -translate-y-1/2 w-[24%] bg-slate-900 border border-slate-700 shadow-xl rounded-xl overflow-hidden z-20 flex flex-col">
                <div className="bg-slate-800 px-2 py-1.5 border-b border-slate-700 flex items-center gap-1.5">
                    <FaCode className="text-blue-400 text-[7px] sm:text-[9px]" />
                    <span className="text-[6px] sm:text-[8px] font-bold text-slate-300">Editor</span>
                    <div className="ml-auto flex gap-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    </div>
                </div>
                <div className="p-2 sm:p-2.5 flex flex-col gap-1.5 h-20 sm:h-24">
                    <div className="h-1.5 bg-slate-700 rounded overflow-hidden">
                        <motion.div className="h-full bg-blue-400" animate={{ width: ['0%', '80%', '80%', '0%'] }} transition={syncTransition(1.5, 11.5)} />
                    </div>
                    <div className="h-1.5 bg-slate-700 rounded overflow-hidden">
                        <motion.div className="h-full bg-purple-400" animate={{ width: ['0%', '0%', '60%', '60%', '0%'] }} transition={{ duration: CYCLE, times: [0, 2.0/14, 2.3/14, 13/14, 1], repeat: Infinity }} />
                    </div>
                    <div className="h-1.5 bg-slate-700 rounded overflow-hidden">
                        <motion.div className="h-full bg-amber-400" animate={{ width: ['0%', '0%', '90%', '90%', '0%'] }} transition={{ duration: CYCLE, times: [0, 2.5/14, 2.8/14, 13/14, 1], repeat: Infinity }} />
                    </div>
                    <div className="h-1.5 bg-slate-700 rounded overflow-hidden">
                        <motion.div className="h-full bg-green-400" animate={{ width: ['0%', '0%', '40%', '40%', '0%'] }} transition={{ duration: CYCLE, times: [0, 3.0/14, 3.3/14, 13/14, 1], repeat: Infinity }} />
                    </div>
                    <div className="h-1.5 bg-slate-700 rounded overflow-hidden mt-1">
                        <motion.div className="h-full bg-blue-400" animate={{ width: ['0%', '0%', '70%', '70%', '0%'] }} transition={{ duration: CYCLE, times: [0, 4.5/14, 5.0/14, 13/14, 1], repeat: Infinity }} />
                    </div>
                </div>
            </div>

            {/* Component Assembly Packets */}
            {[
                { name: "Navbar.jsx", delay: 1.5, top: '42%' },
                { name: "Hero.jsx", delay: 2.0, top: '50%' },
                { name: "ProductCard.jsx", delay: 2.5, top: '58%' },
            ].map((comp, i) => (
                <motion.div key={i} className="absolute left-[30%] -translate-x-1/2 -translate-y-1/2 bg-blue-50 border border-blue-200 text-blue-600 px-1.5 py-0.5 rounded text-[5px] sm:text-[7px] font-mono font-bold z-30 shadow-sm whitespace-nowrap"
                    style={{ top: comp.top }}
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: [0, 1, 1, 0, 0], x: [0, 20, 80, 100, 100] }}
                    transition={{ duration: CYCLE, times: [0, comp.delay/14, (comp.delay+0.5)/14, (comp.delay+1.5)/14, 1], repeat: Infinity }}>
                    {comp.name}
                </motion.div>
            ))}

            {/* --- CENTER: MAIN BROWSER UI --- */}
            <motion.div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-slate-50 border-2 border-slate-200 shadow-2xl rounded-xl overflow-hidden flex flex-col z-20 origin-center"
                animate={{ width: ['50%', '50%', '35%', '22%', '22%', '50%', '50%'], height: ['65%', '65%', '70%', '75%', '75%', '65%', '65%'] }}
                transition={{ duration: CYCLE, times: [0, 5.5/14, 6.0/14, 7.5/14, 9.0/14, 9.5/14, 1], repeat: Infinity, ease: "easeInOut" }}>
                
                {/* Browser Header */}
                <div className="bg-slate-200 h-4 sm:h-5 w-full flex items-center px-2 gap-1 border-b border-slate-300 shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                    
                    {/* Device Icon Indicator */}
                    <div className="ml-auto relative w-3 sm:w-4 h-3 sm:h-4">
                        <motion.div className="absolute inset-0 flex items-center justify-center text-[7px] sm:text-[9px] text-slate-500" animate={{opacity:[1,1,0,0,0,1,1]}} transition={{duration:CYCLE, times:[0, 5.5/14, 5.8/14, 9.2/14, 9.5/14, 1], repeat:Infinity}}><FaDesktop /></motion.div>
                        <motion.div className="absolute inset-0 flex items-center justify-center text-[7px] sm:text-[9px] text-slate-500" animate={{opacity:[0,0,1,1,0,0,0]}} transition={{duration:CYCLE, times:[0, 5.5/14, 5.8/14, 7.2/14, 7.5/14, 1], repeat:Infinity}}><FaTabletAlt /></motion.div>
                        <motion.div className="absolute inset-0 flex items-center justify-center text-[7px] sm:text-[9px] text-slate-500" animate={{opacity:[0,0,0,0,1,1,0]}} transition={{duration:CYCLE, times:[0, 5.5/14, 7.2/14, 7.5/14, 9.2/14, 9.5/14, 1], repeat:Infinity}}><FaMobileAlt /></motion.div>
                    </div>
                </div>
                
                {/* Browser Body (Scrollable or hidden) */}
                <div className="flex-1 p-2 sm:p-3 overflow-hidden relative bg-white flex flex-col gap-2">
                    
                    {/* --- POLISHED UI LAYER --- */}
                    
                    {/* Navbar */}
                    <div className="flex justify-between items-center bg-white shadow-sm p-1.5 sm:p-2 rounded border border-slate-100 shrink-0">
                        <div className="w-6 sm:w-8 h-2 sm:h-3 bg-blue-500 rounded-sm"></div>
                        {/* Desktop Links - hidden on smaller sizes */}
                        <motion.div className="flex gap-1 sm:gap-2 items-center"
                            animate={{ opacity: [1, 1, 0, 0, 0, 1, 1], display: ['flex', 'flex', 'none', 'none', 'none', 'flex', 'flex'] }}
                            transition={{ duration: CYCLE, times: [0, 5.5/14, 5.8/14, 7.5/14, 9.0/14, 9.5/14, 1], repeat: Infinity }}>
                            <div className="w-8 sm:w-12 h-1 bg-slate-200 rounded"></div>
                            <div className="w-4 h-3 sm:h-4 bg-blue-500 rounded-sm flex items-center justify-center text-[4px] sm:text-[5px] text-white font-bold">BTN</div>
                        </motion.div>
                        {/* Mobile Menu Icon */}
                        <motion.div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-50 rounded-sm items-center justify-center"
                            animate={{ display: ['none', 'none', 'flex', 'flex', 'flex', 'none', 'none'], opacity: [0, 0, 1, 1, 1, 0, 0] }}
                            transition={{ duration: CYCLE, times: [0, 5.5/14, 5.8/14, 7.5/14, 9.0/14, 9.5/14, 1], repeat: Infinity }}>
                            <div className="flex flex-col gap-[1px]">
                                <div className="w-2 h-[1px] bg-blue-500"></div>
                                <div className="w-2 h-[1px] bg-blue-500"></div>
                                <div className="w-2 h-[1px] bg-blue-500"></div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Hero Section */}
                    <motion.div className="flex gap-2 shrink-0"
                        animate={{ flexDirection: ['row', 'row', 'column', 'column', 'column', 'row', 'row'] }}
                        transition={{ duration: CYCLE, times: [0, 5.5/14, 6.0/14, 7.5/14, 9.0/14, 9.5/14, 1], repeat: Infinity }}>
                        <div className="flex-1 flex flex-col justify-center gap-1 sm:gap-1.5">
                            <div className="h-2.5 sm:h-3 bg-slate-800 rounded-sm w-3/4"></div>
                            <div className="h-1 sm:h-1.5 bg-slate-400 rounded w-full"></div>
                            <div className="h-1 sm:h-1.5 bg-slate-400 rounded w-5/6"></div>
                            
                            {/* Interactive Button */}
                            <motion.div className="h-3 sm:h-4 w-10 sm:w-14 bg-blue-500 rounded-sm text-white text-[4px] sm:text-[5px] font-bold flex items-center justify-center mt-0.5 sm:mt-1 cursor-pointer"
                                animate={{ scale: [1, 1, 1.1, 1, 1] }}
                                transition={{ duration: CYCLE, times: [0, 11.5/14, 12.0/14, 12.5/14, 1], repeat: Infinity }}>
                                GET STARTED
                            </motion.div>
                        </div>
                        <div className="flex-1 h-10 sm:h-16 bg-gradient-to-br from-indigo-100 to-purple-50 border border-indigo-100 rounded-sm"></div>
                    </motion.div>

                    {/* Cards Section */}
                    <motion.div className="flex gap-1.5 mt-1"
                        animate={{ flexDirection: ['row', 'row', 'row', 'column', 'column', 'row', 'row'] }}
                        transition={{ duration: CYCLE, times: [0, 5.5/14, 6.0/14, 7.5/14, 9.0/14, 9.5/14, 1], repeat: Infinity }}>
                        {[1, 2, 3].map(i => (
                            <motion.div key={i} className="flex-1 bg-white border border-slate-100 shadow-sm rounded-sm p-1.5 flex flex-col gap-1 min-h-[30px] sm:min-h-[40px]"
                                animate={{ display: ['flex', 'flex', i===3?'none':'flex', 'flex', 'flex', 'flex', 'flex'] }}
                                transition={{ duration: CYCLE, times: [0, 5.5/14, 6.0/14, 7.5/14, 9.0/14, 9.5/14, 1], repeat: Infinity }}>
                                <div className="w-full h-3 sm:h-4 bg-slate-50 rounded-sm"></div>
                                <div className="w-3/4 h-1 sm:h-1.5 bg-slate-200 rounded"></div>
                            </motion.div>
                        ))}
                    </motion.div>
                    
                    {/* --- WIREFRAME OVERLAY --- */}
                    <motion.div className="absolute inset-0 bg-white p-2 sm:p-3 flex flex-col gap-2 z-10"
                        animate={{ opacity: [1, 1, 0, 0, 0, 0, 1] }}
                        transition={{ duration: CYCLE, times: [0, 2.5/14, 3.5/14, 13/14, 13.5/14, 1], repeat: Infinity }}>
                        <div className="h-6 w-full border border-dashed border-slate-300 rounded-sm bg-slate-50"></div>
                        <div className="flex gap-2">
                            <div className="flex-1 h-14 sm:h-20 border border-dashed border-slate-300 rounded-sm bg-slate-50"></div>
                            <div className="flex-1 h-14 sm:h-20 border border-dashed border-slate-300 rounded-sm bg-slate-50"></div>
                        </div>
                        <div className="flex gap-1.5">
                            <div className="flex-1 h-10 sm:h-14 border border-dashed border-slate-300 rounded-sm bg-slate-50"></div>
                            <div className="flex-1 h-10 sm:h-14 border border-dashed border-slate-300 rounded-sm bg-slate-50"></div>
                            <div className="flex-1 h-10 sm:h-14 border border-dashed border-slate-300 rounded-sm bg-slate-50"></div>
                        </div>
                    </motion.div>

                    {/* --- INTERACTION CURSOR --- */}
                    <motion.div className="absolute z-30 drop-shadow-md"
                        initial={{ opacity: 0 }}
                        animate={{ left: ['80%', '80%', '30%', '30%', '80%'], top: ['80%', '80%', '42%', '42%', '80%'], opacity: [0, 0, 1, 0, 0] }}
                        transition={{ duration: CYCLE, times: [0, 11.0/14, 12.0/14, 12.8/14, 1], repeat: Infinity, ease: "easeOut" }}>
                        <FaMousePointer className="text-slate-800 text-[10px] sm:text-[12px]" />
                    </motion.div>

                </div>
            </motion.div>

            {/* --- RIGHT: PERFORMANCE & STATUS --- */}
            {/* Performance Panel */}
            <motion.div className="absolute right-[10%] top-[25%] w-[20%] bg-white/95 backdrop-blur-md border border-slate-100 shadow-lg rounded-xl p-2 z-10"
                animate={{ opacity: [0, 0, 1, 1, 0] }}
                transition={{ duration: CYCLE, times: [0, 9.5/14, 10.0/14, 13.5/14, 1], repeat: Infinity }}>
                <div className="flex items-center gap-1.5 border-b border-slate-100 pb-1 mb-1.5">
                    <FaBolt className="text-amber-500 text-[8px]" />
                    <span className="text-[7px] sm:text-[9px] font-bold text-slate-700">Lighthouse</span>
                </div>
                
                <div className="flex justify-between items-center mb-0.5">
                    <span className="text-[6px] sm:text-[7px] font-semibold text-slate-600">Performance</span>
                    <span className="text-[7px] sm:text-[8px] font-bold text-green-500">98</span>
                </div>
                <div className="w-full h-1 bg-slate-100 rounded-full mb-1.5"><motion.div className="h-full bg-green-500 rounded-full" animate={{width: ['0%', '98%', '98%']}} transition={{duration: CYCLE, times:[0, 10.0/14, 1]}} /></div>
                
                <div className="flex justify-between items-center mb-0.5">
                    <span className="text-[6px] sm:text-[7px] font-semibold text-slate-600">Accessibility</span>
                    <span className="text-[7px] sm:text-[8px] font-bold text-green-500">100</span>
                </div>
                <div className="w-full h-1 bg-slate-100 rounded-full mb-1.5"><motion.div className="h-full bg-green-500 rounded-full" animate={{width: ['0%', '100%', '100%']}} transition={{duration: CYCLE, times:[0, 10.2/14, 1]}} /></div>

                <div className="flex justify-between items-center mb-0.5">
                    <span className="text-[6px] sm:text-[7px] font-semibold text-slate-600">Best Practices</span>
                    <span className="text-[7px] sm:text-[8px] font-bold text-green-500">100</span>
                </div>
                <div className="w-full h-1 bg-slate-100 rounded-full"><motion.div className="h-full bg-green-500 rounded-full" animate={{width: ['0%', '100%', '100%']}} transition={{duration: CYCLE, times:[0, 10.4/14, 1]}} /></div>
            </motion.div>

            {/* Status Notifications */}
            <div className="absolute right-[10%] top-[62%] w-[22%] flex flex-col gap-1.5 z-10">
                {[
                    { text: "Responsive Layout ✓", delay: 8.5 },
                    { text: "Components Optimized ✓", delay: 10.0 },
                    { text: "Accessibility Ready ✓", delay: 10.5 },
                    { text: "Fast Loading ✓", delay: 11.0 }
                ].map((note, i) => (
                    <motion.div key={i} className="bg-green-50/90 backdrop-blur-sm border border-green-100 text-green-600 text-[6px] sm:text-[7.5px] font-bold px-2 py-1 rounded shadow-sm flex items-center gap-1 whitespace-nowrap"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: [0, 1, 1, 0], x: [20, 0, 0, 20] }}
                        transition={{ duration: CYCLE, times: [0, note.delay/14, 13/14, 1], repeat: Infinity }}>
                        <FaCheckCircle className="text-[7px] sm:text-[9px]" />
                        {note.text}
                    </motion.div>
                ))}
            </div>

            {/* --- BOTTOM: TECHNOLOGY BRANDS --- */}
            <div className="absolute bottom-[4%] sm:bottom-[6%] left-[50%] -translate-x-1/2 flex items-center justify-center gap-4 sm:gap-8 opacity-20 hover:opacity-50 transition-opacity z-0">
                <FaReact className="text-[12px] sm:text-[16px] text-slate-800" />
                <FaAngular className="text-[12px] sm:text-[16px] text-slate-800" />
                <FaVuejs className="text-[12px] sm:text-[16px] text-slate-800" />
                <SiNextdotjs className="text-[12px] sm:text-[16px] text-slate-800" />
                <FaJs className="text-[12px] sm:text-[16px] text-slate-800" />
            </div>

        </div>
    );
}
