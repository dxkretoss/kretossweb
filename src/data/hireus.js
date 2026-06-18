export const hireUsData = [
    {
        id: 1,
        slug: 'hire-reactjs-developer',
        category: 'Frontend',
        title: 'Hire React.js Developer',
        shortDescription: 'Expert React.js developers for modern, fast, and scalable web applications.',
        about: 'Our React.js developers are experts in building complex, interactive user interfaces and single-page applications. With deep knowledge of React hooks, state management (Redux, Zustand), and performance optimization, we deliver seamless web experiences that scale.',
        skills: ['React.js', 'Redux', 'Next.js', 'Tailwind CSS', 'TypeScript', 'REST/GraphQL APIs'],
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        color: '#61DAFB',
        plans: {
            basic: { price: '$100', name: 'Basic Task', description: 'Perfect for small bug fixes, minor UI updates.', deliveryTime: '2 Days Delivery', features: ['Up to 2 UI Components', 'Bug Fixes', 'Responsive Design', 'Source Code'] },
            standard: { price: '$350', name: 'Standard Application', description: 'Ideal for a small web application MVP, API integrations.', deliveryTime: '7 Days Delivery', features: ['Up to 5 Pages', 'API Integration', 'State Management', 'Responsive Design', 'Source Code'] },
            premium: { price: '$550', name: 'Premium Web Platform', description: 'Full-scale web application with authentication, complex state management, database integration.', deliveryTime: '14 Days Delivery', features: ['Unlimited Pages', 'Authentication setup', 'Complex State (Redux)', 'Backend Integration', 'Source Code'] }
        },
        hourly: { rate: '$25/hr', description: 'Need continuous development? Hire a dedicated React.js developer on a flexible hourly basis.', features: ['Dedicated Resource', 'Direct Communication via Slack/Teams', 'Daily Progress Updates', 'Flexible Hours & Scaling'] }
    },
    {
        id: 2,
        slug: 'hire-angular-developer',
        category: 'Frontend',
        title: 'Hire Angular Developer',
        shortDescription: 'Enterprise-grade frontend development with Angular framework.',
        about: 'Our Angular developers build scalable, enterprise-grade web applications. From complex SPAs to dynamic dashboards, we ensure high performance and maintainable code architecture.',
        skills: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Material UI'],
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
        color: '#DD0031',
        plans: {
            basic: { price: '$120', name: 'Component Fix', description: 'Resolve UI bugs and optimize existing Angular components.', deliveryTime: '2 Days Delivery', features: ['Bug Fixes', 'Component Polish', 'Source Code'] },
            standard: { price: '$400', name: 'Standard SPA', description: 'Complete Single Page Application development.', deliveryTime: '10 Days Delivery', features: ['Up to 5 Pages', 'API Integration', 'RxJS State', 'Source Code'] },
            premium: { price: '$650', name: 'Enterprise App', description: 'Large scale enterprise application with complex NgRx state.', deliveryTime: '20 Days Delivery', features: ['Unlimited Pages', 'NgRx Setup', 'Full Architecture', 'Source Code'] }
        },
        hourly: { rate: '$30/hr', description: 'Hire a dedicated Angular developer for ongoing enterprise projects.', features: ['Dedicated Expert', 'Direct Communication', 'Flexible Hours'] }
    },
    {
        id: 3,
        slug: 'hire-nodejs-developer',
        category: 'Backend',
        title: 'Hire Node.js Developer',
        shortDescription: 'Scalable and highly-performant server-side applications and RESTful APIs.',
        about: 'Our Node.js developers are architects of high-performance, scalable backend systems. We build lightning-fast RESTful and GraphQL APIs, real-time applications using WebSockets.',
        skills: ['Node.js', 'Express', 'NestJS', 'MongoDB', 'PostgreSQL', 'Microservices', 'GraphQL'],
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        color: '#339933',
        plans: {
            basic: { price: '$120', name: 'Basic API Fixes', description: 'Resolve backend bugs, optimize existing database queries.', deliveryTime: '2 Days Delivery', features: ['Up to 2 Endpoints', 'Query Optimization', 'Source Code'] },
            standard: { price: '$400', name: 'Standard Backend API', description: 'Complete backend development for a mid-sized app.', deliveryTime: '10 Days Delivery', features: ['Database Design', 'Authentication (JWT)', 'Full CRUD API', 'Source Code'] },
            premium: { price: '$650', name: 'Premium Architecture', description: 'Advanced backend architecture with microservices.', deliveryTime: '18 Days Delivery', features: ['Complex Architecture', 'Real-time features', 'Third-party Integrations', 'Source Code'] }
        },
        hourly: { rate: '$30/hr', description: 'Scale your backend team quickly by hiring a dedicated Node.js backend developer hourly.', features: ['Dedicated Backend Architect', 'Direct Communication', 'Code Reviews & Security Audits', 'Flexible Scaling'] }
    },
    {
        id: 4,
        slug: 'hire-laravel-developer',
        category: 'Backend',
        title: 'Hire Laravel Developer',
        shortDescription: 'Elegant, secure, and robust backend solutions using the Laravel PHP framework.',
        about: 'Our Laravel developers craft elegant and scalable backend solutions. From robust APIs to complex monolithic architectures, we leverage Laravel ecosystem to its fullest.',
        skills: ['Laravel', 'PHP', 'MySQL', 'Livewire', 'Vue.js', 'Redis'],
        icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg',
        color: '#FF2D20',
        plans: {
            basic: { price: '$100', name: 'Laravel Fix', description: 'Fix bugs, optimize queries, or update existing controllers.', deliveryTime: '2 Days Delivery', features: ['Bug Fixes', 'Query Optimization', 'Source Code'] },
            standard: { price: '$350', name: 'Standard App', description: 'Full featured backend with auth, routing, and database.', deliveryTime: '8 Days Delivery', features: ['Database Schema', 'API Development', 'Admin Panel', 'Source Code'] },
            premium: { price: '$600', name: 'Premium Platform', description: 'Large-scale platform with advanced Laravel features like jobs, queues, broadcasting.', deliveryTime: '15 Days Delivery', features: ['Advanced Architecture', 'Queues/Jobs', 'Broadcasting', 'Source Code'] }
        },
        hourly: { rate: '$25/hr', description: 'Hire a dedicated Laravel developer hourly.', features: ['Dedicated PHP Expert', 'Direct Communication', 'Flexible Hours'] }
    },
    {
        id: 5,
        slug: 'hire-flutter-developer',
        category: 'App Developer',
        title: 'Hire Flutter Developer',
        shortDescription: 'Build stunning natively compiled applications for mobile, web, and desktop.',
        about: 'Our Flutter developers specialize in building beautiful, natively compiled applications for iOS and Android from a single codebase.',
        skills: ['Flutter', 'Dart', 'Firebase', 'State Management (Provider/Riverpod)', 'REST API', 'App Store Deployment'],
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
        color: '#02569B',
        plans: {
            basic: { price: '$150', name: 'Basic App Updates', description: 'Ideal for UI modifications, bug fixes, or new single screens.', deliveryTime: '3 Days Delivery', features: ['1 Screen/Page', 'Bug Fixes', 'Source Code'] },
            standard: { price: '$450', name: 'Standard App MVP', description: 'Perfect for a complete app MVP with up to 5 screens.', deliveryTime: '10 Days Delivery', features: ['Up to 5 Screens', 'API Integration', 'Source Code'] },
            premium: { price: '$750', name: 'Premium Mobile App', description: 'Production-ready mobile app with backend integration.', deliveryTime: '21 Days Delivery', features: ['Unlimited Screens', 'Backend & Auth Integration', 'App Store Submission Support', 'Source Code'] }
        },
        hourly: { rate: '$30/hr', description: 'Hire a dedicated Flutter developer hourly.', features: ['Dedicated Flutter Engineer', 'Direct Communication', 'Flexible Hours'] }
    },
    {
        id: 6,
        slug: 'hire-shopify-developer',
        category: 'Web Developer',
        title: 'Hire Shopify Developer',
        shortDescription: 'Custom Shopify stores, theme development, and e-commerce optimization.',
        about: 'Our Shopify developers build high-converting e-commerce stores. From custom themes using Liquid to headless commerce with Hydrogen, we optimize for sales.',
        skills: ['Shopify', 'Liquid', 'Hydrogen', 'React', 'E-commerce', 'SEO'],
        icon: 'https://cdn.worldvectorlogo.com/logos/shopify.svg',
        color: '#7AB55C',
        plans: {
            basic: { price: '$150', name: 'Theme Tweak', description: 'Minor theme adjustments, app installations, and bug fixes.', deliveryTime: '2 Days Delivery', features: ['Theme Customization', 'App Setup', 'Bug Fix'] },
            standard: { price: '$500', name: 'Store Setup', description: 'Complete Shopify store setup with custom branding and payment gateways.', deliveryTime: '7 Days Delivery', features: ['Custom Theme Setup', 'Product Upload', 'Payment Gateway', 'SEO Optimization'] },
            premium: { price: '$900', name: 'Custom Storefront', description: 'Fully custom headless storefront or complex theme development.', deliveryTime: '14 Days Delivery', features: ['Custom Design', 'Advanced Apps', 'Performance Optimization', 'Source Code'] }
        },
        hourly: { rate: '$35/hr', description: 'Hire a Shopify expert to continuously optimize your store.', features: ['Dedicated Expert', 'CRO Consulting', 'Direct Communication'] }
    },
    {
        id: 7,
        slug: 'hire-aws-expert',
        category: 'Server',
        title: 'Hire AWS Expert',
        shortDescription: 'Cloud architecture, deployment, and server infrastructure management.',
        about: 'Our AWS experts design and maintain scalable, secure cloud infrastructure. From EC2 and S3 to complex serverless architectures using Lambda.',
        skills: ['AWS', 'EC2', 'S3', 'Lambda', 'Docker', 'Kubernetes', 'CI/CD'],
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
        color: '#FF9900',
        plans: {
            basic: { price: '$150', name: 'Server Audit', description: 'Security and performance audit of existing infrastructure.', deliveryTime: '2 Days Delivery', features: ['Security Audit', 'Performance Review', 'Detailed Report'] },
            standard: { price: '$450', name: 'Cloud Setup', description: 'Initial server setup, database configuration, and basic CI/CD pipeline.', deliveryTime: '5 Days Delivery', features: ['Server Configuration', 'Database Setup', 'CI/CD Pipeline'] },
            premium: { price: '$800', name: 'Enterprise Architecture', description: 'Complex load-balanced architecture with auto-scaling and high availability.', deliveryTime: '10 Days Delivery', features: ['Auto-scaling Setup', 'High Availability', 'Advanced Security', 'Continuous Monitoring'] }
        },
        hourly: { rate: '$45/hr', description: 'Hire a dedicated DevOps/AWS expert hourly.', features: ['Dedicated DevOps', '24/7 Monitoring Options', 'Direct Communication'] }
    },
    {
        id: 8,
        slug: 'hire-ui-ux-designer',
        category: 'Vibe coding',
        title: 'Hire UI/UX Designer',
        shortDescription: 'Creative UI/UX design that captures your brands vibe perfectly.',
        about: 'Our designers focus on creating the perfect vibe for your digital products. We blend aesthetics with usability to deliver stunning user experiences.',
        skills: ['Figma', 'Adobe XD', 'Prototyping', 'Wireframing', 'User Research'],
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
        color: '#F24E1E',
        plans: {
            basic: { price: '$120', name: 'UI Polish', description: 'Review and polish existing screens for a better vibe.', deliveryTime: '3 Days Delivery', features: ['UI Review', 'Color/Typography Polish', 'Figma Source'] },
            standard: { price: '$400', name: 'Standard App Design', description: 'Complete UI/UX design for up to 10 screens.', deliveryTime: '10 Days Delivery', features: ['Wireframing', 'UI Design', 'Interactive Prototype', 'Figma Source'] },
            premium: { price: '$800', name: 'Premium Product Design', description: 'Full product design from scratch including design system.', deliveryTime: '20 Days Delivery', features: ['User Research', 'Design System', 'Unlimited Screens', 'Figma Source'] }
        },
        hourly: { rate: '$35/hr', description: 'Hire a creative UI/UX designer hourly.', features: ['Dedicated Designer', 'Iterative Feedback', 'Direct Communication'] }
    }
];
