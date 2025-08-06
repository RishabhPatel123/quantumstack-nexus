import { Globe, Cog, Code2, Database, Palette, Headphones } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "End-to-end Web App Development",
      description: "Full-stack applications built with modern frameworks, optimized for performance and scalability.",
      features: ["React/Next.js Frontend", "Node.js/Python Backend", "Database Design", "Cloud Deployment"]
    },
    {
      icon: Cog,
      title: "Automation & Backend Workflows",
      description: "Streamline your operations with intelligent automation and robust backend systems.",
      features: ["Process Automation", "Workflow Optimization", "Integration Solutions", "Monitoring Systems"]
    },
    {
      icon: Code2,
      title: "Custom Python/Java Solutions",
      description: "Tailored software solutions using enterprise-grade languages for complex business logic.",
      features: ["Custom Applications", "Data Processing", "Algorithm Implementation", "System Integration"]
    },
    {
      icon: Database,
      title: "Scalable API Systems",
      description: "RESTful and GraphQL APIs designed to grow with your business and handle enterprise loads.",
      features: ["API Architecture", "Documentation", "Rate Limiting", "Security Implementation"]
    },
    {
      icon: Palette,
      title: "Clean UI/UX Execution",
      description: "User-centered design that combines aesthetic appeal with functional excellence.",
      features: ["Modern Design Systems", "Responsive Layouts", "Performance Optimization", "Accessibility Standards"]
    },
    {
      icon: Headphones,
      title: "Long-Term Tech Support",
      description: "Ongoing maintenance, updates, and strategic technology guidance for sustained success.",
      features: ["24/7 Monitoring", "Regular Updates", "Performance Optimization", "Strategic Consulting"]
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
                <service.icon className="w-12 h-12 text-quantum-cyan group-hover:animate-glow" />
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
                    <div className="w-1.5 h-1.5 bg-quantum-cyan rounded-full"></div>
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