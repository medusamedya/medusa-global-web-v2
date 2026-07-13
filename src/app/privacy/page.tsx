import React from "react";
import InnerHero from "../components/InnerHero";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col w-full overflow-hidden">
      <InnerHero
        title="Gizlilik Politikası"
        accentTitle=""
        description="Medusa Global olarak, verilerinizin güvenliğine ve dijital ayak izinizin korunmasına büyük önem veriyoruz. Büyüme stratejilerimizi inşa ederken gizliliğinizi nasıl sağladığımızı inceleyin."
      />

      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-12 font-sans text-medusa-text-secondary leading-relaxed">
            
            {/* Giriş */}
            <div className="space-y-4">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">1. Veri Güvenliğine Yaklaşımımız</h2>
              <p>
                Medusa Global (Bundan böyle "Şirket" veya "Biz" olarak anılacaktır), dijital dönüşüm, hızlandırma ve büyüme danışmanlığı süreçlerinde iş ortaklarımızın ve web sitesi ziyaretçilerimizin gizliliğini korumayı taahhüt eder. Bu Gizlilik Politikası, web sitemizi kullanırken veya "Dijital Sağlık Kontrolü" gibi hizmetlerimizden faydalanırken kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklar.
              </p>
            </div>

            {/* Toplanan Veriler */}
            <div className="space-y-4">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">2. Toplanan Veriler</h2>
              <p>Hizmetlerimizi optimize etmek ve size özel stratejiler sunabilmek amacıyla aşağıdaki verileri toplayabiliriz:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>İletişim Bilgileri:</strong> İsim, e-posta adresi, telefon numarası ve şirket bilgileri (iletişim formları veya e-posta yoluyla bize ulaştığınızda).</li>
                <li><strong>Teknik ve Analitik Veriler:</strong> IP adresi, tarayıcı türü, ziyaret edilen sayfalar, oturum süreleri ve gezinme davranışları (UI/UX ve omnichannel performans optimizasyonu için).</li>
                <li><strong>Ticari Bilgiler:</strong> Büyüme danışmanlığı kapsamında paylaştığınız genel marka metrikleri (Sadece gizlilik sözleşmeleri -NDA- çerçevesinde işlenir).</li>
              </ul>
            </div>

            {/* Verilerin Kullanımı */}
            <div className="space-y-4">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">3. Verilerin Kullanım Amacı</h2>
              <p>Elde ettiğimiz veriler, markanızı bir sonraki eşiğe taşımak ve operasyonel kalitemizi artırmak için şu amaçlarla kullanılır:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Size özel dijital stratejiler, pazar analizleri ve yatırımcı portföyü raporları hazırlamak.</li>
                <li>Hizmetlerimizle ilgili güncellemeler, stratejik öneriler ve iletişim süreçlerini yürütmek.</li>
                <li>Web sitemizin performansını ölçmek ve kullanıcı deneyimini (UX) iyileştirmek.</li>
              </ul>
            </div>

            {/* Çerez Politikası */}
            <div className="space-y-4">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">4. Çerezler (Cookies) ve İzleme Teknolojileri</h2>
              <p>
                Kullanıcı deneyimini kişiselleştirmek ve reklam/performans pazarlaması (ROAS optimizasyonu) süreçlerimizin etkinliğini ölçmek için çerezler kullanıyoruz. Tarayıcı ayarlarınızdan çerezleri dilediğiniz zaman sınırlandırabilir veya tamamen devre dışı bırakabilirsiniz.
              </p>
            </div>

            {/* Haklar */}
            <div className="space-y-4">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">5. Kullanıcı Hakları ve İletişim</h2>
              <p>
                Kişisel verileriniz üzerinde erişim, düzeltme, silme ve işlenmesini kısıtlama haklarına sahipsiniz. Verilerinizle ilgili her türlü talep ve stratejik gizlilik anlaşmaları için bizimle iletişime geçebilirsiniz:
              </p>
              <p className="font-bold text-white mt-4">
                E-posta: hello@medusaglobal.com.tr
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}