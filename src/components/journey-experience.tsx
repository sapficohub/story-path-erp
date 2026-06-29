import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { NavBar, Footer } from "./site-chrome";

export type Chapter = {
  num: number;
  title: string;
  scene: string;
  bubble?: string;
  visual: ReactNode;
  accent: "blue" | "teal" | "green";
};

export type JourneyConfig = {
  character: string;
  theme: string;
  tagline: string;
  emoji: string;
  accentLabel: string;
  meterLabel?: string;
  chapters: Chapter[];
};

const accentMap = {
  blue: { bg: "bg-[#1686F5]", text: "text-[#1686F5]", glow: "shadow-glow-blue", ring: "ring-[#1686F5]/40" },
  teal: { bg: "bg-[#19C7D8]", text: "text-[#19C7D8]", glow: "shadow-glow-teal", ring: "ring-[#19C7D8]/40" },
  green: { bg: "bg-[#09B83E]", text: "text-[#09B83E]", glow: "shadow-glow-green", ring: "ring-[#09B83E]/40" },
};

function ChapterPanel({ chapter, index, total }: { chapter: Chapter; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.95]);
  const reverse = index % 2 === 1;
  const a = accentMap[chapter.accent];

  return (
    <section ref={ref} className="min-h-screen relative flex items-center px-6 py-24">
      <motion.div style={{ opacity }} className="absolute inset-0 -z-10 grid-bg opacity-30" />
      <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          style={{ y, opacity }}
          className={`${reverse ? "lg:order-2" : ""}`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className={`h-10 w-10 rounded-full ${a.bg} flex items-center justify-center font-display font-extrabold text-white ${a.glow}`}>
              {chapter.num}
            </div>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-white/50">
              Chapter {chapter.num} / {total}
            </span>
          </div>
          <h2 className="font-display font-extrabold text-5xl md:text-6xl text-white leading-[1.05] mb-5">
            {chapter.title}
          </h2>
          <p className="text-lg text-white/70 leading-relaxed max-w-xl mb-8">{chapter.scene}</p>
          {chapter.bubble && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="comic-bubble inline-block max-w-md"
            >
              <span className={`block text-xs uppercase tracking-widest mb-1 ${a.text}`}>{chapter.num <= 3 ? "Inner voice" : "Realization"}</span>
              "{chapter.bubble}"
            </motion.div>
          )}
        </motion.div>
        <motion.div
          style={{ scale, y: useTransform(scrollYProgress, [0, 1], [40, -40]) }}
          className={`${reverse ? "lg:order-1" : ""} relative aspect-[4/5] rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden ${a.glow}`}
        >
          {chapter.visual}
        </motion.div>
      </div>
    </section>
  );
}

