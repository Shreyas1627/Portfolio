"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { experience } from "@/lib/data";

const colorMap = {
  blue:  { node: "#00d4ff", glow: "rgba(0,212,255,0.4)",  tag: "bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/30" },
  green: { node: "#34d399", glow: "rgba(52,211,153,0.4)",  tag: "bg-[#34d399]/10 text-[#34d399] border-[#34d399]/30" },
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-[#0a0f1e]">
      <div className="absolute left-0 top-1/3 w-[350px] h-[350px] rounded-full bg-[#00d4ff]/4 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-[#00d4ff] text-sm tracking-widest uppercase mb-3">&lt;experience&gt;</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#34d399] mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop: vertical center line */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-[#00d4ff]/50 via-[#a855f7]/30 to-transparent hidden md:block" />
          {/* Mobile: vertical left line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#00d4ff]/40 via-[#a855f7]/20 to-transparent md:hidden" />

          <div className="space-y-8 md:space-y-12">
            {experience.map((exp, i) => {
              const c = colorMap[exp.color] || colorMap.blue;
              const isLeft = i % 2 === 0;

              return (
                <div key={exp.id} className="relative flex items-start md:items-center md:justify-between gap-6 pl-10 md:pl-0">
                  {/* Mobile: left dot */}
                  <div
                    className="absolute left-[13px] top-6 w-3 h-3 rounded-full border-2 border-[#080c14] md:hidden"
                    style={{ background: c.node, boxShadow: `0 0 12px ${c.glow}` }}
                  />

                  {/* Desktop: glowing center node */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-[#080c14] z-10 hidden md:flex items-center justify-center"
                    style={{ background: c.node, boxShadow: `0 0 20px ${c.glow}` }}
                  />

                  {/* Card — alternating sides on desktop, full width on mobile */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    className={`w-full md:w-[calc(50%-2.5rem)] glass rounded-2xl border border-white/10 p-5 md:p-6 ${
                      isLeft ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    {/* Type badge */}
                    <span className={`tag-mono px-2.5 py-1 rounded-lg border text-xs ${c.tag} mb-3 inline-block`}>
                      {exp.type}
                    </span>

                    <h3 className="text-lg md:text-xl font-bold text-white mb-1">{exp.role}</h3>

                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4">
                      <span className="flex items-center gap-1.5 text-slate-300 font-medium text-sm">
                        <Briefcase size={14} style={{ color: c.node }} />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5 font-mono text-xs text-slate-500">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.bullets.map((b, bi) => (
                        <li key={bi} className="flex gap-2 text-slate-400 text-sm">
                          <span style={{ color: c.node }} className="mt-1.5 shrink-0">▹</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
