import React from 'react';
import { Facebook, Instagram, Mail, Phone, Lock, Smartphone } from 'lucide-react';
import { useLanguage } from '../../App';

interface FooterProps {
  onOpenAdmin?: () => void;
  onNavigate: (viewId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin, onNavigate }) => {
  const { t } = useLanguage();
  
  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      onNavigate('home');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          const headerOffset = 160;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
    } else {
      onNavigate(href);
    }
  };

  return (
    <footer id="contact" className="bg-emerald-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Description */}
          <div>
            {/* Logo Image in Footer */}
            <div className="mb-6 h-16 w-auto flex items-start">
               <a href=""><img 
                 src="img/logo.png" 
                 alt="Pousada Baía do João Logo" 
                 className="relative bottom-[10px] h-[95px] object-contain brightness-0 invert opacity-90"
               /></a>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t.footer.desc}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/baiadojoaopousada?igshid=hb128o3bkote" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pousada-gold transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/baiadojoaopousada/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pousada-gold transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-pousada-gold">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={(e) => handleLinkClick(e, '#home')} className="text-gray-400 hover:text-pousada-gold transition-colors text-sm font-bold uppercase tracking-widest text-left">
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLinkClick(e, '#rooms')} className="text-gray-400 hover:text-pousada-gold transition-colors text-sm font-bold uppercase tracking-widest text-left">
                  {t.nav.rooms}
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLinkClick(e, '#about')} className="text-gray-400 hover:text-pousada-gold transition-colors text-sm font-bold uppercase tracking-widest text-left">
                  {t.nav.hotel}
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLinkClick(e, '#tours')} className="text-gray-400 hover:text-pousada-gold transition-colors text-sm font-bold uppercase tracking-widest text-left">
                  {t.nav.tours}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('imprensa')} className="text-gray-400 hover:text-pousada-gold transition-colors text-sm font-bold uppercase tracking-widest text-left">
                  {t.nav.imprensa}
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLinkClick(e, '#contact')} className="text-gray-400 hover:text-pousada-gold transition-colors text-sm font-bold uppercase tracking-widest text-left">
                  {t.nav.contato}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-pousada-gold">{t.footer.contact}</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-400 text-sm group">
                <Phone className="mr-3 flex-shrink-0 mt-1 text-pousada-gold group-hover:scale-110 transition-transform" size={16} />
                <div className="flex flex-col">
                  <a href="tel:+552226335555" className="hover:text-pousada-gold transition-colors">+ 55 (22) 2633.5555</a>
                  <a href="tel:+552226335182" className="hover:text-pousada-gold transition-colors">+ 55 (22) 2633.5182</a>
                </div>
              </li>
              <li className="flex items-center text-gray-400 text-sm group">
                <Smartphone className="mr-3 flex-shrink-0 text-pousada-gold group-hover:scale-110 transition-transform" size={16} />
                <a href="tel:+5521983673037" className="hover:text-pousada-gold transition-colors">+ 55 (21) 98367.3037</a>
              </li>
              <li className="flex items-center text-gray-400 text-sm group">
                <Mail className="mr-3 flex-shrink-0 text-pousada-gold group-hover:scale-110 transition-transform" size={16} />
                <a href="mailto:pousada@baiadojoao.com" className="hover:text-pousada-gold transition-colors">pousada@baiadojoao.com</a>
              </li>
            </ul>
          </div>

           {/* Location with Google Maps Iframe */}
           <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-pousada-gold">{t.footer.findUs}</h4>
            <div className="mb-4 text-gray-400 text-sm leading-relaxed">
                <p>{t.footer.address}</p>
                <p>João Fernandes, Búzios – RJ</p>
            </div>
            <div className="w-full h-48 bg-emerald-900/50 rounded-2xl overflow-hidden relative shadow-inner border border-white/5">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14718.093409192534!2d-41.877366!3d-22.745963!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x970046f7f6a707%3A0x8673f4e2f8f8f8f8!2sPousada%20Ba%C3%ADa%20do%20Jo%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1715634567890!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização Pousada Baía do João"
                    className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                ></iframe>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Pousada Baía do João. {t.footer.rights}</p>
            <button onClick={onOpenAdmin} className="flex items-center gap-1 text-gray-600 hover:text-pousada-gold transition-colors">
                <Lock size={12} /> {t.footer.admin}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};