import { createFileRoute } from "@tanstack/react-router";
import SourceEntry from "@/components/SourceEntry";

export const Route = createFileRoute("/google-business")({
  component: GoogleBusinessSourcePage,
});

function GoogleBusinessSourcePage() {
  return <SourceEntry source="google_business" />;
}