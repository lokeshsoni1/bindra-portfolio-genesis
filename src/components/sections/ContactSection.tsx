
import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Form validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Error",
        description: "Please fill out all required fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "Your message has been sent. I'll get back to you soon!",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-muted/50">
      <div className="container-custom">
        <h2 className="section-title">Contact Me</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Have a question or want to work together? Feel free to reach out using the form below
          or contact me directly.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-muted-foreground mb-1">Feel free to email me anytime!</p>
                  <a 
                    href="mailto:pankajbindrajjr@gmail.com" 
                    className="text-primary hover:underline"
                  >
                    pankajbindrajjr@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p className="text-muted-foreground mb-1">Call me during business hours</p>
                  <a 
                    href="tel:+917027134902" 
                    className="text-primary hover:underline"
                  >
                    +91 7027134902
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Location</h3>
                  <p className="text-muted-foreground mb-1">Based in</p>
                  <p>Jhajjar, Haryana, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-medium mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/pankaj-bindra-3057b1304/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a 
                  href="https://github.com/ipankajbindra" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"></path></svg>
                </a>
                <a 
                  href="https://www.instagram.com/i_pankajbindra/?__pwa=1" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-background p-6 rounded-lg shadow-sm border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name <span className="text-destructive">*</span>
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email <span className="text-destructive">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="How can I help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message <span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message"
                  rows={6}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full flex items-center gap-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
