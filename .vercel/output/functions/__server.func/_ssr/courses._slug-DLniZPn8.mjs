import { c as lazyRouteComponent, l as createFileRoute, p as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getCourse } from "./courses-BfBEczWU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/courses._slug-DLniZPn8.js
var $$splitComponentImporter = () => import("./courses._slug-D8DH087y.mjs");
var Route = createFileRoute("/courses/$slug")({
	loader: ({ params }) => {
		const course = getCourse(params.slug);
		if (!course) throw notFound();
		return { course };
	},
	head: ({ loaderData }) => {
		const c = loaderData?.course;
		return { meta: [
			{ title: c ? `${c.title} Training & Placement — Next-Gen ERP Solutions` : "SAP Course" },
			{
				name: "description",
				content: c?.description ?? "SAP training and placement"
			},
			{
				property: "og:title",
				content: c ? `${c.title} Training & Placement` : "SAP Course"
			},
			{
				property: "og:description",
				content: c?.tagline ?? ""
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
