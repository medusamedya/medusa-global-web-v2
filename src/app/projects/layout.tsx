import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Çalışmalarımız",
  description: "Medusa Global'in farklı sektörlerde geliştirdiği dijital dönüşüm ve büyüme çalışmalarını inceleyin.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
