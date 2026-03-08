"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Cpu, Users, Rocket, Camera } from "lucide-react";
import { about } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const highlights = [
  { icon: GraduationCap, label: "AI & Machine Learning",       color: "#00d4ff" },
  { icon: Cpu,           label: "Data Structures & Algorithms", color: "#a855f7" },
  { icon: Users,         label: "Collaborative Builder",        color: "#34d399" },
  { icon: Rocket,        label: "Hackathon Organizer",          color: "#f472b6" },
];

/* ── Rolling number counter ── */
function RollingCounter({ target, duration = 1.8 }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  const started = useRef(false);

  // Parse out the numeric part and any suffix (e.g. "9.09" or "7+" or "2nd")
  const numericStr = String(target).replace(/[^0-9.]/g, "");
  const suffix     = String(target).replace(/[0-9.]/g, "");
  const numeric    = parseFloat(numericStr) || 0;
  const isDecimal  = numericStr.includes(".");
  const decimals   = isDecimal ? numericStr.split(".")[1]?.length ?? 2 : 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / (duration * 1000), 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * numeric;
            setDisplay(isDecimal ? current.toFixed(decimals) : Math.floor(current).toString());
            if (progress < 1) requestAnimationFrame(tick);
            else setDisplay(numericStr);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/* ── Simple photo placeholder ── */
function AnimatedAvatar() {
  const [photoError, setPhotoError] = useState(false);

  return (
    <div className="relative w-full max-w-[18rem] aspect-square rounded-3xl overflow-hidden border border-white/10 bg-[#0d1320] mx-auto lg:mx-0">
      {/* Photo — profile.jpg in /public */}
      {!photoError && (
        <img
          src="/profile.jpg"
          alt="Shreyas Mirashi"
          onError={() => setPhotoError(true)}
          className="w-full h-full object-cover object-center"
        />
      )}

      {/* Placeholder shown only if photo fails to load */}
      {photoError && (
        <div className="w-full h-full flex flex-col items-center justify-center gap-3">
          <div className="w-16 h-16 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center">
            <Camera size={26} className="text-slate-500" />
          </div>
          <div className="text-center">
            <p className="text-xs text-slate-500 font-medium">Your Photo</p>
            <p className="font-mono text-[10px] text-slate-600 mt-0.5">
              /public/<span className="text-slate-400">profile.jpg</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#080c14]">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#a855f7]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-[#00d4ff] text-sm tracking-widest uppercase mb-3">&lt;about&gt;</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#a855f7] mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — animated avatar & rolling stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center lg:items-start gap-8"
          >
            <AnimatedAvatar />

            {/* Stats row with rolling counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 w-full">
              {about.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  whileHover={{ scale: 1.06 }}
                  className="glass rounded-xl p-4 text-center border border-white/10 cursor-default"
                >
                  <div className="text-2xl font-black gradient-text font-mono">
                    <RollingCounter target={stat.value} />
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — bio + highlights */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-8">{about.bio}</p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.03, borderColor: h.color }}
                  className="flex items-center gap-3 p-4 glass rounded-xl border border-white/10 transition-all cursor-default"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${h.color}20`, border: `1px solid ${h.color}40` }}
                  >
                    <h.icon size={18} style={{ color: h.color }} />
                  </div>
                  <span className="text-sm font-medium text-slate-300">{h.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
