import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { u as Quote } from "../_libs/lucide-react.mjs";
import { n as SiteLayout } from "./SiteLayout-CJeBVsZS.mjs";
import { o as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/success-stories-CVaNS7lq.js
var import_jsx_runtime = require_jsx_runtime();
var STORIES = [
	{
		n: "Arjun K.",
		m: "SAP FICO",
		b: "Unemployed",
		a: "₹6.5 LPA · TCS",
		q: "From rejection emails to my first offer in 5 months. Next-Gen mentors believed in me before I did."
	},
	{
		n: "Rahul M.",
		m: "SAP MM",
		b: "₹4.2 LPA · Support",
		a: "₹14 LPA · Infosys",
		q: "I didn't need another job. I needed a better career — and Next-Gen built it for me."
	},
	{
		n: "Priya S.",
		m: "SuccessFactors",
		b: "5-yr career gap",
		a: "₹7.8 LPA · Capgemini",
		q: "My career wasn't over. It was waiting for a restart. Thank you, Next-Gen."
	},
	{
		n: "Vikram T.",
		m: "SAP ABAP",
		b: "₹3.5 LPA · Tester",
		a: "₹11 LPA · Accenture",
		q: "Real projects gave me real confidence. Cleared 3 interviews in 2 weeks."
	},
	{
		n: "Meera J.",
		m: "SAP HCM",
		b: "HR Executive",
		a: "₹9 LPA · Deloitte",
		q: "Switching domains felt impossible — until I joined Next-Gen."
	},
	{
		n: "Suresh B.",
		m: "SAP BASIS",
		b: "Linux Admin · ₹5 LPA",
		a: "₹16 LPA · IBM",
		q: "BASIS opened doors I didn't even know existed."
	}
];
function SuccessStories() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-gradient-hero py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-4 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "inline-block rounded-full bg-brand-dark px-4 py-1 text-xs font-bold uppercase tracking-widest text-white",
					children: "Success Stories"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-4 text-4xl font-black md:text-6xl",
					children: ["Real careers. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-brand",
						children: "Real numbers."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 mx-auto max-w-3xl text-lg text-muted-foreground",
					children: "Every story is verified. Every number is real. Every transformation began with one decision."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-4 py-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: STORIES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 30
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: { once: true },
			transition: { delay: i * .06 },
			className: "rounded-2xl border-2 border-brand-dark bg-card p-6 shadow-[6px_6px_0_#071126]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand text-xl font-black text-white",
						children: s.n[0]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-extrabold",
						children: s.n
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-muted-foreground",
						children: [s.m, " Graduate"]
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid grid-cols-2 gap-2 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-destructive/10 p-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Before:" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							s.b
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-brand-green/10 p-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "text-brand-green",
								children: "After:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							s.a
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "mt-4 h-5 w-5 text-brand opacity-50" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 italic text-sm text-muted-foreground",
					children: s.q
				})
			]
		}, s.n))
	})] });
}
//#endregion
export { SuccessStories as component };
