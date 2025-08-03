import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary-glow/5 to-transparent"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Aastha Luthra
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            Computer Science Engineering Student
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate about web development, machine learning, and creating innovative solutions. 
            Currently pursuing B.Tech at Indira Gandhi Delhi Technical University for Women.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="default" size="lg" className="group">
              <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              aasthaluthra@gmail.com
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              8595753735
            </Button>
          </div>
          
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="lg" className="group" asChild>
              <a href="https://github.com/Aastha0305" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                GitHub
              </a>
            </Button>
            <Button variant="ghost" size="lg" className="group" asChild>
              <a href="https://www.linkedin.com/in/aastha-luthra-89657a286" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;