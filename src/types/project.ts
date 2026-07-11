// types/project.ts
export interface ProjectData {
  slug: string;
  category: string;
  title: string;
  tags: string[];
  description: string;
  heroMockup: string;
  // Conditional Rendering için hizmet objeleri (Opsiyonel)
  services: {
    strategy?: { title: string; description: string; items: string[] };
    socialMedia?: { title: string; description: string; images: string[] };
    webDesign?: { title: string; description: string; mockup: string };
    digitalAds?: { title: string; description: string; metrics: string[] };
    brandIdentity?: { title: string; description: string; assets: string[] };
  };
}