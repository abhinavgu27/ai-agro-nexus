import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Cpu, BarChart3, Leaf } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-subtle py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBanner} 
          alt="AI Crop Yield Prediction" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Cpu className="h-5 w-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Advanced AI Technology</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Predict Your
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Crop Yields</span>
            <br />with AI Precision
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence to forecast crop yields, optimize farming decisions, 
            and maximize agricultural productivity with government-backed technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="animate-pulse-glow">
              Start Prediction
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              View Demo
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="p-6 bg-background/80 backdrop-blur-sm border-primary/20 hover:shadow-elegant transition-smooth">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Data Analytics</h3>
              <p className="text-muted-foreground">Advanced analytics for informed farming decisions</p>
            </Card>

            <Card className="p-6 bg-background/80 backdrop-blur-sm border-primary/20 hover:shadow-elegant transition-smooth animate-float">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Predictions</h3>
              <p className="text-muted-foreground">Machine learning powered yield forecasting</p>
            </Card>

            <Card className="p-6 bg-background/80 backdrop-blur-sm border-primary/20 hover:shadow-elegant transition-smooth">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Sustainable Farming</h3>
              <p className="text-muted-foreground">Optimize resources for sustainable agriculture</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;