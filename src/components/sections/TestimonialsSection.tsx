
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  text: string;
  name: string;
  position: string;
  image?: string; 
}

const testimonials: Testimonial[] = [
  {
    text: "Working with Pankaj was a great experience. He delivered a clean, responsive website that perfectly matched our requirements.",
    name: "Alex Johnson",
    position: "Project Manager",
  },
  {
    text: "Pankaj is a talented developer who pays attention to detail. His work on our UI design significantly improved our user engagement.",
    name: "Sarah Williams",
    position: "Design Lead",
  },
  {
    text: "I was impressed by Pankaj's problem-solving skills. He found elegant solutions to complex challenges in our project.",
    name: "Michael Chen",
    position: "Tech Entrepreneur",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="section bg-muted/50">
      <div className="container-custom">
        <h2 className="section-title">Testimonials</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Here's what people say about working with me. I strive to deliver quality work that
          meets or exceeds expectations.
        </p>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-background border-border shadow-sm">
                    <CardContent className="pt-8 pb-6">
                      <div className="flex justify-center mb-6">
                        <Quote size={40} className="text-primary opacity-30" />
                      </div>
                      <p className="text-center text-lg font-medium mb-8">
                        "{testimonial.text}"
                      </p>
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-3">
                          {testimonial.image ? (
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="w-full h-full object-cover rounded-full"
                            />
                          ) : (
                            <div className="text-xl font-bold text-primary">
                              {testimonial.name.charAt(0)}
                            </div>
                          )}
                        </div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={goToPrevious}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </Button>
            
            {testimonials.map((_, index) => (
              <Button 
                key={index} 
                variant="ghost" 
                size="icon" 
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full p-0 ${
                  currentIndex === index 
                    ? "bg-primary" 
                    : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={goToNext}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
