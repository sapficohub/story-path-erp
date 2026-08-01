import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Briefcase, RotateCcw, CheckCircle2, Star, TrendingUp, Award, Users, Sparkles, Phone, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Logo } from "@/components/Logo";
import { COURSES } from "@/lib/courses";
import { LeadForm } from "@/components/LeadForm";
import { SalaryGraph } from "@/components/ComicCharacter";
import { JsonLd } from "@/components/JsonLd";
import { canonicalUrl } from "@/components/seo";

import {
  localBusinessSchema,
  webPageSchema,
  breadcrumbSchema,
  SITE_URL,
} from "@/lib/schema";
export const Route = createFileRoute("/")({
head: () => ({
  links: [
    {
      rel: "canonical",
      href: canonicalUrl("/"),
    },
  ],

  meta: [
    // SEO
    {
      title: "SAP Training Institute in Hyderabad | Next-Gen ERP",
    },
    {
      name: "description",
      content:
        "Join Next-Gen ERP Solutions for practical SAP training in Hyderabad with expert trainers, live server access, real-time projects and placement assistance.",
    },
    {
      name: "keywords",
      content:
        "SAP Training Hyderabad, SAP FICO Training, SAP MM Training, SAP SD Training, SAP ABAP Training, SAP BASIS Training, SAP HCM Training, SAP SuccessFactors Training, SAP Institute Hyderabad, SAP Course, SAP Certification, SAP Placement",
    },
    {
      name: "robots",
      content:
        "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    },

    // Open Graph
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:site_name",
      content: "Next-Gen ERP Solutions",
    },
    {
      property: "og:title",
      content:
        "Best SAP Training Institute in Hyderabad | Next-Gen ERP Solutions",
    },
    {
      property: "og:description",
      content:
        "Master SAP with live projects, certified trainers, interview preparation and placement assistance.",
    },
    {
      property: "og:url",
      content: "https://www.next-generpsolutions.com/",
    },
    {
      property: "og:image",
      content: "https://www.next-generpsolutions.com/next-gen-erp-solutions-sap-training-hyderabad.jpg",
    },
    {
      property: "og:image:alt",
      content:
        "Next-Gen ERP Solutions - SAP Training & Placement Institute",
    },
    {
      property: "og:locale",
      content: "en_IN",
    },

    // Twitter
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content:
        "Best SAP Training Institute in Hyderabad | Next-Gen ERP Solutions",
    },
    {
      name: "twitter:description",
      content:
        "Industry-oriented SAP Training with real-time projects and placement assistance.",
    },
    {
      name: "twitter:image",
      content: "https://www.next-generpsolutions.com/next-gen-erp-solutions-sap-training-hyderabad.jpg",
    },
    {
      name: "twitter:image:alt",
      content:
        "Next-Gen ERP Solutions - SAP Training & Placement Institute",
    },

    // Author
    {
      name: "author",
      content: "Next-Gen ERP Solutions",
    },

    // Classification
    {
      name: "classification",
      content: "Education",
    },

    // Category
    {
      name: "category",
      content: "SAP Training Institute",
    },
  ],
}),
  component: HomePage,
});

const JOURNEYS = [
  { icon: GraduationCap, emoji: "🎓", title: "Fresher", desc: "Build practical SAP knowledge, complete guided projects and prepare confidently for your first professional role.", cta: "Start My Journey", to: "/journey/fresher", color: "from-[#0B1C9C] to-[#1686F5]" },
  { icon: Briefcase, emoji: "💼", title: "Experienced Professional", desc: "Connect your industry experience with specialised SAP skills to pursue stronger roles and long-term career growth.", cta: "Upgrade My Career", to: "/journey/experienced", color: "from-[#1686F5] to-[#19C7D8]" },
  { icon: RotateCcw, emoji: "🔄", title: "Career Gap", desc: "Refresh your professional knowledge through structured SAP learning and prepare for a confident return to work.", cta: "Restart My Career", to: "/journey/career-gap", color: "from-[#19C7D8] to-[#09B83E]" },
] as const;

const PROCESS = [
  { step: "01", title: "Enroll", desc: "Attend a free demo and select the SAP module that matches your career goals." },
  { step: "02", title: "Train", desc: "Learn through instructor-led classes while practising directly on a live SAP server." },
  { step: "03", title: "Projects", desc: "Apply your knowledge through realistic SAP implementation projects and connected business scenarios." },
  { step: "04", title: "Interview", desc: "Strengthen your resume, communication and interview performance through structured practice." },
  { step: "05", title: "Placement", desc: "Receive placement assistance and updates about opportunities relevant to your skills and eligibility." },
  { step: "06", title: "Growth", desc: "Continue developing your SAP knowledge through career guidance and focused professional learning." },
];

const TESTIMONIALS = [
  {
    n: "Arjun",
    b: "₹0 / no job",
    a: "₹6.5 LPA · TCS",
    m: "SAP FICO",
    q: "The practical SAP FICO sessions helped me understand business scenarios clearly, while guided interview preparation improved my confidence.",
  },
  {
    n: "Rahul",
    b: "₹4.2 LPA support",
    a: "₹14 LPA · Infosys",
    m: "SAP MM",
    q: "Live server practice and procurement exercises strengthened my SAP MM knowledge, and the mock interviews helped me explain it effectively.",
  },
  {
    n: "Priya",
    b: "5-yr career gap",
    a: "₹7.8 LPA · Capgemini",
    m: "SuccessFactors",
    q: "Flexible classes, practical SuccessFactors exercises and regular mentor feedback gave me confidence to prepare for my return to work.",
  },
] as const;

