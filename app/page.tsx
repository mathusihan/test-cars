import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { VehiclesSection } from "@/components/vehicles-section";
import { FeaturesSection } from "@/components/features-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <VehiclesSection />
      <FeaturesSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
