"use client";

import React from "react";
import InnerHero from "../components/InnerHero";
import WorkProcess from "./components/WorkProcess";

export default function ServicesPage() {
  return (
    <main className="w-full min-h-screen bg-background">
      
      {/* 1. INNER HERO COMPONENTİ */}
      <InnerHero 
        title="Büyüme Odaklı"
        accentTitle="Hizmetlerimiz"
        description="Dijital varlık sağlık analizinden, uçtan uca ivmelenme (acceleration) ve performans pazarlamasına kadar markanızı geleceğe taşıyan stratejik çözümler."
      />
    <WorkProcess />
    </main>
  );
}