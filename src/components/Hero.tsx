import { Button } from "@/components/ui/button";
import heroWave from "@/assets/hero-wave.png";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-[center_top_-200%] opacity-70"
        style={{ backgroundImage: `url(${heroWave})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />

      <div className="relative z-15 text-center px-0 max-w-4xl mx-auto -translate-x-6 sm:-translate-x-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 whitespace-nowrap">
          <span className="text-primary inline">Embedded System</span>{" "}
          <span className="text-foreground inline">Developer</span>
        </h1>
        <p className="ml-8 text-2xl md:text-3xl text-white mb-8">
          Your Vision. Actualized
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" asChild>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in Touch
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="#projects">Explore My Work</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
