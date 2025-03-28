
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="about" className="pt-32 pb-16 relative overflow-hidden">
      <div className="section-container">
        <div className="flex md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full " // md:w-1/2 order-2 md:order-1
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold text-violet-600 bg-violet-100 rounded-full mb-3">
              Software &amp; Game Developer
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-violet-600">
              Cauã Souza Costa Prado
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Programador Experiente em Desenvolvimento Web Puro (HTML, CSS &amp; JS), Back-End &amp; Game-Dev
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button className="bg-violet-600 hover:bg-violet-700 text-white">
                Download Resume
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">
                  Contato
                </a>
              </Button>
            </div>
            
            <div className="flex flex-col gap-3 text-gray-600 text-sm">
              <div className="flex items-center">
                <Mail size={14} className="mr-1 text-violet-500" />
                <a href="mailto:CauaSouzaCostaPrado.Contato.Empregos.Path196@SimpleLogin.com" className="hover:text-violet-600 break-all">
                  CauaSouzaCostaPrado.Contato.Empregos.Path196@SimpleLogin.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={14} className="mr-1 text-violet-500" />
                <a href="tel:+5547997215528" className="hover:text-violet-600">
                  (47) 99721-5528
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-violet-100 rounded-full opacity-30 blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-violet-100 rounded-full opacity-30 blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
    </section>
  );
};

export default HeroSection;
