import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();

  const handleLearnMore = () => {
    toast({
      title: "Learn More",
      description: "More information about our AI platform is coming soon!",
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">AI</span>
              </div>
              <h3 className="text-xl font-bold">AI Crop Yield</h3>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Government-backed AI platform for precise crop yield predictions and sustainable farming solutions.
            </p>
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={handleLearnMore}
            >
              Learn More
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button onClick={() => scrollToSection('hero')} className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Home</button>
              <button onClick={() => scrollToSection('prediction')} className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Predictions</button>
              <button onClick={() => scrollToSection('stats')} className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Analytics</button>
              <button onClick={() => scrollToSection('hero')} className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Resources</button>
              <button onClick={() => scrollToSection('footer')} className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Support</button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <div className="space-y-2">
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Yield Prediction</a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Weather Analytics</a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Market Insights</a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Crop Planning</a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Expert Consultation</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span className="text-primary-foreground/80">1800-123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span className="text-primary-foreground/80">support@aicropprediction.gov.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4" />
                <span className="text-primary-foreground/80">Ministry of Agriculture, New Delhi</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-primary-foreground/80 mb-4 md:mb-0">
            © 2024 Government of India. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Privacy Policy</a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Terms of Service</a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;