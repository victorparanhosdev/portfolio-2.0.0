import type { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Providers } from "@/Providers/NextUI";

const Sofia = Sofia_Sans({ subsets: ['latin'], weight: ['1', '100', '1000', '200', '300', '400', '500', '600', '700', '800', '900'] })

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
      <body className={` ${Sofia.className} bg-white text-blue-light-100 dark:bg-gray-dark-500 dark:text-gray-dark-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <Providers>
            <div>

              {children}

            </div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
