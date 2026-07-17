import React from 'react';
import CareerHero from './career/CareerHero';
import TeamsFuture from './career/TeamsFuture';
import BuildWithUs from './career/BuildWithUs';
import JobOpenings from './career/JobOpenings';
import CTASection from './about/CTASection';

export default function CareerPage() {
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
