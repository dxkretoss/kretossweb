import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaServer, FaDatabase, FaShieldAlt, FaHdd, FaNetworkWired, FaCheckCircle, FaExclamationTriangle, FaAws, FaMicrosoft, FaDigitalOcean } from 'react-icons/fa';
import { SiGooglecloud } from 'react-icons/si';

export default function CloudAnimation() {
    // Timing cycle: 12 seconds total
    const CYCLE = 12;
    
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

            {/* --- TOP: MONITORING DASHBOARD --- */}
            <div className="absolute top-[4%] sm:top-[6%] left-[50%] -translate-x-1/2 flex items-center justify-center gap-3 sm:gap-6 bg-white/95 backdrop-blur-md border border-slate-100 rounded-full px-3 sm:px-5 py-1.5 sm:py-2 shadow-sm z-30 w-max max-w-[95%]">
                <div className="flex items-center gap-1 sm:gap-1.5">
                    <FaCheckCircle className="text-green-500 text-[8px] sm:text-[10px]" />
                    <span className="text-[7px] sm:text-[9px] font-bold text-slate-700 whitespace-nowrap">Up: 99.99%</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5">
                    <FaNetworkWired className="text-blue-500 text-[8px] sm:text-[10px]" />
                    <div className="relative h-3 w-12 sm:w-16">
                        <motion.span className="absolute left-0 top-1/2 -translate-y-1/2 text-[7px] sm:text-[9px] font-bold text-slate-700 whitespace-nowrap" animate={{opacity:[1,1,0,0,0,0,1,1]}} transition={{duration:CYCLE, times:[0, 3.5/12, 3.6/12, 5.5/12, 11/12, 11.1/12, 11.2/12, 1], repeat:Infinity}}>Lat: 32ms</motion.span>
                        <motion.span className="absolute left-0 top-1/2 -translate-y-1/2 text-[7px] sm:text-[9px] font-bold text-red-500 whitespace-nowrap" animate={{opacity:[0,0,1,1,0,0,0]}} transition={{duration:CYCLE, times:[0, 3.5/12, 3.6/12, 5.4/12, 5.5/12, 11/12, 1], repeat:Infinity}}>Lat: 145ms</motion.span>
                        <motion.span className="absolute left-0 top-1/2 -translate-y-1/2 text-[7px] sm:text-[9px] font-bold text-amber-500 whitespace-nowrap" animate={{opacity:[0,0,0,0,1,1,0]}} transition={{duration:CYCLE, times:[0, 3.5/12, 5.4/12, 5.5/12, 11/12, 11.1/12, 1], repeat:Infinity}}>Lat: 45ms</motion.span>
                    </div>
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5">
                    <FaServer className="text-purple-500 text-[8px] sm:text-[10px]" />
                    <div className="relative h-3 w-12 sm:w-16">
                        <motion.span className="absolute left-0 top-1/2 -translate-y-1/2 text-[7px] sm:text-[9px] font-bold text-slate-700 whitespace-nowrap" animate={{opacity:[1,1,0,0,0,0,1,1]}} transition={{duration:CYCLE, times:[0, 3.5/12, 3.6/12, 5.5/12, 11/12, 11.1/12, 11.2/12, 1], repeat:Infinity}}>CPU: 48%</motion.span>
                        <motion.span className="absolute left-0 top-1/2 -translate-y-1/2 text-[7px] sm:text-[9px] font-bold text-red-500 whitespace-nowrap" animate={{opacity:[0,0,1,1,0,0,0]}} transition={{duration:CYCLE, times:[0, 3.5/12, 3.6/12, 5.4/12, 5.5/12, 11/12, 1], repeat:Infinity}}>CPU: 94%</motion.span>
                        <motion.span className="absolute left-0 top-1/2 -translate-y-1/2 text-[7px] sm:text-[9px] font-bold text-slate-700 whitespace-nowrap" animate={{opacity:[0,0,0,0,1,1,0]}} transition={{duration:CYCLE, times:[0, 3.5/12, 5.4/12, 5.5/12, 11/12, 11.1/12, 1], repeat:Infinity}}>CPU: 54%</motion.span>
                    </div>
                </div>
            </div>

            {/* --- SVG CONNECTIONS --- */}
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <defs>
                    <linearGradient id="cloud-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                    <filter id="cloud-glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="1" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* Static Base Paths */}
                {/* Traffic to LB */}
                <path d="M 21 50 L 29 50" stroke="#e2e8f0" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                {/* LB to Servers */}
                <path d="M 43 50 C 47 50, 47 28, 52 28" stroke="#e2e8f0" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                <path d="M 43 50 C 47 50, 47 44, 52 44" stroke="#e2e8f0" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                <path d="M 43 50 C 47 50, 47 60, 52 60" stroke="#e2e8f0" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                <path d="M 43 50 C 47 50, 47 76, 52 76" stroke="#e2e8f0" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                {/* Servers to DB/Storage */}
                <path d="M 72 28 C 76 28, 76 35, 80 35" stroke="#e2e8f0" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                <path d="M 72 44 C 76 44, 76 35, 80 35" stroke="#e2e8f0" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                <path d="M 72 60 C 76 60, 76 65, 80 65" stroke="#e2e8f0" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                <path d="M 72 76 C 76 76, 76 65, 80 65" stroke="#e2e8f0" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />

                {/* Animated Data Packets (Traffic -> LB) */}
                {/* Normal Traffic: 1 per sec */}
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(delay => (
                    <motion.path key={`t-norm-${delay}`} d="M 21 50 L 29 50" stroke="url(#cloud-gradient)" strokeWidth="1.5" fill="none" filter="url(#cloud-glow)" strokeLinecap="round" vectorEffect="non-scaling-stroke"
                        initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }} animate={{ pathLength: [0, 0.2, 0.2, 0], pathOffset: [0, 0, 0.8, 1], opacity: [0, 1, 1, 0] }} transition={syncTransition(delay, 0.8)} />
                ))}
                {/* Spike Traffic: multiple packets during 3.5s - 11.0s */}
                {[...Array(15)].map((_, i) => (
                    <motion.path key={`t-spike-${i}`} d="M 21 50 L 29 50" stroke="url(#cloud-gradient)" strokeWidth="1.5" fill="none" filter="url(#cloud-glow)" strokeLinecap="round" vectorEffect="non-scaling-stroke"
                        initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }} animate={{ pathLength: [0, 0.2, 0.2, 0], pathOffset: [0, 0, 0.8, 1], opacity: [0, 1, 1, 0] }} transition={syncTransition(3.5 + i * 0.5, 0.6)} />
                ))}

                {/* Animated Packets (LB -> Servers) */}
                {/* Always active Servers 1 & 2 */}
                {[0, 1.5, 3, 4.5, 6, 7.5, 9, 10.5].map(delay => (
                    <motion.path key={`s1-${delay}`} d="M 43 50 C 47 50, 47 28, 52 28" stroke="url(#cloud-gradient)" strokeWidth="1.2" fill="none" filter="url(#cloud-glow)" strokeLinecap="round" vectorEffect="non-scaling-stroke"
                        initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }} animate={{ pathLength: [0, 0.15, 0.15, 0], pathOffset: [0, 0, 0.85, 1], opacity: [0, 1, 1, 0] }} transition={syncTransition(delay, 1.2)} />
                ))}
                {[0.7, 2.2, 3.7, 5.2, 6.7, 8.2, 9.7, 11.2].map(delay => (
                    <motion.path key={`s2-${delay}`} d="M 43 50 C 47 50, 47 44, 52 44" stroke="url(#cloud-gradient)" strokeWidth="1.2" fill="none" filter="url(#cloud-glow)" strokeLinecap="round" vectorEffect="non-scaling-stroke"
                        initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }} animate={{ pathLength: [0, 0.15, 0.15, 0], pathOffset: [0, 0, 0.85, 1], opacity: [0, 1, 1, 0] }} transition={syncTransition(delay, 1.2)} />
                ))}
                
                {/* Scaled Servers 3 & 4 (active 5.5s to 11.0s) */}
                {[5.5, 6.7, 7.9, 9.1, 10.3].map(delay => (
                    <motion.path key={`s3-${delay}`} d="M 43 50 C 47 50, 47 60, 52 60" stroke="url(#cloud-gradient)" strokeWidth="1.2" fill="none" filter="url(#cloud-glow)" strokeLinecap="round" vectorEffect="non-scaling-stroke"
                        initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }} animate={{ pathLength: [0, 0.15, 0.15, 0], pathOffset: [0, 0, 0.85, 1], opacity: [0, 1, 1, 0] }} transition={syncTransition(delay, 1.2)} />
                ))}
                {[6.1, 7.3, 8.5, 9.7].map(delay => (
                    <motion.path key={`s4-${delay}`} d="M 43 50 C 47 50, 47 76, 52 76" stroke="url(#cloud-gradient)" strokeWidth="1.2" fill="none" filter="url(#cloud-glow)" strokeLinecap="round" vectorEffect="non-scaling-stroke"
                        initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }} animate={{ pathLength: [0, 0.15, 0.15, 0], pathOffset: [0, 0, 0.85, 1], opacity: [0, 1, 1, 0] }} transition={syncTransition(delay, 1.2)} />
                ))}

                {/* Animated Packets (Servers -> DB/Storage) */}
                {[1.0, 4.0, 7.0, 10.0].map(delay => (
                    <motion.path key={`db1-${delay}`} d="M 72 28 C 76 28, 76 35, 80 35" stroke="url(#cloud-gradient)" strokeWidth="1" fill="none" filter="url(#cloud-glow)" strokeLinecap="round" vectorEffect="non-scaling-stroke"
                        initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }} animate={{ pathLength: [0, 0.15, 0.15, 0], pathOffset: [0, 0, 0.85, 1], opacity: [0, 1, 1, 0] }} transition={syncTransition(delay, 1.0)} />
                ))}
                {[6.5, 8.5, 10.5].map(delay => (
                    <motion.path key={`st3-${delay}`} d="M 72 60 C 76 60, 76 65, 80 65" stroke="url(#cloud-gradient)" strokeWidth="1" fill="none" filter="url(#cloud-glow)" strokeLinecap="round" vectorEffect="non-scaling-stroke"
                        initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }} animate={{ pathLength: [0, 0.15, 0.15, 0], pathOffset: [0, 0, 0.85, 1], opacity: [0, 1, 1, 0] }} transition={syncTransition(delay, 1.0)} />
                ))}
            </svg>

            {/* --- LEFT: INCOMING TRAFFIC --- */}
            <div className="absolute top-[50%] left-[12%] -translate-x-1/2 -translate-y-1/2 w-[18%] bg-white/95 backdrop-blur-md border border-slate-100 shadow-md rounded-xl p-2 sm:p-3 flex flex-col gap-1 sm:gap-1.5 z-10">
                <div className="flex items-center gap-1.5 border-b border-slate-100 pb-1.5">
                    <FaNetworkWired className="text-blue-500 text-[10px] sm:text-[12px]" />
                    <span className="text-[8px] sm:text-[10px] font-bold text-slate-700">Live Traffic</span>
                </div>
                
                {/* Number change */}
                <div className="text-[10px] sm:text-[12px] font-bold text-slate-800 relative w-full h-4 sm:h-5 mt-0.5">
                    <motion.span className="absolute inset-0 whitespace-nowrap" animate={{opacity:[1,1,0,0,0,0,1,1]}} transition={{duration:CYCLE, times:[0, 3.5/12, 3.6/12, 4.5/12, 11/12, 11.1/12, 11.2/12, 1], repeat:Infinity}}>2.8K Req/min</motion.span>
                    <motion.span className="absolute inset-0 text-red-500 whitespace-nowrap" animate={{opacity:[0,0,1,1,0,0,0]}} transition={{duration:CYCLE, times:[0, 3.5/12, 3.6/12, 4.4/12, 4.5/12, 11/12, 1], repeat:Infinity}}>5.4K Req/min</motion.span>
                    <motion.span className="absolute inset-0 text-amber-500 whitespace-nowrap" animate={{opacity:[0,0,0,0,1,1,0]}} transition={{duration:CYCLE, times:[0, 3.5/12, 4.4/12, 4.5/12, 11/12, 11.1/12, 1], repeat:Infinity}}>9.8K Req/min</motion.span>
                </div>
                
                <div className="text-[6px] sm:text-[8px] text-slate-500 font-semibold mt-1">Active Users: 1.2K</div>
            </div>

            {/* Threat Tooltips */}
            {[2.5, 8.5].map(delay => (
                <motion.div key={delay} className="absolute top-[42%] left-[23%] -translate-x-1/2 bg-slate-800 text-green-400 text-[5px] sm:text-[7px] font-mono px-1.5 py-0.5 rounded shadow-lg z-30 flex items-center gap-1"
                    initial={{ opacity: 0, y: 5 }} animate={{ opacity: [0, 1, 1, 0], y: [5, 0, 0, -5] }} transition={syncTransition(delay, 1.5)}>
                    <FaShieldAlt /> Blocked ✓
                </motion.div>
            ))}

            {/* --- CENTER 1: LOAD BALANCER --- */}
            <div className="absolute top-[50%] left-[36%] -translate-x-1/2 -translate-y-1/2 w-[14%] bg-white/95 backdrop-blur-md border border-slate-100 shadow-md rounded-xl p-2 sm:p-3 flex flex-col items-center gap-1.5 z-20">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center">
                    <FaCloud className="text-[10px] sm:text-xs" />
                </div>
                <span className="text-[7px] sm:text-[9px] font-bold text-slate-800 text-center leading-tight">Load<br/>Balancer</span>
                <div className="w-full h-1 bg-slate-100 rounded-full mt-1 overflow-hidden">
                    <motion.div className="h-full bg-blue-500" animate={{ x: ['-100%', '100%'] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />
                </div>
            </div>

            {/* --- SPIKE NOTIFICATION --- */}
            <motion.div className="absolute top-[18%] left-[50%] -translate-x-1/2 bg-white/95 backdrop-blur-xl border border-red-100 shadow-[0_15px_30px_-5px_rgba(239,68,68,0.2)] rounded-xl p-2 sm:p-2.5 flex flex-col items-center gap-1 sm:gap-1.5 z-40 w-max"
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10], scale: [0.9, 1, 1, 0.9] }}
                transition={syncTransition(4.5, 3.5)}>
                <div className="flex items-center gap-1.5">
                    <FaExclamationTriangle className="text-red-500 text-[9px] sm:text-[11px]" />
                    <span className="text-[7px] sm:text-[9px] font-bold text-red-600 uppercase tracking-wider">Traffic Spike Detected</span>
                </div>
                <span className="text-[6px] sm:text-[8px] font-semibold text-slate-600 text-center">New cloud instances launched ✓</span>
            </motion.div>

            {/* --- CENTER 2: CLOUD SERVERS --- */}
            {[
                { id: 1, top: '28%', initStatus: 'Active', initColor: 'green' },
                { id: 2, top: '44%', initStatus: 'Active', initColor: 'green' }
            ].map((server) => (
                <div key={server.id} className={`absolute left-[62%] -translate-x-1/2 -translate-y-1/2 w-[20%] bg-white/95 backdrop-blur-md border border-slate-100 shadow-sm rounded-lg p-1.5 sm:p-2 z-10 flex flex-col gap-1 sm:gap-1.5 border-l-[3px] border-l-${server.initColor}-500`}
                    style={{ top: server.top }}>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1">
                            <FaServer className="text-[7px] sm:text-[9px] text-slate-400" />
                            <span className="text-[7px] sm:text-[9px] font-bold text-slate-700">Server 0{server.id}</span>
                        </div>
                        <span className="text-[6px] sm:text-[7px] font-bold text-green-500">Active</span>
                    </div>
                    <div className="h-1 bg-slate-100 rounded-full w-full overflow-hidden">
                        <motion.div className="h-full bg-blue-500 rounded-full" animate={{ width: ['40%', '45%', '85%', '95%', '50%', '55%', '40%', '40%'] }} transition={{ duration: CYCLE, ease: "easeInOut", repeat: Infinity, times: [0, 0.25, 0.3, 0.45, 0.48, 0.9, 0.95, 1] }} />
                    </div>
                </div>
            ))}

            {/* Dynamic Server 3 */}
            <motion.div className="absolute left-[62%] top-[60%] -translate-x-1/2 -translate-y-1/2 w-[20%] bg-white/95 backdrop-blur-md border border-slate-100 shadow-sm rounded-lg p-1.5 sm:p-2 z-10 flex flex-col gap-1 sm:gap-1.5 border-l-[3px]"
                animate={{ borderLeftColor: ['#f59e0b', '#f59e0b', '#22c55e', '#22c55e', '#f59e0b', '#f59e0b'] }}
                transition={{ duration: CYCLE, repeat: Infinity, times: [0, 0.45, 0.48, 0.9, 0.95, 1] }}>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                        <FaServer className="text-[7px] sm:text-[9px] text-slate-400" />
                        <span className="text-[7px] sm:text-[9px] font-bold text-slate-700">Server 03</span>
                    </div>
                    <div className="relative w-8 text-right">
                        <span className="text-[6px] sm:text-[7px] font-bold text-amber-500">Standby</span>
                        <motion.span className="absolute inset-0 bg-white text-green-500 font-bold text-[6px] sm:text-[7px]" animate={{opacity:[0,0,1,1,0,0]}} transition={{ duration: CYCLE, repeat: Infinity, times: [0, 0.45, 0.48, 0.9, 0.95, 1] }}>Active</motion.span>
                    </div>
                </div>
                <div className="h-1 bg-slate-100 rounded-full w-full overflow-hidden">
                    <motion.div className="h-full bg-blue-500 rounded-full" animate={{ width: ['0%', '0%', '50%', '55%', '0%', '0%'] }} transition={{ duration: CYCLE, ease: "easeInOut", repeat: Infinity, times: [0, 0.45, 0.48, 0.9, 0.95, 1] }} />
                </div>
            </motion.div>

            {/* Dynamic Server 4 */}
            <motion.div className="absolute left-[62%] top-[76%] -translate-x-1/2 -translate-y-1/2 w-[20%] bg-white/95 backdrop-blur-md border border-slate-100 shadow-sm rounded-lg p-1.5 sm:p-2 z-10 flex flex-col gap-1 sm:gap-1.5 border-l-[3px] border-l-green-500"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: [0, 0, 1, 1, 0, 0], y: [-10, -10, 0, 0, -10, -10] }}
                transition={{ duration: CYCLE, repeat: Infinity, times: [0, 0.45, 0.48, 0.9, 0.95, 1] }}>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                        <FaServer className="text-[7px] sm:text-[9px] text-slate-400" />
                        <span className="text-[7px] sm:text-[9px] font-bold text-slate-700">Server 04</span>
                    </div>
                    <span className="text-[6px] sm:text-[7px] font-bold text-green-500">Active</span>
                </div>
                <div className="h-1 bg-slate-100 rounded-full w-full overflow-hidden">
                    <motion.div className="h-full bg-blue-500 rounded-full" animate={{ width: ['0%', '0%', '50%', '60%', '0%', '0%'] }} transition={{ duration: CYCLE, ease: "easeInOut", repeat: Infinity, times: [0, 0.45, 0.48, 0.9, 0.95, 1] }} />
                </div>
            </motion.div>

            {/* --- RIGHT: STORAGE & DATABASE --- */}
            {/* Database */}
            <div className="absolute top-[35%] left-[88%] -translate-x-1/2 -translate-y-1/2 w-[16%] bg-white/95 backdrop-blur-md border border-slate-100 shadow-lg rounded-xl p-2 sm:p-3 flex flex-col items-center gap-1 z-20">
                <div className="w-5 h-5 sm:w-7 sm:h-7 bg-purple-50 text-purple-500 rounded-full flex items-center justify-center mb-0.5">
                    <FaDatabase className="text-[9px] sm:text-[11px]" />
                </div>
                <span className="text-[7px] sm:text-[9px] font-bold text-slate-800">Database</span>
                <div className="relative h-2 sm:h-3 w-full text-center">
                    <motion.span className="absolute inset-0 text-[5px] sm:text-[6px] text-green-500 font-semibold whitespace-nowrap" animate={{opacity:[0,1,1,0]}} transition={syncTransition(2, 2.5)}>Synchronized ✓</motion.span>
                    <motion.span className="absolute inset-0 text-[5px] sm:text-[6px] text-green-500 font-semibold whitespace-nowrap" animate={{opacity:[0,1,1,0]}} transition={syncTransition(8, 2.5)}>Synchronized ✓</motion.span>
                </div>
            </div>

            {/* Storage */}
            <div className="absolute top-[65%] left-[88%] -translate-x-1/2 -translate-y-1/2 w-[16%] bg-white/95 backdrop-blur-md border border-slate-100 shadow-lg rounded-xl p-2 sm:p-3 flex flex-col items-center gap-1 z-20">
                <div className="w-5 h-5 sm:w-7 sm:h-7 bg-indigo-50 text-indigo-500 rounded-full flex items-center justify-center mb-0.5">
                    <FaHdd className="text-[9px] sm:text-[11px]" />
                </div>
                <span className="text-[7px] sm:text-[9px] font-bold text-slate-800">Storage</span>
                <div className="relative h-2 sm:h-3 w-full text-center">
                    <motion.span className="absolute inset-0 text-[5px] sm:text-[6px] text-green-500 font-semibold whitespace-nowrap" animate={{opacity:[0,1,1,0]}} transition={syncTransition(3.5, 2)}>Replicated ✓</motion.span>
                    <motion.span className="absolute inset-0 text-[5px] sm:text-[6px] text-green-500 font-semibold whitespace-nowrap" animate={{opacity:[0,1,1,0]}} transition={syncTransition(9.5, 2)}>Replicated ✓</motion.span>
                </div>
            </div>

            {/* --- BOTTOM: CLOUD BRANDS ROW --- */}
            <div className="absolute bottom-[4%] sm:bottom-[6%] left-[50%] -translate-x-1/2 flex items-center justify-center gap-4 sm:gap-8 opacity-20 hover:opacity-50 transition-opacity">
                <FaAws className="text-[12px] sm:text-[16px] text-slate-800" />
                <FaMicrosoft className="text-[12px] sm:text-[16px] text-slate-800" />
                <SiGooglecloud className="text-[12px] sm:text-[16px] text-slate-800" />
                <FaDatabase className="text-[12px] sm:text-[16px] text-slate-800" />
                <FaDigitalOcean className="text-[12px] sm:text-[16px] text-slate-800" />
            </div>

        </div>
    );
}
