
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Bot,
  Sparkles,
  Smartphone,
  TerminalSquare,
  ChevronRight,
  Zap,
  Layers,
  Users,
  RefreshCw,
} from "lucide-react";
import Badge from "../ui/Badge";

export default function AIVibeCodingWorkflow() {
  const [messages, setMessages] = useState([]);

  /* ---------------- CHAT ANIMATION ---------------- */

  useEffect(() => {
    let timeoutIds = [];
    let isMounted = true;

    const runSequence = () => {
      setMessages([]);

      const sequence = [
        { sender: 'user', text: "Build a scalable mobile app with React Native and Node.js." },
        { sender: 'ai', text: "Analyzing requirements and provisioning architecture..." },
        { sender: 'ai', text: "Architecture generated. Integrating Claude & Replit." },
        { sender: 'ai', text: "Deployment pipeline ready. Launching application." }
      ];

      sequence.forEach((msg, index) => {
        const id = setTimeout(() => {
          if (isMounted) setMessages(prev => [...prev, msg]);
        }, (index + 1) * 2000);
        timeoutIds.push(id);
      });

      const resetId = setTimeout(() => {
        if (isMounted) runSequence();
      }, (sequence.length + 1) * 2000 + 4000);
      timeoutIds.push(resetId);
    };

    runSequence();

    return () => {
      isMounted = false;
      timeoutIds.forEach(clearTimeout);
    };
  }, []);

  /* ---------------- FEATURES ---------------- */

  const features = [
    {
      icon: <Bot size={18} className="text-cyan-400" />,
      title: "AI Assisted Development",
    },

    {
      icon: <Zap size={18} className="text-yellow-400" />,
      title: "Rapid MVP Building",
    },

    {
      icon: <Users size={18} className="text-purple-400" />,
      title: "Real-Time Collaboration",
    },

    {
      icon: <Smartphone size={18} className="text-green-400" />,
      title: "Cross Platform Apps",
    },

    {
      icon: <RefreshCw size={18} className="text-pink-400" />,
      title: "Automated Workflows",
    },

    {
      icon: <Layers size={18} className="text-orange-400" />,
      title: "Scalable Architecture",
    },
  ];

  /* ---------------- AI TOOLS ---------------- */

  const tools = [
    {
      title: "Claude AI",
      icon: <Bot size={24} />,
      color: "from-pink-500/20 to-pink-500/5",
      border: "border-pink-500/20",
      iconColor: "text-pink-400",
      description:
        "Advanced AI reasoning for architecture, debugging, planning, and intelligent development workflows.",
      position:
        "top-[2%] left-0 md:left-[2%]",
    },

    {
      title: "Replit",
      icon: <TerminalSquare size={24} />,
      color: "from-orange-500/20 to-orange-500/5",
      border: "border-orange-500/20",
      iconColor: "text-orange-400",
      description:
        "Cloud-powered development environment for rapid prototyping and collaborative coding.",
      position:
        "top-[10%] right-0 md:right-[2%]",
    },

    {
      title: "Lovable.ai",
      icon: <Sparkles size={24} />,
      color: "from-purple-500/20 to-purple-500/5",
      border: "border-purple-500/20",
      iconColor: "text-purple-400",
      description:
        "AI product builder transforming prompts into polished applications and interfaces instantly.",
      position:
        "bottom-[10%] left-0 md:left-[2%]",
    },

    {
      title: "Android Studio",
      icon: <Smartphone size={24} />,
      color: "from-green-500/20 to-green-500/5",
      border: "border-green-500/20",
      iconColor: "text-green-400",
      description:
        "Professional Android development environment for scalable mobile app experiences.",
      position:
        "bottom-[2%] right-0 md:right-[2%]",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#fafcff] py-16">
      {/* ---------------- BACKGROUND ---------------- */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Glow Effects */}

      {/* <div className="absolute left-[-150px] top-[-100px] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[140px]" /> */}

      {/* <div className="absolute bottom-[-150px] right-[-100px] h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[140px]" /> */}

      {/* ---------------- CONTENT ---------------- */}

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-5 lg:gap-24 lg:grid-cols-2">
          {/* ================= LEFT SIDE ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
          >
            {/* Badge */}
            <div className="flex justify-start mb-5">
              <Badge variant="blue">Vibe Coding</Badge>
            </div>


            {/* Heading */}

            <h2 className="technology-section-title flex flex-wrap gap-x-2 gap-y-1 text-3xl sm:text-4xl md:text-5xl font-bold !mb-4 md:!mb-6 tracking-tight text-[#0c1736]">
              AI-Powered
              <span className="block bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Vibe Coding
              </span>
              Workflow
            </h2>

            {/* Description */}

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-600">
              We combine modern AI platforms, rapid prototyping tools,
              and scalable engineering workflows to build production-ready
              digital products significantly faster than traditional teams.
            </p>

            {/* Features */}

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                  }}
                  className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white shadow-sm p-4 backdrop-blur-xl transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md"
                >
                  <div className="rounded-xl bg-[#0c1736]/5 p-2">
                    {item.icon}
                  </div>

                  <span className="text-sm font-medium text-[#0c1736]">
                    {item.title}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}


          </motion.div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="relative flex h-[500px] sm:h-[600px] lg:h-[750px] items-center justify-center mt-12 lg:mt-0">
            {/* Rings */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 80,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[320px] w-[320px] md:h-[520px] md:w-[520px] rounded-full border border-cyan-500/20"
            />

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 120,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[450px] w-[450px] md:h-[700px] md:w-[700px] rounded-full border border-dashed border-purple-500/20"
            />

            {/* Chat UI Dashboard */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-20 w-[90%] sm:w-full max-w-[320px] md:max-w-[380px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
            >
              {/* Header */}

              <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4 bg-slate-50/80">
                <div className="p-2 bg-blue-100/50 border border-blue-200/50 text-blue-600 rounded-xl">
                  <Bot size={20} />
                </div>
                <div>
                  <div className="text-[15px] font-bold text-[#0c1736] tracking-tight">AI Workflow Assistant</div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Always active</p>
                  </div>
                </div>
              </div>

              {/* Chat Area */}

              <div className="h-[280px] md:h-[320px] p-4 md:p-5 flex flex-col gap-4 overflow-hidden relative bg-slate-50/30">
                <AnimatePresence mode="popLayout">
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className={`flex w-full gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {msg.sender === 'ai' && (
                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100/50 border border-blue-200 flex items-center justify-center text-blue-600 mt-1">
                          <Bot size={14} />
                        </div>
                      )}
                      <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-[13px] leading-relaxed shadow-sm ${msg.sender === 'user'
                        ? 'bg-[#0c1736] text-white rounded-br-sm'
                        : 'bg-white border border-slate-100 text-slate-700 rounded-bl-sm'
                        }`}>
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Typing Indicator */}
                {messages.length > 0 && messages.length < 4 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex w-full justify-start mt-1 gap-2"
                  >
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100/50 border border-blue-200 flex items-center justify-center text-blue-600">
                      <Bot size={14} />
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Fake Input Box */}
              <div className="px-4 py-3 bg-white border-t border-slate-100">
                <div className="flex items-center justify-between w-full bg-slate-50 border border-slate-200 rounded-full pl-4 pr-1.5 py-1.5">
                  <span className="text-xs text-slate-400 font-medium">Message AI Assistant...</span>
                  <div className="p-1.5 bg-[#0c1736] rounded-full text-white shadow-md">
                    <ChevronRight size={14} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating AI Cards */}

            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: index * 0.15,
                }}
                viewport={{
                  once: true,
                }}
                animate={{
                  y: [0, -12, 0],
                }}
                className={`absolute z-30 w-[150px] sm:w-[170px] md:w-[220px] rounded-2xl md:rounded-3xl border ${tool.border} bg-white/90 bg-gradient-to-br ${tool.color} p-3 md:p-4 shadow-xl backdrop-blur-2xl ${tool.position}`}
                style={{
                  animationDuration: `${5 + index}s`,
                }}
              >
                {/* Icon */}

                <div
                  className={`mb-2 md:mb-3 flex h-8 w-8 md:h-12 md:w-12 items-center justify-center rounded-lg md:rounded-xl bg-white shadow-sm border border-slate-100 ${tool.iconColor}`}
                >
                  {React.cloneElement(tool.icon, { className: "w-4 h-4 md:w-6 md:h-6" })}
                </div>

                {/* Content */}

                <div className="text-[14px] md:text-[17px] font-bold text-[#0c1736] tracking-tight leading-tight">
                  {tool.title}
                </div>

                <p className="mt-1 md:mt-2 text-[9.5px] sm:text-[11px] md:text-[13px] leading-[1.3] md:leading-relaxed text-slate-600">
                  {tool.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

