import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TeamsDraw from "@/components/TeamsDraw";
import Sports from "@/components/Sports";
import Gallery from "@/components/Gallery";
import Venues from "@/components/Venues";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TeamsDraw />
        <Sports />
        <Gallery />
        <Venues />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
