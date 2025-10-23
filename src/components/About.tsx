import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const highlights = [
    "50–60 chats daily with 85–90% CSAT score",
    "1000+ product listings managed on Dressinn platform",
    "300 AI-generated images reviewed daily",
    "Expert in B2B lead generation & CRM enrichment",
  ];

  return (
    <section id="about" className="section-padding bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Detail-oriented and performance-driven professional with hands-on experience in data operations, 
          eCommerce, and customer support.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="card-hover">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-primary">Current Role</h3>
              <p className="text-muted-foreground mb-4">
                At <span className="font-semibold text-foreground">SunTec India</span>, I specialize in B2B lead generation, 
                CRM enrichment, cross-platform product matching, academic data validation, content moderation, 
                and live chat support.
              </p>
              <div className="space-y-2">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-primary">Previous Experience</h3>
              <p className="text-muted-foreground mb-4">
                As an <span className="font-semibold text-foreground">E-commerce Executive at eDataIndia</span>, 
                I successfully managed product listings and optimized catalog operations.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Conducted data audits & maintained Excel dashboards</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Collaborated with cross-functional teams</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Ensured catalog accuracy and data integrity</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Process standardization & quality assurance</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
