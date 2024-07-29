'use client'
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Home } from "@/components/Home";
import { Projects } from "@/components/Projects";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function HomePage() {
  useEffect(() => {
    AOS.init({
      easing: "linear",
      once: false,
      offset: 0,
      duration: 1000,
    });
  }, []);

  return (
    <main className="grid">
      <Home/>
      <About />
      <Experience />
      <Projects />
    </main>
  );
}
