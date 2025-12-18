import React, { useState } from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { 
  Check, 
  ArrowRight, 
  Home, 
  Users, 
  CreditCard, 
  Banknote, 
  Calendar, 
  XCircle, 
  Filter,
  Wind,
  Bed,
  Tv,
  Wifi,
  Coffee,
  Bath,
  Maximize,
  Utensils,
  Waves,
  Sun,
  ShieldCheck,
  Star
} from 'lucide-react';
import { Reveal } from '../UI/Reveal';
import { BookingModal } from '../Modals/BookingModal';
import { RoomItem } from '../../types';
import { SearchFilters, useLanguage } from '../../App';

interface RoomsProps {
  rooms: RoomItem[];
  filters: SearchFilters;
  onClearFilters: () => void;
}

const FeatureIcon = ({ feature }: { feature: string }) => {
  const text = feature.toLowerCase();
  const iconProps = { size: 16, className: "text-pousada-gold mr-3 mt-0.5 flex-shrink-0" };

  if (text.includes('ar-condicionado') || text.includes('ventilador') || text.includes('aire') || text.includes('aria')) return <Wind {...iconProps} />;
  if (text.includes('cama') || text.includes('bed') || text.includes('letto')) return <Bed {...iconProps} />;
  if (text.includes('tv') || text.includes('smart')) return <Tv {...iconProps} />;
  if (text.includes('wi-fi') || text.includes('internet')) return <Wifi {...iconProps} />;
  if (text.includes('frigobar') || text.includes('minibar') || text.includes('café') || text.includes('coffee') || text.includes('nespresso') || text.includes('adega') || text.includes('wine')) return <Coffee {...iconProps} />;
  if (text.includes('hidro') || text.includes('banheira') || text.includes('chuveiro') || text.includes('whirlpool') || text.includes('shower') || text.includes('doccia') || text.includes('bañera') || text.includes('idro')) return <Bath {...iconProps} />;
  if (text.includes('varanda') || text.includes('espaço') || text.includes('pátio') || text.includes('entrada') || text.includes('balcony') || text.includes('patio') || text.includes('balcone')) return <Maximize {...iconProps} />;
  if (text.includes('cozinha') || text.includes('kitchen') || text.includes('cottura') || text.includes('cocina')) return <Utensils {...iconProps} />;
  if (text.includes('vista') || text.includes('pôr do sol') || text.includes('view') || text.includes('sunset') || text.includes('mare') || text.includes('mar')) return <Sun {...iconProps} />;
  if (text.includes('piscina') || text.includes('mar') || text.includes('pool') || text.includes('sea')) return <Waves {...iconProps} />;
  if (text.includes('serviço') || text.includes('butler') || text.includes('service') || text.includes('maggiordomo')) return <ShieldCheck {...iconProps} />;
  
  return <Check {...iconProps} />;
};

const RoomCard = ({ room, onSelect }: { room: RoomItem, onSelect: (r: RoomItem) => void }) => {
  const { t } = useLanguage();
  
  // Look up translated name and features. Fallback to constant defaults if ID not found.
  const translatedData = t.rooms.list[room.id as keyof typeof t.rooms.list];
  const displayName = translatedData?.name || room.name;
  const displayFeatures = translatedData?.features || room.features;

  return (
    <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group h-full flex flex-col border border-gray-100">
        <div className="relative h-72 overflow-hidden">
        <img 
            src={room.image} 
            alt={displayName} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
        />
        
        <div className="absolute top-6 left-6 flex flex-col gap-2">
                <span className="bg-pousada-green text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full shadow-lg">
                {t.rooms.total} {room.id}
                </span>
                {room.numericPrice > 1000 && (
                <span className="bg-pousada-gold text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                    <Star size={10} fill="currentColor" /> Elite
                </span>
                )}
        </div>

        <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-xl flex flex-col items-end">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{t.rooms.from}</span>
            <span className="text-pousada-green font-black text-lg leading-none">{room.price}</span>
        </div>
        </div>
        
        <div className="p-8 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-4">
                <h3 className="font-serif text-2xl font-bold text-pousada-green group-hover:text-pousada-gold transition-colors">{displayName}</h3>
                <div className="flex items-center gap-1 text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                    <Users size={14} />
                    <span className="text-xs font-bold">{room.capacity}</span>
                </div>
            </div>

            <div className="h-px w-full bg-gray-100 mb-6"></div>

            <ul className="space-y-4 mb-8 flex-grow">
                {displayFeatures.map((feature: string, i: number) => (
                <li key={i} className="flex items-start text-gray-500 text-sm">
                    <FeatureIcon feature={feature} />
                    <span className="leading-tight">{feature}</span>
                </li>
                ))}
            </ul>
            
            <button 
                onClick={() => onSelect(room)}
                className="w-full bg-pousada-sand border-2 border-pousada-green/20 text-pousada-green px-6 py-4 rounded-2xl text-sm font-bold flex items-center justify-center gap-3 hover:bg-pousada-green hover:text-white hover:border-pousada-green transition-all duration-300 uppercase tracking-widest"
            >
                {t.rooms.btnBook} <ArrowRight size={18} />
            </button>
        </div>
    </div>
  );
};

