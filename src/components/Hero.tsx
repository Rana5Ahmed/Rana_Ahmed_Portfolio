import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"/>
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary-glow/20 rounded-full animate-float" style={{ animationDelay: '8s' }} />
      <div className="container mx-auto px-6 text-center relative z-10">
        
        <div className="animate-fade-in-up ">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 mt-12">
            Hi, I'm{' '}<span className="gradient-text"> Rana Ahmed</span></h1>
          
          <h2 className="text-2xl font-semibold md:text-3xl text-foreground/80 mb-8">
            Front-end Developer
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional, and user-centered digital experiences. 
            I bring ideas to life through clean code and thoughtful design.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              onClick={scrollToContact}
              className="btn-hero text-primary-foreground"
              size="lg"> Get In Touch </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToAbout}
              className="glass border-white/30 text-foreground hover:bg-white/100"> Learn More </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-16 ">
            <a 
              href="https://github.com/Rana5Ahmed" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:scale-110 transition-all duration-300 hover:glow"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:scale-110 transition-all duration-300 hover:glow"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:raana.elwakeel@gmail.com"
              className="p-3 glass rounded-full hover:scale-110 transition-all duration-300 hover:glow"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} className="text-foreground/60 hover:text-primary transition-colors">
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;