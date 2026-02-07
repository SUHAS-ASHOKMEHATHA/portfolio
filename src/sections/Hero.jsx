import { motion } from 'framer-motion'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const particleRef = useRef(null)
  const nebulaRef = useRef(null)

  // Ambient particles
  useEffect(() => {
    const canvas = particleRef.current
    const ctx = canvas.getContext('2d')
    let width = canvas.width = window.innerWidth
    let height = canvas.height = window.innerHeight
    let particles = []

    const createParticles = () => {
      particles = []
      for (let i = 0; i < 60; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 3 + 1,
          dx: (Math.random() - 0.5) * 0.5,
          dy: (Math.random() - 0.5) * 0.5,
          alpha: Math.random() * 0.5 + 0.3
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      particles.forEach(p => {
        p.x += p.dx
        p.y += p.dy
        if (p.x > width) p.x = 0
        if (p.x < 0) p.x = width
        if (p.y > height) p.y = 0
        if (p.y < 0) p.y = height

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`
        ctx.fill()
      })
      requestAnimationFrame(animate)
    }

    createParticles()
    animate()

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      createParticles()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Subtle classy gradient background (2 colors)
  useEffect(() => {
    const canvas = nebulaRef.current
    const ctx = canvas.getContext('2d')
    let width = canvas.width = window.innerWidth
    let height = canvas.height = window.innerHeight

    const animateBackground = () => {
      // professional blue-gray gradient
      const grad = ctx.createLinearGradient(0, 0, width, height)
      const color1 = `rgba(20, 20, 40, 1)`   // dark blue-gray
      const color2 = `rgba(50, 50, 70, 1)`   // slightly lighter shade
      grad.addColorStop(0, color1)
      grad.addColorStop(1, color2)

      ctx.fillStyle = grad
      ctx.fillRect(0, 0, width, height)

      requestAnimationFrame(animateBackground)
    }

    animateBackground()

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background */}
      <canvas ref={nebulaRef} className="absolute top-0 left-0 w-full h-full z-0"></canvas>
      {/* Ambient particles */}
      <canvas ref={particleRef} className="absolute top-0 left-0 w-full h-full z-10"></canvas>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20"
      >
        {/* Name & Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white" style={{ 
          textShadow: '0 0 15px rgba(255,255,255,0.9), 0 0 25px rgba(255,255,255,0.7)' 
        }}>
          Suhas Ashok Mehatha
        </h1>
        <p className="text-xl md:text-2xl font-medium mb-6 text-white" style={{ 
          textShadow: '0 0 10px rgba(255,255,255,0.8)' 
        }}>
          Master’s Student @ SRH Heidelberg • Computer Science • Software Engineer
        </p>

        {/* Short Tagline */}
        <p className="text-lg md:text-xl font-mono mb-8 text-white" style={{ 
          textShadow: '0 0 8px rgba(255,255,255,0.7)' 
        }}>
          Full-Stack • AI • Automation
        </p>

        {/* Professional Summary */}
        <p className="max-w-3xl mx-auto leading-relaxed text-base md:text-lg mb-10 text-white" style={{ 
          textShadow: '0 0 6px rgba(255,255,255,0.6)' 
        }}>
          I’m an AI & ML expert and full-stack developer with a passion for building bold, intelligent, 
          and beautifully engineered products. I love pushing boundaries — from developing smart 
          automation tools and cloud-native platforms to crafting seamless digital experiences that 
          blend logic with creativity. For me, code isn’t just syntax; it’s art with purpose. I thrive 
          on turning ambitious ideas into real, scalable tech that makes people say, “Wow, that actually works!” 
          Let’s connect and build some cool stuff together.
        </p>

        {/* Buttons */}
        <div className="flex gap-6 justify-center">
          {/* LinkedIn Button */}
          <motion.a
            href="https://www.linkedin.com/in/suhas-ashok-mehatha"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
            style={{ boxShadow: '0 0 15px rgba(0,123,255,0.7)' }}
          >
            <FaLinkedin size={24} />
            <span className="font-medium">LinkedIn</span>
          </motion.a>

          {/* Email Button */}
          <motion.a
            href="mailto:suhasashokmehatha@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-gray-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-600 transition-colors"
            style={{ boxShadow: '0 0 15px rgba(255,255,255,0.6)' }}
          >
            <FaEnvelope size={24} />
            <span className="font-medium">Email</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
