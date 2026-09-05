import { Cta } from "@/components/cta";
import { Features } from "@/components/features";
import { SiteFooter } from "@/components/footer";
import { SiteHeader } from "@/components/header";
import { Hero } from "@/components/hero";
import { Pitch } from "@/components/pitch";
import { Screenshots } from "@/components/screenshots";
import { Videos } from "@/components/videos";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-amber focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-ink"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Pitch />
        <Features />
        <Screenshots />
        <Videos />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}
