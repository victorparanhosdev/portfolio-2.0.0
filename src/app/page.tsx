'use client'
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Home } from "@/components/Home";
import { Projects } from "@/components/Projects";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect} from "react";
import { Header } from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Footer } from "@/components/Footer";
import { Skills } from "@/components/Skills";


export default function HomePage() {

  useEffect(() => {

    AOS.init({
      easing: "linear",
      once: false,
      offset: 0,
      duration: 500,
      
    });
  }, []);

  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Home />
        <About />
        <Experience />
        <Skills/>
        <Projects />

      </main>
      <Footer />
      <ScrollToTop />
    </>

  );
}
