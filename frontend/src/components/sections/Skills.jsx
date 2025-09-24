import React from "react";
import { Card } from "../ui/card";
import { Code, Brain, Database, Wrench, Users, Lightbulb } from "lucide-react";
import { portfolioData } from "../../data/mock";

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: skills.programming,
      color: "text-brand-primary"
    },
    {
      title: "AI/ML Technologies", 
      icon: <Brain size={24} />,
      skills: skills.aiml,
      color: "text-secondary-yellow"
    },
    {
      title: "Web Development",
      icon: <Wrench size={24} />,
      skills: skills.web,
      color: "text-brand-primary"
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: skills.databases,
      color: "text-secondary-yellow"
    },
    {
      title: "Tools & Platforms",
      icon: <Lightbulb size={24} />,
      skills: skills.tools,
      color: "text-brand-primary"
    },
    {
      title: "Soft Skills",
      icon: <Users size={24} />,
      skills: skills.soft,
      color: "text-secondary-yellow"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6 text-primary">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
            <p className="body-medium text-secondary max-w-2xl mx-auto">
              A comprehensive toolkit spanning programming languages, AI/ML frameworks, 
              web technologies, and essential development tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 bg-page border-border-medium hover:border-brand-primary transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg bg-secondary-olive ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="heading-6 text-primary">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <span className="body-small text-secondary">{skill}</span>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="mt-16">
            <h3 className="heading-4 text-center text-primary mb-8">Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {portfolioData.certifications.map((cert, index) => (
                <Card key={index} className="p-4 bg-page border-border-light">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-white rounded-full flex-shrink-0"></div>
                    <p className="body-small text-primary">{cert}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;