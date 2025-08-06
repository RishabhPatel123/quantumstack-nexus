import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Enterprise SaaS Platform",
      category: "Full-Stack Development",
      description: "Scalable multi-tenant platform serving 10k+ users with real-time analytics and automated workflows.",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
      outcomes: ["40% improved efficiency", "99.9% uptime", "500ms avg response time"],
      image: "bg-gradient-to-br from-blue-500/20 to-purple-600/20"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      category: "Data Platform",
      description: "Real-time business intelligence platform with machine learning insights and predictive analytics.",
      technologies: ["Python", "React", "TensorFlow", "PostgreSQL", "Docker"],
      outcomes: ["60% faster insights", "85% accuracy", "Real-time processing"],
      image: "bg-gradient-to-br from-green-500/20 to-teal-600/20"
    },
    {
      title: "E-commerce Automation Suite",
      category: "Process Automation",
      description: "End-to-end automation platform for inventory, orders, and customer communications.",
      technologies: ["Python", "FastAPI", "MongoDB", "Celery", "Stripe API"],
      outcomes: ["90% manual work reduction", "24/7 operation", "Zero-error processing"],
      image: "bg-gradient-to-br from-orange-500/20 to-red-600/20"
    },
    {
      title: "Healthcare Management System",
      category: "Custom Solution",
      description: "HIPAA-compliant patient management system with appointment scheduling and telemedicine integration.",
      technologies: ["React", "Java Spring", "MySQL", "WebRTC", "Kubernetes"],
      outcomes: ["50% admin time saved", "HIPAA compliance", "100% patient satisfaction"],
      image: "bg-gradient-to-br from-cyan-500/20 to-blue-600/20"
    },
    {
      title: "FinTech API Gateway",
      category: "API Development",
      description: "High-performance API gateway handling millions of financial transactions with enterprise security.",
      technologies: ["Java", "Spring Gateway", "Redis", "PostgreSQL", "OAuth 2.0"],
      outcomes: ["1M+ daily requests", "99.99% reliability", "Sub-100ms latency"],
      image: "bg-gradient-to-br from-purple-500/20 to-pink-600/20"
    },
    {
      title: "IoT Monitoring Platform",
      category: "Real-time Systems",
      description: "Industrial IoT platform for monitoring equipment health and predictive maintenance.",
      technologies: ["Python", "InfluxDB", "Grafana", "MQTT", "Machine Learning"],
      outcomes: ["30% maintenance cost reduction", "Real-time monitoring", "Predictive alerts"],
      image: "bg-gradient-to-br from-indigo-500/20 to-purple-600/20"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
            Featured 
            <span className="text-transparent bg-clip-text bg-gradient-primary"> Projects</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-opensans leading-relaxed">
            Real-world solutions that demonstrate our expertise in delivering scalable, high-performance applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg overflow-hidden shadow-card hover:shadow-quantum transition-all duration-300 hover:scale-105 group"
            >
              <div className={`h-48 ${project.image} border-b border-border relative`}>
                <div className="absolute inset-0 bg-quantum-dark/40"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-quantum-cyan/20 text-quantum-cyan px-3 py-1 rounded-full text-sm font-opensans">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                
                <p className="text-foreground/80 mb-4 font-opensans leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-opensans font-semibold text-foreground/90 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-quantum-gray/30 text-foreground/70 px-2 py-1 rounded text-xs font-opensans"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-opensans font-semibold text-foreground/90 mb-2">Key Outcomes:</h4>
                  <ul className="space-y-1">
                    {project.outcomes.map((outcome, outcomeIndex) => (
                      <li key={outcomeIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-quantum-cyan rounded-full flex-shrink-0"></div>
                        <span className="text-xs text-foreground/70 font-opensans">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <Button variant="quantumGhost" size="sm" className="text-xs">
                    View Details
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </Button>
                  <div className="flex space-x-2">
                    <ExternalLink className="w-4 h-4 text-foreground/40 hover:text-quantum-cyan cursor-pointer transition-colors" />
                    <Github className="w-4 h-4 text-foreground/40 hover:text-quantum-cyan cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-foreground/80 mb-6 font-opensans">
            Interested in seeing more detailed case studies and technical deep-dives?
          </p>
          <Button variant="quantumOutline" size="lg">
            View Full Portfolio
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;