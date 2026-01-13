import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import DiferenciaisSection from "@/components/landing/DiferenciaisSection";
import DepoimentosSection from "@/components/landing/DepoimentosSection";
import FAQSection from "@/components/landing/FAQSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <DiferenciaisSection />
        <DepoimentosSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
