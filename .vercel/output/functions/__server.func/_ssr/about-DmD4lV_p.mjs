import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as LeadForm } from "./LeadForm-fl9XhbCp.mjs";
import { C as Building2, _ as Heart, c as Sparkles, i as Trophy, o as Target, r as Users } from "../_libs/lucide-react.mjs";
import { n as SiteLayout } from "./SiteLayout-CJeBVsZS.mjs";
import { o as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DmD4lV_p.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-gradient-hero py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-5xl px-4 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-block rounded-full bg-brand-dark px-4 py-1 text-xs font-bold uppercase tracking-widest text-white",
						children: "About Us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 text-4xl font-black md:text-6xl",
						children: ["We turn ambition into ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-brand",
							children: "SAP careers"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 mx-auto max-w-3xl text-lg text-muted-foreground",
						children: "Next-Gen ERP Solutions is a career transformation platform built by senior SAP consultants. We've helped thousands of freshers, working professionals and career-gap candidates land high-growth SAP roles at India's leading MNCs."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-4 py-16 grid gap-8 md:grid-cols-3",
			children: [
				{
					i: Target,
					t: "Our Vision",
					d: "To make world-class SAP careers accessible to every learner in India — regardless of background, age or experience."
				},
				{
					i: Heart,
					t: "Our Mission",
					d: "Combine industry-grade training, real projects and dedicated placement support so every student finds their dream role."
				},
				{
					i: Trophy,
					t: "Our Promise",
					d: "100% placement assistance, lifetime access to learning resources, and mentorship that goes beyond your first job."
				}
			].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 30
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { delay: i * .1 },
				className: "rounded-2xl border border-border bg-card p-8 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.i, { className: "h-6 w-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 text-2xl font-extrabold",
						children: c.t
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: c.d
					})
				]
			}, i))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-black md:text-4xl text-center",
					children: "Our Training Methodology"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 md:grid-cols-4",
					children: [
						"Live Instructor-Led Classes",
						"Real SAP Server Access",
						"Industry-Grade Projects",
						"Mock Interviews & Placement"
					].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border-2 border-brand-dark bg-card p-5 shadow-[4px_4px_0_#071126]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-3xl font-black text-gradient-brand",
							children: ["0", i + 1]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 font-extrabold",
							children: s
						})]
					}, i))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl font-black md:text-4xl text-center",
				children: "Transformation by the numbers"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-6 md:grid-cols-4",
				children: [
					{
						i: Users,
						n: "5,000+",
						t: "Students Trained"
					},
					{
						i: Trophy,
						n: "92%",
						t: "Placement Rate"
					},
					{
						i: Building2,
						n: "120+",
						t: "Hiring Partners"
					},
					{
						i: Sparkles,
						n: "₹14 LPA",
						t: "Average CTC"
					}
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-6 text-center shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.i, { className: "mx-auto h-8 w-8 text-brand" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 text-3xl font-black text-gradient-brand",
							children: s.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-muted-foreground",
							children: s.t
						})
					]
				}, i))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-gradient-hero py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-5xl px-4 grid gap-8 md:grid-cols-2 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-black md:text-4xl",
						children: "Ready to start?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: "Book a free demo and let our career advisors design your SAP roadmap."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "mt-5 inline-block rounded-full bg-gradient-brand px-6 py-3 font-semibold text-white shadow-glow",
						children: "Talk to Advisor"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
					title: "Career Counselling",
					subtitle: "Free 30-min session with a senior SAP mentor."
				})]
			})
		})
	] });
}
//#endregion
export { AboutPage as component };
