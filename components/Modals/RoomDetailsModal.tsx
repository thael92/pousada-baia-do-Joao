import React, { useState, useEffect } from 'react';
import { X, Calendar as CalendarIcon, Users, ChevronLeft, ChevronRight, CheckCircle, Waves, Wind, Bath, ThermometerSun } from 'lucide-react';
import { RoomItem } from '../../types';
import { useLanguage } from '../../App';
import { fetchAvailabilities, ROOM_TO_PLACE_TYPE } from '../../services/hospedin';

interface RoomDetailsModalProps {
    room: RoomItem;
    isOpen: boolean;
    onClose: () => void;
    onBookNow: (checkIn: string, checkOut: string, guests: number) => void;
}

const FeatureIcon = ({ feature }: { feature: string }) => {
    const text = feature.toLowerCase();
    const iconProps = { size: 16, className: "text-pousada-gold mr-3 mt-0.5 flex-shrink-0" };
    if (text.includes('ar-condicionado')) return <Wind {...iconProps} />;
    if (text.includes('banheira') || text.includes('chuveiro')) return <Bath {...iconProps} />;
    if (text.includes('vista') || text.includes('sol')) return <ThermometerSun {...iconProps} />;
    if (text.includes('piscina') || text.includes('mar')) return <Waves {...iconProps} />;
    return <CheckCircle {...iconProps} />;
};

