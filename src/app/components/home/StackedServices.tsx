"use client";

import React from "react";
// Data'yı tek bir yerden yönetmek için ana dosyaya taşıdık veya ayrı bir data dosyasından çekebilirsin.
// Şimdilik buraya koyuyorum, alt bileşenlere props ile geçebilirsin veya ayrı dosyadan import edebilirsin.

import StackedServicesDesktop from "./StackedServicesDesktop";
import StackedServicesMobile from "./StackedServicesMobile";
import { stackData } from "@/data/stackData";

export default function StackedServices() {
  return (
    <div className="w-full bg-background relative overflow-hidden">
      
      {/* 1. MASAÜSTÜ GÖRÜNÜMÜ (GSAP) - 768px'den büyük ekranlarda çalışır */}
      <div className="hidden md:block">
        <StackedServicesDesktop data={stackData} />
      </div>

      {/* 2. MOBİL GÖRÜNÜMÜ (Yatay Slider) - 768px'den küçük ekranlarda çalışır */}
      <div className="block md:hidden">
        <StackedServicesMobile data={stackData} />
      </div>
      
    </div>
  );
}