import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as lazyRouteComponent, d as Link, f as useRouter, i as HeadContent, l as createFileRoute, o as createRouter, r as Scripts, s as Outlet, u as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { r as Route$17 } from "./fresher-journey-iVSgPA8j.mjs";
import { t as COURSES } from "./courses-BfBEczWU.mjs";
import { t as Route$18 } from "./courses._slug-BPznsqwp.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C0OZiwR_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DwZSRYB4.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$16 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Next-Gen ERP Solutions — SAP Training & Placement" },
			{
				name: "description",
				content: "India's career transformation platform for SAP training & placement. For freshers, experienced professionals and career-gap candidates."
			},
			{
				name: "author",
				content: "Next-Gen ERP Solutions"
			},
			{
				property: "og:title",
				content: "Next-Gen ERP Solutions — SAP Training & Placement"
			},
			{
				property: "og:description",
				content: "India's career transformation platform for SAP training & placement. For freshers, experienced professionals and career-gap candidates."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Next-Gen ERP Solutions — SAP Training & Placement"
			},
			{
				name: "twitter:description",
				content: "India's career transformation platform for SAP training & placement. For freshers, experienced professionals and career-gap candidates."
			},
			{
				property: "og:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/af57bbe9-a35d-4c25-bfae-7f27d731b468"
			},
			{
				name: "twitter:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/af57bbe9-a35d-4c25-bfae-7f27d731b468"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/png",
				sizes: "512x512",
				href: "/favicon.png"
			},
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/apple-touch-icon.png"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800;900&family=Inter:wght@400;500;600;700&family=Bangers&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$16.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
			position: "top-center",
			richColors: true
		})]
	});
}
var $$splitComponentImporter$14 = () => import("./success-stories-CVaNS7lq.mjs");
var Route$15 = createFileRoute("/success-stories")({
	head: () => ({ meta: [
		{ title: "Success Stories — Real SAP Career Transformations" },
		{
			name: "description",
			content: "Before & after stories from Next-Gen ERP Solutions graduates. Real names. Real salaries. Real transformation."
		},
		{
			property: "og:title",
			content: "Real SAP Career Transformations"
		},
		{
			property: "og:description",
			content: "Read how our students transformed their careers with SAP."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var BASE_URL = "";
var Route$14 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				priority: "1.0"
			},
			{ path: "/about" },
			{ path: "/courses" },
			{ path: "/career-journeys" },
			{ path: "/fresher-journey" },
			{ path: "/experienced-professional" },
			{ path: "/career-gap" },
			{ path: "/placements" },
			{ path: "/success-stories" },
			{ path: "/blog" },
			{ path: "/contact" },
			...COURSES.map((c) => ({ path: `/courses/${c.slug}` }))
		].map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${e.priority ?? "0.8"}</priority>\n  </url>`),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$13 = () => import("./quiz-8vS34GvL.mjs");
var Route$13 = createFileRoute("/quiz")({
	head: () => ({ meta: [
		{ title: "Quiz — Next-Gen ERP Solutions" },
		{
			name: "description",
			content: "Test your knowledge with our interactive quiz!"
		},
		{
			property: "og:title",
			content: "SAP Quiz at Next-Gen"
		},
		{
			property: "og:description",
			content: "Test your SAP knowledge with our interactive quiz!"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./placements-qNS-rpyA.mjs");
var Route$12 = createFileRoute("/placements")({
	head: () => ({ meta: [
		{ title: "Placements — Next-Gen ERP Solutions" },
		{
			name: "description",
			content: "92% placement rate. 120+ hiring partners. End-to-end placement support for every SAP student."
		},
		{
			property: "og:title",
			content: "SAP Placements at Next-Gen"
		},
		{
			property: "og:description",
			content: "Real placements. Real numbers. Real careers."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./experienced-professional-7-fkEqpz.mjs");
var Route$11 = createFileRoute("/experienced-professional")({
	head: () => ({ meta: [
		{ title: "Experienced Professional Journey — Rahul's SAP Story" },
		{
			name: "description",
			content: "From salary stagnation to corporate leadership. Follow Rahul's interactive transformation with SAP."
		},
		{
			property: "og:title",
			content: "From Salary Stagnation to Career Growth — Rahul's Story"
		},
		{
			property: "og:description",
			content: "How working professionals double their salary with SAP."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./courses-CpxS_IJr.mjs");
var Route$10 = createFileRoute("/courses")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./contact-BgkIp8wz.mjs");
var Route$9 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact Us — Next-Gen ERP Solutions" },
		{
			name: "description",
			content: "Talk to our career advisors. Free demo, free counselling, fast response on WhatsApp."
		},
		{
			property: "og:title",
			content: "Contact Next-Gen ERP Solutions"
		},
		{
			property: "og:description",
			content: "Reach our team for SAP training & placement enquiries."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./career-journeys-7cCZApKH.mjs");
var Route$8 = createFileRoute("/career-journeys")({
	head: () => ({ meta: [
		{ title: "Career Journeys — Next-Gen ERP Solutions" },
		{
			name: "description",
			content: "Three transformation stories: Fresher, Experienced Professional, and Career Gap restart — told through animated comic chapters."
		},
		{
			property: "og:title",
			content: "Career Journeys"
		},
		{
			property: "og:description",
			content: "Interactive comic-style career transformation stories."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./career-gap-U-rY2ABs.mjs");
var Route$7 = createFileRoute("/career-gap")({
	head: () => ({ meta: [
		{ title: "Career Gap Restart — Priya's SAP Comeback Story" },
		{
			name: "description",
			content: "A career gap is a pause, not a full stop. Follow Priya's animated SAP restart journey."
		},
		{
			property: "og:title",
			content: "Restart your career with SAP — Priya's Story"
		},
		{
			property: "og:description",
			content: "Career-gap candidates transformed into corporate professionals."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./blog-CvBaB6wc.mjs");
var Route$6 = createFileRoute("/blog")({
	head: () => ({ meta: [
		{ title: "Blog — SAP Career Guidance & Insights" },
		{
			name: "description",
			content: "Articles on SAP modules, career growth, interview preparation, certifications, and industry trends."
		},
		{
			property: "og:title",
			content: "Next-Gen ERP Solutions Blog"
		},
		{
			property: "og:description",
			content: "Career guides, interview tips and SAP industry insights."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./about-DmD4lV_p.mjs");
var Route$5 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Us — Next-Gen ERP Solutions" },
		{
			name: "description",
			content: "Our story, mission and training methodology. India's most trusted SAP training & placement institute."
		},
		{
			property: "og:title",
			content: "About Next-Gen ERP Solutions"
		},
		{
			property: "og:description",
			content: "Learn about our mission, trainers and career transformation philosophy."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./routes-McP_q9bU.mjs");
var Route$4 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Next-Gen ERP Solutions — SAP Training & Placement in India" },
		{
			name: "description",
			content: "Transform your career with SAP. Hands-on training, real projects, and end-to-end placement support for freshers, working professionals and career-gap candidates."
		},
		{
			property: "og:title",
			content: "Next-Gen ERP Solutions — SAP Training & Placement"
		},
		{
			property: "og:description",
			content: "India's career transformation platform for SAP training & placement."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./courses.index-CJ4axOw5.mjs");
var Route$3 = createFileRoute("/courses/")({
	head: () => ({ meta: [
		{ title: "SAP Courses — Next-Gen ERP Solutions" },
		{
			name: "description",
			content: "All SAP modules with curriculum, duration, careers & placement details. Pick your SAP module and start your transformation."
		},
		{
			property: "og:title",
			content: "SAP Courses"
		},
		{
			property: "og:description",
			content: "Explore SAP FICO, MM, SD, ABAP, BASIS, HCM, SuccessFactors and more."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./journey.fresher-Dzu-JTEU.mjs");
var Route$2 = createFileRoute("/journey/fresher")({
	head: () => ({
		meta: [
			{ title: "Fresher Journey — Arjun's Story | Next-Gen ERP Solutions" },
			{
				name: "description",
				content: "Follow Arjun's transformation from struggling graduate to successful SAP professional. A 15-chapter interactive story."
			},
			{
				property: "og:title",
				content: "Fresher Journey — From Graduate to SAP Professional"
			},
			{
				property: "og:description",
				content: "An interactive 15-chapter career transformation story."
			},
			{
				property: "og:url",
				content: "/journey/fresher"
			}
		],
		links: [{
			rel: "canonical",
			href: "/journey/fresher"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./journey.experienced-SQWkOin4.mjs");
var Route$1 = createFileRoute("/journey/experienced")({
	head: () => ({
		meta: [
			{ title: "Experienced Professional Journey — Rahul's Story | Next-Gen ERP Solutions" },
			{
				name: "description",
				content: "Follow Rahul's transformation from salary stagnation to a thriving SAP career. An 18-chapter interactive story."
			},
			{
				property: "og:title",
				content: "Experienced Professional Journey — Rahul's Story"
			},
			{
				property: "og:description",
				content: "Break through your career plateau with SAP."
			},
			{
				property: "og:url",
				content: "/journey/experienced"
			}
		],
		links: [{
			rel: "canonical",
			href: "/journey/experienced"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./journey.career-gap-CShZDNKx.mjs");
var Route = createFileRoute("/journey/career-gap")({
	head: () => ({
		meta: [
			{ title: "Career Gap Journey — Priya's Story | Next-Gen ERP Solutions" },
			{
				name: "description",
				content: "Follow Priya's powerful comeback after a career break, building a thriving SAP career. A 15-chapter interactive story."
			},
			{
				property: "og:title",
				content: "Career Gap Journey — Priya's Story"
			},
			{
				property: "og:description",
				content: "Restart your career with SAP and Next-Gen ERP Solutions."
			},
			{
				property: "og:url",
				content: "/journey/career-gap"
			}
		],
		links: [{
			rel: "canonical",
			href: "/journey/career-gap"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SuccessStoriesRoute = Route$15.update({
	id: "/success-stories",
	path: "/success-stories",
	getParentRoute: () => Route$16
});
var SitemapDotxmlRoute = Route$14.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$16
});
var QuizRoute = Route$13.update({
	id: "/quiz",
	path: "/quiz",
	getParentRoute: () => Route$16
});
var PlacementsRoute = Route$12.update({
	id: "/placements",
	path: "/placements",
	getParentRoute: () => Route$16
});
var FresherJourneyRoute = Route$17.update({
	id: "/fresher-journey",
	path: "/fresher-journey",
	getParentRoute: () => Route$16
});
var ExperiencedProfessionalRoute = Route$11.update({
	id: "/experienced-professional",
	path: "/experienced-professional",
	getParentRoute: () => Route$16
});
var CoursesRoute = Route$10.update({
	id: "/courses",
	path: "/courses",
	getParentRoute: () => Route$16
});
var ContactRoute = Route$9.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$16
});
var CareerJourneysRoute = Route$8.update({
	id: "/career-journeys",
	path: "/career-journeys",
	getParentRoute: () => Route$16
});
var CareerGapRoute = Route$7.update({
	id: "/career-gap",
	path: "/career-gap",
	getParentRoute: () => Route$16
});
var BlogRoute = Route$6.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$16
});
var AboutRoute = Route$5.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$16
});
var IndexRoute = Route$4.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$16
});
var CoursesIndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => CoursesRoute
});
var JourneyFresherRoute = Route$2.update({
	id: "/journey/fresher",
	path: "/journey/fresher",
	getParentRoute: () => Route$16
});
var JourneyExperiencedRoute = Route$1.update({
	id: "/journey/experienced",
	path: "/journey/experienced",
	getParentRoute: () => Route$16
});
var JourneyCareerGapRoute = Route.update({
	id: "/journey/career-gap",
	path: "/journey/career-gap",
	getParentRoute: () => Route$16
});
var CoursesRouteChildren = {
	CoursesSlugRoute: Route$18.update({
		id: "/$slug",
		path: "/$slug",
		getParentRoute: () => CoursesRoute
	}),
	CoursesIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	BlogRoute,
	CareerGapRoute,
	CareerJourneysRoute,
	ContactRoute,
	CoursesRoute: CoursesRoute._addFileChildren(CoursesRouteChildren),
	ExperiencedProfessionalRoute,
	FresherJourneyRoute,
	PlacementsRoute,
	QuizRoute,
	SitemapDotxmlRoute,
	SuccessStoriesRoute,
	JourneyCareerGapRoute,
	JourneyExperiencedRoute,
	JourneyFresherRoute
};
var routeTree = Route$16._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
