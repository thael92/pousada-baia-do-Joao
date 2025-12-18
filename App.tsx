import React, { useState, useEffect, createContext, useContext } from 'react';
import { Header } from './components/Layout/Header';
import { Hero } from './components/Sections/Hero';
import { BookingForm } from './components/Sections/BookingForm';
import { About } from './components/Sections/About';
import { Rooms } from './components/Sections/Rooms';
import { Location } from './components/Sections/Location';
import { Tours } from './components/Sections/Tours';
import { PetFriendly } from './components/Sections/PetFriendly';
import { Tripadvisor } from './components/Sections/Tripadvisor';
import { Testimonials } from './components/Sections/Testimonials';
import { Footer } from './components/Layout/Footer';
import { AdminPanel } from './components/Admin/AdminPanel';
import { ContentPage } from './components/UI/ContentPage';
import { ROOMS as INITIAL_ROOMS } from './constants';
import { RoomItem } from './types';
import { Language, translations } from './translations';

export interface SearchFilters {
  checkIn: string;
  checkOut: string;
  guests: number;
  maxPrice: number;
  features: string[];
  isActive: boolean;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};

function App() {
  const [language, setLanguage] = useState<Language>('pt');
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [currentView, setCurrentView] = useState<string>('home');
  const [rooms, setRooms] = useState<RoomItem[]>([]);
  const [filters, setFilters] = useState<SearchFilters>({
    checkIn: '',
    checkOut: '',
    guests: 2,
    maxPrice: 2000,
    features: [],
    isActive: false
  });

  const t = translations[language];

  useEffect(() => {
    const savedRooms = localStorage.getItem('pousada_rooms');
    if (savedRooms) {
      setRooms(JSON.parse(savedRooms));
    } else {
      setRooms(INITIAL_ROOMS);
      localStorage.setItem('pousada_rooms', JSON.stringify(INITIAL_ROOMS));
    }
  }, []);

  const handleUpdateRooms = (updatedRooms: RoomItem[]) => {
    setRooms(updatedRooms);
    localStorage.setItem('pousada_rooms', JSON.stringify(updatedRooms));
  };

  const handleSearch = (data: Omit<SearchFilters, 'isActive'>) => {
    setFilters({ ...data, isActive: true });
    setCurrentView('home');
    setTimeout(() => {
      const roomsSection = document.getElementById('rooms');
      if (roomsSection) {
        const headerOffset = 160;
        const elementPosition = roomsSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 100);
  };

  const handleClearFilters = () => {
    setFilters({ 
      checkIn: '', 
      checkOut: '', 
      guests: 2, 
      maxPrice: 2000,
      features: [],
      isActive: false 
    });
  };

  const navigateTo = (viewId: string) => {
    setCurrentView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className="min-h-screen flex flex-col font-sans">
        <Header onOpenPage={navigateTo} currentView={currentView} />
        
        <main className="flex-grow pt-[140px] md:pt-[160px]">
          {currentView === 'home' ? (
            <>
              <Hero />
              <BookingForm onSearch={handleSearch} />
              <Rooms 
                rooms={rooms} 
                filters={filters} 
                onClearFilters={handleClearFilters} 
              />
              <About />
              <Location />
              <Tours />
              <PetFriendly />
              <Tripadvisor />
              <Testimonials />
            </>
          ) : (
            <ContentPage 
              pageId={currentView} 
              onClose={() => navigateTo('home')} 
            />
          )}
        </main>

        <Footer onOpenAdmin={() => setIsAdminOpen(true)} onNavigate={navigateTo} />
        
        {isAdminOpen && (
          <AdminPanel 
            rooms={rooms} 
            onUpdateRooms={handleUpdateRooms} 
            onClose={() => setIsAdminOpen(false)} 
          />
        )}
      </div>
    </LanguageContext.Provider>
  );
}

export default App;