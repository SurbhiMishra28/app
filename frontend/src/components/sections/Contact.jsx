import React, { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "../../hooks/use-toast";
import { portfolioData } from "../../data/mock";

const Contact = () => {
  const { personal } = portfolioData;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactMethods = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: personal.email,
      link: `mailto:${personal.email}`
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: personal.phone,
      link: `tel:${personal.phone}`
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: personal.location,
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      link: personal.linkedin
    },
    {
      icon: <Github size={20} />,
      label: "GitHub", 
      link: personal.github
    }
  ];

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6 text-primary">Get In Touch</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
            <p className="body-medium text-secondary max-w-2xl mx-auto">
              Ready to collaborate on exciting projects or discuss opportunities? 
              I'd love to hear from you. Let's build something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="heading-4 text-brand-primary mb-8">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="p-4 bg-page border-border-light hover:border-brand-primary transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-secondary-olive rounded-lg flex items-center justify-center text-brand-primary">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="body-medium text-primary mb-1">{method.label}</h4>
                        {method.link ? (
                          <a 
                            href={method.link}
                            className="body-small text-secondary hover:text-brand-primary transition-colors"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="body-small text-secondary">{method.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <h4 className="heading-5 text-brand-primary mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="btn-secondary flex-1"
                    onClick={() => window.open(social.link, '_blank')}
                  >
                    {social.icon}
                    <span className="ml-2">{social.label}</span>
                  </Button>
                ))}
              </div>

              {/* Availability Status */}
              <Card className="mt-8 p-6 bg-secondary-olive border-border-medium">
                <h4 className="heading-5 text-brand-primary mb-4">Current Status</h4>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <span className="body-medium text-primary">Available for Opportunities</span>
                </div>
                <p className="body-small text-secondary">
                  Currently seeking internships and entry-level positions in 
                  frontend development, full-stack roles, and AI/ML projects.
                </p>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="heading-4 text-brand-primary mb-8">Send a Message</h3>
              
              <Card className="p-6 bg-page border-border-medium">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="body-small text-primary mb-2 block">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="bg-card border-border-light focus:border-brand-primary"
                      />
                    </div>
                    <div>
                      <label className="body-small text-primary mb-2 block">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-card border-border-light focus:border-brand-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="body-small text-primary mb-2 block">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="bg-card border-border-light focus:border-brand-primary"
                    />
                  </div>

                  <div>
                    <label className="body-small text-primary mb-2 block">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={6}
                      required
                      className="bg-card border-border-light focus:border-brand-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    <Send size={16} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;