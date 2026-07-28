import React from "react";
import HeroSection from "./about/HeroSection";
import CompanyIntro from "./about/CompanyIntro";
import CoreValues from "./about/CoreValues";
import TeamSection from "./about/TeamSection";
import AwardsSection from "./about/AwardsSection";
import CtaSection from "./about/CTASection";
import About from "./homepage/About";
import useDocumentMetadata from "../hooks/useDocumentMetadata";
// import "../about-us.css";

export default function AboutPage() {
    useDocumentMetadata({
        title: "About Us | Kretoss Technology",
        description: "Learn more about Kretoss Technology, our founders, core values, and our mission to build cutting-edge digital products for startups and enterprises."
    });

    return (
        <main className="about-page-wrapper">
            <HeroSection />
            <About />
            {/* <CompanyIntro /> */}
            <CoreValues />
            <TeamSection />
            <AwardsSection />
            <CtaSection />
        </main>
    );
}