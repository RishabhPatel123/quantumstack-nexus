import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/9e18cc67-8a4c-4dd8-9926-293b31e112e4.png" 
            alt="QuantumStack Logo" 
            className="h-8 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-foreground/80 hover:text-quantum-cyan transition-colors font-opensans">
            About
          </a>
          <a href="#services" className="text-foreground/80 hover:text-quantum-cyan transition-colors font-opensans">
            Services
          </a>
          <a href="#portfolio" className="text-foreground/80 hover:text-quantum-cyan transition-colors font-opensans">
            Portfolio
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-quantum-cyan transition-colors font-opensans">
            Contact
          </a>
        </nav>

        <Button variant="quantum" size="lg" className="hidden md:inline-flex">
          Work With Us
        </Button>
      </div>
    </header>
  );
};

export default Header;