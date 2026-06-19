import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Briefcase, RotateCcw, CheckCircle2, Star, TrendingUp, Award, Users, Sparkles, Phone, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Logo } from "@/components/Logo";
import { COURSES } from "@/lib/courses";
import { LeadForm } from "@/components/LeadForm";
import { SalaryGraph } from "@/components/ComicCharacter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Next-Gen ERP Solutions — SAP Training & Placement in India" },
      { name: "description", content: "Transform your career with SAP. Hands-on training, real projects, and end-to-end placement support for freshers, working professionals and career-gap candidates." },
      { property: "og:title", content: "Next-Gen ERP Solutions — SAP Training & Placement" },
      { property: "og:description", content: "India's career transformation platform for SAP training & placement." },
    ],
  }),
  component: HomePage,
});

const JOURNEYS = [
  { icon: GraduationCap, emoji: "🎓", title: "Fresher", desc: "Completed graduation? Looking for your first job?", cta: "Start My Journey", to: "/fresher-journey", color: "from-[#0B1C9C] to-[#1686F5]" },
  { icon: Briefcase, emoji: "💼", title: "Experienced Professional", desc: "Working hard but salary growth is slow?", cta: "Upgrade My Career", to: "/experienced-professional", color: "from-[#1686F5] to-[#19C7D8]" },
  { icon: RotateCcw, emoji: "🔄", title: "Career Gap", desc: "Ready to restart your career?", cta: "Restart My Career", to: "/career-gap", color: "from-[#19C7D8] to-[#09B83E]" },
] as const;

