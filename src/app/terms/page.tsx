import React from "react";
import InnerHero from "../components/InnerHero";

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col w-full overflow-hidden">
      <InnerHero
        title="Kullanım Koşulları"
        accentTitle=""
        description="Medusa Global web sitesini ve sunduğumuz dijital danışmanlık hizmetlerini kullanırken tabi olduğunuz kurallar ve yasal çerçeveler."
      />

      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-12 font-sans text-medusa-text-secondary leading-relaxed">
            
            {/* Giriş */}
            <div className="space-y-4">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">1. Hizmet Kapsamı ve Kabul</h2>
              <p>
                Bu web sitesine erişerek ve Medusa Global tarafından sunulan içerik, rapor veya "Dijital Sağlık Kontrolü" gibi danışmanlık hizmetlerini inceleyerek bu kullanım koşullarını kabul etmiş sayılırsınız. Medusa Global, markaların ticari potansiyelini artırmaya yönelik strateji, içerik, prodüksiyon ve performans pazarlaması çözümleri sunan bir danışmanlık ve hızlandırma ajansıdır.
              </p>
            </div>

            {/* Fikri Mülkiyet */}
            <div className="space-y-4">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">2. Fikri Mülkiyet Hakları</h2>
              <p>
                Web sitemizde yer alan tüm metinler, grafikler, logolar, tasarım mimarileri, stratejik metodolojiler ve vaka çalışmaları (Case Studies - örn: Cool Sandalye, Latanwood projeleri vb.) Medusa Global'in mülkiyetindedir. Şirketin yazılı izni olmaksızın bu içerikler kopyalanamaz, çoğaltılamaz veya ticari amaçlarla başka platformlarda kullanılamaz.
              </p>
            </div>

            {/* Kullanıcı Sorumlulukları */}
            <div className="space-y-4">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">3. Kullanıcı Sorumlulukları</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Web sitesi üzerinden bizimle paylaşılan tüm bilgilerin (iletişim formu, marka verileri vb.) doğru ve yasalara uygun olduğunu taahhüt edersiniz.</li>
                <li>Web sitesinin veya sunucularının işleyişini bozacak, siber güvenlik tehdidi oluşturacak herhangi bir otomatize sistem, yazılım veya zararlı kod kullanımı kesinlikle yasaktır.</li>
              </ul>
            </div>

            {/* Sorumluluğun Sınırlandırılması */}
            <div className="space-y-4">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">4. Sorumluluğun Sınırlandırılması</h2>
              <p>
                Medusa Global, web sitesinde paylaşılan stratejik bilgilerin doğruluğu ve güncelliği için azami gayreti gösterir. Ancak, paylaşılan stratejiler, pazar analizleri ve performans öngörüleri genel bilgilendirme niteliğindedir. Markalara uygulanan yatırım kararları, performans bütçeleri ve ticari stratejiler pazar dinamiklerine göre değişiklik gösterebilir. Bu nedenle, web sitesindeki genel bilgilere dayanılarak alınan kararlardan doğabilecek doğrudan veya dolaylı ticari zararlardan Medusa Global sorumlu tutulamaz.
              </p>
            </div>

            {/* Değişiklikler */}
            <div className="space-y-4">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">5. Koşulların Güncellenmesi</h2>
              <p>
                Medusa Global, pazar koşullarına, yasal mevzuatlara ve hizmet altyapısına bağlı olarak önceden haber vermeksizin bu Kullanım Koşulları'nı değiştirme hakkını saklı tutar. Değişiklikler web sitesinde yayınlandığı andan itibaren geçerlilik kazanır.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}