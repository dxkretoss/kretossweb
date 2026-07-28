import React, { useEffect } from 'react';
import PortfolioHero from './portfolio/PortfolioHero';
import Portfolios from './portfolio/Portfolios';
import CTASection from './about/CTASection';
import useDocumentMetadata from '../hooks/useDocumentMetadata';

export default function PortfolioPage() {
    useDocumentMetadata({
        title: "Our Portfolio | Kretoss Technology",
        description: "Browse our successful projects, case studies, and digital products built for various industries across web and mobile platforms."
    });

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
