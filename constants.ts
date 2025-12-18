import { 
     Coffee, 
     Waves, 
     Clock, 
     Utensils, 
     Bus, 
     Wind,
     Sun,
     Anchor,
     Map,
     History,
     Leaf,
     Key,
     ConciergeBell,
     PawPrint,
     FileText,
     Newspaper
} from "lucide-react";
import { NavItem, ServiceItem, RoomItem, TourItem, TestimonialItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
    { label: "Home", href: "#home" },
    { 
      label: "A Pousada", 
      href: "#about",
      children: [
        { label: "Nossa História", id: "history", icon: History },
        { label: "Sustentabilidade", id: "sustainability", icon: Leaf },
        { label: "Green Key", id: "greenkey", icon: Key },
        { label: "Serviços", id: "services", icon: ConciergeBell },
        { label: "Pet Friendly", id: "petfriendly", icon: PawPrint },
        { label: "Políticas", id: "policies", icon: FileText },
      ]
    },
    { label: "Quartos", href: "#rooms" },
    { label: "Búzios", href: "#location" },
    { label: "Tour", href: "#tours" },
    { label: "Imprensa", href: "imprensa" },
    { label: "Contato", href: "#contact" },
];

export const SERVICES: ServiceItem[] = [
    { icon: Waves, title: "Vista Panorâmica", description: "Desfrute de uma vista inesquecível do mar de Búzios." },
    { icon: Clock, title: "Recepção", description: "Atendimento disponível das 08h às 00h para sua comodidade." },
    { icon: Sun, title: "Piscina com Vista", description: "Relaxe em nossa piscina com borda infinita e vista para o oceano." },
    { icon: Coffee, title: "Café da Manhã", description: "Buffet completo e fresco servido diariamente." },
    { icon: Wind, title: "Conforto", description: "Arrumação diária das suítes e toalhas para praia e piscina." },
    { icon: Utensils, title: "Bar e Restaurante", description: "Gastronomia local com vista panorâmica." },
    { icon: Bus, title: "Traslado", description: "Serviço de transfer Rio x Búzios (sob consulta)." },
];

export const ROOMS: RoomItem[] = [
    {
        id: 101,
        name: "Suíte Master Vista Mar",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
        features: ["Varanda Privativa", "Cama King Size", "Ar-Condicionado Split", "Frigobar Retrô"],
        price: "R$ 650 diária",
        numericPrice: 650,
        capacity: 2
    },
    {
        id: 102,
        name: "Suíte Deluxe Hidro",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
        features: ["Banheira de Hidromassagem", "Vista Jardim", "Smart TV 50\"", "Nespresso no Quarto"],
        price: "R$ 720 diária",
        numericPrice: 720,
        capacity: 2
    },
    {
        id: 103,
        name: "Suíte Family Garden",
        image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800",
        features: ["Espaço para 4 Pessoas", "Pátio Privativo", "Cozinha Americana", "Rede de Descanso"],
        price: "R$ 850 diária",
        numericPrice: 850,
        capacity: 4
    },
    {
        id: 104,
        name: "Suíte Romântica Sunset",
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=800",
        features: ["Melhor Vista do Pôr do Sol", "Decoração Minimalista", "Enxoval 400 fios", "Adega Climatizada"],
        price: "R$ 590 diária",
        numericPrice: 590,
        capacity: 2
    },
    {
        id: 105,
        name: "Suíte Premium Panorâmica",
        image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&q=80&w=800",
        features: ["Janelões do chão ao teto", "Vista 180 graus", "Cama Super King", "Chuveiro Duplo"],
        price: "R$ 980 diária",
        numericPrice: 980,
        capacity: 2
    },
    {
        id: 106,
        name: "Suíte Standard Aconchego",
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800",
        features: ["Próximo à Recepção", "Custo-Benefício", "Ar-Condicionado", "Wi-Fi Fibra"],
        price: "R$ 390 diária",
        numericPrice: 390,
        capacity: 2
    },
    {
        id: 107,
        name: "Suíte Master Plus",
        image: "https://images.unsplash.com/photo-1591088398332-8a77d399a80c?auto=format&fit=crop&q=80&w=800",
        features: ["Espaço Extra", "Sofá-Cama", "Mesa de Trabalho", "Vista Lateral Mar"],
        price: "R$ 520 diária",
        numericPrice: 520,
        capacity: 3
    },
    {
        id: 108,
        name: "Suíte Garden View 208",
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800",
        features: ["Entrada Independente", "Cama Queen", "Ventilador de Teto", "Frigobar"],
        price: "R$ 450 diária",
        numericPrice: 450,
        capacity: 2
    },
    {
        id: 109,
        name: "Suíte Búzios Dream",
        image: "https://images.unsplash.com/photo-1578683010236-d716f97596d8?auto=format&fit=crop&q=80&w=800",
        features: ["Temática Local", "Artesanato de Búzios", "Rede na Varanda", "Cafeteira"],
        price: "R$ 480 diária",
        numericPrice: 480,
        capacity: 2
    },
    {
        id: 110,
        name: "Suíte Presidencial Baía",
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800",
        features: ["120m² de Luxo", "Piscina Privativa", "Butler Service", "Vista Total Baía"],
        price: "R$ 1.800 diária",
        numericPrice: 1800,
        capacity: 5
    }
];

