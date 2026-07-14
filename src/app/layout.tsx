import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Header ve Footer'ı layout'a dahil ediyoruz
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Medusa Global | Dijital Dönüşüm ve Büyüme Danışmanlığı",
  description:
    "Dünyaya yenilik katarak ticaretini büyütmek isteyen işverenlerin destekçisi.",
    icons: {
    icon: '/Logo.png',
    apple: '/Logo.png', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}
        suppressHydrationWarning={true}
      >
        {/* Her sayfada en üstte Header olacak */}
        <Header />

        {/* Hangi sayfadaysak o sayfanın içeriği burada render edilecek */}
        <main className="relative flex flex-col flex-grow overflow-hidden">
          {children}
        </main>

        {/* Her sayfada en altta Footer olacak */}
        <Footer />
      </body>
    </html>
  );
}