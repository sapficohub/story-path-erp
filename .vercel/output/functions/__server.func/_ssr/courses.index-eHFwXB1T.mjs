import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as SiteLayout } from "./SiteLayout-CPmyeztc.mjs";
import { a as motion } from "../_libs/framer-motion.mjs";
import { t as COURSES } from "./courses-BfBEczWU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/courses.index-eHFwXB1T.js
var import_jsx_runtime = require_jsx_runtime();
function CoursesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-gradient-hero py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-4 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "inline-block rounded-full bg-brand-dark px-4 py-1 text-xs font-bold uppercase tracking-widest text-white",
					children: "SAP Courses"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-4 text-4xl font-black md:text-6xl",
					children: ["Explore every ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-brand",
						children: "SAP module"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 mx-auto max-w-3xl text-lg text-muted-foreground",
					children: "From core finance to cloud HCM — click any module to see curriculum, careers, salaries and a complete placement roadmap."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-4 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: COURSES.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 30
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { delay: i * .04 },
				whileHover: { y: -6 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/courses/$slug",
					params: { slug: c.slug },
					className: "group block h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${c.color} text-3xl shadow-glow`,
							children: c.icon
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl font-extrabold",
							children: c.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: c.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-secondary px-3 py-1 text-xs font-semibold",
								children: c.duration
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-secondary px-3 py-1 text-xs font-semibold",
								children: c.level
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex items-center justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted-foreground",
								children: ["Avg CTC: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									className: "text-brand-green",
									children: c.salaryFresher
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold text-brand inline-flex items-center gap-1 group-hover:gap-2 transition-all",
								children: ["View Course ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})]
						})
					]
				})
			}, c.slug))
		})
	})] });
}
//#endregion
export { CoursesPage as component };
