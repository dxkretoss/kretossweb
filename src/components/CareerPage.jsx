import React from 'react';
import CareerHero from './career/CareerHero';
import TeamsFuture from './career/TeamsFuture';
import BuildWithUs from './career/BuildWithUs';
import JobOpenings from './career/JobOpenings';
import CTASection from './about/CTASection';
import useDocumentMetadata from '../hooks/useDocumentMetadata';

export default function CareerPage() {
    useDocumentMetadata({
        title: "Careers at Kretoss Technology | Join Our Team",
        description: "Join Kretoss Technology. Explore current job openings, career opportunities, and build the future of technology with a top-rated team."
    });

    return (
        <div className="bg-[#0a0a0a] min-h-screen text-white">
            <CareerHero />
            <BuildWithUs />
            <JobOpenings />
            <TeamsFuture />

            <CTASection />
        </div>
    );
}
