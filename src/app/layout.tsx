import type { Metadata } from "next";
// 1. Vizyoner fontumuz Plus Jakarta Sans'ı projeye dahil ediyoruz
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

// 2. Font konfigürasyonunu yapıyoruz
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-inter", // Tailwind konfigürasyonuyla eşleşmesi için
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Medusa Global | Dijital Dönüşüm ve Büyüme Danışmanlığı",
  description: "Dünyaya yenilik katarak ticaretini büyütmek isteyen işverenlerin destekçisi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      {/* 3. Font değişkenini body'ye ekliyoruz */}
      <body className={`${jakarta.variable} font-sans antialiased transition-colors duration-500`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}