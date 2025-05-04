
import { Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Pankaj Bindra</h3>
            <p className="text-muted-foreground mb-4">
              First-year Computer Science and Engineering student with interests in web development and UI/UX design.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-muted-foreground mb-2">Jhajjar, Haryana, India</p>
            <p className="text-muted-foreground mb-2">pankajbindrajjr@gmail.com</p>
            <p className="text-muted-foreground mb-4">+91 7027134902</p>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/pankaj-bindra-3057b1304/" 
                target="_blank" 
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/ipankajbindra" 
                target="_blank" 
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.instagram.com/i_pankajbindra/?__pwa=1" 
                target="_blank" 
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            Made with ❤️ by Pankaj Bindra
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
