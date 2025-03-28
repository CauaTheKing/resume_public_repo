
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import EducationCard from '@/components/EducationCard';

const EducationSection = () => {
  const education = [
    {
      degree: "Ensino Médio",
      institution: "Escola de Ensino Médio Governador Celso Ramos",
      location: "Joinville, SC",
      period: "2021 - 2023",
      description: "Formação completa no Ensino Médio"
    },
    {
      degree: "Ensino Fundamental",
      institution: "E.E.B. Prof João Martins Veras",
      location: "Joinville, SC",
      period: "2015 - 2019",
      description: "Formação completa no Ensino Fundamental"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="section-container">
        <SectionHeading title="Formação Acadêmica" subtitle="Educação" />
        
        <div className="space-y-6 mt-12">
          {education.map((edu, index) => (
            <EducationCard
              key={index}
              degree={edu.degree}
              institution={edu.institution}
              period={edu.period}
              description={edu.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
