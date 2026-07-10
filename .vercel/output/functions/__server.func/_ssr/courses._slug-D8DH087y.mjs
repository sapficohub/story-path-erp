import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as LeadForm } from "./LeadForm-5eXFMkYK.mjs";
import { T as Award, a as TrendingUp, b as Clock, f as MessageCircle, r as Users, w as Briefcase, x as CircleCheck } from "../_libs/lucide-react.mjs";
import { n as SiteLayout } from "./SiteLayout-CPmyeztc.mjs";
import { a as motion } from "../_libs/framer-motion.mjs";
import { t as COURSES } from "./courses-BfBEczWU.mjs";
import { t as Route } from "./courses._slug-DLniZPn8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/courses._slug-D8DH087y.js
var import_jsx_runtime = require_jsx_runtime();
function CoursePage() {
	const { course } = Route.useLoaderData();
	const related = COURSES.filter((c) => c.slug !== course.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: `relative overflow-hidden bg-gradient-to-br ${course.color} text-white`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "halftone absolute inset-0 opacity-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-[1.4fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/courses",
						className: "text-sm text-white/80 hover:underline",
						children: "← All Courses"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 text-6xl",
						children: course.icon
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-4xl md:text-6xl font-black",
						children: course.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xl text-white/90",
						children: course.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-wrap gap-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-full bg-white/15 px-3 py-1 backdrop-blur",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "inline h-4 w-4 mr-1" }), course.duration]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-full bg-white/15 px-3 py-1 backdrop-blur",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "inline h-4 w-4 mr-1" }), course.level]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-full bg-white/15 px-3 py-1 backdrop-blur",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "inline h-4 w-4 mr-1" }), "100% Placement Support"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "rounded-full bg-white px-6 py-3 font-semibold text-brand-dark shadow-glow hover:scale-105 transition",
							children: "Book Free Demo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://wa.me/919000333859",
							target: "_blank",
							rel: "noreferrer",
							className: "rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white inline-flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " WhatsApp"]
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					animate: {
						opacity: 1,
						y: 0
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
						title: `Apply for ${course.title}`,
						subtitle: "Get curriculum, fees & batch dates instantly.",
						cta: "Apply Now"
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-16 grid gap-10 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-2 space-y-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-3xl font-black",
						children: [
							"What is ",
							course.title,
							"?"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground leading-relaxed",
						children: course.description
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-black",
						children: "Who Should Learn"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid gap-3 sm:grid-cols-2",
						children: course.who.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2 rounded-xl border border-border bg-card p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-5 w-5 text-brand mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: w })]
						}, w))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-black",
						children: "Course Curriculum"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid gap-2",
						children: course.curriculum.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: -20
							},
							whileInView: {
								opacity: 1,
								x: 0
							},
							viewport: { once: true },
							transition: { delay: i * .04 },
							className: "flex items-center gap-3 rounded-xl border border-border bg-card p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand text-sm font-bold text-white",
								children: i + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: m
							})]
						}, m))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-black",
						children: "Career Opportunities"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid gap-3 sm:grid-cols-2",
						children: course.careers.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 rounded-xl bg-secondary p-4 font-semibold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-5 w-5 text-brand" }),
								" ",
								c
							]
						}, c))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border-2 border-brand-dark bg-card p-6 shadow-[6px_6px_0_#071126]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
								children: "Fresher Salary"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-3xl font-black text-gradient-brand",
								children: course.salaryFresher
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border-2 border-brand-dark bg-card p-6 shadow-[6px_6px_0_#071126]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
								children: "Experienced Salary"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-3xl font-black text-gradient-brand",
								children: course.salaryExperienced
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-black",
						children: "FAQs"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 space-y-3",
						children: [
							{
								q: `Do I need prior experience for ${course.title}?`,
								a: "No. Our trainers start from scratch and guide you through every concept with hands-on labs."
							},
							{
								q: "Will I get SAP server access?",
								a: "Yes, every student gets 24x7 access to live SAP servers for the full duration of training and 6 months post-completion."
							},
							{
								q: "Is placement guaranteed?",
								a: "We offer 100% placement assistance with 120+ hiring partners. Our placement rate is 92%."
							},
							{
								q: "Can I attend a free demo?",
								a: "Absolutely. Book a free demo above — our career advisor will set it up within 24 hours."
							}
						].map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							className: "group rounded-xl border border-border bg-card p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
								className: "cursor-pointer font-semibold flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f.q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-brand transition group-open:rotate-180",
									children: "▼"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: f.a
							})]
						}, i))
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-5 lg:sticky lg:top-24 self-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-5 shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-extrabold",
						children: "Why this course?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2 text-sm",
						children: [
							"Live SAP Server Access",
							"Real-Time Industry Projects",
							"Certification Guidance",
							"Resume + Mock Interviews",
							"Lifetime Recording Access"
						].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-brand-green" }), b]
						}, b))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-gradient-brand p-6 text-white shadow-glow",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-xl font-extrabold",
							children: "Talk to a mentor"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-white/90",
							children: "Free 30-minute career counselling."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:+919000333859",
							className: "mt-4 block rounded-full bg-white px-4 py-2.5 text-center font-semibold text-brand-dark",
							children: "📞 +91 90003 33859"
						})
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-black text-center",
					children: "Related Courses"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-5 sm:grid-cols-3",
					children: related.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/courses/$slug",
						params: { slug: r.slug },
						className: "rounded-2xl border border-border bg-card p-5 shadow-card hover:scale-[1.02] transition",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl",
								children: r.icon
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 font-extrabold",
								children: r.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-muted-foreground",
								children: r.tagline
							})
						]
					}, r.slug))
				})]
			})
		})
	] });
}
//#endregion
export { CoursePage as component };
