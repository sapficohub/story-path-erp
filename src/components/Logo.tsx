// import logoAsset from "@/assets/nextgen-logo.png.asset.json";
import logoAsset from "@/assets/nextgen-logo.png";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return <img src={logoAsset} alt="Next-Gen ERP Solutions" className={className} />;
}
