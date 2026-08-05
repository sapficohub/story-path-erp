import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { COURSES, getCourse } from "@/lib/courses";
import { LeadForm } from "@/components/LeadForm";
import { motion } from "framer-motion";
import { LEGACY_COURSE_SLUGS } from "@/lib/redirects";

import {
  CheckCircle2,
  Clock,
  Award,
  TrendingUp,
  Users,
  Briefcase,
  MessageCircle,
} from "lucide-react";

import { JsonLd } from "@/components/JsonLd";
import { canonicalUrl } from "@/components/seo";

import {
  SITE_URL,
  breadcrumbSchema,
  courseSchema,
  faqSchema,
  EDUCATIONAL_ORGANIZATION_ID,
  webPageSchema,
} from "@/lib/schema";

const COURSE_META_DESCRIPTIONS: Partial<Record<string, string>> = {
  "sap-fico-training":
    "Learn SAP FICO in Hyderabad through practical projects, live server access, expert-led sessions, interview preparation and placement assistance.",
  "sap-mm-training":
    "Build practical SAP MM skills with live server training, real-time procurement scenarios, interview preparation and placement assistance in Hyderabad.",
  "sap-sd-training":
    "Learn SAP SD with practical sales and distribution scenarios, live SAP server access, expert trainers and placement assistance in Hyderabad.",
  "sap-abap-training":
    "Learn SAP ABAP through practical coding exercises, real-time projects, live server access, interview preparation and placement assistance.",
};

const COURSE_PAGE_TITLES: Partial<Record<string, string>> = {
  "sap-fico-training": "SAP FICO Training in Hyderabad | Next-Gen ERP",
  "sap-mm-training": "SAP MM Training in Hyderabad | Next-Gen ERP",
  "sap-sd-training": "SAP SD Training in Hyderabad | Next-Gen ERP",
  "sap-abap-training": "SAP ABAP Training in Hyderabad | Next-Gen ERP",
  "sap-basis-training": "SAP BASIS Training in Hyderabad | Next-Gen ERP",
  "sap-hcm-training": "SAP HCM Training in Hyderabad | Next-Gen ERP",
  "sap-successfactors-training": "SAP SuccessFactors Training Hyderabad | Next-Gen ERP",
};

function getCourseMetaDescription(title: string, slug: string) {
  return (
    COURSE_META_DESCRIPTIONS[slug] ??
    `Learn ${title} in Hyderabad with expert trainers, live SAP server practice, real-time projects, interview preparation and career support.`
  );
}

function getCoursePageTitle(title: string, slug: string) {
  return COURSE_PAGE_TITLES[slug] ?? `${title} Training in Hyderabad | Next-Gen ERP`;
}

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const optimizedSlug = LEGACY_COURSE_SLUGS[params.slug];

    if (optimizedSlug) {
      throw redirect({
        to: "/courses/$slug",
        params: { slug: optimizedSlug },
        statusCode: 301,
      });
    }

    const course = getCourse(params.slug);

    if (!course) throw notFound();

    return {
      course,
    };
  },

  head: ({ loaderData }) => {
    const c = loaderData?.course;

    const title = c
      ? getCoursePageTitle(c.title, c.slug)
      : "SAP Training in Hyderabad | Next-Gen ERP";

    const description = c
      ? getCourseMetaDescription(c.title, c.slug)
      : "Explore practical SAP training in Hyderabad with expert trainers, live server access, real-time projects, interview preparation and career support.";

    const url = canonicalUrl(c ? `/courses/${c.slug}` : "/courses");

    return {
      links: [
        {
          rel: "canonical",
          href: url,
        },
      ],

      meta: [
        {
          title,
        },

        {
          name: "description",
          content: description,
        },

        {
          name: "keywords",
          content: `${c?.title}, ${c?.title} Course, ${c?.title} Training, ${c?.title} Certification, SAP Training Hyderabad, SAP Course Hyderabad`,
        },

        {
          name: "robots",
          content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
        },

        {
          property: "og:type",
          content: "website",
        },

        {
          property: "og:title",
          content: title,
        },

        {
          property: "og:description",
          content: description,
        },

        {
          property: "og:url",
          content: url,
        },

        {
          property: "og:image",
          content: `${SITE_URL}/next-gen-erp-solutions-sap-training-hyderabad.jpg`,
        },

        {
          name: "twitter:card",
          content: "summary_large_image",
        },

        {
          name: "twitter:title",
          content: title,
        },

        {
          name: "twitter:description",
          content: description,
        },

        {
          name: "twitter:image",
          content: `${SITE_URL}/next-gen-erp-solutions-sap-training-hyderabad.jpg`,
        },
      ],
    };
  },

  component: CoursePage,
});

