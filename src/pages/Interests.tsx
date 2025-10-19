import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { InterestCard } from '@/components/InterestCard';
import interestHero from '@/assets/interest-hero.png';
import neuralNetwork from '@/assets/neural-network.png';
import sentimentAnalysis from '@/assets/sentiment-analysis.png';
import computerVision from '@/assets/computer-vision.png';

const filters = [
  'All',
  'Embedded System',
  'AI Engineering',
  'Cyber Security',
  'Web Development',
];

const interestProjects = [
  {
    title: 'Neural Network Visualizer',
    description:
      'An interactive tool for visualizing neural network architectures and training processes in real-time.',
    tags: ['Python', 'TensorFlow', 'React'],
    image: neuralNetwork,
    hasLiveDemo: true,
  },
  {
    title: 'Sentiment Analysis API',
    description:
      'A robust API for analyzing sentiment in text using state-of-the-art transformer models.',
    tags: ['NLP', 'BERT', 'FastAPI'],
    image: sentimentAnalysis,
    hasLiveDemo: false,
  },
  {
    title: 'Computer Vision Object Detector',
    description:
      'Real-time object detection system using YOLOv8 with custom dataset training capabilities.',
    tags: ['React', 'YOLOv8', 'Computer Vision'],
    image: computerVision,
    hasLiveDemo: true,
  },
];

const Interests = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-40 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${interestHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3,
          }}
        />
        <div className="container mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
            Creating innovative solution at the intersection of
          </h1>
          <p className="text-2xl md:text-3xl text-center">
            <span className="text-primary">AI Engineering</span>,{' '}
            <span className="text-primary">Cybersecurity</span> and{' '}
            <span className="text-primary">Web Development</span>
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-40 bg-background/50">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? 'default' : 'outline'}
                onClick={() => setActiveFilter(filter)}
                className="rounded-full">
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-40">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Building intelligent systems with machine learning
            </h2>
            <p className="text-xl text-muted-foreground">
              and deep neural networks
            </p>
          </div>

          <div className="space-y-8">
            {interestProjects.map((project, index) => (
              <InterestCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Interests;
