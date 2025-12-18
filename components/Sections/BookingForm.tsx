import React, { useState } from 'react';
import { Calendar, Users, Search, SlidersHorizontal, ChevronDown, Waves, Wind, Bath, UtensilsCrossed } from 'lucide-react';
import { Reveal } from '../UI/Reveal';
import { SearchFilters, useLanguage } from '../../App';

interface BookingFormProps {
  onSearch: (data: Omit<SearchFilters, 'isActive'>) => void;
}

const FEATURE_OPTIONS = [
  { id: 'Vista', label: 'Vista Mar', icon: Waves },
  { id: 'Ar-Condicionado', label: 'Ar Condicionado', icon: Wind },
  { id: 'Hidro', label: 'Hidromassagem', icon: Bath },
  { id: 'Cozinha', label: 'Cozinha', icon: UtensilsCrossed },
];

export const BookingForm: React.FC<BookingFormProps> = ({ onSearch }) => {
  const { t } = useLanguage();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const toggleFeature = (feature: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) ? prev.filter(f => f !== feature) : [...prev, feature]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ 
      checkIn, 
      checkOut, 
      guests, 
      maxPrice, 
      features: selectedFeatures 
    });
  };

  return (
    <section id="booking" className="relative z-20 -mt-16 md:-mt-24 container mx-auto px-4 mb-20">
      <Reveal direction='up'>
        <div className="bg-white rounded-[2rem] shadow-2xl p-6 md:p-10 border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="font-serif text-3xl text-pousada-green font-bold">{t.booking.title}</h3>
              <p className="text-gray-400 text-sm mt-1 uppercase tracking-widest font-bold">{t.booking.subtitle}</p>
            </div>
            <button 
              type="button"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${showAdvanced ? 'bg-pousada-green text-white border-pousada-green' : 'bg-pousada-sand text-pousada-green border-pousada-green/20 hover:bg-pousada-sand/80'}`}
            >
              <SlidersHorizontal size={18} />
              {showAdvanced ? t.booking.hide : t.booking.advanced}
              <ChevronDown size={16} className={`transition-transform duration-300 ${showAdvanced ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">{t.booking.checkin}</label>
                <div className="relative group">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-pousada-gold group-focus-within:text-pousada-green transition-colors" size={20} />
                  <input
                    type="date"
                    required
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-pousada-green/20 focus:bg-white outline-none text-gray-700 font-bold transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">{t.booking.checkout}</label>
                <div className="relative group">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-pousada-gold group-focus-within:text-pousada-green transition-colors" size={20} />
                  <input
                    type="date"
                    required
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-pousada-green/20 focus:bg-white outline-none text-gray-700 font-bold transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">{t.booking.guests}</label>
                <div className="relative group">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-pousada-gold group-focus-within:text-pousada-green transition-colors" size={20} />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full pl-12 pr-10 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-pousada-green/20 focus:bg-white outline-none text-gray-700 font-bold transition-all appearance-none cursor-pointer"
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                </div>
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full bg-pousada-green text-white font-black py-4 px-8 rounded-2xl hover:bg-pousada-gold transition-all shadow-xl hover:-translate-y-1 uppercase tracking-[0.15em] flex items-center justify-center gap-3"
                >
                  <Search size={22} /> {t.booking.search}
                </button>
              </div>
            </div>
          </form>
        </div>
      </Reveal>
    </section>
  );
};