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
import Technologies from './homepage/Technologies'

export default function Homepage() {
    return (
        <div>
            <Hero />
            <About />
            <ClientMarquee />
            <Services />
            <Projects />
            <Works />
            <Technologies />
            <Testimonials />
            <Product />
            <Contact />
        </div>
    )
}
