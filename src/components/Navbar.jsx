
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur bg-slate-900/60 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <span className="font-mono text-lg">Suhas Ashok Mehatha</span>
        <div className="space-x-6 text-sm">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        
        </div>
      </div>
    </nav>
  )
}
