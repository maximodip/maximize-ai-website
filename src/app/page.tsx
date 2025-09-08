import {
  HeroSection,
  FeaturesSection,
  ProcessSection,
  AboutSection,
  CTASection,
  Footer,
} from "@/components/sections";

export default function HomePage() {
  return (
    <div className="space-y-24 pb-12 md:pb-16">
      <HeroSection />
      <FeaturesSection />
      <ProcessSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
}
