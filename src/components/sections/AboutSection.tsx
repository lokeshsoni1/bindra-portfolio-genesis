
import { User, Mail, Phone, MapPin } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section bg-muted/50">
      <div className="container-custom">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">
              First-year Computer Science student with passion for web development
            </h3>
            
            <p className="text-muted-foreground mb-6">
              I'm Pankaj Bindra, a Computer Science and Engineering student at Dronacharya College (2024-present). 
              I'm passionate about creating beautiful, functional websites and applications. 
              My journey in tech has just begun, and I'm excited to learn and grow in this field.
            </p>
            
            <p className="text-muted-foreground mb-6">
              I love solving problems through code and designing user-friendly interfaces. 
              When not coding, you can find me exploring new technologies, working on side projects, 
              or enhancing my skills through online courses.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  <User size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Name</h4>
                  <p className="text-sm text-muted-foreground">Pankaj Bindra</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-sm text-muted-foreground">
                    <a 
                      href="mailto:pankajbindrajjr@gmail.com"
                      className="hover:text-primary transition-colors"
                    >
                      pankajbindrajjr@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-sm text-muted-foreground">
                    <a 
                      href="tel:+917027134902" 
                      className="hover:text-primary transition-colors"
                    >
                      +91 7027134902
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-sm text-muted-foreground">Jhajjar, Haryana, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Abstract decorative elements */}
              <div className="absolute -left-6 -top-6 w-32 h-32 bg-primary/10 rounded-xl -z-10"></div>
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-primary/20 rounded-xl -z-10"></div>
              
              {/* Replace with actual image when available */}
              <div className="w-64 h-72 md:w-80 md:h-96 bg-muted rounded-xl overflow-hidden flex items-center justify-center border border-border">
                <div className="text-6xl font-bold text-primary">PB</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
