// pages/Home.jsx
import { HeroSection } from "../sections/Hero";
import { Footer } from "../components/Footer";
import { UniquenessSection } from "../sections/OurUniqueness";
import { ServicesSection } from "../sections/ServiceSection";
import { ChooseUs } from "../sections/ChooseUs";
import { PortfolioSection } from '../sections/Portfolio';


export function HomePage() {
  return (
    <>
    <HeroSection />
    <ServicesSection />
    <UniquenessSection />
    <ChooseUs />
    <PortfolioSection />
    <Footer />
    </>
  );
}
