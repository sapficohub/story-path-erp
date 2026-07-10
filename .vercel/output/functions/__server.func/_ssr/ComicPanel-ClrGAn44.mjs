import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as motion, t as useInView } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ComicPanel-ClrGAn44.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ComicPanel({ chapter, title, narration, bubble, children, reverse = false }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		amount: .3
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "grid items-center gap-6 md:grid-cols-2 md:gap-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				x: reverse ? 60 : -60,
				rotate: reverse ? 2 : -2
			},
			animate: inView ? {
				opacity: 1,
				x: 0,
				rotate: 0
			} : {},
			transition: {
				duration: .7,
				ease: "easeOut"
			},
			className: reverse ? "md:order-2" : "",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "comic-panel aspect-[4/3] p-6 flex items-center justify-center",
				children
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 40
			},
			animate: inView ? {
				opacity: 1,
				y: 0
			} : {},
			transition: {
				duration: .7,
				delay: .15,
				ease: "easeOut"
			},
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "inline-block rounded-full bg-brand-dark px-4 py-1 text-xs font-bold uppercase tracking-widest text-white",
					children: chapter
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-3xl md:text-4xl font-extrabold text-foreground",
					children: title
				}),
				narration && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "narration-box",
					children: narration
				}),
				bubble && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "speech-bubble inline-block max-w-md",
					children: [
						"\"",
						bubble,
						"\""
					]
				})
			]
		})]
	});
}
//#endregion
export { ComicPanel as t };
