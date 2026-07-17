import React from 'react';

const SvcSvgBase = ({ children }) => (
    <svg viewBox="0 0 400 300" className="w-full h-full object-cover bg-[#0a0a0a]" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="svc-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#44c7f6" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0" />
            </radialGradient>
            <filter id="svc-glow-filter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>
        <rect width="100%" height="100%" fill="url(#svc-glow)" />
        <g style={{ transformOrigin: 'center' }}>
            {children}
        </g>
    </svg>
);

export const CloudAnimation = () => (
    <SvcSvgBase>
        {/* Network lines */}
        <path d="M100 150 L200 100 L300 150 L200 200 Z" fill="none" stroke="#ffffff15" strokeWidth="1.5" />
        <path d="M100 150 L200 250 L300 150" fill="none" stroke="#ffffff15" strokeWidth="1.5" />
        <path d="M200 100 L200 200 L200 250" fill="none" stroke="#ffffff15" strokeWidth="1.5" />
        
        {/* Animated Data Particles */}
        <path d="M100 150 L200 100 L300 150 L200 200 Z" fill="none" stroke="#44c7f6" strokeWidth="2" strokeDasharray="10 100" style={{ animation: 'svc-dash 4s linear infinite' }} />
        
        {/* Cloud Nodes */}
        <circle cx="100" cy="150" r="12" fill="#0e54f1" opacity="0.8" style={{ animation: 'svc-pulse 3s ease-in-out infinite' }} />
        <text x="100" y="175" fill="#ffffff" fontSize="10" opacity="0.6" textAnchor="middle" fontFamily="sans-serif">Node A</text>
        
        <circle cx="200" cy="100" r="16" fill="#44c7f6" filter="url(#svc-glow-filter)" style={{ animation: 'svc-pulse 4s ease-in-out infinite 1s' }} />
        <text x="200" y="75" fill="#ffffff" fontSize="12" opacity="0.8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">AWS / GCP</text>
        
        <circle cx="300" cy="150" r="12" fill="#0e54f1" opacity="0.8" style={{ animation: 'svc-pulse 3s ease-in-out infinite 0.5s' }} />
        <text x="300" y="175" fill="#ffffff" fontSize="10" opacity="0.6" textAnchor="middle" fontFamily="sans-serif">Node B</text>
        
        <circle cx="200" cy="200" r="14" fill="#0e54f1" style={{ animation: 'svc-pulse 3.5s ease-in-out infinite 0.2s' }} />
        <text x="230" y="204" fill="#ffffff" fontSize="10" opacity="0.6" fontFamily="sans-serif">Database</text>
        
        <circle cx="200" cy="250" r="10" fill="#44c7f6" opacity="0.6" style={{ animation: 'svc-pulse 2s ease-in-out infinite' }} />
    </SvcSvgBase>
);

export const FrontendAnimation = () => (
    <SvcSvgBase>
        {/* Browser Frame */}
        <rect x="50" y="40" width="300" height="220" rx="6" fill="#ffffff05" stroke="#ffffff15" strokeWidth="2" />
        <line x1="50" y1="70" x2="350" y2="70" stroke="#ffffff15" strokeWidth="2" />
        <circle cx="65" cy="55" r="4" fill="#ffffff20" />
        <circle cx="80" cy="55" r="4" fill="#ffffff20" />
        <circle cx="95" cy="55" r="4" fill="#ffffff20" />
        
        {/* Floating UI Elements */}
        <g style={{ animation: 'svc-float 6s ease-in-out infinite' }}>
            <rect x="70" y="90" width="80" height="150" rx="4" fill="#ffffff08" stroke="#ffffff15" />
            <rect x="80" y="105" width="60" height="10" rx="2" fill="#44c7f640" />
            <text x="80" y="132" fill="#ffffff" fontSize="8" opacity="0.5" fontFamily="sans-serif">Sidebar</text>
            <rect x="80" y="140" width="50" height="6" rx="2" fill="#ffffff20" />
        </g>
        
        <g style={{ animation: 'svc-float 6s ease-in-out infinite 1s' }}>
            <rect x="170" y="90" width="160" height="70" rx="4" fill="#ffffff08" stroke="#ffffff15" />
            <rect x="185" y="105" width="80" height="10" rx="2" fill="#0e54f160" />
            <text x="185" y="140" fill="#ffffff" fontSize="10" fontWeight="bold" opacity="0.8" fontFamily="sans-serif">React / Next.js</text>
            <rect x="185" y="145" width="130" height="3" rx="1.5" fill="#44c7f6" opacity="0.8" filter="url(#svc-glow-filter)" />
        </g>
        
        <g style={{ animation: 'svc-float 6s ease-in-out infinite 2s' }}>
            <rect x="170" y="175" width="160" height="65" rx="4" fill="#ffffff08" stroke="#ffffff15" />
            <circle cx="195" cy="207" r="16" fill="#ffffff15" />
            <text x="225" y="200" fill="#ffffff" fontSize="9" opacity="0.6" fontFamily="sans-serif">Component UI</text>
            <rect x="225" y="210" width="60" height="6" rx="2" fill="#ffffff20" />
        </g>
    </SvcSvgBase>
);

