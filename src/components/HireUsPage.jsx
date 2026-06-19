import React, { useEffect } from 'react';
import HireUsHero from './hire-us/HireUsHero';
import WhyChooseUs from './hire-us/WhyChooseUs';
import HiringModels from './hire-us/HiringModels';
import HireUsList from './hire-us/HireUsList';
import DevelopmentProcess from './hire-us/DevelopmentProcess';
import IndustriesServe from './hire-us/IndustriesServe';
import CTASection from './about/CTASection';

export default function HireUsPage() {
    useEffect(() => {
        document.title = "Hire Dedicated Developers | Kretoss Technology";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#fafcff] min-h-screen">
            <HireUsHero />
            <WhyChooseUs />
            <HiringModels />
            <HireUsList />
            <DevelopmentProcess />
            <IndustriesServe />
            <CTASection />
        </div>
    );
}
