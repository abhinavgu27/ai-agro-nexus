import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Bell, User, LogOut } from "lucide-react";
import LoginModal from "./LoginModal";
import NotificationModal from "./NotificationModal";
import ProfileModal from "./ProfileModal";

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <header className="bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">AI</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">AI Crop Yield Prediction</h1>
              <p className="text-sm text-muted-foreground">Government Portal</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-primary transition-smooth font-medium">Home</button>
            <button onClick={() => scrollToSection('prediction')} className="text-foreground hover:text-primary transition-smooth font-medium">Predictions</button>
            <button onClick={() => scrollToSection('stats')} className="text-foreground hover:text-primary transition-smooth font-medium">Analytics</button>
            <button onClick={() => scrollToSection('footer')} className="text-foreground hover:text-primary transition-smooth font-medium">Contact</button>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={() => setIsNotificationOpen(true)}
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-accent rounded-full"></span>
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsProfileOpen(true)}
            >
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
            <Button 
              variant="government" 
              size="sm"
              onClick={() => setIsLoginOpen(true)}
            >
              Login
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <NotificationModal isOpen={isNotificationOpen} onClose={() => setIsNotificationOpen(false)} />
      <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </header>
    </>
  );
};

export default Header;