import React from 'react';
import { TESTIMONIALS } from '../../constants';
import { SectionTitle } from '../UI/SectionTitle';
import { Star, Quote } from 'lucide-react';
import { Reveal } from '../UI/Reveal';
import { useLanguage } from '../../App';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-24 bg-pousada-sand overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title={t.testimonials.title} 
          subtitle={t.testimonials.subtitle} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {TESTIMONIALS.map((item, index) => (
            <Reveal key={item.id} delay={index * 100}>
              <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full relative group">
                {/* Decoration */}
                <Quote className="text-pousada-gold/10 absolute top-8 right-10 group-hover:text-pousada-gold/20 transition-colors" size={64} />
                
                {/* Rating */}
                <div className="flex mb-6 text-pousada-gold gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                        key={i} 
                        size={18} 
                        fill={i < item.rating ? "currentColor" : "none"} 
                        className={`${i < item.rating ? "animate-in zoom-in duration-500" : "text-gray-200"}`}
                        style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
                
                {/* Text */}
                <p className="text-gray-600 italic mb-10 flex-grow leading-relaxed relative z-10">
                  "{item.text}"
                </p>
                
                {/* Footer / Author */}
                <div className="mt-auto flex items-center gap-4 pt-6 border-t border-gray-50">
                    <div className="w-12 h-12 bg-pousada-green/10 rounded-full flex items-center justify-center text-pousada-green font-bold border border-pousada-green/5">
                        {item.name.charAt(0)}
                    </div>
                    <div>
                        <h5 className="font-bold text-pousada-green text-sm">{item.name}</h5>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{item.location}</p>
                    </div>
                    <div className="ml-auto hidden sm:block">
                        <span className="text-[9px] bg-pousada-sand px-2 py-1 rounded-full text-pousada-gold font-black uppercase tracking-tighter border border-pousada-gold/10">
                            {t.testimonials.verified}
                        </span>
                    </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Call to action for Reviews */}
        <Reveal delay={600}>
            <div className="mt-20 text-center">
                <div className="inline-flex items-center gap-6 bg-white px-8 py-4 rounded-full shadow-lg border border-gray-50">
                    <p className="text-sm font-bold text-gray-500">{t.testimonials.cta}</p>
                    <a 
                        href="https://www.tripadvisor.com.br/Hotel_Review-g303492-d660905-Reviews-Baia_Do_Joao_Buzios-Armacao_dos_Buzios_State_of_Rio_de_Janeiro-m11900.html" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-pousada-green text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest hover:bg-pousada-gold transition-all"
                    >
                        {t.testimonials.btn}
                    </a>
                </div>
            </div>
        </Reveal>
      </div>
    </section>
  );
};