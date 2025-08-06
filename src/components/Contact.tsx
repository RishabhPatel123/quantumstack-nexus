import { Mail, MessageCircle, Clock } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
              Ready to 
              <span className="text-transparent bg-clip-text bg-gradient-primary"> Get Started</span>?
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-opensans leading-relaxed">
              Talk directly with the founder. Let's discuss your project and explore how we can bring your vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="animate-fadeInLeft">
              <div className="mb-8">
                <h3 className="text-2xl font-poppins font-semibold text-foreground mb-6">
                  Let's discuss your project
                </h3>
                <p className="text-foreground/80 font-opensans leading-relaxed mb-6">
                  Whether you're a startup looking to build your MVP or an enterprise seeking to modernize your systems, 
                  I'm here to help turn your ideas into reality.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-quantum-cyan/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-quantum-cyan" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-foreground">Email</h4>
                    <p className="text-foreground/80 font-opensans">hello@quantumstack.dev</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-quantum-cyan/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-quantum-cyan" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-foreground">Response Time</h4>
                    <p className="text-foreground/80 font-opensans">Within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-quantum-cyan/10 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-quantum-cyan" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-foreground">Consultation</h4>
                    <p className="text-foreground/80 font-opensans">Free strategy session</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-card border border-border rounded-lg p-6">
                <h4 className="font-poppins font-semibold text-foreground mb-3">
                  What to expect:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-quantum-cyan rounded-full"></div>
                    <span className="text-sm text-foreground/80 font-opensans">Detailed project analysis and recommendations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-quantum-cyan rounded-full"></div>
                    <span className="text-sm text-foreground/80 font-opensans">Technology stack suggestions tailored to your needs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-quantum-cyan rounded-full"></div>
                    <span className="text-sm text-foreground/80 font-opensans">Transparent timeline and pricing discussion</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-quantum-cyan rounded-full"></div>
                    <span className="text-sm text-foreground/80 font-opensans">No obligations, just expert insights</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-lg p-8 shadow-card">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;