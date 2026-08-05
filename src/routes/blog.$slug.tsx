import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { JsonLd } from "@/components/JsonLd";
import { ShareArticle } from "@/components/ShareArticle";
import { SiteLayout } from "@/components/SiteLayout";
import { canonicalUrl } from "@/components/seo";
import { BLOG_POSTS } from "@/lib/blog-posts";
import {
  SITE_URL,
  SOCIAL_IMAGE_URL,
  blogPostingSchema,
  breadcrumbSchema,
  webPageSchema,
} from "@/lib/schema";

const RELATED_LINKS: Record<string, { href: string; label: string }[]> = {
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

const BLOG_META_DESCRIPTIONS: Record<string, string> = {
  "sap-fico-career-2026":
    "Explore the SAP FICO career roadmap for 2026, including essential skills, practical training, project experience and interview preparation.",
  "sap-mm-interview-questions":
    "Prepare for SAP MM interviews with practical questions covering procurement, inventory, master data, configuration and real business scenarios.",
  "is-sap-good-for-freshers":
    "Discover whether SAP is a good career for freshers, how to choose the right module and which practical skills improve employment opportunities.",
  "career-gap-restart-with-sap":
    "Learn how returning professionals can restart after a career gap with SAP skills, practical projects, resume preparation and interview support.",
  "successfactors-vs-hcm":
    "Compare SAP SuccessFactors and SAP HCM, including platform differences, career opportunities and learning paths for HR professionals.",
  "sap-abap-on-hana":
    "Learn why modern ABAP developers need HANA, CDS views, code pushdown and practical S/4HANA development skills for current SAP projects.",
};

const BLOG_PAGE_TITLES: Record<string, string> = {
  "sap-fico-career-2026": "SAP FICO Career Roadmap 2026 | Next-Gen ERP",
  "sap-mm-interview-questions": "SAP MM Interview Questions | Next-Gen ERP",
  "is-sap-good-for-freshers": "SAP Career Guide for Freshers | Next-Gen ERP",
  "career-gap-restart-with-sap": "Restart Your Career with SAP | Next-Gen ERP",
  "successfactors-vs-hcm": "SuccessFactors vs SAP HCM | Next-Gen ERP",
  "sap-abap-on-hana": "ABAP on HANA Career Guide | Next-Gen ERP",
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
    const url = canonicalUrl(post ? `/blog/${post.slug}` : "/blog");
    const description = post
      ? BLOG_META_DESCRIPTIONS[post.slug]
      : "Read practical SAP career guidance, interview preparation tips, learning roadmaps and industry insights from Next-Gen ERP Solutions.";
    return {
      links: [{ rel: "canonical", href: url }],
      meta: [
        {
          title: post ? BLOG_PAGE_TITLES[post.slug] : "SAP Career Guides | Next-Gen ERP",
        },
        { name: "description", content: description },
        { name: "robots", content: "index,follow" },
        { property: "og:type", content: "article" },
        {
          property: "og:title",
          content: post ? BLOG_PAGE_TITLES[post.slug] : "SAP Career Guides | Next-Gen ERP",
        },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "Next-Gen ERP Solutions" },
        { property: "og:image", content: SOCIAL_IMAGE_URL },
        {
          property: "og:image:alt",
          content: "Next-Gen ERP Solutions SAP training and placement support",
        },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: post ? BLOG_PAGE_TITLES[post.slug] : "SAP Career Guides | Next-Gen ERP",
        },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: SOCIAL_IMAGE_URL },
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
          <h1 className="mt-3 text-4xl font-black leading-tight md:text-5xl">{post.title}</h1>
          <p className="mt-5 text-xl text-muted-foreground">{post.desc}</p>
          <div className="mt-6 text-sm text-muted-foreground">
            Published {post.datePublished} · Updated {post.lastModified}
          </div>
          <p className="mt-2 text-sm font-semibold text-foreground">
            Published by Next-Gen ERP Solutions
          </p>
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
              <h2 className="text-xl font-black">Related SAP training and career guidance</h2>
              <ul className="mt-4 space-y-3">
                {relatedLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="font-semibold text-brand hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          <ShareArticle title={post.title} url={canonicalUrl(`/blog/${post.slug}`)} />
          <div className="mt-12 rounded-2xl bg-muted p-6">
            <h2 className="text-2xl font-black">Build your SAP career plan</h2>
            <p className="mt-2 text-muted-foreground">
              Talk to a Next-Gen ERP Solutions career advisor about the module, project experience
              and interview preparation that fit your background.
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
