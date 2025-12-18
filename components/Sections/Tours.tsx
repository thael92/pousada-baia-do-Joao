import React, { useState } from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { Reveal } from '../UI/Reveal';
import { TourModal } from '../Modals/TourModal';
import { useLanguage } from '../../App';

const tourImages = [
  "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1544551763-8dd44758c2dd?auto=format&fit=crop&q=80&w=800"
];

export const Tours: React.FC = () => {
  const { t } = useLanguage();
  const [selectedTour, setSelectedTour] = useState<any | null>(null);

  return (
    <section id="tours" className="py-20 bg-pousada-green text-white">
      <div className="container mx-auto px-6">
        <SectionTitle title={t.tours.title} subtitle={t.tours.subtitle} light={true} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.tours.items.map((tour: any, index: number) => (
            <Reveal key={index} delay={index * 150} direction='up'>
              <div 
                className="group relative overflow-hidden rounded-xl h-96 cursor-pointer"
                onClick={() => setSelectedTour({ ...tour, image: tourImages[index], gallery: [tourImages[index]] })}
              >
                <img 
                  src={tourImages[index]} 
                  alt={tour.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif text-2xl font-bold mb-2 text-white border-l-4 border-pousada-gold pl-3">
                    {tour.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed line-clamp-2">
                    {tour.desc}
                  </p>
                  <span className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-pousada-gold group-hover:text-white">
                    {t.tours.more} &rarr;
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        
        <div className="text-center mt-12">
            <Reveal>
                <p className="text-gray-300 italic mb-4">{t.tours.help}</p>
            </Reveal>
        </div>

        {selectedTour && (
            <TourModal 
                tour={{
                    ...selectedTour,
                    fullDescription: selectedTour.desc,
                    duration: "3-4h",
                    priceInfo: "---",
                    included: []
                }} 
                isOpen={!!selectedTour} 
                onClose={() => setSelectedTour(null)} 
            />
        )}
      </div>
    </section>
  );
};