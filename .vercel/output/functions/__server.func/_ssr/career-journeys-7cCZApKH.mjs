import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as ArrowRight, l as RotateCcw, v as GraduationCap, w as Briefcase } from "../_libs/lucide-react.mjs";
import { n as SiteLayout } from "./SiteLayout-CJeBVsZS.mjs";
import { o as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/career-journeys-7cCZApKH.js
var import_jsx_runtime = require_jsx_runtime();
var J = [
	{
		to: "/fresher-journey",
		name: "Arjun",
		title: "Fresher Journey",
		desc: "From graduation to first SAP job. 14 chapters of transformation.",
		icon: GraduationCap,
		emoji: "🎓",
		color: "from-[#0B1C9C] to-[#1686F5]"
	},
	{
		to: "/experienced-professional",
		name: "Rahul",
		title: "Experienced Professional",
		desc: "From salary stagnation to corporate leadership.",
		icon: Briefcase,
		emoji: "💼",
		color: "from-[#1686F5] to-[#19C7D8]"
	},
	{
		to: "/career-gap",
		name: "Priya",
		title: "Career Gap Restart",
		desc: "From career break to confident corporate comeback.",
		icon: RotateCcw,
		emoji: "🔄",
		color: "from-[#19C7D8] to-[#09B83E]"
	}
];
function JourneysPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-gradient-hero py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-4 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "inline-block rounded-full bg-brand-dark px-4 py-1 text-xs font-bold uppercase tracking-widest text-white",
					children: "Career Journeys"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-4 text-4xl font-black md:text-6xl",
					children: ["Three stories. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-brand",
						children: "One transformation."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 mx-auto max-w-3xl text-lg text-muted-foreground",
					children: "Pick the journey that matches your story. Each one is a fully animated comic-style chapter book — like a movie you scroll through."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-4 py-16 grid gap-6 md:grid-cols-3",
		children: J.map((j, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: 40
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: { once: true },
			transition: { delay: i * .1 },
			whileHover: { y: -8 },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: j.to,
				className: "group relative block overflow-hidden rounded-3xl border-2 border-brand-dark bg-card p-8 shadow-[6px_6px_0_#071126]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${j.color} opacity-30 blur-3xl` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-6xl",
							children: j.emoji
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 text-xs font-bold uppercase tracking-widest text-brand",
							children: ["Meet ", j.name]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 text-2xl font-extrabold",
							children: j.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground",
							children: j.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 inline-flex items-center gap-2 font-semibold text-brand-dark group-hover:gap-3 transition-all",
							children: ["Read the Story ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				})]
			})
		}, j.to))
	})] });
}
//#endregion
export { JourneysPage as component };
