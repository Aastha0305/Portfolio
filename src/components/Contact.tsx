import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">Let's connect and explore opportunities together</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg bg-card/60 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-foreground">
                Ready to collaborate?
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                I'm always open to discussing new projects, opportunities, or just having a chat about technology.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                    <div className="p-3 bg-primary/10 text-primary rounded-lg">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">aasthaluthra@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                    <div className="p-3 bg-primary/10 text-primary rounded-lg">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">+91 8595753735</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                    <div className="p-3 bg-primary/10 text-primary rounded-lg">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-sm text-muted-foreground">Delhi, India</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground mb-4">Connect with me</h3>
                  
                  <Button variant="outline" className="w-full justify-start group" asChild>
                    <a href="https://github.com/Aastha0305" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                      GitHub Profile
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start group" asChild>
                    <a href="https://www.linkedin.com/in/aastha-luthra-89657a286" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                      LinkedIn Profile
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;