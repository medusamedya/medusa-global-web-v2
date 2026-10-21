"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
// Data'yı tek bir yerden yönetmek için ana dosyaya taşıdık veya ayrı bir data dosyasından çekebilirsin.
// Şimdilik buraya koyuyorum, alt bileşenlere props ile geçebilirsin veya ayrı dosyadan import edebilirsin.

import StackedServicesMobile from "./StackedServicesMobile";
import { stackData } from "@/data/stackData";

const StackedServicesDesktop = dynamic(
  () => import("./StackedServicesDesktop"),
  { ssr: false },
);

export default function StackedServices() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const updateViewport = () => setIsDesktop(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);
    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  return (
    <div className="w-full bg-background relative overflow-hidden">
      {isDesktop ? (
        <StackedServicesDesktop data={stackData} />
      ) : (
        <StackedServicesMobile data={stackData} />
      )}
    </div>
  );
}
