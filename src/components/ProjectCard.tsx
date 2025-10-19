import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import neuralNetwork from '@/assets/neural-network.png';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
}

export const ProjectCard = ({ title, description, tags }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden hover:border-primary transition-colors group">
      <div className="relative h-72 bg-muted overflow-hidden">
        <img
          src={neuralNetwork}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          <Button variant="default" size="sm" className="flex-1" asChild>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2">
              <ExternalLink size={16} />
              Live Demo
            </a>
          </Button>
          <Button variant="outline" size="sm" className="flex-1" asChild>
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
      </CardContent>
    </Card>
  );
};
