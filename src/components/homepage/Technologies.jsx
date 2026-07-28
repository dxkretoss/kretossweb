import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Badge from '../ui/Badge';
import AnimatedButton from '../ui/AnimatedButton';

import {
  FaApple, FaAndroid, FaSwift, FaPython, FaNodeJs, FaNode, FaPhp, FaCode, FaLaravel,
  FaJava, FaAngular, FaReact, FaJs, FaVuejs, FaMicrosoft, FaGithub, FaDatabase,
  FaWordpress, FaMagento, FaShopify, FaDrupal, FaShoppingCart, FaAws,
  FaDigitalOcean, FaServer, FaDocker
} from 'react-icons/fa';
import {
  SiKotlin, SiFlutter, SiSvelte, SiWoocommerce, SiGooglecloud,
  SiKubernetes, SiJenkins, SiMongodb, SiSqlite, SiMysql, SiMariadb, SiRedis, SiDotnet
} from 'react-icons/si';
import { GrOracle } from 'react-icons/gr';
import { PiFileCSharp } from 'react-icons/pi';
import { VscAzureDevops } from 'react-icons/vsc';
import { DiOpenshift } from 'react-icons/di';

const technologiesData = {
  "App Development": {
    description: "We build native and cross-platform mobile applications that provide intuitive user experiences. Our mobile solutions are designed for both iOS and Android platforms to maximize your reach.",
    items: [
      { name: "iOS", Icon: FaApple },
      { name: "Android", Icon: FaAndroid },
      { name: "Swift", Icon: FaSwift },
      { name: "Kotlin", Icon: SiKotlin },
      { name: "Flutter", Icon: SiFlutter },
      { name: "Python", Icon: FaPython },
    ]
  },
  "Web Development": {
    description: "We create dynamic, high-performing websites and web applications tailored to your business needs. Our web solutions are built using the latest technologies to ensure security, scalability, and an excellent user experience.",
    items: [
      { name: "NodeJS", Icon: FaNode },
      { name: "PHP", Icon: FaPhp },
      { name: "Codeigniter", Icon: FaCode },
      { name: "Laravel", Icon: FaLaravel },
      { name: "Java Spring Boot", Icon: FaJava },
      { name: "Python", Icon: FaPython },
    ]
  },
  "Frontend": {
    description: "We craft engaging and highly responsive user interfaces using modern frontend frameworks. Our focus is on delivering seamless user experiences, fast load times, and cross-platform compatibility.",
    items: [
      { name: "Angular", Icon: FaAngular },
      { name: "React JS", Icon: FaReact },
      { name: "Knockout JS", Icon: FaJs },
      { name: "Express JS", Icon: FaNodeJs },
      { name: "Vue.js", Icon: FaVuejs },
      { name: "Svelte", Icon: SiSvelte },
    ]
  },
  "Backend": {
    description: "Our backend development services ensure robust, secure, and scalable server-side applications. We build robust architectures that can handle high traffic and complex data processing.",
    items: [
      { name: "NodeJS", Icon: FaNode },
      { name: "Python", Icon: FaPython },
      { name: "Java", Icon: FaJava },
      { name: "Express JS", Icon: FaNodeJs },
      { name: "Spring", Icon: FaJava },
      { name: "Laravel", Icon: FaLaravel },
    ]
  },
  "Microsoft": {
    description: "We leverage the power of the Microsoft ecosystem to build enterprise-grade applications. Our expertise spans across .NET frameworks, Azure cloud services, and Microsoft business solutions.",
    items: [
      { name: "ASP.NET", Icon: SiDotnet },
      { name: "C#", Icon: PiFileCSharp },
      { name: "ASP.NET Core", Icon: SiDotnet },
      { name: "GitHub", Icon: FaGithub },
      { name: "SQL", Icon: FaDatabase },
      { name: "Power Apps", Icon: FaMicrosoft },
    ]
  },
  "Open Source": {
    description: "We specialize in popular open-source content management systems and ecommerce platforms. Our solutions give you the flexibility to manage your content and scale your online business.",
    items: [
      { name: "WordPress", Icon: FaWordpress },
      { name: "Magento", Icon: FaMagento },
      { name: "WooCommerce", Icon: SiWoocommerce },
      { name: "Shopify", Icon: FaShopify },
      { name: "Drupal", Icon: FaDrupal },
      { name: "Bagisto", Icon: FaShoppingCart },
    ]
  },
  Servers: {
    description: "We provide reliable and scalable server infrastructure solutions to keep your applications running smoothly. Whether it's cloud-based or dedicated servers, our configurations ensure optimal performance, high availability, and secure data hosting.",
    items: [
      { name: "Amazon Web Services", Icon: FaAws },
      { name: "Google Cloud", Icon: SiGooglecloud },
      { name: "Microsoft Azure", Icon: VscAzureDevops },
      { name: "IBM Cloud", Icon: FaServer },
      { name: "Oracle Cloud", Icon: FaDatabase },
      { name: "DigitalOcean", Icon: FaDigitalOcean },
    ]
  },
  "Devops": {
    description: "Both cloud and DevOps engineers are essential and complementary components of contemporary infrastructure management and software development. To enhance your cloud experience and help you create more quickly, we provide dependable cloud and DevOps services on cloud platforms. DevOps enables almost instantaneous cloud product and service deployment, going beyond continuous integration and delivery (CI/CD).",
    items: [
      { name: "Kubernetes", Icon: SiKubernetes },
      { name: "Jenkins", Icon: SiJenkins },
      { name: "Chef", Icon: FaServer },
      { name: "Maven", Icon: FaCode },
      { name: "Docker", Icon: FaDocker },
      { name: "OpenShift", Icon: DiOpenshift },
    ]
  },
  "Database": {
    description: "We design and manage secure, high-performance databases tailored to your data architecture. From relational to NoSQL databases, we ensure your data is always accessible and safe.",
    items: [
      { name: "MySQL", Icon: SiMysql },
      { name: "Oracle", Icon: GrOracle },
      { name: "MongoDB", Icon: SiMongodb },
      { name: "MariaDB", Icon: SiMariadb },
      { name: "SQLite", Icon: SiSqlite },
      { name: "Redis", Icon: SiRedis },
    ]
  }
};

