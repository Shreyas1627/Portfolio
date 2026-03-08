"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Github, Linkedin, Terminal } from "lucide-react";
import { contact } from "@/lib/data";

// ─── Terminal Widget ──────────────────────────────────────────────
function TerminalWidget() {
  const [history, setHistory] = useState([
    { type: "output", text: "Welcome to Shreyas's terminal. Type 'help' for commands." },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const runCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const result = contact.terminalCommands[trimmed];
    let newHistory = [
      ...history,
      { type: "input", text: `> ${cmd}` },
    ];

    if (!trimmed) {
      setHistory(newHistory);
      return;
    }

    if (result === "__CLEAR__") {
      setHistory([{ type: "output", text: "Terminal cleared. Type 'help' for commands." }]);
      return;
    }

    if (result) {
      newHistory.push({ type: "output", text: result });
    } else {
      newHistory.push({
        type: "error",
        text: `Command not found: '${cmd}'. Type 'help' for a list of commands.`,
      });
    }
    setHistory(newHistory);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      runCommand(input);
      setInput("");
    }
  };

  return (
    <div
      className="glass rounded-2xl border border-white/10 overflow-hidden cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#131929] border-b border-white/10">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="font-mono text-xs text-slate-500 ml-2 flex items-center gap-1.5">
          <Terminal size={12} /> shreyas@portfolio:~
        </span>
      </div>

      {/* Output area */}
      <div className="p-4 h-44 sm:h-56 overflow-y-auto font-mono text-sm space-y-1">
        {history.map((line, i) => (
          <div
            key={i}
            className={
              line.type === "input"
                ? "text-[#00d4ff]"
                : line.type === "error"
                  ? "text-red-400"
                  : "text-[#34d399]"
            }
          >
            {line.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input row */}
      <div className="flex items-center gap-2 px-4 py-3 border-t border-white/10 bg-[#0d1320]">
        <span className="text-[#00d4ff] font-mono text-sm shrink-0">&gt;</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="type a command..."
          className="flex-1 bg-transparent font-mono text-sm text-white placeholder-slate-600 outline-none"
          autoComplete="off"
          spellCheck={false}
        />
      </div>
    </div>
  );
}

// ─── Contact Form ─────────────────────────────────────────────────
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // '' | 'sending' | 'sent' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          // Web3Forms access key — tied to write2shreyasmirashi@gmail.com
          // Visit https://web3forms.com and enter your email to activate.
          access_key: "8cf1f089-cf41-46c4-840c-fd02245c842d",
          subject: `Portfolio Contact from ${form.name}`,
          from_name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus(""), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl border border-white/10 p-6 space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { id: "name", label: "Name", type: "text", placeholder: "Your Name", required: true },
          { id: "email", label: "Email", type: "email", placeholder: "your@email.com", required: true },
        ].map((field) => (
          <div key={field.id}>
            <label className="block font-mono text-xs text-slate-400 mb-1.5 tracking-wide">
              {field.label}
            </label>
            <input
              id={field.id}
              type={field.type}
              placeholder={field.placeholder}
              required={field.required}
              value={form[field.id]}
              onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
              className="w-full bg-[#131929] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none focus:border-[#00d4ff]/50 focus:ring-1 focus:ring-[#00d4ff]/20 transition-all"
            />
          </div>
        ))}
      </div>

      <div>
        <label className="block font-mono text-xs text-slate-400 mb-1.5 tracking-wide">Message</label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell me about your project..."
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full bg-[#131929] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none focus:border-[#00d4ff]/50 focus:ring-1 focus:ring-[#00d4ff]/20 transition-all resize-none"
        />
      </div>

      {/* Status banners */}
      {status === "sent" && (
        <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#34d399]/10 border border-[#34d399]/30 text-[#34d399] text-sm font-medium">
          <span>✓</span> Message sent! I&apos;ll get back to you shortly.
        </div>
      )}
      {status === "error" && (
        <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
          <span>✗</span> Something went wrong. Email me directly at{" "}
          <a href={`mailto:${contact.email}`} className="underline">{contact.email}</a>.
        </div>
      )}

      <motion.button
        type="submit"
        disabled={status === "sending"}
        whileHover={{ scale: status === "sending" ? 1 : 1.02, boxShadow: "0 0 25px rgba(0,212,255,0.4)" }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#00d4ff] to-[#a855f7] transition-all disabled:opacity-60"
      >
        {status === "sending" ? (
          <><span className="animate-spin">⟳</span> Sending...</>
        ) : status === "sent" ? (
          <>✓ Sent!</>
        ) : (
          <><Send size={16} /> Send Message</>
        )}
      </motion.button>
    </form>
  );
}


// ─── Main Contact Section ─────────────────────────────────────────
export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-[#080c14] overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-[#00d4ff]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-[#00d4ff] text-sm tracking-widest uppercase mb-3">&lt;contact&gt;</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#a855f7] mx-auto mb-4" />
          <p className="text-slate-400 max-w-lg mx-auto">
            Open to internships, collaborations, and freelance projects.{" "}
            <a
              href={`https://mail.google.com/mail/?view=cm&to=${contact.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00d4ff] hover:underline font-medium"
            >
              {contact.email}
            </a>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left — contact form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-bold text-white text-lg mb-4 flex items-center gap-2">
              <Mail size={18} className="text-[#00d4ff]" /> Send a message
            </h3>
            <ContactForm />

            {/* Quick connect */}
            <div className="flex flex-wrap items-center gap-3 mt-4">
              {[
                { icon: Linkedin, href: contact.linkedin, label: "LinkedIn", color: "#00d4ff" },
                { icon: Github, href: contact.github, label: "GitHub", color: "#a855f7" },
                { icon: Mail, href: `https://mail.google.com/mail/?view=cm&to=${contact.email}`, label: "Email", color: "#34d399" },
              ].map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 glass rounded-xl border border-white/10 text-slate-400 hover:text-white text-sm transition-all"
                >
                  <Icon size={16} style={{ color }} />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-bold text-white text-lg mb-4 flex items-center gap-2">
              <Terminal size={18} className="text-[#34d399]" /> Interactive Terminal
            </h3>
            <TerminalWidget />
            <p className="font-mono text-xs text-slate-600 mt-2 text-center">
              Try: whoami · contact · social · skills · clear
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
