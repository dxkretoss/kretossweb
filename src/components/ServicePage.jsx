import React, { useEffect } from 'react';
import ServiceHero from './service/ServiceHero';
import ServicesList from './service/ServicesList';
import CTASection from './about/CTASection';
import Works from './homepage/Works';

export default function ServicePage() {
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
