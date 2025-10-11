import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-xl font-bold">S.AI Tech</div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#interests" className="hover:text-primary transition-colors">Interests</a>
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
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
          <Button asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </nav>
      </div>
    </header>
  );
};
