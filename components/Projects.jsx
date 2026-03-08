"use client";
import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import { projects } from "@/lib/data";

const colorMap = {
  blue: { tag: "bg-[#00d4ff]/10 border-[#00d4ff]/30 text-[#00d4ff]", glow: "rgba(0,212,255,0.25)", accent: "#00d4ff" },
  purple: { tag: "bg-[#a855f7]/10 border-[#a855f7]/30 text-[#a855f7]", glow: "rgba(168,85,247,0.25)", accent: "#a855f7" },
  green: { tag: "bg-[#34d399]/10 border-[#34d399]/30 text-[#34d399]", glow: "rgba(52,211,153,0.25)", accent: "#34d399" },
  pink: { tag: "bg-[#f472b6]/10 border-[#f472b6]/30 text-[#f472b6]", glow: "rgba(244,114,182,0.25)", accent: "#f472b6" },
};

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-8, 8]), { stiffness: 300, damping: 30 });

  const c = colorMap[project.color] || colorMap.blue;

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ boxShadow: `0 0 50px ${c.glow}` }}
      className="glass rounded-2xl border border-white/10 p-6 flex flex-col gap-4 transition-shadow group cursor-default"
    >
      {/* Card top */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="flex items-center gap-2 mb-1">
            {project.featured && (
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-mono">
                <Star size={10} fill="currentColor" /> Featured
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-[var(--accent)] transition-colors"
            style={{ "--accent": c.accent }}>
            {project.title}
          </h3>
          <p className="font-mono text-xs mt-0.5" style={{ color: c.accent }}>{project.subtitle}</p>
        </div>

        {/* Accent dot */}
        <div
          className="w-3 h-3 rounded-full shrink-0 mt-1"
          style={{ background: c.accent, boxShadow: `0 0 12px ${c.accent}` }}
        />
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed flex-1">{project.description}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className={`tag-mono px-2 py-0.5 rounded border text-xs ${c.tag}`}>
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-2 border-t border-white/10">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-slate-400 hover:text-white text-sm transition-colors"
        >
          <Github size={15} /> Code
        </a>
        {project.live && project.live !== "#" && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm transition-colors"
            style={{ color: c.accent }}
          >
            <ExternalLink size={15} /> Live
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-[#080c14]">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-[#34d399]/4 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-[#34d399] text-sm tracking-widest uppercase mb-3">&lt;projects&gt;</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-[#34d399] to-[#00d4ff] mx-auto mb-4" />
          {/* <p className="text-slate-400 max-w-xl mx-auto">
            Hover over a card for a 3D tilt effect. Click GitHub to explore the code.
          </p> */}
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
