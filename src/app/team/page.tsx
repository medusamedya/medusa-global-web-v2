import React from "react";
import type { Metadata } from "next";
import Team from "../about/components/Team";
import InnerHero from "../components/InnerHero";

// SEO ve Dijital Varlık Yönetimi için Sayfa Metadata'sı
export const metadata: Metadata = {
  title: "Ekibimiz | Medusa Global",
  description: "Sadece kod yazan veya tasarım yapan değil; dijital varlıklarınızı ticari başarıya dönüştüren vizyoner Medusa Global ekibiyle tanışın.",
};

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col w-full pt-16 md:pt-20">
      {/* 
        pt-16: Sabit (fixed) Header'ın içeriğin üstüne binmesini engellemek 
        için üstten güvenli bir boşluk bırakıyoruz.
      */}
      
      {/* --- ÜST BÖLÜM: INNER HERO İLE GÜÇLÜ GİRİŞ --- */}
      <InnerHero
        title="Büyümenin Mimarları"
        accentTitle="Ekibimiz"
        description="Sadece kod yazan veya tasarım yapan değil; dijital varlıklarınızı ticari başarıya dönüştüren vizyoner ekibimizle tanışın."
      />

      {/* --- ALT BÖLÜM: EKİP GRID YAPISI --- */}
      <Team />
    </main>
  );
}