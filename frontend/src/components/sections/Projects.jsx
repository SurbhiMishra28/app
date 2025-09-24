import React, { useState } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Github, ExternalLink, Filter } from "lucide-react";
import { portfolioData } from "../../data/mock";

const Projects = () => {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState("All");
  
  const categories = ["All", "AI/ML", "Full Stack", "Frontend"];
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6 text-primary">Featured Projects</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
            <p className="body-medium text-secondary max-w-2xl mx-auto">
              A showcase of innovative solutions spanning AI/ML applications, 
              full-stack web development, and interactive user interfaces.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                className={activeFilter === category ? "btn-primary" : "btn-secondary"}
                onClick={() => setActiveFilter(category)}
              >
                <Filter size={16} className="mr-2" />
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={project.id} className={`p-6 bg-page border-border-medium hover:border-white transition-all duration-500 hover-lift hover-glow animate-fadeInUp animate-delay-${index * 200 + 100}`}>
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4 animate-slideInDown animate-delay-200">
                    <Badge 
                      variant="secondary" 
                      className="bg-secondary-olive text-primary animate-scaleIn animate-delay-300"
                    >
                      {project.category}
                    </Badge>
                    <div className="flex gap-2 animate-fadeInRight animate-delay-400">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-2 text-secondary hover:text-white hover-scale"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github size={16} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-2 text-secondary hover:text-white hover-scale"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink size={16} />
                      </Button>
                    </div>
                  </div>

                  <h3 className="heading-4 text-white mb-3 animate-fadeInLeft animate-delay-300">{project.title}</h3>
                  
                  <p className="body-small text-secondary mb-6 flex-grow animate-fadeIn animate-delay-400">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div className="animate-fadeInUp animate-delay-500">
                      <h4 className="heading-6 text-primary mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1 bg-secondary-olive text-primary caption rounded-full hover-scale animate-scaleIn animate-delay-${techIndex * 50 + 600}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4 animate-fadeInUp animate-delay-500">
                      <Button
                        variant="outline"
                        size="sm"
                        className="btn-secondary flex-1 hover-lift"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github size={16} className="mr-2" />
                        View Code
                      </Button>
                      <Button
                        size="sm"
                        className="btn-primary flex-1 hover-lift hover-glow"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="p-8 bg-page border-border-medium max-w-2xl mx-auto">
              <h3 className="heading-4 text-white mb-4">More Projects Coming Soon</h3>
              <p className="body-medium text-secondary mb-6">
                I'm constantly working on new projects and learning emerging technologies. 
                Follow my GitHub to stay updated with my latest work.
              </p>
              <Button
                className="btn-primary"
                onClick={() => window.open(portfolioData.personal.github, '_blank')}
              >
                <Github size={16} className="mr-2" />
                Follow on GitHub
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;