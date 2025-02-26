import { FeaturesGrid } from "@/components/Features-grid";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { ProfessorsSection } from "@/components/ProfessorsSection";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <FeaturesGrid />
        <ProfessorsSection />
      </main>
      <Footer />
    </div>
  );
}
