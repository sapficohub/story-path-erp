import { o as __toESM } from "../_runtime.mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-LstzLPWu.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LeadForm-CJs2UsGV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var leadSchema = objectType({
	name: stringType().trim().min(1).max(100),
	phone: stringType().trim().min(7).max(20),
	email: stringType().trim().email().max(254),
	message: stringType().trim().max(2e3).optional(),
	qualification: stringType().trim().max(100).optional(),
	status: stringType().trim().max(100).optional(),
	module: stringType().trim().max(100).optional()
});
var submitLead = createServerFn({ method: "POST" }).validator(leadSchema).handler(createSsrRpc("ad925a28d9f3b5aa94ca8b2b92fb4c554ed45a62cbb1fb3e4b62e10d6a1f0695"));
function LeadForm({ title = "Book a Free Demo", subtitle = "A career advisor will call you within 1 working hour.", fields, cta = "Book Free Demo" }) {
	const defaultFields = fields ?? [
		{
			name: "name",
			label: "Full Name",
			required: true,
			placeholder: "Your name"
		},
		{
			name: "phone",
			label: "Phone",
			type: "tel",
			required: true,
			placeholder: "+91"
		},
		{
			name: "email",
			label: "Email",
			type: "email",
			required: true,
			placeholder: "you@email.com"
		},
		{
			name: "qualification",
			label: "Qualification",
			placeholder: "B.Tech, MBA, B.Com…"
		},
		{
			name: "status",
			label: "Current Status",
			options: [
				"Fresher",
				"Experienced",
				"Career Gap"
			]
		},
		{
			name: "module",
			label: "Preferred SAP Module",
			options: [
				"SAP FICO",
				"SAP MM",
				"SAP SD",
				"SAP ABAP",
				"SAP HCM",
				"SuccessFactors",
				"Not sure yet"
			]
		}
	];
	const [loading, setLoading] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: async (e) => {
			e.preventDefault();
			const form = e.currentTarget;
			setLoading(true);
			try {
				const values = Object.fromEntries(new FormData(form).entries());
				await submitLead({ data: leadSchema.parse(values) });
				toast.success("Thank you! A career advisor will call you shortly.");
				form.reset();
			} catch (error) {
				console.error(error);
				toast.error("We couldn't send your details. Please try again or call us.");
			} finally {
				setLoading(false);
			}
		},
		className: "rounded-2xl border border-border bg-card p-6 shadow-card md:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-2xl font-extrabold text-foreground",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: subtitle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid gap-4 sm:grid-cols-2",
				children: defaultFields.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: f.name === "name" || f.name === "module" ? "sm:col-span-2 block" : "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground",
						children: [f.label, f.required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-destructive",
							children: " *"
						})]
					}), f.options ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						required: f.required,
						name: f.name,
						className: "w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "Select…"
						}), f.options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: o }, o))]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: f.required,
						name: f.name,
						type: f.type ?? "text",
						placeholder: f.placeholder,
						className: "w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
					})]
				}, f.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				disabled: loading,
				className: "mt-5 w-full rounded-full bg-gradient-brand px-6 py-3 font-semibold text-white shadow-glow transition hover:scale-[1.02] disabled:opacity-60",
				children: loading ? "Sending…" : cta
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-center text-xs text-muted-foreground",
				children: "By submitting you agree to be contacted by Next-Gen ERP Solutions."
			})
		]
	});
}
//#endregion
export { LeadForm as t };
