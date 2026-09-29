import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Dijital büyüme, pazarlama, yatırım ve iş geliştirme alanlarındaki güncel Medusa Global içeriklerini inceleyin.",
  alternates: { canonical: "/blog" },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