export const BackendAnimation = () => (
    <SvcSvgBase>
        {/* Servers */}
        <g style={{ animation: 'svc-float 8s ease-in-out infinite' }}>
            <rect x="140" y="50" width="120" height="35" rx="4" fill="#ffffff08" stroke="#ffffff20" />
            <circle cx="160" cy="67" r="4" fill="#44c7f6" style={{ animation: 'svc-blink 2s infinite' }} />
            <text x="175" y="71" fill="#ffffff" fontSize="9" opacity="0.8" fontFamily="sans-serif">Node.js API</text>
            <line x1="240" y1="67" x2="250" y2="67" stroke="#ffffff15" strokeWidth="4" strokeLinecap="round" />
            
            <rect x="140" y="95" width="120" height="35" rx="4" fill="#ffffff08" stroke="#ffffff20" />
            <circle cx="160" cy="112" r="4" fill="#0e54f1" style={{ animation: 'svc-blink 2s infinite 0.5s' }} />
            <text x="175" y="116" fill="#ffffff" fontSize="9" opacity="0.8" fontFamily="sans-serif">Python / Django</text>
            
            <rect x="140" y="140" width="120" height="35" rx="4" fill="#ffffff08" stroke="#ffffff20" />
            <circle cx="160" cy="157" r="4" fill="#44c7f6" style={{ animation: 'svc-blink 2s infinite 1s' }} />
            <text x="175" y="161" fill="#ffffff" fontSize="9" opacity="0.8" fontFamily="sans-serif">Worker Dyno</text>
        </g>
        
        {/* Database Cylinders */}
        <g style={{ animation: 'svc-float 8s ease-in-out infinite 2s' }}>
            <ellipse cx="200" cy="210" rx="40" ry="15" fill="#ffffff15" stroke="#ffffff20" />
            <path d="M160 210 L160 250 A40 15 0 0 0 240 250 L240 210" fill="#ffffff05" stroke="#ffffff20" />
            <ellipse cx="200" cy="250" rx="40" ry="15" fill="none" stroke="#ffffff20" strokeDasharray="4 4" />
            <text x="200" y="240" fill="#ffffff" fontSize="12" fontWeight="bold" opacity="0.7" textAnchor="middle" fontFamily="sans-serif">SQL / NoSQL</text>
        </g>
        
        {/* Connecting Data Streams */}
        <path d="M200 175 L200 210" fill="none" stroke="#ffffff15" strokeWidth="2" />
        <path d="M200 175 L200 210" fill="none" stroke="#44c7f6" strokeWidth="3" strokeDasharray="10 30" style={{ animation: 'svc-dash 2s linear infinite' }} />
    </SvcSvgBase>
);

