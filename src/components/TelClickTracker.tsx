import { useEffect } from "react";

export function TelClickTracker() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      try {
        const target = e.target as Element | null;
        const anchor = target && (target.closest ? target.closest('a[href^="tel:"]') : null) as HTMLAnchorElement | null;
        if (anchor) {
          (window as any).dataLayer = (window as any).dataLayer || [];
          (window as any).dataLayer.push({ event: "phone_click" });
        }
      } catch (err) {
        // no-op
      }
    };

    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  return null;
}
