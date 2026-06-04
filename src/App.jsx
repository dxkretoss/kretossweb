import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Homepage from './components/Homepage';
import AboutPage from './components/AboutPage';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export default function App() {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.07, // Lower lerp means smoother, longer inertia
            smoothWheel: true,
            wheelMultiplier: 0.7,
            touchMultiplier: 1.5,
        });

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
            <Routes>
                {/* The Layout component wraps all routes inside it */}
                <Route element={<Layout />}>
                    {/* <Route> */}
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<AboutPage />} />
                    {/* Add more routes here later */}
                </Route>
            </Routes>
        </Router>
    );
}
