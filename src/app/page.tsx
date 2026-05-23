'use client';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowDown, Globe, Sparkles, Zap, Star, ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Sticker from '@/components/Sticker';
import Image from 'next/image';

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotateS1 = useTransform(scrollYProgress, [0, 1], [-8, 15]);
  const rotateS2 = useTransform(scrollYProgress, [0, 1], [5, -20]);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "3abcc26e-6e22-4f42-bd66-89e5d80bc52c",
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Inquiry from ${formData.name}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000); // Reset after 5 seconds
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <main ref={targetRef} className="min-h-[200vh] bg-black text-white selection:bg-lime-400 selection:text-black overflow-x-hidden">
      <Navigation />

      {/* Edge-to-Edge Premium Animated Background - Fixed for Seamless Linking Across All Sections */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none z-0"
      >
        {/* High-End Dot Matrix / Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Ambient Animated Glowing Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.55, 0.25],
            x: [0, 80, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[5%] w-[55vw] h-[55vw] rounded-full glow-orb-1"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.45, 0.2],
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] -right-[5%] w-[50vw] h-[50vw] rounded-full glow-orb-2"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[15%] left-[20%] w-[45vw] h-[45vw] rounded-full glow-orb-3"
        />
      </motion.div>

      {/* Content Container - Full Width Outer Wrapper */}
      <div className="w-full max-w-full">

        {/* Kinetic Hero Section */}
        <section className="relative h-screen w-full flex flex-col justify-start lg:justify-center pt-24 lg:pt-0 overflow-hidden">
          {/* Personal Image Container - Exact Right Bottom Corner */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-0 right-0 lg:right-16 w-[80%] lg:w-[45%] xl:w-[40%] h-[50%] lg:h-[90%] pointer-events-none z-0 opacity-80 lg:opacity-100"
          >
            <div className="relative w-full h-full pointer-events-auto">
              <Image
                src="/portrait.png"
                alt="Jun Hao Lim Portrait"
                fill
                className="object-contain object-bottom object-right opacity-85 filter contrast-125 grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Subtle gradient overlays to seamlessly blend the image into the black background */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Hero Content Container with Side Padding for Sidebars */}
          <div className="relative z-10 w-full px-6 md:px-0 md:pl-36 md:pr-28 lg:pl-48 lg:pr-40">
            <motion.div style={{ y: textY, willChange: 'transform' }} className="relative max-w-full">
              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[16vw] sm:text-[13vw] md:text-[14vw] lg:text-[12vw] font-black leading-[0.8] tracking-tighter text-[#F0F0F0] break-words relative z-10"
              >
                JUN HAO<br />
                <span className="text-zinc-800 outline-text">LIM</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-[85%] right-[25%] lg:top-[70%] lg:right-auto lg:left-[50%] -translate-y-1/2 z-20"
              >
                <Sticker
                  text="CODER"
                  color="#FF4B91"
                  rotation={12}
                  className="w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full"
                  icon={<Zap className="w-5 h-5 md:w-6 md:h-6" />}
                />
              </motion.div>
            </motion.div>

            <div className="mt-8 lg:mt-12 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-12 relative z-20">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-[85%] lg:max-w-md"
              >
                <p className="text-zinc-500 text-sm uppercase tracking-widest mb-4 font-bold">Biography</p>
                <p className="font-mono text-lg md:text-xl font-normal leading-relaxed text-zinc-200 tracking-wide">
                  Final-year Computer Science student.
                  Architecting high-performance systems
                  & premium interfaces for the modern web.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="flex items-center gap-4 text-lime-400"
                >
                  <span className="text-sm font-bold uppercase tracking-widest">Scroll to explore</span>
                  <ArrowDown size={20} />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The "Asymmetric Fragment" Section */}
        <section id="about" className="relative min-h-screen py-32 grid grid-cols-12 gap-6 px-6 md:px-0 md:pl-36 md:pr-28 lg:pl-48 lg:pr-40">

          {/* Left Side - Large Portrait with Parallax */}
          <div className="col-span-12 lg:col-span-7 relative h-[50vh] md:h-[80vh] lg:h-screen">
            <motion.div
              style={{ y: imageY, willChange: 'transform' }}
              className="relative w-full h-full rounded-3xl overflow-hidden bg-zinc-900 border border-white/5"
            >
              <div className="absolute inset-0 grid-bg opacity-20" />
              <Image
                src="/portrait.png"
                alt="Portrait"
                fill
                className="object-cover object-bottom scale-110"
              />

              {/* Overlay Stickers on the Image */}
              <motion.div style={{ rotate: rotateS1, willChange: 'transform' }} className="absolute top-[75%] left-[10%] z-20">
                <Sticker
                  text="UI/UX&#10;STRATEGY"
                  color="#76EAD7"
                  rotation={0}
                  className="px-6 py-4"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Stacked Information & Floating Assets */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center gap-16 relative">
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none">
                CRAFTING <br /> THE <span className="text-lime-400">UNEXPECTED</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-sm">
                I don't just build websites; I create digital environments that feel alive. My process is a mix of rigorous research and expressive motion.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'MongoDB', 'Typescript', 'Tailwind CSS'].map((skill, idx) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Floating "Cloud" of small stickers */}
            <motion.div style={{ rotate: rotateS2, willChange: 'transform' }} className="absolute -bottom-10 left-[50%] -ml-[64px] md:-ml-[80px] lg:left-auto lg:ml-0 lg:right-10 z-20">
              <Sticker
                text="OPEN FOR&#10;WORK"
                color="#FFD369"
                rotation={15}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full text-sm"
                icon={<Star size={16} />}
              />
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 border-t border-white/10 overflow-hidden px-6 md:px-0 md:pl-36 md:pr-28 lg:pl-48 lg:pr-40 relative">
          <div className="flex flex-col mb-20">
            <h2 className="text-[10vw] md:text-[8vw] font-black leading-none outline-text text-zinc-800">JOURNEY</h2>
            <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest mt-4">Education & Experience</p>
          </div>

          <div className="relative border-l border-white/10 pl-8 md:pl-12 space-y-24">
            {[
              {
                year: "2021 — 2023",
                role: "Diploma in Computer Science",
                company: "INTI International College Subang",
                details: "CGPA: 2.7",
                description: "",
                color: "#76EAD7"
              },
              {
                year: "Jan 2022",
                role: "Intern (8 Weeks)",
                company: "Bitechain Technology",
                details: "Supervisor: Sky Yap",
                description: "[Description reserved for future update]",
                color: "#FF4B91"
              },
              {
                year: "Mar — Oct 2022",
                role: "Part-time Developer",
                company: "Bitechain Technology",
                details: "",
                description: "[Description reserved for future update]",
                color: "#FFD369"
              },
              {
                year: "2024 — 2026",
                role: "Bachelor in Computer Science",
                company: "Swinburne University of Technology",
                details: "Major: Software Development • CGPA: 1.9",
                description: "",
                color: "#76EAD7"
              },
              {
                year: "2026",
                role: "Intern (12 Weeks)",
                company: "[Company Name Reserved]",
                details: "Supervisor: [Reserved]",
                description: "[Description reserved for future update]",
                color: "#FF4B91"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative group"
              >
                {/* Glowing Node on Timeline */}
                <div 
                  className="absolute -left-8 md:-left-12 -translate-x-[50%] top-2 w-3 h-3 rounded-full border border-black transition-transform duration-500 group-hover:scale-150"
                  style={{ backgroundColor: item.color, boxShadow: `0 0 15px ${item.color}` }}
                />

                <div className="flex flex-col gap-2">
                  <span className="font-mono text-sm text-zinc-500 tracking-widest">{item.year}</span>
                  <h3 className="text-3xl md:text-4xl font-black text-white">{item.role}</h3>
                  <h4 className="text-xl font-medium" style={{ color: item.color }}>{item.company}</h4>
                  
                  {item.details && (
                    <p className="text-sm font-mono text-zinc-400 mt-1 uppercase tracking-wider">{item.details}</p>
                  )}
                  
                  {item.description && (
                    <p className="text-zinc-400 text-lg leading-relaxed mt-4 max-w-2xl">
                      {item.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Project Reveal Section (Horizontal Feel) */}
        <section id="work" className="py-32 border-t border-white/10 overflow-hidden px-6 md:px-0 md:pl-36 md:pr-28 lg:pl-48 lg:pr-40">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <h2 className="text-[10vw] md:text-[8vw] font-black leading-none outline-text text-zinc-800">PROJECTS</h2>
            <div className="text-right">
              <p className="text-zinc-500 font-mono text-sm mb-2">001 — 003</p>
              <p className="text-xl font-bold uppercase tracking-widest underline underline-offset-4 decoration-lime-400">View All Projects</p>
            </div>
          </div>

          <div className="space-y-1">
            {[
              {
                title: 'CARDLINK',
                category: 'Digital Business Card',
                color: '#76EAD7',
                description: 'A modern and dynamic digital business card designed to be shared seamlessly across all platforms. Built with a sleek, responsive interface and featuring quick-action buttons for immediate connectivity, CardLink redefines the first impression in the digital age.',
                tech: ['Vite', 'Javascript', 'Tailwind CSS', 'MongoDB', 'Vercel', 'Render', 'Stripe'],
                image: '/cardlink.png',
                link: 'https://www.cardlink.asia/'
              },
              {
                title: 'FILPAL DIRECTORY SYSTEM',
                category: 'Final Year Project',
                color: '#FF4B91',
                description: 'A high-performance directory system forFilipino community, featuring a real-time database and a user-friendly interface for seamless information sharing.',
                tech: ['PHP', 'MySQL', 'Javascript'],
                image: '/filpal.png',
                link: 'https://filpal.gamer.gd/index.php'
              },
              {
                title: 'WARRENTEXT',
                category: 'Digital Warranty System',
                color: '#FF7B54',
                description: 'Modern warranty management platform for retail shops. Issue warranties in seconds, manage claims effortlessly, and keep your customers satisfied.',
                tech: ['React', 'Typescript', 'Tailwind CSS', 'Render'],
                image: '/warrentext.png',
                link: 'https://www.warrentext.com/'
              },
            ].map((project, idx) => (
              <motion.div
                key={project.title}
                className="border-b border-white/5 overflow-hidden transition-colors"
              >
                <motion.div
                  onClick={() => setExpandedProject(expandedProject === idx ? null : idx)}
                  animate={{
                    backgroundColor: expandedProject === idx ? project.color : 'rgba(0, 0, 0, 0)',
                    color: expandedProject === idx ? '#000' : '#fff'
                  }}
                  whileHover={{ backgroundColor: project.color, color: '#000' }}
                  transition={{ duration: 0.2, ease: "circOut" }}
                  className="group flex items-center justify-between py-12 px-8 cursor-pointer relative z-10"
                >
                  <div className="flex items-start lg:items-baseline gap-8">
                    <span className={`font-mono text-xs mt-3 lg:mt-0 transition-colors ${expandedProject === idx ? 'text-black opacity-100' : 'text-zinc-500 group-hover:text-black'}`}>0{idx + 1}</span>
                    <div className="flex flex-col gap-3 lg:gap-0">
                      <h3 className="text-4xl md:text-6xl font-black">{project.title}</h3>
                      <span className={`lg:hidden font-bold text-sm tracking-[0.3em] uppercase transition-colors ${expandedProject === idx ? 'opacity-100 text-black' : 'opacity-40 group-hover:opacity-100 group-hover:text-black'}`}>
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <span className={`hidden lg:block font-bold text-sm tracking-[0.3em] uppercase transition-colors ${expandedProject === idx ? 'opacity-100 text-black' : 'opacity-40 group-hover:opacity-100 group-hover:text-black'}`}>
                    {project.category}
                  </span>
                </motion.div>

                {/* Expandable Content Area */}
                <AnimatePresence>
                  {expandedProject === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="px-8 pb-12 overflow-hidden"
                    >
                      <div className="flex flex-col gap-12 pt-8 border-t border-white/10">
                        {/* Top Section: Details & Tech Stack */}
                        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                          <div className="max-w-2xl">
                            <h4 className="text-xl font-bold mb-4">Project Overview</h4>
                            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                              {project.description}
                            </p>
                            {project.link && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-lime-400 text-black font-bold uppercase tracking-widest rounded-full hover:bg-lime-300 hover:scale-105 transition-all text-sm"
                              >
                                Visit Project <ExternalLink size={16} />
                              </a>
                            )}
                          </div>

                          <div>
                            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4 md:text-right">Technologies Used</h4>
                            <div className="flex flex-wrap gap-3 md:justify-end">
                              {project.tech.map((techItem) => (
                                <span key={techItem} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold tracking-wider text-zinc-300">
                                  {techItem}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Bottom Section: Image Container */}
                        <div className="w-full h-[350px] sm:h-[450px] md:h-[500px] relative rounded-3xl overflow-hidden bg-zinc-950 border border-white/10 group flex items-center justify-center p-4 md:p-8 shadow-2xl">
                          {/* High-end subtle grid background */}
                          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                          <div className="relative w-full h-full z-10 overflow-hidden rounded-2xl border border-white/5 shadow-2xl">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-contain object-center opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Me Section */}
        <section id="contact" className="min-h-screen py-32 flex flex-col justify-center px-6 md:px-0 md:pl-36 md:pr-28 lg:pl-48 lg:pr-40 relative border-t border-white/10 z-10">
          <div className="max-w-6xl w-full mx-auto">
            {/* Section Header */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-3 h-3 rounded-full bg-lime-400 animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-lime-400 font-bold">AVAILABLE FOR WORK & PROJECTS</span>
              </div>
              <h2 className="text-5xl sm:text-6xl md:text-8xl font-black leading-none tracking-tight">
                LET'S BUILD <br />
                <span className="text-zinc-800 outline-text">SOMETHING</span> TOGETHER
              </h2>
            </div>

            {/* Content Grid: Left Form, Right Details & HIRE ME badge */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Left Side - Interactive Glassmorphic Form */}
              <motion.form
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                onSubmit={handleSendEmail}
                className="lg:col-span-7 space-y-6 bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-md shadow-2xl relative group"
              >
                {/* Subtle ambient glow behind form */}
                <div className="absolute -inset-1 bg-gradient-to-r from-lime-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 pointer-events-none" />

                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">01 / Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-lime-400 focus:bg-white/5 transition-all font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">02 / Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-lime-400 focus:bg-white/5 transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">03 / Project Details & Scope</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your vision, timeline, and goals..."
                    className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-lime-400 focus:bg-white/5 transition-all font-medium resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-lime-400 hover:bg-lime-300 text-black font-black uppercase tracking-widest py-5 rounded-2xl flex items-center justify-center gap-3 transition-all cursor-pointer shadow-lg shadow-lime-400/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span>{status === 'loading' ? 'SENDING...' : status === 'success' ? 'SENT SUCCESSFULLY!' : status === 'error' ? 'ERROR! TRY AGAIN' : 'SEND MESSAGE'}</span>
                  {status === 'idle' && <Sparkles size={20} />}
                </motion.button>
              </motion.form>

              {/* Right Side - Direct Contact Details, Availability & Floating Badge */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full gap-12">
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-10"
                >
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">DIRECT INQUIRIES</p>
                    <a
                      href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'howwerd0898@gmail.com'}`}
                      className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-bold hover:text-lime-400 transition-all duration-300 inline-block max-w-full truncate border-b-2 border-white/20 hover:border-lime-400 pb-1"
                    >
                      {process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'howwerd0898@gmail.com'}
                    </a>
                  </div>

                  <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/10">
                    <div>
                      <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">LOCATION</p>
                      <p className="text-lg font-medium">Kuala Lumpur, MY</p>
                      <p className="text-sm text-zinc-500 font-mono mt-1">UTC+8 Timezone</p>
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">SOCIALS</p>
                      <div className="flex flex-col gap-2">
                        {['Twitter / X', 'GitHub', 'LinkedIn'].map((social) => (
                          <a key={social} href="#" className="text-sm font-medium hover:text-lime-400 transition-colors flex items-center gap-2">
                            <Globe size={14} className="text-zinc-500" />
                            <span>{social}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* HIRE ME Interactive Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                  viewport={{ once: true }}
                  className="self-center lg:self-end"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => alert('Let\'s connect! Drop me a message using the form.')}
                    className="w-32 h-32 md:w-48 md:h-48 bg-lime-400 rounded-full flex flex-col items-center justify-center text-black font-black cursor-pointer sticker-shadow"
                  >
                    <Sparkles className="w-6 h-6 md:w-8 md:h-8 mb-1 md:mb-2" />
                    <span className="text-sm md:text-xl tracking-wider">HIRE ME</span>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Footer Copyright */}
            <div className="mt-32 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
              <p className="flex items-center gap-2">
                <span>CRAFTED WITH PASSION</span>
                <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-ping" />
              </p>
            </div>
          </div>
        </section>

      </div>

      <style jsx global>{`
        .outline-text {
          -webkit-text-stroke: 1px #333;
          color: transparent;
        }
        .outline-text:hover {
          color: #F0F0F0;
          -webkit-text-stroke: 0px;
        }
      `}</style>
    </main>
  );
}
