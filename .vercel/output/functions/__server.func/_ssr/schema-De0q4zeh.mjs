import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/schema-De0q4zeh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function JsonLdComponent({ data }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
		type: "application/ld+json",
		dangerouslySetInnerHTML: { __html: JSON.stringify(data) }
	});
}
var JsonLd = (0, import_react.memo)(JsonLdComponent);
var SITE_URL = "https://www.next-generpsolutions.com";
var organizationSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	"@id": `${SITE_URL}#organization`,
	name: "Next-Gen ERP Solutions",
	url: SITE_URL,
	logo: `${SITE_URL}/logo.png`,
	image: `${SITE_URL}/og-image.jpg`,
	description: "Next-Gen ERP Solutions provides industry-focused SAP Training, real-time projects, interview preparation, certification guidance and placement assistance.",
	email: "info@next-generpsolutions.com",
	telephone: "+91 90003 33859",
	sameAs: [
		"https://www.linkedin.com/company/next-gen-erp-solutions",
		"https://www.facebook.com/NextGenERPSolutions",
		"https://www.instagram.com/nextgenerpsolutions/",
		"https://www.youtube.com/@Next-GenERPSolutions"
	]
};
var websiteSchema = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	"@id": `${SITE_URL}#website`,
	url: SITE_URL,
	name: "Next-Gen ERP Solutions",
	publisher: { "@id": `${SITE_URL}#organization` }
};
var educationalOrganizationSchema = {
	"@context": "https://schema.org",
	"@type": "EducationalOrganization",
	"@id": `${SITE_URL}#educationalOrganization`,
	name: "Next-Gen ERP Solutions",
	url: SITE_URL,
	logo: `${SITE_URL}/logo.png`,
	image: `${SITE_URL}/og-image.jpg`,
	description: "Leading SAP Training Institute in Hyderabad offering SAP FICO, MM, SD, ABAP, BASIS, HCM and SuccessFactors training with placement assistance.",
	telephone: "+91 90003 33859",
	email: "info@next-generpsolutions.com",
	address: {
		"@type": "PostalAddress",
		streetAddress: "Flat No. 502, PJR Arcade, Plot No.129, Sri Sai Nagar Colony, Near JNTU, Opp. Sri Chaitanya Junior College",
		addressLocality: "Hyderabad",
		addressRegion: "Telangana",
		postalCode: "500085",
		addressCountry: "IN"
	},
	openingHours: "Mo-Sa 09:00-19:00",
	priceRange: "₹₹",
	sameAs: [
		"https://www.linkedin.com/company/next-gen-erp-solutions",
		"https://www.facebook.com/NextGenERPSolutions",
		"https://www.instagram.com/nextgenerpsolutions/",
		"https://www.youtube.com/@Next-GenERPSolutions"
	],
	parentOrganization: { "@id": `${SITE_URL}#organization` }
};
function breadcrumbSchema(items) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: item.url
		}))
	};
}
function courseSchema(course) {
	return {
		"@context": "https://schema.org",
		"@type": "Course",
		name: course.name,
		description: course.description,
		provider: { "@id": `${SITE_URL}#educationalOrganization` },
		url: course.url
	};
}
function faqSchema(faqs) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map((faq) => ({
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.answer
			}
		}))
	};
}
function localBusinessSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "EducationalOrganization",
		"@id": `${SITE_URL}#business`,
		name: "Next-Gen ERP Solutions",
		url: SITE_URL,
		logo: `${SITE_URL}/logo.png`,
		image: `${SITE_URL}/og-image.jpg`,
		telephone: "+91 90003 33859",
		email: "info@next-generpsolutions.com",
		address: {
			"@type": "PostalAddress",
			streetAddress: "Flat No. 502, PJR Arcade, Plot No.129, Sri Sai Nagar Colony, Near JNTU, Opp. Sri Chaitanya Junior College",
			addressLocality: "Hyderabad",
			addressRegion: "Telangana",
			postalCode: "500085",
			addressCountry: "IN"
		},
		openingHours: "Mo-Sa 09:00-19:00",
		priceRange: "₹₹",
		sameAs: [
			"https://www.linkedin.com/company/next-gen-erp-solutions",
			"https://www.facebook.com/NextGenERPSolutions",
			"https://www.instagram.com/nextgenerpsolutions/",
			"https://www.youtube.com/@Next-GenERPSolutions"
		]
	};
}
//#endregion
export { educationalOrganizationSchema as a, organizationSchema as c, courseSchema as i, websiteSchema as l, SITE_URL as n, faqSchema as o, breadcrumbSchema as r, localBusinessSchema as s, JsonLd as t };
