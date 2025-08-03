import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "Indira Gandhi Delhi Technical University for Women",
      period: "2023 - 2027",
      cgpa: "9.36",
      type: "Current"
    },
    {
      degree: "Senior Secondary",
      institution: "Lovely Public Sr. Sec. School, Delhi",
      period: "2023",
      cgpa: "96.8%",
      type: "Completed"
    },
    {
      degree: "Secondary",
      institution: "Lovely Public Sr. Sec. School, Delhi",
      period: "2021",
      cgpa: "98.2%",
      type: "Completed"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Education</h2>
          <p className="text-muted-foreground text-lg">Academic journey and achievements</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-card/60 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold text-foreground">
                        {edu.degree}
                      </CardTitle>
                      <p className="text-muted-foreground font-medium">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  <Badge variant={edu.type === "Current" ? "default" : "secondary"}>
                    {edu.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground">Score: </span>
                    <span className="font-semibold text-primary text-lg">{edu.cgpa}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;