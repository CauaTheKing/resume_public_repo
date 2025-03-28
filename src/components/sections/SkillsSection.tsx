
import React from 'react';
import { Globe, Server, Code, Terminal } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import SkillCard from '@/components/SkillCard';
import "./styles/SkillSection.css"

// Flag components
const UKUSFlag = () => (
  <div className="anglo_flag_image">
    <img src="src/components/imgs/anglo_flaggi_img.png" /*className="anglo_flag_image"*/ width="26" height="18">
    </img>
  </div>
);

const SpainFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 500" width="24" height="24">
    <rect width="750" height="500" fill="#c60b1e"/>
    <rect width="750" height="250" fill="#ffc400" y="125"/>
  </svg>
);

const GermanFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" width="24" height="24">
    <rect width="5" height="3" y="0" x="0" fill="#000"/>
    <rect width="5" height="2" y="1" x="0" fill="#D00"/>
    <rect width="5" height="1" y="2" x="0" fill="#FFCE00"/>
  </svg>
);

const SkillsSection = () => {
  const skillGroups = [
    {
      title: "Desenvolvimento Web",
      icon: <Globe size={24} />,
      years: "9 anos de experiência",
      skills: ["HTML (7 anos)", "CSS (7 anos)", "Javascript (7 anos)", "React JS (4 anos)", "ECMAScript (7 anos)", "Frontend (4 anos)", "PHP (6 anos)"]
    },
    {
      title: "Back-End Development",
      icon: <Server size={24} />,
      years: "7 anos de experiência",
      skills: ["Back-end (7 anos)", "Node.js (5 anos)", ".Net Core (4 anos)", ".Net (5 anos)", "AWS (3 anos)", "Gerenciamento de Banco de Dados (8 anos)"]
    },
    {
      title: "Linguagens de Programação",
      icon: <Code size={24} />,
      years: "Mais de 10 anos",
      skills: ["Python (10+ anos)", "C/C++ (6 anos)", "C# (4 anos)", "JAVA (3 anos)", "C (6 anos)"]
    },
    {
      title: "Game Development",
      icon: <Terminal size={24} />,
      years: "5 anos de experiência",
      skills: ["Game Dev (5 anos)", "Desenvolvimento de Jogos (5 anos)", "Godot & GDScript (5 anos)", "Garantia da qualidade"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="section-container">
        <SectionHeading title="Habilidades & Competências" subtitle="O que eu sei fazer" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {skillGroups.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              skills={skill.skills}
              icon={skill.icon}
              years={skill.years}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16">
          <SectionHeading title="Idiomas" subtitle="Fluências" />
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <SkillCard
              title="Língua Inglesa"
              skills={[]}
              icon={<UKUSFlag />}
              index={0}
              isLanguageCard={true}
              level="Fluente"
            />
            <SkillCard
              title="Língua Espanhola Latinoamericana"
              skills={[]}
              icon={<SpainFlag />}
              index={1}
              isLanguageCard={true}
              level="Nível Intermediário"
            />
            <SkillCard
              title="Língua Alemã"
              skills={[]}
              icon={<GermanFlag />}
              index={2}
              isLanguageCard={true}
              level="Nível Básico"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
