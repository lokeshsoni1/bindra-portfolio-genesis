
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Python Calculator",
    description: "A feature-rich calculator application built with Python, offering standard and scientific calculation modes with a clean, modern interface.",
    tags: ["Python", "GUI", "Desktop App"],
    github: "https://github.com/lokeshsoni1/python_calculator",
    demo: "https://lokeshsoni1.github.io/python_calculator/",
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio website showcasing my projects, skills, and experience. Built with React, TypeScript, and Tailwind CSS.",
    tags: ["React", "TypeScript", "Tailwind"],
    github: "#",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Milk Planner",
    description: "An application to help manage and schedule milk deliveries efficiently, tracking customer orders and optimizing delivery routes.",
    tags: ["Planning", "Management", "Organization"],
    github: "https://github.com/lokeshsoni1/milk_planner",
    demo: "https://lokeshsoni1.github.io/milk_planner/",
    image: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section bg-muted/50">
      <div className="container-custom">
        <h2 className="section-title">Projects</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Here are some of the projects I've worked on. Each project represents a hands-on learning experience that has helped me
          grow as a developer and problem solver.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover group overflow-hidden border-2 border-border">
              <CardHeader className="p-0 overflow-hidden">
                <div className="h-56 bg-muted relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center">
                    <div className="flex gap-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-3 bg-background/20 hover:bg-background/40 rounded-full text-white transition-colors"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <Github size={20} />
                      </a>
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="p-3 bg-background/20 hover:bg-background/40 rounded-full text-white transition-colors"
                          aria-label={`View live demo of ${project.title}`}
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <CardTitle className="mb-2 group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="line-clamp-3">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 pt-0">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
