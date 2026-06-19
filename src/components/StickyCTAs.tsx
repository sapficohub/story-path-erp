import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Calendar } from "lucide-react";

export function StickyCTAs() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/919000333859"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow transition hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
      <a
        href="tel:+919000333859"
        aria-label="Call now"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-glow transition hover:scale-110"
      >
        <Phone className="h-7 w-7" />
      </a>
      <Link
        to="/contact"
        aria-label="Book demo"
        className="hidden sm:flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-white shadow-glow transition hover:scale-110"
      >
        <Calendar className="h-7 w-7" />
      </Link>
    </div>
  );
}
