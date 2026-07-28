import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const   NAV = [
  { to: "/", label: "Home", mobileLabel: "Go to Homepage" },
  // { to: "/about", label: "About" },
  { to: "/courses", label: "SAP Courses", mobileLabel: "Browse SAP Courses" },
  { to: "/career-journeys", label: "Career Journeys", mobileLabel: "Explore Career Journeys" },
  { to: "/placements", label: "Placements", mobileLabel: "View Placement Support" },
  { to: "/success-stories", label: "Success Stories", mobileLabel: "Read Student Success Stories" },
  { to: "/blog", label: "Blog", mobileLabel: "Read the SAP Career Blog" },
  { to: "/quiz", label: "Quiz", mobileLabel: "Take the SAP Quiz" },
  { to: "/about", label: "About", mobileLabel: "About Next-Gen ERP" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link
          to="/"
          aria-label="Next-Gen ERP Solutions homepage"
          className="flex shrink-0 items-center gap-2"
        >
          <Logo className="h-10 w-auto" />
          <span className="sr-only">Next-Gen ERP Solutions homepage</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "rounded-full px-3 py-2 text-sm font-semibold text-brand bg-secondary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-2">
          <a href="tel:+919000333859" className="text-sm font-semibold text-brand">+91 90003 33859</a>
          <Link
            to="/contact"
            className="rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:scale-105"
          >
            Book Free Demo
          </Link>
        </div>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
              >
                {n.mobileLabel}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-brand px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Schedule Free SAP Demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
