import { FeaturesGrid } from "@/components/Features-grid";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { ProfessorsSection } from "@/components/ProfessorsSection";
import { CertificateSection } from "@/components/Certificate-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { PricingSection } from "@/components/pricing-section";
import { AboutSection } from "@/components/about-section";
import { FaqSection } from "@/components/faq-section";
import { MiniCoursesSection } from "@/components/mini-courses-section";
import { BibotalkSection } from "@/components/bibotalk-section";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <FeaturesGrid />
        <ProfessorsSection />
        <CertificateSection />
        <TestimonialsSection />
        <PricingSection />
        <AboutSection />
        <FaqSection />
        <MiniCoursesSection />
        <BibotalkSection />
      </main>
      <Footer />
    </div>
  );
}
