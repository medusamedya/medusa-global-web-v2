import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Dijital büyüme ve danışmanlık ihtiyaçlarınız için Medusa Global ile iletişime geçin.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
