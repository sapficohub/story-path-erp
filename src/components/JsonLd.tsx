import { memo } from "react";

interface JsonLdProps {
  data: Record<string, unknown>;
}

function JsonLdComponent({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

export const JsonLd = memo(JsonLdComponent);
