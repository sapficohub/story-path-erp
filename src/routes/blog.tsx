import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — SAP Career Guidance & Insights" },
      { name: "description", content: "Articles on SAP modules, career growth, interview preparation, certifications, and industry trends." },
      { property: "og:title", content: "Next-Gen ERP Solutions Blog" },
      { property: "og:description", content: "Career guides, interview tips and SAP industry insights." },
    ],
  }),
  component: BlogIndex,
});

const POSTS = [
  { slug: "sap-fico-career-2026", title: "SAP FICO Career Roadmap 2026", cat: "SAP FICO", desc: "Everything you need to know to break into SAP FICO this year." },
  { slug: "sap-mm-interview-questions", title: "Top 50 SAP MM Interview Questions", cat: "Interview Questions", desc: "Real questions, real answers from recent MNC interviews." },
  { slug: "is-sap-good-for-freshers", title: "Is SAP a Good Career for Freshers?", cat: "Career Guidance", desc: "An honest, data-backed answer for 2026 graduates." },
  { slug: "career-gap-restart-with-sap", title: "How to Restart Your Career After a 5-Year Gap with SAP", cat: "Career Gap", desc: "A practical playbook for returning professionals." },
  { slug: "successfactors-vs-hcm", title: "SuccessFactors vs SAP HCM — Which Should You Learn?", cat: "Certification", desc: "Compare modules, salaries and demand in 2026." },
  { slug: "sap-abap-on-hana", title: "Why Every ABAP Developer Must Learn HANA Today", cat: "SAP ABAP", desc: "The shift to S/4HANA is real — here's how to ride it." },
];

function BlogIndex() {
  return (
    <SiteLayout>
      <section className="bg-gradient-hero py-20">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="inline-block rounded-full bg-brand-dark px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">Blog</div>
          <h1 className="mt-4 text-4xl font-black md:text-6xl">SAP <span className="text-gradient-brand">Insights</span></h1>
          <p className="mt-5 mx-auto max-w-2xl text-lg text-muted-foreground">Career guides, interview preparation and module deep-dives from senior SAP consultants.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((p) => (
          <Link key={p.slug} to="/blog" className="block rounded-2xl border border-border bg-card p-6 shadow-card hover:scale-[1.02] transition">
            <div className="text-xs font-bold uppercase tracking-wider text-brand">{p.cat}</div>
            <h3 className="mt-2 text-xl font-extrabold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            <div className="mt-4 text-sm font-semibold text-brand">Read article →</div>
          </Link>
        ))}
      </section>
    </SiteLayout>
  );
}
