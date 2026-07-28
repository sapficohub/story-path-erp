import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/schema";

export const Route = createFileRoute("/blog")({
  head: () => ({
    links: [{ rel: "canonical", href: `${SITE_URL}/blog` }],
    meta: [
      { title: "SAP Career Blog | Next-Gen ERP Solutions" },
      {
        name: "description",
        content:
          "Read practical SAP career guides, module comparisons, interview preparation advice, and industry-focused learning resources.",
      },
      { property: "og:title", content: "Next-Gen ERP Solutions SAP Career Blog" },
      {
        property: "og:description",
        content: "Practical SAP career guides, interview preparation, and module insights.",
      },
      { property: "og:url", content: `${SITE_URL}/blog` },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <SiteLayout>
      <section className="bg-gradient-hero py-20">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="inline-block rounded-full bg-brand-dark px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
            Blog
          </div>
          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            SAP <span className="text-gradient-brand">Insights</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Career guides, interview preparation, and module deep-dives designed to help
            learners make informed SAP career decisions.
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 md:grid-cols-2 lg:grid-cols-3">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.slug}
            to="/blog/$slug"
            params={{ slug: post.slug }}
            className="block rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1"
          >
            <div className="text-xs font-bold uppercase tracking-wider text-brand">
              {post.category}
            </div>
            <h2 className="mt-2 text-xl font-extrabold">{post.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{post.description}</p>
            <div className="mt-3 text-xs text-muted-foreground">{post.readTime}</div>
            <div className="mt-4 text-sm font-semibold text-brand">Read article →</div>
          </Link>
        ))}
      </section>
    </SiteLayout>
  );
}
