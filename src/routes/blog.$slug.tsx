import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { JsonLd } from "@/components/JsonLd";
import { SiteLayout } from "@/components/SiteLayout";
import { BLOG_POSTS, getBlogPost } from "@/lib/blog-posts";
import { SITE_URL, breadcrumbSchema } from "@/lib/schema";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    const canonical = post ? `${SITE_URL}/blog/${post.slug}` : `${SITE_URL}/blog`;

    return {
      links: [{ rel: "canonical", href: canonical }],
      meta: [
        { title: post ? `${post.title} | Next-Gen ERP` : "SAP Career Article" },
        {
          name: "description",
          content: post?.description ?? "Practical SAP career guidance from Next-Gen ERP Solutions.",
        },
        { name: "robots", content: "index,follow,max-image-preview:large" },
        { property: "og:type", content: "article" },
        { property: "og:title", content: post?.title ?? "SAP Career Article" },
        {
          property: "og:description",
          content: post?.description ?? "Practical SAP career guidance.",
        },
        { property: "og:url", content: canonical },
        { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
        { property: "article:published_time", content: post?.published ?? "" },
        { property: "article:modified_time", content: post?.updated ?? "" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post?.title ?? "SAP Career Article" },
        {
          name: "twitter:description",
          content: post?.description ?? "Practical SAP career guidance.",
        },
        { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
      ],
    };
  },
  component: BlogArticle,
});

function BlogArticle() {
  const { post } = Route.useLoaderData();
  const relatedPosts = BLOG_POSTS.filter((item) => item.slug !== post.slug).slice(0, 3);
  const canonical = `${SITE_URL}/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.published,
    dateModified: post.updated,
    mainEntityOfPage: canonical,
    image: `${SITE_URL}/og-image.jpg`,
    author: {
      "@type": "Organization",
      name: "Next-Gen ERP Solutions",
      url: SITE_URL,
    },
    publisher: {
      "@id": `${SITE_URL}#organization`,
    },
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Blog", url: `${SITE_URL}/blog` },
          { name: post.title, url: canonical },
        ])}
      />
      <SiteLayout>
        <article>
          <header className="bg-gradient-hero py-16 md:py-20">
            <div className="mx-auto max-w-4xl px-4">
              <Link to="/blog" className="text-sm font-semibold text-brand">
                ← Back to SAP career articles
              </Link>
              <div className="mt-8 text-xs font-bold uppercase tracking-widest text-brand">
                {post.category}
              </div>
              <h1 className="mt-3 text-4xl font-black leading-tight text-foreground md:text-6xl">
                {post.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                {post.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm text-muted-foreground">
                <time dateTime={post.updated}>Updated July 27, 2026</time>
                <span aria-hidden="true">•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-4xl px-4 py-14">
            <div className="space-y-12">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-extrabold text-foreground md:text-3xl">
                    {section.heading}
                  </h2>
                  <div className="mt-5 space-y-4 text-base leading-8 text-muted-foreground">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.points && (
                    <ul className="mt-6 space-y-3">
                      {section.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-muted-foreground">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" />
                          <span className="leading-7">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <aside className="mt-16 rounded-3xl bg-brand-dark p-8 text-white">
              <h2 className="text-2xl font-extrabold">Discuss your SAP learning path</h2>
              <p className="mt-3 max-w-2xl leading-7 text-white/75">
                Speak with a career advisor about suitable modules, practical training, and
                preparation based on your education and experience.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-brand-dark"
              >
                Request SAP course guidance
              </Link>
            </aside>
          </div>
        </article>

        <section className="bg-secondary py-14">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-black">Related SAP career articles</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  to="/blog/$slug"
                  params={{ slug: related.slug }}
                  className="rounded-2xl border border-border bg-card p-5 shadow-card"
                >
                  <div className="text-xs font-bold uppercase tracking-wider text-brand">
                    {related.category}
                  </div>
                  <div className="mt-2 font-extrabold text-foreground">{related.title}</div>
                  <div className="mt-3 text-sm font-semibold text-brand">Read this guide →</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
