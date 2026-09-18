import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Highlights from "@/components/Highlights";
import Story from "@/components/Story";
import Menu from "@/components/Menu";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import type { Locale, SiteCopy } from "@/types";

export default function LandingPage({
  copy,
  locale,
}: {
  copy: SiteCopy;
  locale: Locale;
}) {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <Navbar copy={copy} locale={locale} />
      <main className="flex-1">
        <Hero copy={copy.hero} stats={copy.stats} />
        <Marquee items={copy.marqueeItems} />
        <Highlights copy={copy.highlights} />
        <Story copy={copy.story} />
        <Menu copy={copy.menu} locale={locale} />
        <Stats stats={copy.stats} />
        <Gallery copy={copy.gallery} />
        <Testimonials copy={copy.testimonials} />
        <Visit copy={copy.visit} />
      </main>
      <Footer copy={copy.footer} brand={copy.brand} />
    </div>
  );
}