function ProgressTracker({ chapters }: { chapters: Chapter[] }) {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  return (
    <div className="fixed top-16 inset-x-0 z-40">
      <motion.div style={{ scaleX: width, transformOrigin: "left" }} className="h-1 bg-growth" />
      <div className="hidden md:flex justify-center mt-3">
        <div className="flex items-center gap-1.5 rounded-full bg-[#071126]/80 backdrop-blur px-3 py-2 border border-white/10">
          {chapters.map((c) => (
            <a key={c.num} href={`#ch-${c.num}`} className="h-2 w-2 rounded-full bg-white/30 hover:bg-white transition-colors" title={`Chapter ${c.num}: ${c.title}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CareerMeter({ label = "Career Growth" }: { label?: string }) {
  const { scrollYProgress } = useScroll();
  const pct = useTransform(scrollYProgress, [0, 1], [5, 100]);
  const [val, setVal] = useState(5);
  useEffect(() => pct.on("change", (v) => setVal(Math.round(v))), [pct]);
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:block">
      <div className="rounded-2xl bg-[#071126]/90 backdrop-blur border border-white/10 p-4 w-64 shadow-elevated">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-semibold tracking-wider uppercase text-white/60">{label}</span>
          <span className="text-sm font-display font-extrabold text-[#09B83E]">{val}%</span>
        </div>
        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
          <motion.div style={{ width: `${val}%` }} className="h-full bg-growth" />
        </div>
      </div>
    </div>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-[#071126]">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-5xl text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-[#19C7D8] mb-8">
          Three Journeys · One Destination
        </div>

        {/* The growth graph with all 3 characters standing on it */}
        <div className="relative mx-auto w-full max-w-2xl h-64 mb-10">
          <svg viewBox="0 0 500 220" className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="fg2" x1="0" x2="1">
                <stop offset="0%" stopColor="#1686F5" />
                <stop offset="50%" stopColor="#19C7D8" />
                <stop offset="100%" stopColor="#09B83E" />
              </linearGradient>
              <linearGradient id="fgfill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#09B83E" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#09B83E" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2 }}
              d="M 20 190 Q 130 170 200 130 T 360 70 T 480 20"
              stroke="url(#fg2)" strokeWidth="5" fill="none" strokeLinecap="round"
            />
            <motion.path
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.5 }}
              d="M 20 190 Q 130 170 200 130 T 360 70 T 480 20 L 480 210 L 20 210 Z"
              fill="url(#fgfill)"
            />
          </svg>
          {/* characters on the graph */}
          {[
            { left: "18%", top: "55%", color: "#1686F5", name: "Arjun", tag: "Fresher", delay: 0.6 },
            { left: "45%", top: "32%", color: "#19C7D8", name: "Rahul", tag: "Experienced", delay: 0.9 },
            { left: "76%", top: "8%", color: "#E94B8C", name: "Priya", tag: "Restart", delay: 1.2 },
          ].map((c) => (
            <motion.div
              key={c.name}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: c.delay, type: "spring", stiffness: 180 }}
              className="absolute -translate-x-1/2"
              style={{ left: c.left, top: c.top }}
            >
              <div className="w-14 h-20 md:w-16 md:h-24">
                <svg viewBox="0 0 100 130" className="w-full h-full">
                  <rect x="25" y="75" width="50" height="55" rx="10" fill={c.color} />
                  <rect x="25" y="75" width="50" height="8" fill="rgba(0,0,0,0.15)" />
                  <circle cx="50" cy="45" r="28" fill="#F4C9A0" />
                  <path d="M 22 40 Q 30 18 50 18 Q 70 18 78 40 Q 75 28 50 26 Q 25 28 22 40" fill="#1a1a1a" />
                  <circle cx="40" cy="45" r="3" fill="#1a1a1a" />
                  <circle cx="60" cy="45" r="3" fill="#1a1a1a" />
                  <path d="M 35 60 Q 50 75 65 60" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>
              </div>
              <div className="mt-1 text-center">
                <div className="text-[11px] font-display font-bold text-white">{c.name}</div>
                <div className="text-[9px] uppercase tracking-widest text-white/50">{c.tag}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <h2 className="font-display font-extrabold text-5xl md:text-7xl text-white leading-[1.02] mb-4">
          Different Stories. <br/><span className="text-gradient-growth">One Destination.</span>
        </h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-2">
          Freshers. Working Professionals. Career Restart Candidates.
        </p>
        <p className="text-xl md:text-2xl font-display font-semibold text-white mb-10">
          The right skill changes everything.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href="#contact" className="rounded-full bg-brand px-7 py-4 font-display font-semibold text-white shadow-glow-blue hover:scale-105 transition">Book Free Demo</a>
          <a href="#contact" className="rounded-full bg-white/10 border border-white/20 px-7 py-4 font-display font-semibold text-white hover:bg-white/15 transition">Talk To Career Advisor</a>
          <a href="#contact" className="rounded-full bg-[#19C7D8] px-7 py-4 font-display font-semibold text-[#071126] shadow-glow-teal hover:scale-105 transition">WhatsApp Us</a>
          <a href="#contact" className="rounded-full bg-growth px-7 py-4 font-display font-semibold text-white shadow-glow-green hover:scale-105 transition">Apply Now</a>
        </div>
      </motion.div>
    </section>
  );
}

export function JourneyExperience({ config }: { config: JourneyConfig }) {
  return (
    <div className="min-h-screen bg-[#071126] text-white">
      <NavBar dark />
      <ProgressTracker chapters={config.chapters} />
      <CareerMeter label={config.meterLabel} />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center px-6 pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-5xl text-center"
        >
          <div className="text-7xl md:text-8xl mb-6">{config.emoji}</div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-[#19C7D8] mb-6">
            {config.accentLabel}
          </div>
          <h1 className="font-display font-black text-6xl md:text-8xl text-white leading-[0.95] mb-5">
            Meet <span className="text-gradient-growth">{config.character}</span>
          </h1>
          <p className="font-display font-bold text-2xl md:text-3xl text-white/90 mb-4">{config.theme}</p>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10">{config.tagline}</p>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-sm text-white/40 font-semibold tracking-widest uppercase"
          >
            Scroll to begin the story ↓
          </motion.div>
        </motion.div>
      </section>

      {/* Chapters */}
      {config.chapters.map((ch, i) => (
        <div key={ch.num} id={`ch-${ch.num}`}>
          <ChapterPanel chapter={ch} index={i} total={config.chapters.length} />
        </div>
      ))}

      <FinalCTA />

      <div className="bg-[#071126] text-center pb-12">
        <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-semibold">
          ← Back to all journeys
        </Link>
      </div>

      <Footer />
    </div>
  );
}
