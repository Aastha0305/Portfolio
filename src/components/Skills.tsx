import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Wrench, Users, MessageSquare } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C", "C++", "Python", "Java"],
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      title: "Web Development",
      icon: Code,
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Flask"],
      color: "bg-green-500/10 text-green-600"
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["Git/GitHub", "Jupyter Notebook", "Linux", "VertexAI", "Pandas", "Matplotlib", "TensorFlow", "Keras"],
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      title: "Database & Systems",
      icon: Wrench,
      skills: ["OOP", "DBMS", "SQL", "MongoDB", "REST APIs", "JWT", "DSA", "OS", "CN", "COA", "System Design"],
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Ownership mindset", "Self-driven", "Problem-Solving", "Team Collaboration", "Time Management", "Continuous Learning", "Adaptability"],
      color: "bg-pink-500/10 text-pink-600"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg">Technical and soft skills acquired through learning and practice</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg ${category.color}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;