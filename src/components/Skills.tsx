  import { Card } from '@/components/ui/card';

  const Skills = () => {
    const skillCategories = [
      {
        title: "Frontend",
        skills: [
          { name: "HTML5 & CSS3", level: 100 },
          { name: "BootStrap5", level: 85 },
          { name: "Tailwind CSS", level: 80 },      
          { name: "JavaScripts", level: 95 },
          { name: "React", level: 90 },
        ],
        color: "bg-primary"
      },
      {
        title: "Tools & Others",
        skills: [
          { name: "Git", level: 95 },
          { name: "Figma", level: 88 },
          { name: "Jest", level: 85 }
        ],
       color: "bg-accent"
      },
      {
        title: "Soft Skills ",
        skills: [
          { name: "Educational Content Creation", level: 95 },
          { name: "Communication", level: 85 },
          { name: " Team Collaboration", level: 88 },
        ],
         color: "bg-primary-glow"
      }
    ];

    return (
      <section id="skills" className="py-28 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={category.title} 
                className="card-hover p-8 border-0"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h3 className="text-2xl font-semibold mb-8 text-center gradient-text">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-foreground/70 text-sm">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full ${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>



          {/* Technologies Grid */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12">
              Technologies I Work With
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {[
                "React","Jest","Tailwind","BootStrap", "Git", "Figma"
              ].map((tech, index) => (
                <div 
                  key={tech}
                  className="glass p-4 rounded-xl text-center hover:scale-105 transition-all duration-300 hover:glow"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="text-sm font-medium">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Skills;