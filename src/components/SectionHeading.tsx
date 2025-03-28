
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
  titleClassName?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  className,
  align = 'center',
  titleClassName,
}) => {
  const textAlign = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={cn(textAlign[align], 'mb-12', className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {subtitle && (
          <span className="inline-block text-sm font-medium text-violet-600 uppercase tracking-wider mb-2">
            {subtitle}
          </span>
        )}
        <h2 className={cn("heading-lg text-gray-900", titleClassName)}>{title}</h2>
        <div className={`h-1 w-12 bg-violet-500 mt-4 rounded-full ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''}`} />
      </motion.div>
    </div>
  );
};

export default SectionHeading;
