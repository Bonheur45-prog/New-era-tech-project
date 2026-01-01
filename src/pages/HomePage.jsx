// pages/Home.jsx
import { HeroSection } from "../sections/Hero";
import { Footer } from "../components/Footer";
import { ServicesSection } from "../sections/ServiceSection";
import { ChooseUs } from "../sections/ChooseUs";
import { PortfolioSection } from '../sections/Portfolio';


export function HomePage() {
  return (
    <>
    <HeroSection />
    <ServicesSection />
    <ChooseUs />
    <PortfolioSection />
    <Footer />
    </>
  );
}
