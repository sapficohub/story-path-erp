import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { StickyCTAs } from "./StickyCTAs";
import { TelClickTracker } from "./TelClickTracker";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <TelClickTracker />
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <StickyCTAs />
    </div>
  );
}
