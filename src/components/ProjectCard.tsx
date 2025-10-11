import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import neuralNetwork from "@/assets/neural-network.png";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
}

export const ProjectCard = ({ title, description, tags }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden hover:border-primary transition-colors group">
      <div className="relative h-48 bg-muted overflow-hidden">
        <img 
          src={neuralNetwork} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">{tag}</Badge>
          ))}
        </div>
        <div className="flex gap-2">
          <Button variant="default" size="sm" className="flex-1">
            Live Demo
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            Source Code
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