export const MobileAnimation = () => (
    <SvcSvgBase>
        {/* Phone Outline */}
        <rect x="130" y="30" width="140" height="240" rx="20" fill="#ffffff05" stroke="#ffffff20" strokeWidth="3" />
        <line x1="185" y1="45" x2="215" y2="45" stroke="#ffffff20" strokeWidth="3" strokeLinecap="round" />
        <circle cx="200" cy="255" r="8" fill="none" stroke="#ffffff20" strokeWidth="2" />
        
        {/* Mobile UI */}
        <g style={{ animation: 'svc-float 5s ease-in-out infinite' }}>
            <rect x="145" y="65" width="110" height="40" rx="8" fill="#ffffff10" />
            <circle cx="165" cy="85" r="10" fill="#44c7f6" filter="url(#svc-glow-filter)" />
            <text x="185" y="89" fill="#ffffff" fontSize="9" opacity="0.8" fontFamily="sans-serif">React Native</text>
            
            <rect x="145" y="115" width="50" height="50" rx="8" fill="#0e54f1" opacity="0.5" />
            <text x="170" y="144" fill="#ffffff" fontSize="10" fontWeight="bold" opacity="0.8" textAnchor="middle" fontFamily="sans-serif">iOS</text>
            <rect x="205" y="115" width="50" height="50" rx="8" fill="#ffffff10" />
            <text x="230" y="144" fill="#ffffff" fontSize="10" fontWeight="bold" opacity="0.8" textAnchor="middle" fontFamily="sans-serif">And</text>
            
            <rect x="145" y="175" width="110" height="25" rx="6" fill="#ffffff10" />
            <rect x="145" y="208" width="110" height="25" rx="6" fill="#ffffff10" />
            <text x="200" y="192" fill="#ffffff" fontSize="8" opacity="0.4" textAnchor="middle" fontFamily="sans-serif">Flutter</text>
        </g>
        
        {/* External Connection Dots */}
        <circle cx="90" cy="150" r="4" fill="#44c7f6" opacity="0.6" style={{ animation: 'svc-pulse 2s infinite' }} />
        <text x="90" y="140" fill="#ffffff" fontSize="9" opacity="0.6" textAnchor="middle" fontFamily="sans-serif">Cloud API</text>
        <circle cx="310" cy="150" r="4" fill="#0e54f1" opacity="0.6" style={{ animation: 'svc-pulse 2s infinite 1s' }} />
        <text x="310" y="140" fill="#ffffff" fontSize="9" opacity="0.6" textAnchor="middle" fontFamily="sans-serif">DB Sync</text>
        <path d="M90 150 Q110 150 130 150" fill="none" stroke="#44c7f6" strokeWidth="1" strokeDasharray="2 4" style={{ animation: 'svc-dash-reverse 4s linear infinite' }} />
        <path d="M310 150 Q290 150 270 150" fill="none" stroke="#44c7f6" strokeWidth="1" strokeDasharray="2 4" style={{ animation: 'svc-dash 4s linear infinite' }} />
    </SvcSvgBase>
);

export const CMSAnimation = () => (
    <SvcSvgBase>
        {/* Modular Grid */}
        <g style={{ animation: 'svc-float 7s ease-in-out infinite' }}>
            <rect x="60" y="60" width="170" height="80" rx="6" fill="#ffffff08" stroke="#ffffff20" />
            <rect x="75" y="75" width="40" height="40" rx="4" fill="#44c7f650" />
            <text x="125" y="88" fill="#ffffff" fontSize="10" opacity="0.8" fontFamily="sans-serif">Content Block</text>
            <rect x="125" y="96" width="70" height="6" rx="2" fill="#ffffff15" />
            <rect x="125" y="108" width="50" height="6" rx="2" fill="#ffffff15" />
        </g>
        
        <g style={{ animation: 'svc-float 7s ease-in-out infinite 1.5s' }}>
            <rect x="245" y="60" width="95" height="120" rx="6" fill="#ffffff08" stroke="#ffffff20" />
            <rect x="260" y="75" width="65" height="50" rx="4" fill="#ffffff10" />
            <text x="292.5" y="105" fill="#ffffff" fontSize="9" opacity="0.4" textAnchor="middle" fontFamily="sans-serif">Media</text>
            <circle cx="292.5" cy="150" r="12" fill="#0e54f1" filter="url(#svc-glow-filter)" />
            <text x="292.5" y="154" fill="#ffffff" fontSize="9" opacity="0.9" textAnchor="middle" fontFamily="sans-serif">SEO</text>
        </g>
        
        <g style={{ animation: 'svc-float 7s ease-in-out infinite 3s' }}>
            <rect x="60" y="155" width="80" height="85" rx="6" fill="#ffffff08" stroke="#ffffff20" />
            <circle cx="100" cy="197.5" r="20" fill="none" stroke="#44c7f6" strokeWidth="4" strokeDasharray="30 10" style={{ animation: 'svc-spin 8s linear infinite' }} />
            <text x="100" y="201" fill="#ffffff" fontSize="8" opacity="0.6" textAnchor="middle" fontFamily="sans-serif">Sync</text>
        </g>
        
        <g style={{ animation: 'svc-float 7s ease-in-out infinite 0.5s' }}>
            <rect x="155" y="155" width="75" height="85" rx="6" fill="#ffffff08" stroke="#ffffff20" />
            <text x="170" y="174" fill="#ffffff" fontSize="8" opacity="0.8" fontFamily="sans-serif">WP / Shopify</text>
            <rect x="170" y="184" width="45" height="6" rx="2" fill="#ffffff20" />
            <rect x="170" y="198" width="45" height="6" rx="2" fill="#ffffff20" />
            <rect x="170" y="212" width="30" height="6" rx="2" fill="#ffffff20" />
        </g>
        
        <g style={{ animation: 'svc-float 7s ease-in-out infinite 2s' }}>
            <rect x="245" y="195" width="95" height="45" rx="6" fill="#44c7f620" stroke="#44c7f660" />
            <text x="292.5" y="218" fill="#44c7f6" fontSize="10" fontWeight="bold" opacity="1" textAnchor="middle" fontFamily="sans-serif">Publish</text>
        </g>
    </SvcSvgBase>
);

