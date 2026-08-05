import { createFileRoute } from "@tanstack/react-router";
import { canonicalUrl } from "@/components/seo";
import { SiteLayout } from "@/components/SiteLayout";
import quizPageHtml from "@/general-knowledge-quiz-with-qa.html?raw";
import nextGenLogoUrl from "@/assets/nextgen-logo-480.webp";
import { SITE_URL } from "@/lib/schema";
import { PageStructuredData } from "@/components/PageStructuredData";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "SAP Knowledge Quiz | Next-Gen ERP" },
      {
        name: "description",
        content:
          "Test your SAP and general knowledge with an interactive quiz designed to make learning engaging, practical and easy to review online.",
      },
      { property: "og:title", content: "SAP Quiz at Next-Gen" },
      { property: "og:description", content: "Test your SAP knowledge with our interactive quiz!" },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/quiz") }],
  }),
  component: QuizPage,
});

function QuizPage() {
  const quizHtml = quizPageHtml.replace('src="next-gen-logo.png"', `src="${nextGenLogoUrl}"`);

  return (
    <>
      <PageStructuredData
        url={`${SITE_URL}/quiz`}
        name="SAP FICO Knowledge Quiz"
        description="Test your SAP FICO knowledge with an interactive quiz."
        breadcrumbs={[
          { name: "Home", url: `${SITE_URL}/` },
          { name: "SAP Quiz", url: `${SITE_URL}/quiz` },
        ]}
      />
      <SiteLayout>
        <section className="bg-gradient-hero py-8 md:py-12">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <div className="inline-block rounded-full bg-brand-dark px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
              Quiz Experience
            </div>
            <h1 className="mt-4 text-4xl font-black md:text-6xl">SAP FICO Challenge</h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">
              The full quiz experience from the provided HTML page has been embedded directly into
              this route.
            </p>
          </div>
        </section>

        <div className="mx-auto w-full max-w-7xl px-4 py-6 pb-12 md:py-8">
          <iframe
            title="SAP FICO quiz"
            srcDoc={quizHtml}
            className="min-h-[1400px] w-full rounded-3xl border border-border bg-background shadow-[0_20px_80px_rgba(7,17,38,0.16)]"
            sandbox="allow-scripts"
          />
        </div>
      </SiteLayout>
    </>
  );
}
