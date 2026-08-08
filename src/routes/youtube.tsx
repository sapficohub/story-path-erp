import { createFileRoute } from "@tanstack/react-router";
import SourceEntry from "@/components/SourceEntry";

export const Route = createFileRoute("/youtube")({
  component: YouTubeSourcePage,
});

function YouTubeSourcePage() {
  return <SourceEntry source="youtube" />;
}