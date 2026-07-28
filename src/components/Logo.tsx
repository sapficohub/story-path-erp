import logoAsset from "@/assets/nextgen-logo-header.png";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <img
      src={logoAsset}
      alt="Next-Gen ERP Solutions"
      width={320}
      height={121}
      decoding="async"
      className={className}
    />
  );
}
