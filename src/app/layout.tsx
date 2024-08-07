import type { Metadata } from "next";
import { Inter, Preahvihear } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import ScrollToTop from '@/components/ScrollToTop'


const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const preahvihear = Preahvihear({ subsets: ['latin'], weight: '400', variable: '--font-preahvihear' })


export const metadata: Metadata = {
  title: "Portfolio 2.0",
  description: "Portfolio mais atualizado 07/2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${preahvihear.variable} ${inter.className} bg-dark-30 text-dark-40 grid md:grid-rows-layout`}>
        <header className="fixed py-2 w-full min-h-[70px] md:relative z-20 border-b-2 border-dark-30 bg-dark-10 shadow-2xl flex items-center">
          <Header />
        </header>
        {children}
        <footer className="bg-dark-10">
          <Footer/>
        </footer>
        <ScrollToTop />

      </body>
    </html>
  );
}
