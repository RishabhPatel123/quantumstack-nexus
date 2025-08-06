import { Globe, Cog, Code2, Database, Palette, Headphones } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Full-Stack Development",
      description: "End-to-end web applications built with modern frameworks, optimized for performance and scalability.",
      features: ["React/Next.js Frontend", "Node.js/Python Backend", "Database Design", "Cloud Deployment"]
    },
    {
      icon: Cog,
      title: "AI Automation",
      description: "Intelligent automation solutions that streamline operations and enhance productivity.",
      features: ["Machine Learning Integration", "Process Automation", "AI-Powered Analytics", "Workflow Optimization"]
    },
    {
      icon: Code2,
      title: "SaaS MVP Development",
      description: "Rapid development of minimum viable products for SaaS platforms and startups.",
      features: ["MVP Strategy", "User Authentication", "Payment Integration", "Scalable Architecture"]
    },
    {
      icon: Database,
      title: "Custom Dashboards",
      description: "Business intelligence dashboards with real-time analytics and data visualization.",
      features: ["Data Visualization", "Real-time Analytics", "Custom Reports", "KPI Tracking"]
    },
    {
      icon: Palette,
      title: "Workflow Optimization",
      description: "Streamline business processes with custom workflow solutions and integrations.",
      features: ["Process Analysis", "Integration Solutions", "Performance Monitoring", "System Optimization"]
    },
    {
      icon: Headphones,
      title: "API Integration",
      description: "Seamless integration of third-party APIs and development of custom API solutions.",
      features: ["Third-party APIs", "Custom API Development", "Documentation", "Security Implementation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
            Our 
            <span className="text-transparent bg-clip-text bg-gradient-primary"> Capabilities</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-opensans leading-relaxed">
            Comprehensive technology solutions that scale with your business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-8 shadow-card hover:shadow-quantum transition-all duration-300 hover:scale-105 group"
            >
              <div className="mb-6">
                <service.icon className="w-12 h-12 text-quantum-violet group-hover:animate-glow" />
              </div>
              
              <h3 className="text-xl font-poppins font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-foreground/80 mb-6 font-opensans leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-quantum-violet rounded-full"></div>
                    <span className="text-sm text-foreground/70 font-opensans">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;