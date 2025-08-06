import { Shield, Clock, MessageCircle, Layers, Trophy, Users } from "lucide-react";

const Trust = () => {
  const trustFactors = [
    {
      icon: Shield,
      title: "Clean, Maintainable Code",
      description: "Enterprise-grade code standards with comprehensive documentation and testing"
    },
    {
      icon: Users,
      title: "Long-Term Collaboration",
      description: "Building lasting partnerships, not just delivering projects and disappearing"
    },
    {
      icon: Clock,
      title: "Unmatched Speed",
      description: "Rapid development cycles without compromising on quality or best practices"
    },
    {
      icon: MessageCircle,
      title: "Crystal Clear Communication",
      description: "Regular updates, transparent progress reports, and direct founder access"
    },
    {
      icon: Layers,
      title: "Modern Stack Expertise",
      description: "Always up-to-date with the latest technologies and industry best practices"
    },
    {
      icon: Trophy,
      title: "Proven Track Record",
      description: "Consistent delivery of scalable solutions that grow with your business"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
            Why Brands 
            <span className="text-transparent bg-clip-text bg-gradient-primary"> Trust Us</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-opensans leading-relaxed">
            The foundation of our success is built on reliability, expertise, and unwavering commitment to your goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trustFactors.map((factor, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-card border border-border rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-quantum transition-all duration-300">
                <factor.icon className="w-8 h-8 text-quantum-cyan" />
              </div>
              
              <h3 className="text-xl font-poppins font-semibold text-foreground mb-4">
                {factor.title}
              </h3>
              
              <p className="text-foreground/80 font-opensans leading-relaxed">
                {factor.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-card">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-poppins font-bold text-foreground mb-6">
              Ready to partner with a technology team that delivers?
            </h3>
            <p className="text-lg text-foreground/80 mb-8 font-opensans leading-relaxed">
              Join startups and growing companies who trust QuantumStack for sharp, focused tech delivery. 
              Let's build something exceptional together.
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-foreground/60">
              <div className="text-center">
                <div className="text-3xl font-bold text-quantum-cyan font-poppins">99%</div>
                <div className="text-sm font-opensans">On-Time Delivery</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-quantum-cyan font-poppins">5★</div>
                <div className="text-sm font-opensans">Client Rating</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-quantum-cyan font-poppins">24/7</div>
                <div className="text-sm font-opensans">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;