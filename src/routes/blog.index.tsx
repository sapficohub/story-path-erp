import { createFileRoute, Link } from "@tanstack/react-router";
import { canonicalUrl } from "@/components/seo";
import { SiteLayout } from "@/components/SiteLayout";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, breadcrumbSchema, itemListSchema, webPageSchema } from "@/lib/schema";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    links: [{ rel: "canonical", href: canonicalUrl("/blog") }],
    meta: [
      { title: "SAP Career Guides and Tutorials | Next-Gen ERP" },
      {
        name: "description",
        content:
          "Read SAP career guides, interview questions, learning roadmaps and practical insights for freshers and experienced professionals.",
      },
      { property: "og:title", content: "Next-Gen ERP Solutions Blog" },
      {
        property: "og:description",
        content: "Career guides, interview tips and SAP industry insights.",
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          type: ["WebPage", "CollectionPage"],
          url: `${SITE_URL}/blog`,
          name: "SAP Insights Blog",
          description:
            "Articles on SAP modules, career growth, interview preparation, certifications and industry trends.",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Blog", url: `${SITE_URL}/blog` },
        ])}
      />
      <JsonLd
        data={itemListSchema(
          `${SITE_URL}/blog`,
          "SAP Insights",
          BLOG_POSTS.filter((post) => post.indexable).map((post) => ({
            name: post.title,
            url: `${SITE_URL}/blog/${post.slug}`,
          })),
        )}
      />
      <SiteLayout>
        <section className="bg-gradient-hero py-20">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <div className="inline-block rounded-full bg-brand-dark px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
              Blog
            </div>
            <h1 className="mt-4 text-4xl font-black md:text-6xl">
              SAP <span className="text-gradient-brand">Insights</span>
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-lg text-muted-foreground">
              Career guides, interview preparation and module deep-dives from senior SAP
              consultants.
            </p>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 py-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="block rounded-2xl border border-border bg-card p-6 shadow-card hover:scale-[1.02] transition"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-brand">{p.cat}</div>
              <h3 className="mt-2 text-xl font-extrabold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-4 text-sm font-semibold text-brand">Read {p.title} →</div>
            </Link>
          ))}
        </section>
      </SiteLayout>
    </>
  );
}
