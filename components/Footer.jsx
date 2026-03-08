"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Terminal } from "lucide-react";
import { contact } from "@/lib/data";

const year = new Date().getFullYear();

const links = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Experience", href: "experience" },
  { label: "Contact", href: "contact" },
];

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0a0f1e] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#a855f7] flex items-center justify-center">
              <Terminal size={16} className="text-white" />
            </div>
            <div>
              <p className="font-mono font-bold text-white">Shreyas Mirashi</p>
              <p className="font-mono text-xs text-slate-500">CE Student | AI & ML Developer</p>
            </div>
          </motion.div>

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-x-5 gap-y-2 justify-center"
          >
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-sm text-slate-500 hover:text-[#00d4ff] transition-colors"
              >
                {l.label}
              </button>
            ))}
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            {[
              { icon: Linkedin, href: contact.linkedin, color: "#00d4ff", external: true },
              { icon: Github, href: contact.github, color: "#a855f7", external: true },
              { icon: Mail, href: `https://mail.google.com/mail/?view=cm&to=${contact.email}`, color: "#34d399", external: true },
            ].map(({ icon: Icon, href, color, external }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.15 }}
                className="w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
              >
                <Icon size={16} style={{ color }} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="font-mono text-xs text-slate-600">
            © {year} Shreyas Mirashi.
          </p>
          {/* Built with{" "} */}
          {/* <span className="text-[#00d4ff]">Next.js</span> &{" "}
            <span className="text-[#a855f7]">Framer Motion</span>. */}

        </div>
      </div>
    </footer>
  );
}
