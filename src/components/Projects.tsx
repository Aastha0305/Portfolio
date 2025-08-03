import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, TrendingUp, Shield, Activity } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "TradeVerse",
      description: "A Designed real-time stock market simulator with an interactive dashboard, real-time tracking of 100+ portfolios, and a dynamic leaderboard ranking 200+ users, simulating real-world trading challenges and logic-heavy backend operations.",
      year: "2025",
      icon: TrendingUp,
      tags: ["React", "Flask", "MySQL"],
      color: "bg-green-500/10 text-green-600",
      link: "https://github.com/Aastha0305/Tradeverse"
    },
    {
      title: "DigiPurse",
      description: "Designed and developed a secure and scalable digital wallet backend supporting 100+ users, with real-time fund transfers, rule-based fraud detection, robust data integrity, and integrated notification services, implemented JWT-based authentication with password hashing via RESTful API best practices.",
      year: "2025",
      icon: Shield,
      tags: ["Node.js", "Express", "MongoDB", "JWT"],
      color: "bg-blue-500/10 text-blue-600",
      link: "https://github.com/Aastha0305/DigiPurse"
    },
    {
      title: "CervixCheck",
      description: "Developed a predictive model achieving 98%+ accuracy, precision, and F1-score for early detection of cervical cancer. Translated medical data into actionable insights using predictive analytics and classification pipelines.",
      year: "2024",
      icon: Activity,
      tags: ["Python", "Scikit-learn", "Pandas", "Google Colab"],
      color: "bg-purple-500/10 text-purple-600",
      link: "https://github.com/Aastha0305/CerviCheckup"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">Innovative solutions and technical implementations</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-xl transition-all duration-300 group bg-card/60 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg ${project.color} group-hover:scale-110 transition-transform`}>
                      <project.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button variant="outline" size="sm" className="w-full group/btn" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    View Project
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;