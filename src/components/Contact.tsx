import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm passionate about delivering measurable results and maintaining high standards of quality. 
          Open to new opportunities in data operations, analytics, and automation.
        </p>

        <Card className="card-hover">
          <CardContent className="p-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="w-full sm:w-auto group">
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Email Me
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto group">
                <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                LinkedIn Profile
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto group">
                <FileText className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-sm text-muted-foreground">
          <p>🔧 Process Improvement • 📊 Data Quality • 🎯 Customer Success</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
