import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-quantum-cyan/5 to-transparent"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-quantum-cyan/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-quantum-cyan/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fadeInUp">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Code className="w-6 h-6 text-quantum-cyan" />
            <span className="text-quantum-cyan font-opensans font-medium tracking-wider">QUANTUMSTACK</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-poppins font-bold text-foreground mb-6 leading-tight">
            Code that 
            <span className="text-transparent bg-clip-text bg-gradient-primary"> Performs</span>.
            <br />
            Results that 
            <span className="text-transparent bg-clip-text bg-gradient-primary"> Scale</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto font-opensans leading-relaxed">
            High-performance software solutions for startups and enterprises. 
            We deliver scalable systems with enterprise-level precision and startup agility.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="quantum" size="xl" className="group">
              Work With Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="quantumOutline" size="xl">
              <Zap className="mr-2 w-5 h-5" />
              See Our Work
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-foreground/60 font-opensans">
            <div className="text-center">
              <div className="text-2xl font-bold text-quantum-cyan">50+</div>
              <div className="text-sm">Projects Delivered</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-quantum-cyan">100%</div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-quantum-cyan">24h</div>
              <div className="text-sm">Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;