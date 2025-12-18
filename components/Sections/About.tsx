import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { Reveal } from '../UI/Reveal';
import { useLanguage } from '../../App';
import { Waves, Clock, Sun, Coffee } from 'lucide-react';

const icons = [Waves, Clock, Sun, Coffee];

export const About: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title={t.about.title} subtitle={t.about.subtitle} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.about.services.map((service: any, index: number) => {
            const Icon = icons[index];
            return (
              <Reveal key={index} delay={index * 100}>
                <div className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-xl hover:shadow-xl transition-shadow duration-300 group bg-gray-50 hover:bg-white h-full">
                  <div className="w-16 h-16 rounded-full bg-pousada-green/10 flex items-center justify-center mb-6 group-hover:bg-pousada-green transition-colors duration-300">
                    <Icon className="text-pousada-green group-hover:text-white transition-colors" size={32} />
                  </div>
                  <h4 className="font-serif text-xl font-semibold text-gray-800 mb-3">{service.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-20 flex flex-col lg:flex-row items-center gap-12">
            <Reveal direction='left'>
                <div className="lg:w-1/2">
                    <div className="grid grid-cols-2 gap-4">
                        <img src="https://picsum.photos/id/433/400/500" className="rounded-lg shadow-lg w-full h-64 object-cover transform translate-y-8" alt="Detalhe piscina" />
                        <img src="https://picsum.photos/id/292/400/500" className="rounded-lg shadow-lg w-full h-64 object-cover" alt="Detalhe café" />
                    </div>
                </div>
            </Reveal>
            <div className="lg:w-1/2">
                <Reveal direction='right'>
                    <h3 className="font-serif text-3xl font-bold text-pousada-green mb-6">{t.about.text1}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        {t.about.text2}
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        {t.about.text3}
                    </p>
                    <a href="#contact" className="text-pousada-gold font-bold uppercase tracking-widest border-b-2 border-pousada-gold pb-1 hover:text-pousada-green hover:border-pousada-green transition-colors">
                        {t.about.contactLink}
                    </a>
                </Reveal>
            </div>
        </div>
      </div>
    </section>
  );
};