const PROCESS = [
  { step: "01", title: "Enroll", desc: "Book a free demo and choose your SAP module." },
  { step: "02", title: "Train", desc: "Live classes with hands-on SAP server access." },
  { step: "03", title: "Projects", desc: "Real-time, industry-grade implementation projects." },
  { step: "04", title: "Interview", desc: "Mock interviews, resume building & soft skills." },
  { step: "05", title: "Placement", desc: "Tied-up MNCs & SAP partners hiring our students." },
  { step: "06", title: "Promotion", desc: "Continuous career mentoring after you join." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="halftone absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5" /> India's #1 SAP Career Transformation Platform
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-5xl font-black leading-[1.05] text-foreground md:text-7xl"
            >
              Transform Your <br /> Career With <span className="text-gradient-brand">SAP</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="mt-5 max-w-xl text-lg text-muted-foreground"
            >
              For Freshers, Experienced Professionals, and Career Gap Candidates. Industry-led SAP training, real projects, and 100% placement support.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 font-semibold text-white shadow-glow transition hover:scale-105">
                Book Free Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-brand bg-white px-6 py-3.5 font-semibold text-brand hover:bg-brand hover:text-white transition">
                <Phone className="h-4 w-4" /> Talk To Career Advisor
              </Link>
              <Link to="/career-journeys" className="inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3.5 font-semibold text-white hover:opacity-90 transition">
                Explore Journeys
              </Link>
              <a href="https://wa.me/919000333859" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-semibold text-white hover:scale-105 transition">
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </motion.div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <Stat n="5,000+" label="Careers Transformed" />
              <Stat n="120+" label="Hiring Partners" />
              <Stat n="92%" label="Placement Rate" />
            </div>
          </div>

          {/* Animated brand-logo growth */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-brand opacity-20 blur-3xl" />
            <div className="relative rounded-[2rem] border-2 border-white bg-white p-6 shadow-glow">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <span>Salary Growth</span>
                <span className="text-brand-green">+340%</span>
              </div>
              <div className="mt-3 h-48">
                <SalaryGraph growth={1} />
              </div>
              <div className="mt-4 flex items-center justify-center">
                <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }}>
                  <Logo className="h-14" />
                </motion.div>
              </div>
            </div>
            {/* floating chips */}
            <FloatingChip className="-left-6 top-10" delay={0.2}>SAP S/4HANA</FloatingChip>
            <FloatingChip className="-right-4 top-32" delay={0.5}>FICO ★ MM ★ SD</FloatingChip>
            <FloatingChip className="bottom-4 -left-4" delay={0.8}>100% Placement</FloatingChip>
          </motion.div>
        </div>
      </section>

      {/* CHOOSE YOUR JOURNEY */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionHeader eyebrow="Choose Your Journey" title="Where are you on your career path?" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {JOURNEYS.map((j, i) => (
            <motion.div
              key={j.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition"
            >
              <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${j.color} opacity-20 blur-2xl transition group-hover:opacity-40`} />
              <div className="relative">
                <div className="text-5xl">{j.emoji}</div>
                <h3 className="mt-4 text-2xl font-extrabold">{j.title}</h3>
                <p className="mt-2 text-muted-foreground">{j.desc}</p>
                <Link to={j.to} className="mt-6 inline-flex items-center gap-2 font-semibold text-brand group-hover:gap-3 transition-all">
                  {j.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY SAP */}
      <section className="bg-brand-dark py-20 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader light eyebrow="Why SAP" title="The world's most in-demand enterprise platform" />
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              { icon: TrendingUp, n: "$430B", t: "Global ERP market by 2028" },
              { icon: Users, n: "440K+", t: "Open SAP jobs worldwide" },
              { icon: Star, n: "92/100", t: "Fortune 500 use SAP" },
              { icon: Award, n: "₹28 LPA", t: "Top SAP consultant salary" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <s.icon className="h-7 w-7 text-brand-teal" />
                <div className="mt-3 text-3xl font-black text-white">{s.n}</div>
                <div className="mt-1 text-sm text-white/70">{s.t}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY NEXT-GEN */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionHeader eyebrow="Why Next-Gen ERP Solutions" title="Trainers who've built it. Mentors who care." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { t: "Industry-Expert Trainers", d: "Certified SAP consultants with 12+ years of real implementation experience." },
            { t: "Live SAP Server Access", d: "Practice on the same systems used by global enterprises — anytime, anywhere." },
            { t: "Real-Time Projects", d: "End-to-end implementation projects modelled on actual client work." },
            { t: "Placement Cell", d: "Dedicated team with 120+ hiring partners across India & abroad." },
            { t: "Career Mentoring", d: "Soft skills, mock interviews, resume building and post-placement support." },
            { t: "Flexible Batches", d: "Weekday, weekend, fast-track and corporate training options." },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <CheckCircle2 className="h-7 w-7 text-brand-green" />
              <h4 className="mt-3 text-lg font-bold">{f.t}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COURSES */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader eyebrow="SAP Courses" title="Pick the module that fits your future" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {COURSES.slice(0, 8).map((c, i) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6 }}
              >
                <Link to="/courses/$slug" params={{ slug: c.slug }} className="group block h-full overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-card transition">
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${c.color} text-2xl shadow-glow`}>
                    {c.icon}
                  </div>
                  <h4 className="text-xl font-extrabold">{c.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{c.tagline}</p>
                  <div className="mt-4 flex items-center justify-between text-xs">
                    <span className="font-semibold text-foreground">{c.duration}</span>
                    <span className="font-semibold text-brand group-hover:underline">Apply Now →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/courses" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-white hover:scale-105 transition">
              View All Courses <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PLACEMENT PROCESS */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionHeader eyebrow="Placement Process" title="From enrolment to your dream offer letter" />
        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-6">
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative rounded-2xl border-2 border-brand-dark bg-card p-5 shadow-[4px_4px_0_#071126]"
            >
              <div className="text-3xl font-black text-gradient-brand">{p.step}</div>
              <h5 className="mt-2 font-extrabold">{p.title}</h5>
              <p className="mt-1 text-xs text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TRAINERS */}
      <section className="bg-brand-dark py-20 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader light eyebrow="Trainer Section" title="Learn from senior SAP consultants" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { n: "Ravi Kumar", r: "Sr. SAP FICO Consultant", e: "15+ yrs · Ex-Deloitte" },
              { n: "Anita Sharma", r: "SAP SuccessFactors Lead", e: "12+ yrs · Ex-Accenture" },
              { n: "Mohammed Ali", r: "SAP ABAP / Fiori Architect", e: "14+ yrs · Ex-IBM" },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-brand text-2xl font-black">
                  {t.n.split(" ").map(x => x[0]).join("")}
                </div>
                <h4 className="mt-4 text-xl font-extrabold">{t.n}</h4>
                <div className="text-brand-teal text-sm">{t.r}</div>
                <div className="mt-1 text-xs text-white/60">{t.e}</div>
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-brand-teal text-brand-teal" />)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionHeader eyebrow="Success Stories" title="Real careers. Real numbers." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { n: "Arjun", b: "₹0 / no job", a: "₹6.5 LPA · TCS", m: "SAP FICO" },
            { n: "Rahul", b: "₹4.2 LPA support", a: "₹14 LPA · Infosys", m: "SAP MM" },
            { n: "Priya", b: "5-yr career gap", a: "₹7.8 LPA · Capgemini", m: "SuccessFactors" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand font-black text-white">{s.n[0]}</div>
                <div>
                  <div className="font-extrabold">{s.n}</div>
                  <div className="text-xs text-muted-foreground">{s.m} Graduate</div>
                </div>
              </div>
              <div className="mt-5 space-y-2 text-sm">
                <div className="rounded-lg bg-destructive/10 px-3 py-2"><b>Before:</b> {s.b}</div>
                <div className="rounded-lg bg-brand-green/10 px-3 py-2 text-foreground"><b className="text-brand-green">After:</b> {s.a}</div>
              </div>
              <p className="mt-4 text-sm italic text-muted-foreground">"Next-Gen changed everything. The trainers care, the projects are real, and placement is guaranteed."</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CTA + LEAD FORM */}
      <section className="bg-gradient-hero py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2">
          <div>
            <div className="inline-block rounded-full bg-brand-dark px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">Now It's Your Turn</div>
            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Your SAP Success Story <span className="text-gradient-brand">Starts Here</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Transform your future with industry-focused SAP training and placement support. Talk to a career advisor — it's free.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:+919000333859" className="rounded-full bg-brand px-6 py-3 font-semibold text-white shadow-glow">📞 +91 90003 33859</a>
              <a href="https://wa.me/919000333859" target="_blank" rel="noreferrer" className="rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white shadow-glow">💬 WhatsApp Us</a>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>
    </SiteLayout>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-extrabold text-foreground">{n}</div>
      <div className="text-xs uppercase tracking-wider">{label}</div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <div className="text-center">
      <div className={`inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest ${light ? "bg-white/10 text-brand-teal" : "bg-brand-dark text-white"}`}>{eyebrow}</div>
      <h2 className={`mt-4 text-3xl font-black md:text-5xl ${light ? "text-white" : "text-foreground"}`}>{title}</h2>
    </div>
  );
}

function FloatingChip({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: [0, -8, 0] }}
      transition={{ opacity: { delay }, y: { duration: 4, repeat: Infinity, delay } }}
      className={`absolute z-10 rounded-full border-2 border-brand-dark bg-white px-3 py-1.5 text-xs font-bold shadow-[3px_3px_0_#071126] ${className}`}
    >
      {children}
    </motion.div>
  );
}
