import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Medusa Global | Dijital Hızlandırma ve Danışmanlık",
    short_name: "Medusa Global",
    description:
      "Dünyaya yenilik katarak ticaretini büyütmek isteyen işverenlerin destekçisi.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0c0811",
    theme_color: "#0c0811",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/pwa-icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/pwa-icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/pwa-icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
