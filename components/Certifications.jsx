"use client";
import { motion } from "framer-motion";
import { Award, Shield, CheckCircle, Cpu, Layers, Star, ExternalLink } from "lucide-react";
import { certifications, contact } from "@/lib/data";

const colorMap = {
  blue:   { icon: "#00d4ff", bg: "#00d4ff", glow: "rgba(0,212,255,0.2)" },
  purple: { icon: "#a855f7", bg: "#a855f7", glow: "rgba(168,85,247,0.2)" },
  green:  { icon: "#34d399", bg: "#34d399", glow: "rgba(52,211,153,0.2)" },
  pink:   { icon: "#f472b6", bg: "#f472b6", glow: "rgba(244,114,182,0.2)" },
};

const icons = [Award, Shield, CheckCircle, Cpu, Layers, Star, Award, Shield, CheckCircle];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 bg-[#080c14] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#a855f7]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-[#a855f7] text-sm tracking-widest uppercase mb-3">&lt;certifications&gt;</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-[#a855f7] to-[#f472b6] mx-auto" />
        </motion.div>

        {/* Cert grid — auto columns so it works for any count */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, i) => {
            const c = colorMap[cert.color] || colorMap.blue;
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{
                  y: -6,
                  boxShadow: `0 0 40px ${c.glow}`,
                  borderColor: "rgba(255,255,255,0.2)",
                }}
                className="glass rounded-2xl border border-white/10 p-6 flex flex-col items-center text-center gap-4 transition-all cursor-default"
              >
                {/* Icon circle */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: `${c.bg}15`, border: `1px solid ${c.bg}40` }}
                >
                  <Icon size={24} style={{ color: c.icon }} />
                </div>

                <div>
                  <h3 className="font-bold text-white mb-1 text-sm leading-snug">{cert.title}</h3>
                  <p className="font-mono text-xs text-slate-500 mb-2">{cert.issuer}</p>
                  <span
                    className="tag-mono text-xs px-2 py-0.5 rounded-full"
                    style={{ background: `${c.bg}15`, color: c.icon, border: `1px solid ${c.bg}30` }}
                  >
                    {cert.year}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* LinkedIn CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <motion.a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168,85,247,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white border border-[#a855f7]/50 bg-[#a855f7]/10 hover:bg-[#a855f7]/20 transition-all text-sm"
          >
            <ExternalLink size={16} className="text-[#a855f7]" />
            Explore more on LinkedIn
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
