import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  const links = [
    {
      icon: <FaGithub size={28} />,
      url: 'https://github.com/SUHAS-ASHOKMEHATHA',
      label: 'GitHub',
    },
    {
      icon: <FaLinkedin size={28} />,
      url: 'https://www.linkedin.com/in/suhas-ashok-mehatha',
      label: 'LinkedIn',
    },
  ]

  return (
    <footer id="contact" className="text-center py-12">
      <div className="flex justify-center gap-6 mb-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-lg border border-gray-300 hover:border-blue-500 hover:text-blue-500 transition-all duration-300 transform hover:scale-110 active:scale-95"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
      <button
        onClick={() => navigator.clipboard.writeText('suhasashokmehatha@gmail.com')}
        className="text-sm underline mt-2 hover:text-blue-500 transition-colors"
      >
        Copy Email
      </button>
    </footer>
  )
}
