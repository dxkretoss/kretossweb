import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const technologiesData = {
  "App Development": {
    description: "We build native and cross-platform mobile applications that provide intuitive user experiences. Our mobile solutions are designed for both iOS and Android platforms to maximize your reach.",
    items: [
      { name: "iOS", icon: "/skills/ios.svg" },
      { name: "Android", icon: "/skills/android.svg" },
      { name: "Swift", icon: "/skills/swift.svg" },
      { name: "Kotlin", icon: "/skills/kotlin.svg" },
      { name: "Flutter", icon: "/skills/flutter.svg" },
      { name: "Python", icon: "/skills/python.svg" },
    ]
  },

  "Web Development": {
    description: "We create dynamic, high-performing websites and web applications tailored to your business needs. Our web solutions are built using the latest technologies to ensure security, scalability, and an excellent user experience.",
    items: [
      { name: "NodeJS", icon: "/skills/nodejs.svg" },
      { name: "PHP", icon: "/skills/php.svg" },
      { name: "Codeigniter", icon: "/skills/codeIgniter.svg" },
      { name: "Laravel", icon: "/skills/laravel.svg" },
      { name: "Java Spring Boot", icon: "/skills/spring.svg" },
      { name: "Python", icon: "/skills/python1.svg" },
    ]
  },

  "Frontend": {
    description: "We craft engaging and highly responsive user interfaces using modern frontend frameworks. Our focus is on delivering seamless user experiences, fast load times, and cross-platform compatibility.",
    items: [
      { name: "Angular", icon: "/skills/angular.svg" },
      { name: "React JS", icon: "/skills/React.svg" },
      { name: "Knockout JS", icon: "/skills/knock.svg" },
      { name: "Express JS", icon: "/skills/express.svg" },
      { name: "Vue.js", icon: "/skills/Vue.js.svg" },
      { name: "Svelte", icon: "/skills/Svelte.svg" },
    ]
  },
  "Backend": {
    description: "Our backend development services ensure robust, secure, and scalable server-side applications. We build robust architectures that can handle high traffic and complex data processing.",
    items: [
      { name: "NodeJS", icon: "/skills/nodejs.svg" },
      { name: "Python", icon: "/skills/python1.svg" },
      { name: "Java", icon: "/skills/java.svg" },
      { name: "Express JS", icon: "/skills/express.svg" },
      { name: "Spring", icon: "/skills/spring.svg" },
      { name: "Laravel", icon: "/skills/laravel.svg" },
    ]
  },

  "Microsoft": {
    description: "We leverage the power of the Microsoft ecosystem to build enterprise-grade applications. Our expertise spans across .NET frameworks, Azure cloud services, and Microsoft business solutions.",
    items: [
      { name: "ASP.NET", icon: "/skills/dontnet.svg" },
      { name: "C#", icon: "/skills/c.svg" },
      { name: "ASP.NET Core", icon: "/skills/NET_Core.svg" },
      { name: "GitHub", icon: "/skills/git.svg" },
      { name: "SQL", icon: "/skills/Sql_data.svg" },
      { name: "Power Apps", icon: "/skills/Powerapps.svg" },
    ]
  },
  "Open Source": {
    description: "We specialize in popular open-source content management systems and ecommerce platforms. Our solutions give you the flexibility to manage your content and scale your online business.",
    items: [
      { name: "WordPress", icon: "/skills/wordpress.svg" },
      { name: "Magento", icon: "/skills/magento.svg" },
      { name: "WooCommerce", icon: "/skills/woo.svg" },
      { name: "Shopify", icon: "/skills/shopify.svg" },
      { name: "Drupal", icon: "/skills/drupal.svg" },
      { name: "Bagisto", icon: "/skills/bagisto.svg" },
    ]
  },


  Servers: {
    description: "We provide reliable and scalable server infrastructure solutions to keep your applications running smoothly. Whether it's cloud-based or dedicated servers, our configurations ensure optimal performance, high availability, and secure data hosting.",
    items: [
      { name: "Amazon Web Services", icon: "/skills/aws.svg" },
      { name: "Google Cloud", icon: "/skills/google.svg" },
      { name: "Microsoft Azure", icon: "/skills/micro-azure.svg" },
      { name: "IBM Cloud", icon: "/skills/ibm.svg" },
      { name: "Oracle Cloud", icon: "/skills/oracle-cloud.svg" },
      { name: "DigitalOcean", icon: "/skills/digitalocean.svg" },
    ]
  },
  "Devops": {
    description: "Both cloud and DevOps engineers are essential and complementary components of contemporary infrastructure management and software development. To enhance your cloud experience and help you create more quickly, we provide dependable cloud and DevOps services on cloud platforms. DevOps enables almost instantaneous cloud product and service deployment, going beyond continuous integration and delivery (CI/CD).",
    items: [
      { name: "Kubernetes", icon: "/skills/kuber.svg" },
      { name: "Jenkins", icon: "/skills/jenkins.svg" },
      { name: "Chef", icon: "/skills/chef.svg" },
      { name: "Maven", icon: "/skills/maven.svg" },
      { name: "Docker", icon: "/skills/docer.svg" },
      { name: "OpenShift", icon: "/skills/openswift.svg" },
    ]
  },




  "Database": {
    description: "We design and manage secure, high-performance databases tailored to your data architecture. From relational to NoSQL databases, we ensure your data is always accessible and safe.",
    items: [
      { name: "MySQL", icon: "/skills/Sql_data.svg" },
      { name: "Oracle", icon: "/skills/oracle.svg" },
      { name: "MongoDB", icon: "/skills/mongo.svg" },
      { name: "MariaDB", icon: "/skills/maria.svg" },
      { name: "SQLite", icon: "/skills/sqlite.svg" },
      { name: "Redis", icon: "/skills/redis.svg" },
    ]
  }
};

