"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// 💡 BUSINESS-FOCUSED PROJECT DATA
// Notice how descriptions now highlight SPEED, MANAGEMENT, or SALES.
const projects = [
  {
    title: "Tokko Society",
    category: "SaaS Platform",
    description: "A comprehensive society management system that streamlines visitor tracking, guard management, and resident communications, reducing manual administrative work by 40%.",
    image: "/projects/tokko-society.jpg",
    techStack: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    liveDemo: "https://www.tokkosociety.com/",
    highlights: ["Real-time Visitor Logs", "Role-Based Access", "Automated Alerts"]
  },
  {
    title: "Modern Clothing Store",
    category: "E-Commerce",
    description: "A high-performance e-commerce frontend with an intuitive admin dashboard for real-time product management, enabling the owner to update inventory instantly without coding knowledge.",
    image: "/projects/clothing-store.jpg",
    techStack: ["Next.js", "Tailwind CSS", "Admin Panel"],
    liveDemo: "https://clothing.sarthakdev.online/",
    highlights: ["Dynamic Product Grid", "Admin CMS", "Fast Load Times"]
  },
  {
    title: "NGO Digital Presence",
    category: "Non-Profit",
    description: "A responsive, accessibility-focused website designed to build trust with donors. Features clear initiative showcases and integrated contact forms to increase volunteer sign-ups.",
    image: "/projects/ngo-website.jpg",
    techStack: ["Next.js", "Tailwind CSS", "SEO Optimized"],
    liveDemo: "https://ngo.sarthakdev.online/",
    highlights: ["Donor Trust Design", "Mobile First", "Contact Integration"]
  },
  {
    title: "Amrit Aahar Restaurant",
    category: "Hospitality",
    description: "A digital menu and ordering platform that integrates directly with WhatsApp for orders, helping the restaurant capture customer data and reduce phone-order errors.",
    image: "/projects/amrit-aahar.jpg",
    techStack: ["Next.js", "Supabase", "WhatsApp API"],
    liveDemo: "https://restaurant.sarthakdev.online/",
    highlights: ["WhatsApp Ordering", "Digital Menu", "Lead Capture"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background relative">
      {/* Background Gradient for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Selected <span className="text-primary">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I build digital products that solve real business problems. 
            Here is how I help my clients succeed.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm h-full flex flex-col">
                
                {/* Image Area */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button asChild variant="secondary" size="lg">
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        View Live Site <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                  {/* Category Badge */}
                  <Badge className="absolute top-4 right-4 bg-background/90 text-foreground backdrop-blur-md">
                    {project.category}
                  </Badge>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="flex-grow">
                  {/* Key Highlights - Shows you think about features */}
                  <ul className="space-y-2 mb-4">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-secondary/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  <Button asChild variant="ghost" className="w-full justify-between group-hover:bg-primary/10">
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      Visit Website
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}