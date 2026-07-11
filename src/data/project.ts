import { ProjectData } from "@/types/project"; // Kendi yoluna göre güncelle

export const mockProjects: ProjectData[] = [
  {
    slug: "hukukchat-ai",
    category: "HUKUK TEKNOLOJİLERİ",
    title: "HukukChat AI",
    tags: ["Sosyal Medya", "Dijital Reklam", "Web Site"],
    description: "Hukuk teknolojileri alanında konumlanan HukukChat AI için dijital iletişim stratejisi oluşturuldu, sosyal medya görünümü ve web sitesi deneyimi uçtan uca tasarlandı.",
    heroMockup: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop", 
    services: {
      strategy: {
        title: "Teknolojiyle hukuku bir araya getiren marka deneyimi",
        description: "HukukChat AI markasının konumlandırılması, hedef kitle analizi ve iletişim stratejisi doğrultusunda güven veren, teknolojik ve modern bir marka dili oluşturuldu.",
        items: ["Marka Stratejisi", "Sosyal Medya Yönetimi", "Dijital İletişim Stratejisi", "Performans Reklamları", "Kreatif Konsept", "Web Site Tasarımı & Yazılım"]
      },
      socialMedia: {
        title: "Güven veren içerik dili, modern tasarımlar",
        description: "Hedef kitlenin ihtiyaçlarına yönelik bilgilendirici, etkileşim odaklı ve markanın uzmanlığını yansıtan içerikler üretildi.",
        images: [
          "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1611162618071-b39a2ec055ce?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=800&auto=format&fit=crop"
        ]
      },
      webDesign: {
        title: "Net. Modern. İşlevsel.",
        description: "Kullanıcı deneyimi ve arayüz tasarımı, markanın teknolojik altyapısına ve güvenilirliğine yansıyacak şekilde minimalist bir yaklaşımla hazırlandı.",
        mockup: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=1600&auto=format&fit=crop"
      }
    }
  }
  // Yeni projeler buraya eklenecek...
];