import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Calendar, Award, Briefcase } from "lucide-react";

const Experience = () => {
  const achievements = [
    {
      title: "NXP WIT Program",
      organization: "NXP",
      period: "11/2024 - 11/2025",
      description: "Selected as one of 75 students from over 15,000 applicants for the NXP WIT Program Batch III, 2024, focusing on hands-on learning in VLSI and semiconductor design, and gaining industry-ready skills in an immersive program.",
      type: "Achievement",
      icon: Trophy
    },
    {
      title: "DESIS Ascend Educare Program",
      organization: "D. E. Shaw India Private Limited",
      period: "11/2024 - 03/2025",
      description: "Selected as one of the top 0.4% of over 18,000 applicants for a prestigious 6-month program focused on advanced technical topics like DSA, DBMS, GenAI, system design, advanced problem-solving and soft skill development, following a rigorous three-round selection process.",
      type: "Achievement",
      icon: Award
    }
  ];

  const roles = [
    {
      title: "Event Management Team Leader",
      organization: "Microsoft Student Chapter - IGDTUW",
      period: "2024 - present",
      description: "Active member in coordinating and executing tech events, workshops, and seminars. Collaborated in high-ownership roles for planning technical events impacting 300+ students, reflecting cross-team synergy.",
      type: "Leadership",
      icon: Users
    },
    {
      title: "TnP Coordinator",
      organization: "TnP Cell-IGDTUW",
      period: "2024 - present",
      description: "Coordinate the Training and Placement Cell for the CSE-27 batch, overseeing internship and placement processes, organizing career development workshops, and facilitating communication between students and employers.",
      type: "Coordination",
      icon: Briefcase
    }
  ];

  const certificates = [
    {
      title: "Deep Learning",
      organization: "Coursera",
      description: "Gained hands-on experience in building neural network architectures and understanding advanced AI systems.",
      tags: ["Neural Networks", "TensorFlow", "Python"],
      link: "https://drive.google.com/file/d/1feXrnsUQA-Ro3-SWVyHuoJT2VKKH_Zm0/view?pli=1"
    },
    {
      title: "Machine Learning",
      organization: "Coursera",
      description: "Completed a 6-week Summer Internship, implemented ML models using Python, focused on real-world AI applications and pipeline creation.",
      tags: ["Scikit-learn", "Python", "Data Science"],
      link: "https://drive.google.com/file/d/1snY1ztBaASuEFGGRjM79H9woe8j8xto9/view"
    },
    {
      title: "Data Structures in C++",
      organization: "Coding Ninjas",
      description: "Completed a comprehensive AI course from Coding Ninjas, achieving over 90% marks, demonstrating strong problem-solving skills.",
      tags: ["C++", "Algorithms", "Problem Solving"],
      link: "https://certificate.codingninjas.com/view/4f4a2698069e7977"
    }
  ];

  const extracurriculars = [
    {
      title: "Model United Nations (MUN) Conferences",
      period: "2023 - present",
      description: "Participated in 10+ MUNs, contributed to resolutions on global issues through policy debates and negotiations."
    },
    {
      title: "Volleyball Player",
      period: "2023 - present",
      description: "Led my team to multiple tournament victories over the years, contributing to the Volleyball Society of IGDTUW."
    },
    {
      title: "Fashion Society",
      period: "2023 - present",
      description: "Active member of Fashion Society at IGDTUW, organizing fashion shows and honing event planning and teamwork skills."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Experience & Achievements</h2>
          <p className="text-muted-foreground text-lg">Professional experience, leadership roles, and recognitions</p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Achievements</h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-yellow-500/10 text-yellow-600 rounded-lg">
                          <achievement.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-semibold text-foreground">
                            {achievement.title}
                          </CardTitle>
                          <p className="text-muted-foreground font-medium">{achievement.organization}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{achievement.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {achievement.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Roles & Responsibilities */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Roles & Responsibilities</h3>
            <div className="space-y-6">
              {roles.map((role, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-blue-500/10 text-blue-600 rounded-lg">
                          <role.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-semibold text-foreground">
                            {role.title}
                          </CardTitle>
                          <p className="text-muted-foreground font-medium">{role.organization}</p>
                        </div>
                      </div>
                      <Badge variant="outline">{role.period}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {role.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Certificates</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert, index) => (
                <a key={index} href={cert.link} target="_blank" rel="noopener noreferrer" className="block">
                  <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                        {cert.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <CardDescription className="text-xs leading-relaxed">
                        {cert.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-1">
                        {cert.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>

          {/* Extracurriculars */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Extracurricular Activities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {extracurriculars.map((activity, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base font-semibold text-foreground">
                      {activity.title}
                    </CardTitle>
                    <Badge variant="outline" className="w-fit text-xs">{activity.period}</Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {activity.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;