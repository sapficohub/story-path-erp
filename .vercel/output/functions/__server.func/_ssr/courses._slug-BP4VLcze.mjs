import { M as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SITE_URL } from "./schema-De0q4zeh.mjs";
import { n as getCourse } from "./courses-BfBEczWU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/courses._slug-BP4VLcze.js
var $$splitComponentImporter = () => import("./courses._slug-BSgNweIw.mjs");
var Route = createFileRoute("/courses/$slug")({
	loader: ({ params }) => {
		const course = getCourse(params.slug);
		if (!course) throw notFound();
		return { course };
	},
	head: ({ loaderData }) => {
		const c = loaderData?.course;
		const title = c ? `${c.title} Training in Hyderabad | SAP Certification & Placement | Next-Gen ERP Solutions` : "SAP Course";
		const description = c ? `${c.description} Learn ${c.title} with live SAP servers, real-time projects, certification guidance and placement support from Next-Gen ERP Solutions.` : "SAP Training";
		const url = c ? `${SITE_URL}/courses/${c.slug}` : `${SITE_URL}/courses`;
		return {
			links: [{
				rel: "canonical",
				href: url
			}],
			meta: [
				{ title },
				{
					name: "description",
					content: description
				},
				{
					name: "keywords",
					content: `${c?.title}, ${c?.title} Course, ${c?.title} Training, ${c?.title} Certification, SAP Training Hyderabad, SAP Course Hyderabad`
				},
				{
					name: "robots",
					content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: description
				},
				{
					property: "og:url",
					content: url
				},
				{
					property: "og:image",
					content: `${SITE_URL}/og-image.jpg`
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				},
				{
					name: "twitter:title",
					content: title
				},
				{
					name: "twitter:description",
					content: description
				},
				{
					name: "twitter:image",
					content: `${SITE_URL}/og-image.jpg`
				}
			]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