export const Rooms: React.FC<RoomsProps> = ({ rooms, filters, onClearFilters }) => {
  const { t } = useLanguage();
  const [selectedRoom, setSelectedRoom] = useState<RoomItem | null>(null);

  const filteredRooms = filters.isActive
    ? rooms.filter(room => {
        const matchesCapacity = room.capacity >= filters.guests;
        const matchesPrice = room.numericPrice <= filters.maxPrice;
        const matchesFeatures = filters.features.length === 0 || filters.features.every(keyword => 
          room.name.toLowerCase().includes(keyword.toLowerCase()) || 
          room.features.some(f => f.toLowerCase().includes(keyword.toLowerCase()))
        );
        return matchesCapacity && matchesPrice && matchesFeatures;
      })
    : rooms;

  return (
    <section id="rooms" className="py-20 bg-pousada-sand">
      <div className="container mx-auto px-6">
        <SectionTitle title={t.rooms.title} subtitle={t.rooms.subtitle} />

        <Reveal>
            <div className="flex flex-col gap-6 mb-12">
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-600 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 max-w-5xl mx-auto w-full">
                    <div className="flex items-center gap-3">
                        <div className="bg-pousada-green/10 p-3 rounded-full text-pousada-green">
                            <Home size={24} />
                        </div>
                        <div>
                            <span className="block text-2xl font-bold text-pousada-green">{rooms.length} {t.rooms.total}</span>
                            <span className="text-xs font-bold uppercase tracking-wide text-gray-400">{t.rooms.total}</span>
                        </div>
                    </div>
                    <div className="hidden md:block w-px h-12 bg-gray-200"></div>
                    <div className="flex items-center gap-3">
                        <div className="bg-pousada-green/10 p-3 rounded-full text-pousada-green">
                            <Users size={24} />
                        </div>
                        <div>
                            <span className="block text-2xl font-bold text-pousada-green">
                                {rooms.reduce((acc, r) => acc + r.capacity, 0)} {t.booking.guests}
                            </span>
                            <span className="text-xs font-bold uppercase tracking-wide text-gray-400">{t.rooms.capacity}</span>
                        </div>
                    </div>
                </div>

                {filters.isActive && (
                    <div className="bg-white border-2 border-pousada-gold/30 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto w-full shadow-lg animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="flex items-center gap-4 mb-4 md:mb-0">
                            <div className="w-12 h-12 bg-pousada-gold/10 rounded-full flex items-center justify-center text-pousada-gold">
                                <Filter size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-pousada-green text-lg">{t.rooms.filterResult}</h4>
                                <div className="text-sm text-gray-500 flex flex-wrap gap-2 items-center">
                                    {t.rooms.showing} <span className="text-pousada-green font-bold">{filteredRooms.length}</span> {t.rooms.subtitle.toLowerCase()}
                                </div>
                            </div>
                        </div>
                        <button 
                            onClick={onClearFilters}
                            className="bg-red-50 text-red-600 px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all flex items-center gap-2 border border-red-100"
                        >
                            <XCircle size={16} /> {t.rooms.clear}
                        </button>
                    </div>
                )}
            </div>
        </Reveal>

        {filteredRooms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {filteredRooms.map((room, index) => (
                <Reveal key={room.id} delay={index * 50}>
                  <RoomCard room={room} onSelect={setSelectedRoom} />
                </Reveal>
            ))}
            </div>
        ) : (
            <div className="text-center py-24 bg-white rounded-[3rem] shadow-sm border border-gray-100 max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
                    <XCircle size={40} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-800 mb-2">Ops!</h3>
                <p className="text-gray-500 text-lg mb-8">Nenhuma suíte disponível para os critérios.</p>
                <button onClick={onClearFilters} className="bg-pousada-green text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-pousada-gold transition-all shadow-xl">
                    {t.rooms.clear}
                </button>
            </div>
        )}

        <Reveal delay={300}>
            <div className="mt-24 border-t border-gray-100 pt-16">
                <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
                    <div className="flex items-center gap-5 bg-white p-6 rounded-[2rem] shadow-sm border border-gray-50 hover:shadow-md transition-shadow">
                        <div className="bg-pousada-sand p-4 rounded-2xl text-pousada-green">
                            <CreditCard size={28} />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em] mb-1">{t.rooms.payment}</p>
                            <p className="font-bold text-gray-700">{t.rooms.paymentDesc}</p>
                        </div>
                    </div>
                     <div className="flex items-center gap-5 bg-white p-6 rounded-[2rem] shadow-sm border border-gray-50 hover:shadow-md transition-shadow">
                        <div className="bg-pousada-sand p-4 rounded-2xl text-pousada-green">
                            <Banknote size={28} />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em] mb-1">{t.rooms.pix}</p>
                            <p className="font-bold text-gray-700">{t.rooms.pixDesc}</p>
                        </div>
                    </div>
                     <div className="flex items-center gap-5 bg-white p-6 rounded-[2rem] shadow-sm border border-gray-50 hover:shadow-md transition-shadow">
                        <div className="bg-pousada-sand p-4 rounded-2xl text-pousada-green">
                            <Calendar size={28} />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em] mb-1">{t.rooms.stay}</p>
                            <p className="font-bold text-gray-700">{t.rooms.stayDesc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Reveal>

        {selectedRoom && (
            <BookingModal 
                room={selectedRoom} 
                isOpen={!!selectedRoom} 
                onClose={() => setSelectedRoom(null)} 
                initialCheckIn={filters.isActive ? filters.checkIn : ''}
                initialCheckOut={filters.isActive ? filters.checkOut : ''}
                initialGuests={filters.isActive ? filters.guests : 2}
            />
        )}
      </div>
    </section>
  );
};