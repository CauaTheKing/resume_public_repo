
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  HeroSection, 
  ExperienceSection, 
  SkillsSection, 
  EducationSection, 
  ContactSection 
} from '@/components/sections';

const Index = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default Index;
