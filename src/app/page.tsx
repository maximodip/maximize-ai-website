import {
  HeroSection,
  FeaturesSection,
  ProcessSection,
  FAQSection,
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
      <FAQSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
