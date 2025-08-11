import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-row justify-center items-center">

          <div className="flex items-center space-x-12">
            <p className="text-foreground/70 flex items-center">
              Made with <Heart className="w-8 h-8 mx-1 text-red-500" /> by Rana Ahmed
            </p>
            
            <button
              onClick={scrollToTop}
              className="p-3 glass rounded-full hover:scale-110 transition-all duration-300 hover:glow"
              aria-label="Scroll to top"
            >
              <ArrowUp size={28} />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Rana Ahmed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;