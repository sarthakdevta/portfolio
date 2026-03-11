import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Tokko Society",
    description: "A society management web platform that helps residential societies manage visitors, guards, and residents efficiently.",
    image: "/projects/tokko-society.jpg",
    techStack: ["Next.js", "Tailwind CSS"],
    liveDemo: "https://www.tokkosociety.com/",
  },
  {
    title: "Clothing Store Website",
    description: "A modern clothing store website with product listings and admin management features for editing products and images.",
    image: "/projects/clothing-store.jpg",
    techStack: ["Next.js", "Tailwind CSS"],
    liveDemo: "https://clothing.sarthakdev.online/",
  },
  {
    title: "NGO Website",
    description: "A responsive NGO website that displays organization details, initiatives, and provides a way for visitors to contact the NGO.",
    image: "/projects/ngo-website.jpg",
    techStack: ["Next.js", "Tailwind CSS"],
    liveDemo: "https://ngo.sarthakdev.online/",
  },
  {
  title: "Restaurant Website",
  description: "A modern restaurant website with menu management, gallery, contact form and WhatsApp integration.",
  image: "/projects/amrit-aahar.jpg",
  techStack: ["Next.js", "Tailwind CSS", "Supabase"],
  liveDemo: "https://restaurant.sarthakdev.online/"
}
]

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Selected <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-colors duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="default" size="sm">
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Website
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
