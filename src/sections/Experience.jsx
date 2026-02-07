export default function Experience() {
  const experiences = [
    {
      role: "AI Full Stack Developer – Intern",
      company: "Legal-Tech Pythia, Heidelberg, Germany",
      duration: "October 2024 – Present",
      responsibilities: [
        "The Cursed Scroll of Anubis: Implemented dynamic world-glitch mechanics, animated environmental entities, and AI-driven enemy behaviors using Godot Engine and GDScript.",
        "Execution and Deployment: Developed and delivered a full-stack web application for a client using React, Node.js, Java, and AWS, focusing on scalable architecture, RESTful APIs, responsive UI, and cloud-based deployment."
      ]
    },
    {
      role: "Software Intern",
      company: "Global Quest Technology",
      duration: "Internship",
      responsibilities: [
        "Developed and maintained responsive web applications with HTML5, CSS3, JavaScript, and React, ensuring seamless cross-browser and cross-device performance.",
        "Built scalable back-end services using Node.js, Express.js, and MongoDB, improving performance through code refactoring and reducing HTTP requests.",
        "Collaborated with UI/UX teams to transform wireframes into interactive, accessible interfaces and enhance user experience.",
        "Resolved 30+ software bugs, executed 80+ automated/manual tests with 95% success, significantly boosting product stability.",
        "Streamlined releases by deploying and monitoring applications via CI/CD pipelines, contributing to a 15% increase in team efficiency."
      ]
    },
    {
      role: "Software Developer",
      company: "i-exceed - FinTech",
      project: "Appzillon Workspace Project",
      responsibilities: [
        "Developed and deployed 'Skill Matrix,' a full-stack job search platform serving 20,000+ active users, using a tech stack of Java, JavaScript, Google Cloud, HTML, and CSS.",
        "Engineered core features including a dynamic job search engine and real-time notifications for HR, significantly enhancing user engagement.",
        "Optimized end-to-end application performance and collaborated with cross-functional teams to streamline workflows, ensuring the successful delivery of a market-ready product.",
        "Drove the project lifecycle by optimizing application performance, collaborating with product and design teams, and streamlining workflows for on-time delivery."
      ]
    }
  ]

  const projects = [
    {
      name: "E-Commerce Platform",
      description: "Developed a large-scale platform for a print service company, automating 200,000+ product configurations from Excel into a functional admin dashboard and user-friendly website. Used Next.js with Prisma and Hasura for API development and database design, improving workflow efficiency significantly."
    },
    {
      name: "Healthcare App",
      description: "Architected the backend for a healthcare platform with 1,000+ assessments processed and 100+ therapists. Implemented user management, subscriptions, virtual wallet for therapists, Razorpay integration for payments, and real-time chat between patients and therapists, boosting therapist-patient matching efficiency."
    },
    {
      name: "QAD ERP Workflow",
      description: "Developed ERP workflows to manage billing and invoicing efficiently, ensuring 99% operational uptime by mitigating deployment issues, while leading a team to deliver milestones 15% ahead of schedule."
    }
  ]

  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold mb-10">Experience</h2>

      {experiences.map((exp, idx) => (
        <div key={idx} className="mb-10">
          <h3 className="text-xl font-semibold">{exp.role} — {exp.company}</h3>
          {exp.duration && <p className="text-sm text-slate-500 mb-2">{exp.duration}</p>}
          {exp.project && <p className="text-sm text-slate-500 mb-2">{exp.project}</p>}
          <ul className="list-disc list-inside mt-2 text-slate-600 space-y-1">
            {exp.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}

      <h3 className="text-2xl font-semibold mb-6">Additional Software Development Projects</h3>
      <ul className="list-disc list-inside space-y-4 text-slate-600">
        {projects.map((proj, idx) => (
          <li key={idx}>
            <span className="font-semibold">{proj.name}:</span> {proj.description}
          </li>
        ))}
      </ul>
    </section>
  )
}
