
import { useRef, useEffect, useState } from "react";
import { Star } from "lucide-react";

interface Skill {
  name: string;
  percentage: number;
  category: "frontend" | "backend" | "design" | "other";
}

const skills: Skill[] = [
  { name: "HTML5", percentage: 85, category: "frontend" },
  { name: "CSS3", percentage: 80, category: "frontend" },
  { name: "JavaScript", percentage: 75, category: "frontend" },
  { name: "React", percentage: 70, category: "frontend" },
  { name: "TypeScript", percentage: 65, category: "frontend" },
  { name: "Python", percentage: 80, category: "backend" },
  { name: "Node.js", percentage: 60, category: "backend" },
  { name: "UI/UX Design", percentage: 75, category: "design" },
  { name: "Git", percentage: 70, category: "other" },
  { name: "Problem Solving", percentage: 85, category: "other" },
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="animate-fade-in">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <Star size={16} className="text-primary" />
                  <h3 className="font-medium">{skill.name}</h3>
                </div>
                <span className="text-primary font-medium">{skill.percentage}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ 
                    width: visibleSkills[skill.name] ? `${skill.percentage}%` : '0%',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
