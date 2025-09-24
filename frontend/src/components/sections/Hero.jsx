import React from "react";
import { Button } from "../ui/button";
import { ArrowDown, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { portfolioData } from "../../data/mock";

const Hero = () => {
  const { personal } = portfolioData;

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fadeIn">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-6 hover-glow animate-float">
              <img 
                src={personal.profileImage} 
                alt={personal.name}
                className="w-full h-full object-cover hover-scale"
              />
            </div>
          </div>
          
          <h1 className="hero-title mb-6 animate-fadeInUp">
            {personal.name}
          </h1>
          
          <div className="body-large mb-8 max-w-2xl mx-auto animate-fadeInUp animate-delay-200">
            {personal.title}
          </div>
          
          <p className="body-medium text-secondary mb-12 max-w-3xl mx-auto animate-fadeInUp animate-delay-300">
            {personal.bio}
          </p>

          {/* Contact Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeInUp animate-delay-400">
            <div className="flex items-center gap-2 text-secondary hover-lift">
              <MapPin size={16} />
              <span className="caption">{personal.location}</span>
            </div>
            <a 
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 text-secondary hover:text-white transition-all duration-300 hover-lift"
            >
              <Mail size={16} />
              <span className="caption">{personal.email}</span>
            </a>
            <a 
              href={`tel:${personal.phone}`}
              className="flex items-center gap-2 text-secondary hover:text-white transition-all duration-300 hover-lift"
            >
              <Phone size={16} />
              <span className="caption">{personal.phone}</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12 animate-fadeInUp animate-delay-500">
            <Button
              variant="outline"
              size="sm"
              className="btn-secondary hover-lift"
              onClick={() => window.open(personal.linkedin, '_blank')}
            >
              <Linkedin size={16} className="mr-2" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="btn-secondary hover-lift"
              onClick={() => window.open(personal.github, '_blank')}
            >
              <Github size={16} className="mr-2" />
              GitHub
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-scaleIn animate-delay-500">
            <Button 
              className="btn-primary hover-lift hover-glow"
              onClick={scrollToProjects}
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              className="btn-secondary hover-lift"
              onClick={scrollToContact}
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center animate-pulse">
            <Button
              variant="ghost"
              size="sm"
              className="text-secondary hover:text-white animate-bounce hover-lift"
              onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
            >
              <ArrowDown size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;