export const AnalyticsAnimation = () => (
    <SvcSvgBase>
        {/* Background Grid */}
        <path d="M50 220 L350 220" stroke="#ffffff30" strokeWidth="1" />
        <path d="M50 170 L350 170" stroke="#ffffff10" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M50 120 L350 120" stroke="#ffffff10" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M50 70 L350 70" stroke="#ffffff10" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M50 220 L50 70" stroke="#ffffff30" strokeWidth="1" />
        <text x="35" y="74" fill="#ffffff" fontSize="9" opacity="0.4" fontFamily="sans-serif">100</text>
        <text x="40" y="124" fill="#ffffff" fontSize="9" opacity="0.4" fontFamily="sans-serif">50</text>
        <text x="45" y="174" fill="#ffffff" fontSize="9" opacity="0.4" fontFamily="sans-serif">0</text>
        
        {/* Bar Chart */}
        <g opacity="0.6">
            <rect x="70" y="150" width="30" height="70" fill="#ffffff15" />
            <text x="85" y="235" fill="#ffffff" fontSize="9" opacity="0.6" textAnchor="middle" fontFamily="sans-serif">Jan</text>
            
            <rect x="120" y="110" width="30" height="110" fill="#ffffff15" />
            <text x="135" y="235" fill="#ffffff" fontSize="9" opacity="0.6" textAnchor="middle" fontFamily="sans-serif">Feb</text>
            
            <rect x="170" y="180" width="30" height="40" fill="#ffffff15" />
            <text x="185" y="235" fill="#ffffff" fontSize="9" opacity="0.6" textAnchor="middle" fontFamily="sans-serif">Mar</text>
            
            <rect x="220" y="90" width="30" height="130" fill="#ffffff15" />
            <text x="235" y="235" fill="#ffffff" fontSize="9" opacity="0.6" textAnchor="middle" fontFamily="sans-serif">Apr</text>
            
            <rect x="270" y="130" width="30" height="90" fill="#ffffff15" />
            <text x="285" y="235" fill="#ffffff" fontSize="9" opacity="0.6" textAnchor="middle" fontFamily="sans-serif">May</text>
            
            <rect x="320" y="60" width="30" height="160" fill="#44c7f620" stroke="#44c7f660" />
            <text x="335" y="235" fill="#44c7f6" fontSize="9" opacity="0.9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Jun</text>
        </g>
        
        {/* Line Chart */}
        <path d="M85 170 L135 120 L185 150 L235 80 L285 110 L335 40" fill="none" stroke="#44c7f6" strokeWidth="3" filter="url(#svc-glow-filter)" />
        
        {/* Data Points */}
        <circle cx="85" cy="170" r="5" fill="#0a0a0a" stroke="#44c7f6" strokeWidth="2" style={{ animation: 'svc-pulse 2s infinite' }} />
        <circle cx="135" cy="120" r="5" fill="#0a0a0a" stroke="#44c7f6" strokeWidth="2" style={{ animation: 'svc-pulse 2s infinite 0.2s' }} />
        <circle cx="185" cy="150" r="5" fill="#0a0a0a" stroke="#44c7f6" strokeWidth="2" style={{ animation: 'svc-pulse 2s infinite 0.4s' }} />
        <circle cx="235" cy="80" r="5" fill="#0a0a0a" stroke="#44c7f6" strokeWidth="2" style={{ animation: 'svc-pulse 2s infinite 0.6s' }} />
        <circle cx="285" cy="110" r="5" fill="#0a0a0a" stroke="#44c7f6" strokeWidth="2" style={{ animation: 'svc-pulse 2s infinite 0.8s' }} />
        <circle cx="335" cy="40" r="5" fill="#0e54f1" stroke="#44c7f6" strokeWidth="2" style={{ animation: 'svc-pulse 2s infinite 1s' }} />
        <text x="335" y="25" fill="#ffffff" fontSize="12" fontWeight="bold" opacity="0.9" textAnchor="middle" fontFamily="sans-serif">+142%</text>
    </SvcSvgBase>
);