const tabs = Object.keys(technologiesData);

export default function Technologies() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="technology bg-[#fafcff] relative overflow-hidden">
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <filter id="duotone-0c1736" colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values="
            0.2126 0.7152 0.0722 0 0
            0.2126 0.7152 0.0722 0 0
            0.2126 0.7152 0.0722 0 0
            0 0 0 1 0" result="gray" />
          <feComponentTransfer>
            <feFuncR type="table" tableValues="0.047 0.047 0.047 0.047 0.047 0.047 0.047 0.047 0.047 1.0" />
            <feFuncG type="table" tableValues="0.090 0.090 0.090 0.090 0.090 0.090 0.090 0.090 0.090 1.0" />
            <feFuncB type="table" tableValues="0.212 0.212 0.212 0.212 0.212 0.212 0.212 0.212 0.212 1.0" />
          </feComponentTransfer>
        </filter>
        <filter id="duotone-php" colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values="
            0.2126 0.7152 0.0722 0 0
            0.2126 0.7152 0.0722 0 0
            0.2126 0.7152 0.0722 0 0
            0 0 0 1 0" result="gray" />
          <feComponentTransfer>
            <feFuncR type="table" tableValues="1.0 1.0 0.047 0.047 0.047 0.047 1.0" />
            <feFuncG type="table" tableValues="1.0 1.0 0.090 0.090 0.090 0.090 1.0" />
            <feFuncB type="table" tableValues="1.0 1.0 0.212 0.212 0.212 0.212 1.0" />
          </feComponentTransfer>
        </filter>
      </svg>
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
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center w-full"
            >
              {/* Left Side: Description */}
              <div className="w-full lg:w-5/12 !space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold !text-gray-900">
                  {activeTab}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {technologiesData[activeTab].description}
                </p>
              </div>

              {/* Right Side: Grid */}
              <div className="w-full lg:w-7/12">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6">
                  {technologiesData[activeTab].items.map((item, idx) => (
                    <div
                      key={item.name}
                      className="group relative bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center hover:border-blue-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 aspect-square sm:aspect-[4/3] cursor-default overflow-hidden"
                    >
                      {/* Hover subtle background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="h-14 sm:h-16 flex items-center justify-center mb-4 relative z-10 transform group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="max-h-full max-w-full object-contain transition-all duration-300"
                          style={{ filter: item.icon.includes('php') ? "url(#duotone-php)" : "url(#duotone-0c1736)" }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://placehold.co/100x100/e2e8f0/475569.png?text=${item.name.charAt(0)}`;
                          }}
                        />
                      </div>
                      <span className="text-gray-700 font-semibold text-sm text-center relative z-10 group-hover:text-[#005a87] transition-colors duration-300">
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
