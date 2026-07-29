import logoAvif480 from "@/assets/nextgen-logo-480.avif";
import logoAvif768 from "@/assets/nextgen-logo-768.avif";
import logoAvif1024 from "@/assets/nextgen-logo-1024.avif";
import logoAvif1440 from "@/assets/nextgen-logo-1440.avif";
import logoWebp480 from "@/assets/nextgen-logo-480.webp";
import logoWebp768 from "@/assets/nextgen-logo-768.webp";
import logoWebp1024 from "@/assets/nextgen-logo-1024.webp";
import logoWebp1440 from "@/assets/nextgen-logo-1440.webp";

export function Logo({
  className = "h-10 w-auto",
  loading = "eager",
}: {
  className?: string;
  loading?: "eager" | "lazy";
}) {
  return (
    <picture>
      <source
        type="image/avif"
        srcSet={`${logoAvif480} 480w, ${logoAvif768} 768w, ${logoAvif1024} 1024w, ${logoAvif1440} 1440w`}
        sizes="(max-width: 768px) 160px, 220px"
      />
      <source
        type="image/webp"
        srcSet={`${logoWebp480} 480w, ${logoWebp768} 768w, ${logoWebp1024} 1024w, ${logoWebp1440} 1440w`}
        sizes="(max-width: 768px) 160px, 220px"
      />
      <img
        src={logoWebp480}
        alt="Next-Gen ERP Solutions"
        className={className}
        loading={loading}
        decoding="async"
        fetchPriority={loading === "eager" ? "high" : "auto"}
      />
    </picture>
  );
}
