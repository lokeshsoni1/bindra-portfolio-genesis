
import { Code, Palette, Layout, LineChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Web Development",
    description: "Custom website development with responsive design, modern technologies, and clean code practices.",
    icon: <Code className="h-10 w-10 text-primary" />,
  },
  {
    title: "UI/UX Design",
    description: "User-centered design solutions with focus on usability, accessibility, and visual appeal.",
    icon: <Palette className="h-10 w-10 text-primary" />,
  },
  {
    title: "Front-end Development",
    description: "Building responsive, interactive user interfaces using modern frameworks and libraries.",
    icon: <Layout className="h-10 w-10 text-primary" />,
  },
  {
    title: "Analytics Implementation",
    description: "Setting up tracking and analytics tools to help you understand user behavior and improve your website.",
    icon: <LineChart className="h-10 w-10 text-primary" />,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section">
      <div className="container-custom">
        <h2 className="section-title">Services</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          I offer a range of services to help you bring your digital projects to life. From concept to execution,
          I'm committed to delivering high-quality solutions that meet your needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:border-primary transition-colors card-hover">
              <CardHeader>
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
