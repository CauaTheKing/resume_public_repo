
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="section-container">
        <SectionHeading title="Entre em Contato" subtitle="Contato" />
        
        <div className="max-w-2xl mx-auto mt-12">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
