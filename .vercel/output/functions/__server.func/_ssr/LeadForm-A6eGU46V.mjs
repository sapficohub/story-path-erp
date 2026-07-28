import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LeadForm-A6eGU46V.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
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
var submitLead_createServerFn_handler = createServerRpc({
	id: "ad925a28d9f3b5aa94ca8b2b92fb4c554ed45a62cbb1fb3e4b62e10d6a1f0695",
	name: "submitLead",
	filename: "src/components/LeadForm.tsx"
}, (opts) => submitLead.__executeServer(opts));
var submitLead = createServerFn({ method: "POST" }).validator(leadSchema).handler(submitLead_createServerFn_handler, async ({ data }) => {
	const webhookUrl = process.env.TELECRM_WEBHOOK_URL;
	const webhookSecret = process.env.TELECRM_WEBHOOK_SECRET;
	if (!webhookUrl) {
		console.error("TELECRM_WEBHOOK_URL is not configured");
		throw new Error("Lead submission is temporarily unavailable.");
	}
	const response = await fetch(webhookUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			...webhookSecret ? { Authorization: `Bearer ${webhookSecret}` } : {}
		},
		body: JSON.stringify({
			...data,
			phone: data.phone.replace(/[^\d+]/g, ""),
			source: "Website",
			submitted_at: (/* @__PURE__ */ new Date()).toISOString()
		})
	});
	if (!response.ok) {
		console.error(`TeleCRM rejected a lead submission with status ${response.status}`);
		throw new Error("Lead submission failed.");
	}
	return { success: true };
});
//#endregion
export { submitLead_createServerFn_handler };
