import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteLayout } from "./SiteLayout-CJeBVsZS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-CvBaB6wc.js
var import_jsx_runtime = require_jsx_runtime();
var POSTS = [
	{
		slug: "sap-fico-career-2026",
		title: "SAP FICO Career Roadmap 2026",
		cat: "SAP FICO",
		desc: "Everything you need to know to break into SAP FICO this year."
	},
	{
		slug: "sap-mm-interview-questions",
		title: "Top 50 SAP MM Interview Questions",
		cat: "Interview Questions",
		desc: "Real questions, real answers from recent MNC interviews."
	},
	{
		slug: "is-sap-good-for-freshers",
		title: "Is SAP a Good Career for Freshers?",
		cat: "Career Guidance",
		desc: "An honest, data-backed answer for 2026 graduates."
	},
	{
		slug: "career-gap-restart-with-sap",
		title: "How to Restart Your Career After a 5-Year Gap with SAP",
		cat: "Career Gap",
		desc: "A practical playbook for returning professionals."
	},
	{
		slug: "successfactors-vs-hcm",
		title: "SuccessFactors vs SAP HCM — Which Should You Learn?",
		cat: "Certification",
		desc: "Compare modules, salaries and demand in 2026."
	},
	{
		slug: "sap-abap-on-hana",
		title: "Why Every ABAP Developer Must Learn HANA Today",
		cat: "SAP ABAP",
		desc: "The shift to S/4HANA is real — here's how to ride it."
	}
];
function BlogIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-gradient-hero py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-4 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "inline-block rounded-full bg-brand-dark px-4 py-1 text-xs font-bold uppercase tracking-widest text-white",
					children: "Blog"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-4 text-4xl font-black md:text-6xl",
					children: ["SAP ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-brand",
						children: "Insights"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 mx-auto max-w-2xl text-lg text-muted-foreground",
					children: "Career guides, interview preparation and module deep-dives from senior SAP consultants."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-4 py-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: POSTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/blog",
			className: "block rounded-2xl border border-border bg-card p-6 shadow-card hover:scale-[1.02] transition",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-bold uppercase tracking-wider text-brand",
					children: p.cat
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 text-xl font-extrabold",
					children: p.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: p.desc
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 text-sm font-semibold text-brand",
					children: "Read article →"
				})
			]
		}, p.slug))
	})] });
}
//#endregion
export { BlogIndex as component };