export const VibeCodingAnimation = () => (
    <SvcSvgBase>
        {/* Code Editor Window */}
        <rect x="50" y="30" width="300" height="230" rx="8" fill="#ffffff05" stroke="#ffffff15" strokeWidth="2" />
        <line x1="50" y1="60" x2="350" y2="60" stroke="#ffffff15" strokeWidth="2" />
        <circle cx="70" cy="45" r="4" fill="#ff5f56" opacity="0.8" />
        <circle cx="85" cy="45" r="4" fill="#ffbd2e" opacity="0.8" />
        <circle cx="100" cy="45" r="4" fill="#27c93f" opacity="0.8" />
        <text x="200" y="49" fill="#ffffff" fontSize="10" opacity="0.6" textAnchor="middle" fontFamily="sans-serif">AI Copilot Environment</text>
        
        {/* Prompt Input Box */}
        <rect x="65" y="75" width="270" height="35" rx="6" fill="#44c7f610" stroke="#44c7f630" strokeWidth="1" />
        <circle cx="85" cy="92.5" r="8" fill="#44c7f630" />
        <polygon points="82,89 89,92.5 82,96" fill="#44c7f6" />
        <text x="105" y="96" fill="#ffffff" opacity="0.9" fontSize="10" fontFamily="sans-serif">Prompt: "Build a scalable API endpoint"</text>
        
        {/* Generated Code Area */}
        <g style={{ animation: 'svc-float 6s ease-in-out infinite' }}>
            <text x="70" y="140" fill="#44c7f6" fontSize="10" fontFamily="monospace">@app.post("/api/v1/resource")</text>
            <text x="70" y="160" fill="#44c7f6" fontSize="10" fontFamily="monospace">async def create_endpoint(data: Item):</text>
            <text x="90" y="180" fill="#ffffff" opacity="0.8" fontSize="10" fontFamily="monospace">const <tspan fill="#0e54f1">result</tspan> = await <tspan fill="#44c7f6">db.save</tspan>(data)</text>
            <text x="90" y="200" fill="#ffffff" opacity="0.8" fontSize="10" fontFamily="monospace">return <tspan fill="#0e54f1">{'{"status": "success", "data": result}'}</tspan></text>
            
            {/* Blinking Cursor */}
            <rect x="90" y="210" width="6" height="12" fill="#44c7f6" style={{ animation: 'svc-blink 1s step-end infinite' }} />
        </g>
        
        {/* AI Sparkles / Nodes */}
        <path d="M280 120 L310 90 L340 120" fill="none" stroke="#44c7f6" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
        <circle cx="310" cy="90" r="12" fill="#44c7f620" stroke="#44c7f6" strokeWidth="2" filter="url(#svc-glow-filter)" style={{ animation: 'svc-pulse 3s infinite' }} />
        <polygon points="310,83 313,87 317,87 314,90 315,94 310,92 305,94 306,90 303,87 307,87" fill="#44c7f6" />
        <text x="310" y="70" fill="#44c7f6" fontSize="9" fontWeight="bold" opacity="0.9" textAnchor="middle" fontFamily="sans-serif">AI Generating</text>
    </SvcSvgBase>
);

