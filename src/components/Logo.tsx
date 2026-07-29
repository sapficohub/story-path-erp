import logoAvif480 from "@/assets/nextgen-logo-480.avif";
import logoAvif768 from "@/assets/nextgen-logo-768.avif";
import logoWebp480 from "@/assets/nextgen-logo-480.webp";
import logoWebp768 from "@/assets/nextgen-logo-768.webp";

export function Logo({
  className = "h-10 w-auto",
  loading = "eager",
  alt = "Next-Gen ERP Solutions",
}: {
  className?: string;
  loading?: "eager" | "lazy";
  alt?: string;
}) {
  return (
    <picture>
      <source
        type="image/avif"
        srcSet={`${logoAvif480} 480w, ${logoAvif768} 768w`}
        sizes="(max-width: 768px) 160px, 220px"
      />
      <source
        type="image/webp"
        srcSet={`${logoWebp480} 480w, ${logoWebp768} 768w`}
        sizes="(max-width: 768px) 160px, 220px"
      />
      <img
        src={logoWebp480}
        alt={alt}
        width={480}
        height={182}
        className={className}
        loading={loading}
        decoding="async"
        fetchPriority={loading === "eager" ? "high" : "auto"}
      />
    </picture>
  );
}
