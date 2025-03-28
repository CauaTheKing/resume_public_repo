
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  index: number;
  years?: string;
  isLanguageCard?: boolean;
  level?: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  title,
  skills,
  icon,
  index,
  years,
  isLanguageCard = false,
  level,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full card-hover",
        isLanguageCard && "text-center"
      )}
    >
      <div className={cn(
        "bg-violet-50 text-violet-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4",
        isLanguageCard && "mx-auto"
      )}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {years && (
        <p className="text-sm text-violet-600 mb-3">{years}</p>
      )}
      {level && (
        <p className="text-gray-600">{level}</p>
      )}
      {!isLanguageCard && skills.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="badge badge-secondary"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default SkillCard;
