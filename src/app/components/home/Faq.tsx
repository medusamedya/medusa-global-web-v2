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
    // Tıklanan öğe zaten açıksa kapat, değilse aç
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-24 bg-background transition-colors duration-500 overflow-hidden">
      
      {/* --- MEDUSA GLOW (ORTAM IŞIKLARI) --- */}
      {/* Sağ Üst Işık */}
      <div className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-medusa-purple/5 dark:bg-medusa-glow-primary/10 blur-[100px] rounded-full pointer-events-none transition-colors duration-700 z-0" />
      
      {/* Sol Alt Işık */}
      <div className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-medusa-purple/5 dark:bg-medusa-glow-primary/10 blur-[100px] rounded-full pointer-events-none transition-colors duration-700 z-0" />


      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- ÜST BAŞLIK BÖLÜMÜ --- */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-6">
          
          {/* Animasyonlu Kurumsal İmza Badge (Mor Ağırlıklı Premium Standart) */}
          <div className="relative inline-flex overflow-hidden rounded-full p-[1px] shadow-sm">
            {/* Sürekli dönen arka plan (Genişletilmiş Mor, İnce Spark Işığı) */}
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-purple)_0%,var(--color-medusa-purple)_40%,var(--color-medusa-spark)_50%,var(--color-medusa-purple)_60%,var(--color-medusa-purple)_100%)] opacity-80" />
            
            <div className="relative z-10 inline-flex items-center justify-center w-full h-full rounded-full bg-medusa-base-dark/95 px-5 py-1.5 backdrop-blur-md">
              <span className="text-xs sm:text-sm font-semibold tracking-[0.15em] text-white uppercase drop-shadow-md">
                Sıkça Sorulan Sorular
              </span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground dark:text-white tracking-tight transition-colors duration-300">
            Hâlâ Sorularınız mı Var?
          </h2>
          <p className="text-lg text-foreground/80 dark:text-white/70 leading-relaxed transition-colors duration-300">
            Aradığınız cevabı bulamadıysanız, doğrudan bize ulaşabilirsiniz.
          </p>
        </div>

        {/* --- AKORDEON (FAQ LIST) BÖLÜMÜ --- */}
        <div className="max-w-4xl mx-auto flex flex-col space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={faq.id} 
                className="relative overflow-hidden rounded-2xl p-[1px] group cursor-pointer transition-shadow duration-300 hover:shadow-lg"
                onClick={() => toggleFaq(index)}
              >
                {/* Animasyonlu Zemin Çerçevesi (Hover veya Açık Durumda Parlar) */}
                <span className={`absolute inset-[-200%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-purple)_0%,var(--color-medusa-spark)_25%,var(--color-medusa-base-dark)_50%,var(--color-medusa-purple)_100%)] transition-opacity duration-500 ${isOpen ? 'opacity-60' : 'opacity-20 group-hover:opacity-40'}`} />
                
                {/* İç Maske / Kart İçeriği */}
                <div className="relative z-10 w-full rounded-[calc(1rem-1px)] bg-background/95 dark:bg-[#08020F]/95 backdrop-blur-xl transition-colors duration-500 border border-foreground/5 dark:border-white/5">
                  
                  {/* Soru Satırı (Header) */}
                  <div className="flex items-center justify-between p-5 md:p-6 lg:p-8">
                    <h3 className={`text-lg md:text-xl font-semibold transition-colors duration-300 pr-8 ${isOpen ? 'text-medusa-purple dark:text-medusa-spark' : 'text-foreground dark:text-white'}`}>
                      {faq.question}
                    </h3>
                    
                    {/* Artı / Eksi İkon Kutusu */}
                    <div className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl border transition-all duration-300 ${isOpen ? 'border-medusa-purple/50 bg-medusa-purple/10 dark:border-medusa-spark/50 dark:bg-medusa-spark/10' : 'border-foreground/10 bg-foreground/5 dark:border-white/10 dark:bg-white/5 group-hover:border-medusa-purple/30 dark:group-hover:border-medusa-spark/30'}`}>
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-medusa-purple dark:text-medusa-spark" />
                      ) : (
                        <Plus className="w-5 h-5 text-foreground/70 dark:text-white/70 group-hover:text-medusa-purple dark:group-hover:text-medusa-spark transition-colors" />
                      )}
                    </div>
                  </div>

                  {/* Cevap Satırı (Smooth Collapse Animation) */}
                  <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <p className="px-5 md:px-6 lg:px-8 pb-6 md:pb-8 text-foreground/80 dark:text-white/70 text-base md:text-lg leading-relaxed font-light">
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