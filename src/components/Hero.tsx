import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import heroWave from '@/assets/output.gif';

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Ref buat nyimpen ID animasi, biar bisa distop
  const animationFrameRef = useRef<number>();
  // Ref buat nandain arah gerak video: 'forward' atau 'backward'
  const directionRef = useRef<'forward' | 'backward'>('forward');

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Range waktu yang mau di-loop
    const startTime = 0.5;
    const endTime = 3.5;

    let lastTime = performance.now();
    const timeStep = 0.025; // Optimized step size

    const animateVideo = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;

      // Update setiap frame tanpa throttling
      if (deltaTime >= 16) {
        // ~60fps minimum
        lastTime = currentTime;

        const currentVideoTime = video.currentTime;

        // Kalo lagi mundur
        if (directionRef.current === 'backward') {
          const newTime = currentVideoTime - timeStep;

          // Kalo bakal lewat batas awal, langsung set ke awal dan flip
          if (newTime <= startTime) {
            video.currentTime = startTime;
            directionRef.current = 'forward';
          } else {
            video.currentTime = newTime;
          }
        }
        // Kalo lagi maju
        else {
          const newTime = currentVideoTime + timeStep;

          // Kalo bakal lewat batas akhir, langsung set ke akhir dan flip
          if (newTime >= endTime) {
            video.currentTime = endTime;
            directionRef.current = 'backward';
          } else {
            video.currentTime = newTime;
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animateVideo);
    };
    const handleLoadedMetadata = () => {
      video.currentTime = startTime;
      animationFrameRef.current = requestAnimationFrame(animateVideo);
    };

    if (video.readyState >= 2) {
      video.currentTime = startTime;
      animationFrameRef.current = requestAnimationFrame(animateVideo);
    } else {
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col overflow-hidden">
      {/* === Text Container === */}
      <div className="relative flex items-start justify-center min-h-[50vh] pt-24 md:pt-40">
        <div className="text-center px-6 sm:p-0 max-w-6xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
            <span className="text-primary inline">Embedded System</span>{' '}
            <span className="text-foreground inline font-shanti">
              Developer
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white font-shanti mb-8">
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
      <div className="h-[50vh] sm:h-[70vh] opacity-70 relative overflow-hidden">
        <img
          src={heroWave}
          className="relative inset-0 w-full h-full object-cover object-top scale-10" // Menambahkan scale dan memastikan bagian bawah terlihat
          style={{ objectPosition: 'left top' }} // Crop ke kanan dan pastikan bagian bawah terlihat
          alt="Hero Wave"
        />
      </div>
    </section>
  );
};
