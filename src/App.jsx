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
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        if (window.lenis) {
            window.lenis.scrollTo(0, { immediate: true });
        }
    }, [pathname]);

    return null;
}

export default function App() {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.07, // Lower lerp means smoother, longer inertia
            smoothWheel: true,
            wheelMultiplier: 0.7,
            touchMultiplier: 1.5,
        });
        
        // Expose globally for route change resets
        window.lenis = lenis;

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
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
