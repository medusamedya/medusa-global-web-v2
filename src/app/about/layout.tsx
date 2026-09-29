import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Medusa Global'in markaları strateji, içerik, prodüksiyon ve dijital sistemlerle büyüten iş ortaklığı yaklaşımını keşfedin.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
