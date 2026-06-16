import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FloatingNav from './FloatingNav';

export default function Layout() {
    const location = useLocation();

    // Maintain the currentRoute logic for Header and Footer props compatibility
    const currentRoute = location.pathname === '/' ? '/' : location.pathname.substring(1);

    useEffect(() => {

        // Set standard attributes (for Webflow compatibility if needed)
        // document.documentElement.setAttribute('data-wf-page', '6996a337655d586ffe288774');
        // document.documentElement.setAttribute('data-wf-site', '6996a337655d586ffe288775');

        // Calibrate GSAP ScrollTriggers after route switches
        setTimeout(() => {
            if (window.ScrollTrigger) {
                window.ScrollTrigger.refresh();
            }
        }, 150);

        // ResizeObserver guarantees ScrollTrigger recalibrates if images load late and shift the layout!
        let resizeTimeout;
        const resizeObserver = new ResizeObserver(() => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (window.ScrollTrigger) window.ScrollTrigger.refresh();
            }, 100);
        });
        resizeObserver.observe(document.body);

        return () => {
            resizeObserver.disconnect();
            clearTimeout(resizeTimeout);
        };
    }, [location.pathname]);

    return (
        <div className="bg-[#0c0c0c] text-white font-sans selection:bg-[#ff6b35] selection:text-white min-h-screen flex flex-col">
            <Header currentRoute={currentRoute} />

            {/* The page content will be injected here by React Router */}
            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer currentRoute={currentRoute} />

            {/* Global Floating Navigation - Hidden on screens below 768px */}
            <div className="hidden md:block">
                <FloatingNav />
            </div>
        </div>
    );
}
