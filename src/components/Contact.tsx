import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Send, Facebook, Instagram, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        },
      });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Failed to Send",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/tikaharu-sharma-9a518023b/",
      bgColor: "bg-[#0A66C2]",
      hoverBg: "hover:bg-[#004182]",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/tilak-13",
      bgColor: "bg-[#333333]",
      hoverBg: "hover:bg-[#24292e]",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/tikaharu.sharma",
      bgColor: "bg-[#1877F2]",
      hoverBg: "hover:bg-[#0C63D4]",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/t_haruu13/",
      bgColor: "bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F56040]",
      hoverBg: "hover:scale-110",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:tgaire13@gmail.com",
      bgColor: "bg-accent",
      hoverBg: "hover:bg-accent/80",
    },
  ];

  return (
    <section id="contact" ref={ref} className={`py-20 px-6 fade-in-section ${isVisible ? "is-visible" : ""}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">Get In Touch</h2>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="gradient-card rounded-2xl p-6 shadow-elegant">
                <h3 className="text-xl font-semibold text-white mb-4 text-center">Connect With Me</h3>

                <div className="flex flex-row flex-wrap justify-center items-center gap-4 md:gap-5">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 group"
                    >
                      <div
                        className={`${link.bgColor} p-3 rounded-lg transition-all duration-300 shadow-lg 
                          group-hover:shadow-xl group-hover:scale-110 group-hover:-translate-y-1 
                          group-hover:rotate-3`}
                      >
                        <link.icon className="h-6 w-6 md:h-5 md:w-5 text-white transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <span className="font-medium text-sm md:text-base text-white transition-all duration-300 group-hover:text-accent">
                        {link.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 gradient-card rounded-2xl p-8 shadow-elegant">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/5 border-white/20 text-foreground placeholder:text-white/50 focus:ring-accent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/5 border-white/20 text-foreground placeholder:text-white/50 focus:ring-accent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-white/5 border-white/20 text-foreground placeholder:text-white/50 focus:ring-accent resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-elegant hover:shadow-hover transition-smooth group"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
