'use client'
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect} from "react";
import { Header } from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Footer } from "@/components/Footer";
import { Skills } from "@/components/Skills";
import { Home } from "@/components/Home";

export default function HomeApp() {
  useEffect(() => {

    AOS.init({
      easing: "linear",
      once: false,
      offset: 0,
      duration: 600,
      
    });

    
  }, []);

  return (
    <>
      <Header/>
      <main className="flex flex-col">
        <Home/>
        <About/>
        <Experience/>
        <Skills/>
        <Projects/>
      </main>
      <Footer />
      <ScrollToTop />
    </>

  );
}
