import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Toaster } from "@/components/ui/toaster";
import { Locale } from "@/i18n/i18n-config";
import ReactQueryProviders from "@/providers/ReactQueryProvider";
import type { Metadata } from "next";
// import localFont from "next/font/local";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Elemento UI | Tailwind UI Kit and Style Guide",
  description:
    "Elemento UI é um kit de elementos de interface do usuário desenvolvido com o poderoso framework Tailwind CSS. Este kit oferece uma ampla variedade de elementos de design de interface do usuário para ajudar a criar sites incríveis. Com o Elemento UI, é fácil criar uma aparência coesa e profissional em seus projetos de desenvolvimento da web. Este kit também inclui um guia de estilo completo para ajudar você a entender como aplicar as classes Tailwind em seus projetos. Aproveite a combinação de poder do Elemento UI e Tailwind CSS para criar sites bonitos, responsivos e modernos que se destacam nos mecanismos de busca. Experimente o Elemento UI hoje mesmo e veja a diferença que ele pode fazer em seus projetos.",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
      <ReactQueryProviders>
        <body
          className={` antialiased`}
          // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
          <Toaster />
          <LanguageSwitcher />
        </body>
      </ReactQueryProviders>
    </html>
  );
}
