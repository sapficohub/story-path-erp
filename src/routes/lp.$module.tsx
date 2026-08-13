import { createFileRoute, notFound } from "@tanstack/react-router";
import { PaidLandingPage } from "@/components/PaidLandingPage";
import { canonicalUrl } from "@/components/seo";
import { PAID_LANDING_PAGES, type PaidModuleKey } from "@/lib/paid-landing-pages";

export const Route = createFileRoute("/lp/$module")({
  loader: ({ params }) => {
    const config = PAID_LANDING_PAGES[params.module as PaidModuleKey];
    if (!config) throw notFound();
    return { config };
  },
  head: ({ loaderData }) => {
    const config = loaderData?.config;
    const title = config
      ? `${config.courseName} Free Demo | Next-Gen ERP Solutions`
      : "SAP Free Demo | Next-Gen ERP Solutions";
    const description =
      config?.subheadline ?? "Book a free practical SAP training demo with Next-Gen ERP Solutions.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "robots", content: "noindex,follow" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
      links: config ? [{ rel: "canonical", href: canonicalUrl(`/lp/${config.key}`) }] : [],
    };
  },
  component: LandingRoute,
});

function LandingRoute() {
  const { config } = Route.useLoaderData();
  return <PaidLandingPage config={config} />;
}
