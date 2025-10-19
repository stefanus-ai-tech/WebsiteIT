export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div  className="ml-10">
            <h3 className="text-3xl md:text-2xl font-bold mb-4">S.AI Tech</h3>
            <p className="text-muted-foreground mb-2">
              Stefanus<span className="text-red-500">AI</span>Tech
            </p>
            <p className="text-muted-foreground text-sm">
              Building reliable, intelligent, and secure solutions by <br />
              integrating Embedded Systems, AI Engineering, <br />{" "}
              Cybersecurity, and Web Development expertise
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Embedded System
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  AI Engineering
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Cyber Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Web Development
                </a>
              </li>
            </ul>
          </div>

          <div className="ml-80">
            <h4 className="font-semibold mb-4">Content</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  AI Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  UI Designs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  WebDev
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Art Gallery
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2025 StefanusAITech. All rights are reserved.
        </div>
      </div>
    </footer>
  );
};
