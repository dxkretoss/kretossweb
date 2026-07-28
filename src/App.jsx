import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Homepage from './components/Homepage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ServicePage from './components/ServicePage';
import PortfolioPage from './components/PortfolioPage';
import PortfolioDetailsPage from './components/PortfolioDetailsPage';
import CareerPage from './components/CareerPage';
import JobDetailsPage from './components/JobDetailsPage';
import JobApplicationPage from './components/JobApplicationPage';
import NotFoundPage from './components/NotFoundPage';
import HireUsPage from './components/HireUsPage';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
window.ScrollTrigger = ScrollTrigger;

function ScrollToTop() {
    const { pathname } = useLocation();
    const prevPathRef = React.useRef(pathname);

    useEffect(() => {
        if (prevPathRef.current !== pathname) {
            window.scrollTo(0, 0);
            if (window.lenis) {
                window.lenis.scrollTo(0, { immediate: true });
            }
            prevPathRef.current = pathname;
        }
    }, [pathname]);

    return null;
}

export default function App() {
    useEffect(() => {
        // Disable Lenis on touch devices. iOS has native smooth momentum scrolling
        // and using a JS scroll library on iOS causes severe jumping bugs when DOM changes.
        const isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
        
        // Configure ScrollTrigger to not aggressively refresh on mobile when height changes
        ScrollTrigger.config({ ignoreMobileResize: true });

        if (isTouch) {
            window.lenis = null;
            return;
        }

        const lenis = new Lenis({
            lerp: 0.07, // Lower lerp means smoother, longer inertia
            smoothWheel: true,
            wheelMultiplier: 0.8,
            // Removed touch properties since we disable it on touch devices entirely
        });

        // Expose globally for route change resets
        window.lenis = lenis;

        // Sync Lenis with GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        const updateLenis = (time) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(updateLenis);
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(updateLenis);
            lenis.destroy();
        };
    }, []);

    return (
        <Router>
            <ScrollToTop />
            <Routes>
                {/* The Layout component wraps all routes inside it */}
                <Route element={<Layout />}>
                    {/* <Route> */}
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicePage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="/portfolio/:slug" element={<PortfolioDetailsPage />} />
                    <Route path="/hire-us" element={<HireUsPage />} />
                    {/* <Route path="/hire-us/:roleSlug" element={<HireUsDetailsPage />} /> */}
                    <Route path="/careers" element={<CareerPage />} />
                    <Route path="/careers/:slug" element={<JobDetailsPage />} />
                    <Route path="/careers/:slug/apply" element={<JobApplicationPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    {/* Catch-all route for 404 Not Found */}
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Router>
    );
}
