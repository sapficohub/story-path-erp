import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as courseSchema, n as SITE_URL, o as faqSchema, r as breadcrumbSchema, t as JsonLd } from "./schema-De0q4zeh.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as LeadForm } from "./LeadForm-fl9XhbCp.mjs";
import { C as Award, E as CircleCheck, S as Briefcase, a as TrendingUp, d as MessageCircle, r as Users, y as Clock } from "../_libs/lucide-react.mjs";
import { n as SiteLayout } from "./SiteLayout-pfClKc0L.mjs";
import { a as motion } from "../_libs/framer-motion.mjs";
import { t as COURSES } from "./courses-BfBEczWU.mjs";
import { t as Route } from "./courses._slug-C7nkfyQy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/courses._slug-D95NI0y3.js
var import_jsx_runtime = require_jsx_runtime();
function CoursePage() {
	const { course } = Route.useLoaderData();
	const related = COURSES.filter((c) => c.slug !== course.slug).slice(0, 3);
	const faqs = [
		{
			question: `Do I need prior experience for ${course.title}?`,
			answer: "No. Our trainers start from scratch and guide you through every concept with hands-on labs."
		},
		{
			question: "Will I get SAP server access?",
			answer: "Yes. Every student receives live SAP server access for practical training."
		},
		{
			question: "Is placement assistance available?",
			answer: "Yes. We provide placement assistance, resume preparation and interview support."
		},
		{
			question: "Can I attend a free demo?",
			answer: "Yes. You can book a free demo session before enrolling."
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: breadcrumbSchema([
			{
				name: "Home",
				url: SITE_URL
			},
			{
				name: "Courses",
				url: `${SITE_URL}/courses`
			},
			{
				name: course.title,
				url: `${SITE_URL}/courses/${course.slug}`
			}
		]) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: courseSchema({
			name: course.title,
			description: course.description,
			url: `${SITE_URL}/courses/${course.slug}`
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: faqSchema(faqs) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
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
							className: "mt-3 text-4xl font-black md:text-6xl",
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
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mr-1 inline h-4 w-4" }), course.duration]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded-full bg-white/15 px-3 py-1 backdrop-blur",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "mr-1 inline h-4 w-4" }), course.level]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded-full bg-white/15 px-3 py-1 backdrop-blur",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "mr-1 inline h-4 w-4" }), "100% Placement Support"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "rounded-full bg-white px-6 py-3 font-semibold text-brand-dark shadow-glow transition hover:scale-105",
								children: "Book Free Demo"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://wa.me/919000333859",
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white",
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
				className: "mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-12 lg:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-3xl font-black",
							children: [
								"What is ",
								course.title,
								"?"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 leading-relaxed text-muted-foreground",
							children: course.description
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-black",
							children: "Who Should Learn"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 grid gap-3 sm:grid-cols-2",
							children: course.who.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2 rounded-xl border border-border bg-card p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "mt-0.5 h-5 w-5 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
							}, item))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-black",
							children: "Course Curriculum"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid gap-2",
							children: course.curriculum.map((module, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									x: -20
								},
								whileInView: {
									opacity: 1,
									x: 0
								},
								viewport: { once: true },
								transition: { delay: index * .04 },
								className: "flex items-center gap-3 rounded-xl border border-border bg-card p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand text-sm font-bold text-white",
									children: index + 1
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: module
								})]
							}, module))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-black",
							children: "Career Opportunities"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid gap-3 sm:grid-cols-2",
							children: course.careers.map((career) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 rounded-xl bg-secondary p-4 font-semibold",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-5 w-5 text-brand" }),
									" ",
									career
								]
							}, career))
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
							children: faqs.map((faq) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
								className: "group rounded-xl border border-border bg-card p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
									className: "flex cursor-pointer items-center justify-between font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: faq.question }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-brand transition group-open:rotate-180",
										children: "▼"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: faq.answer
								})]
							}, faq.question))
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "self-start space-y-5 lg:sticky lg:top-24",
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
							].map((benefit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-brand-green" }), benefit]
							}, benefit))
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
						className: "text-center text-3xl font-black",
						children: "Related Courses"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-5 sm:grid-cols-3",
						children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/courses/$slug",
							params: { slug: item.slug },
							className: "rounded-2xl border border-border bg-card p-5 shadow-card transition hover:scale-[1.02]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-3xl",
									children: item.icon
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 font-extrabold",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm text-muted-foreground",
									children: item.tagline
								})
							]
						}, item.slug))
					})]
				})
			})
		] })
	] });
}
//#endregion
export { CoursePage as component };
