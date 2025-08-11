  import { Download, Code, Palette, Zap } from 'lucide-react';
  import { Button } from '@/components/ui/button';
  import { Card } from '@/components/ui/card';

  const About = () => {
    const highlights = [
      {
        icon: <Code className="w-8 h-8 text-primary" />,
        title: "Clean Code",
        description: "Writing maintainable, scalable, and efficient code that follows best practices."
      },
      {
        icon: <Palette className="w-8 h-8 text-accent" />,
        title: "Creative Design",
        description: "Crafting beautiful user interfaces with attention to detail and user experience."
      },
      {
        icon: <Zap className="w-8 h-8 text-primary-glow" />,
        title: "Performance",
        description: "Optimizing applications for speed, accessibility, and seamless user interactions."
      }
    ];

    return (
      <section id="about" className="py-28 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              I'm a passionate developer with expertise in modern web technologies. 
              I love building applications that solve real-world problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-4xl font-semibold mb-4">My Journey</h3>
              <p className="text-foreground/90 leading-relaxed text-lg">
                With over 2 years of experience in web development, I've had the privilege of working 
                with diverse teams and technologies. My journey began with a curiosity for how things 
                work on the web, and it has evolved into a passion for creating exceptional digital experiences.
              </p>
              <p className="text-foreground/90 leading-relaxed text-lg">
                I specialize in React, Bootstrap, Tailwindcss, and modern web frameworks. I'm always 
                eager to learn new technologies and stay up-to-date with industry trends to deliver 
                cutting-edge solutions.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="/Rana Ahmed - Frontend Developer.pdf" target="_blank" rel="noopener noreferrer">
                    <Button className="btn-hero text-base">
                    <Download className="w-4 h-4 mr-2" />
                  Download Resume
                     </Button>
                </a>
                <Button variant="outline" className=" glass border-white/40 text-base">
                  <a href="#projects">View Projects</a>
                </Button>
              </div>
            </div>


            <div className="grid gap-6 ">
              {highlights.map((item, index) => (
                <Card 
                  key={index} 
                  className="card-hover p-6 border-0"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                      <p className="text-foreground/80">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "20+", label: "Projects Completed" },
              { number: "2+", label: "Years Experience" },
              { number: "10+", label: "Happy Clients" },
              { number: "100%", label: "Satisfaction Rate" }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default About;