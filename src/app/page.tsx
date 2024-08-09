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
    },800)

    AOS.init({
      easing: "linear",
      once: false,
      offset: 0,
      duration: 500,
      
    });
  }, []);

  if(!loading) {
    return <Loading/>
  }

  return (
    <>
      <Header />
      <main className="flex flex-col divide-y-[1px] dark:divide-blue-950">
        <Home />
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
      <ScrollToTop />
    </>

  );
}
