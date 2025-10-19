import { Button } from '@/components/ui/button';
import heroWave from '@/assets/hero-wave.png';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col overflow-hidden">
      {/* === Text Container === */}
      <div className="relative flex items-start justify-center min-h-[65vh] pt-24 md:pt-40">
        <div className="text-center px-6 sm:p-0 max-w-6xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
            <span className="text-primary inline">Embedded System</span>{' '}
            <span className="text-foreground inline">Developer</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8">
            Your Vision, Actualized
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer">
                Get in Touch
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#projects">Explore My Work</a>
            </Button>
          </div>
        </div>
      </div>

      {/* === HeroWave Container === */}
      <div
        className="h-[70vh] bg-cover bg-[center_top_0%] opacity-70"
        style={{ backgroundImage: `url(${heroWave})` }}
      />
    </section>
  );
};
