
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import ExperienceCard from '@/components/ExperienceCard';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Programador",
      company: "RealMakerStudios",
      period: "2023 - 2025",
      description: [
        "Trabalho na Startup RealMakerStudio como Game Developer e Progamador de seus jogos desde 2023.",
        "Tenho experiência com linguagens como C, C++, C#, Java, Python, JS, dentre outras desde 2015."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="section-container">
        <SectionHeading title="Experiência Profissional" subtitle="Minha Jornada Profissional" />
        
        <div className="mt-12">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              index={index}
              isLastItem={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
