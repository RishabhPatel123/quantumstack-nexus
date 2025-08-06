import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import { submitContactForm } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project_type: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await submitContactForm(formData);
      
      if (error) {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success!",
          description: "Your message has been sent. We'll get back to you within 24 hours!",
        });
        setFormData({ name: "", email: "", company: "", project_type: "", message: "" });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-opensans font-medium text-foreground/90 mb-2">
            Name *
          </label>
          <Input 
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your name"
            className="bg-background border-border focus:border-quantum-violet transition-colors"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-opensans font-medium text-foreground/90 mb-2">
            Email *
          </label>
          <Input 
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="your.email@company.com"
            className="bg-background border-border focus:border-quantum-violet transition-colors"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-opensans font-medium text-foreground/90 mb-2">
          Company
        </label>
        <Input 
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          placeholder="Your company name"
          className="bg-background border-border focus:border-quantum-violet transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-opensans font-medium text-foreground/90 mb-2">
          Project Type
        </label>
        <select 
          name="project_type"
          value={formData.project_type}
          onChange={handleInputChange}
          className="w-full h-10 px-3 rounded-md border border-border bg-background text-foreground focus:border-quantum-violet transition-colors"
        >
          <option value="">Select project type</option>
          <option value="full_stack">Full-Stack Development</option>
          <option value="ai_automation">AI Automation</option>
          <option value="saas_mvp">SaaS MVP Development</option>
          <option value="custom_dashboard">Custom Dashboard</option>
          <option value="workflow_optimization">Workflow Optimization</option>
          <option value="api_integration">API Integration</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-opensans font-medium text-foreground/90 mb-2">
          Project Details *
        </label>
        <Textarea 
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
          rows={5}
          className="bg-background border-border focus:border-quantum-violet transition-colors resize-none"
          required
        />
      </div>

      <Button 
        type="submit" 
        size="lg" 
        disabled={isSubmitting}
        className="w-full bg-gradient-primary text-background hover:shadow-quantum"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        <ArrowRight className="ml-2 w-5 h-5" />
      </Button>

      <p className="text-xs text-foreground/60 text-center font-opensans">
        By submitting this form, you agree to receive project-related communications. 
        Your information is never shared with third parties.
      </p>
    </form>
  );
};

export default ContactForm;