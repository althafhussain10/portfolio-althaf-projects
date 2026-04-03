import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Contact Me</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </div>
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-glass rounded-xl p-5 flex items-start gap-4">
              <Mail className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-semibold text-foreground text-sm">Email</p>
                <p className="text-muted-foreground text-sm">hello@example.com</p>
              </div>
            </div>
            <div className="bg-glass rounded-xl p-5 flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-semibold text-foreground text-sm">Location</p>
                <p className="text-muted-foreground text-sm">Available Worldwide</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-secondary/50 border-border"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-secondary/50 border-border"
            />
            <Textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="bg-secondary/50 border-border"
            />
            <Button type="submit" className="w-full gap-2">
              <Send className="w-4 h-4" /> Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
