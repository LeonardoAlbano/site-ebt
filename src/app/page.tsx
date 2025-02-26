import { FeaturesGrid } from "@/components/Features-grid";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { ProfessorsSection } from "@/components/ProfessorsSection";
import { CertificateSection } from "@/components/Certificate-section";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <FeaturesGrid />
        <ProfessorsSection />
        <CertificateSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
