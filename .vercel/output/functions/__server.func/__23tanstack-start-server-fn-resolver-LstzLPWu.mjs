//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-LstzLPWu.js
var manifest = { "ad925a28d9f3b5aa94ca8b2b92fb4c554ed45a62cbb1fb3e4b62e10d6a1f0695": {
	functionName: "submitLead_createServerFn_handler",
	importer: () => import("./_ssr/LeadForm-A6eGU46V.mjs")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
