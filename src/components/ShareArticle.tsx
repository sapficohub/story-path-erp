import { useState } from "react";

export function ShareArticle({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);
  const linkClass =
    "inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="mt-10" aria-labelledby="share-article-heading">
      <h2 id="share-article-heading" className="text-xl font-black">
        Share this article
      </h2>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={copyLink} className={linkClass}>
          {copied ? "Link copied" : "Copy link"}
        </button>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          aria-label={`Share ${title} on LinkedIn`}
        >
          LinkedIn
        </a>
        <a
          href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          aria-label={`Share ${title} on WhatsApp`}
        >
          WhatsApp
        </a>
        <a
          href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
          className={linkClass}
          aria-label={`Share ${title} by email`}
        >
          Email
        </a>
      </div>
      <p className="sr-only" role="status" aria-live="polite">
        {copied ? "Article link copied to clipboard." : ""}
      </p>
    </section>
  );
}
