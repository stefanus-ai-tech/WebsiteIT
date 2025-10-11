export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">S.AI Tech</h3>
            <p className="text-muted-foreground mb-2">Serrano Tech</p>
            <p className="text-muted-foreground text-sm">
              Bringing ideas to life with Embedded Systems AI,<br />
              Digital Art Integrator, and Software Engineer
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">All Inquiries</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">AI training</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Art Class</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tech Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Content</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">AI Projects</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">UI Designs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">WebDev</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Art Gallery</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2025 Serrano. All rights are reserved.
        </div>
      </div>
    </footer>
  );
};
