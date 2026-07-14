import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as SiteLayout } from "./SiteLayout-CJeBVsZS.mjs";
import { a as useMotionValueEvent, i as useScroll, n as useSpring } from "../_libs/framer-motion.mjs";
import { n as SalaryGraph, t as ComicCharacter } from "./ComicCharacter-BRIbgW96.mjs";
import { n as JourneyHero, t as FinalCTA } from "./fresher-journey-iVSgPA8j.mjs";
import { t as ComicPanel } from "./ComicPanel-ClrGAn44.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/experienced-professional-7-fkEqpz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CHAPTERS = [
	{
		c: "Chapter 1",
		t: "The Daily Grind",
		n: "Rahul works hard. The hours are long. The salary barely moves.",
		b: "I work harder than anyone. Why am I stuck?",
		mood: "worried"
	},
	{
		c: "Chapter 2",
		t: "Friends Get Promoted",
		n: "Notifications light up. Colleagues celebrate new roles. Rahul scrolls past.",
		b: "Why everyone except me?",
		mood: "sad"
	},
	{
		c: "Chapter 3",
		t: "The Family Conversation",
		n: "Dinner table. A cousin mentions SAP. Salaries that change lives.",
		b: "Tell me more about this SAP.",
		mood: "neutral"
	},
	{
		c: "Chapter 4",
		t: "Researching Options",
		n: "Late-night research. Reviews. Demos. Next-Gen rises to the top.",
		b: "These people understand professionals like me.",
		mood: "neutral"
	},
	{
		c: "Chapter 5",
		t: "Joining Next-Gen",
		n: "Weekend batch. A mentor who gets it. A roadmap that finally makes sense.",
		b: "This time I'll do it right.",
		mood: "confident"
	},
	{
		c: "Chapter 6",
		t: "Mastering SAP",
		n: "Work by day. Practice by night. Real projects on real servers.",
		b: "I'm building real skills.",
		mood: "happy"
	},
	{
		c: "Chapter 7",
		t: "Interview Calls",
		n: "Phone rings. Inbox fills. Top MNCs come knocking.",
		b: "Recruiters are finding ME now.",
		mood: "confident"
	},
	{
		c: "Chapter 8",
		t: "The Switch",
		n: "Resignation. Notice period. A new badge, a new floor, a new chapter.",
		b: "I'm officially an SAP consultant.",
		mood: "happy"
	},
	{
		c: "Chapter 9",
		t: "Salary Triples",
		n: "Offer letter. Negotiation. Joining bonus. Numbers Rahul never imagined.",
		b: "I didn't need another job. I needed a better career.",
		mood: "celebrating"
	},
	{
		c: "Chapter 10",
		t: "Corporate Leadership",
		n: "Team lead. Project lead. Manager. A future that finally compounds.",
		b: "Now I lead. Now I grow.",
		mood: "confident"
	}
];
function ExperiencedJourney() {
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
			eyebrow: "Experienced Journey",
			name: "Rahul",
			title: "From Salary Stagnation to Career Growth",
			gradient: "from-[#1686F5] to-[#19C7D8]"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl space-y-24 px-4 py-20",
			children: CHAPTERS.map((ch, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicPanel, {
				chapter: ch.c,
				title: ch.t,
				narration: ch.n,
				bubble: ch.b,
				reverse: i % 2 === 1,
				children: i === 8 || i === 9 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalaryGraph, { growth: 1 })
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicCharacter, {
					mood: ch.mood,
					name: "Rahul",
					showConfetti: ch.mood === "celebrating"
				})
			}, ch.c))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, { name: "Rahul" })
	] });
}
//#endregion
export { ExperiencedJourney as component };
