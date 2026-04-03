import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  delay?: number;
}

const ProjectCard = ({ title, description, tags, image, liveUrl, githubUrl, delay = 0 }: ProjectCardProps) => {
  return (
    <div
      className="group bg-glass rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-secondary text-primary font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
            >
              <ExternalLink className="w-3.5 h-3.5" /> Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-3.5 h-3.5" /> Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
