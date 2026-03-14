import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-medium mb-4 animate-fade-in">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            {"Hi, I'm "}
            <span className="text-primary">Sarthak</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-balance">
            Web Developer building modern websites using{" "}
            <span className="text-foreground font-medium">Next.js</span> and{" "}
            <span className="text-foreground font-medium">Flutter</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="group">
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button asChild variant="outline" size="lg">
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>

            {/* New Hire Me Button */}
            <Button asChild variant="secondary" size="lg">
              <a href="https://wa.me/919009585458" target="_blank">
                Hire Me
              </a>
            </Button>

          </div>
        </div>
      </div>
    </section>
  )
}