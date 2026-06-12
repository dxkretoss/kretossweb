import HeroSection from "./about/HeroSection";
import CompanyIntro from "./about/CompanyIntro";
import CoreValues from "./about/CoreValues";
import TeamSection from "./about/TeamSection";
import AwardsSection from "./about/AwardsSection";
import CtaSection from "./about/CTASection";
// import "../about-us.css";

export default function AboutPage() {
    return (
        <main className="about-page-wrapper">
            <HeroSection />
            <CompanyIntro />
            <CoreValues />
            <TeamSection />
            <AwardsSection />
            <CtaSection />
        </main>
    );
}