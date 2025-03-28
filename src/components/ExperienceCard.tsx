
import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, MapPinIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  location?: string;
  description: string[];
  index: number;
  isLastItem?: boolean;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  period,
  location,
  description,
  index,
  isLastItem = false,
}) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      {!isLastItem && (
        <div className="absolute left-6 top-6 w-px h-full bg-gray-200 z-0" />
      )}
      
      {/* Timeline Point */}
      <div className="absolute left-6 top-6 -ml-[9px] h-[18px] w-[18px] rounded-full bg-violet-500 border-4 border-white shadow-sm z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={cn(
          "ml-16 relative mb-10 bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover",
        )}
      >
        <div className="mb-4">
          <span className="badge badge-primary mb-2">
            {period}
          </span>
          <h3 className="heading-sm text-gray-900 mb-1">{title}</h3>
          <p className="text-gray-600 font-medium">{company}</p>
          
          {location && (
            <div className="flex items-center mt-1 text-sm text-gray-500">
              <MapPinIcon size={14} className="mr-1" />
              <span>{location}</span>
            </div>
          )}
        </div>
        
        <ul className="space-y-2 text-gray-700 text-sm">
          {description.map((item, i) => (
            <li key={i} className="relative pl-6">
              <span className="absolute left-0 top-1.5 h-1.5 w-1.5 rounded-full bg-violet-400" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default ExperienceCard;
