import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { JsonLd } from "@/components/JsonLd";
import { SiteLayout } from "@/components/SiteLayout";
import { BLOG_POSTS } from "@/lib/blog-posts";
import {
  SITE_URL,
  blogPostingSchema,
  breadcrumbSchema,
  webPageSchema,
} from "@/lib/schema";

const RELATED_LINKS: Record<
  string,
  { href: string; label: string }[]
> = {
  "sap-fico-career-2026": [
    {
      href: "/courses/sap-fico-training",
      label: "Explore SAP FICO training in Hyderabad",
    },
    { href: "/placements", label: "Review SAP placement support" },
  ],
  "sap-mm-interview-questions": [
    {
      href: "/courses/sap-mm-training",
      label: "Build practical skills with SAP MM training",
    },
    { href: "/placements", label: "Prepare with SAP placement support" },
  ],
  "is-sap-good-for-freshers": [
    { href: "/courses", label: "Compare SAP courses for freshers" },
    {
      href: "/journey/fresher",
      label: "Follow the fresher SAP career journey",
    },
  ],
  "career-gap-restart-with-sap": [
    { href: "/courses", label: "Find the right SAP training path" },
    {
      href: "/journey/career-gap",
      label: "Follow the SAP career-gap restart journey",
    },
  ],
  "successfactors-vs-hcm": [
    {
      href: "/courses/sap-successfactors-training",
      label: "Explore SAP SuccessFactors training",
    },
    {
      href: "/courses/sap-hcm-training",
      label: "Compare SAP HCM training",
    },
  ],
  "sap-abap-on-hana": [
    {
      href: "/courses/sap-abap-training",
      label: "Explore SAP ABAP with HANA training",
    },
    {
      href: "/courses/sap-fiori-ui5-training",
      label: "Continue with SAP Fiori and UI5 training",
    },
  ],
};

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = BLOG_POSTS.find(
      (candidate) => candidate.slug === params.slug && candidate.indexable,
    );
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    const url = post ? `${SITE_URL}/blog/${post.slug}` : `${SITE_URL}/blog`;
    return {
      links: [{ rel: "canonical", href: url }],
      meta: [
        { title: post ? `${post.title} | Next-Gen ERP Solutions` : "SAP Insights" },
        { name: "description", content: post?.desc ?? "SAP career guidance and insights." },
        { name: "robots", content: "index,follow" },
        { property: "og:type", content: "article" },
        { property: "og:title", content: post?.title ?? "SAP Insights" },
        { property: "og:description", content: post?.desc ?? "SAP career guidance and insights." },
        { property: "og:url", content: url },
      ],
    };
  },
  component: BlogArticle,
});

function BlogArticle() {
  const { post } = Route.useLoaderData();
  const url = `${SITE_URL}/blog/${post.slug}`;
  const relatedLinks = RELATED_LINKS[post.slug] ?? [];

  return (
    <>
      <JsonLd
        data={webPageSchema({
          url,
          name: post.title,
          description: post.desc,
          mainEntityId: `${url}#article`,
        })}
      />
      <JsonLd
        data={blogPostingSchema({
          url,
          headline: post.title,
          description: post.desc,
          datePublished: post.datePublished,
          dateModified: post.lastModified,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Blog", url: `${SITE_URL}/blog` },
          { name: post.title, url },
        ])}
      />
      <SiteLayout>
        <article className="mx-auto max-w-3xl px-4 py-16">
          <Link to="/blog" className="text-sm font-semibold text-brand hover:underline">
            ← SAP Insights
          </Link>
          <div className="mt-8 text-xs font-bold uppercase tracking-wider text-brand">
            {post.cat}
          </div>
          <h1 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-xl text-muted-foreground">{post.desc}</p>
          <div className="mt-6 text-sm text-muted-foreground">
            Published {post.datePublished} · Updated {post.lastModified}
          </div>
          <div className="mt-10 space-y-6 text-lg leading-8 text-foreground">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {relatedLinks.length > 0 && (
            <nav
              aria-label="Related SAP training and career guidance"
              className="mt-10 rounded-2xl border border-border bg-card p-6"
            >
              <h2 className="text-xl font-black">
                Related SAP training and career guidance
              </h2>
              <ul className="mt-4 space-y-3">
                {relatedLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-semibold text-brand hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          <div className="mt-12 rounded-2xl bg-muted p-6">
            <h2 className="text-2xl font-black">Build your SAP career plan</h2>
            <p className="mt-2 text-muted-foreground">
              Talk to a Next-Gen ERP Solutions career advisor about the module,
              project experience and interview preparation that fit your background.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex rounded-full bg-brand px-5 py-3 font-semibold text-white"
            >
              Talk to an advisor
            </Link>
          </div>
        </article>
      </SiteLayout>
    </>
  );
}
