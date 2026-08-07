import { createFileRoute } from "@tanstack/react-router";
import SourceEntry from "@/components/SourceEntry";

export const Route = createFileRoute("/instagram")({
  component: InstagramSourcePage,
});

function InstagramSourcePage() {
  return <SourceEntry source="instagram" />;
}