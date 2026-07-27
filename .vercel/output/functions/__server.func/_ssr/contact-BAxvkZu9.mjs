import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as SITE_URL, r as breadcrumbSchema, s as localBusinessSchema, t as JsonLd } from "./schema-De0q4zeh.mjs";
import { t as LeadForm } from "./LeadForm-CJs2UsGV.mjs";
import { d as MessageCircle, h as Instagram, m as Mail, p as MapPin, t as Youtube, u as Phone, v as Facebook } from "../_libs/lucide-react.mjs";
import { n as SiteLayout } from "./SiteLayout-pfClKc0L.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BAxvkZu9.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: localBusinessSchema() }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: breadcrumbSchema([{
			name: "Home",
			url: SITE_URL
		}, {
			name: "Contact",
			url: `${SITE_URL}/contact`
		}]) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-gradient-hero py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-5xl px-4 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-block rounded-full bg-brand-dark px-4 py-1 text-xs font-bold uppercase tracking-widest text-white",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 text-4xl font-black md:text-6xl",
						children: ["Let's talk about ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-brand",
							children: "your career"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-3xl text-lg text-muted-foreground",
						children: "Career advisors available 9am – 9pm IST. WhatsApp replies within minutes."
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-[1fr_1.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						icon: Phone,
						title: "Call us",
						value: "+91 90003 33859",
						href: "tel:+919000333859",
						color: "bg-brand text-white"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						icon: MessageCircle,
						title: "WhatsApp",
						value: "+91 90003 33859",
						href: "https://wa.me/919000333859",
						color: "bg-[#25D366] text-white"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						icon: Mail,
						title: "Email",
						value: "hello@nextgenerpsolutions.com",
						href: "mailto:hello@nextgenerpsolutions.com",
						color: "bg-brand-dark text-white"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						icon: MapPin,
						title: "Google Business",
						value: "View on Google",
						href: "https://share.google/4ozjmIOp74J2H7OSs",
						color: "bg-brand-green text-white"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-5 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-bold uppercase tracking-wider text-muted-foreground",
							children: "Follow Us"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									"aria-label": "YouTube",
									href: "https://www.youtube.com/@Next-GenERPSolutions",
									target: "_blank",
									rel: "noreferrer",
									className: "rounded-full bg-secondary p-3 transition hover:bg-brand hover:text-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									"aria-label": "Instagram",
									href: "https://www.instagram.com/nextgenerpsolutions/",
									target: "_blank",
									rel: "noreferrer",
									className: "rounded-full bg-secondary p-3 transition hover:bg-brand hover:text-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									"aria-label": "Facebook",
									href: "https://www.facebook.com/NextGenERPSolutions",
									target: "_blank",
									rel: "noreferrer",
									className: "rounded-full bg-secondary p-3 transition hover:bg-brand hover:text-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-5 w-5" })
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-5 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-bold uppercase tracking-wider text-muted-foreground",
							children: "Business Hours"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 space-y-1 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mon – Sat" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "9:00 AM – 9:00 PM" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sunday" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "10:00 AM – 5:00 PM" })]
							})]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
				title: "Send us a message",
				subtitle: "We'll get back within 1 working hour.",
				fields: [
					{
						name: "name",
						label: "Full Name",
						required: true
					},
					{
						name: "phone",
						label: "Phone",
						type: "tel",
						required: true
					},
					{
						name: "email",
						label: "Email",
						type: "email",
						required: true
					},
					{
						name: "message",
						label: "Message",
						placeholder: "Tell us how we can help…"
					}
				],
				cta: "Send Message"
			})]
		})] })
	] });
}
function Card({ icon: Icon, title, value, href, color }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		target: href.startsWith("http") ? "_blank" : void 0,
		rel: "noreferrer",
		className: "flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card hover:scale-[1.02] transition",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `flex h-12 w-12 items-center justify-center rounded-xl ${color}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-extrabold",
			children: value
		})] })]
	});
}
//#endregion
export { ContactPage as component };
