import React from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Calendar, MapPin, CheckCircle } from "lucide-react";
import { portfolioData } from "../../data/mock";

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 bg-page">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6 text-primary">Work Experience</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
            <p className="body-medium text-secondary max-w-2xl mx-auto">
              Professional experience in frontend development with a focus on 
              performance optimization and user experience enhancement.
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={exp.id} className="p-8 bg-card border-border-medium hover:border-brand-primary transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="lg:flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                      <h3 className="heading-4 text-brand-primary">{exp.title}</h3>
                      <Badge variant="secondary" className="w-fit bg-secondary-olive text-primary">
                        {exp.company}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                      <div className="flex items-center gap-2 text-secondary">
                        <Calendar size={16} />
                        <span className="caption">{exp.duration}</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="heading-6 text-primary mb-3">Key Achievements:</h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-3">
                            <CheckCircle size={16} className="text-brand-primary mt-1 flex-shrink-0" />
                            <span className="body-small text-secondary">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:w-64">
                    <Card className="p-4 bg-page border-border-light">
                      <h5 className="heading-6 text-brand-primary mb-3">Impact Highlights</h5>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="caption text-secondary">Performance Improvement</span>
                          <span className="body-small text-brand-primary font-semibold">20%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="caption text-secondary">User Engagement</span>
                          <span className="body-small text-brand-primary font-semibold">Enhanced</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="caption text-secondary">API Integration</span>
                          <span className="body-small text-brand-primary font-semibold">Seamless</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Current Status */}
          <Card className="mt-12 p-8 bg-secondary-olive border-border-medium">
            <div className="text-center">
              <h3 className="heading-4 text-brand-primary mb-4">Currently Available</h3>
              <p className="body-medium text-primary mb-6">
                Open to new opportunities in frontend development, full-stack roles, 
                and AI/ML projects. Looking for internships and entry-level positions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge variant="outline" className="border-brand-primary text-brand-primary">
                  Frontend Development
                </Badge>
                <Badge variant="outline" className="border-brand-primary text-brand-primary">
                  Full-Stack Projects
                </Badge>
                <Badge variant="outline" className="border-brand-primary text-brand-primary">
                  AI/ML Applications
                </Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;