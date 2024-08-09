import type { Metadata } from "next";
import { Inter, Preahvihear } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import ScrollToTop from '@/components/ScrollToTop'
import { ThemeProvider } from "next-themes";


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
    <html lang="en" suppressHydrationWarning>
      <body className={`${preahvihear.variable} ${inter.className} dark:bg-victor-100 dark:text-victor-300`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem

          >
        <div>

        {children}
        </div>
      </ThemeProvider>
      </body>
    </html>
  );
}
