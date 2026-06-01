import React from 'react'
import Hero from './homepage/Hero'
import About from './homepage/About'
import Services from './homepage/Services'
import Contact from './homepage/Contact'
import Projects from './homepage/Projects'
import Works from './homepage/Works'
import Testimonials from './homepage/Testimonials'
import Product from './homepage/Product'

export default function Homepage() {
    return (
        <div>
            <Hero />
            <About />
            <Services />
            <Projects />
            <Works />
            <Testimonials />
            <Product />
            <Contact />
        </div>
    )
}
