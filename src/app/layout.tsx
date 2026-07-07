import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} font-sans antialiased transition-colors duration-500 bg-background text-foreground`}
        suppressHydrationWarning
      >
        {" "}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Her sayfada en üstte Header olacak */}
          <Header />

          {/* Hangi sayfadaysak (Home, About vb.) o sayfanın içeriği burada render edilecek */}
          <main className="relative flex flex-col overflow-hidden min-h-screen">
            {children}
          </main>

          {/* Her sayfada en altta Footer olacak */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
