import React from 'react';
import { motion } from 'framer-motion';
import {
    Smartphone, Globe, Cloud, Users,
    Building2, Bot, Store, Calendar,
    Server, ShoppingCart, LayoutDashboard, Plug
} from 'lucide-react';
import Badge from '../ui/Badge';

const items = [
    {
        icon: <Smartphone className="w-5 h-5 text-orange-400" />,
        title: "Mobile Apps",
        description: "iOS, Android, cross-platform"
    },
    {
        icon: <Globe className="w-5 h-5 text-blue-400" />,
        title: "Web Applications",
        description: "Custom portals & platforms"
    },
    {
        icon: <Cloud className="w-5 h-5 text-purple-400" />,
        title: "SaaS Platforms",
        description: "Multi-tenant, subscription-ready"
    },
    {
        icon: <Users className="w-5 h-5 text-indigo-400" />,
        title: "CRM Systems",
        description: "Sales & customer management"
    },
    {
        icon: <Building2 className="w-5 h-5 text-pink-400" />,
        title: "ERP Software",
        description: "Operations & resource planning"
    },
    {
        icon: <Bot className="w-5 h-5 text-rose-400" />,
        title: "AI Solutions",
        description: "LLM apps, automation, ML"
    },
    {
        icon: <Store className="w-5 h-5 text-emerald-400" />,
        title: "Marketplace Platforms",
        description: "Multi-vendor commerce"
    },
    {
        icon: <Calendar className="w-5 h-5 text-sky-400" />,
        title: "Booking Systems",
        description: "Scheduling & reservations"
    },
    {
        icon: <Server className="w-5 h-5 text-blue-300" />,
        title: "Enterprise Software",
        description: "Secure, compliant, at scale"
    },
    {
        icon: <ShoppingCart className="w-5 h-5 text-violet-400" />,
        title: "E-commerce Stores",
        description: "Shopify, Woo, headless"
    },
    {
        icon: <LayoutDashboard className="w-5 h-5 text-teal-400" />,
        title: "Admin Dashboards",
        description: "Analytics & internal tools"
    },
    {
        icon: <Plug className="w-5 h-5 text-amber-400" />,
        title: "API Integrations",
        description: "Payments, CRMs, third-party"
    }
];

const WhatWeBuild = () => {
    return (
        <section className="py-10 lg:py-20 bg-[#0a1120]">
            <div className="container mx-auto px-6 w-layout-blockcontainer container-full-width w-container">

                {/* Header */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >


                    <div className="flex items-center justify-center mb-4">
                        <Badge variant='white'>What We Build</Badge>
                    </div>
                    <h2 className="text-[24px] md:text-[36px] font-semibold leading-tight text-white mb-2">
                        Software for Every Business Need
                    </h2>
                    <p className="text-[#8e9bb0] text-base font-medium">
                        From MVPs to enterprise platforms — one team, end to end.
                    </p>
                </motion.div>

                {/* Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 max-w-7xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.05 } }
                    }}
                >
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#121c2f] border border-[#1d2b42] rounded-2xl p-5 flex items-center gap-4 hover:bg-[#162238] hover:border-[#2a3c5a] hover:-translate-y-1 transition-all duration-300 group"
                            variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#1b2a47] flex items-center justify-center shrink-0 group-hover:bg-[#203152] transition-colors">
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="text-[16px] font-bold text-white mb-1 leading-tight group-hover:text-blue-200 transition-colors">
                                    {item.title}
                                </h4>
                                <p className="text-[#7c8b9e] text-[13px] font-medium leading-snug">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default WhatWeBuild;