export const TOURS: TourItem[] = [
    {
        id: 1,
        title: "Passeio de Escuna",
        description: "Explore as águas cristalinas e ilhas paradisíacas de Búzios em um tour clássico.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800",
        gallery: [
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&q=80&w=800"
        ],
        fullDescription: "Um passeio inesquecível pelas principais praias e ilhas da península. Com paradas para mergulho em águas cristalinas, música e serviço de bordo.",
        duration: "3 a 4 horas",
        priceInfo: "A partir de R$ 120,00 por pessoa",
        included: ["Água Mineral", "Equipamento de Snorkel", "Guia Bilingue", "Frutas Tropicais"]
    },
    {
        id: 2,
        title: "City Tour de Buggy",
        description: "Conheça os melhores mirantes e praias escondidas a bordo de um buggy clássico.",
        image: "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&q=80&w=800",
        gallery: [
            "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1469796466635-455ede028664?auto=format&fit=crop&q=80&w=800"
        ],
        fullDescription: "A maneira mais divertida e radical de conhecer Búzios. Passamos por mirantes panorâmicos com vistas de tirar o fôlego e praias de difícil acesso.",
        duration: "2 horas",
        priceInfo: "R$ 350,00 (Até 4 pessoas)",
        included: ["Motorista Credenciado", "Parada para Fotos", "Roteiro Personalizado"]
    },
    {
        id: 3,
        title: "Mergulho de Batismo",
        description: "Descubra a rica vida marinha de João Fernandes com instrutores profissionais.",
        image: "https://images.unsplash.com/photo-1544551763-8dd44758c2dd?auto=format&fit=crop&q=80&w=800",
        gallery: [
            "https://images.unsplash.com/photo-1544551763-8dd44758c2dd?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&q=80&w=800"
        ],
        fullDescription: "Mesmo sem experiência prévia, você pode explorar o fundo do mar. Búzios possui um dos ecossistemas marinhos mais ricos do estado.",
        duration: "45 min na água",
        priceInfo: "A partir de R$ 380,00 por pessoa",
        included: ["Equipamento Completo", "Instrutor Particular", "Fotos Subaquáticas", "Seguro Individual"]
    },
    {
        id: 4,
        title: "Tour Arraial do Cabo",
        description: "Day trip para o 'Caribe Brasileiro' com saída direta da pousada.",
        image: "https://images.unsplash.com/photo-1589147107212-0498b584766e?auto=format&fit=crop&q=80&w=800",
        gallery: [
            "https://images.unsplash.com/photo-1589147107212-0498b584766e?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=800"
        ],
        fullDescription: "Uma viagem de um dia inteiro para conhecer as praias mais brancas e águas mais azuis do Brasil. Inclui traslado e passeio de barco em Arraial.",
        duration: "Dia Inteiro (08h às 18h)",
        priceInfo: "R$ 220,00 por pessoa",
        included: ["Traslado Ida/Volta", "Passeio de Barco em Arraial", "Almoço (Buffet Livre)", "Guia Acompanhante"]
    }
];

export const TESTIMONIALS: TestimonialItem[] = [
    {
        id: 1,
        name: "Mariana Silva",
        location: "São Paulo, SP",
        text: "Uma experiência mágica! A vista do café da manhã é simplesmente inesquecível. O atendimento da Rita e do Karl faz a gente se sentir em casa.",
        rating: 5
    },
    {
        id: 2,
        name: "João Pedro",
        location: "Rio de Janeiro, RJ",
        text: "Melhor pousada de Búzios para quem viaja com pet. O Rocky's Park é sensacional e meu cachorro amou a liberdade. Voltaremos com certeza!",
        rating: 5
    },
    {
        id: 3,
        name: "Clara Mendes",
        location: "Belo Horizonte, MG",
        text: "Sustentabilidade levada a sério. Fiquei impressionada com o sistema de tratamento de água e a horta orgânica. Luxo consciente de verdade.",
        rating: 5
    },
    {
        id: 4,
        name: "Thomas Anderson",
        location: "London, UK",
        text: "Fantastic view and very peaceful atmosphere. The Green Key certification was the reason I chose this place, and it did not disappoint.",
        rating: 5
    },
    {
        id: 5,
        name: "Beatriz Costa",
        location: "Curitiba, PR",
        text: "A Suíte Master com vista para o mar é um sonho. Acordar com aquele azul infinito é revigorante. Café da manhã impecável e artesanal.",
        rating: 5
    },
    {
        id: 6,
        name: "Ricardo & Ana",
        location: "Buenos Aires, AR",
        text: "El lugar perfecto para un aniversario romántico. Privacidad total, decoración encantadora e cerca de las melhores playas de João Fernandes.",
        rating: 5
    }
];