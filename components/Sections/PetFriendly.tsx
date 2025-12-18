import React from 'react';
import { Dog, Heart } from 'lucide-react';
import { Reveal } from '../UI/Reveal';
import { useLanguage } from '../../App';

export const PetFriendly: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="pet" className="py-20 bg-orange-50">
      <div className="container mx-auto px-6">
        <Reveal>
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 relative h-64 md:h-auto">
                <img 
                src="https://picsum.photos/id/1025/800/800" 
                alt="Cachorro na praia" 
                className="w-full h-full object-cover" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                    <Dog className="text-pousada-green" size={32} />
                </div>
            </div>
            
            <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                <span className="text-pousada-gold font-bold uppercase tracking-widest text-sm mb-2">{t.pet.subtitle}</span>
                <h2 className="font-serif text-4xl font-bold text-pousada-green mb-6">{t.pet.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t.pet.text}
                </p>
                
                <ul className="space-y-4">
                <li className="flex items-center text-gray-700">
                    <Heart size={20} className="text-red-400 mr-3" />
                    {t.pet.kit}
                </li>
                <li className="flex items-center text-gray-700">
                    <Heart size={20} className="text-red-400 mr-3" />
                    {t.pet.areas}
                </li>
                <li className="flex items-center text-gray-700">
                    <Heart size={20} className="text-red-400 mr-3" />
                    {t.pet.rules}
                </li>
                </ul>
            </div>
            </div>
        </Reveal>
      </div>
    </section>
  );
};