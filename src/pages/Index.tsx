import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PredictionForm from "@/components/PredictionForm";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StatsSection />
      <PredictionForm />
      <Footer />
    </div>
  );
};

export default Index;
