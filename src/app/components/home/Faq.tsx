"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Badge from "../ui/Badge";

// Medusa Global Sıkça Sorulan Sorular Veri Seti
const faqData = [
  {
    id: 1,
    question: "Danışmanlık sürecine nasıl başlıyoruz?",
    answer:
      "Önce markanızın mevcut durumunu birlikte değerlendiririz. İhtiyacınıza göre Dijital Sağlık Kontrolü, Danışmanlık ya da doğrudan Hızlandırma sürecine geçebiliriz.",
  },
  {
    id: 2,
    question: "Hangi sektörlerle çalışıyorsunuz?",
    answer:
      "Türkiye'de büyümek isteyen orta-üst segment markalarla çalışıyoruz. 25'i aşkın markayı farklı sektörlerde sahada yönetiyoruz.",
  },
  {
    id: 3,
    question: "Dijital Sağlık Kontrolü ne kadar sürer?",
    answer:
      "14 gün içinde web sitenizi, sosyal medyanızı ve reklamlarınızı bağımsız olarak analiz eder, raporla teslim ederiz.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-12 md:py-16 bg-background transition-colors duration-500 overflow-hidden">
      {/* --- MERKEZİ ORTAM IŞIĞI (Görseldeki gibi arkadan vuran yatay mor glow) --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[20vw] max-w-[800px] max-h-[800px] bg-medusa-secondary/20 blur-[100px] rounded-full pointer-events-none transition-colors duration-700" />
      <div className="container mx-auto px-6 relative z-10">
        {/* --- ÜST BAŞLIK BÖLÜMÜ --- */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 md:mb-16 space-y-6">
          <Badge text="Sıkça Sorulan Sorular" className="mb-4" />

          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Hâlâ Sorularınız mı Var?
          </h2>
          <p className="font-sans  text-normal md:text-lg text-medusa-text-secondary">
            Aradığınız cevabı bulamadıysanız, iş süreçlerinizi otomatize etmek
            ve büyümek için doğrudan bize ulaşabilirsiniz.
          </p>
        </div>

        {/* --- AKORDEON (FAQ LIST) BÖLÜMÜ (Görseldeki Glassmorphism Yapı) --- */}
        <div className="max-w-4xl mx-auto flex flex-col space-y-5">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                // Dış Çerçeve: Sol taraftan beyaza yakın, sağa doğru mora dönen premium gradient border
                className="relative rounded-2xl p-[1px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(61,10,107,0.5)] bg-gradient-to-br from-white via-medusa-secondary to-[#853ec7] shadow-2xl transition-all duration-500 group"
                onClick={() => toggleFaq(index)}
              >
                {/* Kartın İç Zemini: Görseldeki gibi koyu, mat ve derin */}
                <div className="relative z-10 w-full h-full rounded-[calc(1rem-1px)] bg-[#141128] border border-white/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] backdrop-blur-xl">
                  {/* Soru Satırı (Header) */}
                  <div className="flex items-center justify-between px-4 py-4 ">
                    <h3
                      // leading-snug dikey ortalamayı kusursuzlaştırır, antialiased fontu daha ince ve zarif gösterir.
                      className={`font-sans text-base md:text-[16px] font-light antialiased leading-snug tracking-wide transition-colors duration-300 pr-6 md:pr-8 ${
                        isOpen
                          ? "text-white"
                          : "text-foreground group-hover:text-white"
                      }`}
                    >
                      {faq.question}
                    </h3>

                    {/* --- İKON KUTUSU (Görseldeki gibi belirgin, koyu kutu içi açık renk ikon) --- */}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
