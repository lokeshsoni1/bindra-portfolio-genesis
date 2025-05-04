
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Python Calculator",
    description: "A calculator application built with Python, featuring basic arithmetic operations and a clean UI.",
    tags: ["Python", "GUI", "Desktop App"],
    github: "https://github.com/lokeshsoni1/python_calculator",
    demo: "https://lokeshsoni1.github.io/python_calculator/",
    image: "/placeholder.svg",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects, skills, and experience. Built with React and Tailwind CSS.",
    tags: ["React", "TypeScript", "Tailwind"],
    github: "#",
    image: "/placeholder.svg",
  },
  {
    title: "Milk Planner",
    description: "An application to help manage and schedule milk deliveries efficiently.",
    tags: ["Planning", "Management", "Organization"],
    github: "https://github.com/lokeshsoni1/milk_planner",
    demo: "https://lokeshsoni1.github.io/milk_planner/",
    image: "/placeholder.svg",
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section bg-muted/50">
      <div className="container-custom">
        <h2 className="section-title">Projects</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Here are some of the projects I've worked on. Each project is a hands-on learning experience that has helped me
          grow as a developer and problem solver.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover group">
              <CardHeader className="p-0 overflow-hidden">
                <div className="h-48 bg-muted relative">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-6xl font-bold opacity-20">Project</div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-80 transition-opacity flex items-center justify-center">
                    <div className="flex gap-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-2 bg-background/20 hover:bg-background/40 rounded-full text-white transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="p-2 bg-background/20 hover:bg-background/40 rounded-full text-white transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <CardTitle className="mb-2">{project.title}</CardTitle>
                <CardDescription className="line-clamp-3">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 pt-0">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium"
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
