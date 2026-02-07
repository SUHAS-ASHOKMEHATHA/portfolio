export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: "JavaScript (ES6+), React, HTML5, Next.js, Redux, TypeScript"
    },
    {
      category: "Backend",
      items: "Node.js, Python, Rust, Java"
    },
    {
      category: "Database",
      items: "PostgreSQL, MongoDB, Neo4j, ORM"
    },
    {
      category: "DevOps",
      items: "Docker, Google Cloud Platform, AWS, GitHub, Kubernetes, Grafana"
    },
    {
      category: "Game Development",
      items: "Godot Engine, Mechanical Design, Graphical Design, Game Coding"
    },
    {
      category: "Soft Skills",
      items: "Fluent English-speaking & writing, Capability & eagerness to learn, Problem Solving, Agile Methodology"
    }
  ]

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold mb-8">Skills</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-slate-900 p-6 rounded-xl hover:scale-105 transform transition-all duration-300"
          >
            <h3 className="font-semibold text-lg mb-2">{skill.category}</h3>
            <p className="text-sm text-slate-400">{skill.items}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
