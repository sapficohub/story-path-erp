import { createFileRoute } from "@tanstack/react-router";
import SourceEntry from "@/components/SourceEntry";

export const Route = createFileRoute("/linkedin")({
  component: LinkedInSourcePage,
});

function LinkedInSourcePage() {
  return <SourceEntry source="linkedin" />;
}