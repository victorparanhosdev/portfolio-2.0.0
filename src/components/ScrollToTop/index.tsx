'use client'
import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`${
        showButton ? "fixed bottom-4 right-4 opacity-100 visible translate-y-0" : "invisible opacity-0 translate-y-6"
      } bg-brand-color hover:bg-brand-hover p-1 rounded-full text-dark-40 shadow-lg transition duration-700 animate-bounce`}
    >
      <ArrowUp className="w-8 h-8" />
    </button>
  );
};

export default ScrollToTopButton;