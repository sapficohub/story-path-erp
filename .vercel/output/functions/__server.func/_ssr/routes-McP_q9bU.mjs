import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as LeadForm } from "./LeadForm-fl9XhbCp.mjs";
import { E as ArrowRight, T as Award, a as TrendingUp, c as Sparkles, d as Phone, f as MessageCircle, l as RotateCcw, r as Users, s as Star, v as GraduationCap, w as Briefcase, x as CircleCheck } from "../_libs/lucide-react.mjs";
import { n as SiteLayout, t as Logo } from "./SiteLayout-CJeBVsZS.mjs";
import { o as motion } from "../_libs/framer-motion.mjs";
import { n as SalaryGraph } from "./ComicCharacter-BRIbgW96.mjs";
import { t as COURSES } from "./courses-BfBEczWU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-McP_q9bU.js
var import_jsx_runtime = require_jsx_runtime();
var JOURNEYS = [
	{
		icon: GraduationCap,
		emoji: "🎓",
		title: "Fresher",
		desc: "Completed graduation? Looking for your first job?",
		cta: "Start My Journey",
		to: "/journey/fresher",
		color: "from-[#0B1C9C] to-[#1686F5]"
	},
	{
		icon: Briefcase,
		emoji: "💼",
		title: "Experienced Professional",
		desc: "Working hard but salary growth is slow?",
		cta: "Upgrade My Career",
		to: "/journey/experienced",
		color: "from-[#1686F5] to-[#19C7D8]"
	},
	{
		icon: RotateCcw,
		emoji: "🔄",
		title: "Career Gap",
		desc: "Ready to restart your career?",
		cta: "Restart My Career",
		to: "/journey/career-gap",
		color: "from-[#19C7D8] to-[#09B83E]"
	}
];
var PROCESS = [
	{
		step: "01",
		title: "Enroll",
		desc: "Book a free demo and choose your SAP module."
	},
	{
		step: "02",
		title: "Train",
		desc: "Live classes with hands-on SAP server access."
	},
	{
		step: "03",
		title: "Projects",
		desc: "Real-time, industry-grade implementation projects."
	},
	{
		step: "04",
		title: "Interview",
		desc: "Mock interviews, resume building & soft skills."
	},
	{
		step: "05",
		title: "Placement",
		desc: "Tied-up MNCs & SAP partners hiring our students."
	},
	{
		step: "06",
		title: "Promotion",
		desc: "Continuous career mentoring after you join."
	}
];
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, {
		dark: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden bg-gradient-hero",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "halftone absolute inset-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { duration: .6 },
							className: "inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " India's #1 SAP Career Transformation Platform"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
							initial: {
								opacity: 0,
								y: 30
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .7,
								delay: .1
							},
							className: "mt-5 text-5xl font-black leading-[1.05] text-foreground md:text-7xl",
							children: [
								"Transform Your ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								" Career With ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-brand",
									children: "SAP"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: { delay: .3 },
							className: "mt-5 max-w-xl text-lg text-muted-foreground",
							children: "For Freshers, Experienced Professionals, and Career Gap Candidates. Industry-led SAP training, real projects, and 100% placement support."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: .45 },
							className: "mt-7 flex flex-wrap gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									className: "inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 font-semibold text-white shadow-glow transition hover:scale-105",
									children: ["Book Free Demo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									className: "inline-flex items-center gap-2 rounded-full border-2 border-brand bg-white px-6 py-3.5 font-semibold text-brand hover:bg-brand hover:text-white transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " Talk To Career Advisor"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/career-journeys",
									className: "inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3.5 font-semibold text-white hover:opacity-90 transition",
									children: "Explore Journeys"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://wa.me/919000333859",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-semibold text-white hover:scale-105 transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " WhatsApp Us"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									n: "5,000+",
									label: "Careers Transformed"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									n: "120+",
									label: "Hiring Partners"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									n: "92%",
									label: "Placement Rate"
								})
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							scale: .85
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						transition: { duration: .8 },
						className: "relative mx-auto w-full max-w-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-6 rounded-[2rem] bg-gradient-brand opacity-20 blur-3xl" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative rounded-[2rem] border-2 border-white bg-white p-6 shadow-glow",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Salary Growth" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-brand-green",
											children: "+340%"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 h-48",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalaryGraph, { growth: 1 })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 flex items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
											animate: { scale: [
												1,
												1.05,
												1
											] },
											transition: {
												duration: 3,
												repeat: Infinity
											},
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-14" })
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingChip, {
								className: "-left-6 top-10",
								delay: .2,
								children: "SAP S/4HANA"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingChip, {
								className: "-right-4 top-32",
								delay: .5,
								children: "FICO ★ MM ★ SD"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingChip, {
								className: "bottom-4 -left-4",
								delay: .8,
								children: "100% Placement"
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-4 py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Choose Your Journey",
					title: "Where are you on your career path?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-3",
					children: JOURNEYS.map((j, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
						className: "group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${j.color} opacity-20 blur-2xl transition group-hover:opacity-40` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-5xl",
									children: j.emoji
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-2xl font-extrabold",
									children: j.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-muted-foreground",
									children: j.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: j.to,
									className: "mt-6 inline-flex items-center gap-2 font-semibold text-brand group-hover:gap-3 transition-all",
									children: [
										j.cta,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
									]
								})
							]
						})]
					}, j.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-brand-dark py-20 text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
						light: true,
						eyebrow: "Why SAP",
						title: "The world's most in-demand enterprise platform"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 md:grid-cols-4",
						children: [
							{
								icon: TrendingUp,
								n: "$430B",
								t: "Global ERP market by 2028"
							},
							{
								icon: Users,
								n: "440K+",
								t: "Open SAP jobs worldwide"
							},
							{
								icon: Star,
								n: "92/100",
								t: "Fortune 500 use SAP"
							},
							{
								icon: Award,
								n: "₹28 LPA",
								t: "Top SAP consultant salary"
							}
						].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 30
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: { delay: i * .08 },
							className: "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-7 w-7 text-brand-teal" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 text-3xl font-black text-white",
									children: s.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-sm text-white/70",
									children: s.t
								})
							]
						}, i))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-4 py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Why Next-Gen ERP Solutions",
					title: "Trainers who've built it. Mentors who care."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-3",
					children: [
						{
							t: "Industry-Expert Trainers",
							d: "Certified SAP consultants with 12+ years of real implementation experience."
						},
						{
							t: "Live SAP Server Access",
							d: "Practice on the same systems used by global enterprises — anytime, anywhere."
						},
						{
							t: "Real-Time Projects",
							d: "End-to-end implementation projects modelled on actual client work."
						},
						{
							t: "Placement Cell",
							d: "Dedicated team with 120+ hiring partners across India & abroad."
						},
						{
							t: "Career Mentoring",
							d: "Soft skills, mock interviews, resume building and post-placement support."
						},
						{
							t: "Flexible Batches",
							d: "Weekday, weekend, fast-track and corporate training options."
						}
					].map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: i * .05 },
						className: "rounded-2xl border border-border bg-card p-6 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-7 w-7 text-brand-green" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mt-3 text-lg font-bold",
								children: f.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: f.d
							})
						]
					}, i))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-secondary py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
							eyebrow: "SAP Courses",
							title: "Pick the module that fits your future"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
							children: COURSES.slice(0, 8).map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									opacity: 0,
									y: 30
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								transition: { delay: i * .05 },
								whileHover: { y: -6 },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/courses/$slug",
									params: { slug: c.slug },
									className: "group block h-full overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-card transition",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${c.color} text-2xl shadow-glow`,
											children: c.icon
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-xl font-extrabold",
											children: c.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-muted-foreground",
											children: c.tagline
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 flex items-center justify-between text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold text-foreground",
												children: c.duration
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold text-brand group-hover:underline",
												children: "Apply Now →"
											})]
										})
									]
								})
							}, c.slug))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/courses",
								className: "inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-white hover:scale-105 transition",
								children: ["View All Courses ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-4 py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Placement Process",
					title: "From enrolment to your dream offer letter"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-6",
					children: PROCESS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							scale: .9
						},
						whileInView: {
							opacity: 1,
							scale: 1
						},
						viewport: { once: true },
						transition: { delay: i * .08 },
						className: "relative rounded-2xl border-2 border-brand-dark bg-card p-5 shadow-[4px_4px_0_#071126]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl font-black text-gradient-brand",
								children: p.step
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
								className: "mt-2 font-extrabold",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: p.desc
							})
						]
					}, p.step))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-brand-dark py-20 text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
						light: true,
						eyebrow: "Trainer Section",
						title: "Learn from senior SAP consultants"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 md:grid-cols-3",
						children: [
							{
								n: "Ravi Kumar",
								r: "Sr. SAP FICO Consultant",
								e: "15+ yrs · Ex-Deloitte"
							},
							{
								n: "Anita Sharma",
								r: "SAP SuccessFactors Lead",
								e: "12+ yrs · Ex-Accenture"
							},
							{
								n: "Mohammed Ali",
								r: "SAP ABAP / Fiori Architect",
								e: "14+ yrs · Ex-IBM"
							}
						].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
							className: "rounded-2xl border border-white/10 bg-white/5 p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-20 w-20 items-center justify-center rounded-full bg-gradient-brand text-2xl font-black",
									children: t.n.split(" ").map((x) => x[0]).join("")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "mt-4 text-xl font-extrabold",
									children: t.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-brand-teal text-sm",
									children: t.r
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-xs text-white/60",
									children: t.e
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 flex gap-1",
									children: Array.from({ length: 5 }).map((_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-brand-teal text-brand-teal" }, j))
								})
							]
						}, i))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-4 py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Success Stories",
					title: "Real careers. Real numbers."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-3",
					children: [
						{
							n: "Arjun",
							b: "₹0 / no job",
							a: "₹6.5 LPA · TCS",
							m: "SAP FICO"
						},
						{
							n: "Rahul",
							b: "₹4.2 LPA support",
							a: "₹14 LPA · Infosys",
							m: "SAP MM"
						},
						{
							n: "Priya",
							b: "5-yr career gap",
							a: "₹7.8 LPA · Capgemini",
							m: "SuccessFactors"
						}
					].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
						className: "overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand font-black text-white",
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
								className: "mt-5 space-y-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg bg-destructive/10 px-3 py-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Before:" }),
										" ",
										s.b
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg bg-brand-green/10 px-3 py-2 text-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
											className: "text-brand-green",
											children: "After:"
										}),
										" ",
										s.a
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm italic text-muted-foreground",
								children: "\"Next-Gen changed everything. The trainers care, the projects are real, and placement is guaranteed.\""
							})
						]
					}, i))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-gradient-hero py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-block rounded-full bg-brand-dark px-4 py-1 text-xs font-bold uppercase tracking-widest text-white",
							children: "Now It's Your Turn"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 text-4xl font-black md:text-6xl",
							children: ["Your SAP Success Story ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-brand",
								children: "Starts Here"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-lg text-muted-foreground",
							children: "Transform your future with industry-focused SAP training and placement support. Talk to a career advisor — it's free."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "tel:+919000333859",
								className: "rounded-full bg-brand px-6 py-3 font-semibold text-white shadow-glow",
								children: "📞 +91 90003 33859"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://wa.me/919000333859",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white shadow-glow",
								children: "💬 WhatsApp Us"
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {})]
				})
			})
		]
	});
}
function Stat({ n, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-2xl font-extrabold text-foreground",
		children: n
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-xs uppercase tracking-wider",
		children: label
	})] });
}
function SectionHeader({ eyebrow, title, light = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest ${light ? "bg-white/10 text-brand-teal" : "bg-brand-dark text-white"}`,
			children: eyebrow
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: `mt-4 text-3xl font-black md:text-5xl ${light ? "text-white" : "text-foreground"}`,
			children: title
		})]
	});
}
function FloatingChip({ children, className, delay = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 20
		},
		animate: {
			opacity: 1,
			y: [
				0,
				-8,
				0
			]
		},
		transition: {
			opacity: { delay },
			y: {
				duration: 4,
				repeat: Infinity,
				delay
			}
		},
		className: `absolute z-10 rounded-full border-2 border-brand-dark bg-white px-3 py-1.5 text-xs font-bold shadow-[3px_3px_0_#071126] ${className}`,
		children
	});
}
//#endregion
export { HomePage as component };
