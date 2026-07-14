import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as lazyRouteComponent, d as Link, l as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as LeadForm } from "./LeadForm-fl9XhbCp.mjs";
import { t as ComicCharacter } from "./ComicCharacter-BRIbgW96.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/fresher-journey-iVSgPA8j.js
var import_jsx_runtime = require_jsx_runtime();
var $$splitComponentImporter = () => import("./fresher-journey-vCxJTlDR.mjs");
var Route = createFileRoute("/fresher-journey")({
	head: () => ({ meta: [
		{ title: "Fresher Journey — Arjun's SAP Story | Next-Gen ERP Solutions" },
		{
			name: "description",
			content: "Follow Arjun's animated journey from graduation to a six-figure SAP career. Interactive comic chapters built for freshers."
		},
		{
			property: "og:title",
			content: "Arjun's Fresher to SAP Professional Story"
		},
		{
			property: "og:description",
			content: "An interactive comic-style transformation journey for SAP freshers."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
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
export { JourneyHero as n, Route as r, FinalCTA as t };
