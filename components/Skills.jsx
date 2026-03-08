"use client";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const colorMap = {
  blue:   { badge: "#00d4ff", header: "#00d4ff", glow: "rgba(0,212,255,0.15)",   bg: "rgba(0,212,255,0.12)",   dim: "rgba(0,212,255,0.08)" },
  purple: { badge: "#a855f7", header: "#a855f7", glow: "rgba(168,85,247,0.15)", bg: "rgba(168,85,247,0.12)", dim: "rgba(168,85,247,0.08)" },
  green:  { badge: "#34d399", header: "#34d399", glow: "rgba(52,211,153,0.15)",  bg: "rgba(52,211,153,0.12)",  dim: "rgba(52,211,153,0.08)" },
  pink:   { badge: "#f472b6", header: "#f472b6", glow: "rgba(244,114,182,0.15)", bg: "rgba(244,114,182,0.12)", dim: "rgba(244,114,182,0.08)" },
};

const TOTAL_BLOCKS = 10;

function ProgressBar({ progress, color, delay }) {
  return (
    <div className="flex gap-[3px]">
      {Array.from({ length: TOTAL_BLOCKS }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25, delay: delay + i * 0.04, ease: "easeOut" }}
          style={{
            background: i < progress ? color.badge : color.dim,
            boxShadow: i < progress ? `0 0 6px ${color.badge}80` : "none",
          }}
          className="h-1.5 flex-1 rounded-sm origin-bottom"
        />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-[#0a0f1e] overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] rounded-full bg-[#00d4ff]/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-[#a855f7] text-sm tracking-widest uppercase mb-3">&lt;skills&gt;</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Skills <span className="gradient-text">Matrix</span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-[#a855f7] to-[#00d4ff] mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {skills.map((group, gi) => {
            const c = colorMap[group.color] || colorMap.blue;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
                whileHover={{ scale: 1.02, boxShadow: `0 0 40px ${c.glow}` }}
                className="glass rounded-2xl border border-white/10 p-6 flex flex-col gap-5 transition-all"
              >
                {/* Category header */}
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: c.header, boxShadow: `0 0 8px ${c.header}` }}
                  />
                  <h3 className="font-mono font-semibold text-sm text-white">{group.category}</h3>
                </div>

                {/* Skill rows with progress */}
                <div className="flex flex-col gap-3">
                  {group.items.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span
                          className="tag-mono text-xs font-medium"
                          style={{ color: c.badge }}
                        >
                          {skill.name}
                        </span>
                        <span className="font-mono text-[10px] text-slate-500">
                          {skill.progress * 10}%
                        </span>
                      </div>
                      <ProgressBar
                        progress={skill.progress}
                        color={c}
                        delay={gi * 0.05 + si * 0.05}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
