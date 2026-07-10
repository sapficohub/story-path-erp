import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as Calendar, d as Phone, f as MessageCircle, g as Instagram, m as MapPin, n as X, p as Menu, t as Youtube, y as Facebook } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteLayout-CPmyeztc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var nextgen_logo_default = "/assets/nextgen-logo-CgROJ8Ty.png";
function Logo({ className = "h-10 w-auto" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: nextgen_logo_default,
		alt: "Next-Gen ERP Solutions",
		className
	});
}
var NAV = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/courses",
		label: "SAP Courses"
	},
	{
		to: "/career-journeys",
		label: "Career Journeys"
	},
	{
		to: "/placements",
		label: "Placements"
	},
	{
		to: "/success-stories",
		label: "Success Stories"
	},
	{
		to: "/blog",
		label: "Blog"
	},
	{
		to: "/quiz",
		label: "Quiz"
	},
	{
		to: "/about",
		label: "About"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex shrink-0 items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-10 w-auto" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-1",
					children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						className: "rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition hover:bg-secondary hover:text-foreground",
						activeProps: { className: "rounded-full px-3 py-2 text-sm font-semibold text-brand bg-secondary" },
						children: n.label
					}, n.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden lg:flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "tel:+919000333859",
						className: "text-sm font-semibold text-brand",
						children: "+91 90003 33859"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:scale-105",
						children: "Book Free Demo"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen(!open),
					"aria-label": "Menu",
					className: "lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:hidden border-t border-border bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3",
				children: [NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: n.to,
					onClick: () => setOpen(false),
					className: "rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary",
					children: n.label
				}, n.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					onClick: () => setOpen(false),
					className: "mt-2 rounded-full bg-gradient-brand px-5 py-3 text-center text-sm font-semibold text-white",
					children: "Book Free Demo"
				})]
			})
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-20 bg-brand-dark text-white/90",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl bg-white p-3 inline-block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-12 w-auto" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-white/70",
							children: "SAP training, certification guidance and placement support for freshers, experienced professionals and career-gap candidates."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.youtube.com/@Next-GenERPSolutions",
									target: "_blank",
									rel: "noreferrer",
									"aria-label": "YouTube",
									className: "rounded-full bg-white/10 p-2 hover:bg-white/20",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.instagram.com/nextgenerpsolutions/",
									target: "_blank",
									rel: "noreferrer",
									"aria-label": "Instagram",
									className: "rounded-full bg-white/10 p-2 hover:bg-white/20",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.facebook.com/NextGenERPSolutions",
									target: "_blank",
									rel: "noreferrer",
									"aria-label": "Facebook",
									className: "rounded-full bg-white/10 p-2 hover:bg-white/20",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://share.google/4ozjmIOp74J2H7OSs",
									target: "_blank",
									rel: "noreferrer",
									"aria-label": "Google Business",
									className: "rounded-full bg-white/10 p-2 hover:bg-white/20",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" })
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mb-3 text-sm font-bold uppercase tracking-wider text-white",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "hover:text-white",
							children: "Home"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "hover:text-white",
							children: "About"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/courses",
							className: "hover:text-white",
							children: "Courses"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/placements",
							className: "hover:text-white",
							children: "Placements"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/career-journeys",
							className: "hover:text-white",
							children: "Career Journeys"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/success-stories",
							className: "hover:text-white",
							children: "Success Stories"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/blog",
							className: "hover:text-white",
							children: "Blog"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "hover:text-white",
							children: "Contact"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mb-3 text-sm font-bold uppercase tracking-wider text-white",
					children: "Top Courses"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/courses/$slug",
							params: { slug: "sap-fico" },
							className: "hover:text-white",
							children: "SAP FICO"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/courses/$slug",
							params: { slug: "sap-mm" },
							className: "hover:text-white",
							children: "SAP MM"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/courses/$slug",
							params: { slug: "sap-sd" },
							className: "hover:text-white",
							children: "SAP SD"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/courses/$slug",
							params: { slug: "sap-abap" },
							className: "hover:text-white",
							children: "SAP ABAP"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/courses/$slug",
							params: { slug: "sap-hcm" },
							className: "hover:text-white",
							children: "SAP HCM"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/courses/$slug",
							params: { slug: "sap-successfactors" },
							className: "hover:text-white",
							children: "SuccessFactors"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mb-3 text-sm font-bold uppercase tracking-wider text-white",
					children: "Get in Touch"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-brand-teal" }),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+919000333859",
									children: "+91 90003 33859"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4 text-brand-green" }),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://wa.me/919000333859",
									target: "_blank",
									rel: "noreferrer",
									children: "WhatsApp Chat"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-brand-teal mt-0.5" }), " Hyderabad, India"]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/60 md:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Next-Gen ERP Solutions. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-white",
							children: "Privacy Policy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-white",
							children: "Terms"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/sitemap.xml",
							className: "hover:text-white",
							children: "Sitemap"
						})
					]
				})]
			})
		})]
	});
}
function StickyCTAs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-4 right-4 z-50 flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "https://wa.me/919000333859",
				target: "_blank",
				rel: "noreferrer",
				"aria-label": "WhatsApp",
				className: "flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow transition hover:scale-110",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-7 w-7" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "tel:+919000333859",
				"aria-label": "Call now",
				className: "flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-glow transition hover:scale-110",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-7 w-7" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/contact",
				"aria-label": "Book demo",
				className: "hidden sm:flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-white shadow-glow transition hover:scale-110",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-7 w-7" })
			})
		]
	});
}
function SiteLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyCTAs, {})
		]
	});
}
//#endregion
export { SiteLayout as n, Logo as t };
