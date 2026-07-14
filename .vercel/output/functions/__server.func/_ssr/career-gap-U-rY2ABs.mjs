import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as SiteLayout } from "./SiteLayout-CJeBVsZS.mjs";
import { a as useMotionValueEvent, i as useScroll, n as useSpring } from "../_libs/framer-motion.mjs";
import { n as SalaryGraph, t as ComicCharacter } from "./ComicCharacter-BRIbgW96.mjs";
import { n as JourneyHero, t as FinalCTA } from "./fresher-journey-iVSgPA8j.mjs";
import { t as ComicPanel } from "./ComicPanel-ClrGAn44.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/career-gap-U-rY2ABs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CHAPTERS = [
	{
		c: "Chapter 1",
		t: "The Pause",
		n: "Priya stepped away for family. Years passed. The world kept moving.",
		b: "Is it too late for me?",
		mood: "sad"
	},
	{
		c: "Chapter 2",
		t: "The Spark",
		n: "A friend mentions SAP. Stories of women restarting careers at any age.",
		b: "Maybe I CAN do this.",
		mood: "neutral"
	},
	{
		c: "Chapter 3",
		t: "Finding Next-Gen",
		n: "Reviews from real career-gap candidates. Mentors who understand the journey.",
		b: "This place believes in second chapters.",
		mood: "neutral"
	},
	{
		c: "Chapter 4",
		t: "Joining the Class",
		n: "First day jitters. Warm welcomes. A fresh notebook. A new beginning.",
		b: "I belong here.",
		mood: "happy"
	},
	{
		c: "Chapter 5",
		t: "Building Confidence",
		n: "Modules click. Labs work. Small wins compound into big belief.",
		b: "I'm still sharp. I always was.",
		mood: "confident"
	},
	{
		c: "Chapter 6",
		t: "Family Cheers",
		n: "Husband, kids, parents — everyone watches her rise again.",
		b: "They're proud. I'm proud.",
		mood: "happy"
	},
	{
		c: "Chapter 7",
		t: "Interview Calls",
		n: "First call. Second call. Calendars fill up. The phone won't stop.",
		b: "Companies WANT me.",
		mood: "confident"
	},
	{
		c: "Chapter 8",
		t: "The Offer",
		n: "Offer letter in hand. A team lead role. Hybrid hours that fit her life.",
		b: "My career wasn't over. It was waiting for a restart.",
		mood: "celebrating"
	},
	{
		c: "Chapter 9",
		t: "Corporate Comeback",
		n: "ID card. Laptop. A team that values experience and empathy in equal measure.",
		b: "I'm back — stronger than ever.",
		mood: "confident"
	}
];
function CareerGap() {
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
			eyebrow: "Career Gap Journey",
			name: "Priya",
			title: "From Career Break to Corporate Comeback",
			gradient: "from-[#19C7D8] to-[#09B83E]"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl space-y-24 px-4 py-20",
			children: CHAPTERS.map((ch, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicPanel, {
				chapter: ch.c,
				title: ch.t,
				narration: ch.n,
				bubble: ch.b,
				reverse: i % 2 === 1,
				children: i === 7 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalaryGraph, { growth: 1 })
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicCharacter, {
					mood: ch.mood,
					name: "Priya",
					showConfetti: ch.mood === "celebrating"
				})
			}, ch.c))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, { name: "Priya" })
	] });
}
//#endregion
export { CareerGap as component };
