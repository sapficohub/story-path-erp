import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { useEffect, useState } from "react";

export function StickyCTAs() {
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;

    const observer = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting), {
      threshold: 0.05,
    });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed z-50 flex flex-col gap-4 transition duration-200 ${
        footerVisible ? "hidden" : "opacity-100"
      }`}
      style={{
        right: "max(1rem, env(safe-area-inset-right))",
        bottom: "max(1rem, env(safe-area-inset-bottom))",
      }}
    >
      <a
        href="https://wa.me/919000333859"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow transition hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" aria-hidden="true" />
      </a>
      <a
        href="tel:+919000333859"
        aria-label="Call now"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-glow transition hover:scale-110"
      >
        <Phone className="h-7 w-7" aria-hidden="true" />
      </a>
      <Link
        to="/contact"
        aria-label="Book demo"
        className="hidden sm:flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-white shadow-glow transition hover:scale-110"
      >
        <Calendar className="h-7 w-7" aria-hidden="true" />
        <span className="sr-only">Book a free SAP demo</span>
      </Link>
    </div>
  );
}
