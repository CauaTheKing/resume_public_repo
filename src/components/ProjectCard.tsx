
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  repoUrl,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 h-full flex flex-col card-hover"
    >
      <div className="relative aspect-video overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-1">{description}</p>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <span key={i} className="badge badge-primary">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <Button 
              size="sm" 
              variant="outline" 
              className="flex-1 flex items-center gap-1"
              asChild
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            </Button>
          )}
          
          {repoUrl && (
            <Button 
              size="sm" 
              variant="outline"
              className="flex-1 flex items-center gap-1"
              asChild
            >
              <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} />
                <span>Code</span>
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
