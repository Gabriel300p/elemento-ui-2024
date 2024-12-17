import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import { Locale } from "@/i18n/i18n-config";
import ReactQueryProviders from "@/providers/ReactQueryProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elemento UI | Tailwind UI Kit and Style Guide",
  description:
    "Elemento UI é um kit de elementos de interface do usuário desenvolvido com o poderoso framework Tailwind CSS...",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <ReactQueryProviders>
        <body className={`${inter.className} antialiased`}>
          <div className="flex flex-col md:flex-row">
            <Sidebar lang={lang} />
            {children}
          </div>
          <Toaster />
        </body>
      </ReactQueryProviders>
    </html>
  );
}
