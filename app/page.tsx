import Navbar from "@/src/components/layout/Navbar";
import Hero from "@/src/components/sections/Hero";
import SelectedWork from "@/src/components/sections/SelectedWork";
import About from "@/src/components/sections/About";
import Capabilities from "@/src/components/sections/Capabilities";
import Services from "@/src/components/sections/Services";
import Process from "@/src/components/sections/Process";
import Contact from "@/src/components/sections/Contact";
import Footer from "@/src/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SelectedWork />
      <About />
      <Capabilities />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}