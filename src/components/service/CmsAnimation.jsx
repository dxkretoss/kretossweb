import React from 'react';
import { motion } from 'framer-motion';
import { FaWordpress, FaShopify, FaMagento, FaDrupal, FaImage, FaListUl, FaCheckCircle, FaMousePointer, FaLayerGroup, FaEdit } from 'react-icons/fa';
import { SiBigcommerce } from 'react-icons/si';

export default function CmsAnimation() {
    // Timing cycle: 16 seconds total
    const CYCLE = 16;

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

            {/* --- SVG CONNECTIONS --- */}
            <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <motion.path key={i} d="M 46 50 L 54 50" stroke="#8b5cf6" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.3"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: [0, 0.5, 0], pathOffset: [0, 0.5, 1], opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, delay: i * 0.5, repeat: Infinity }} />
                ))}
            </svg>
            <div className="absolute left-[50%] top-[48%] -translate-x-1/2 -translate-y-1/2 text-[6px] font-bold text-purple-400 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded-full border border-purple-100 z-10 whitespace-nowrap">
                Live Sync
            </div>

            {/* --- LEFT: CMS ADMIN PANEL --- */}
            <div className="absolute left-[26%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[38%] bg-white border border-slate-200 shadow-xl rounded-lg overflow-hidden flex flex-col z-20 h-[65%]">
                <div className="bg-slate-50 border-b border-slate-200 px-2 py-1.5 flex justify-between items-center shrink-0">
                    <div className="flex items-center gap-1.5">
                        <FaEdit className="text-blue-500 text-[8px] sm:text-[10px]" />
                        <span className="text-[7px] sm:text-[9px] font-bold text-slate-700">CMS Admin</span>
                    </div>
                    {/* Publish Button */}
                    <motion.div className="bg-blue-500 text-white text-[5px] sm:text-[6px] font-bold px-1.5 py-0.5 rounded cursor-pointer drop-shadow-sm"
                        animate={{ scale: [1, 1, 1.1, 1, 1, 1], backgroundColor: ['#3b82f6', '#3b82f6', '#2563eb', '#22c55e', '#22c55e', '#3b82f6'] }}
                        transition={{ duration: CYCLE, times: [0, 7.8 / 16, 8.0 / 16, 8.2 / 16, 14.5 / 16, 1], repeat: Infinity }}>
                        PUBLISH
                    </motion.div>
                </div>

                <div className="flex flex-1 overflow-hidden relative">
                    {/* CMS Sidebar Toolbar */}
                    <div className="w-[30%] bg-slate-50 border-r border-slate-100 flex flex-col gap-1.5 p-1.5 shrink-0">
                        <div className="text-[5px] font-bold text-slate-400 text-center tracking-widest">BLOCKS</div>
                        {['Text', 'Image', 'Banner', 'Product', 'Button'].map(b => (
                            <div key={b} className="bg-white border border-slate-200 text-slate-600 font-semibold text-[5px] px-1 py-1 rounded shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex items-center justify-center gap-1">
                                {b === 'Image' ? <FaImage className="text-blue-400 text-[6px]" /> : null}
                                {b === 'Text' ? <FaLayerGroup className="text-purple-400 text-[6px]" /> : null}
                                {b}
                            </div>
                        ))}
                    </div>

                    {/* CMS Editor Area */}
                    <div className="flex-1 p-2 sm:p-2.5 flex flex-col gap-2 relative bg-white">
                        <div className="text-[6px] font-bold text-slate-400">New Blog Post</div>
                        <div className="border border-slate-200 rounded p-1.5">
                            <motion.div className="overflow-hidden whitespace-nowrap text-[8px] sm:text-[10px] font-bold text-slate-800 border-l-2 border-blue-500 pl-1"
                                animate={{ width: ['0%', '0%', '100%', '100%', '0%'] }}
                                transition={{ duration: CYCLE, times: [0, 1.5 / 16, 3.0 / 16, 14.5 / 16, 1], repeat: Infinity }}>
                                Introducing Our New Product
                            </motion.div>
                        </div>

                        {/* Animated Image Block */}
                        <motion.div className="w-full h-12 bg-blue-50/50 rounded border border-blue-100 flex items-center justify-center shrink-0"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.95, 0.95, 1, 1, 0.95] }}
                            transition={{ duration: CYCLE, times: [0, 3.0 / 16, 3.5 / 16, 14.5 / 16, 1], repeat: Infinity }}>
                            <FaImage className="text-blue-200 text-[12px] sm:text-[14px]" />
                        </motion.div>

                        {/* Animated Text Block */}
                        <motion.div className="flex flex-col gap-1.5 shrink-0"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: [0, 0, 1, 1, 0], y: [5, 5, 0, 0, 5] }}
                            transition={{ duration: CYCLE, times: [0, 4.5 / 16, 5.0 / 16, 14.5 / 16, 1], repeat: Infinity }}>
                            <div className="w-full h-1.5 bg-slate-200 rounded"></div>
                            <div className="w-5/6 h-1.5 bg-slate-200 rounded"></div>
                            <div className="w-4/6 h-1.5 bg-slate-200 rounded"></div>
                        </motion.div>
                    </div>

                    {/* Interactive Cursor clicking Publish */}
                    <motion.div className="absolute z-30 drop-shadow-md right-2 top-[-10px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0, 1, 1, 0, 0], y: [0, 0, -5, -5, 0, 0] }}
                        transition={{ duration: CYCLE, times: [0, 7.5 / 16, 7.8 / 16, 8.5 / 16, 8.8 / 16, 1], repeat: Infinity }}>
                        <FaMousePointer className="text-slate-800 text-[10px] sm:text-[12px]" />
                    </motion.div>
                </div>
            </div>

            {/* Block Dragging Animation Overlays */}
            {/* Drag Image */}
            <motion.div className="absolute bg-white border border-blue-200 text-blue-600 text-[5px] sm:text-[6px] font-bold px-1.5 py-1 rounded shadow-lg z-40 flex items-center gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0, 0], left: ['10%', '10%', '35%', '35%', '10%'], top: ['45%', '45%', '50%', '50%', '45%'] }}
                transition={{ duration: CYCLE, times: [0, 2.5 / 16, 3.0 / 16, 3.1 / 16, 1], repeat: Infinity }}>
                <FaImage className="text-[6px]" /> Image
            </motion.div>
            {/* Drag Text */}
            <motion.div className="absolute bg-white border border-purple-200 text-purple-600 text-[5px] sm:text-[6px] font-bold px-1.5 py-1 rounded shadow-lg z-40 flex items-center gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0, 1, 1, 0, 0], left: ['10%', '10%', '10%', '35%', '35%', '10%'], top: ['35%', '35%', '35%', '65%', '65%', '35%'] }}
                transition={{ duration: CYCLE, times: [0, 3.8 / 16, 4.0 / 16, 4.5 / 16, 4.6 / 16, 1], repeat: Infinity }}>
                <FaLayerGroup className="text-[6px]" /> Text
            </motion.div>


            {/* --- RIGHT: LIVE WEBSITE PREVIEW --- */}
            <motion.div className="absolute left-[74%] top-[50%] -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-slate-200 shadow-2xl rounded-lg overflow-hidden flex flex-col z-20 h-[65%] origin-center"
                animate={{ width: ['38%', '38%', '38%', '22%', '14%', '38%', '38%'] }}
                transition={{ duration: CYCLE, times: [0, 12.5 / 16, 13.0 / 16, 13.5 / 16, 14.0 / 16, 14.5 / 16, 1], repeat: Infinity, ease: "easeInOut" }}>

                {/* Browser Header */}
                <div className="bg-slate-100 h-4 sm:h-5 w-full flex items-center px-1.5 gap-0.5 border-b border-slate-200 shrink-0">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-slate-300"></div>
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-slate-300"></div>
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-slate-300"></div>
                    <span className="text-[5px] sm:text-[6px] font-semibold text-slate-400 ml-1">Live Preview</span>
                </div>

                <div className="flex-1 p-2 sm:p-3 flex flex-col gap-2 relative bg-white overflow-hidden">
                    {/* Live Website Content */}
                    <div className="pb-1 border-b border-slate-100 shrink-0">
                        <motion.div className="overflow-hidden whitespace-nowrap text-[10px] sm:text-[12px] font-bold text-slate-900 tracking-tight"
                            animate={{ width: ['0%', '0%', '100%', '100%', '0%'] }}
                            transition={{ duration: CYCLE, times: [0, 1.5 / 16, 3.0 / 16, 14.5 / 16, 1], repeat: Infinity }}>
                            Introducing Our New Product
                        </motion.div>
                    </div>

                    <motion.div className="w-full h-14 sm:h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-md flex items-center justify-center shrink-0 shadow-sm"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: [0, 0, 1, 1, 0], y: [10, 10, 0, 0, 10] }}
                        transition={{ duration: CYCLE, times: [0, 3.0 / 16, 3.5 / 16, 14.5 / 16, 1], repeat: Infinity }}>
                        <FaImage className="text-white text-[16px] drop-shadow-md" />
                    </motion.div>

                    <motion.div className="flex flex-col gap-1.5 shrink-0"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: [0, 0, 1, 1, 0], y: [10, 10, 0, 0, 10] }}
                        transition={{ duration: CYCLE, times: [0, 4.5 / 16, 5.0 / 16, 14.5 / 16, 1], repeat: Infinity }}>
                        <div className="w-full h-1.5 sm:h-2 bg-slate-300 rounded"></div>
                        <div className="w-5/6 h-1.5 sm:h-2 bg-slate-300 rounded"></div>
                        <div className="w-4/6 h-1.5 sm:h-2 bg-slate-300 rounded"></div>
                    </motion.div>

                    {/* "Published" Success Flash Overlay */}
                    <motion.div className="absolute inset-0 bg-green-500/10 border-2 border-green-500 z-30 pointer-events-none"
                        animate={{ opacity: [0, 0, 1, 0, 0] }}
                        transition={{ duration: CYCLE, times: [0, 10.4 / 16, 10.5 / 16, 11.5 / 16, 1], repeat: Infinity }} />
                </div>
            </motion.div>


            {/* --- FLOATING PANELS & NOTIFICATIONS --- */}

            {/* Content Management Panel */}
            <div className="absolute left-[16%] top-[18%] sm:top-[20%] -translate-x-1/2 -translate-y-1/2 w-[22%] bg-white/95 backdrop-blur-md border border-slate-100 shadow-lg rounded-xl p-2 z-30">
                <div className="flex items-center gap-1 border-b border-slate-100 pb-1 mb-1">
                    <FaListUl className="text-blue-500 text-[6px] sm:text-[8px]" />
                    <span className="text-[6px] sm:text-[7px] font-bold text-slate-700">Pages</span>
                </div>
                <div className="flex flex-col gap-1 sm:gap-1.5">
                    <div className="flex justify-between items-center text-[5px] sm:text-[6px]">
                        <span className="text-slate-600 font-semibold">Home Page</span>
                        <span className="text-green-500 font-bold">Published</span>
                    </div>
                    <div className="flex justify-between items-center text-[5px] sm:text-[6px]">
                        <span className="text-slate-600 font-semibold">About Us</span>
                        <span className="text-green-500 font-bold">Published</span>
                    </div>
                    <div className="flex justify-between items-center text-[5px] sm:text-[6px] bg-blue-50/50 p-0.5 rounded -mx-0.5 px-1 border-l border-blue-500">
                        <span className="text-slate-800 font-bold">New Product</span>
                        <div className="relative w-12 sm:w-14 text-right">
                            <motion.span className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-500 whitespace-nowrap" animate={{ opacity: [1, 1, 0, 0, 1] }} transition={{ duration: CYCLE, times: [0, 6.0 / 16, 6.1 / 16, 14.5 / 16, 1], repeat: Infinity }}>Draft</motion.span>
                            <motion.span className="absolute right-0 top-1/2 -translate-y-1/2 text-amber-500 font-bold whitespace-nowrap" animate={{ opacity: [0, 0, 1, 1, 0, 0] }} transition={{ duration: CYCLE, times: [0, 6.0 / 16, 6.1 / 16, 7.5 / 16, 7.6 / 16, 1], repeat: Infinity }}>Reviewing</motion.span>
                            <motion.span className="absolute right-0 top-1/2 -translate-y-1/2 text-blue-500 font-bold whitespace-nowrap" animate={{ opacity: [0, 0, 0, 0, 1, 1, 0, 0] }} transition={{ duration: CYCLE, times: [0, 7.5 / 16, 7.6 / 16, 10.5 / 16, 10.6 / 16, 14.5 / 16, 1], repeat: Infinity }}>Ready</motion.span>
                            <motion.span className="absolute right-0 top-1/2 -translate-y-1/2 text-green-500 font-bold whitespace-nowrap" animate={{ opacity: [0, 0, 0, 0, 0, 0, 1, 1, 0] }} transition={{ duration: CYCLE, times: [0, 10.5 / 16, 10.6 / 16, 14.5 / 16, 1], repeat: Infinity }}>Published ✓</motion.span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Publishing Sequence Panel */}
            <motion.div className="absolute top-[80%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-xl border border-slate-100 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.15)] rounded-xl p-2 sm:p-2.5 flex flex-col items-center gap-1.5 z-40 w-max"
                animate={{ opacity: [0, 0, 1, 1, 0, 0], y: [10, 10, 0, 0, -10, -10] }}
                transition={{ duration: CYCLE, times: [0, 8.5 / 16, 9.0 / 16, 12.5 / 16, 13.0 / 16, 1], repeat: Infinity }}>

                <div className="relative w-full h-4 sm:h-5 flex items-center justify-center text-[7px] sm:text-[9px] font-bold text-slate-700">
                    <motion.span className="absolute whitespace-nowrap" animate={{ opacity: [1, 1, 0, 0, 0] }} transition={{ duration: CYCLE, times: [0, 9.5 / 16, 9.6 / 16, 1] }}>Optimizing Content...</motion.span>
                    <motion.span className="absolute whitespace-nowrap" animate={{ opacity: [0, 0, 1, 1, 0, 0] }} transition={{ duration: CYCLE, times: [0, 9.5 / 16, 9.6 / 16, 10.4 / 16, 10.5 / 16, 1] }}>Publishing...</motion.span>
                    <motion.div className="absolute whitespace-nowrap flex items-center gap-1 text-green-600" animate={{ opacity: [0, 0, 0, 0, 1, 1] }} transition={{ duration: CYCLE, times: [0, 10.4 / 16, 10.5 / 16, 1] }}>
                        <FaCheckCircle className="text-[9px] sm:text-[11px]" /> Published Successfully
                    </motion.div>
                </div>
                <div className="w-32 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div className="h-full bg-blue-500 rounded-full" animate={{ width: ['0%', '0%', '50%', '100%', '100%'] }} transition={{ duration: CYCLE, times: [0, 9.0 / 16, 9.5 / 16, 10.4 / 16, 1], repeat: Infinity }} />
                </div>
            </motion.div>

            {/* Live Website Updated Notification */}
            <motion.div className="absolute top-[35%] right-[5%] sm:right-[8%] w-max bg-white/95 backdrop-blur-md border border-green-200 shadow-[0_10px_20px_-5px_rgba(34,197,94,0.15)] rounded-lg p-1.5 sm:p-2 flex flex-col gap-0.5 items-center z-40"
                animate={{ opacity: [0, 0, 1, 1, 0, 0], y: [10, 10, 0, 0, -10, -10] }}
                transition={{ duration: CYCLE, times: [0, 10.5 / 16, 11.0 / 16, 13.5 / 16, 14.0 / 16, 1], repeat: Infinity }}>
                <div className="flex items-center gap-1">
                    <FaCheckCircle className="text-green-500 text-[8px] sm:text-[10px]" />
                    <span className="text-[6px] sm:text-[8px] font-bold text-green-600">Website Updated</span>
                </div>
                <span className="text-[5px] sm:text-[6px] text-slate-500 font-semibold">Changes are now live</span>
            </motion.div>

            {/* Subtle CMS Stats */}
            <div className="absolute left-[12%] bottom-[12%] sm:bottom-[15%] w-[18%] bg-white/90 backdrop-blur-sm border border-slate-100 shadow-sm rounded-lg p-1.5 sm:p-2 z-10 flex flex-col gap-1 sm:gap-1.5">
                <div className="flex justify-between items-center">
                    <span className="text-[5px] sm:text-[6px] text-slate-500 font-semibold">Total Pages</span>
                    <span className="text-[6px] sm:text-[7px] font-bold text-slate-800">12</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-[5px] sm:text-[6px] text-slate-500 font-semibold">Products</span>
                    <span className="text-[6px] sm:text-[7px] font-bold text-slate-800">48</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-[5px] sm:text-[6px] text-slate-500 font-semibold">Blog Posts</span>
                    <span className="text-[6px] sm:text-[7px] font-bold text-slate-800">24</span>
                </div>
            </div>

            {/* --- BOTTOM: TECHNOLOGY BRANDS --- */}
            <div className="absolute bottom-[4%] sm:bottom-[6%] left-[50%] -translate-x-1/2 flex items-center justify-center gap-4 sm:gap-8 opacity-20 hover:opacity-50 transition-opacity z-0">
                <FaWordpress className="text-[12px] sm:text-[16px] text-slate-800" />
                <FaShopify className="text-[12px] sm:text-[16px] text-slate-800" />
                <FaMagento className="text-[12px] sm:text-[16px] text-slate-800" />
                <FaDrupal className="text-[12px] sm:text-[16px] text-slate-800" />
                <SiBigcommerce className="text-[12px] sm:text-[16px] text-slate-800" />
            </div>

        </div>
    );
}
