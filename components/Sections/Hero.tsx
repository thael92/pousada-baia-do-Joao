import React, { useState, useEffect, useCallback } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Reveal } from '../UI/Reveal';
import { useLanguage } from '../../App';

const HERO_IMAGES = [
  "img/carrosel-01.jpg",
  "img/carrosel-02.jpg",
  "img/carrosel-03.jpg",
  "img/carrosel-04.jpg",
  "img/carrosel-05.jpg",
  "img/carrosel-06.jpg",
  "img/carrosel-07.jpg"
];

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const headerOffset = 140;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const getItemStyle = (index: number) => {
    const totalItems = HERO_IMAGES.length;
    const isMobile = windowWidth < 768;
    const isTablet = windowWidth >= 768 && windowWidth < 1024;
    
    if (isMobile) {
      const angleRange = 160;
      const startAngle = 10; 
      const step = angleRange / (totalItems - 1);
      const angle = startAngle + (step * index);
      const radian = (angle * Math.PI) / 180;
      const radius = 150;
      const x = Math.cos(radian + Math.PI) * radius; 
      const y = Math.sin(radian) * radius;

      return {
        transform: `translate(${x}px, ${y - 40}px)`,
        transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
      };
    } else {
      // Ângulo centralizado para "contornar" o bloco de texto
      const angleRange = 120; 
      const startAngle = -60; 
      const step = angleRange / (totalItems - 1);
      const angle = startAngle + (step * index);
      const radian = (angle * Math.PI) / 180;
      
      const radius = isTablet ? 340 : 380;
      const x = Math.cos(radian) * radius;
      const y = Math.sin(radian) * radius;

      return {
        // Posicionamento que faz as fotos circularem o texto alinhado à direita
        transform: `translate(${-x + (isTablet ? 120 : 120)}px, ${y}px)`,
        transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
      };
    }
  };

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  return (
    <section id="home" className="relative h-screen min-h-[750px] flex items-center overflow-hidden bg-black">
      {/* Background Slideshow */}
      {HERO_IMAGES.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-all duration-1000 ease-in-out transform ${
            index === activeIndex ? 'opacity-100 scale-105 blur-0' : 'opacity-0 scale-110 blur-sm'
          }`}
        >
          <img
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Película Gradiente para Leitura - Atua apenas na área do texto */}
      <div className={`absolute inset-0 z-[1] transition-opacity duration-700 ${
        isMobile 
          ? 'bg-gradient-to-b from-black/80 via-black/40 to-black/20' 
          : 'bg-gradient-to-l from-black/90 via-black/40 to-transparent w-[70%] right-0 ml-auto'
      }`}></div>

      {/* Main Container */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 h-full flex items-center justify-end">
        
        {/* Bloco de Texto (Conteúdo a ser contornado) */}
        <div className={`flex flex-col ${isMobile ? 'items-center pt-32 text-center' : 'items-end text-right left-[95px]'} max-w-2xl lg:max-w-4xl relative z-20`}>
          <Reveal direction="down">
            <div className={`flex items-center gap-4 mb-6 ${isMobile ? 'justify-center' : 'justify-end'}`}>
              <p className="text-xs md:text-lg font-bold uppercase tracking-[0.4em] text-pousada-gold drop-shadow-sm">
                {t.hero.welcome}
              </p>
              <div className="h-[2px] w-12 bg-pousada-gold shadow-sm"></div>
            </div>
          </Reveal>
          
          <Reveal>
            <h1 className={`font-serif font-bold leading-tight mb-8 drop-shadow-2xl ${isTablet ? 'text-5xl lg:text-7xl' : 'text-6xl md:text-8xl lg:text-7xl'}`}>
              <span className="text-white">{t.hero.title.split(' ')[0]}</span> <br/>
              <span className="text-pousada-gold italic font-light ">{t.hero.title.split(' ').slice(1).join(' ')}</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-lg md:text-2x1 text-white/95 mb-10 max-w-xl leading-relaxed drop-shadow-md font-medium">
              {t.hero.subtitle} — Onde o luxo encontra a preservação ambiental no paraíso de João Fernandes.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className={`flex flex-col sm:flex-row gap-6 ${isMobile ? 'w-full px-4' : 'justify-end'}`}>
              <a 
                href="#about" 
                onClick={(e) => handleScroll(e, '#about')}
                className="px-10 py-4 bg-white/5 backdrop-blur-xl border border-white/20 text-white font-black uppercase tracking-widest hover:bg-white hover:text-pousada-green transition-all rounded-full order-2 sm:order-1 text-sm shadow-xl text-center"
              >
                {t.hero.btnAbout}
              </a>
              <a 
                href="#rooms" 
                onClick={(e) => handleScroll(e, '#rooms')}
                className="group flex items-center justify-center gap-3 px-12 py-4 bg-pousada-gold text-white font-black uppercase tracking-widest hover:bg-white hover:text-pousada-green transition-all rounded-full shadow-2xl order-1 sm:order-2 text-sm"
              >
                {t.hero.btnRooms} <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
              </a>
            </div>
          </Reveal>
        </div>

        {/* 180º Circular Roulette - Moldura do Texto */}
        <div className={`absolute z-10 flex items-center justify-center pointer-events-none ${
          isMobile 
            ? 'top-0 left-0 w-full h-[180px]' 
            : 'right-0 top-0 h-full w-[600px]'
        }`}>
          <div className="relative w-full h-full flex items-center justify-center">
            {HERO_IMAGES.map((img, index) => {
              const style = getItemStyle(index);
              const isActive = index === activeIndex;

              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  style={style}
                  className={`absolute pointer-events-auto group rounded-full transition-all duration-700 outline-none ${
                    isActive 
                      ? 'scale-125 z-30' 
                      : 'scale-90 opacity-40 hover:opacity-100 hover:scale-105'
                  }`}
                >
                  {/* Círculo Perfeito da Imagem */}
                  <div className={`relative aspect-square w-16 md:w-24 lg:w-32 rounded-full overflow-hidden border-2 md:border-4 shadow-2xl transition-all duration-500 ${
                    isActive ? 'border-pousada-gold ring-8 ring-pousada-gold/20' : 'border-white/30'
                  }`}>
                    <img src={img} className="w-full h-full object-cover rounded-full" alt={`Thumb ${index}`} />
                    {isActive && (
                      <div className="absolute inset-0 bg-pousada-gold/20 animate-pulse"></div>
                    )}
                  </div>
                  
                  {/* Tooltip Dinâmico */}
                  <div className={`absolute ${isMobile ? 'top-full mt-4 left-1/2 -translate-x-1/2' : 'right-full mr-6 top-1/2 -translate-y-1/2'} whitespace-nowrap bg-black/90 backdrop-blur-md px-4 py-2 rounded-full text-white text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all pointer-events-none border border-white/10 shadow-2xl`}>
                    Explorar Vista {index + 1}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Down Vertical Indicator */}
      {!isMobile && (
        <div className="absolute bottom-10 left-12 animate-pulse text-white/50 z-20">
          <div className="flex items-center gap-4">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-pousada-gold to-transparent"></div>
              <span className="text-[10px] uppercase font-bold tracking-[0.5em] [writing-mode:vertical-lr]">Scroll</span>
          </div>
        </div>
      )}
    </section>
  );
};