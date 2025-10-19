import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

interface InterestCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  hasLiveDemo?: boolean;
}

export const InterestCard = ({
  title,
  description,
  tags,
  image,
  hasLiveDemo = true,
}: InterestCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-colors">
      <div className="grid md:grid-cols-2 gap-6 p-6">
        <div className="relative h-64 bg-muted overflow-hidden rounded-lg">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            {hasLiveDemo && (
              <Button variant="default" size="sm" asChild>
                <a
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2">
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </Button>
            )}
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2">
                <Github size={16} />
                Source Code
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
