import React from "react";
import { Mail, Linkedin, Github, Heart } from "lucide-react";
import { portfolioData } from "../../data/mock";

const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Mail size={20} />,
      link: `mailto:${personal.email}`,
      label: "Email"
    },
    {
      icon: <Linkedin size={20} />,
      link: personal.linkedin,
      label: "LinkedIn"
    },
    {
      icon: <Github size={20} />,
      link: personal.github,
      label: "GitHub"
    }
  ];

  return (
    <footer className="py-12 bg-page border-t border-border-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="heading-4 text-white mb-2">{personal.name}</h3>
              <p className="body-small text-secondary">
                Frontend Developer & AI/ML Enthusiast
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary-olive rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-page transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-border-light my-8"></div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="body-small text-secondary">
              © {currentYear} {personal.name}. All rights reserved.
            </p>
            
            <p className="body-small text-secondary">
              Building the future with code and creativity
            </p>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6">
            <button 
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              className="caption text-secondary hover:text-white transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="caption text-secondary hover:text-white transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}
              className="caption text-secondary hover:text-white transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="caption text-secondary hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;