import React from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { portfolioData } from "../../data/mock";

const Education = () => {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="py-24 bg-page">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6 text-primary">Education & Certifications</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
            <p className="body-medium text-secondary max-w-2xl mx-auto">
              Academic excellence combined with industry-relevant certifications 
              to build a strong foundation in computer science and technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Timeline */}
            <div>
              <h3 className="heading-4 text-white mb-8 flex items-center gap-3">
                <GraduationCap size={24} />
                Academic Background
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={edu.id} className="p-6 bg-card border-border-medium hover:border-white transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <h4 className="heading-5 text-primary">{edu.degree}</h4>
                          <Badge variant="outline" className="border-white text-white w-fit">
                            {edu.duration}
                          </Badge>
                        </div>
                        
                        <h5 className="body-medium text-white mb-3">{edu.institution}</h5>
                        
                        <div className="flex items-center gap-4">
                          {edu.cgpa && (
                            <div className="flex items-center gap-2">
                              <Award size={16} className="text-secondary-yellow" />
                              <span className="body-small text-secondary">CGPA: {edu.cgpa}</span>
                            </div>
                          )}
                          {edu.percentage && (
                            <div className="flex items-center gap-2">
                              <Award size={16} className="text-secondary-yellow" />
                              <span className="body-small text-secondary">{edu.percentage}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Academic Highlights */}
              <Card className="mt-8 p-6 bg-secondary-olive border-border-medium">
                <h4 className="heading-5 text-white mb-4">Academic Highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">9.0/10</div>
                    <div className="caption text-primary">Current CGPA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">2026</div>
                    <div className="caption text-primary">Expected Graduation</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="heading-4 text-white mb-8 flex items-center gap-3">
                <Award size={24} />
                Professional Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => {
                  const [title, provider] = cert.split(' - ');
                  return (
                    <Card key={index} className="p-4 bg-card border-border-light hover:border-white transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-secondary-olive rounded-lg flex items-center justify-center flex-shrink-0">
                          <Award size={20} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="body-medium text-primary mb-1">{title}</h4>
                          <p className="caption text-secondary">Issued by {provider}</p>
                        </div>
                        <Badge variant="secondary" className="bg-page text-white">
                          Verified
                        </Badge>
                      </div>
                    </Card>
                  );
                })}
              </div>

              {/* Certification Stats */}
              <Card className="mt-8 p-6 bg-secondary-olive border-border-medium">
                <h4 className="heading-5 text-white mb-4">Certification Portfolio</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="body-small text-primary">Total Certifications</span>
                    <Badge className="bg-white text-page">{certifications.length}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="body-small text-primary">Focus Areas</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <div className="w-3 h-3 bg-secondary-yellow rounded-full"></div>
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-page text-primary caption rounded">AI/ML</span>
                      <span className="px-2 py-1 bg-page text-primary caption rounded">Data Science</span>
                      <span className="px-2 py-1 bg-page text-primary caption rounded">Databases</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;