"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageCircle, Send, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:sarthakpersonal755@gmail.com",
    label: "sarthakpersonal755@gmail.com",
    color: "text-red-500 bg-red-500/10 hover:bg-red-500/20",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/sarthakdevta",
    label: "github.com/sarthakdevta",
    color: "text-foreground bg-secondary hover:bg-secondary/80",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sarthak-malviya-ab5528353",
    label: "linkedin.com/in/sarthak-malviya",
    color: "text-blue-600 bg-blue-600/10 hover:bg-blue-600/20",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/919009585458",
    label: "+91 90095 85458",
    color: "text-green-600 bg-green-600/10 hover:bg-green-600/20",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate sending for UX feedback
    setIsSent(true);
    
    // Open Email Client
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.open(`mailto:sarthakpersonal755@gmail.com?subject=${subject}&body=${body}`, "_blank");
    
    // Reset after delay
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let's Work <span className="text-primary">Together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? I'm currently available for freelance work. 
            Fill out the form below or reach out directly via social media.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Contact Form (Span 7) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <Card className="bg-card border-border shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription>
                  I typically respond within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSent ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Opening Email Client...</h3>
                    <p className="text-muted-foreground">Please send the email from your app!</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                        <Input
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="bg-background"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                      <Textarea
                        placeholder="Tell me about your project, timeline, and budget..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="bg-background resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full group">
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column: Social Links & Info (Span 5) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Direct Connections</h3>
              <p className="text-muted-foreground">
                Prefer to chat directly? Connect with me on these platforms.
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300 group"
                >
                  <div className={`p-3 rounded-lg transition-colors ${link.color}`}>
                    <link.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-grow">
                    <p className="font-medium text-lg">{link.name}</p>
                    <p className="text-sm text-muted-foreground truncate">{link.label}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </motion.a>
              ))}
            </div>

            {/* Optional: Quick Stats or Trust Signal */}
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/10 mt-8">
              <h4 className="font-semibold text-primary mb-2">Why Work With Me?</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Fast turnaround times
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Clean, maintainable code
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Post-launch support
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}