const tabs = Object.keys(technologiesData);

export default function Technologies() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsExpanded(false);
  }, [activeTab]);



  return (
    <section className="technology bg-[#fafcff] relative overflow-hidden">
      {/* SVG Definitions for Gradient Icons */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="tech-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop stopColor="rgb(68, 199, 246)" offset="0%" />
            <stop stopColor="rgb(0, 55, 240)" offset="100%" />
          </linearGradient>
        </defs>
      </svg>

      {/* Subtle Background Glows for modern look */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-[100px]"></div>
      </div>

      <div className="container-full-width w-layout-blockcontainer container w-container relative z-10">

        <div className='flex justify-center mb-5'>
          <Badge variant='blue'>Technologies</Badge>
        </div>

        {/* Header */}
        <div className="text-center mb-5 md:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="technology-section-title text-4xl md:text-5xl font-semibold text-gray-900 mb-3 md:!mb-6 tracking-tight"
          >
            Technologies We Work With
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="hidden md:block text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            We work on a wide range of tools and technologies to cater to client business requirements for existing projects or new applications.
          </motion.p>
        </div>

        {/* Modern Animated Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full justify-start lg:justify-center items-center gap-2 mb-8 md:mb-16 p-2 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 max-w-full lg:max-w-fit mx-auto"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={(e) => { e.preventDefault(); setActiveTab(tab); }}
              className={`relative px-6 py-3 rounded-xl text-sm md:text-base font-semibold transition-colors duration-300 outline-none whitespace-nowrap shrink-0 ${activeTab === tab ? "!text-white" : "!text-gray-500 hover:text-gray-900"
                }`}
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 rounded-xl shadow-md"
                  style={{ backgroundImage: 'linear-gradient(#44c7f6, #0037f0)' }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </motion.div>

        {/* Content Area */}
        <div className="">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center w-full"
            >
              {/* Left Side: Description */}
              <div className="w-full lg:w-5/12 !space-y-3 md:!space-y-6">
                <h3 className="text-[24px] lg:text-4xl font-semibold !text-gray-900">
                  {activeTab}
                </h3>
                <div className="relative mb-2 md:mb-0">
                  <p className={`text-gray-600 leading-relaxed text-sm md:text-lg ${!isExpanded ? 'line-clamp-2 md:line-clamp-none' : ''}`}>
                    {technologiesData[activeTab].description}
                  </p>
                  <button 
                      type="button"
                      onClick={(e) => { e.preventDefault(); setIsExpanded(!isExpanded); }}
                      className="md:hidden text-[#44c7f6] text-sm font-semibold hover:text-[#0037f0] transition-colors mt-1"
                  >
                      {isExpanded ? 'See less' : 'See more...'}
                  </button>
                </div>

                <div className="pt-2">
                  <AnimatedButton text="LET'S WORK TOGETHER" href="/contact" />
                </div>
              </div>

              {/* Right Side: Grid */}
              <div className="w-full lg:w-7/12">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-4">
                  {technologiesData[activeTab].items.map((item, idx) => (
                    <div
                      key={item.name}
                      className="group relative bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center hover:border-blue-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 h-28 sm:h-32 cursor-default overflow-hidden"
                    >
                      {/* Hover subtle background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="h-10 sm:h-12 flex items-center justify-center mb-2 sm:mb-3 relative z-10 transform group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                        {item.Icon && <item.Icon className="w-9 h-9 sm:w-10 sm:h-10 text-[#475569] group-hover:fill-[url(#tech-grad)] group-hover:text-transparent transition-all duration-300" />}
                      </div>
                      <span className="text-gray-700 font-semibold text-xs sm:text-sm text-center relative z-10 group-hover:text-[#005a87] transition-colors duration-300">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
