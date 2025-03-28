
import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, GraduationCap } from 'lucide-react';

interface EducationCardProps {
  degree: string;
  institution: string;
  period: string;
  description?: string;
  index: number;
}

export const EducationCard: React.FC<EducationCardProps> = ({
  degree,
  institution,
  period,
  description,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex gap-4 card-hover"
    >
      <div className="bg-violet-50 text-violet-600 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
        <GraduationCap size={24} />
      </div>
      
      <div>
        <span className="badge badge-primary mb-2">
          {period}
        </span>
        <h3 className="text-xl font-semibold mb-1">{degree}</h3>
        <p className="text-gray-600 font-medium">{institution}</p>
        
        {description && (
          <p className="text-gray-700 text-sm mt-2">{description}</p>
        )}
      </div>
    </motion.div>
  );
};

export default EducationCard;
