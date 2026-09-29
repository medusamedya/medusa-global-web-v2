import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return mockProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectData(slug);

  if (!project) notFound();

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const currentSlug = resolvedParams.slug;

  const project = await getProjectData(currentSlug);

  if (!project) notFound();
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
      <div className="w-full flex flex-col gap-12 py-24">
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
