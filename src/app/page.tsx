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

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Highlights />
        <Story />
        <Menu />
        <Stats />
        <Gallery />
        <Testimonials />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}
