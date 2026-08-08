import { createFileRoute } from "@tanstack/react-router";
import SourceEntry from "@/components/SourceEntry";

export const Route = createFileRoute("/facebook")({
  component: FacebookSourcePage,
});

function FacebookSourcePage() {
  return <SourceEntry source="facebook" />;
}