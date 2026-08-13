import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  CircleUserRound,
  Code2,
  GraduationCap,
  Headphones,
  Laptop,
  MessageCircle,
  Phone,
  Quote,
  Target,
  Users,
} from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { Logo } from "@/components/Logo";
import type { PaidLandingPageConfig } from "@/lib/paid-landing-pages";

const WHATSAPP_URL = "https://wa.me/919000333859";
const PHONE = "+919000333859";

const trustItems = [
  { icon: Laptop, title: "Live SAP Server", text: "Hands-on practice" },
  { icon: Target, title: "Real-Time Scenarios", text: "Business-focused learning" },
  { icon: Users, title: "Mock Interviews", text: "Structured preparation" },
  { icon: BriefcaseBusiness, title: "Career Support", text: "Guided job-search preparation" },
];

const differentiators = [
  [
    "Trainer-Led Sessions",
    "Concepts explained through business processes instead of slide-only teaching.",
  ],
  ["Live SAP Practice", "Practise directly in SAP rather than only watching demonstrations."],
  ["Real-Time Scenarios", "Connect configuration, transactions and code to realistic situations."],
  ["Topic-Wise Practice", "Reinforce every topic through tasks and scenario discussions."],
  ["Mock Interviews", "Practise explaining both concepts and practical solutions."],
  ["Career Preparation", "Build a focused resume, interview plan and job-search routine."],
];

const stories = [
  {
    module: "SAP FICO",
    name: "Arjun K.",
    quote:
      "Real projects and mentor feedback helped me explain finance processes with confidence in interviews.",
  },
  {
    module: "SAP MM",
    name: "Rahul M.",
    quote:
      "The procurement scenarios connected my support experience to a clearer SAP career path.",
  },
  {
    module: "SAP ABAP",
    name: "Vikram T.",
    quote:
      "Hands-on development practice gave me the confidence to handle technical interview questions.",
  },
];

function scrollToForm() {
  document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
}

