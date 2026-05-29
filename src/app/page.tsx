import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhyWorkWithUsSection } from "@/components/sections/WhyWorkWithUsSection";
import { SusaneProfileSection } from "@/components/sections/SusaneProfileSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { SocialChannelsSection } from "@/components/sections/SocialChannelsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactFormSection } from "@/components/sections/ContactFormSection";

export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-[64px]">
        <HeroSection />
        <WhyWorkWithUsSection />
        <SusaneProfileSection />
        <ServicesSection />
        <MethodologySection />
        <TestimonialsSection />
        <SocialChannelsSection />
        <FaqSection />
        <ContactFormSection />
      </main>

      <Footer />
    </>
  );
}
