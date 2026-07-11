import React from "react";
import ProjectHero from "../components/ProjectHero";
import StrategySection from "../components/StrategySection";
import SocialMediaSection from "../components/SocialMediaSection";
import WebDesignSection from "../components/WebDesignSection";
import DigitalAdsSection from "../components/DigitalAdsSection";
import BrandIdentitySection from "../components/BrandIdentitySection";
import { ProjectData } from "@/types/project";
import { mockProjects } from "@/data/project";

async function getProjectData(slug: string): Promise<ProjectData | null> {
  // Dışarıdan import ettiğimiz mockProjects içinde arama yapıyoruz
  return mockProjects.find((p) => p.slug === slug) || null;
}

type Props = {
  params: Promise<{ slug: string }> | { slug: string };
};

export default async function ProjectDetailPage({ params }: Props) {
  // Next 15 (Promise) ve Next 14 uyumluluğu için params'ı çözümlüyoruz
  const resolvedParams = await params; 
  const currentSlug = resolvedParams.slug;

  // Terminalde (VS Code) ne geldiğini görmek için kontrol (Tarayıcıda görünmez)
  console.log("GELEN SLUG DEĞERİ:", currentSlug);

  const project = await getProjectData(currentSlug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-white font-heading text-2xl gap-4">
        <span>Proje bulunamadı.</span>
        <span className="text-sm font-sans text-medusa-text-secondary">
          Aranan Slug: {currentSlug || "Tanımsız (Klasör adını kontrol et)"}
        </span>
      </div>
    );
  }
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col w-full">
      {/* 1. Sabit Hero Alanı */}
      <ProjectHero
        category={project.category}
        title={project.title}
        tags={project.tags}
        description={project.description}
        heroMockup={project.heroMockup}
      />

      {/* 2. Dinamik Hizmet Bileşenleri (Conditional Rendering) */}
      <div className="w-full flex flex-col gap-24 py-24">
        {project.services.strategy && (
          <StrategySection data={project.services.strategy} />
        )}

        {project.services.socialMedia && (
          <SocialMediaSection data={project.services.socialMedia} />
        )}

        {project.services.webDesign && (
          <WebDesignSection data={project.services.webDesign} />
        )}

        {project.services.digitalAds && (
          <DigitalAdsSection data={project.services.digitalAds} />
        )}

        {project.services.brandIdentity && (
          <BrandIdentitySection data={project.services.brandIdentity} />
        )}
      </div>
    </main>
  );
}
