import { CheckCircle, Target, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
              Meet 
              <span className="text-transparent bg-clip-text bg-gradient-primary"> QuantumStack</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-opensans leading-relaxed">
              A fast, highly skilled tech consulting firm that operates with enterprise-level systems 
              and startup agility. Solo-led by a founder who's dedicated to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fadeInLeft">
              <h3 className="text-2xl font-poppins font-semibold text-foreground mb-6">
                Agency-Level Systems, Personal Dedication
              </h3>
              <p className="text-foreground/80 mb-6 font-opensans leading-relaxed">
                Being solo-led isn't a limitation—it's our competitive advantage. You get direct access 
                to senior-level expertise without the overhead and communication gaps of large agencies.
              </p>
              <p className="text-foreground/80 mb-8 font-opensans leading-relaxed">
                Every project receives focused attention from someone who understands both the technical 
                complexities and business implications of your requirements.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-quantum-cyan flex-shrink-0" />
                  <span className="text-foreground/80 font-opensans">Direct founder involvement in every project</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-quantum-cyan flex-shrink-0" />
                  <span className="text-foreground/80 font-opensans">Enterprise-grade processes and quality standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-quantum-cyan flex-shrink-0" />
                  <span className="text-foreground/80 font-opensans">Agile methodology with transparent communication</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
                <Target className="w-8 h-8 text-quantum-cyan mx-auto mb-4" />
                <h4 className="font-poppins font-semibold text-foreground mb-2">Precision</h4>
                <p className="text-sm text-foreground/70 font-opensans">
                  Every line of code serves a purpose
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
                <Zap className="w-8 h-8 text-quantum-cyan mx-auto mb-4" />
                <h4 className="font-poppins font-semibold text-foreground mb-2">Speed</h4>
                <p className="text-sm text-foreground/70 font-opensans">
                  Fast delivery without compromising quality
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
                <Users className="w-8 h-8 text-quantum-cyan mx-auto mb-4" />
                <h4 className="font-poppins font-semibold text-foreground mb-2">Partnership</h4>
                <p className="text-sm text-foreground/70 font-opensans">
                  Long-term collaboration, not just delivery
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
                <CheckCircle className="w-8 h-8 text-quantum-cyan mx-auto mb-4" />
                <h4 className="font-poppins font-semibold text-foreground mb-2">Reliability</h4>
                <p className="text-sm text-foreground/70 font-opensans">
                  Consistent results you can count on
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;