"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

// Medusa Global Sıkça Sorulan Sorular Veri Seti
const faqData = [
  {
    id: 1,
    question: "Danışmanlık sürecine nasıl başlıyoruz?",
    answer: "Önce markanızın mevcut durumunu birlikte değerlendiririz. İhtiyacınıza göre Dijital Sağlık Kontrolü, Danışmanlık ya da doğrudan Hızlandırma sürecine geçebiliriz.",
  },
  {
    id: 2,
    question: "Hangi sektörlerle çalışıyorsunuz?",
    answer: "Türkiye'de büyümek isteyen orta-üst segment markalarla çalışıyoruz. 25'i aşkın markayı farklı sektörlerde sahada yönetiyoruz.",
  },
  {
    id: 3,
    question: "Dijital Sağlık Kontrolü ne kadar sürer?",
    answer: "14 gün içinde web sitenizi, sosyal medyanızı ve reklamlarınızı bağımsız olarak analiz eder, raporla teslim ederiz.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-24 bg-background transition-colors duration-500 overflow-hidden">
      
      {/* --- MEDUSA GLOW (MERKEZİ ORTAM IŞIĞI) --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(ellipse_at_center,var(--color-medusa-purple)_0%,transparent_70%)] opacity-15 dark:opacity-20 pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- ÜST BAŞLIK BÖLÜMÜ --- */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-6">
          
         
          <div className="relative inline-flex overflow-hidden rounded-full p-[1px] shadow-sm mb-6">
          {/* Sürekli dönen arka plan (Mor ve Spark Işığı) */}
          <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-purple)_0%,var(--color-medusa-purple)_40%,var(--color-medusa-spark)_50%,var(--color-medusa-purple)_60%,var(--color-medusa-purple)_100%)] opacity-80" />
          
          {/* İç Zemin ve Metin */}
          <div className="relative z-10 inline-flex items-center justify-center w-full h-full rounded-full bg-medusa-base-dark/95 px-4 py-1.5 backdrop-blur-md">
            <span className="font-sans text-sm font-semibold tracking-wide text-white drop-shadow-md">
            Sıkça Sorulan Sorular
            </span>
          </div>
        </div>
          
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground dark:text-white tracking-tight transition-colors duration-300">
            Hâlâ Sorularınız mı Var?
          </h2>
          <p className="font-sanstext-lg text-foreground/80 dark:text-white/70 leading-relaxed transition-colors duration-300 max-w-xl mx-auto">
            Aradığınız cevabı bulamadıysanız, iş süreçlerinizi otomatize etmek ve büyümek için doğrudan bize ulaşabilirsiniz.
          </p>
        </div>

        {/* --- AKORDEON (FAQ LIST) BÖLÜMÜ --- */}
        <div className="max-w-4xl mx-auto flex flex-col space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={faq.id} 
                // Animasyonsuz, sol taraf Spark sağ taraf Purple olacak şekilde statik gradient border
                className="relative rounded-2xl p-[1px] cursor-pointer transition-shadow duration-500 hover:shadow-[0_8px_30px_rgba(92,6,140,0.15)] bg-gradient-to-r from-medusa-spark to-medusa-purple group"
                onClick={() => toggleFaq(index)}
              >
                
                {/* Kartın iç arka planı */}
                <div className="relative z-10 w-full h-full rounded-[calc(1rem-1px)] bg-background/95 dark:bg-[#08020F]/95 backdrop-blur-xl">
                  
                  {/* Soru Satırı (Header) */}
                  <div className="flex items-center justify-between p-5 md:p-6 lg:p-8">
                    <h3 className={`font-heading text-lg md:text-xl font-semibold transition-colors duration-300 pr-8 ${isOpen ? 'text-medusa-spark' : 'text-foreground dark:text-white group-hover:text-medusa-spark'}`}>
                      {faq.question}
                    </h3>
                    
                   {/* --- İKON KUTUSU (Statik İkon + Animasyonlu Mikro Border) --- */}
                    <div className="relative inline-flex overflow-hidden rounded-xl p-[1px] flex-shrink-0 shadow-sm">
                      {/* Sadece İkon Çerçevesinde Dönen Mikro Animasyon Katmanı */}
                      <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-purple)_0%,var(--color-medusa-purple)_40%,var(--color-medusa-spark)_50%,var(--color-medusa-purple)_60%,var(--color-medusa-purple)_100%)] opacity-80" />
                      
                      {/* İkon kutusunun iç zemini */}
                      <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-[calc(0.75rem-1px)] bg-background dark:bg-[#08020F] backdrop-blur-md">
                        {isOpen ? (
                          // İkonlar artık tamamen statik ve net
                          <Minus className="w-5 h-5 text-medusa-spark" strokeWidth={2.5} />
                        ) : (
                          <Plus className="w-5 h-5 text-foreground/70 dark:text-white/70 group-hover:text-medusa-spark transition-colors" strokeWidth={2.5} />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Cevap Satırı */}
                  <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <p className="font-sans px-5 md:px-6 lg:px-8 pb-6 md:pb-8 text-foreground/80 dark:text-white/70 text-base md:text-lg leading-relaxed font-light">
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