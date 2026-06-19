import logoAsset from "@/assets/nextgen-logo.png.asset.json";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return <img src={logoAsset.url} alt="Next-Gen ERP Solutions" className={className} />;
}
