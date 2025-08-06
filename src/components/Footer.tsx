import { Github, Linkedin, Mail, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-quantum-darker border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/9e18cc67-8a4c-4dd8-9926-293b31e112e4.png" 
                alt="QuantumStack Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-foreground/80 mb-6 font-opensans leading-relaxed max-w-md">
              High-performance software solutions for startups and enterprises. 
              Code that performs, results that scale.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 bg-quantum-gray/30 rounded-lg flex items-center justify-center text-foreground/60 hover:text-quantum-cyan hover:bg-quantum-cyan/10 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-quantum-gray/30 rounded-lg flex items-center justify-center text-foreground/60 hover:text-quantum-cyan hover:bg-quantum-cyan/10 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:hello@quantumstack.dev" className="w-10 h-10 bg-quantum-gray/30 rounded-lg flex items-center justify-center text-foreground/60 hover:text-quantum-cyan hover:bg-quantum-cyan/10 transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-poppins font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-foreground/70 hover:text-quantum-cyan transition-colors font-opensans text-sm">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-quantum-cyan transition-colors font-opensans text-sm">
                  API Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-quantum-cyan transition-colors font-opensans text-sm">
                  Automation
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-quantum-cyan transition-colors font-opensans text-sm">
                  Custom Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-quantum-cyan transition-colors font-opensans text-sm">
                  Tech Support
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-poppins font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-foreground/70 hover:text-quantum-cyan transition-colors font-opensans text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-foreground/70 hover:text-quantum-cyan transition-colors font-opensans text-sm">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-quantum-cyan transition-colors font-opensans text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-quantum-cyan transition-colors font-opensans text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-quantum-cyan transition-colors font-opensans text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 text-foreground/60 font-opensans text-sm">
            <Code className="w-4 h-4" />
            <span>© 2024 QuantumStack. All rights reserved.</span>
          </div>
          <div className="text-foreground/60 font-opensans text-sm mt-4 md:mt-0">
            Built with precision. Powered by innovation.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;