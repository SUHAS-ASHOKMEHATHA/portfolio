export default function Projects() {
  const projects = [
    {
      name: "AI Smart Energy Optimizer",
      tech: "Rust, Python, TensorFlow/Keras, Pandas, Scikit-learn, Streamlit",
      points: [
        "Engineered an AI-driven energy optimization platform with real-time price and weather data for cost-efficient energy usage.",
        "Built Rust-based data collection services and integrated TensorFlow/Keras LSTM models for price/solar output forecasting.",
        "Designed interactive Streamlit dashboards to visualize energy trends, display recommendations, and calculate potential savings.",
        "Leveraged PyO3 for seamless Rust-Python integration, ensuring high-performance data flow and model execution."
      ]
    },
    {
      name: "Traffic Surveillance & Crime Tracking System",
      tech: "Python, HTML, JavaScript, Flask",
      points: [
        "Developed a web-based dashboard integrating traffic surveillance and crime-tracking functionalities for real-time monitoring.",
        "Implemented front-end templates, static assets, and backend logic to detect traffic violations, incidents, and criminal activities.",
        "Designed modules for crime reporting and data management, enabling efficient event tracking and response workflows.",
        "Organized project structure with static (CSS/JS/assets) and templates (HTML) folders for maintainable and scalable development."
      ]
    },
    {
      name: "Game Development Project: Cursed Eye",
      tech: "Godot Engine, GDScript, CodeShack",
      points: [
        "Currently developing a third-person perspective (TPP) game using the Godot engine.",
        "Overseeing all aspects of the project: mechanical design, graphical design, and coding.",
        "\"Cursed Eye\" features gameplay similar to Mario with a storyline that involves fighting ninjas."
      ]
    },
    {
      name: "E-Commerce Management",
      tech: "Rust, SeaORM, React, TypeScript, PostgreSQL, HTML",
      points: [
        "E-commerce platform offering a vast selection of products, designed to provide a seamless shopping experience.",
        "Rust with SeaORM and PostgreSQL for API development and relational data modelling; frontend using React for cross-platform compatibility and seamless user interaction.",
        "Integration with secure payment gateway - Stripe for product purchases."
      ]
    },
    {
      name: "AutoTestGen – LLM-Driven Unit Test Generation Engine",
      tech: "Node.js, Mocha, GPT-4, StarCoder, CodeQL, JavaScript, TypeScript, GitHub Actions",
      points: [
        "Engineered an LLM-powered platform to auto-generate unit tests for JavaScript/TypeScript codebases, inspired by TESTPILOT.",
        "Designed adaptive test generation pipelines with prompt creation, error-based re-prompting, and automated suite validation.",
        "Leveraged static/dynamic introspection to extract API metadata, usage examples, and documentation prompts for precise coverage.",
        "Integrated CodeQL to measure assertion quality, achieving ≥70% test coverage across supported packages.",
        "Benchmarked performance against Nessie, matching or outperforming it across 25+ npm packages."
      ]
    },
    {
      name: "AutoLegal – AI-Powered Legal Automation for Real Estate",
      tech: "Node.js, Python, LangChain, GPT-4 API, MongoDB, Neo4j, Docker, React",
      points: [
        "Engineered a legal automation platform for real estate, generating compliance-ready documentation and reducing reliance on manual consultations.",
        "Developed NLP pipelines with LangChain and GPT-4 to extract zoning laws, regulations, and validate user-uploaded project data.",
        "Integrated Neo4j to track legal clause dependencies and MongoDB to manage project metadata efficiently.",
        "Designed a React-based frontend for intuitive user interaction and containerized services with Docker for scalable deployment."
      ]
    },
    {
      name: "Smart Medical Imaging & Diagnosis System",
      tech: "Python, YOLOv8, PyTorch, Hugging Face (BLIP, Sentence Transformers), Scikit-learn, FAISS, Flask",
      points: [
        "Engineered an AI platform using YOLOv8 for fracture detection and K-Means for patient segmentation to automate clinical diagnosis.",
        "Developed a multimodal pipeline with Sentence Transformers for semantic search and BLIP for automated X-ray image captioning.",
        "Architected a Flask-based web application to deliver real-time predictions and medical recommendations with confidence levels > 0.5."
      ]
    },
    {
      name: "Admin Management & UI UX Automation Test Suite",
      tech: "React 18+, JavaScript (ES6+), Node.js, BrowserStack (Chrome)",
      points: [
        "Designed and executed a comprehensive QA strategy for a hotel management system, performing functional, UI, and security testing across multiple browsers (Chrome, Firefox, Edge) and operating systems.",
        "Developed and validated Role-Based Access Control (RBAC) and user authentication protocols, ensuring 100% data protection and the integrity of tamper-proof audit trails and system logs.",
        "Established rigorous deployment benchmarks and exit criteria, resulting in the successful identification and resolution of all critical and high-severity defects to ensure 99.9% operational readiness."
      ]
    }
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-slate-900 p-6 rounded-xl hover:scale-105 transform transition-all duration-300">
            <h3 className="font-semibold text-lg mb-1">{proj.name}</h3>
            <p className="text-sm text-slate-400 mb-3">{proj.tech}</p>
            <ul className="list-disc list-inside space-y-1 text-slate-300 text-sm">
              {proj.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="mt-4 flex gap-3">
              <button className="px-3 py-1 bg-slate-800 rounded hover:bg-slate-700 transition-colors">GitHub</button>
              <button className="px-3 py-1 bg-indigo-600 rounded hover:bg-indigo-500 transition-colors">Live</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
