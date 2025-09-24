import React from "react";
import { Card } from "../ui/card";
import { portfolioData } from "../../data/mock";

const About = () => {
  const { personal, skills } = portfolioData;

  return (
    <section id="about" className="py-24 bg-page">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">About Me</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="body-medium text-primary mb-6">
                I'm a passionate B.Tech Computer Science student at Guru Gobind Singh Indraprastha University 
                with a strong foundation in web development and artificial intelligence.
              </p>
              
              <p className="body-small text-secondary mb-6">
                Currently maintaining a CGPA of 9.0/10, I have gained hands-on experience as a Frontend Developer 
                Intern at Prodesk, where I improved application performance by 20% through optimized UI components.
              </p>

              <p className="body-small text-secondary mb-8">
                My expertise spans across full-stack development, machine learning, and creating user-centric 
                applications. I'm particularly interested in leveraging AI to solve real-world problems and 
                building scalable web solutions.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="heading-6 text-white mb-3">Education</h4>
                  <p className="caption text-secondary">B.Tech CSE, GGSIPU</p>
                  <p className="caption text-secondary">CGPA: 9.0/10</p>
                </div>
                <div>
                  <h4 className="heading-6 text-white mb-3">Experience</h4>
                  <p className="caption text-secondary">Frontend Developer</p>
                  <p className="caption text-secondary">Prodesk Intern</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-xl border-2 border-white">
                  <img 
                    src={personal.profileImage} 
                    alt={personal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">9.0 CGPA</span>
                </div>
              </div>
            </div>
          </div>

          <Card className="mt-12 p-8 bg-card border-border-medium">
            <h3 className="heading-5 text-white mb-6">Core Competencies</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="heading-6 text-primary mb-3">Technical Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {[...skills.programming, ...skills.web].slice(0, 6).map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-secondary-olive text-primary caption rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="heading-6 text-primary mb-3">AI/ML Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.aiml.slice(0, 4).map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-secondary-olive text-primary caption rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="heading-6 text-primary mb-3">Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-secondary-olive text-primary caption rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;