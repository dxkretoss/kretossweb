import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const technologiesData = {
  "Cloud & Devops": {
    description: "Both cloud and DevOps engineers are essential and complementary components of contemporary infrastructure management and software development. To enhance your cloud experience and help you create more quickly, we provide dependable cloud and DevOps services on cloud platforms. DevOps enables almost instantaneous cloud product and service deployment, going beyond continuous integration and delivery (CI/CD).",
    items: [
      { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
      { name: "Google Cloud", icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
      { name: "Docker", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" },
      { name: "Kubernetes", icon: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" },
      { name: "Jenkins", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg" },
      { name: "Azure", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" }
    ]
  },
  "Frontend": {
    description: "We craft engaging and highly responsive user interfaces using modern frontend frameworks. Our focus is on delivering seamless user experiences, fast load times, and cross-platform compatibility.",
    items: [
      { name: "Angular", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" },
      { name: "React JS", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
      { name: "Vue.js", icon: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" },
      { name: "Svelte", icon: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" },
      { name: "Knockout JS", icon: "https://upload.wikimedia.org/wikipedia/commons/6/69/Knockout_logo.png" },
      { name: "Express JS", icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" }
    ]
  },
  "Backend": {
    description: "Our backend development services ensure robust, secure, and scalable server-side applications. We build robust architectures that can handle high traffic and complex data processing.",
    items: [
      { name: "NodeJS", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
      { name: "Python", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
      { name: "Java", icon: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
      { name: "Spring", icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg" },
      { name: "Laravel", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" },
      { name: "PHP", icon: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" }
    ]
  },
  "Mobile": {
    description: "We build native and cross-platform mobile applications that provide intuitive user experiences. Our mobile solutions are designed for both iOS and Android platforms to maximize your reach.",
    items: [
      { name: "iOS", icon: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
      { name: "Android", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg" },
      { name: "Swift", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg" },
      { name: "Kotlin", icon: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png" },
      { name: "Flutter", icon: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" },
      { name: "React Native", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" }
    ]
  },
  "Microsoft": {
    description: "We leverage the power of the Microsoft ecosystem to build enterprise-grade applications. Our expertise spans across .NET frameworks, Azure cloud services, and Microsoft business solutions.",
    items: [
      { name: "ASP.NET", icon: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Microsoft_.NET_logo.png" },
      { name: "C#", icon: "https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg" },
      { name: "GitHub", icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
      { name: "SQL Server", icon: "https://upload.wikimedia.org/wikipedia/en/b/ba/Microsoft_SQL_Server_Logo.svg" },
      { name: "Power Apps", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg" }
    ]
  },
  "Open Source": {
    description: "We specialize in popular open-source content management systems and ecommerce platforms. Our solutions give you the flexibility to manage your content and scale your online business.",
    items: [
      { name: "WordPress", icon: "https://upload.wikimedia.org/wikipedia/commons/0/09/Wordpress-Logo.svg" },
      { name: "Magento", icon: "https://upload.wikimedia.org/wikipedia/en/c/c8/Magento_Logo.svg" },
      { name: "WooCommerce", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9db/WooCommerce_logo.svg" },
      { name: "Shopify", icon: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Shopify_logo_2018.svg" },
      { name: "Drupal", icon: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Drupal-wordmark.svg" },
      { name: "BigCommerce", icon: "https://upload.wikimedia.org/wikipedia/commons/0/07/BigCommerce_logo.svg" }
    ]
  },
  "Database": {
    description: "We design and manage secure, high-performance databases tailored to your data architecture. From relational to NoSQL databases, we ensure your data is always accessible and safe.",
    items: [
      { name: "MySQL", icon: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" },
      { name: "Oracle", icon: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
      { name: "MongoDB", icon: "https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg" },
      { name: "MariaDB", icon: "https://upload.wikimedia.org/wikipedia/commons/6/68/MariaDB_Logo.png" },
      { name: "SQLite", icon: "https://upload.wikimedia.org/wikipedia/commons/9/97/Sqlite-square-icon.svg" },
      { name: "Redis", icon: "https://upload.wikimedia.org/wikipedia/en/6/6b/Redis_Logo.svg" }
    ]
  }
};

const tabs = Object.keys(technologiesData);

export default function Technologies() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="technology bg-[#fafcff] relative overflow-hidden">
      {/* Subtle Background Glows for modern look */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-[100px]"></div>
      </div>

      <div className="w-layout-blockcontainer container w-container relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="technology-section-title text-4xl md:text-5xl font-bold text-gray-900 !mb-6 tracking-tight"
          >
            Technologies We Work With
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
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
          className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full justify-start lg:justify-center items-center gap-2 mb-16 p-2 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 max-w-full lg:max-w-fit mx-auto"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
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
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center"
            >
              {/* Left Side: Description */}
              <div className="w-full lg:w-5/12 !space-y-6">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="text-3xl lg:text-4xl font-bold !text-gray-900"
                >
                  {activeTab}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="text-gray-600 leading-relaxed text-lg"
                >
                  {technologiesData[activeTab].description}
                </motion.p>
              </div>

              {/* Right Side: Grid */}
              <div className="w-full lg:w-7/12">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6">
                  {technologiesData[activeTab].items.map((item, idx) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.1 + idx * 0.05,
                        type: "spring",
                        stiffness: 200
                      }}
                      className="group relative bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center hover:border-blue-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-500 aspect-square sm:aspect-[4/3] cursor-default overflow-hidden"
                    >
                      {/* Hover subtle background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="h-14 sm:h-16 flex items-center justify-center mb-4 relative z-10 transform group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-500">
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="max-h-full max-w-full object-contain filter group-hover:drop-shadow-sm transition-all duration-500"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://placehold.co/100x100/e2e8f0/475569.png?text=${item.name.charAt(0)}`;
                          }}
                        />
                      </div>
                      <span className="text-gray-700 font-semibold text-sm text-center relative z-10 group-hover:text-[#005a87] transition-colors duration-500">
                        {item.name}
                      </span>
                    </motion.div>
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
