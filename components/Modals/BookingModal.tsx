import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, CreditCard, Banknote, CheckCircle } from 'lucide-react';
import { RoomItem } from '../../types';
import { useLanguage } from '../../App';

interface BookingModalProps {
  room: RoomItem;
  isOpen: boolean;
  onClose: () => void;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialGuests?: number;
}

export const BookingModal: React.FC<BookingModalProps> = ({ 
    room, 
    isOpen, 
    onClose,
    initialCheckIn = '',
    initialCheckOut = '',
    initialGuests = 2
}) => {
  const { t } = useLanguage();
  const [checkIn, setCheckIn] = useState(initialCheckIn);
  const [checkOut, setCheckOut] = useState(initialCheckOut);
  const [guests, setGuests] = useState(initialGuests);
  const [totalPrice, setTotalPrice] = useState(0);
  const [nights, setNights] = useState(0);

  // Look up translated name and features
  const translatedData = t.rooms.list[room.id as keyof typeof t.rooms.list];
  const displayName = translatedData?.name || room.name;
  const displaySubtitle = translatedData?.features?.[0] || room.features[0];

  useEffect(() => {
    if (isOpen) {
        setCheckIn(initialCheckIn);
        setCheckOut(initialCheckOut);
        setGuests(Math.min(initialGuests, room.capacity));
    }
  }, [isOpen, room, initialCheckIn, initialCheckOut, initialGuests]);

  useEffect(() => {
    if (checkIn && checkOut) {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays > 0) {
        setNights(diffDays);
        setTotalPrice(diffDays * room.numericPrice);
      } else {
        setNights(0);
        setTotalPrice(0);
      }
    }
  }, [checkIn, checkOut, room.numericPrice]);

  const handleConfirm = () => {
    if (nights < 3) {
        alert(t.modals.minStay);
        return;
    }
    alert(`${t.modals.confirm}!\n\nQuarto: ${displayName}\nDias: ${nights}\nTotal: R$ ${totalPrice}\n\nEntraremos em contato para finalizar o pagamento.`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden relative z-10 flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
        
        {/* Close Button Mobile */}
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 bg-white/80 p-2 rounded-full md:hidden"
        >
            <X size={20} />
        </button>

        {/* Left Side: Room Image & Info */}
        <div className="md:w-2/5 relative h-48 md:h-auto">
            <img 
                src={room.image} 
                alt={displayName} 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/50"></div>
            <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-serif text-2xl font-bold">{displayName}</h3>
                <p className="text-sm opacity-90">{displaySubtitle}</p>
            </div>
        </div>

        {/* Right Side: Form & Calc */}
        <div className="md:w-3/5 p-6 md:p-8 bg-white flex flex-col">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h4 className="text-pousada-green font-bold text-lg">{t.modals.bookingTitle}</h4>
                    <p className="text-gray-500 text-sm">{t.modals.bookingSubtitle}</p>
                </div>
                <button onClick={onClose} className="hidden md:block text-gray-400 hover:text-gray-600 transition-colors">
                    <X size={24} />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">{t.booking.checkin}</label>
                    <div className="relative">
                        <Calendar size={16} className="absolute left-3 top-3 text-pousada-gold" />
                        <input 
                            type="date" 
                            className="w-full border border-gray-200 rounded-lg py-2 pl-9 pr-3 focus:ring-2 focus:ring-pousada-green/20 outline-none text-sm text-gray-700"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                        />
                    </div>
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">{t.booking.checkout}</label>
                    <div className="relative">
                        <Calendar size={16} className="absolute left-3 top-3 text-pousada-gold" />
                        <input 
                            type="date" 
                            className="w-full border border-gray-200 rounded-lg py-2 pl-9 pr-3 focus:ring-2 focus:ring-pousada-green/20 outline-none text-sm text-gray-700"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                        />
                    </div>
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">{t.booking.guests}</label>
                    <div className="relative">
                        <Users size={16} className="absolute left-3 top-3 text-pousada-gold" />
                        <select 
                            className="w-full border border-gray-200 rounded-lg py-2 pl-9 pr-3 focus:ring-2 focus:ring-pousada-green/20 outline-none text-sm text-gray-700 bg-white"
                            value={guests}
                            onChange={(e) => setGuests(Number(e.target.value))}
                        >
                            {[...Array(room.capacity)].map((_, i) => (
                                <option key={i} value={i + 1}>{i + 1} {t.rooms.capacity}</option>
                            ))}
                        </select>
                    </div>
                </div>
                 <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">{t.rooms.total} {room.id}</label>
                    <div className="w-full border border-gray-100 bg-gray-50 rounded-lg py-2 px-3 text-sm text-gray-700 font-semibold">
                        R$ {room.numericPrice.toFixed(2)}
                    </div>
                </div>
            </div>

            {/* Summary Box */}
            <div className="bg-pousada-sand p-4 rounded-xl border border-pousada-gold/20 mb-6">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 text-sm">{t.modals.nights}</span>
                    <span className="font-bold text-gray-800">{nights > 0 ? nights : '-'}</span>
                </div>
                 <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 text-sm">{t.modals.total}</span>
                    <span className="font-bold text-xl text-pousada-green">
                        {totalPrice > 0 ? `R$ ${totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}` : 'R$ 0,00'}
                    </span>
                </div>
                {nights > 0 && nights < 3 && (
                    <p className="text-xs text-red-500 mt-2 font-semibold">{t.modals.minStay}</p>
                )}
            </div>

            {/* Payment Info */}
             <div className="grid grid-cols-2 gap-2 mb-6 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                    <Banknote size={14} className="text-pousada-green" />
                    <span>Pix: {t.rooms.pixDesc}</span>
                </div>
                <div className="flex items-center gap-2">
                    <CreditCard size={14} className="text-pousada-green" />
                    <span>{t.rooms.payment}: {t.rooms.paymentDesc}</span>
                </div>
            </div>

            <button 
                onClick={handleConfirm}
                disabled={nights < 3}
                className={`w-full py-3 rounded-lg font-bold uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2
                    ${nights >= 3 
                        ? 'bg-pousada-green text-white hover:bg-pousada-gold' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
            >
                {t.modals.confirm} <CheckCircle size={18} />
            </button>

        </div>
      </div>
    </div>
  );
};