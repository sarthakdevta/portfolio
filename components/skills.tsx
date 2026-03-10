import { 
  Code2, 
  Smartphone, 
  Wrench,
  FileCode,
  Palette,
  Globe,
  Layers,
  Flame,
  GitBranch,
  Triangle,
  Database
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "HTML", icon: FileCode },
      { name: "CSS", icon: Palette },
      { name: "JavaScript", icon: Globe },
      { name: "React", icon: Layers },
      { name: "Next.js", icon: Triangle },
    ],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: [
      { name: "Flutter", icon: Smartphone },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Vercel", icon: Triangle },
      { name: "Firebase", icon: Flame },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="bg-card border-border hover:border-primary/50 transition-colors duration-300"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-xl bg-primary/10 w-fit">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary/20 transition-colors duration-200"
                    >
                      <skill.icon className="h-4 w-4" />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
