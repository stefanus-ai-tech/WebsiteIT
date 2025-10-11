import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold hover:text-primary transition-colors">
          S.AI Tech
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollToSection("home")} className="hover:text-primary transition-colors">
            Home
          </button>
          <Link to="/interests" className="hover:text-primary transition-colors">
            Interests
          </Link>
          <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button size="icon" variant="ghost" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button size="icon" variant="ghost" asChild>
              <a href="mailto:contact@saitech.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
          <Button asChild>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              Contact Me
            </a>
          </Button>
        </nav>

        <Button 
          size="icon" 
          variant="ghost" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button 
              onClick={() => scrollToSection("home")} 
              className="text-left hover:text-primary transition-colors"
            >
              Home
            </button>
            <Link 
              to="/interests" 
              className="hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Interests
            </Link>
            <div className="flex items-center gap-2">
              <Button size="icon" variant="ghost" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <a href="mailto:contact@saitech.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <Button asChild className="w-full">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                Contact Me
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
