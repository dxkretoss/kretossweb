import React, { useEffect } from 'react';
import PortfolioHero from './portfolio/PortfolioHero';
import Portfolios from './portfolio/Portfolios';
import CTASection from './about/CTASection';

export default function PortfolioPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#fafcff]">
            <PortfolioHero />
            <Portfolios />

            {/* Can add portfolio grid here later */}

            <CTASection />
        </div>
    );
}
