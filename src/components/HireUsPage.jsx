import React from 'react';
import HireUsHero from './hireus/HireUsHero';
import Technologies from './hireus/Technologies';
import HireModal from './hireus/HireModal';
import WhyChoose from './hireus/WhyChoose';
import WhatWeBuild from './hireus/WhatWeBuild';
import HowItsWork from './hireus/HowItsWork';
import Portfolio from './hireus/Portfolio';
import Testimonials from './hireus/Testimonials';
import Faq from './hireus/Faq';
import ContactForm from './hireus/ContactForm';
import FinalCta from './hireus/FinalCta';
import Projects from './homepage/Projects';
import useDocumentMetadata from '../hooks/useDocumentMetadata';

const HireUsPage = () => {
    useDocumentMetadata({
        title: "Hire Us | Kretoss Technology",
        description: "Hire dedicated web & mobile developers, UI/UX designers, and software engineers from Kretoss Technology to accelerate your product development."
    });

    return (
        <div>
            <HireUsHero />
            <Technologies />
            <HireModal />
            <WhyChoose />
            <WhatWeBuild />
            <HowItsWork />
            <Projects />
            {/* <Portfolio /> */}
            <Testimonials />
            <Faq />
            <ContactForm />
            <FinalCta />
        </div>
    );
};

export default HireUsPage;