function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd
        data={webPageSchema({
          url: `${SITE_URL}/`,
          name: "Best SAP Training Institute in Hyderabad | Next-Gen ERP Solutions",
          description:
            "Industry-focused SAP training with real-time projects, live SAP server access and placement assistance.",
        })}
      />

      <JsonLd
        data={breadcrumbSchema([
          {
            name: "Home",
            url: `${SITE_URL}/`,
          },
        ])}
      />

      <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="halftone absolute inset-0" />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:gap-10 md:py-24">
          <div className="min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5" /> Practical SAP Learning and Career Support
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-4xl font-black leading-[1.08] text-foreground min-[390px]:text-5xl md:text-7xl"
            >
              SAP Training in Hyderabad for Career-Focused Learners
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Our SAP training in Hyderabad is designed for career-focused learners who want practical knowledge, live server experience and structured interview preparation. Next-Gen ERP Solutions helps graduates, working professionals and career restart candidates develop job-ready SAP skills through trainer-led classes and real-time business scenarios.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 font-semibold text-white shadow-glow transition hover:scale-105 max-[375px]:w-full">
                Book Free Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-brand bg-white px-5 py-3 font-semibold text-brand transition hover:bg-brand hover:text-white max-[375px]:w-full">
                <Phone className="h-4 w-4" /> Talk To Career Advisor
              </Link>
              <Link to="/career-journeys" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-dark px-5 py-3 font-semibold text-white transition hover:opacity-90 max-[375px]:w-full">
                Explore Journeys
              </Link>
              <a href="https://wa.me/919000333859" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-white transition hover:scale-105 max-[375px]:w-full">
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </motion.div>
            <div className="mt-10 grid grid-cols-2 gap-4 text-sm text-muted-foreground min-[360px]:grid-cols-3">
              <Stat n="5,000+" label="Careers Transformed" />
              <Stat n="120+" label="Hiring Partners" />
              <Stat n="92%" label="Placement Rate" />
            </div>
          </div>

          {/* Animated brand-logo growth */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-md overflow-visible"
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
                  <Logo className="h-20 w-auto sm:h-24" />
                </motion.div>
              </div>
            </div>
            {/* floating chips */}
            <FloatingChip className="-left-6 top-10" delay={0.2}>SAP S/4HANA</FloatingChip>
            <FloatingChip className="-right-4 top-32" delay={0.5}>FICO ★ MM ★ SD</FloatingChip>
            <FloatingChip className="bottom-4 -left-4" delay={0.8}>Career Support</FloatingChip>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-5xl px-4 py-20">
        <SectionHeader
          eyebrow="Practical SAP Learning"
          title="Learn Through Real-Time Business Scenarios"
        />
        <div className="mt-10 space-y-6 text-base leading-8 text-muted-foreground">
          <p>
            Next-Gen ERP Solutions provides practical SAP training in Hyderabad for graduates, working professionals and career-restart candidates. Learners receive guided instruction, live server practice, real-time project exposure and interview preparation across major SAP modules.
          </p>
          <p>
            Our training approach focuses on understanding business processes before applying them in SAP. Students practise configuration, transaction processing, testing and troubleshooting so they can explain both functional concepts and practical scenarios during interviews.
          </p>
          <p>
            Career support includes resume guidance, mock interviews, profile-building assistance and updates about relevant opportunities. Placement assistance supports the job-search process, while employment outcomes depend on each learner's skills, performance, eligibility and current hiring conditions.
          </p>
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
        <SectionHeader eyebrow="Why Next-Gen ERP Solutions" title="Practical SAP Courses with Live Server Access" />
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
              <p className="mt-3 text-lg font-bold">{f.t}</p>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COURSES */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader eyebrow="SAP Courses" title="SAP Courses for Freshers and Professionals" />
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
                  <h3 className="text-xl font-extrabold">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.tagline}</p>
                  <div className="mt-4 flex items-center justify-between text-xs">
                    <span className="font-semibold text-foreground">{c.duration}</span>
                    <span className="font-semibold text-brand group-hover:underline">
                      Explore {c.title} Training →
                    </span>
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
        <SectionHeader eyebrow="Career Preparation" title="Interview Preparation and Placement Assistance" />
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
              <p className="mt-2 font-extrabold">{p.title}</p>
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
                <p className="mt-4 text-xl font-extrabold">{t.n}</p>
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
        <SectionHeader eyebrow="Learner Experiences" title="What Our Learners Say" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((s, i) => (
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
                <div className="rounded-lg bg-destructive/10 px-3 py-2">
                  <span className="font-bold">Before:</span> {s.b}
                </div>
                <div className="rounded-lg bg-brand-green/10 px-3 py-2 text-foreground">
                  <span className="font-bold text-brand-green">After:</span> {s.a}
                </div>
              </div>
              <p className="mt-4 text-sm italic text-muted-foreground">
                “{s.q}”
              </p>
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
              Build practical SAP skills with expert guidance, live server exercises and structured career support. Speak with a career advisor to discuss the learning path that suits your goals.
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
    </>
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
      className={`absolute z-10 hidden rounded-full border-2 border-brand-dark bg-white px-3 py-1.5 text-xs font-bold shadow-[3px_3px_0_#071126] sm:block ${className}`}
    >
      {children}
    </motion.div>
  );
}
