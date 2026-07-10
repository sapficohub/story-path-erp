import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as motion, i as useScroll, n as useSpring, r as useTransform } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chapter-visuals-DGIQKzAT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Logo({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: `flex items-center gap-2.5 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: "36",
			height: "36",
			viewBox: "0 0 40 40",
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "2",
					y: "2",
					width: "36",
					height: "36",
					rx: "10",
					fill: "url(#lg)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", {
					points: "8,28 16,22 22,25 32,12",
					stroke: "white",
					strokeWidth: "2.5",
					fill: "none",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "8",
					cy: "28",
					r: "2",
					fill: "#19C7D8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "16",
					cy: "22",
					r: "2",
					fill: "#1686F5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "22",
					cy: "25",
					r: "2",
					fill: "#19C7D8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "32",
					cy: "12",
					r: "2.5",
					fill: "#09B83E"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "lg",
					x1: "0",
					y1: "0",
					x2: "40",
					y2: "40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "#0B1C9C"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "#1686F5"
					})]
				}) })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "leading-tight",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-display font-extrabold text-base text-foreground",
				children: "Next-Gen"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[10px] font-semibold tracking-widest text-muted-foreground uppercase",
				children: "ERP Solutions"
			})]
		})]
	});
}
function NavBar({ dark = false }) {
	const linkBase = dark ? "text-white/80 hover:text-white" : "text-foreground/70 hover:text-foreground";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed top-0 inset-x-0 z-50 backdrop-blur-xl ${dark ? "bg-[#071126]/60 border-b border-white/10" : "bg-background/70 border-b border-border"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 h-16 flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden md:flex items-center gap-8 text-sm font-medium",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: linkBase,
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/journey/fresher",
							className: linkBase,
							children: "Fresher"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/journey/experienced",
							className: linkBase,
							children: "Professional"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/journey/career-gap",
							className: linkBase,
							children: "Career Gap"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
					whileHover: { scale: 1.04 },
					whileTap: { scale: .97 },
					href: "#contact",
					className: "inline-flex items-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-glow-blue",
					children: "Book Free Demo"
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		id: "contact",
		className: "bg-[#071126] text-white/80 py-16 px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl grid md:grid-cols-4 gap-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "[&_div]:text-white [&_.text-muted-foreground]:text-white/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-white/60",
					children: "Premium SAP training and placement support for ambitious learners."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display font-bold mb-3",
					children: "Journeys"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm text-white/70",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/journey/fresher",
							className: "hover:text-white",
							children: "For Freshers"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/journey/experienced",
							className: "hover:text-white",
							children: "For Professionals"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/journey/career-gap",
							className: "hover:text-white",
							children: "After Career Gap"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display font-bold mb-3",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm text-white/70",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "hello@nextgenerp.com" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "+91 98765 43210" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Hyderabad · India" })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display font-bold mb-3",
					children: "Get Started"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#",
					className: "inline-flex rounded-full bg-growth px-5 py-3 text-sm font-semibold text-white shadow-glow-green",
					children: "WhatsApp Us"
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl mt-12 pt-6 border-t border-white/10 text-xs text-white/50 flex justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Next-Gen ERP Solutions"
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Built for transformation." })]
		})]
	});
}
var accentMap = {
	blue: {
		bg: "bg-[#1686F5]",
		text: "text-[#1686F5]",
		glow: "shadow-glow-blue",
		ring: "ring-[#1686F5]/40"
	},
	teal: {
		bg: "bg-[#19C7D8]",
		text: "text-[#19C7D8]",
		glow: "shadow-glow-teal",
		ring: "ring-[#19C7D8]/40"
	},
	green: {
		bg: "bg-[#09B83E]",
		text: "text-[#09B83E]",
		glow: "shadow-glow-green",
		ring: "ring-[#09B83E]/40"
	}
};
function ChapterPanel({ chapter, index, total }) {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
	const opacity = useTransform(scrollYProgress, [
		0,
		.25,
		.75,
		1
	], [
		0,
		1,
		1,
		.3
	]);
	const scale = useTransform(scrollYProgress, [
		0,
		.5,
		1
	], [
		.92,
		1,
		.95
	]);
	const reverse = index % 2 === 1;
	const a = accentMap[chapter.accent];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: "min-h-screen relative flex items-center px-6 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			style: { opacity },
			className: "absolute inset-0 -z-10 grid-bg opacity-30"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: {
					y,
					opacity
				},
				className: `${reverse ? "lg:order-2" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `h-10 w-10 rounded-full ${a.bg} flex items-center justify-center font-display font-extrabold text-white ${a.glow}`,
							children: chapter.num
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs font-semibold tracking-[0.25em] uppercase text-white/50",
							children: [
								"Chapter ",
								chapter.num,
								" / ",
								total
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display font-extrabold text-5xl md:text-6xl text-white leading-[1.05] mb-5",
						children: chapter.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg text-white/70 leading-relaxed max-w-xl mb-8",
						children: chapter.scene
					}),
					chapter.bubble && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							scale: .8,
							rotate: -3
						},
						whileInView: {
							opacity: 1,
							scale: 1,
							rotate: -2
						},
						viewport: {
							once: false,
							amount: .5
						},
						transition: {
							type: "spring",
							stiffness: 200,
							damping: 18
						},
						className: "comic-bubble inline-block max-w-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `block text-xs uppercase tracking-widest mb-1 ${a.text}`,
								children: chapter.num <= 3 ? "Inner voice" : "Realization"
							}),
							"\"",
							chapter.bubble,
							"\""
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: {
					scale,
					y: useTransform(scrollYProgress, [0, 1], [40, -40])
				},
				className: `${reverse ? "lg:order-1" : ""} relative aspect-[4/5] rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden ${a.glow}`,
				children: chapter.visual
			})]
		})]
	});
}
function ProgressTracker({ chapters }) {
	const { scrollYProgress } = useScroll();
	const width = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 20
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed top-16 inset-x-0 z-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			style: {
				scaleX: width,
				transformOrigin: "left"
			},
			className: "h-1 bg-growth"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "hidden md:flex justify-center mt-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-1.5 rounded-full bg-[#071126]/80 backdrop-blur px-3 py-2 border border-white/10",
				children: chapters.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `#ch-${c.num}`,
					className: "h-2 w-2 rounded-full bg-white/30 hover:bg-white transition-colors",
					title: `Chapter ${c.num}: ${c.title}`
				}, c.num))
			})
		})]
	});
}
function CareerMeter({ label = "Career Growth" }) {
	const { scrollYProgress } = useScroll();
	const pct = useTransform(scrollYProgress, [0, 1], [5, 100]);
	const [val, setVal] = (0, import_react.useState)(5);
	(0, import_react.useEffect)(() => pct.on("change", (v) => setVal(Math.round(v))), [pct]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed bottom-6 right-6 z-40 hidden md:block",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl bg-[#071126]/90 backdrop-blur border border-white/10 p-4 w-64 shadow-elevated",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between mb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] font-semibold tracking-wider uppercase text-white/60",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-sm font-display font-extrabold text-[#09B83E]",
					children: [val, "%"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-2 rounded-full bg-white/10 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					style: { width: `${val}%` },
					className: "h-full bg-growth"
				})
			})]
		})
	});
}
function FinalCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative py-32 px-6 overflow-hidden bg-[#071126]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 30
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: { once: true },
			className: "relative mx-auto max-w-5xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-[#19C7D8] mb-8",
					children: "Three Journeys · One Destination"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto w-full max-w-2xl h-64 mb-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						viewBox: "0 0 500 220",
						className: "absolute inset-0 w-full h-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
								id: "fg2",
								x1: "0",
								x2: "1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "0%",
										stopColor: "#1686F5"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "50%",
										stopColor: "#19C7D8"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "100%",
										stopColor: "#09B83E"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
								id: "fgfill",
								x1: "0",
								x2: "0",
								y1: "0",
								y2: "1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0%",
									stopColor: "#09B83E",
									stopOpacity: "0.3"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "100%",
									stopColor: "#09B83E",
									stopOpacity: "0"
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
								initial: { pathLength: 0 },
								whileInView: { pathLength: 1 },
								viewport: { once: true },
								transition: { duration: 2 },
								d: "M 20 190 Q 130 170 200 130 T 360 70 T 480 20",
								stroke: "url(#fg2)",
								strokeWidth: "5",
								fill: "none",
								strokeLinecap: "round"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
								initial: { opacity: 0 },
								whileInView: { opacity: 1 },
								viewport: { once: true },
								transition: { delay: 1.5 },
								d: "M 20 190 Q 130 170 200 130 T 360 70 T 480 20 L 480 210 L 20 210 Z",
								fill: "url(#fgfill)"
							})
						]
					}), [
						{
							left: "18%",
							top: "55%",
							color: "#1686F5",
							name: "Arjun",
							tag: "Fresher",
							delay: .6
						},
						{
							left: "45%",
							top: "32%",
							color: "#19C7D8",
							name: "Rahul",
							tag: "Experienced",
							delay: .9
						},
						{
							left: "76%",
							top: "8%",
							color: "#E94B8C",
							name: "Priya",
							tag: "Restart",
							delay: 1.2
						}
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							y: 40,
							opacity: 0
						},
						whileInView: {
							y: 0,
							opacity: 1
						},
						viewport: { once: true },
						transition: {
							delay: c.delay,
							type: "spring",
							stiffness: 180
						},
						className: "absolute -translate-x-1/2",
						style: {
							left: c.left,
							top: c.top
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-14 h-20 md:w-16 md:h-24",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								viewBox: "0 0 100 130",
								className: "w-full h-full",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
										x: "25",
										y: "75",
										width: "50",
										height: "55",
										rx: "10",
										fill: c.color
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
										x: "25",
										y: "75",
										width: "50",
										height: "8",
										fill: "rgba(0,0,0,0.15)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "50",
										cy: "45",
										r: "28",
										fill: "#F4C9A0"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M 22 40 Q 30 18 50 18 Q 70 18 78 40 Q 75 28 50 26 Q 25 28 22 40",
										fill: "#1a1a1a"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "40",
										cy: "45",
										r: "3",
										fill: "#1a1a1a"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "60",
										cy: "45",
										r: "3",
										fill: "#1a1a1a"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M 35 60 Q 50 75 65 60",
										stroke: "#1a1a1a",
										strokeWidth: "2.5",
										fill: "none",
										strokeLinecap: "round"
									})
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] font-display font-bold text-white",
								children: c.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[9px] uppercase tracking-widest text-white/50",
								children: c.tag
							})]
						})]
					}, c.name))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display font-extrabold text-5xl md:text-7xl text-white leading-[1.02] mb-4",
					children: [
						"Different Stories. ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-growth",
							children: "One Destination."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg text-white/70 max-w-2xl mx-auto mb-2",
					children: "Freshers. Working Professionals. Career Restart Candidates."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xl md:text-2xl font-display font-semibold text-white mb-10",
					children: "The right skill changes everything."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-3 justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							className: "rounded-full bg-brand px-7 py-4 font-display font-semibold text-white shadow-glow-blue hover:scale-105 transition",
							children: "Book Free Demo"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							className: "rounded-full bg-white/10 border border-white/20 px-7 py-4 font-display font-semibold text-white hover:bg-white/15 transition",
							children: "Talk To Career Advisor"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							className: "rounded-full bg-[#19C7D8] px-7 py-4 font-display font-semibold text-[#071126] shadow-glow-teal hover:scale-105 transition",
							children: "WhatsApp Us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							className: "rounded-full bg-growth px-7 py-4 font-display font-semibold text-white shadow-glow-green hover:scale-105 transition",
							children: "Apply Now"
						})
					]
				})
			]
		})]
	});
}
function JourneyExperience({ config }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#071126] text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavBar, { dark: true }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressTracker, { chapters: config.chapters }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareerMeter, { label: config.meterLabel }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[90vh] flex items-center px-6 pt-24 overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-hero" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-30" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .8 },
						className: "relative mx-auto max-w-5xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-7xl md:text-8xl mb-6",
								children: config.emoji
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-[#19C7D8] mb-6",
								children: config.accentLabel
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display font-black text-6xl md:text-8xl text-white leading-[0.95] mb-5",
								children: ["Meet ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-growth",
									children: config.character
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display font-bold text-2xl md:text-3xl text-white/90 mb-4",
								children: config.theme
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg text-white/60 max-w-2xl mx-auto mb-10",
								children: config.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								animate: { y: [
									0,
									12,
									0
								] },
								transition: {
									duration: 2,
									repeat: Infinity
								},
								className: "text-sm text-white/40 font-semibold tracking-widest uppercase",
								children: "Scroll to begin the story ↓"
							})
						]
					})
				]
			}),
			config.chapters.map((ch, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: `ch-${ch.num}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterPanel, {
					chapter: ch,
					index: i,
					total: config.chapters.length
				})
			}, ch.num)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-[#071126] text-center pb-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-semibold",
					children: "← Back to all journeys"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var Panel = ({ children, bg }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: `absolute inset-0 ${bg ?? ""}`,
	children
});
var Character = ({ mood = "neutral", color = "#1686F5" }) => {
	const mouth = {
		happy: "M 35 60 Q 50 75 65 60",
		neutral: "M 35 62 L 65 62",
		sad: "M 35 68 Q 50 55 65 68",
		confident: "M 35 60 Q 50 70 65 60"
	}[mood];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 130",
		className: "w-full h-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "25",
				y: "75",
				width: "50",
				height: "55",
				rx: "10",
				fill: color
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "25",
				y: "75",
				width: "50",
				height: "8",
				fill: "rgba(0,0,0,0.15)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "50",
				cy: "45",
				r: "28",
				fill: "#F4C9A0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M 22 40 Q 30 18 50 18 Q 70 18 78 40 Q 75 28 50 26 Q 25 28 22 40",
				fill: "#1a1a1a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "45",
				r: "3",
				fill: "#1a1a1a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "45",
				r: "3",
				fill: "#1a1a1a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: mouth,
				stroke: "#1a1a1a",
				strokeWidth: "2.5",
				fill: "none",
				strokeLinecap: "round"
			})
		]
	});
};
var SoftGrid = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "absolute inset-0 opacity-30",
	style: {
		backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
		backgroundSize: "30px 30px"
	}
});
var FresherVisuals = {
	graduation: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#1686F5]/20 to-[#0B1C9C]/40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 flex items-end justify-center pb-10 gap-4",
				children: [
					0,
					1,
					2
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						y: 50,
						opacity: 0
					},
					whileInView: {
						y: 0,
						opacity: 1
					},
					transition: { delay: i * .15 },
					className: "relative",
					style: {
						width: 80,
						height: 130,
						opacity: i === 1 ? 1 : .5
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Character, {
						mood: i === 1 ? "sad" : "happy",
						color: i === 1 ? "#1686F5" : "#19C7D8"
					}), i !== 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold bg-[#09B83E] text-white px-2 py-0.5 rounded",
						children: "OFFER!"
					})]
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-6 left-6 text-white/60 text-xs font-semibold tracking-widest uppercase",
				children: "🎓 Graduation Day"
			})
		]
	}),
	jobSearch: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-slate-900 to-[#0B1C9C]/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 p-8 flex flex-col gap-2 justify-center",
			children: [
				"LinkedIn",
				"Naukri",
				"Indeed",
				"Monster"
			].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					x: -100,
					opacity: 0
				},
				whileInView: {
					x: 0,
					opacity: 1
				},
				transition: { delay: i * .1 },
				className: "bg-white/10 border border-white/20 rounded-lg p-3 flex justify-between items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-sm font-semibold",
					children: [s, " Application"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-red-400 font-bold",
					children: "REJECTED"
				})]
			}, s))
		})]
	}),
	monthsPassing: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#071126] to-[#0B1C9C]/30",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					animate: { rotate: 360 },
					transition: {
						duration: 8,
						repeat: Infinity,
						ease: "linear"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						width: "200",
						height: "200",
						viewBox: "0 0 200 200",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "100",
							cy: "100",
							r: "80",
							fill: "none",
							stroke: "white",
							strokeOpacity: "0.2",
							strokeWidth: "2"
						}), Array.from({ length: 12 }).map((_, i) => {
							const angle = i / 12 * Math.PI * 2;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
								x: 100 + Math.cos(angle) * 70,
								y: 100 + Math.sin(angle) * 70,
								fill: "white",
								fillOpacity: "0.6",
								fontSize: "12",
								textAnchor: "middle",
								children: [
									"JAN",
									"FEB",
									"MAR",
									"APR",
									"MAY",
									"JUN",
									"JUL",
									"AUG",
									"SEP",
									"OCT",
									"NOV",
									"DEC"
								][i]
							}, i);
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-6 left-6 right-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-widest text-white/50 mb-2",
					children: "Confidence"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-2 bg-white/10 rounded-full overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { width: "80%" },
						whileInView: { width: "20%" },
						transition: { duration: 1.5 },
						className: "h-full bg-red-400"
					})
				})]
			})
		]
	}),
	discoverSap: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#1686F5] to-[#0B1C9C]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					scale: .5,
					opacity: 0
				},
				whileInView: {
					scale: 1,
					opacity: 1
				},
				transition: { type: "spring" },
				className: "absolute inset-0 flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[120px] font-display font-black text-white drop-shadow-[0_0_40px_rgba(25,199,216,0.8)]",
					children: "SAP"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-2",
				children: [["Entry", "₹4-8L"], ["Senior", "₹15-25L"]].map(([l, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white/10 backdrop-blur border border-white/20 rounded-lg p-3 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-white/60",
						children: l
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display font-bold text-[#19C7D8]",
						children: v
					})]
				}, l))
			})
		]
	}),
	searchInstitute: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-slate-800 to-[#071126]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 p-6 flex flex-col gap-3 justify-center",
			children: [[
				1,
				2,
				3
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					x: 0,
					opacity: 1
				},
				whileInView: {
					x: 300,
					opacity: 0
				},
				transition: { delay: i * .2 },
				className: "bg-white/5 border border-white/10 rounded p-3 text-white/50 text-sm",
				children: ["Generic Institute ", i]
			}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { scale: .9 },
				whileInView: { scale: 1.05 },
				transition: {
					delay: .8,
					type: "spring"
				},
				className: "bg-brand border-2 border-[#19C7D8] rounded-xl p-4 shadow-glow-teal",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display font-extrabold text-white",
					children: "Next-Gen ERP Solutions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-white/80 mt-1",
					children: "⭐ The right one. ⭐"
				})]
			})]
		})]
	}),
	joinNextgen: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#1686F5]/30 to-[#19C7D8]/20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3 gap-2 p-8 w-full",
					children: Array.from({ length: 9 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							scale: .5
						},
						whileInView: {
							opacity: 1,
							scale: 1
						},
						transition: { delay: i * .05 },
						className: "aspect-square bg-white/10 border border-white/20 rounded p-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 w-full bg-[#19C7D8] mb-1 rounded" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 w-2/3 bg-white/40 rounded" })]
					}, i))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-6 left-6 text-white text-sm font-display font-bold",
				children: "🚪 Welcome aboard"
			})
		]
	}),
	learningJourney: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#0B1C9C]/40 to-[#19C7D8]/20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 flex items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3 w-3/4",
				children: [
					"MM Module",
					"SD Module",
					"FICO Module",
					"ABAP",
					"S/4 HANA"
				].map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						x: -50,
						opacity: 0
					},
					whileInView: {
						x: 0,
						opacity: 1
					},
					transition: { delay: i * .15 },
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-8 w-8 rounded-full bg-growth flex items-center justify-center text-xs font-bold text-white",
							children: "✓"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-1 bg-white/10 rounded-full h-3 overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: { width: 0 },
								whileInView: { width: `${85 + i * 3}%` },
								transition: {
									delay: i * .15 + .3,
									duration: .8
								},
								className: "h-full bg-growth"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold w-20",
							children: m
						})
					]
				}, m))
			})
		})]
	}),
	projects: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#19C7D8]/20 to-[#09B83E]/15",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 300 400",
			className: "absolute inset-0 w-full h-full p-8",
			children: [[
				[60, 80],
				[200, 80],
				[60, 200],
				[200, 200],
				[130, 320]
			].map(([x, y], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.g, {
				initial: {
					opacity: 0,
					scale: .5
				},
				whileInView: {
					opacity: 1,
					scale: 1
				},
				transition: { delay: i * .15 },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: x - 40,
					y: y - 25,
					width: "80",
					height: "50",
					rx: "8",
					fill: "white",
					fillOpacity: "0.1",
					stroke: "#19C7D8",
					strokeWidth: "2"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
					x,
					y: y + 4,
					fill: "white",
					fontSize: "11",
					textAnchor: "middle",
					fontWeight: "bold",
					children: ["Project ", i + 1]
				})]
			}, i)), [
				[
					60,
					105,
					60,
					175
				],
				[
					200,
					105,
					200,
					175
				],
				[
					100,
					200,
					160,
					200
				],
				[
					100,
					225,
					130,
					295
				],
				[
					200,
					225,
					160,
					295
				]
			].map(([x1, y1, x2, y2], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.line, {
				x1,
				y1,
				x2,
				y2,
				stroke: "#19C7D8",
				strokeWidth: "2",
				initial: { pathLength: 0 },
				whileInView: { pathLength: 1 },
				transition: { delay: .8 + i * .1 }
			}, i))]
		})]
	}),
	interview: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#1686F5]/30 to-[#09B83E]/20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 p-8 flex flex-col justify-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white/10 rounded-lg p-4 border border-white/20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-white/60 mb-2",
					children: "RESUME"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-1.5",
					children: [
						80,
						60,
						90,
						70
					].map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { width: 0 },
						whileInView: { width: `${w}%` },
						transition: { delay: i * .1 },
						className: "h-2 bg-white/40 rounded"
					}, i))
				})]
			}), [
				"Technical Round",
				"HR Round",
				"Final"
			].map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					x: -30,
					opacity: 0
				},
				whileInView: {
					x: 0,
					opacity: 1
				},
				transition: { delay: .5 + i * .2 },
				className: "flex items-center gap-3 bg-white/5 rounded-lg p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-8 w-8 rounded-full bg-growth flex items-center justify-center text-white font-bold",
						children: "✓"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: r
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-auto text-[#09B83E] font-bold text-xs",
						children: "PASSED"
					})
				]
			}, r))]
		})]
	}),
	offerLetter: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#09B83E]/30 to-[#19C7D8]/20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					scale: 0,
					rotate: -10
				},
				whileInView: {
					scale: 1,
					rotate: -2
				},
				transition: {
					type: "spring",
					stiffness: 200
				},
				className: "absolute inset-0 flex items-center justify-center p-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white text-[#071126] rounded-lg p-6 w-full shadow-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-bold tracking-widest text-[#1686F5] mb-2",
							children: "OFFER LETTER"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-extrabold text-xl mb-1",
							children: "Congratulations, Arjun!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-slate-600 mb-3",
							children: "SAP Consultant · MNC Corp"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-black text-3xl text-[#09B83E]",
							children: "₹6.5 LPA"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] text-slate-500 mt-2",
							children: "Joining: Immediate"
						})
					]
				})
			}),
			Array.from({ length: 15 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					y: -20,
					opacity: 0
				},
				whileInView: {
					y: 400,
					opacity: [
						0,
						1,
						0
					]
				},
				transition: {
					duration: 2,
					delay: i * .1,
					repeat: Infinity
				},
				className: "absolute w-2 h-2 rounded-sm",
				style: {
					left: `${i * 37 % 100}%`,
					background: [
						"#1686F5",
						"#19C7D8",
						"#09B83E"
					][i % 3]
				}
			}, i))
		]
	}),
	firstDay: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#0B1C9C]/50 to-[#1686F5]/30",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 bottom-0 h-2/3 flex items-end justify-center gap-2 p-6",
				children: [
					120,
					160,
					140,
					180,
					150
				].map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { height: 0 },
					whileInView: { height: h },
					transition: { delay: i * .1 },
					className: "w-12 bg-white/10 border border-white/20 rounded-t",
					style: { height: h },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-0.5 p-1",
						children: Array.from({ length: Math.floor(h / 15) }).map((_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aspect-square bg-[#19C7D8]/40 rounded-sm" }, j))
					})
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-6 left-1/2 -translate-x-1/2 w-16 h-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Character, {
					mood: "confident",
					color: "#0B1C9C"
				})
			})
		]
	}),
	careerGrowth: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#1686F5]/20 to-[#09B83E]/30",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 300 200",
			className: "absolute inset-0 w-full h-full p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.polyline, {
					initial: { pathLength: 0 },
					whileInView: { pathLength: 1 },
					transition: { duration: 2 },
					points: "20,170 70,140 130,100 200,60 280,20",
					stroke: "url(#grad)",
					strokeWidth: "4",
					fill: "none",
					strokeLinecap: "round"
				}),
				[
					[
						20,
						170,
						"Consultant"
					],
					[
						130,
						100,
						"Senior"
					],
					[
						200,
						60,
						"Lead"
					],
					[
						280,
						20,
						"Manager"
					]
				].map(([x, y, l], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.g, {
					initial: { opacity: 0 },
					whileInView: { opacity: 1 },
					transition: { delay: .5 + i * .3 },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: x,
						cy: y,
						r: "6",
						fill: "#09B83E"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x,
						y: y - 12,
						fill: "white",
						fontSize: "10",
						textAnchor: "middle",
						fontWeight: "bold",
						children: l
					})]
				}, i)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "grad",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "#1686F5"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "#09B83E"
					})]
				}) })
			]
		})]
	}),
	success: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#09B83E]/30 via-[#19C7D8]/20 to-[#1686F5]/30",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 grid grid-cols-2 gap-3 p-6 content-center",
			children: [
				["🏠", "Dream Home"],
				["🚗", "New Car"],
				["✈️", "Travel"],
				["👨‍👩‍👧", "Family"]
			].map(([e, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					scale: 0,
					rotate: -10
				},
				whileInView: {
					scale: 1,
					rotate: 0
				},
				transition: { type: "spring" },
				className: "bg-white/10 border border-white/20 backdrop-blur rounded-xl p-4 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-4xl mb-2",
					children: e
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-semibold",
					children: l
				})]
			}, l))
		})]
	}),
	friendsJobs: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#1686F5]/20 to-[#071126]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 flex items-end justify-center pb-10 gap-3 px-4",
				children: [
					0,
					1,
					2,
					3
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						y: 60,
						opacity: 0
					},
					whileInView: {
						y: 0,
						opacity: 1
					},
					transition: { delay: i * .15 },
					className: "relative",
					style: {
						width: 64,
						height: 110,
						opacity: i === 3 ? .45 : 1
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Character, {
						mood: i === 3 ? "sad" : "happy",
						color: i === 3 ? "#1686F5" : [
							"#09B83E",
							"#19C7D8",
							"#1686F5"
						][i]
					}), i !== 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-bold bg-[#09B83E] text-white px-2 py-0.5 rounded whitespace-nowrap",
						children: "HIRED"
					})]
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-6 left-6 right-6 flex flex-col gap-1.5",
				children: [
					"Amit · TCS",
					"Neha · Infosys",
					"Rohan · Wipro"
				].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						x: -20,
						opacity: 0
					},
					whileInView: {
						x: 0,
						opacity: 1
					},
					transition: { delay: i * .2 },
					className: "bg-white/10 border border-white/20 rounded px-2 py-1 text-[10px] flex justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#09B83E] font-bold",
						children: "JOINED"
					})]
				}, t))
			})
		]
	}),
	sisterSuggest: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#19C7D8]/20 to-[#1686F5]/20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 flex items-center justify-center gap-3 p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-20 h-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Character, {
						mood: "sad",
						color: "#1686F5"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-20 h-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Character, {
						mood: "happy",
						color: "#E94B8C"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					scale: 0,
					rotate: -5
				},
				whileInView: {
					scale: 1,
					rotate: -2
				},
				transition: {
					type: "spring",
					delay: .4
				},
				className: "absolute top-8 right-6 comic-bubble text-xs max-w-[180px]",
				children: "Bhaiya, have you heard about SAP? My friend earns ₹12L doing it!"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-4 left-6 text-[10px] uppercase tracking-widest text-white/50",
				children: "👫 A sister's advice"
			})
		]
	}),
	researchSearch: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#0B1C9C]/40 to-[#1686F5]/20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 p-6 flex flex-col justify-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: -10
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				className: "bg-white rounded-full px-4 py-2 flex items-center gap-2 mb-4 shadow-lg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[#1686F5] text-sm",
					children: "🔍"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[#071126] text-sm font-semibold",
					children: "what is SAP and how to learn it"
				})]
			}), [
				"SAP — World's #1 ERP system",
				"SAP Consultant Salary in India",
				"Top SAP Training Institutes",
				"SAP Jobs · 45,000+ openings"
			].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					x: -30,
					opacity: 0
				},
				whileInView: {
					x: 0,
					opacity: 1
				},
				transition: { delay: i * .15 + .3 },
				className: "mb-2 border-l-2 border-[#19C7D8] pl-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] text-[#19C7D8]",
					children: "www.search.com"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-semibold",
					children: t
				})]
			}, t))]
		})]
	}),
	mockInterview: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#1686F5]/20 to-[#09B83E]/20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 p-6 flex items-center justify-center gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-16 h-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Character, {
						mood: "confident",
						color: "#1686F5"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-2 flex-1 max-w-[180px]",
					children: [
						"Tell me about SAP MM",
						"Order to Cash flow?",
						"Real project challenge?"
					].map((q, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							x: 20
						},
						whileInView: {
							opacity: 1,
							x: 0
						},
						transition: { delay: i * .3 },
						className: "bg-white/10 border border-white/20 rounded-lg p-2 text-xs",
						children: q
					}, q))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-4 left-6 right-6 flex justify-between text-[10px] uppercase tracking-widest",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-white/50",
					children: "Mock Interview Round 5"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[#09B83E] font-bold",
					children: "CONFIDENCE 95%"
				})]
			})
		]
	}),
	applyingAgain: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#19C7D8]/20 to-[#09B83E]/25",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 p-6 flex flex-col justify-center gap-2",
			children: [
				"Accenture · Applied",
				"Capgemini · Shortlisted",
				"TCS · Interview Scheduled",
				"Infosys · Shortlisted"
			].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					x: -30,
					opacity: 0
				},
				whileInView: {
					x: 0,
					opacity: 1
				},
				transition: { delay: i * .15 },
				className: "bg-white/10 border border-[#19C7D8]/40 rounded-lg p-3 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-semibold",
					children: t.split(" · ")[0]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] text-[#09B83E] font-bold",
					children: t.split(" · ")[1]
				})]
			}, t))
		})]
	})
};
var ExperiencedVisuals = {
	currentJob: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-slate-800 to-[#071126]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 p-6 flex flex-col justify-center gap-3",
			children: [[
				"📧 240 unread",
				"📞 12 missed calls",
				"📊 5 reports due",
				"⏰ Working till 11 PM"
			].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					x: -30,
					opacity: 0
				},
				whileInView: {
					x: 0,
					opacity: 1
				},
				transition: { delay: i * .15 },
				className: "bg-white/10 border-l-4 border-red-400 rounded p-3 text-sm",
				children: t
			}, t)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-white/50 uppercase tracking-widest",
					children: "Salary"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display font-black text-2xl text-white/70 line-through",
					children: "₹3.5 LPA"
				})]
			})]
		})]
	}),
	comparison: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-red-900/30 to-[#071126]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 p-6 flex flex-col justify-center gap-2",
			children: [[
				"Amit got promoted to Manager",
				"Priya joined Google · ₹22 LPA",
				"Rohit moved to Singapore"
			].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					y: 20,
					opacity: 0
				},
				whileInView: {
					y: 0,
					opacity: 1
				},
				transition: { delay: i * .2 },
				className: "bg-white/10 rounded-lg p-3 flex items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 w-10 rounded-full bg-[#1686F5]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs",
						children: t
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ml-auto text-[10px] text-white/40",
						children: "2h"
					})
				]
			}, t)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center text-xs text-red-300 mt-3 font-semibold",
				children: "Feeling stuck..."
			})]
		})]
	}),
	familyRec: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#19C7D8]/20 to-[#1686F5]/20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 flex items-center justify-center gap-4 p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-20 h-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Character, {
					mood: "happy",
					color: "#09B83E"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "comic-bubble text-sm max-w-[180px]",
				children: "You should explore SAP. It changed my career!"
			})]
		})]
	}),
	research: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#0B1C9C]/40 to-[#1686F5]/20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 300 200",
				className: "absolute inset-0 w-full h-full p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
					initial: { pathLength: 0 },
					whileInView: { pathLength: 1 },
					transition: { duration: 2 },
					d: "M 20 170 Q 100 140 150 100 T 280 20",
					stroke: "#09B83E",
					strokeWidth: "4",
					fill: "none"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "150",
					y: "195",
					fill: "white",
					fillOpacity: "0.6",
					fontSize: "10",
					textAnchor: "middle",
					children: "SAP Job Demand 2020 → 2026"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-6 left-6 right-6 grid grid-cols-3 gap-2",
				children: [
					["+87%", "Demand"],
					["3.2x", "Salary"],
					["#1", "Skill"]
				].map(([v, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white/10 rounded p-2 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display font-bold text-[#19C7D8] text-lg",
						children: v
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] text-white/60",
						children: l
					})]
				}, l))
			})
		]
	}),
	findNextgen: FresherVisuals.searchInstitute,
	training: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#1686F5]/30 to-[#19C7D8]/20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 p-6 flex flex-col justify-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white/10 rounded p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-white/60 mb-1",
					children: "Saturday & Sunday"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display font-bold",
					children: "Weekend Classes"
				})]
			}), [
				"Assignment 1",
				"Assignment 2",
				"Live Project",
				"Certification"
			].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					x: -20,
					opacity: 0
				},
				whileInView: {
					x: 0,
					opacity: 1
				},
				transition: { delay: i * .15 },
				className: "flex items-center gap-3 bg-white/5 rounded p-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-6 w-6 rounded-full bg-growth flex items-center justify-center text-xs",
					children: "✓"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm",
					children: t
				})]
			}, t))]
		})]
	}),
	interviewCalls: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#0B1C9C]/40 to-[#09B83E]/30",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 p-6 flex flex-col justify-center gap-2",
			children: [
				"Accenture · SAP Consultant",
				"TCS · Senior Consultant",
				"Infosys · Lead SAP",
				"Deloitte · Manager"
			].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					x: 300,
					opacity: 0
				},
				whileInView: {
					x: 0,
					opacity: 1
				},
				transition: {
					delay: i * .2,
					type: "spring"
				},
				className: "bg-white/10 border border-[#19C7D8]/40 rounded-lg p-3 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xl",
					children: "📞"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-semibold",
					children: t
				})]
			}, t))
		})]
	}),
	newJob: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#09B83E]/30 to-[#19C7D8]/20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 p-6 flex flex-col justify-center",
			children: [
				[
					"₹3.5L",
					"Before",
					"bg-white/20"
				],
				[
					"₹8L",
					"Year 1",
					"bg-[#1686F5]"
				],
				[
					"₹12L",
					"Year 2",
					"bg-[#19C7D8]"
				],
				[
					"₹18L",
					"Year 3",
					"bg-[#09B83E]"
				]
			].map(([v, l, c], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { width: 0 },
				whileInView: { width: `${30 + i * 20}%` },
				transition: {
					delay: i * .2,
					duration: .8
				},
				className: `${c} h-10 rounded-r-full mb-2 flex items-center px-3 text-white font-display font-bold text-sm`,
				children: [
					v,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "ml-2 text-[10px] opacity-80",
						children: ["· ", l]
					})
				]
			}, l))
		})]
	}),
	success: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#1686F5]/30 to-[#09B83E]/30",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 grid grid-cols-2 gap-3 p-6 content-center",
			children: [
				["👔", "Leader"],
				["🌍", "Global"],
				["💼", "Team of 12"],
				["📈", "5x growth"]
			].map(([e, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { scale: 0 },
				whileInView: { scale: 1 },
				transition: { type: "spring" },
				className: "bg-white/10 border border-white/20 rounded-xl p-4 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-4xl mb-2",
					children: e
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-semibold",
					children: l
				})]
			}, l))
		})]
	}),
	workingHarder: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-red-900/30 to-[#071126]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 p-6 flex flex-col justify-center gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-center text-[10px] uppercase tracking-widest text-white/50",
					children: "3 Years Later"
				}),
				[
					["₹3.5L", "Year 1"],
					["₹3.7L", "Year 2"],
					["₹3.9L", "Year 3"]
				].map(([v, l], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						x: -30,
						opacity: 0
					},
					whileInView: {
						x: 0,
						opacity: 1
					},
					transition: { delay: i * .2 },
					className: "bg-white/10 rounded-lg p-3 flex items-center justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs",
							children: l
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display font-bold text-white/70",
							children: v
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-orange-300",
							children: "+5%"
						})
					]
				}, l)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-center text-xs text-red-300 mt-1",
					children: "More hours. Same paycheck."
				})
			]
		})]
	}),
	trainingPath: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#1686F5]/20 to-[#19C7D8]/20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 grid grid-cols-2 gap-3 p-6 content-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					x: -20,
					opacity: 0
				},
				whileInView: {
					x: 0,
					opacity: 1
				},
				className: "bg-white/5 border border-white/10 rounded-xl p-4 opacity-60",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase tracking-widest text-white/40 mb-2",
						children: "Regular"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-2xl mb-2",
						children: "👥"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs",
						children: "Batch of 60"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-white/50",
						children: "Fixed timing"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					x: 20,
					opacity: 0
				},
				whileInView: {
					x: 0,
					opacity: 1
				},
				transition: { delay: .2 },
				className: "bg-brand border-2 border-[#19C7D8] rounded-xl p-4 shadow-glow-teal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase tracking-widest text-[#19C7D8] mb-2",
						children: "Personal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-2xl mb-2",
						children: "🎯"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-bold",
						children: "1-on-1 Mentor"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-white/80",
						children: "6 AM – 10 PM"
					})
				]
			})]
		})]
	}),
	learningAfterWork: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#0B1C9C]/50 to-[#071126]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							animate: { opacity: [
								.4,
								1,
								.4
							] },
							transition: {
								duration: 2,
								repeat: Infinity
							},
							className: "text-5xl mb-3",
							children: "💻"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-bold text-lg",
							children: "10 PM – 1 AM"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-white/60 mt-1",
							children: "Live class after office"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-6 left-6 right-6 flex justify-between text-[10px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-white/10 rounded px-2 py-1",
					children: "🕕 6 AM Support"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-white/10 rounded px-2 py-1",
					children: "🕙 10 PM Support"
				})]
			})
		]
	}),
	projects: FresherVisuals.projects,
	mockInterview: FresherVisuals.mockInterview,
	placementProgram: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#09B83E]/30 to-[#1686F5]/20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 p-6 flex flex-col justify-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "inline-block bg-[#09B83E] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full",
					children: "Placement Guaranteed"
				})
			}), [
				"✓ Dedicated placement cell",
				"✓ 200+ hiring partners",
				"✓ Unlimited interview calls",
				"✓ Until you're placed"
			].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					x: -20,
					opacity: 0
				},
				whileInView: {
					x: 0,
					opacity: 1
				},
				transition: { delay: i * .15 },
				className: "bg-white/10 rounded p-2 text-xs",
				children: t
			}, t))]
		})]
	}),
	industryReady: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#19C7D8]/20 to-[#09B83E]/20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 p-6 flex gap-3 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						x: -30,
						opacity: 0
					},
					whileInView: {
						x: 0,
						opacity: 1
					},
					className: "flex-1 bg-white/5 border border-white/10 rounded-lg p-3 opacity-50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[9px] uppercase text-white/40 mb-2",
						children: "Before"
					}), [
						60,
						40,
						70
					].map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-1.5 bg-white/30 rounded mb-1.5",
						style: { width: `${w}%` }
					}, i))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						x: 30,
						opacity: 0
					},
					whileInView: {
						x: 0,
						opacity: 1
					},
					transition: { delay: .3 },
					className: "flex-1 bg-white rounded-lg p-3 shadow-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[9px] uppercase text-[#1686F5] font-bold mb-2",
						children: "After · SAP Consultant"
					}), [
						90,
						85,
						95,
						80,
						90
					].map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-1.5 bg-[#1686F5] rounded mb-1.5",
						style: { width: `${w}%` }
					}, i))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-4 left-0 right-0 text-center text-[10px] uppercase tracking-widest text-white/60",
				children: "Resume Transformation"
			})
		]
	}),
	applying: FresherVisuals.applyingAgain,
	breakthrough: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#09B83E]/40 to-[#19C7D8]/20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				scale: 0,
				rotate: -8
			},
			whileInView: {
				scale: 1,
				rotate: -2
			},
			transition: {
				type: "spring",
				stiffness: 200
			},
			className: "absolute inset-0 flex items-center justify-center p-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white text-[#071126] rounded-lg p-6 w-full shadow-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] font-bold tracking-widest text-[#1686F5] mb-2",
						children: "OFFER LETTER"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display font-extrabold text-xl mb-1",
						children: "Welcome, Rahul!"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-slate-600 mb-3",
						children: "Senior SAP Consultant · Global MNC"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display font-black text-3xl text-[#09B83E]",
						children: "₹14 LPA"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] text-slate-500 mt-2",
						children: "4x your previous salary"
					})
				]
			})
		})]
	}),
	international: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#1686F5]/30 to-[#19C7D8]/30",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					animate: { rotate: 360 },
					transition: {
						duration: 30,
						repeat: Infinity,
						ease: "linear"
					},
					className: "text-7xl",
					children: "🌍"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 p-6 flex flex-col justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3 gap-2",
					children: [
						"🇺🇸 USA",
						"🇬🇧 UK",
						"🇩🇪 Germany"
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-white/10 backdrop-blur rounded px-2 py-1 text-[10px] text-center",
						children: t
					}, t))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3 gap-2",
					children: [
						"🇸🇬 SG",
						"🇦🇺 AUS",
						"🇦🇪 UAE"
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-white/10 backdrop-blur rounded px-2 py-1 text-[10px] text-center",
						children: t
					}, t))
				})]
			})
		]
	})
};
var CareerGapVisuals = {
	afterBreak: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-slate-700/30 to-[#071126]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { rotateY: 0 },
					whileInView: { rotateY: 360 },
					transition: { duration: 3 },
					className: "grid grid-cols-3 gap-1",
					children: Array.from({ length: 9 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-12 h-16 bg-white/5 border border-white/10 rounded p-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[8px] text-white/40 text-center",
							children: 2018 + i
						})
					}, i))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-6 left-6 right-6 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-widest text-white/50 mb-2",
					children: "Confidence"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-2 bg-white/10 rounded-full overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { width: "70%" },
						whileInView: { width: "15%" },
						transition: { duration: 2 },
						className: "h-full bg-orange-400"
					})
				})]
			})
		]
	}),
	searchSkills: FresherVisuals.jobSearch,
	discover: FresherVisuals.discoverSap,
	findNextgen: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#19C7D8]/20 to-[#1686F5]/20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 flex items-center justify-center gap-3 p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-20 h-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Character, {
						mood: "happy",
						color: "#1686F5"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "comic-bubble text-sm max-w-[180px]",
					children: "We'll build your roadmap together."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-6 left-6 right-6 bg-white/10 rounded-lg p-3 text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display font-bold mb-1",
					children: "Career Roadmap"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-2",
					children: [
						"Learn",
						"Practice",
						"Place"
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1 h-1.5 bg-growth rounded-full" }, s))
				})]
			})
		]
	}),
	learning: FresherVisuals.learningJourney,
	prep: FresherVisuals.interview,
	firstJob: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#09B83E]/30 to-[#19C7D8]/20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				scale: 0,
				rotate: -5
			},
			whileInView: {
				scale: 1,
				rotate: -2
			},
			transition: { type: "spring" },
			className: "absolute inset-0 flex items-center justify-center p-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white text-[#071126] rounded-lg p-6 w-full shadow-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] font-bold tracking-widest text-[#1686F5] mb-2",
						children: "WELCOME BACK"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display font-extrabold text-xl mb-1",
						children: "Congratulations, Priya!"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-slate-600 mb-3",
						children: "SAP Functional · Leading MNC"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display font-black text-3xl text-[#09B83E]",
						children: "A New Beginning"
					})
				]
			})
		})]
	}),
	newBeginning: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#1686F5]/20 to-[#0B1C9C]/30",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 bottom-0 h-2/3 flex items-end justify-center p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-20 h-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Character, {
						mood: "confident",
						color: "#0B1C9C"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-6 left-6 right-6 text-center text-white/70 text-xs font-display font-semibold tracking-widest uppercase",
				children: "Confident · Professional · Ready"
			})
		]
	}),
	success: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#19C7D8]/20 to-[#09B83E]/30",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 grid grid-cols-2 gap-3 p-6 content-center",
			children: [
				["💪", "Independent"],
				["📈", "Growing"],
				["👨‍👩‍👧", "Happy Family"],
				["⭐", "Respected"]
			].map(([e, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { scale: 0 },
				whileInView: { scale: 1 },
				transition: { type: "spring" },
				className: "bg-white/10 border border-white/20 rounded-xl p-4 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-4xl mb-2",
					children: e
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-semibold",
					children: l
				})]
			}, l))
		})]
	}),
	marriage: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#E94B8C]/25 to-[#1686F5]/25",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 flex items-end justify-center pb-12 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-20 h-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Character, {
						mood: "happy",
						color: "#1686F5"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-20 h-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Character, {
						mood: "happy",
						color: "#E94B8C"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: { y: [
					0,
					-10,
					0
				] },
				transition: {
					duration: 2,
					repeat: Infinity
				},
				className: "absolute top-8 left-1/2 -translate-x-1/2 text-4xl",
				children: "💍"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-6 left-6 text-[10px] uppercase tracking-widest text-white/60",
				children: "A New Chapter"
			})
		]
	}),
	motherhood: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#19C7D8]/20 to-[#E94B8C]/20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 flex items-end justify-center pb-12 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-20 h-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Character, {
						mood: "happy",
						color: "#E94B8C"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { scale: 0 },
					whileInView: { scale: 1 },
					transition: {
						type: "spring",
						delay: .3
					},
					className: "w-12 h-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Character, {
						mood: "happy",
						color: "#19C7D8"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-6 left-6 right-6 grid grid-cols-3 gap-2",
				children: [
					"🍼 Care",
					"🏠 Home",
					"👶 Love"
				].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-white/10 rounded px-2 py-1 text-[10px] text-center",
					children: t
				}, t))
			})
		]
	}),
	selfDoubt: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-slate-700/40 to-[#071126]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-24 h-36",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Character, {
						mood: "sad",
						color: "#E94B8C"
					})
				})
			}),
			[
				"Am I too late?",
				"Can I still learn?",
				"Will anyone hire me?"
			].map((q, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					scale: .5
				},
				whileInView: {
					opacity: 1,
					scale: 1
				},
				transition: { delay: i * .4 },
				className: "absolute comic-bubble text-xs",
				style: {
					top: `${15 + i * 25}%`,
					left: i % 2 ? "60%" : "8%",
					maxWidth: 140
				},
				children: q
			}, q))
		]
	}),
	decideRestart: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#1686F5]/30 to-[#09B83E]/20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					scale: 0,
					rotate: -20
				},
				whileInView: {
					scale: 1,
					rotate: 0
				},
				transition: { type: "spring" },
				className: "absolute inset-0 flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-7xl",
					children: "💪"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-8 left-6 right-6 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "comic-bubble inline-block text-sm",
					children: "I'm restarting. For me. For my family."
				})
			})
		]
	}),
	learningFamily: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#0B1C9C]/40 to-[#19C7D8]/20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							animate: { opacity: [
								.5,
								1,
								.5
							] },
							transition: {
								duration: 2,
								repeat: Infinity
							},
							className: "text-5xl mb-2",
							children: "🌙"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-bold",
							children: "10 PM – 1 AM"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-white/60",
							children: "After children sleep"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-6 left-6 right-6 space-y-1.5",
				children: [
					"MM Module · ✓",
					"FICO Basics · ✓",
					"S/4 HANA · in progress"
				].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						x: -20,
						opacity: 0
					},
					whileInView: {
						x: 0,
						opacity: 1
					},
					transition: { delay: i * .2 },
					className: "bg-white/10 rounded px-2 py-1 text-[10px]",
					children: t
				}, t))
			})
		]
	}),
	projects: FresherVisuals.projects,
	mockPlace: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#19C7D8]/20 to-[#09B83E]/25",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 p-6 flex flex-col justify-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center text-[10px] uppercase tracking-widest text-[#09B83E] font-bold mb-2",
				children: "Placement Program"
			}), [
				"Mock Interview 1 · ✓",
				"Mock Interview 2 · ✓",
				"Resume Polished · ✓",
				"Profile Shortlisted · ✓"
			].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					x: -30,
					opacity: 0
				},
				whileInView: {
					x: 0,
					opacity: 1
				},
				transition: { delay: i * .15 },
				className: "bg-white/10 rounded p-2 text-xs",
				children: t
			}, t))]
		})]
	}),
	applyAgain: FresherVisuals.applyingAgain,
	balancing: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		bg: "bg-gradient-to-br from-[#1686F5]/25 to-[#E94B8C]/25",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftGrid, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 grid grid-cols-2 gap-3 p-6 content-center",
			children: [
				["💼", "Career"],
				["👨‍👩‍👧", "Family"],
				["📈", "Growth"],
				["❤️", "Balance"]
			].map(([e, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					scale: 0,
					rotate: -10
				},
				whileInView: {
					scale: 1,
					rotate: 0
				},
				transition: { type: "spring" },
				className: "bg-white/10 border border-white/20 rounded-xl p-4 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-3xl mb-1",
					children: e
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] font-semibold",
					children: l
				})]
			}, l))
		})]
	})
};
//#endregion
export { JourneyExperience as i, ExperiencedVisuals as n, FresherVisuals as r, CareerGapVisuals as t };