function CoursePage() {
  const { course } = Route.useLoaderData() as {
    course: import("@/lib/courses").Course;
  };

  const related = COURSES.filter((c) => c.slug !== course.slug).slice(0, 3);

  const faqs = [
    {
      question: `Do I need prior experience for ${course.title}?`,
      answer:
        "No. Our trainers start from scratch and guide you through every concept with hands-on labs.",
    },
    {
      question: "Will I get SAP server access?",
      answer: "Yes. Every student receives live SAP server access for practical training.",
    },
    {
      question: "Is placement assistance available?",
      answer: "Yes. We provide placement assistance, resume preparation and interview support.",
    },
    {
      question: "Can I attend a free demo?",
      answer: "Yes. You can book a free demo session before enrolling.",
    },
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          {
            name: "Home",
            url: `${SITE_URL}/`,
          },
          {
            name: "Courses",
            url: `${SITE_URL}/courses`,
          },
          {
            name: course.title,
            url: `${SITE_URL}/courses/${course.slug}`,
          },
        ])}
      />

      <JsonLd
        data={courseSchema({
          name: course.title,
          description: course.description,
          url: `${SITE_URL}/courses/${course.slug}`,
          teaches: course.curriculum,
        })}
      />

      <JsonLd
        data={webPageSchema({
          url: `${SITE_URL}/courses/${course.slug}`,
          name: `${course.title} Training`,
          description: course.description,
          aboutId: EDUCATIONAL_ORGANIZATION_ID,
          mainEntityId: `${SITE_URL}/courses/${course.slug}#course`,
        })}
      />

      <JsonLd data={faqSchema(faqs, `${SITE_URL}/courses/${course.slug}`)} />

      <SiteLayout>
        <section
          className={`relative overflow-hidden bg-gradient-to-br ${course.color} text-white`}
        >
          <div className="halftone absolute inset-0 opacity-20" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-[1.4fr_1fr]">
            <div>
              <Link to="/courses" className="text-sm text-white/80 hover:underline">
                ← All Courses
              </Link>
              <div className="mt-3 text-6xl">{course.icon}</div>
              <h1 className="mt-3 text-4xl font-black md:text-6xl">{course.title}</h1>
              <p className="mt-3 text-xl text-white/90">{course.tagline}</p>
              <div className="mt-5 flex flex-wrap gap-2 text-sm">
                <span className="rounded-full bg-white/15 px-3 py-1 backdrop-blur">
                  <Clock className="mr-1 inline h-4 w-4" />
                  {course.duration}
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1 backdrop-blur">
                  <Award className="mr-1 inline h-4 w-4" />
                  {course.level}
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1 backdrop-blur">
                  <TrendingUp className="mr-1 inline h-4 w-4" />
                  100% Placement Support
                </span>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="rounded-full bg-white px-6 py-3 font-semibold text-brand-dark shadow-glow transition hover:scale-105"
                >
                  Book Free Demo
                </Link>
                <a
                  href="https://wa.me/919000333859"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <LeadForm
                title={`Apply for ${course.title}`}
                subtitle="Get curriculum, fees & batch dates instantly."
                cta="Apply Now"
                defaultModule={course.title}
                sourceForm="Course Application"
              />
            </motion.div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            <div>
              <h2 className="text-3xl font-black">What is {course.title}?</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{course.description}</p>
            </div>
            <div>
              <h2 className="text-3xl font-black">Who Should Learn</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {course.who.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 rounded-xl border border-border bg-card p-4"
                  >
                    <Users className="mt-0.5 h-5 w-5 text-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-black">Course Curriculum</h2>
              <div className="mt-4 grid gap-2">
                {course.curriculum.map((module, index) => (
                  <motion.div
                    key={module}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04 }}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="font-medium">{module}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-black">Career Opportunities</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {course.careers.map((career) => (
                  <div
                    key={career}
                    className="flex items-center gap-2 rounded-xl bg-secondary p-4 font-semibold"
                  >
                    <Briefcase className="h-5 w-5 text-brand" /> {career}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border-2 border-brand-dark bg-card p-6 shadow-[6px_6px_0_#071126]">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Fresher Salary
                </div>
                <div className="mt-1 text-3xl font-black text-gradient-brand">
                  {course.salaryFresher}
                </div>
              </div>
              <div className="rounded-2xl border-2 border-brand-dark bg-card p-6 shadow-[6px_6px_0_#071126]">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Experienced Salary
                </div>
                <div className="mt-1 text-3xl font-black text-gradient-brand">
                  {course.salaryExperienced}
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-black">FAQs</h2>
              <div className="mt-4 space-y-3">
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-xl border border-border bg-card p-4"
                  >
                    <summary className="flex cursor-pointer items-center justify-between font-semibold">
                      <span>{faq.question}</span>
                      <span className="text-brand transition group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          <aside className="self-start space-y-5 lg:sticky lg:top-24">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <h4 className="font-extrabold">Why this course?</h4>
              <ul className="mt-3 space-y-2 text-sm">
                {[
                  "Live SAP Server Access",
                  "Real-Time Industry Projects",
                  "Certification Guidance",
                  "Resume + Mock Interviews",
                  "Lifetime Recording Access",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-green" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-gradient-brand p-6 text-white shadow-glow">
              <h4 className="text-xl font-extrabold">Talk to a mentor</h4>
              <p className="mt-1 text-sm text-white/90">Free 30-minute career counselling.</p>
              <a
                href="tel:+919000333859"
                className="mt-4 block rounded-full bg-white px-4 py-2.5 text-center font-semibold text-brand-dark"
              >
                📞 +91 90003 33859
              </a>
            </div>
          </aside>
        </section>

        <section className="bg-secondary py-16">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-center text-3xl font-black">Related Courses</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to="/courses/$slug"
                  params={{ slug: item.slug }}
                  className="rounded-2xl border border-border bg-card p-5 shadow-card transition hover:scale-[1.02]"
                >
                  <div className="text-3xl">{item.icon}</div>
                  <div className="mt-2 font-extrabold">{item.title}</div>
                  <div className="text-sm text-muted-foreground">{item.tagline}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
