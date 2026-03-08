"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, ChevronDown, Download, Eye } from "lucide-react";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { hero } from "@/lib/data";

const Particle = ({ style }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={style}
    animate={{
      y: [0, -30, 10, 0],
      opacity: [0.4, 0.8, 0.3, 0.4],
      scale: [1, 1.2, 0.9, 1],
    }}
    transition={{
      duration: style.duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay: style.delay,
    }}
  />
);

const particles = [
  { width:4,height:4,top:"15%",left:"10%",background:"#00d4ff",boxShadow:"0 0 10px #00d4ff",duration:6,delay:0 },
  { width:3,height:3,top:"30%",right:"15%",background:"#a855f7",boxShadow:"0 0 8px #a855f7",duration:8,delay:1 },
  { width:5,height:5,top:"60%",left:"5%",background:"#34d399",boxShadow:"0 0 12px #34d399",duration:7,delay:2 },
  { width:3,height:3,top:"80%",right:"20%",background:"#00d4ff",boxShadow:"0 0 8px #00d4ff",duration:9,delay:0.5 },
  { width:4,height:4,top:"45%",left:"85%",background:"#a855f7",boxShadow:"0 0 10px #a855f7",duration:5,delay:1.5 },
  { width:2,height:2,top:"70%",left:"40%",background:"#34d399",boxShadow:"0 0 6px #34d399",duration:10,delay:3 },
];

export default function Hero() {
  const typedText = useTypingEffect(hero.roles);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[#080c14]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00d4ff]/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#a855f7]/5 blur-[100px] pointer-events-none" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,212,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,1) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating particles */}
      {particles.map((p, i) => (
        <Particle key={i} style={p} />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" />
          <span className="font-mono text-xs text-[#00d4ff] tracking-widest uppercase">
            Available for Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-4 leading-none tracking-tight"
        >
          <span className="gradient-text text-glow-blue">{hero.name}</span>
        </motion.h1>

        {/* Typing subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-10 flex items-center justify-center mb-8"
        >
          <span className="font-mono text-lg sm:text-xl text-slate-400">
            {typedText}
            <span className="cursor text-[#00d4ff] ml-0.5">|</span>
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <motion.button
            onClick={() => scrollTo("projects")}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,212,255,0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#00d4ff] to-[#0099cc] shadow-lg shadow-[#00d4ff]/25 transition-all"
          >
            <Eye size={18} />
            View Work
          </motion.button>

          <motion.a
            href={hero.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168,85,247,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white border border-[#a855f7]/50 bg-[#a855f7]/10 hover:bg-[#a855f7]/20 transition-all"
          >
            <Download size={18} />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: Linkedin, href: hero.linkedin, label: "LinkedIn", color: "#00d4ff" },
            { icon: Github,   href: hero.github,   label: "GitHub",   color: "#a855f7" },
          ].map(({ icon: Icon, href, label, color }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              style={{ "--hover-color": color }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/10 text-slate-400 hover:text-white transition-all group"
            >
              <Icon
                size={18}
                className="group-hover:scale-110 transition-transform"
                style={{ color }}
              />
              <span className="text-sm font-medium">{label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo("about")}
      >
        <span className="font-mono text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-[#00d4ff]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
