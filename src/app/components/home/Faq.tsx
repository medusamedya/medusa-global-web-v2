"use client";

import React, { useState } from "react";
import { Plus, Minus, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // <-- Framer Motion Eklendi
import Badge from "../ui/Badge";

// Medusa Global Sıkça Sorulan Sorular Veri Seti
const faqData = [
  {
    id: 1,
    question: "Danışmanlık sürecine nasıl başlıyoruz?",
    answer:
      "Süreç, tanışma görüşmesiyle başlar. Bu görüşmede markanızın mevcut durumunu, hedeflerini ve kısıtlarını birlikte konuşuruz. Ardından ekibimiz markanızın dijital varlıklarını, iletişim yapısını ve büyüme potansiyelini analiz eder; size özel bir yol haritası ve hizmet paketi sunarız. Anlaşma sonrası ilk 30 gün, birlikte çalışacağımız sistemin kurulmasına ayrılır; brief formatı, raporlama düzeni, iletişim kanalları ve karar akışları netleştirilir.",
  },
  {
    id: 2,
    question: "Hangi sektörlerle çalışıyorsunuz?",
    answer:
      "Sektör bağımsız çalışıyoruz; markanın büyüme ihtiyacı ve bizim uzmanlık alanlarımızın örtüşmesi bizim için sektörden daha belirleyici. Portföyümüzde hukuk teknolojisi, sağlık, gayrimenkul, perakende, gastronomi, moda, çocuk ve eğitim alanlarından markalar yer alıyor. Farklı sektörlerde çalışmamız, deneyimlerimizi çapraz ilerlemeye çevirmemizi sağlıyor ve bir kategorideki iyi bir strateji, başka bir kategorinin sıçrama noktası olabiliyor.",
  },
  {
    id: 3,
    question: "Hangi hizmetleri sunuyorsunuz?",
    answer:
      "Medusa Global'ın hizmetleri dört ana başlıkta toplanır: Marka İletişimi & Strateji, Dijital Pazarlama & Reklam Yönetimi, Yaratıcı Prodüksiyon (foto, video, tanıtım filmi), ve Dijital Sistem & Branding. Bu hizmetleri tekil olarak değil, birbirini besleyen bir sistem olarak kurguluyoruz; bir markanın kimliğinden reklamına, içeriğinden web sitesine kadar tüm dokunuşların aynı stratejik hikayeyi taşıması bizim için temel yaklaşımdır.",
  },
  {
    id: 4,
    question: "Bir markayla ne kadar süreyle çalışıyorsunuz?",
    answer:
      "Aylık hizmet paketlerimiz genellikle 12 aylık dönemler halinde ilerler; proje bazlı işler (kimlik tasarımı, web geliştirme, tanıtım filmi) tek seferlik teslimat şeklindedir. Uzun soluklu çalışma tercih etmemizin sebebi, marka büyümesinin 3-6 aylık kısa döngülerde ölçülebilir sonuca dönüşmemesi; gerçek dönüşüm için sistemli ve sabırlı bir çalışma gerekir. Süreç boyunca üç ayda bir performans değerlendirmesi yapar, gerekirse stratejiyi yeniden şekillendiririz.",
  },
  {
    id: 5,
    question: "Muhatabım kim olacak?",
    answer:
      "Her marka için bir Marka Operasyon Yöneticisi atanır; günlük iletişim, raporlama ve süreç koordinasyonu bu kişi üzerinden yürür. Yaratıcı, teknik ve stratejik konularda ilgili uzmanlar (tasarımcı, reklam uzmanı, prodüksiyon ekibi, strateji danışmanı) süreçte devrede olur. Ekibimizin yapısı sizi tek bir kişiye bağımlı bırakmayacak şekilde kurgulanmıştır.",
  },
  {
    id: 6,
    question: "Raporlama ve iletişim nasıl işliyor?",
    answer:
      "Aylık ve haftalık performans raporları standarttır: reklam sonuçları, sosyal medya metrikleri, web trafiği ve marka büyümesine dair somut veriler. Bunun yanında iki haftada bir düzenli online toplantı, WhatsApp üzerinden hızlı iletişim ve önemli kararlar için yüz yüze görüşmeler süreci besler. Şeffaflık bizim için bir ilke: kampanya sonuçları, harcamalar ve stratejik kararlar açıkça paylaşılır.",
  },
  {
    id: 7,
    question: "Hizmet paketlerinin ücretleri nasıl belirleniyor?",
    answer:
      "Fiyatlandırmayı hizmet kapsamına, marka büyüklüğüne ve hedeflere göre birlikte belirliyoruz, standart bir paket listesi ile başlamıyoruz çünkü her markanın ihtiyacı farklı. Tanışma görüşmesi sonrasında hazırlanan öneri dosyasında hizmet kalemleri, aylık yatırım tutarı ve beklenen sonuçlar net olarak yer alır. Şeffaflık açısından: reklam bütçeleri hizmet ücretinden ayrıdır ve tamamen sizin kontrolünüzdedir.",
  },
  {
    id: 8,
    question: "Mevcut ekibimiz veya ajansımız varsa nasıl ilerliyoruz?",
    answer:
      "Bu çok karşılaştığımız bir durum. Bazı markalarda kendi iç ekibiyle birlikte çalışıyor, stratejik danışman rolünde ilerliyoruz; bazılarında mevcut ajans yapısını bizim sistemimize entegre ediyoruz. Amaç sizin ekibinizi yerinden etmek değil, doğru yerde konumlandırıp büyümeye odaklamak. Görüşmede mevcut yapınızı birlikte inceler, en verimli işbirliği modelini öneririz.",
  },
];

interface FAQProps {
  showMore?: boolean;
  initialCount?: number;
}

export default function FAQ({ showMore = false, initialCount = 4 }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(!showMore);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-12 md:py-16 bg-background transition-colors duration-500 overflow-hidden">
      
      {/* --- MERKEZİ ORTAM IŞIĞI --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[20vw] max-w-[800px] max-h-[800px] bg-medusa-secondary/20 blur-[100px] rounded-full pointer-events-none transition-colors duration-700" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- ÜST BAŞLIK BÖLÜMÜ --- */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 md:mb-16 space-y-6">
          <Badge text="Sıkça Sorulan Sorular" className="mb-4" />
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Hâlâ Sorularınız mı Var?
          </h2>
          <p className="font-sans text-normal md:text-lg text-medusa-text-secondary">
            Aradığınız cevabı bulamadıysanız, markanızın büyüme yolculuğunu birlikte konuşmak için doğrudan bize ulaşabilirsiniz.
          </p>
        </div>

        {/* --- AKORDEON (FAQ LIST) BÖLÜMÜ --- */}
        {/* space-y yerine gap kullandık ki animasyon esnasında daha stabil davransın */}
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <AnimatePresence initial={false}>
            {faqData.map((faq, index) => {
              const isVisible = !showMore || isExpanded || index < initialCount;
              const isOpen = openIndex === index;

              if (!isVisible) return null;

              return (
                <motion.div
                  key={faq.id}
                  // Buradaki initial, animate ve exit ayarları kartların yumuşakça aşağı kayarak belirmesini sağlar
                  initial={{ opacity: 0, height: 0, scale: 0.95 }}
                  animate={{ opacity: 1, height: "auto", scale: 1 }}
                  exit={{ opacity: 0, height: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                  style={{ overflow: "hidden" }} // Animasyon sırasında taşmaları gizler
                >
                  {/* Gölgelerin (shadow-2xl) "overflow-hidden" yüzünden kesilmemesi için ufak bir koruyucu boşluk (py-1 px-1) */}
                  <div className="py-1 px-1">
                    <div
                      className="relative rounded-2xl p-[1px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(61,10,107,0.5)] bg-gradient-to-br from-white via-medusa-secondary to-[#853ec7] shadow-2xl group"
                      onClick={() => toggleFaq(index)}
                    >
                      <div className="relative z-10 w-full h-full rounded-[calc(1rem-1px)] bg-[#141128] border border-white/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] backdrop-blur-xl">
                        
                        {/* Soru Satırı (Header) */}
                        <div className="flex items-center text-center justify-between px-3 py-3 ">
                          <h3
                            className={`font-sans flex items-center text-base md:text-[16px] font-light antialiased leading-snug tracking-wide transition-colors duration-300 pl-6 pr-6 md:pr-12 ${
                              isOpen
                                ? "text-white"
                                : "text-foreground group-hover:text-white"
                            }`}
                          >
                            {faq.question}
                          </h3>

                          {/* İKON KUTUSU */}
                          <div className="relative flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-xl bg-white/5 border border-white/10 shrink-0 group-hover:bg-white/10 transition-colors duration-300 shadow-inner">
                            {isOpen ? (
                              <Minus
                                className="w-5 h-5 text-medusa-purple-light transition-transform duration-300 rotate-0"
                                strokeWidth={2}
                              />
                            ) : (
                              <Plus
                                className="w-5 h-5 text-medusa-purple-light transition-transform duration-300 rotate-90"
                                strokeWidth={2}
                              />
                            )}
                          </div>
                        </div>

                        {/* Cevap Satırı */}
                        <div
                          className={`grid transition-all duration-500 ease-in-out ${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="font-sans px-5 md:px-6 lg:px-8 pb-6 md:pb-8 text-medusa-text-secondary text-base leading-relaxed font-light">
                              {faq.answer}
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* --- 3. DAHA FAZLA GÖSTER BUTONU --- */}
        {showMore && (
          <motion.div 
            layout 
            className="flex justify-center mt-8"
          >
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-sans text-sm font-medium hover:bg-white/10 hover:border-medusa-purple-light/50 transition-all duration-300 group"
            >
              {isExpanded ? "Daha Az Göster" : "Tüm Soruları Göster"}
              <ChevronDown 
                className={`w-4 h-4 transition-transform duration-500 ${isExpanded ? "rotate-180" : ""}`} 
              />
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}