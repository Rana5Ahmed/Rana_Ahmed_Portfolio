import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  // const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
      {
      id: 1,
      title: "Browser Extension",
      description: "A modern and responsive Browser Extensions Manager UI, built using React and Vite. It allows users to view, activate, and remove browser extensions from a visually clean interface.",
      image: "/Browser-Extension.png",
      technologies: ["React.js","Tailwind", "Framer Motion"],
      github: "https://github.com/Rana5Ahmed/Browser-Extension",
      demo: "https://rana5ahmed.github.io/Browser-Extension/"
    },
     {
      id: 2,
      title: "Bondi - Bootstrap Landing Page",
      description: "Bondi is a responsive and modern landing page built using HTML5, CSS3, Bootstrap 5, and Font Awesome. It showcases a professional layout suitable for creative services, design agencies, or portfolios.",
      image: "/Bondi.png",
      technologies: ["HTML5", "CSS3", "Bootstrap 5", "Font Awesome"],
      github: "https://github.com/Rana5Ahmed/BootStrap",
      demo: "https://rana5ahmed.github.io/BootStrap/"
    },
    {
      id: 3,
      title: " Conference Ticket Generator",
      description: "A responsive React + Vite app that allows users to generate personalized event tickets for Coding Conf 2025. Built with React, Bootstrap, and React Dropzone.",
      image: "Ticket Generator.png",
      technologies: ["React", "BootStrap","Font Awesome"],
      github: "https://github.com/Rana5Ahmed/Conference-Ticket-Generator",
      demo: "https://rana5ahmed.github.io/Conference-Ticket-Generator/"
    },
    {
      id: 4,
      title: "Interactive Rating Component",
      description: "Interactive rating component built using HTML, CSS, and JavaScript. Users can rate from 1 to 5 and see a thank-you screen once they submit their rating.",
      image: "/Interactive-Rating-Component.png",
      technologies: ["JavaScript","CSS", "Bootstrap"],
      github: "https://github.com/Rana5Ahmed/Interactive-Rating-Component",
      demo: "https://rana5ahmed.github.io/Interactive-Rating-Component/"
    },

    {
      id: 5,
      title: "Age Calculator App",
      description: "A responsive and interactive Age Calculator built with React and styled using CSS. It allows users to input their date of birth and instantly calculates the number of years, months, and days they've lived.",
      image: "/Age Calculator.png",
      technologies: ["React.js", "CSS"],
      github: "https://github.com/Rana5Ahmed/Age-Calculator",
      demo: "https://rana5ahmed.github.io/Age-Calculator/"
    },
      {
      id: 6,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      image: "/Task-Management-App.png",
      technologies: ["React.js", "CSS"],
      github: "https://github.com/Rana5Ahmed/Task-Management-App",
      demo: "https://rana5ahmed.github.io/Task-Management-App/"
    },
  ];


  return (
    <section id="projects" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-2xl text-foreground/80 max-w-3xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </div>

   


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          { projects .map((project, index) => (
            <Card 
              key={project.id} 
              className="card-hover overflow-hidden border-0 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass rounded-full hover:scale-110 transition-all duration-300"
                    >
                      <Github size={16} />
                    </a>
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass rounded-full hover:scale-110 transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs glass rounded-full border border-white/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-foreground/100 text-xl mb-6 ">
            Want to see more of my work?
          </p>
          <a href="https://github.com/Rana5Ahmed">
          <Button className="btn-hero">
            <Github className="w-4 h-4 mr-2" />
            View All on GitHub
          </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;