import React, { useState } from 'react';
import { X, Clock, CheckCircle, Info, Map } from 'lucide-react';
import { TourItem } from '../../types';

interface TourModalProps {
  tour: TourItem;
  isOpen: boolean;
  onClose: () => void;
}

export const TourModal: React.FC<TourModalProps> = ({ tour, isOpen, onClose }) => {
  const [activeImage, setActiveImage] = useState(tour.gallery[0] || tour.image);

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "5521983673037"; // Número extraído do rodapé
    const message = encodeURIComponent(`Olá! Gostaria de agendar o passeio: *${tour.title}* durante minha estadia na Pousada Baía do João. Pode me passar mais informações sobre disponibilidade?`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden relative z-10 flex flex-col md:flex-row h-[90vh] md:h-auto animate-in zoom-in-95 duration-300">
        
        {/* Close Button Mobile */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-white p-2 rounded-full text-gray-800 shadow-lg transition-all md:hidden"
        >
          <X size={24} />
        </button>

        {/* Gallery Section (Left) */}
        <div className="md:w-1/2 bg-gray-100 flex flex-col h-1/2 md:h-auto">
            {/* Main Image */}
            <div className="flex-grow relative overflow-hidden">
                <img 
                    src={activeImage} 
                    alt={tour.title} 
                    className="w-full h-full object-cover transition-all duration-500"
                />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2 p-4 bg-white/50 backdrop-blur-sm overflow-x-auto">
                {tour.gallery.map((img, idx) => (
                    <button 
                        key={idx}
                        onClick={() => setActiveImage(img)}
                        className={`w-20 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${activeImage === img ? 'border-pousada-green opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
                    >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>
        </div>

        {/* Info Section (Right) */}
        <div className="md:w-1/2 p-8 md:p-10 flex flex-col h-1/2 md:h-auto overflow-y-auto bg-white relative">
             {/* Close Button Desktop */}
            <button 
                onClick={onClose}
                className="absolute top-6 right-6 z-20 text-gray-400 hover:text-gray-800 hidden md:block"
            >
                <X size={28} />
            </button>

            <div className="mb-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-pousada-green mb-2">{tour.title}</h2>
                <div className="w-20 h-1 bg-pousada-gold rounded-full"></div>
            </div>

            <div className="prose prose-sm text-gray-600 mb-8 leading-relaxed">
                <p>{tour.fullDescription}</p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-pousada-sand p-4 rounded-xl border border-gray-100">
                    <div className="flex items-center text-pousada-green mb-2">
                        <Clock size={20} className="mr-2" />
                        <span className="font-bold text-sm uppercase">Duração</span>
                    </div>
                    <p className="text-gray-700 font-semibold">{tour.duration}</p>
                </div>
                 <div className="bg-pousada-sand p-4 rounded-xl border border-gray-100">
                    <div className="flex items-center text-pousada-green mb-2">
                        <Info size={20} className="mr-2" />
                        <span className="font-bold text-sm uppercase">Valor</span>
                    </div>
                    <p className="text-gray-700 font-semibold">{tour.priceInfo}</p>
                </div>
            </div>

            <div className="mb-8">
                <h4 className="font-bold text-gray-800 uppercase text-xs tracking-widest mb-4">O que está incluso</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {tour.included.map((item, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                            <CheckCircle size={16} className="text-pousada-gold mr-2 flex-shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-auto pt-6 border-t border-gray-100">
                <button 
                    onClick={handleWhatsAppRedirect}
                    className="w-full bg-pousada-green text-white font-bold py-4 rounded-xl hover:bg-pousada-gold transition-colors shadow-lg uppercase tracking-wider flex items-center justify-center gap-2"
                >
                    <Map size={20} />
                    Agendar na Recepção
                </button>
            </div>

        </div>

      </div>
    </div>
  );
};