import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Works from './components/Works';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Product from './components/Product';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
    useEffect(() => {
        // Set the specific page ID so that Webflow's IX2 animation engine loads the correct interaction definitions
        document.documentElement.setAttribute('data-wf-page', '6996a337655d586ffe288774');
        document.documentElement.setAttribute('data-wf-site', '6996a337655d586ffe288775');

        // Dynamic binding hook for Webflow interactive components
        if (window.Webflow) {
            window.Webflow.destroy();
            window.Webflow.ready();
            if (window.Webflow.require('ix2')) {
                window.Webflow.require('ix2').init();
            }

            // Dispatch synthetic load events so Webflow executes Page Load entrance animations instantly
            window.dispatchEvent(new Event('load'));
            window.dispatchEvent(new Event('DOMContentLoaded'));
            if (window.jQuery) {
                window.jQuery(window).trigger('load');
            }
        }


        // Ensure GSAP ScrollTriggers refresh their coordinates once React DOM is fully mounted
        setTimeout(() => {
            if (window.ScrollTrigger) {
                window.ScrollTrigger.refresh();
            }
        }, 200);
    }, []);

    return (
        <div className="bg-[#0c0c0c] text-white font-sans selection:bg-[#ff6b35] selection:text-white min-h-screen">
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <Projects />
                <Works />
                <Testimonials />
                <Product />
                {/* <Faq /> */}
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
