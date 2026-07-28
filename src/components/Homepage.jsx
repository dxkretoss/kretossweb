import React from 'react'
import Hero from './homepage/Hero'
import About from './homepage/About'
import Services from './homepage/Services'
import Contact from './homepage/Contact'
import Projects from './homepage/Projects'
import Works from './homepage/Works'
import Testimonials from './homepage/Testimonials'
import Product from './homepage/Product'
import ClientMarquee from './homepage/ClientMarquee'
import AIVibeCodingWorkflow from './homepage/AIVibeCodingWorkflow'
import Technologies from './homepage/Technologies'
import Faq from './homepage/Faq'
import useDocumentMetadata from '../hooks/useDocumentMetadata'

export default function Homepage() {
    useDocumentMetadata({
        title: "Kretoss Technology | Top Web & Mobile App Development Company",
        description: "Kretoss Technology is a premier Web and Mobile Application Development Company delivering innovative custom software, ERP, and AI solutions globally."
    });

    return (
        <div>
            <Hero />
            <About />
            <ClientMarquee />
            <AIVibeCodingWorkflow />
            <Services />
            <Projects />
            <Works />
            <Technologies />
            <Testimonials />
            <Product />
            <Contact />
            {/* <Faq/> */}
        </div>
    )
}
