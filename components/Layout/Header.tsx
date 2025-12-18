import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../../constants';
import { useLanguage } from '../../App';
import { Language } from '../../translations';

interface HeaderProps {
  onOpenPage: (pageId: string) => void;
  currentView: string;
}

const LANGUAGES: { code: Language; flag: string; label: string }[] = [
  { code: 'en', flag: 'us', label: 'English' },
  { code: 'it', flag: 'it', label: 'Italiano' },
  { code: 'pt', flag: 'br', label: 'Português' },
  { code: 'es', flag: 'es', label: 'Español' },
];

// Caminho para a logo (substitua pela URL real da imagem da pousada)
const LOGO_URL = "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=200&h=80&text=LOGO"; 

export const Header: React.FC<HeaderProps> = ({ onOpenPage, currentView }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (!href.startsWith('#')) {
      onOpenPage(href);
      setIsMobileOpen(false);
      return;
    }
    if (href === '#home') {
      onOpenPage('home');
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      if (currentView !== 'home') {
        onOpenPage('home');
        setTimeout(() => scrollByHref(href), 100);
      } else {
        scrollByHref(href);
      }
    }
    setIsMobileOpen(false);
  };

  const scrollByHref = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 140;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const getTranslatedLabel = (label: string) => {
    const key = label.toLowerCase().replace(" ", "") as keyof typeof t.nav;
    return t.nav[key] || label;
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white'}`}>
      
      {/* Top Bar: Language & Logo */}
      <div className="container mx-auto px-6 py-4 flex items-center justify-between relative">
        <div className="hidden lg:block w-48"></div>

        {/* Central Logo Image */}
        <div 
          onClick={() => { onOpenPage('home'); window.scrollTo({top: 0, behavior: 'smooth'}); }}
          className="flex flex-col items-center cursor-pointer group select-none transition-transform hover:scale-105"
        >
          {/* Use o texto caso a imagem não carregue, mas priorize a IMG */}
          <div className="relative h-16 md:h-20 lg:h-24 flex items-center justify-center">
             <img 
               src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=300&h=120&text=BaiaDoJoao" 
               alt="Pousada Baía do João Logo" 
               className="h-full w-auto object-contain"
               onError={(e) => {
                 // Fallback simples se a imagem falhar
                 e.currentTarget.style.display = 'none';
                 e.currentTarget.parentElement!.innerHTML = '<h1 class="font-serif text-3xl font-bold text-pousada-green">Baía do João</h1>';
               }}
             />
          </div>
        </div>

        {/* Language Selector */}
        <div className="flex items-center gap-2">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`transition-all hover:scale-110 focus:outline-none ${language === lang.code ? 'opacity-100 ring-2 ring-pousada-gold ring-offset-2 rounded-sm shadow-md' : 'opacity-40 hover:opacity-80'}`}
              title={lang.label}
            >
              <img 
                src={`https://flagcdn.com/w40/${lang.flag}.png`} 
                alt={lang.label}
                className="w-6 h-4 md:w-8 md:h-5 object-cover"
              />
            </button>
          ))}
          <button 
            className="lg:hidden ml-4 text-pousada-green" 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Main Navigation Row - Desktop */}
      <nav className={`hidden lg:flex justify-center border-t border-gray-100 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="flex items-center space-x-1">
          {NAV_ITEMS.map((item) => (
            <div 
              key={item.label} 
              className="relative"
              onMouseEnter={() => item.children && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-5 py-2 text-[11px] font-black uppercase tracking-[0.15em] transition-all flex items-center gap-1
                  ${currentView === item.href || (currentView === 'home' && item.href === '#home')
                    ? (item.label === 'Imprensa' ? 'bg-pousada-gold text-white' : 'text-pousada-gold') 
                    : 'text-gray-600 hover:text-pousada-gold'
                  }`}
              >
                {getTranslatedLabel(item.label)}
                {item.children && <ChevronDown size={12} className="opacity-50" />}
              </a>

              {item.children && activeDropdown === item.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white shadow-2xl rounded-xl py-4 mt-0 border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
                  {item.children.map((child) => (
                    <button
                      key={child.id}
                      onClick={() => {
                        onOpenPage(child.id);
                        setActiveDropdown(null);
                      }}
                      className={`w-full flex items-center gap-3 px-6 py-3 text-left text-xs font-bold uppercase tracking-widest transition-all ${currentView === child.id ? 'bg-pousada-sand text-pousada-green' : 'text-gray-500 hover:bg-pousada-sand hover:text-pousada-green'}`}
                    >
                      <child.icon size={14} className="text-pousada-gold" />
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-x-0 bg-white shadow-2xl overflow-y-auto transition-all duration-500 ease-in-out z-40 ${isMobileOpen ? 'max-h-[calc(100vh-100px)] border-t' : 'max-h-0'}`}>
        <div className="flex flex-col p-8 space-y-4">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="space-y-2">
              <div 
                className={`flex justify-between items-center font-black text-sm uppercase tracking-widest p-2 rounded-lg transition-colors ${activeDropdown === item.label || currentView === item.href ? 'text-pousada-gold bg-pousada-sand/30' : 'text-pousada-green'}`}
                onClick={(e) => {
                  if(!item.children) {
                    handleNavClick(e, item.href);
                    setActiveDropdown(null);
                  } else {
                    setActiveDropdown(activeDropdown === item.label ? null : item.label);
                  }
                }}
              >
                {getTranslatedLabel(item.label)}
                {item.children && <ChevronDown size={18} className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
              </div>

              {/* Render Children in Mobile Menu */}
              {item.children && activeDropdown === item.label && (
                <div className="pl-4 space-y-2 animate-in slide-in-from-top-2 duration-300">
                  {item.children.map((child) => (
                    <button
                      key={child.id}
                      onClick={() => {
                        onOpenPage(child.id);
                        setIsMobileOpen(false);
                        setActiveDropdown(null);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left text-xs font-bold uppercase tracking-widest rounded-xl transition-all ${currentView === child.id ? 'bg-pousada-green text-white' : 'text-gray-500 hover:bg-pousada-sand hover:text-pousada-green'}`}
                    >
                      <child.icon size={16} className={currentView === child.id ? 'text-white' : 'text-pousada-gold'} />
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};