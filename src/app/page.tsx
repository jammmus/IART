import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LiveScores from "@/components/LiveScores";
import Schedule from "@/components/Schedule";
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
        <LiveScores />
        <Schedule />
        <Sports />
        <Gallery />
        <Venues />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
