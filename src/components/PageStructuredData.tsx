import { JsonLd } from "@/components/JsonLd";
import {
  ORGANIZATION_ID,
  breadcrumbSchema,
  webPageSchema,
} from "@/lib/schema";

type PageType = "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";

type PageStructuredDataProps = {
  url: string;
  name: string;
  description: string;
  breadcrumbs: { name: string; url: string }[];
  type?: PageType | PageType[];
  aboutId?: string;
  mainEntityId?: string;
};

export function PageStructuredData({
  url,
  name,
  description,
  breadcrumbs,
  type = "WebPage",
  aboutId = ORGANIZATION_ID,
  mainEntityId,
}: PageStructuredDataProps) {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          type,
          url,
          name,
          description,
          aboutId,
          mainEntityId,
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
    </>
  );
}
