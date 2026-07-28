import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import quizPageHtml from "@/general-knowledge-quiz-with-qa.html?raw";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Quiz — Next-Gen ERP Solutions" },
      { name: "description", content: "Test your knowledge with our interactive quiz!" },
      { property: "og:title", content: "SAP Quiz at Next-Gen" },
      { property: "og:description", content: "Test your SAP knowledge with our interactive quiz!" },
    ],
  }),
  component: QuizPage,
});

function QuizPage() {
  const nextGenLogoUrl = new URL("../assets/nextgen-logo.png", import.meta.url).href;
  const quizHtml = quizPageHtml.replace('src="next-gen-logo.png"', `src="${nextGenLogoUrl}"`);

  return (
    <SiteLayout>
      <section className="bg-gradient-hero py-8 md:py-12">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="inline-block rounded-full bg-brand-dark px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
            Quiz Experience
          </div>
          <h1 className="mt-4 text-4xl font-black md:text-6xl">SAP FICO Challenge</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">
            The full quiz experience from the provided HTML page has been embedded directly into this route.
          </p>
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl px-4 py-6 pb-12 md:py-8">
        <iframe
          title="SAP FICO quiz"
          srcDoc={quizHtml}
          className="min-h-[1400px] w-full rounded-3xl border border-border bg-background shadow-[0_20px_80px_rgba(7,17,38,0.16)]"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </SiteLayout>
  );
}
