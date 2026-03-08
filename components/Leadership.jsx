"use client";
import { motion } from "framer-motion";
import { Users, BookOpen, Zap } from "lucide-react";
import { leadership } from "@/lib/data";

const icons = [Users, BookOpen, Zap];
const colorMap = {
  blue:   { accent: "#00d4ff", bg: "#00d4ff15", border: "#00d4ff30" },
  purple: { accent: "#a855f7", bg: "#a855f715", border: "#a855f730" },
  green:  { accent: "#34d399", bg: "#34d39915", border: "#34d39930" },
};

export default function Leadership() {
  return (
    <section id="leadership" className="relative py-24 bg-[#0a0f1e] overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-[#34d399]/4 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-[#34d399] text-sm tracking-widest uppercase mb-3">&lt;leadership&gt;</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Leadership & <span className="gradient-text">Extracurriculars</span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-[#34d399] to-[#a855f7] mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {leadership.map((item, i) => {
            const c = colorMap[item.color] || colorMap.blue;
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ scale: 1.02, boxShadow: `0 0 35px ${c.bg}` }}
                className="glass rounded-2xl border border-white/10 p-6 flex flex-col gap-4 transition-all"
              >
                {/* Icon + title */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: c.bg, border: `1px solid ${c.border}` }}
                  >
                    <Icon size={22} style={{ color: c.accent }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base leading-tight">{item.role}</h3>
                    <p className="font-mono text-xs mt-0.5" style={{ color: c.accent }}>{item.org}</p>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2">
                  {item.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-2 text-slate-400 text-sm">
                      <span style={{ color: c.accent }} className="mt-1.5 shrink-0">▹</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
