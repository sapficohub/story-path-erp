// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Inside Lovable's sandbox build, the wrapper auto-targets Cloudflare and uses
// src/server.ts as the SSR entry. Outside Lovable (self-deploys on Vercel),
// pin Nitro to the Vercel preset so `vite build` produces a Vercel-ready output.
// NITRO_PRESET / VERCEL env vars still take precedence if set by CI.
export default defineConfig({
  nitro: { preset: "vercel" },
});
