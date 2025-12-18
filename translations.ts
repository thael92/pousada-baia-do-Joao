export type Language = 'pt' | 'en' | 'it' | 'es';

export const translations = {
  pt: {
    nav: { home: "Home", hotel: "Hotel", rooms: "Quartos", location: "Búzios", tours: "Tour", imprensa: "Imprensa", contato: "Contato", reservar: "Reservar Agora" },
    hero: { welcome: "Bem-vindo ao Paraíso", title: "Pousada Baía do João", subtitle: "Conforto, Vista e Natureza", btnAbout: "Conheça a Pousada", btnRooms: "Ver Quartos" },
    booking: { title: "Encontre sua Suíte Ideal", subtitle: "Personalize sua experiência em Búzios", checkin: "Check-in", checkout: "Check-out", guests: "Hóspedes", search: "Buscar Suítes", advanced: "Filtros Avançados", hide: "Ocultar Filtros" },
    about: { 
      title: "A Experiência Baía do João", 
      subtitle: "Sofisticação e Relaxamento", 
      text1: "Onde a natureza abraça o conforto.", 
      text2: "Localizada em um dos pontos mais privilegiados de Búzios, nossa pousada oferece a combinação perfeita entre a brisa do mar e o conforto de uma hospedagem de alto padrão.",
      text3: "Do café da manhã artesanal servido com vista para o oceano até o entardecer em nossa piscina de borda infinita, cada momento aqui é um convite à contemplação.",
      contactLink: "Entre em contato",
      services: [
        { title: "Vista Panorâmica", desc: "Desfrute de uma vista inesquecível do mar de Búzios." },
        { title: "Recepção", desc: "Atendimento disponível das 08h às 00h para sua comodidade." },
        { title: "Piscina com Vista", desc: "Relaxe em nossa piscina com borda infinita e vista para o oceano." },
        { title: "Café da Manhã", desc: "Buffet completo e fresco servido diariamente." }
      ]
    },
    rooms: { 
      title: "Nossas Acomodações", 
      subtitle: "Conforto & Exclusividade", 
      from: "A partir de", 
      btnBook: "Reservar Agora", 
      capacity: "Pessoas",
      total: "Suíte",
      clear: "Ver Todas as Suítes",
      payment: "Pagamento",
      paymentDesc: "Cartão em até 3x",
      pix: "Garantia Pix",
      pixDesc: "10% Off Imediato",
      stay: "Regra",
      stayDesc: "Mínimo 3 diárias",
      filterResult: "Resultado da Busca",
      showing: "Mostrando",
      list: {
        101: { name: "Suíte Master Vista Mar", features: ["Varanda Privativa", "Cama King Size", "Ar-Condicionado Split", "Frigobar Retrô"] },
        102: { name: "Suíte Deluxe Hidro", features: ["Banheira de Hidromassagem", "Vista Jardim", "Smart TV 50\"", "Nespresso no Quarto"] },
        103: { name: "Suíte Family Garden", features: ["Espaço para 4 Pessoas", "Pátio Privativo", "Cozinha Americana", "Rede de Descanso"] },
        104: { name: "Suíte Romântica Sunset", features: ["Melhor Vista do Pôr do Sol", "Decoração Minimalista", "Enxoval 400 fios", "Adega Climatizada"] },
        105: { name: "Suíte Premium Panorâmica", features: ["Janelões do chão ao teto", "Vista 180 graus", "Cama Super King", "Chuveiro Duplo"] },
        106: { name: "Suíte Standard Aconchego", features: ["Próximo à Recepção", "Custo-Benefício", "Ar-Condicionado", "Wi-Fi Fibra"] },
        107: { name: "Suíte Master Plus", features: ["Espaço Extra", "Sofá-Cama", "Mesa de Trabalho", "Vista Lateral Mar"] },
        108: { name: "Suíte Garden View 208", features: ["Entrada Independente", "Cama Queen", "Ventilador de Teto", "Frigobar"] },
        109: { name: "Suíte Búzios Dream", features: ["Temática Local", "Artesanato de Búzios", "Rede na Varanda", "Cafeteira"] },
        110: { name: "Suíte Presidencial Baía", features: ["120m² de Luxo", "Piscina Privativa", "Butler Service", "Vista Total Baía"] }
      }
    },
    location: { 
      title: "Armação dos Búzios", 
      subtitle: "O Destino", 
      text: "A Península Encantada. Famosa por sua beleza natural exuberante e charme cosmopolita.",
      beachTitle: "Praia João Fernandes", beachDesc: "Localizada a poucos passos da pousada, é conhecida por suas águas calmas.",
      viewTitle: "Mirante", viewDesc: "Aprecie o pôr do sol mais famoso da região.",
      townTitle: "Rua das Pedras", townDesc: "O coração da cidade, com gastronomia e vida noturna."
    },
    tours: { 
      title: "Experiências e Tours", 
      subtitle: "Explore a Península", 
      help: "Ajudamos a organizar seu roteiro na recepção.", 
      more: "Saiba Mais",
      items: [
        { title: "Passeio de Escuna", desc: "Explore as águas cristalinas e ilhas paradisíacas de Búzios em um tour clássico." },
        { title: "City Tour de Buggy", desc: "Conheça os melhores mirantes e praias escondidas a bordo de um buggy clássico." },
        { title: "Mergulho de Batismo", desc: "Descubra a rica vida marinha de João Fernandes com instrutores profissionais." }
      ]
    },
    pet: { 
      title: "Pet Friendly", 
      subtitle: "Seu melhor amigo é bem-vindo", 
      text: "Na Pousada Baía do João, acreditamos que a família completa inclui seu pet. Aceitamos animais de pequeno e médio porte.",
      kit: "Kit de boas-vindas para pets", 
      areas: "Áreas externas amplas", 
      rules: "Consulte regras e taxas" 
    },
    testimonials: {
      title: "O Que Dizem Nossos Hóspedes",
      subtitle: "Experiências Reais",
      verified: "Hóspede Verificado",
      cta: "Já nos visitou?",
      btn: "Deixe sua avaliação"
    },
    footer: { 
      brand: "Baía do João", 
      desc: "Sua casa longe de casa em Búzios.", 
      address: "Rua das Primaveras, 32", 
      contact: "Contatos", 
      quickLinks: "Links Rápidos",
      findUs: "Onde Estamos", 
      rights: "Todos os direitos reservados.", 
      admin: "Acesso Restrito" 
    },
    modals: {
        bookingTitle: "Detalhes da Reserva",
        bookingSubtitle: "Selecione as datas para calcular o valor.",
        nights: "Total de Noites",
        total: "Valor Total",
        minStay: "Mínimo de 3 diárias obrigatório.",
        confirm: "Confirmar Reserva",
        whatsapp: "Agendar na Recepção",
        duration: "Duração",
        price: "Valor",
        included: "O que está incluso"
    }
  },
  en: {
    nav: { home: "Home", hotel: "Hotel", rooms: "Rooms", location: "Búzios", tours: "Tours", imprensa: "Press", contato: "Contact", reservar: "Book Now" },
    hero: { welcome: "Welcome to Paradise", title: "Baía do João Guesthouse", subtitle: "Comfort, View and Nature", btnAbout: "Discover the Inn", btnRooms: "View Rooms" },
    booking: { title: "Find your Ideal Suite", subtitle: "Customize your Búzios experience", checkin: "Check-in", checkout: "Check-out", guests: "Guests", search: "Search Suites", advanced: "Advanced Filters", hide: "Hide Filters" },
    about: { 
      title: "The Baía do João Experience", 
      subtitle: "Sophistication and Relaxation", 
      text1: "Where nature embraces comfort.", 
      text2: "Located in one of the most privileged spots in Búzios, our guesthouse offers the perfect combination of sea breeze and high-standard comfort.",
      text3: "From the artisanal breakfast served with an ocean view to the sunset in our infinity pool, every moment here is an invitation to contemplation.",
      contactLink: "Get in touch",
      services: [
        { title: "Panoramic View", desc: "Enjoy an unforgettable view of the Búzios sea." },
        { title: "Reception", desc: "Service available from 08:00 to 00:00 for your convenience." },
        { title: "Infinity Pool", desc: "Relax in our infinity pool with ocean views." },
        { title: "Breakfast", desc: "Full and fresh buffet served daily." }
      ]
    },
    rooms: { 
      title: "Our Accommodations", 
      subtitle: "Comfort & Exclusivity", 
      from: "Starting at", 
      btnBook: "Book Now", 
      capacity: "Guests",
      total: "Suite",
      clear: "View All Suites",
      payment: "Payment",
      paymentDesc: "Card up to 3x",
      pix: "Pix Guarantee",
      pixDesc: "10% Instant Off",
      stay: "Stay Rule",
      stayDesc: "Minimum 3 nights",
      filterResult: "Search Result",
      showing: "Showing",
      list: {
        101: { name: "Ocean View Master Suite", features: ["Private Balcony", "King Size Bed", "Split Air Conditioning", "Retro Minibar"] },
        102: { name: "Deluxe Hydro Suite", features: ["Whirlpool Tub", "Garden View", "50\" Smart TV", "In-room Nespresso"] },
        103: { name: "Family Garden Suite", features: ["Space for 4 People", "Private Patio", "Kitchenette", "Relaxing Hammock"] },
        104: { name: "Romantic Sunset Suite", features: ["Best Sunset View", "Minimalist Decoration", "400-thread Linen", "Wine Cooler"] },
        105: { name: "Premium Panoramic Suite", features: ["Floor-to-ceiling Windows", "180-degree View", "Super King Bed", "Double Shower"] },
        106: { name: "Standard Cozy Suite", features: ["Near Reception", "Best Value", "Air Conditioning", "Fiber Wi-Fi"] },
        107: { name: "Master Plus Suite", features: ["Extra Space", "Sofa Bed", "Work Desk", "Side Sea View"] },
        108: { name: "Garden View Suite 208", features: ["Independent Entrance", "Queen Bed", "Ceiling Fan", "Minibar"] },
        109: { name: "Búzios Dream Suite", features: ["Local Theme", "Búzios Craftsmanship", "Balcony Hammock", "Coffee Maker"] },
        110: { name: "Bay Presidential Suite", features: ["120m² of Luxury", "Private Pool", "Butler Service", "Full Bay View"] }
      }
    },
    location: { 
      title: "Armação dos Búzios", 
      subtitle: "The Destination", 
      text: "The Enchanted Peninsula. Famous for its exuberant natural beauty and cosmopolitan charm.",
      beachTitle: "João Fernandes Beach", beachDesc: "Located just steps from the guesthouse, known for its calm waters.",
      viewTitle: "Viewpoint", viewDesc: "Enjoy the region's most famous sunset.",
      townTitle: "Rua das Pedras", townDesc: "The heart of the city, with gastronomy and nightlife."
    },
    tours: { 
      title: "Experiences and Tours", 
      subtitle: "Explore the Peninsula", 
      help: "We help organize your itinerary at reception.", 
      more: "Learn More",
      items: [
        { title: "Schooner Tour", desc: "Explore the crystal clear waters and paradisiacal islands of Búzios on a classic tour." },
        { title: "Buggy City Tour", desc: "Discover the best viewpoints and hidden beaches aboard a classic buggy." },
        { title: "Discovery Scuba", desc: "Discover the rich marine life of João Fernandes with professional instructors." }
      ]
    },
    pet: { 
      title: "Pet Friendly", 
      subtitle: "Your best friend is welcome", 
      text: "At Baía do João, we believe the complete family includes your pet. We accept small and medium-sized animals.",
      kit: "Welcome kit for pets", 
      areas: "Large outdoor areas", 
      rules: "Check rules and fees" 
    },
    testimonials: {
      title: "What Our Guests Say",
      subtitle: "Real Experiences",
      verified: "Verified Guest",
      cta: "Visited us before?",
      btn: "Leave a review"
    },
    footer: { 
      brand: "Baía do João", 
      desc: "Your home away from home in Búzios.", 
      address: "32 Primaveras St.", 
      contact: "Contacts", 
      quickLinks: "Quick Links",
      findUs: "Where We Are", 
      rights: "All rights reserved.", 
      admin: "Restricted Access" 
    },
    modals: {
        bookingTitle: "Booking Details",
        bookingSubtitle: "Select dates to calculate price.",
        nights: "Total Nights",
        total: "Total Amount",
        minStay: "Minimum 3 nights required.",
        confirm: "Confirm Booking",
        whatsapp: "Book at Reception",
        duration: "Duration",
        price: "Price",
        included: "What's included"
    }
  },
  it: {
    nav: { home: "Home", hotel: "Hotel", rooms: "Camere", location: "Búzios", tours: "Tour", imprensa: "Stampa", contato: "Contatto", reservar: "Prenota Ora" },
    hero: { welcome: "Benvenuti in Paradiso", title: "Pousada Baía do João", subtitle: "Comfort, Vista e Natura", btnAbout: "Scopri la Pousada", btnRooms: "Vedi Camere" },
    booking: { title: "Trova la tua Suite Ideale", subtitle: "Personalizza la tua esperienza a Búzios", checkin: "Check-in", checkout: "Check-out", guests: "Ospiti", search: "Cerca Suite", advanced: "Filtri Avanzati", hide: "Nascondi Filtri" },
    about: { 
      title: "L'Esperienza Baía do João", 
      subtitle: "Sofisticazione e Relax", 
      text1: "Dove la natura abbraccia il comfort.", 
      text2: "Situata in uno dei punti più privilegiati di Búzios, la nostra pousada offre la perfetta combinazione tra brezza marina e comfort di alto livello.",
      text3: "Dalla colazione artigianale servita con vista oceano al tramonto nella nostra piscina a sfioro, ogni momento qui è un invito alla contemplazione.",
      contactLink: "Contattaci",
      services: [
        { title: "Vista Panoramica", desc: "Goditi una vista indimenticabile sul mare di Búzios." },
        { title: "Reception", desc: "Servizio disponibile dalle 08:00 alle 00:00 per la tua comodità." },
        { title: "Piscina a Sfioro", desc: "Rilassati nella nostra piscina a sfioro con vista sull'oceano." },
        { title: "Colazione", desc: "Buffet completo e fresco servito ogni giorno." }
      ]
    },
    rooms: { 
      title: "I Nostri Alloggi", 
      subtitle: "Comfort ed Esclusività", 
      from: "A partir de", 
      btnBook: "Prenota Ora", 
      capacity: "Ospiti",
      total: "Suite",
      clear: "Vedi Tutte le Suite",
      payment: "Pagamento",
      paymentDesc: "Carta fino a 3 rate",
      pix: "Garanzia Pix",
      pixDesc: "10% di sconto Pix",
      stay: "Regola",
      stayDesc: "Minimo 3 notti",
      filterResult: "Risultato della Ricerca",
      showing: "Mostrando",
      list: {
        101: { name: "Master Suite Vista Mare", features: ["Balcone Privato", "Letto King Size", "Aria Condizionata Split", "Minibar Retrò"] },
        102: { name: "Suite Deluxe Idro", features: ["Vasca Idromassaggio", "Vista Giardino", "Smart TV 50\"", "Nespresso in Camera"] },
        103: { name: "Suite Family Garden", features: ["Spazio per 4 Persone", "Patio Privato", "Angolo Cottura", "Amaca Relax"] },
        104: { name: "Suite Romantica Sunset", features: ["Migliore Vista Tramonto", "Arredamento Minimalista", "Biancheria 400 Fili", "Cantinetta Vini"] },
        105: { name: "Premium Suite Panoramica", features: ["Vetrate a Tutta Altezza", "Vista a 180 Gradi", "Letto Super King", "Doppia Doccia"] },
        106: { name: "Suite Standard Cozy", features: ["Vicino alla Reception", "Miglior Prezzo", "Aria Condizionata", "Wi-Fi Fibra"] },
        107: { name: "Master Plus Suite", features: ["Spazio Extra", "Divano Letto", "Scrivania", "Vista Mare Laterale"] },
        108: { name: "Garden View Suite 208", features: ["Ingresso Indipendente", "Letto Queen", "Ventilatore a Soffitto", "Minibar"] },
        109: { name: "Suite Búzios Dream", features: ["Tema Locale", "Artigianato di Búzios", "Amaca sul Balcone", "Macchina del Caffè"] },
        110: { name: "Suite Presidenziale Baia", features: ["120m² di Lusso", "Piscina Privata", "Servizio Maggiordomo", "Vista Totale Baia"] }
      }
    },
    location: { 
      title: "Armação dos Búzios", 
      subtitle: "La Destinazione", 
      text: "La Penisola Incantata. Famosa per la sua esuberante bellezza naturale e il fascino cosmopolita.",
      beachTitle: "Spiaggia João Fernandes", beachDesc: "Situata a pochi passi dalla pousada, nota per le sue acque calme.",
      viewTitle: "Belvedere", viewDesc: "Goditi il tramonto più famoso della regione.",
      townTitle: "Rua das Pedras", townDesc: "Il cuore della città, con gastronomia e vita noturna."
    },
    tours: { 
      title: "Esperienze e Tour", 
      subtitle: "Esplora la Penisola", 
      help: "Ti aiutiamo a organizzare il tuo itinerario alla reception.", 
      more: "Scopri di più",
      items: [
        { title: "Tour in Goletta", desc: "Esplora le acque cristalline e le isole paradisiache di Búzios in un tour classico." },
        { title: "Tour della Città in Buggy", desc: "Scopri i migliori punti panoramici e le spiagge nascoste a bordo di un classico buggy." },
        { title: "Immersione di Battesimo", desc: "Scopri la ricca vita marina di João Fernandes con istruttori professionisti." }
      ]
    },
    pet: { 
      title: "Pet Friendly", 
      subtitle: "Il tuo migliore amico è il benvenuto", 
      text: "Al Baía do João crediamo che la famiglia completa includa il tuo animale domestico. Accettiamo animali di piccola e media taglia.",
      kit: "Kit di benvenuto per animali", 
      areas: "Ampie aree esterne", 
      rules: "Consulta regole e tariffe" 
    },
    testimonials: {
      title: "Cosa Dicono i Nostri Ospiti",
      subtitle: "Esperienze Reali",
      verified: "Ospite Verificato",
      cta: "Ci hai già visitato?",
      btn: "Lascia una recensione"
    },
    footer: { 
      brand: "Baía do João", 
      desc: "La tua casa lontano da casa a Búzios.", 
      address: "Via delle Primavere, 32", 
      contact: "Contatti", 
      quickLinks: "Link Rapidi",
      findUs: "Dove Siamo", 
      rights: "Tutti i diritti riservati.", 
      admin: "Accesso Riservato" 
    },
    modals: {
        bookingTitle: "Dettagli Prenotazione",
        bookingSubtitle: "Seleziona le date per calcolare il prezzo.",
        nights: "Notti Totali",
        total: "Valore Totale",
        minStay: "Soggiorno minimo di 3 notti richiesto.",
        confirm: "Conferma Prenotazione",
        whatsapp: "Prenota alla Reception",
        duration: "Durata",
        price: "Prezzo",
        included: "Cosa è incluso"
    }
  },
  es: {
    nav: { home: "Inicio", hotel: "Hotel", rooms: "Habitaciones", location: "Búzios", tours: "Tour", imprensa: "Prensa", contato: "Contacto", reservar: "Reservar Ahora" },
    hero: { welcome: "Bienvenidos al Paraíso", title: "Posada Baía do João", subtitle: "Confort, Vista y Naturaleza", btnAbout: "Conoce la Posada", btnRooms: "Ver Habitaciones" },
    booking: { title: "Encuentra tu Suite Ideal", subtitle: "Personaliza tu experiencia en Búzios", checkin: "Check-in", checkout: "Check-out", guests: "Huéspedes", search: "Buscar Suites", advanced: "Filtros Avanzados", hide: "Ocultar Filtros" },
    about: { 
      title: "La Experiencia Baía do João", 
      subtitle: "Sofisticación y Relax", 
      text1: "Donde la naturaleza abraza el confort.", 
      text2: "Ubicada en uno de los pontos más privilegiados de Búzios, nuestra posada ofrece la combinación perfecta entre la brisa del mar y el confort de alta gama.",
      text3: "Desde el desayuno artesanal servido con vista al océano hasta el atardecer en nuestra piscina infinita, cada momento aquí es una invitación a la contemplación.",
      contactLink: "Contáctanos",
      services: [
        { title: "Vista Panorámica", desc: "Disfruta de una vista inolvidable del mar de Búzios." },
        { title: "Recepción", desc: "Servicio disponible de 08:00 a 00:00 para su comodidad." },
        { title: "Piscina con Vista", desc: "Relájate en nuestra piscina infinita con vista al mar." },
        { title: "Desayuno", desc: "Buffet completo y fresco servido diariamente." }
      ]
    },
    rooms: { 
      title: "Nuestros Alojamientos", 
      subtitle: "Confort y Exclusividad", 
      from: "A partir de", 
      btnBook: "Reservar Ahora", 
      capacity: "Huéspedes",
      total: "Suite",
      clear: "Ver Todas las Suites",
      payment: "Pago",
      paymentDesc: "Tarjeta hasta 3 cuotas",
      pix: "Garantía Pix",
      pixDesc: "10% de descuento Pix",
      stay: "Regla",
      stayDesc: "Mínimo 3 noches",
      filterResult: "Resultado de Búsqueda",
      showing: "Mostrando",
      list: {
        101: { name: "Suite Master Vista Mar", features: ["Balcón Privado", "Cama King Size", "Aire Acondicionado Split", "Minibar Retro"] },
        102: { name: "Suite Deluxe Hidro", features: ["Bañera de Hidromasaje", "Vista Jardín", "Smart TV 50\"", "Nespresso en Habitación"] },
        103: { name: "Suite Family Garden", features: ["Espacio para 4 Personas", "Patio Privado", "Cocina Americana", "Hamaca de Descanso"] },
        104: { name: "Suite Romántica Sunset", features: ["Mejor Vista del Atardecer", "Decoración Minimalista", "Ropa de Cama 400 Hilos", "Bodega Climatizada"] },
        105: { name: "Suite Premium Panorámica", features: ["Ventanas de Piso a Techo", "Vista de 180 Grados", "Cama Super King", "Ducha Doble"] },
        106: { name: "Suite Standard Confort", features: ["Cerca de Recepción", "Mejor Relación Calidad-Precio", "Aire Acondicionado", "Wi-Fi Fibra"] },
        107: { name: "Suite Master Plus", features: ["Espacio Extra", "Sofá-Cama", "Escritorio de Trabajo", "Vista Lateral al Mar"] },
        108: { name: "Suite Garden View 208", features: ["Entrada Independiente", "Cama Queen", "Ventilador de Techo", "Minibar"] },
        109: { name: "Suite Búzios Dream", features: ["Temática Local", "Artesanía de Búzios", "Hamaca en el Balcón", "Cafetera"] },
        110: { name: "Suite Presidencial Bahía", features: ["120m² de Lujo", "Piscina Privada", "Servicio de Mayordomo", "Vista Total a la Bahía"] }
      }
    },
    location: { 
      title: "Armação dos Búzios", 
      subtitle: "El Destino", 
      text: "La Península Encantada. Famosa por su exuberante belleza natural y encanto cosmopolita.",
      beachTitle: "Playa João Fernandes", beachDesc: "Ubicada a pocos passos de la posada, conocida por sus aguas tranquilas.",
      viewTitle: "Mirador", viewDesc: "Disfruta del atardecer más famoso de la región.",
      townTitle: "Rua das Pedras", townDesc: "El corazón de la ciudad, con gastronomía y vida nocturna."
    },
    tours: { 
      title: "Experiencias y Tours", 
      subtitle: "Explora la Península", 
      help: "Te ayudamos a organizar tu itinerario en recepción.", 
      more: "Saber más",
      items: [
        { title: "Paseo en Goleta", desc: "Explora las aguas cristalinas e islas paradisíacas de Búzios en un tour clásico." },
        { title: "City Tour en Buggy", desc: "Conoce los mejores miradores y playas escondidas a bordo de un buggy clásico." },
        { title: "Bautismo de Buceo", desc: "Descubre la rica vida marina de João Fernandes con instructores profesionales." }
      ]
    },
    pet: { 
      title: "Pet Friendly", 
      subtitle: "Tu mejor amigo es bienvenido", 
      text: "En Baía do João, creemos que la familia completa incluye a tu mascota. Aceptamos animales de tamaño pequeño y mediano.",
      kit: "Kit de bienvenida para mascotas", 
      areas: "Amplias zonas exteriores", 
      rules: "Consultar reglas y tarifas" 
    },
    testimonials: {
      title: "Lo Que Dicen Nuestros Huéspedes",
      subtitle: "Experiencias Reais",
      verified: "Huésped Verificado",
      cta: "¿Ya nos visitaste?",
      btn: "Deja tu opinión"
    },
    footer: { 
      brand: "Baía do João", 
      desc: "Tu hogar lejos de casa en Búzios.", 
      address: "Calle de las Primaveras, 32", 
      contact: "Contactos", 
      quickLinks: "Enlaces Rápidos",
      findUs: "Dónde Estamos", 
      rights: "Todos los derechos reservados.", 
      admin: "Acceso Restringido" 
    },
    modals: {
        bookingTitle: "Detalles de la Reserva",
        bookingSubtitle: "Seleccione las fechas para calcular el valor.",
        nights: "Total de Noches",
        total: "Valor Total",
        minStay: "Se requiere un mínimo de 3 noches.",
        confirm: "Confirmar Reserva",
        whatsapp: "Agendar en Recepción",
        duration: "Duración",
        price: "Valor",
        included: "Qué está incluido"
    }
  }
};