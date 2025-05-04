
import { Book, Calendar, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ResumeSection = () => {
  return (
    <section id="resume" className="section">
      <div className="container-custom">
        <h2 className="section-title">Resume & Education</h2>
        
        <Tabs defaultValue="education" className="w-full">
          <TabsList className="grid grid-cols-2 mb-8">
            <TabsTrigger value="education" className="flex items-center gap-2">
              <Book size={18} />
              <span>Education</span>
            </TabsTrigger>
            <TabsTrigger value="experience" className="flex items-center gap-2">
              <Briefcase size={18} />
              <span>Experience</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="education" className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Calendar size={16} />
                  <span className="text-sm">2024 - Present</span>
                </div>
                <CardTitle>B.Tech in Computer Science and Engineering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">Dronacharya College</p>
                <p className="text-muted-foreground mt-2">
                  Currently pursuing a degree in Computer Science and Engineering, focusing on core 
                  programming concepts, data structures, algorithms, and web development.
                </p>
              </CardContent>
            </Card>
            
            {/* Add more education items as Pankaj's career progresses */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Calendar size={16} />
                  <span className="text-sm">2023 - 2024</span>
                </div>
                <CardTitle>Web Development Bootcamp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">Online Learning Platform</p>
                <p className="text-muted-foreground mt-2">
                  Completed an intensive web development bootcamp focusing on front-end development,
                  including HTML, CSS, JavaScript, and modern frameworks.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Calendar size={16} />
                  <span className="text-sm">2022 - 2023</span>
                </div>
                <CardTitle>High School Diploma</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">Senior Secondary School</p>
                <p className="text-muted-foreground mt-2">
                  Completed higher secondary education with a focus on mathematics and computer science,
                  developing a strong foundation for further technical studies.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="experience" className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Calendar size={16} />
                  <span className="text-sm">2024 - Present</span>
                </div>
                <CardTitle>Freelance Web Developer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">Self-employed</p>
                <p className="text-muted-foreground mt-2">
                  Working on various web development projects for clients, implementing responsive designs
                  and developing custom solutions to meet client needs.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Calendar size={16} />
                  <span className="text-sm">2023 - 2024</span>
                </div>
                <CardTitle>Coding Club Member</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">School Coding Club</p>
                <p className="text-muted-foreground mt-2">
                  Actively participated in the school coding club, collaborating on projects and
                  participating in coding competitions and hackathons.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Calendar size={16} />
                  <span className="text-sm">2023</span>
                </div>
                <CardTitle>Web Design Volunteer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">Local Community Organization</p>
                <p className="text-muted-foreground mt-2">
                  Volunteered to design and develop a website for a local community organization,
                  improving their online presence and helping them reach a wider audience.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ResumeSection;
