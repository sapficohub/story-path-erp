import {
  Outlet,
  Link,
  createRootRoute,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { JsonLd } from "@/components/JsonLd";
import { Toaster } from "@/components/ui/sonner";
import { educationalOrganizationSchema, organizationSchema, websiteSchema } from "@/lib/schema";
import { captureReferralAttribution } from "@/lib/referral";
import logoAvif480 from "@/assets/nextgen-logo-480.avif";

const GOOGLE_ANALYTICS_ID = "G-B0ZDQ27P0P";
const GOOGLE_TAG_MANAGER_ID = "GTM-M8PD2672";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preload",
        as: "image",
        type: "image/avif",
        href: logoAvif480,
        fetchPriority: "high",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&family=Inter:wght@400;500;600;700&family=Bangers&display=swap",
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon.png",
      },
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "dns-prefetch",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "dns-prefetch",
        href: "https://fonts.gstatic.com",
      },
    ],

    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },

      {
        name: "keywords",
        content:
          "SAP Training, SAP FICO, SAP MM, SAP SD, SAP ABAP, SAP BASIS, SAP HCM, SAP SuccessFactors, SAP Course, SAP Institute Hyderabad, ERP Training",
      },

      {
        name: "robots",
        content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
      },

      {
        name: "author",
        content: "Next-Gen ERP Solutions",
      },

      {
        name: "theme-color",
        content: "#0B1C9C",
      },

      {
        property: "og:type",
        content: "website",
      },

      {
        property: "og:site_name",
        content: "Next-Gen ERP Solutions",
      },

      {
        property: "og:title",
        content: "Next-Gen ERP Solutions | SAP Training & Placement",
      },

      {
        property: "og:description",
        content: "Transform your career with SAP Training, live projects and placement support.",
      },

      {
        property: "og:url",
        content: "https://www.next-generpsolutions.com",
      },

      {
        property: "og:image",
        content:
          "https://www.next-generpsolutions.com/next-gen-erp-solutions-sap-training-hyderabad.jpg",
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      {
        property: "og:image:alt",
        content: "Next-Gen ERP Solutions SAP training and placement support",
      },

      {
        name: "twitter:card",
        content: "summary_large_image",
      },

      {
        name: "twitter:title",
        content: "Next-Gen ERP Solutions",
      },

      {
        name: "twitter:description",
        content: "SAP Training & Placement Institute",
      },

      {
        name: "twitter:image",
        content:
          "https://www.next-generpsolutions.com/next-gen-erp-solutions-sap-training-hyderabad.jpg",
      },
      {
        name: "twitter:image:alt",
        content: "Next-Gen ERP Solutions SAP training and placement support",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GOOGLE_TAG_MANAGER_ID}');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Google tag */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ANALYTICS_ID}');`,
          }}
        />
        {/* End Google tag */}
        <HeadContent />
        <JsonLd data={organizationSchema} />
        <JsonLd data={educationalOrganizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GOOGLE_TAG_MANAGER_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}

        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <ReferralAttributionCapture />
      <Outlet />
      <Toaster position="top-center" richColors />
    </>
  );
}

function ReferralAttributionCapture() {
  const routeHref = useRouterState({
    select: (state) => state.location.href,
  });

  useEffect(() => {
    captureReferralAttribution();
  }, [routeHref]);

  return null;
}
