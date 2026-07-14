import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as LeadForm } from "./LeadForm-fl9XhbCp.mjs";
import { n as SiteLayout } from "./SiteLayout-CJeBVsZS.mjs";
import { a as useMotionValueEvent, i as useScroll, n as useSpring } from "../_libs/framer-motion.mjs";
import { n as SalaryGraph, t as ComicCharacter } from "./ComicCharacter-BRIbgW96.mjs";
import { t as ComicPanel } from "./ComicPanel-ClrGAn44.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/fresher-journey-vCxJTlDR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CHAPTERS = [
	{
		c: "Chapter 1",
		t: "Graduation",
		n: "Arjun receives his degree. The crowd claps. The future feels limitless.",
		b: "I thought graduation was enough.",
		mood: "neutral"
	},
	{
		c: "Chapter 2",
		t: "The Job Search",
		n: "Day after day, he applies. Rejection emails pile up. The room grows quiet.",
		b: "Why is nobody hiring me?",
		mood: "sad"
	},
	{
		c: "Chapter 3",
		t: "Time Slips Away",
		n: "Calendar pages fly. Friends post office selfies. Confidence wavers.",
		b: "I'm falling behind.",
		mood: "worried"
	},
	{
		c: "Chapter 4",
		t: "Discovering SAP",
		n: "A late-night scroll. SAP roles glow brighter — bigger salaries, bigger futures.",
		b: "Wait… what is SAP?",
		mood: "neutral"
	},
	{
		c: "Chapter 5",
		t: "Finding Next-Gen",
		n: "Reviews, ratings, a glowing reputation. One name keeps coming up.",
		b: "This looks different.",
		mood: "neutral"
	},
	{
		c: "Chapter 6",
		t: "Joining Next-Gen",
		n: "Doors slide open. A warm welcome. A trainer who actually listens.",
		b: "I finally found direction.",
		mood: "happy"
	},
	{
		c: "Chapter 7",
		t: "Learning SAP",
		n: "Notes. Labs. Late-night sessions. Confidence climbs with every module.",
		b: "I'm actually getting this!",
		mood: "happy"
	},
	{
		c: "Chapter 8",
		t: "Real-Time Projects",
		n: "End-to-end implementation. Real business workflows. Real ownership.",
		b: "Now I understand how companies work.",
		mood: "confident"
	},
	{
		c: "Chapter 9",
		t: "Interview Preparation",
		n: "Mock interviews. Resume polish. Soft-skills coaching. Green ticks everywhere.",
		b: "I'm ready.",
		mood: "confident"
	},
	{
		c: "Chapter 10",
		t: "The Interview",
		n: "Skyscraper. Glass doors. Calm answers. Heads nodding.",
		b: "I belong here.",
		mood: "confident"
	},
	{
		c: "Chapter 11",
		t: "The Offer Letter",
		n: "A phone call. An email. Confetti everywhere. The family celebrates.",
		b: "I did it!",
		mood: "celebrating"
	},
	{
		c: "Chapter 12",
		t: "First Day in the MNC",
		n: "ID card. Laptop bag. Elevator ride. A whole new world begins.",
		b: "This is my office.",
		mood: "happy"
	},
	{
		c: "Chapter 13",
		t: "Career Growth",
		n: "Associate. Consultant. Senior. Manager. The graph keeps rising.",
		b: "I'm not just working — I'm growing.",
		mood: "confident"
	},
	{
		c: "Chapter 14",
		t: "Success",
		n: "New home. New car. Family smiles. Old Arjun would be proud.",
		b: "Learning SAP changed my life.",
		mood: "celebrating"
	}
];
function FresherJourney() {
	const { scrollYProgress } = useScroll();
	const progress = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30
	});
	const [progressValue, setProgressValue] = (0, import_react.useState)(0);
	useMotionValueEvent(progress, "change", (latest) => {
		setProgressValue(Math.round(latest * 20) * 5);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-progress": progressValue,
			className: "scroll-progress-bar fixed left-0 top-[64px] z-30 h-1 w-full origin-left bg-gradient-brand"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JourneyHero, {
			eyebrow: "Fresher Journey",
			name: "Arjun",
			title: "From Graduate to SAP Professional",
			gradient: "from-[#0B1C9C] to-[#1686F5]"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl space-y-24 px-4 py-20",
			children: CHAPTERS.map((ch, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicPanel, {
				chapter: ch.c,
				title: ch.t,
				narration: ch.n,
				bubble: ch.b,
				reverse: i % 2 === 1,
				children: i === 13 || i === 10 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalaryGraph, { growth: 1 })
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicCharacter, {
					mood: ch.mood,
					name: "Arjun",
					showConfetti: ch.mood === "celebrating"
				})
			}, ch.c))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, { name: "Arjun" })
	] });
}
function JourneyHero({ eyebrow, name, title, gradient }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `relative overflow-hidden bg-gradient-to-br ${gradient} text-white`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "halftone absolute inset-0 opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-bold uppercase tracking-widest backdrop-blur",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-4 text-5xl md:text-7xl font-black",
					children: ["Meet ", name]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-2xl text-white/90 font-display font-bold",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 max-w-xl text-white/80",
					children: [
						"Scroll through every chapter of ",
						name,
						"'s transformation. Each panel is an animated moment — narrated like a comic, real like a documentary."
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-sm mx-auto w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "comic-panel p-6 aspect-square",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicCharacter, {
						mood: "neutral",
						name
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "speech-bubble absolute -bottom-6 -left-6",
					children: "\"My story starts here…\""
				})]
			})]
		})]
	});
}
function FinalCTA({ name }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-brand-dark py-20 text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "speech-bubble inline-block bg-white text-foreground",
					children: "\"Now it's your turn.\""
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-6 text-4xl md:text-6xl font-black",
					children: ["Your SAP Success Story ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-brand",
						children: "Starts Here"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-white/80 text-lg",
					children: [name, "'s story could be yours. Talk to a career advisor today — it's free."]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "rounded-full bg-gradient-brand px-6 py-3 font-semibold text-white shadow-glow",
						children: "Book Free Demo"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://wa.me/919000333859",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "rounded-full bg-[#25D366] px-6 py-3 font-semibold",
						children: "WhatsApp Us"
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {})]
		})
	});
}
//#endregion
export { FinalCTA, JourneyHero, FresherJourney as component };
