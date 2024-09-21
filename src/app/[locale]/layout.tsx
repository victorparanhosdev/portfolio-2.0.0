import type { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Providers } from "@/providers/NextUI";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, unstable_setRequestLocale} from 'next-intl/server';
import { routing } from "@/i18n/routing";

const Sofia = Sofia_Sans({ subsets: ['latin'], weight: ['1', '100', '1000', '200', '300', '400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: "Portfolio 2.0",
  description: "Portfolio mais atualizado 07/2024",
};
export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}



export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {

  
  unstable_setRequestLocale(locale);

  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={` ${Sofia.className} bg-white text-blue-light-100 dark:bg-gray-dark-500 dark:text-gray-dark-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
           <NextIntlClientProvider messages={messages}>
          <Providers>
            <div>

              {children}

            </div>
          </Providers>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
