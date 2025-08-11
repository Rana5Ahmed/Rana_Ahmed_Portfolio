import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      company: "Freelance",
      position: "Front-end developer",
      period: "Feb 2025 - Present",
      location: "Rmote",
      description: [
        "Develop User Interfaces: Build responsive, user-friendly web interfaces using HTML, CSS, Bootstrap,Tailwind , JavaScript, and React.js.",
        "Client Collaboration: Understand client needs, provide updates, and incorporate feedback to deliver tailored solutions.",
        "Optimize Performance: Ensure websites are fast, accessible, and compatible across browsers.",
      ],
      technologies: ["React", "JavaScript", "Jest", "CSS", "BootStrap"],
    },
    {
      company: "Armstrong",
      position: "Subject Matter Expert in web development",
      period: "Jun 2024 - Jan2025",
      location: "Remote",
      description: [
        "Designed 15+ responsive web development courses (HTML, CSS, JavaScript, React) for 1,000+ students, aligned with Egyptian curriculum & STEM.org standards.",
        "Collaborated with 5 SMEs in agile sprints, achieving 100% course quality.",
        "Updated materials to boost optimization & accessibility by 20%.",
        "Created 50+ coding assessments and mentored 75+ students, improving coding skills by 25%."
      ],
      technologies: ["React", "Vue.js", "BootStrap", "Jest", "Figma"],
      website: "https://armstrongedu.com/"
    },
    {
      company: "3C Online Coding School",
      position: "Junior Web Developer Instructor",
      period: "Jun 2022 - Jan 2023",
      location: "Remote",
      description: [
        "Deliver Engaging Lessons: Teach coding concepts clearly using online platforms and interactive tools.",
        "Develop Curriculum: Create or adapt lesson plans and exercises to match student skill levels.",
        "Support Students: Provide feedback, answer questions, and guide students to achieve learning goals.",
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      website: "https://3cschool.net/"
    }
  ];


  const education = [
    {
      institution: "Faculty of Engineering at Shoubra/ Banha University",
      degree: "Bachelor in Computer Engineering",
      period: "2019 - 2024",
      location: "Shoubra/ Egypt",
      achievements: [
        "Graduated with 3.54 GPA",
        "Vice President of Student Association",
        "Capstone project: video summarization based on object detection "
      ]
    }
  ];

  const certifications = [
    " Challenger Front-End Web Development certificate from MCIT",
    "Professional Front-End Web Development certificate from MCIT",
    "HCIA Security certificate from NTI",
    " Comprehensive Electronic Training Program by NAT"
  ];

  return (
    <section id="experience" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Professional journey and educational background
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-12 text-center">Work Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="card-hover p-8 border-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-2xl font-semibold">{exp.position}</h4>
                     {exp.website? <a 
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-glow transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>: ""}
                     
                    </div>
                    <h5 className="text-xl text-primary mb-3">{exp.company}</h5>
                  </div>
                  
                  <div className="flex flex-col lg:items-end text-foreground/70">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-primary mr-3 mt-1.5">•</span>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs glass rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-12 text-center">Education</h3>
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="card-hover p-8 border-0"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h4 className="text-2xl font-semibold mb-2">{edu.degree}</h4>
                  <h5 className="text-xl text-primary mb-3">{edu.institution}</h5>
                </div>
                
                <div className="flex flex-col lg:items-end text-foreground/70">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2">
                {edu.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="flex items-start">
                    <span className="text-primary mr-3 mt-1.5">•</span>
                    <span className="text-foreground/80">{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-12 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="glass p-6 rounded-xl text-center hover:scale-105 transition-all duration-300 hover:glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="font-medium">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;