import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-0" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm animate-fade-in">
          They/Them • Open to Opportunities
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="text-gradient">Aakash Verma</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto animate-fade-in">
          Process Associate | Data Validation & Content Moderation
        </p>
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-foreground/90 animate-fade-in">
          Specializing in Salesforce CRM, MIS Reporting & Non-Voice Chat Support
        </p>
        
        <div className="flex flex-wrap gap-3 justify-center mb-12 animate-fade-in">
          <Badge variant="outline" className="px-4 py-2">Data Validation</Badge>
          <Badge variant="outline" className="px-4 py-2">CRM Enrichment</Badge>
          <Badge variant="outline" className="px-4 py-2">E-commerce Operations</Badge>
          <Badge variant="outline" className="px-4 py-2">Process Optimization</Badge>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button size="lg" onClick={scrollToProjects} className="group">
            View Projects
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
