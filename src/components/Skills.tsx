import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Database, ShoppingCart, Search, Settings } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: MessageSquare,
      title: "Non-Voice Chat Support & Salesforce CRM",
      description: "Expert in managing 50-60 daily chats with 85-90% CSAT scores"
    },
    {
      icon: Database,
      title: "Excel Reporting & Data Validation",
      description: "Advanced proficiency in MIS reporting and data quality assurance"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Product Listing & Catalog Management",
      description: "Managed 1000+ product listings with precision and accuracy"
    },
    {
      icon: Search,
      title: "Lead Generation & Content Moderation",
      description: "B2B lead generation, CRM enrichment, and AI content moderation"
    },
    {
      icon: Settings,
      title: "Process Improvement & Quality Assurance",
      description: "Continuous optimization and maintaining high quality standards"
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Core <span className="text-gradient">Strengths</span>
        </h2>
        
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          I thrive in roles that demand precision, customer-centric thinking, and continuous process optimization.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card key={index} className="card-hover group">
                <CardContent className="p-6">
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                  <p className="text-muted-foreground text-sm">{skill.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
