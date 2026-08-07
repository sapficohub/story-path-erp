import { createFileRoute } from "@tanstack/react-router";
import SourceEntry from "@/components/SourceEntry";

export const Route = createFileRoute("/whatsapp")({
  component: WhatsAppSourcePage,
});

function WhatsAppSourcePage() {
  return <SourceEntry source="whatsapp" />;
}