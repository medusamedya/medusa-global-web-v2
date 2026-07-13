import { ProjectData } from "@/types/project"; // Kendi yoluna göre güncelle

export const mockProjects: ProjectData[] = [
  {
    slug: "hukukchat-ai",
    category: "Hukuk Teknolojleri",
    title: "HukukChat AI",
    tags: ["Sosyal Medya", "Dijital Reklam", "Web Site"],
    description:
      "Hukuk teknolojileri alanında konumlanan HukukChat AI için dijital iletişim stratejisi oluşturuldu, sosyal medya görünümü ve web sitesi deneyimi uçtan uca tasarlandı.",
    heroMockup:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop",
    services: {
      strategy: {
        title: "Teknolojiyle hukuku bir araya getiren marka deneyimi",
        description:
          "HukukChat AI markasının konumlandırılması, hedef kitle analizi ve iletişim stratejisi doğrultusunda güven veren, teknolojik ve modern bir marka dili oluşturuldu.",
        items: [
          "Marka Stratejisi",
          "Sosyal Medya Yönetimi",
          "Dijital İletişim Stratejisi",
          "Performans Reklamları",
          "Kreatif Konsept",
          "Web Site Tasarımı & Yazılım",
        ],
      },
      socialMedia: {
        title: "Güven veren içerik dili, modern tasarımlar",
        description:
          "Hedef kitlenin ihtiyaçlarına yönelik bilgilendirici, etkileşim odaklı ve markanın uzmanlığını yansıtan içerikler üretildi.",
        images: [
          "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1611162618071-b39a2ec055ce?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1611162618071-b39a2ec055ce?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop",
        ],
      },
      webDesign: {
        title: "Net. Modern. İşlevsel.",
        description: "Kullanıcı deneyimi ve arayüz tasarımı...",
        mockups: [
          "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=1600&auto=format&fit=crop", 
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop", 
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop" 
        ],
      },
      digitalAds: {
        title: "Ölçeklenebilir Büyüme ve Performans",
        description:
          "Doğru hedefleme ve dönüşüm odaklı performans pazarlaması stratejimiz sayesinde, uygulamanın ilk ayında beklentilerin çok ötesinde bir büyüme ivmesi yakaladık.",
        metrics: [
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
        ],
      },
      brandIdentity: {
        title: "Akılda Kalan Görsel Kimlik",
        description:
          "Markanın dijitaldeki yüzünü sadece bir logo olarak değil; tipografisinden renk paletine kadar her alanda tutarlı bir kurumsal kimlik anayasası olarak inşa ettik.",
        assets: [
          "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop", // Büyük görsel
          "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop", // Küçük 1
          "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&auto=format&fit=crop", // Küçük 2
        ],
      },
    },
  },
];