export function PaidLandingPage({ config }: { config: PaidLandingPageConfig }) {
  const tracked = useRef(false);

  useEffect(() => {
    if (tracked.current) return;
    const analyticsWindow = window as Window & { dataLayer?: Array<Record<string, unknown>> };
    analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
    analyticsWindow.dataLayer.push({
      event: "view_content",
      course: config.courseName,
      page_path: window.location.pathname,
      landing_page_type: "meta_paid",
    });
    tracked.current = true;
  }, [config.courseName]);

  const moduleStory = stories.find((story) => story.module === config.courseName) ?? stories[0];
  return (
    <main className="min-h-screen bg-background pb-20 text-foreground md:pb-0">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-white/95 backdrop-blur">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-3 px-4 py-2">
          <Link to="/" aria-label="Next-Gen ERP Solutions home">
            <Logo className="h-10 w-auto sm:h-12" />
          </Link>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-3 text-sm font-bold text-brand-dark sm:px-4"
            >
              <Phone className="size-4" />
              <span className="hidden sm:inline">+91 90003 33859</span>
              <span className="sm:hidden">Call</span>
            </a>
            <button
              onClick={scrollToForm}
              className="hidden min-h-11 rounded-full bg-gradient-brand px-5 text-sm font-bold text-white shadow-glow sm:block"
            >
              Book Free Demo
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(#1686F5_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-10 md:py-14 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full bg-brand-dark px-4 py-1.5 text-xs font-bold uppercase tracking-[.15em] text-white">
              {config.badge}
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.08] text-brand-dark sm:text-5xl lg:text-6xl">
              {config.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              {config.subheadline}
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {config.heroBullets.map((item) => (
                <li key={item} className="flex items-center gap-2 font-semibold">
                  <CheckCircle2 className="size-5 shrink-0 text-brand-green" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row">
              <button
                onClick={scrollToForm}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 font-bold text-white shadow-glow"
              >
                Book Free Demo <ArrowRight className="size-4" />
              </button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 font-bold text-white"
              >
                <MessageCircle className="size-5" /> Chat on WhatsApp
              </a>
            </div>
          </div>
          <div id="demo-form" className="scroll-mt-24">
            <LeadForm
              title={`Apply for ${config.courseName}`}
              subtitle="Get curriculum, fees & batch dates instantly."
              cta="Apply Now"
              defaultModule={config.courseName}
              sourceForm="Course Application"
            />
          </div>
        </div>
      </section>

      <section aria-label="Training benefits" className="border-y border-border bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border md:grid-cols-4">
          {trustItems.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-white p-4 text-center sm:p-6">
              <Icon className="mx-auto size-6 text-brand" />
              <p className="mt-2 text-sm font-extrabold uppercase text-brand-dark">{title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <Section
        eyebrow="Choose with clarity"
        title={`Is ${config.courseName} the Right Career Path for You?`}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {config.audience.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-card p-5 shadow-card"
            >
              <CircleUserRound className="size-7 text-brand" />
              <h3 className="mt-4 text-lg font-extrabold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
        <TextCta onClick={scrollToForm}>Check If This SAP Module Suits My Profile</TextCta>
      </Section>

      <section className="bg-secondary py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Practical roadmap"
            title={`What You Will Learn in ${config.courseName}`}
          />
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {config.learningSteps.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-bold">{step}</span>
              </div>
            ))}
          </div>
          <TextCta onClick={scrollToForm}>Experience the Training in a Free Demo</TextCta>
        </div>
      </section>

      <section className="bg-brand-dark py-14 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            dark
            eyebrow="Why Next-Gen"
            title="Completing a Syllabus Is Easy. Becoming Interview-Ready Takes Practice."
          />
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-white/15 bg-white/7 p-5">
                <Check className="size-6 text-brand-teal" />
                <h3 className="mt-3 text-lg font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Section eyebrow="How training works" title="Learn. Practise. Apply. Prepare.">
        <div className="grid gap-4 sm:grid-cols-5">
          {[
            "Learn the concept",
            "Practise in SAP",
            "Apply to scenarios",
            "Take mock interviews",
            "Prepare your career plan",
          ].map((step, index) => (
            <div key={step} className="relative rounded-2xl bg-secondary p-5 text-center">
              <span className="text-xs font-black text-brand">STEP {index + 1}</span>
              <p className="mt-2 font-bold">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-secondary py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-7 px-4 lg:grid-cols-2">
          <article className="rounded-3xl bg-brand-dark p-7 text-white sm:p-9">
            <GraduationCap className="size-10 text-brand-teal" />
            <p className="mt-5 text-xs font-bold uppercase tracking-widest text-brand-teal">
              Trainer credibility
            </p>
            <h2 className="mt-2 text-3xl font-black">Learn with a module-focused SAP trainer</h2>
            <p className="mt-4 leading-7 text-white/75">
              Your trainer focuses on {config.trainerSpecialty}. Meet the trainer in the free demo,
              review the learning plan and ask questions before deciding.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              {[
                "Business-process-led explanations",
                "Live demonstrations and guided practice",
                "Scenario and interview feedback",
              ].map((x) => (
                <li key={x} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-green" />
                  {x}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-3xl border border-border bg-white p-7 shadow-card sm:p-9">
            <Headphones className="size-9 text-brand" />
            <p className="mt-5 text-xs font-bold uppercase tracking-widest text-brand">
              Your free demo
            </p>
            <h2 className="mt-2 text-3xl font-black">Know what you are signing up for</h2>
            <ul className="mt-5 space-y-3">
              {[
                "Discuss whether the module fits your profile",
                "See the practical training method",
                "Understand the learning and career roadmap",
                "Ask about current batch options",
              ].map((x) => (
                <li key={x} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-green" />
                  {x}
                </li>
              ))}
            </ul>
            <button
              onClick={scrollToForm}
              className="mt-7 min-h-12 w-full rounded-full bg-gradient-brand px-6 font-bold text-white"
            >
              Book Free Demo
            </button>
          </article>
        </div>
      </section>

      <Section eyebrow="Learner experience" title="Practical Learning Builds Real Confidence">
        <article className="mx-auto max-w-3xl rounded-3xl border-2 border-brand-dark bg-card p-7 shadow-[6px_6px_0_#071126] sm:p-9">
          <Quote className="size-8 text-brand" />
          <p className="mt-4 text-xl font-semibold leading-8">“{moduleStory.quote}”</p>
          <p className="mt-5 font-extrabold">{moduleStory.name}</p>
          <p className="text-sm text-muted-foreground">{moduleStory.module} learner</p>
        </article>
      </Section>

      <section className="bg-secondary py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Career support" title="Support Beyond the Classroom" />
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Practical training",
              "Resume preparation",
              "Mock interviews",
              "Placement assistance",
            ].map((item, index) => (
              <div key={item} className="rounded-2xl border border-border bg-white p-5">
                <span className="text-sm font-black text-brand">0{index + 1}</span>
                <h3 className="mt-2 text-lg font-extrabold">{item}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Structured guidance to help you move to the next stage with confidence.
                </p>
              </div>
            ))}
          </div>
          <div className="mt-9 rounded-2xl border border-brand/20 bg-brand/5 p-5 text-center">
            <p className="font-semibold">
              Potential career directions include {config.careerRoles.join(", ")}.
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Career outcomes depend on individual background, skills, interview performance and
              market conditions.
            </p>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Frequently asked questions"
        title={`Questions About ${config.courseName} Training`}
      >
        <div className="mx-auto max-w-4xl space-y-3">
          {config.faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-border bg-card p-5"
            >
              <summary className="cursor-pointer list-none pr-6 font-bold marker:hidden">
                {faq.question}
                <span className="float-right text-brand group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <section className="bg-gradient-brand py-14 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Code2 className="mx-auto size-10" />
          <h2 className="mt-4 text-3xl font-black sm:text-5xl">
            See {config.courseName} Training in Action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/85">
            Book a free demo to discuss your profile, experience the teaching approach and get the
            current training roadmap.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 min-[420px]:flex-row">
            <button
              onClick={scrollToForm}
              className="min-h-12 rounded-full bg-white px-7 font-bold text-brand-dark"
            >
              Book Free Demo
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 font-bold"
            >
              <MessageCircle className="size-5" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-brand-dark px-4 py-8 text-sm text-white/65">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p>© {new Date().getFullYear()} Next-Gen ERP Solutions</p>
          <nav aria-label="Legal and contact" className="flex gap-5">
            <Link to="/terms" className="hover:text-white">
              Terms & Privacy
            </Link>
            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>
            <a href={`tel:${PHONE}`} className="hover:text-white">
              Call us
            </a>
          </nav>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-border bg-white p-2 pb-[calc(.5rem+env(safe-area-inset-bottom))] shadow-[0_-8px_25px_rgba(7,17,38,.12)] md:hidden">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-3 text-sm font-bold text-white"
        >
          <MessageCircle className="size-5" /> WhatsApp
        </a>
        <button
          onClick={scrollToForm}
          className="min-h-12 rounded-full bg-gradient-brand px-3 text-sm font-bold text-white"
        >
          Book Free Demo
        </button>
      </div>
    </main>
  );
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="mt-9">{children}</div>
      </div>
    </section>
  );
}
function SectionHeading({
  eyebrow,
  title,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p
        className={`text-xs font-black uppercase tracking-[.18em] ${dark ? "text-brand-teal" : "text-brand"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-black leading-tight sm:text-4xl ${dark ? "text-white" : "text-brand-dark"}`}
      >
        {title}
      </h2>
    </div>
  );
}
function TextCta({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <div className="mt-8 text-center">
      <button
        onClick={onClick}
        className="inline-flex min-h-11 items-center gap-2 font-bold text-brand hover:underline"
      >
        {children}
        <ArrowRight className="size-4" />
      </button>
    </div>
  );
}
