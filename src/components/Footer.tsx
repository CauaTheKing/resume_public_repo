
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <p className="text-xl font-semibold text-gray-900">Resume</p>
            <p className="text-gray-600 mt-1">© 2023 All rights reserved.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex space-x-4"
          >
            <a
              href="#"
              className="text-gray-600 hover:text-violet-600 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-violet-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-violet-600 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="mailto:email@example.com"
              className="text-gray-600 hover:text-violet-600 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 pt-8 border-t border-gray-200 text-center"
        >
          <p className="text-gray-500 text-sm">
            Designed and built with care
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
