import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { MapPin, Sun, Camera } from 'lucide-react';
import { Reveal } from '../UI/Reveal';
import { useLanguage } from '../../App';

export const Location: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="location" className="py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <Reveal direction='left'>
                <div className="grid grid-cols-2 gap-4">
                     <img src="https://picsum.photos/id/1015/600/800" className="rounded-2xl shadow-xl w-full h-80 object-cover" alt="Búzios Paisagem" />
                     <img src="https://picsum.photos/id/1016/600/800" className="rounded-2xl shadow-xl w-full h-80 object-cover mt-12" alt="Búzios Praia" />
                </div>
            </Reveal>
          </div>

          <div className="lg:w-1/2">
            <SectionTitle title={t.location.title} subtitle={t.location.subtitle} alignment="left" />
            
            <Reveal delay={200}>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {t.location.text}
                </p>

                <div className="space-y-6">
                <div className="flex items-start">
                    <div className="bg-pousada-sand p-3 rounded-full mr-4 text-pousada-green">
                    <Sun size={24} />
                    </div>
                    <div>
                    <h4 className="font-serif font-bold text-xl text-gray-800">{t.location.beachTitle}</h4>
                    <p className="text-gray-500 text-sm mt-1">{t.location.beachDesc}</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="bg-pousada-sand p-3 rounded-full mr-4 text-pousada-green">
                    <Camera size={24} />
                    </div>
                    <div>
                    <h4 className="font-serif font-bold text-xl text-gray-800">{t.location.viewTitle}</h4>
                    <p className="text-gray-500 text-sm mt-1">{t.location.viewDesc}</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="bg-pousada-sand p-3 rounded-full mr-4 text-pousada-green">
                    <MapPin size={24} />
                    </div>
                    <div>
                    <h4 className="font-serif font-bold text-xl text-gray-800">{t.location.townTitle}</h4>
                    <p className="text-gray-500 text-sm mt-1">{t.location.townDesc}</p>
                    </div>
                </div>
                </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};