import { Code2, Zap, Users } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable and scalable code",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Building efficient solutions quickly",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively with teams",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
          </div>

          <div className="space-y-6 text-center mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {"I'm a passionate web developer with experience building modern, responsive websites and applications. I specialize in creating seamless user experiences using Next.js for web development and Flutter for cross-platform mobile applications."}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in development started with a curiosity for how things work on the web. Today, I love turning complex problems into simple, beautiful, and intuitive solutions. When {"I'm"} not coding, {"you'll"} find me exploring new technologies and contributing to open-source projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors duration-300"
              >
                <div className="mx-auto mb-4 p-3 rounded-xl bg-primary/10 w-fit">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
