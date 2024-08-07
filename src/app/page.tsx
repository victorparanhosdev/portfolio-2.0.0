'use client'
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Home } from "@/components/Home";
import { Projects } from "@/components/Projects";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { Header } from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Footer } from "@/components/Footer";


export default function HomePage() {
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setTimeout(()=> {
      setLoading(true)
    },1000)

    AOS.init({
      easing: "linear",
      once: false,
      offset: 0,
      duration: 1000,
    });
  }, []);

  if(!loading) {
    return <Loading/>
  }

  return (
    <>
      <header className="fixed py-2 w-full min-h-[70px] md:relative z-20 border-b-2 border-dark-30 bg-dark-10 shadow-2xl flex items-center">
        <Header />
      </header>
      <main className="grid">
        <Home />
        <About />
        <Experience />
        <Projects />
      </main>
      <footer className="bg-dark-10">
        <Footer />
      </footer>
      <ScrollToTop />
    </>

  );
}