export const ERPAnimation = () => (
    <SvcSvgBase>
        {/* Central Core */}
        <circle cx="200" cy="150" r="45" fill="#ffffff08" stroke="#44c7f6" strokeWidth="2" style={{ animation: 'svc-pulse 4s infinite' }} />
        <circle cx="200" cy="150" r="25" fill="#0e54f1" filter="url(#svc-glow-filter)" />
        <text x="200" y="154" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">ERP</text>
        
        {/* Orbits */}
        <circle cx="200" cy="150" r="100" fill="none" stroke="#ffffff10" strokeWidth="1" strokeDasharray="5 5" style={{ transformOrigin: '200px 150px', animation: 'svc-spin 20s linear infinite' }} />
        
        {/* Satellites */}
        <g style={{ transformOrigin: '200px 150px', animation: 'svc-spin 30s linear infinite' }}>
            <line x1="200" y1="105" x2="200" y2="50" stroke="#ffffff20" strokeWidth="2" />
            <circle cx="200" cy="50" r="18" fill="#ffffff10" stroke="#ffffff40" strokeWidth="2" />
            <text x="200" y="54" fill="#ffffff" fontSize="8" opacity="0.8" textAnchor="middle" style={{ transformOrigin: '200px 50px', animation: 'svc-spin 30s linear infinite reverse' }} fontFamily="sans-serif">CRM</text>
            
            <line x1="245" y1="150" x2="300" y2="150" stroke="#ffffff20" strokeWidth="2" />
            <circle cx="300" cy="150" r="18" fill="#ffffff10" stroke="#ffffff40" strokeWidth="2" />
            <text x="300" y="154" fill="#ffffff" fontSize="8" opacity="0.8" textAnchor="middle" style={{ transformOrigin: '300px 150px', animation: 'svc-spin 30s linear infinite reverse' }} fontFamily="sans-serif">FIN</text>
            
            <line x1="200" y1="195" x2="200" y2="250" stroke="#ffffff20" strokeWidth="2" />
            <circle cx="200" cy="250" r="18" fill="#ffffff10" stroke="#ffffff40" strokeWidth="2" />
            <text x="200" y="254" fill="#ffffff" fontSize="8" opacity="0.8" textAnchor="middle" style={{ transformOrigin: '200px 250px', animation: 'svc-spin 30s linear infinite reverse' }} fontFamily="sans-serif">INV</text>
            
            <line x1="155" y1="150" x2="100" y2="150" stroke="#ffffff20" strokeWidth="2" />
            <circle cx="100" cy="150" r="18" fill="#ffffff10" stroke="#ffffff40" strokeWidth="2" />
            <text x="100" y="154" fill="#ffffff" fontSize="8" opacity="0.8" textAnchor="middle" style={{ transformOrigin: '100px 150px', animation: 'svc-spin 30s linear infinite reverse' }} fontFamily="sans-serif">HR</text>
        </g>
        
        {/* Flowing Data Dots */}
        <g style={{ transformOrigin: '200px 150px', animation: 'svc-spin 30s linear infinite' }}>
            <circle cx="200" cy="80" r="4" fill="#44c7f6" filter="url(#svc-glow-filter)" style={{ animation: 'svc-pulse 1.5s infinite' }} />
            <circle cx="270" cy="150" r="4" fill="#44c7f6" filter="url(#svc-glow-filter)" style={{ animation: 'svc-pulse 1.5s infinite 0.5s' }} />
            <circle cx="200" cy="220" r="4" fill="#44c7f6" filter="url(#svc-glow-filter)" style={{ animation: 'svc-pulse 1.5s infinite 0.2s' }} />
            <circle cx="130" cy="150" r="4" fill="#44c7f6" filter="url(#svc-glow-filter)" style={{ animation: 'svc-pulse 1.5s infinite 0.7s' }} />
        </g>
    </SvcSvgBase>
);
