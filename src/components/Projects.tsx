import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Image, Building2, BarChart3, Users, Mail, ShoppingBag, GraduationCap, FileText, School } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Image,
      title: "AI Image Moderation",
      company: "Wirestock Data Program",
      description: "Reviewing 300 AI-generated images daily, ensuring strict adherence to prompts and edit instructions. Maintaining quality standards across AI-generated content.",
      achievements: [
        "300 images reviewed per day",
        "Quality assurance for AI-generated content",
        "Rejection criteria: Bad realism, poor layout, AI artifacts, incorrect anatomy"
      ],
      tags: ["AI Moderation", "Quality Control", "Visual Analysis"]
    },
    {
      icon: Building2,
      title: "Strategic Sourcing & U.S. Manufacturing Verification",
      company: "B2B Data Intelligence",
      description: "Verified U.S.-based manufacturers using PNAICS/ONAICS codes, website confirmation, and operational evidence. Mapped company presence across U.S. states.",
      achievements: [
        "Verified manufacturer authenticity",
        "32 records/hour throughput",
        "Strategic sourcing categorization",
        "Compliance tagging for outreach"
      ],
      tags: ["B2B Sourcing", "Data Enrichment", "Compliance"]
    },
    {
      icon: BarChart3,
      title: "Power BI E-commerce Sales Dashboard",
      company: "Project Learning",
      description: "Created an interactive dashboard in Power BI to track and analyze e-commerce sales data with advanced parameters and multiple visualizations.",
      achievements: [
        "Built connections with filters & slicers",
        "Advanced parameters for customization",
        "Multiple visualization types: bar, pie, scatter, line charts, maps"
      ],
      tags: ["Power BI", "Data Visualization", "Analytics"]
    },
    {
      icon: Users,
      title: "Executive Contact Extraction",
      company: "Strategic Role-Based Prospecting",
      description: "Identified key decision-makers (CEO, CMO, Marketing Directors) across organizations for CRM enrichment and targeted outreach.",
      achievements: [
        "LinkedIn-based identification",
        "Email verification via Hunter.io, Snov.io",
        "CRM-ready contact curation"
      ],
      tags: ["Lead Generation", "B2B Prospecting", "LinkedIn"]
    },
    {
      icon: Mail,
      title: "Lead Enrichment & Email Finding",
      company: "Professional Outreach",
      description: "Enhanced contact data for professional outreach by identifying accurate email addresses using names, job titles, and company information.",
      achievements: [
        "Researched and verified professional emails",
        "Applied standard email patterns",
        "Delivered clean, verified contact lists"
      ],
      tags: ["Email Verification", "Data Research", "CRM"]
    },
    {
      icon: ShoppingBag,
      title: "Product Matching – Coverage SOP",
      company: "Walmart vs Amazon",
      description: "Validated and matched product listings between Walmart and Amazon using structured Coverage SOP for accuracy and consistency.",
      achievements: [
        "10-step search process implementation",
        "UPC, model number, product title comparison",
        "Classification: Exact Match, Not Sure, Not Found"
      ],
      tags: ["Product Research", "E-commerce", "Data Validation"]
    },
    {
      icon: GraduationCap,
      title: "User-Submitted Courses Validation",
      company: "Global Education Mapping",
      description: "Validated user-submitted university course data from around the world, ensuring accurate and reliable entries across educational platforms.",
      achievements: [
        "Verified courses across global institutions",
        "Cross-checked using reference dashboards",
        "Cleaned course names and codes",
        "Flagged duplicates and misleading entries"
      ],
      tags: ["Education Data", "QA", "Research"]
    },
    {
      icon: FileText,
      title: "Data Validation SOP",
      company: "Walmart vs Amazon",
      description: "Developed detailed Standard Operating Procedure to validate product listings between Walmart and Amazon for clean, consistent product mapping.",
      achievements: [
        "Match types: Exact, Incorrect, Not Sure",
        "Attribute logic for brand, model, size, color",
        "Excel-based structured format",
        "Edge case handling"
      ],
      tags: ["SOP Development", "Catalog QA", "Process Documentation"]
    },
    {
      icon: School,
      title: "User-Submitted Institutions Validation",
      company: "Global Higher Ed Data Quality",
      description: "Cleaned and verified user-submitted educational institutions worldwide, updating metadata and ensuring data accuracy.",
      achievements: [
        "Institution name verification",
        "Metadata enrichment (name, type, address, population)",
        "Classification: To Add, To Reject, To Merge",
        "Global education system awareness"
      ],
      tags: ["Data Quality", "Web Research", "Education"]
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/50">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          A showcase of my data validation, research, and process optimization work across various domains
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="mb-3 inline-block p-3 bg-primary/10 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">{project.company}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
