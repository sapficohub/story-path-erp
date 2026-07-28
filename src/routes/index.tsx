import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Briefcase, RotateCcw, CheckCircle2, Star, TrendingUp, Award, Users, Sparkles, Phone, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Logo } from "@/components/Logo";
import { FEATURED_COURSES } from "@/lib/courses";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";

import {
  educationalOrganizationSchema,
  breadcrumbSchema,
  localBusinessSchema,
  SITE_URL,
} from "@/lib/schema";
export const Route = createFileRoute("/")({
head: () => ({
  links: [
    {
      rel: "canonical",
      href: "https://www.next-generpsolutions.com/",
    },
  ],

  meta: [
    // SEO
    {
      title: "SAP Training Institute Hyderabad | Next-Gen ERP Solutions",
    },
    {
      name: "description",
      content:
        "Get job-focused SAP training in Hyderabad with live projects, server access, expert trainers, certification guidance and placement assistance.",
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
      content: "https://www.next-generpsolutions.com/og-image.jpg",
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
      content: "https://www.next-generpsolutions.com/og-image.jpg",
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
  { icon: GraduationCap, emoji: "🎓", title: "Fresher", desc: "Build practical SAP skills and prepare confidently for your first professional role.", cta: "Start My Journey", to: "/journey/fresher", color: "from-[#0B1C9C] to-[#1686F5]" },
  { icon: Briefcase, emoji: "💼", title: "Experienced Professional", desc: "Add specialized SAP expertise to unlock stronger roles and faster salary growth.", cta: "Upgrade My Career", to: "/journey/experienced", color: "from-[#1686F5] to-[#19C7D8]" },
  { icon: RotateCcw, emoji: "🔄", title: "Career Gap", desc: "Refresh your professional skills and return to work with a structured SAP roadmap.", cta: "Restart My Career", to: "/journey/career-gap", color: "from-[#19C7D8] to-[#09B83E]" },
] as const;

const PROCESS = [
  { step: "01", title: "Enroll", desc: "Book a free demo and select the SAP module that matches your goals." },
  { step: "02", title: "Train", desc: "Attend instructor-led classes while practising directly on a live SAP server." },
  { step: "03", title: "Projects", desc: "Apply your knowledge through industry-focused SAP implementation projects and scenarios." },
  { step: "04", title: "Interview", desc: "Strengthen your resume, communication skills, and interview performance through guided practice." },
  { step: "05", title: "Placement", desc: "Connect with relevant opportunities through our network of hiring partners and employers." },
  { step: "06", title: "Promotion", desc: "Continue receiving career guidance as you grow within your new SAP role." },
];

function HomePage() {
  return (
    <>
      <JsonLd data={educationalOrganizationSchema} />
      <JsonLd data={localBusinessSchema()} />

      <JsonLd
        data={breadcrumbSchema([
          {
            name: "Home",
            url: SITE_URL,
          },
        ])}
      />

      <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="halftone absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5" /> SAP Training Institute in Hyderabad
            </div>
            <h1
              className="mt-5 text-5xl font-black leading-[1.05] text-foreground md:text-7xl"
            >
              Build Your Career With <br />
              <span className="text-gradient-brand">SAP Training in Hyderabad</span>
            </h1>
            <p
              className="mt-5 max-w-xl text-lg text-muted-foreground"
            >
              Freshers, experienced professionals, and career-gap candidates gain industry-led SAP training, practical projects, and dedicated placement support.
            </p>
            <div
              className="mt-7 flex flex-wrap gap-3"
            >
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 font-semibold text-white shadow-glow transition hover:scale-105">
                Book Your Free SAP Demo <ArrowRight className="h-4 w-4" />
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
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <Stat n="5,000+" label="Careers Transformed" />
              <Stat n="120+" label="Hiring Partners" />
              <Stat n="92%" label="Placement Rate" />
            </div>
          </div>

          {/* Animated brand-logo growth */}
          <div
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-brand opacity-20 blur-3xl" />
            <div className="relative rounded-[2rem] border-2 border-white bg-white p-6 shadow-glow">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <span>Salary Growth</span>
                <span className="text-brand-green">+340%</span>
              </div>
              <div className="mt-3 h-48">
                <HomeSalaryGraph />
              </div>
              <div className="mt-4 flex items-center justify-center">
                <div>
                  <Logo className="h-14" />
                </div>
              </div>
            </div>
            {/* floating chips */}
            <FloatingChip className="-left-6 top-10">SAP S/4HANA</FloatingChip>
            <FloatingChip className="-right-4 top-32">FICO ★ MM ★ SD</FloatingChip>
            <FloatingChip className="bottom-4 -left-4">100% Placement</FloatingChip>
          </div>
        </div>
      </section>

      {/* CHOOSE YOUR JOURNEY */}
      <section className="content-auto mx-auto max-w-7xl px-4 py-20">
        <SectionHeader eyebrow="Choose Your Journey" title="Where are you on your career path?" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {JOURNEYS.map((j) => (
            <div
              key={j.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition hover:-translate-y-2"
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
            </div>
          ))}
        </div>
      </section>

      {/* WHY SAP */}
      <section className="content-auto bg-brand-dark py-20 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader light eyebrow="Why SAP" title="The world's most in-demand enterprise platform" />
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              { icon: TrendingUp, n: "$430B", t: "Global ERP market by 2028" },
              { icon: Users, n: "440K+", t: "Open SAP jobs worldwide" },
              { icon: Star, n: "92/100", t: "Fortune 500 use SAP" },
              { icon: Award, n: "₹28 LPA", t: "Top SAP consultant salary" },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <s.icon className="h-7 w-7 text-brand-teal" />
                <div className="mt-3 text-3xl font-black text-white">{s.n}</div>
                <div className="mt-1 text-sm text-white/70">{s.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING APPROACH */}
      <section className="content-auto mx-auto max-w-5xl px-4 py-20">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-card md:p-12">
          <div className="text-xs font-bold uppercase tracking-widest text-brand">
            A Practical Learning Experience
          </div>
          <h2 className="mt-4 text-3xl font-black text-foreground md:text-5xl">
            SAP training built around real career goals
          </h2>
          <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
            <p>
              Choosing an SAP course is easier when the learning path starts with your
              education, work experience, interests, and preferred career direction. At
              Next-Gen ERP Solutions, students can explore functional modules such as SAP
              FICO, MM, SD, HCM, and SuccessFactors, alongside technical options such as
              ABAP, BASIS, Fiori, and Security. Career counselling helps each learner
              compare these paths before selecting a course that fits their background.
            </p>
            <p>
              Training combines instructor-led explanations with guided practice on SAP
              systems, allowing learners to connect business concepts with the screens,
              transactions, and workflows used during implementation. Practical exercises
              move from foundational configuration to connected business scenarios, so
              students understand why a process works instead of memorising isolated
              steps. Assignments and project discussions also help learners describe their
              work clearly during technical and functional interviews.
            </p>
            <p>
              Fresh graduates often need support translating academic knowledge into
              workplace skills, while experienced professionals may want to connect their
              domain expertise with a relevant SAP module. Career-gap candidates usually
              benefit from a structured return-to-learning plan and flexible practice
              schedules. The training journey is therefore designed to provide a clear
              progression for different starting points without assuming that every
              learner has the same experience or availability.
            </p>
            <p>
              Career preparation continues beyond course topics through resume guidance,
              mock interviews, communication practice, and discussions about suitable job
              roles. Learners can review common interview scenarios, explain project
              responsibilities, and identify areas that need more practice before applying.
              This combination of SAP knowledge, hands-on work, and career preparation
              gives students a more complete route from initial course selection to
              confident participation in the recruitment process.
            </p>
          </div>
        </div>
      </section>

      {/* WHY NEXT-GEN */}
      <section className="content-auto mx-auto max-w-7xl px-4 py-20">
        <SectionHeader eyebrow="Why Next-Gen ERP Solutions" title="Experienced trainers who build skills and care about careers" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { t: "Industry-Expert Trainers", d: "Certified SAP consultants with 12+ years of real implementation experience." },
            { t: "Live SAP Server Access", d: "Practice on the same systems used by global enterprises — anytime, anywhere." },
            { t: "Real-Time Projects", d: "End-to-end implementation projects modelled on actual client work." },
            { t: "Placement Cell", d: "Dedicated team with 120+ hiring partners across India & abroad." },
            { t: "Career Mentoring", d: "Soft skills, mock interviews, resume building and post-placement support." },
            { t: "Flexible Batches", d: "Weekday, weekend, fast-track and corporate training options." },
          ].map((f, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <CheckCircle2 className="h-7 w-7 text-brand-green" />
              <p className="mt-3 text-lg font-bold">{f.t}</p>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COURSES */}
      <section className="content-auto bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader eyebrow="SAP Courses" title="Pick the module that fits your future" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_COURSES.map((c) => (
              <div
                key={c.slug}
                className="transition hover:-translate-y-1.5"
              >
                <Link to="/courses/$slug" params={{ slug: c.slug }} className="group block h-full overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-card transition">
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${c.color} text-2xl shadow-glow`}>
                    {c.icon}
                  </div>
                  <p className="text-xl font-extrabold">{c.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{c.tagline}</p>
                  <div className="mt-4 flex items-center justify-between text-xs">
                    <span className="font-semibold text-foreground">{c.duration}</span>
                    <span className="font-semibold text-brand group-hover:underline">Apply Now →</span>
                  </div>
                </Link>
              </div>
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
      <section className="content-auto mx-auto max-w-7xl px-4 py-20">
        <SectionHeader eyebrow="Placement Process" title="From enrolment to your dream offer letter" />
        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-6">
          {PROCESS.map((p) => (
            <div
              key={p.step}
              className="relative rounded-2xl border-2 border-brand-dark bg-card p-5 shadow-[4px_4px_0_#071126]"
            >
              <div className="text-3xl font-black text-gradient-brand">{p.step}</div>
              <p className="mt-2 font-extrabold">{p.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TRAINERS */}
      <section className="content-auto bg-brand-dark py-20 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader light eyebrow="Trainer Section" title="Learn from senior SAP consultants" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { n: "Ravi Kumar", r: "Sr. SAP FICO Consultant", e: "15+ yrs · Ex-Deloitte" },
              { n: "Anita Sharma", r: "SAP SuccessFactors Lead", e: "12+ yrs · Ex-Accenture" },
              { n: "Mohammed Ali", r: "SAP ABAP / Fiori Architect", e: "14+ yrs · Ex-IBM" },
            ].map((t, i) => (
              <div
                key={i}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="content-auto mx-auto max-w-7xl px-4 py-20">
        <SectionHeader eyebrow="Success Stories" title="Real career transformations backed by measurable outcomes" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { n: "Arjun", b: "₹0 / no job", a: "₹6.5 LPA · TCS", m: "SAP FICO" },
            { n: "Rahul", b: "₹4.2 LPA support", a: "₹14 LPA · Infosys", m: "SAP MM" },
            { n: "Priya", b: "5-yr career gap", a: "₹7.8 LPA · Capgemini", m: "SuccessFactors" },
          ].map((s, i) => (
            <div
              key={i}
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
                  <b>
                    {s.n === "Arjun"
                      ? "Starting point:"
                      : s.n === "Rahul"
                        ? "Previous role:"
                        : "Career starting point:"}
                  </b>{" "}
                  {s.b}
                </div>
                <div className="rounded-lg bg-brand-green/10 px-3 py-2 text-foreground">
                  <b className="text-brand-green">
                    {s.n === "Arjun"
                      ? "First SAP role:"
                      : s.n === "Rahul"
                        ? "SAP career move:"
                        : "Return-to-work outcome:"}
                  </b>{" "}
                  {s.a}
                </div>
              </div>
              <p className="mt-4 text-sm italic text-muted-foreground">
                "
                {s.n === "Arjun"
                  ? "The practical FICO projects helped me explain real business scenarios confidently in interviews."
                  : s.n === "Rahul"
                    ? "Weekend mentoring and mock interviews helped me move from support work into an SAP MM role."
                    : "Flexible classes and SuccessFactors practice gave me the confidence to restart after my career break."}
                "
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA + LEAD FORM */}
      <section className="content-auto bg-gradient-hero py-20">
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
              <a href="https://wa.me/919000333859" target="_blank" rel="noreferrer" className="rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white shadow-glow">💬 Chat About SAP Training</a>
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

function FloatingChip({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`absolute z-10 rounded-full border-2 border-brand-dark bg-white px-3 py-1.5 text-xs font-bold shadow-[3px_3px_0_#071126] ${className}`}
    >
      {children}
    </div>
  );
}

function HomeSalaryGraph() {
  const points = [
    [10, 90],
    [40, 80],
    [70, 70],
    [100, 50],
    [130, 35],
    [160, 18],
  ];

  return (
    <svg viewBox="0 0 180 110" className="h-full w-full" role="img" aria-label="Illustration of salary growth over five years">
      <defs>
        <linearGradient id="home-salary-growth" x1="0" x2="1">
          <stop offset="0" stopColor="#0B1C9C" />
          <stop offset="0.5" stopColor="#1686F5" />
          <stop offset="1" stopColor="#09B83E" />
        </linearGradient>
      </defs>
      <rect width="180" height="110" rx="8" fill="#fff" stroke="#071126" strokeWidth="2" />
      {[0, 1, 2, 3].map((line) => (
        <line key={line} x1="10" x2="170" y1={20 + line * 20} y2={20 + line * 20} stroke="#e2e8f0" />
      ))}
      <polyline
        points={points.map(([x, y]) => `${x},${y}`).join(" ")}
        fill="none"
        stroke="url(#home-salary-growth)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {points.map(([x, y], index) => (
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r="4"
          fill={index === points.length - 1 ? "#09B83E" : "#1686F5"}
        />
      ))}
      <text x="10" y="105" fontSize="8" fill="#64748B">Year 1</text>
      <text x="148" y="105" fontSize="8" fill="#64748B">Year 5</text>
    </svg>
  );
}
