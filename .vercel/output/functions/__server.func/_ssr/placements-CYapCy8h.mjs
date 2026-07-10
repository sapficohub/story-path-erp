import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as LeadForm } from "./LeadForm-5eXFMkYK.mjs";
import { n as SiteLayout } from "./SiteLayout-CPmyeztc.mjs";
import { a as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/placements-CYapCy8h.js
var import_jsx_runtime = require_jsx_runtime();
var COMPANIES = [
	"TCS",
	"Infosys",
	"Wipro",
	"Accenture",
	"Capgemini",
	"Deloitte",
	"IBM",
	"HCL",
	"Tech Mahindra",
	"Cognizant",
	"LTI",
	"Mindtree"
];
function PlacementsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-gradient-hero py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-5xl px-4 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-block rounded-full bg-brand-dark px-4 py-1 text-xs font-bold uppercase tracking-widest text-white",
						children: "Placements"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 text-4xl font-black md:text-6xl",
						children: ["Where our students ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-brand",
							children: "land"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 mx-auto max-w-3xl text-lg text-muted-foreground",
						children: "A dedicated placement cell, 120+ hiring partners and a 92% placement record. We don't stop until you sign your offer letter."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-4",
				children: [
					{
						n: "5,000+",
						t: "Students Placed"
					},
					{
						n: "92%",
						t: "Placement Rate"
					},
					{
						n: "₹14 LPA",
						t: "Average CTC"
					},
					{
						n: "₹42 LPA",
						t: "Highest CTC"
					}
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: i * .08 },
					className: "rounded-2xl border-2 border-brand-dark bg-card p-6 text-center shadow-[4px_4px_0_#071126]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-3xl font-black text-gradient-brand",
						children: s.n
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-muted-foreground",
						children: s.t
					})]
				}, i))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-center text-3xl font-black md:text-4xl",
					children: "Our Hiring Partners"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid grid-cols-3 gap-4 md:grid-cols-6",
					children: COMPANIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-20 items-center justify-center rounded-xl border border-border bg-card font-extrabold text-brand-dark shadow-card",
						children: c
					}, c))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-center text-3xl font-black md:text-4xl",
				children: "Placement Process"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-6",
				children: [
					"Skill Assessment",
					"Resume Building",
					"Mock Interviews",
					"Soft Skills",
					"Company Drives",
					"Offer Negotiation"
				].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border-2 border-brand-dark bg-card p-5 shadow-[4px_4px_0_#071126]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-3xl font-black text-gradient-brand",
						children: ["0", i + 1]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 font-extrabold",
						children: p
					})]
				}, p))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-gradient-hero py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-5xl px-4 grid gap-8 md:grid-cols-2 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-black md:text-4xl",
					children: "Want placement help today?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted-foreground",
					children: "Submit your details and our placement team will call you within 24 hours."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
					title: "Talk to Placement Cell",
					subtitle: "Free, no obligations."
				})]
			})
		})
	] });
}
//#endregion
export { PlacementsPage as component };
