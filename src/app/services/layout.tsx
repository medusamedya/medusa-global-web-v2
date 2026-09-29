import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description: "Dijital sağlık kontrolü, danışmanlık, hızlandırma ve yatırım hizmetlerimizi keşfedin.",
  alternates: { canonical: "/services" },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
