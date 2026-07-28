import React, { useEffect } from 'react';
import ServiceHero from './service/ServiceHero';
import ServicesList from './service/ServicesList';
import CTASection from './about/CTASection';
import Works from './homepage/Works';
import useDocumentMetadata from '../hooks/useDocumentMetadata';

export default function ServicePage() {
    useDocumentMetadata({
        title: "Our Services | Kretoss Technology",
        description: "Explore our wide range of services including Custom Web Development, Mobile App Development, UI/UX Design, and AI & Enterprise Solutions."
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#fafcff]">
            <ServiceHero />
            <ServicesList />
            <Works />
            <CTASection />
        </div>
    );
}
