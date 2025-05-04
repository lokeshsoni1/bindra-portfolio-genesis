
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram } from "lucide-react";

const HeroSection = () => {
  // Animation for typing effect
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  const phrases = [
    "Web Developer",
    "UI/UX Designer",
    "CS Student",
    "Problem Solver"
  ];

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (index < currentPhrase.length) {
        setDisplayText(prevText => prevText + currentPhrase[index]);
        setIndex(prevIndex => prevIndex + 1);
      } else {
        // Pause at the end of the phrase
        clearInterval(typingInterval);
        
        // Wait and then start erasing
        setTimeout(() => {
          const erasingInterval = setInterval(() => {
            if (displayText.length > 0) {
              setDisplayText(prevText => prevText.slice(0, -1));
            } else {
              clearInterval(erasingInterval);
              setIndex(0);
              setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
              
              // Start typing the next phrase after a short pause
              setTimeout(() => {
                const newTypingInterval = setInterval(() => {
                  const nextPhrase = phrases[(currentPhraseIndex + 1) % phrases.length];
                  
                  if (index < nextPhrase.length) {
                    setDisplayText(prevText => prevText + nextPhrase[index]);
                    setIndex(prevIndex => prevIndex + 1);
                  } else {
                    clearInterval(newTypingInterval);
                  }
                }, 100);
                
                return () => clearInterval(newTypingInterval);
              }, 500);
            }
          }, 50);
          
          return () => clearInterval(erasingInterval);
        }, 1500);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentPhraseIndex, index, phrases, displayText.length]);

  // Cursor blinking animation
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Animated background */}
      <div className="animated-bg">
        <div 
          className="animated-shape w-96 h-96" 
          style={{ 
            top: "20%", 
            left: "10%",
            animation: "float 20s infinite alternate",
          }}
        />
        <div 
          className="animated-shape w-64 h-64" 
          style={{ 
            bottom: "15%", 
            right: "5%",
            animation: "float 15s infinite alternate-reverse",
          }}
        />
      </div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <p className="text-primary font-medium mb-3">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Pankaj Bindra
            </h1>
            
            <div className="flex items-center h-10 mb-6">
              <span className="text-xl md:text-2xl font-medium">
                I'm a{" "}
                <span className="text-primary font-bold">
                  {displayText}
                </span>
                <span className={`text-primary ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>|</span>
              </span>
            </div>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              First-year Computer Science and Engineering student at Dronacharya College with interests in web development and UI/UX design.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="#contact">Get In Touch</a>
              </Button>
              
              <Button asChild variant="outline">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/pankaj-bindra-3057b1304/" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 bg-muted rounded-full hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/ipankajbindra" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 bg-muted rounded-full hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.instagram.com/i_pankajbindra/?__pwa=1" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 bg-muted rounded-full hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Profile image placeholder with gradient border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-primary/50 to-primary animate-spin-slow"></div>
              <div className="absolute inset-[6px] rounded-full bg-background"></div>
              <div className="absolute inset-[12px] rounded-full bg-muted overflow-hidden">
                {/* Replace with actual image when available */}
                <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-primary">
                  PB
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
