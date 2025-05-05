
import { useRef, useEffect, useState } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { Star, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Skill {
  name: string;
  percentage: number;
  category: "frontend" | "backend" | "design" | "other";
  icon?: JSX.Element;
}

const skills: Skill[] = [
  { name: "HTML5", percentage: 85, category: "frontend", icon: <Code size={22} /> },
  { name: "CSS3", percentage: 80, category: "frontend", icon: <Code size={22} /> },
  { name: "JavaScript", percentage: 75, category: "frontend", icon: <Code size={22} /> },
  { name: "React", percentage: 70, category: "frontend", icon: <Code size={22} /> },
  { name: "TypeScript", percentage: 65, category: "frontend", icon: <Code size={22} /> },
  { name: "Python", percentage: 80, category: "backend", icon: <Code size={22} /> },
  { name: "Node.js", percentage: 60, category: "backend", icon: <Code size={22} /> },
  { name: "UI/UX Design", percentage: 75, category: "design", icon: <Star size={22} /> },
  { name: "Git", percentage: 70, category: "other", icon: <Code size={22} /> },
  { name: "Problem Solving", percentage: 85, category: "other", icon: <Star size={22} /> },
];

const SkillsSection = () => {
  const [visibleSkills, setVisibleSkills] = useState<{ [key: string]: boolean }>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<"all" | "frontend" | "backend" | "design" | "other">("all");
  
  const filteredSkills = filter === "all" 
    ? skills 
    : skills.filter(skill => skill.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            const updatedVisibleSkills = skills.reduce((acc, skill) => {
              acc[skill.name] = true;
              return acc;
            }, {} as { [key: string]: boolean });
            
            setVisibleSkills(updatedVisibleSkills);
          }, 300);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <div className="container-custom">
        <h2 className="section-title">Skills</h2>
        
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-sm ${
              filter === "all" 
                ? "bg-primary text-primary-foreground" 
                : "bg-muted text-foreground hover:bg-muted/80"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("frontend")}
            className={`px-4 py-2 rounded-full text-sm ${
              filter === "frontend" 
                ? "bg-primary text-primary-foreground" 
                : "bg-muted text-foreground hover:bg-muted/80"
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setFilter("backend")}
            className={`px-4 py-2 rounded-full text-sm ${
              filter === "backend" 
                ? "bg-primary text-primary-foreground" 
                : "bg-muted text-foreground hover:bg-muted/80"
            }`}
          >
            Backend
          </button>
          <button
            onClick={() => setFilter("design")}
            className={`px-4 py-2 rounded-full text-sm ${
              filter === "design" 
                ? "bg-primary text-primary-foreground" 
                : "bg-muted text-foreground hover:bg-muted/80"
            }`}
          >
            Design
          </button>
          <button
            onClick={() => setFilter("other")}
            className={`px-4 py-2 rounded-full text-sm ${
              filter === "other" 
                ? "bg-primary text-primary-foreground" 
                : "bg-muted text-foreground hover:bg-muted/80"
            }`}
          >
            Other
          </button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill) => (
            <HoverCard key={skill.name} openDelay={200} closeDelay={100}>
              <HoverCardTrigger asChild>
                <div 
                  className="bg-card hover:bg-card/90 border rounded-lg p-4 text-center transition-all 
                  hover:-translate-y-1 hover:shadow-md animate-fade-in flex flex-col items-center justify-center
                  aspect-square cursor-pointer"
                >
                  <div className="mb-2 text-primary">
                    {skill.icon}
                  </div>
                  <h3 className="font-medium text-sm">{skill.name}</h3>
                  <Badge 
                    variant="secondary" 
                    className="mt-2 text-xs text-muted-foreground"
                  >
                    {skill.category}
                  </Badge>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-full max-w-md p-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">{skill.name}</h4>
                    <span className="text-primary font-medium">{skill.percentage}%</span>
                  </div>
                  <Progress 
                    value={skill.percentage} 
                    className="h-2" 
                    aria-label={`${skill.name} proficiency: ${skill.percentage}%`}
                  />
                  <p className="text-sm text-muted-foreground pt-2">
                    {getSkillDescription(skill.name)}
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper function to get skill descriptions
function getSkillDescription(skillName: string): string {
  const descriptions: Record<string, string> = {
    "HTML5": "Proficient in semantic HTML5 markup with accessibility considerations.",
    "CSS3": "Strong understanding of CSS3 including animations, flexbox, and grid layouts.",
    "JavaScript": "Solid JavaScript skills with ES6+ features and DOM manipulation.",
    "React": "Experience building reusable components and managing state in React applications.",
    "TypeScript": "Developing type-safe applications with TypeScript interfaces and types.",
    "Python": "Python programming for automation, data processing, and backend development.",
    "Node.js": "Working with server-side JavaScript using Node.js and Express.",
    "UI/UX Design": "Creating responsive, intuitive, and accessible user interfaces.",
    "Git": "Version control with Git including branching, merging, and resolving conflicts.",
    "Problem Solving": "Analytical approach to breaking down complex problems into manageable solutions."
  };
  
  return descriptions[skillName] || "Skilled in various aspects of this technology.";
}

export default SkillsSection;