export const RoomDetailsModal: React.FC<RoomDetailsModalProps> = ({ room, isOpen, onClose, onBookNow }) => {
    const { t } = useLanguage();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [availabilities, setAvailabilities] = useState<Record<string, { available: boolean, price: number }>>({});
    const [isLoadingCalendar, setIsLoadingCalendar] = useState(false);

    // Basic date selection state
    const [checkIn, setCheckIn] = useState<string>('');
    const [checkOut, setCheckOut] = useState<string>('');
    const [guests, setGuests] = useState(1);

    const images = room.gallery && room.gallery.length > 0 ? room.gallery : [room.image];

    useEffect(() => {
        if (isOpen) {
            setCurrentImageIndex(0);
            const now = new Date();
            setCurrentMonth(new Date(now.getFullYear(), now.getMonth(), 1));
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            loadCalendarData(currentMonth);
        }
    }, [isOpen, currentMonth]);

    const loadCalendarData = async (date: Date) => {
        const placeTypeId = ROOM_TO_PLACE_TYPE[room.id];
        if (!placeTypeId) return;

        setIsLoadingCalendar(true);

        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1).toISOString().split('T')[0];
        const lastDay = new Date(year, month + 1, 0).toISOString().split('T')[0];

        try {
            const data = await fetchAvailabilities(placeTypeId, firstDay, lastDay);
            const availabilityMap: Record<string, { available: boolean, price: number }> = {};
            data.forEach(item => {
                availabilityMap[item.date] = {
                    available: item.availability > 0,
                    price: item.rate_price
                };
            });
            setAvailabilities(availabilityMap);
        } catch (error) {
            console.error("Failed to load calendar data", error);
        } finally {
            setIsLoadingCalendar(false);
        }
    };

    const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
    const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

    // Calendar rendering helpers
    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
    const startDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

    const handleDateClick = (dateStr: string) => {
        if (!availabilities[dateStr]?.available && availabilities[dateStr] !== undefined) return;

        if (!checkIn || (checkIn && checkOut)) {
            setCheckIn(dateStr);
            setCheckOut('');
        } else {
            if (new Date(dateStr) > new Date(checkIn)) {
                setCheckOut(dateStr);
            } else {
                setCheckIn(dateStr);
                setCheckOut('');
            }
        }
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 z-[70] flex items-center justify-center p-0 md:p-6 pb-0">
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>

                <div className="bg-white md:rounded-3xl w-full h-full md:h-auto max-w-6xl md:max-h-[90vh] overflow-y-auto relative z-10 flex flex-col md:flex-row shadow-2xl animate-in slide-in-from-bottom-8 duration-300">

                    <button onClick={onClose} className="fixed md:absolute top-4 right-4 z-50 bg-white/50 backdrop-blur p-2 rounded-full text-gray-800 hover:bg-white transition-colors">
                        <X size={24} />
                    </button>

                    {/* Left side: Gallery */}
                    <div className="w-full md:w-1/2 relative bg-black min-h-[40vh] md:min-h-full flex items-center justify-center group">
                        <img
                            src={images[currentImageIndex]}
                            alt={room.name}
                            className="w-full h-full object-cover md:absolute inset-0 cursor-pointer"
                            onClick={() => setIsFullScreen(true)}
                        />

                        {images.length > 1 && (
                            <>
                                <button onClick={prevImage} className="absolute left-4 bg-black/30 hover:bg-black/60 text-white p-2 text-2xl rounded-full opacity-0 group-hover:opacity-100 transition-all"><ChevronLeft /></button>
                                <button onClick={nextImage} className="absolute right-4 bg-black/30 hover:bg-black/60 text-white p-2 text-2xl rounded-full opacity-0 group-hover:opacity-100 transition-all"><ChevronRight /></button>
                                <div className="absolute bottom-4 flex gap-2 w-full justify-center px-4">
                                    {images.map((img, idx) => (
                                        <div key={idx} onClick={() => setCurrentImageIndex(idx)} className={`h-1.5 rounded-full cursor-pointer transition-all ${idx === currentImageIndex ? 'w-8 bg-white' : 'w-4 bg-white/40 hover:bg-white/70'}`} />
                                    ))}
                                </div>
                            </>
                        )}
                        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur text-white text-xs py-1 px-3 rounded-full flex items-center gap-2 cursor-pointer hover:bg-black" onClick={() => setIsFullScreen(true)}>
                            Ampliar Foto
                        </div>
                    </div>

                    {/* Right side: Details & Calendar */}
                    <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col items-start bg-white relative">

                        <div className="w-full border-b border-gray-100 pb-6 mb-6">
                            <div className="flex justify-between items-start mb-2">
                                <h2 className="font-serif text-3xl font-bold text-pousada-green">{room.name}</h2>
                                <div className="bg-gray-50 flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold text-gray-400">
                                    <Users size={16} /> Até {room.capacity}
                                </div>
                            </div>
                            <p className="text-gray-500 leading-relaxed text-sm mt-4">
                                {room.description || "Quarto confortável e finamente decorado na Pousada Baía do João."}
                            </p>
                        </div>

                        <div className="w-full mb-8">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Facilidades</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {room.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-xs text-gray-600 font-medium">
                                        <FeatureIcon feature={feature} /> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Calendar Widget */}
                        <div className="w-full bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-8">
                            <div className="flex justify-between items-center mb-6">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-pousada-green flex items-center gap-2">
                                    <CalendarIcon size={18} /> Disponibilidade na API
                                </h4>
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))}
                                        className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                                    ><ChevronLeft size={20} /></button>
                                    <span className="font-bold text-gray-700 min-w-[120px] text-center">
                                        {currentMonth.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
                                    </span>
                                    <button
                                        onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))}
                                        className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                                    ><ChevronRight size={20} /></button>
                                </div>
                            </div>

                            <div className="relative">
                                {isLoadingCalendar && (
                                    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center rounded-xl">
                                        <div className="w-8 h-8 border-4 border-pousada-green border-t-transparent rounded-full animate-spin mb-2"></div>
                                        <span className="text-xs font-bold text-pousada-green">Sincronizando...</span>
                                    </div>
                                )}

                                <div className="grid grid-cols-7 gap-1 text-center mb-2">
                                    {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((d, i) => (
                                        <div key={i} className="text-[10px] font-bold text-gray-400">{d}</div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-7 gap-1">
                                    {[...Array(startDay)].map((_, i) => (
                                        <div key={`empty-${i}`} className="h-10"></div>
                                    ))}
                                    {[...Array(daysInMonth)].map((_, i) => {
                                        const day = i + 1;
                                        const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                                        const isAvail = availabilities[dateStr]?.available;
                                        const price = availabilities[dateStr]?.price;
                                        const isUnknown = availabilities[dateStr] === undefined;

                                        const isSelected = dateStr === checkIn || dateStr === checkOut;
                                        const isBetween = checkIn && checkOut && new Date(dateStr) > new Date(checkIn) && new Date(dateStr) < new Date(checkOut);

                                        return (
                                            <div
                                                key={day}
                                                onClick={() => handleDateClick(dateStr)}
                                                className={`
                                         h-10 flex flex-col items-center justify-center rounded-lg cursor-pointer text-xs font-medium border border-transparent transition-all
                                         ${isUnknown ? 'bg-white text-gray-600 hover:border-gray-200' : ''}
                                         ${isAvail && !isSelected && !isBetween ? 'bg-emerald-50 text-emerald-700 hover:border-emerald-200' : ''}
                                         ${!isAvail && !isUnknown ? 'bg-red-50 text-red-300 opacity-50 cursor-not-allowed line-through' : ''}
                                         ${isSelected ? 'bg-pousada-green text-white font-bold shadow-md transform scale-105' : ''}
                                         ${isBetween ? 'bg-pousada-green/20 text-pousada-green' : ''}
                                     `}
                                                title={price ? `R$ ${price}` : ''}
                                            >
                                                <span>{day}</span>
                                                {price && isAvail && !isSelected && <span className="text-[8px] opacity-70 leading-none mt-0.5">{price}</span>}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="w-full mt-auto pt-6 bg-white border-t border-gray-100 flex flex-col sm:flex-row items-center gap-4">
                            <div className="w-full sm:w-auto flex-grow flex flex-col">
                                <span className="text-[10px] uppercase font-bold text-gray-400">A partir de</span>
                                <span className="text-2xl font-black text-pousada-green">{room.price}</span>
                            </div>
                            <button
                                disabled={!checkIn || !checkOut}
                                onClick={() => onBookNow(checkIn, checkOut, guests)}
                                className="w-full sm:w-auto bg-pousada-green text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-pousada-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-xl flex justify-center items-center"
                            >
                                {checkIn && checkOut ? 'Prosseguir Reserva' : 'Selecione Datas'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full Screen Lightbox */}
            {isFullScreen && (
                <div className="fixed inset-0 z-[80] bg-black flex flex-col">
                    <div className="flex justify-between items-center p-6 text-white absolute top-0 w-full z-10 bg-gradient-to-b from-black/80 to-transparent">
                        <div className="text-sm font-bold tracking-widest uppercase">{room.name} • {currentImageIndex + 1} de {images.length}</div>
                        <button onClick={() => setIsFullScreen(false)} className="hover:text-pousada-gold transition-colors"><X size={32} /></button>
                    </div>
                    <div className="flex-grow flex items-center justify-center relative">
                        <button onClick={prevImage} className="absolute left-6 text-white hover:text-pousada-gold p-4 text-4xl"><ChevronLeft size={48} /></button>
                        <img src={images[currentImageIndex]} alt="Gallery Full" className="max-w-full max-h-[90vh] object-contain" />
                        <button onClick={nextImage} className="absolute right-6 text-white hover:text-pousada-gold p-4 text-4xl"><ChevronRight size={48} /></button>
                    </div>
                </div>
            )}
        </>
    );
};
