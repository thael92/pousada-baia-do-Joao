import React, { useEffect } from 'react';
import { 
  X, CheckCircle2, Leaf, History, Key, ConciergeBell, PawPrint, 
  FileText, ArrowRight, Zap, Droplets, Trash2, Recycle, 
  Gamepad2, Award, Wind, Waves, Bus, Anchor, ChevronRight, Home,
  Newspaper, Download, Play, ExternalLink, MessageCircle, Globe
} from 'lucide-react';

interface ContentPageProps {
  pageId: string;
  onClose: () => void;
}

export const ContentPage: React.FC<ContentPageProps> = ({ pageId, onClose }) => {
  
  // Auto scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pageId]);

  const renderContent = () => {
    switch (pageId) {
      case 'imprensa':
        return (
          <div className="max-w-6xl mx-auto py-12 px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
              <div className="flex items-center gap-4">
                <Newspaper className="text-pousada-gold" size={40} />
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-pousada-green">Imprensa</h1>
              </div>
              <a 
                href="https://www.dropbox.com/sh/fake-link-media-kit" 
                target="_blank"
                className="flex items-center gap-2 bg-pousada-gold text-white px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-pousada-green transition-all shadow-lg"
              >
                <Download size={16} /> Download Media Kit
              </a>
            </div>

            {/* Video Section */}
            <div className="mb-24">
                <div className="bg-emerald-950 rounded-[3rem] overflow-hidden shadow-2xl relative group">
                    <div className="aspect-video w-full">
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/qkB2jOpBvMo?si=8n_mP6-I6V9qI6Xl" 
                            title="Apresentação Pousada Baía do João" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="p-8 md:p-12 text-center border-t border-white/10">
                        <h3 className="font-serif text-2xl md:text-3xl text-white font-bold mb-4">Experiência Baía do João: Documentário</h3>
                        <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
                            Assista aos bastidores e conheça a filosofia de Karl e Rita na gestão da pousada mais sustentável do Brasil.
                        </p>
                    </div>
                </div>
            </div>

            {/* Media Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                <div className="space-y-8">
                    <div className="bg-pousada-sand p-8 rounded-3xl border border-pousada-gold/20">
                        <h4 className="text-pousada-gold font-bold uppercase tracking-widest text-xs mb-4">Destaque Casa Vogue</h4>
                        <blockquote className="text-gray-700 italic text-lg leading-relaxed mb-6">
                            "Com o selo Green Key, a Pousada Baía do João se consagra como refúgio de luxo consciente em Búzios, unindo design e sustentabilidade."
                        </blockquote>
                        <div className="flex items-center gap-2 text-pousada-green font-bold text-sm">
                            Ler matéria completa <ExternalLink size={14} />
                        </div>
                    </div>

                    {/* Specific Press Links for Carla Diaz Articles */}
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                        <h4 className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-2">Na Mídia</h4>
                        
                        <a 
                          href="https://revistaquem.globo.com/QUEM-News/noticia/2020/08/carla-diaz-viaja-buzios-com-mae-e-pet-ficaremos-em-quarentena-aqui.html" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-start gap-4 p-4 rounded-2xl hover:bg-pousada-sand transition-all group border border-transparent hover:border-pousada-gold/10"
                        >
                          <div className="bg-emerald-50 p-3 rounded-xl text-pousada-green group-hover:bg-pousada-gold group-hover:text-white transition-colors">
                            <Globe size={24} />
                          </div>
                          <div>
                            <p className="text-pousada-gold font-black text-[10px] uppercase tracking-widest mb-1">Revista Quem</p>
                            <h5 className="font-bold text-gray-800 leading-snug group-hover:text-pousada-green transition-colors">Carla Diaz viaja para Búzios e se hospeda com pet</h5>
                            <span className="text-xs text-gray-400 flex items-center gap-1 mt-2">Ver matéria <ExternalLink size={12} /></span>
                          </div>
                        </a>

                        <a 
                          href="https://gshow.globo.com/Famosos/noticia/carla-diaz-posta-foto-de-passeio-apos-meses-de-quarentena-depois-de-alguns-sustos-resolvi-me-reconectar-com-a-natureza.ghtml" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-start gap-4 p-4 rounded-2xl hover:bg-pousada-sand transition-all group border border-transparent hover:border-pousada-gold/10"
                        >
                          <div className="bg-emerald-50 p-3 rounded-xl text-pousada-green group-hover:bg-pousada-gold group-hover:text-white transition-colors">
                            <Newspaper size={24} />
                          </div>
                          <div>
                            <p className="text-pousada-gold font-black text-[10px] uppercase tracking-widest mb-1">GShow</p>
                            <h5 className="font-bold text-gray-800 leading-snug group-hover:text-pousada-green transition-colors">Carla Diaz se reconecta com a natureza em Búzios</h5>
                            <span className="text-xs text-gray-400 flex items-center gap-1 mt-2">Ver matéria <ExternalLink size={12} /></span>
                          </div>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col justify-center">
                    <h2 className="font-serif text-3xl font-bold text-pousada-green mb-6">A Mídia e o Turismo Consciente</h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                        Desde nossa inauguração, temos sido destaque nos principais veículos de comunicação nacionais e internacionais. Nosso compromisso com a Green Key Certification nos tornou referência em como operar um meio de hospedagem premium com pegada ecológica zero.
                    </p>
                    <div className="grid grid-cols-2 gap-6 opacity-60">
                         {/* Logos Placeholder style */}
                         <div className="h-20 bg-gray-100 rounded-xl flex items-center justify-center font-black text-gray-400">CASA VOGUE</div>
                         <div className="h-20 bg-gray-100 rounded-xl flex items-center justify-center font-black text-gray-400">O GLOBO</div>
                         <div className="h-20 bg-gray-100 rounded-xl flex items-center justify-center font-black text-gray-400">VIAGEM & TURISMO</div>
                         <div className="h-20 bg-gray-100 rounded-xl flex items-center justify-center font-black text-gray-400">QUEM & GSHOW</div>
                    </div>
                </div>
            </div>

            {/* Press Contact */}
            <div className="bg-pousada-green text-white p-12 md:p-16 rounded-[3rem] shadow-2xl text-center relative overflow-hidden">
                <div className="relative z-10">
                    <MessageCircle className="mx-auto mb-6 opacity-30" size={60} />
                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Assessoria de Imprensa</h2>
                    <p className="text-emerald-100 max-w-xl mx-auto mb-10">
                        Para solicitações de entrevistas, agendamento de filmagens ou press trips, entre em contato com nosso time de comunicação.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
                            <p className="text-xs uppercase font-bold text-pousada-gold mb-1">E-mail</p>
                            <p className="font-bold">imprensa@baiadojoao.com</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
                            <p className="text-xs uppercase font-bold text-pousada-gold mb-1">Telefone / WhatsApp</p>
                            <p className="font-bold">+55 (21) 98367.3037</p>
                        </div>
                    </div>
                </div>
                {/* Background Decoration */}
                <Newspaper className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-5 rotate-12" size={400} />
            </div>
          </div>
        );
      case 'history':
        return (
          <div className="max-w-4xl mx-auto py-12 px-6">
            <div className="flex items-center gap-4 mb-8">
              <History className="text-pousada-gold" size={40} />
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-pousada-green">Nossa História</h1>
            </div>
            
            <div className="prose prose-lg text-gray-600 space-y-8 leading-relaxed">
              <div className="relative p-8 bg-pousada-sand rounded-3xl border-l-8 border-pousada-gold italic text-xl text-gray-800 shadow-sm">
                 "Depois de assistir ao filme <strong>Shawshank Redemption</strong> em um dia chuvoso em São Paulo, enquanto tentava sem sucesso abrir um escritório de advocacia no Brasil, Rita disse a Karl: por que não abrimos um hotel como no filme?"
              </div>

              <p>
                Sentindo-nos como presos em fuga, três semanas depois, estávamos em Búzios, visitando 10 Pousadas para venda. Concordamos na última, no momento em que entramos pela porta. Era o que queríamos por causa de sua vista incrível e desobstruída.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-12">
                <img 
                  src="https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=800" 
                  className="rounded-2xl shadow-2xl h-80 object-cover" 
                  alt="Vista de Búzios" 
                />
                <p>
                  Além disso, em 2013, cinco anos antes de conhecer Karl, Rita se perdeu na rua em frente a João Fernandes e impressionada com a vista deslumbrante que disse ao pai: <strong>"Não sei onde estou, mas um dia vou morar aqui"</strong>.
                </p>
              </div>

              <p>
                Com uma ligação espiritual tão forte com o lugar, Karl e Rita passaram a fazer da Pousada um lugar que imita seus valores. Eles queriam um hotel privado onde os nossos hóspedes pudessem celebrar as férias num ambiente privado, seguro e bonito. O foco da pousada está em casais de todos os tipos que irão apreciar um local privativo e romântico onde possam se conectar com a natureza. Assim como Karl e Rita se conectaram.
              </p>

              <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100 flex flex-col md:flex-row gap-6 items-center">
                 <div className="flex-shrink-0 w-20 h-20 bg-pousada-green text-white rounded-full flex items-center justify-center">
                    <Leaf size={40} />
                 </div>
                 <p className="text-sm text-gray-700 italic">
                   A obtenção da primeira certificação ecológica do Brasil pela <strong>Green Key</strong> reflete a forte ligação de Karl e Rita com as belezas de Búzios e seu compromisso em mantê-la verde e sustentável por muitas gerações.
                 </p>
              </div>

              <p>
                A construção do <strong>Rocky’s Park</strong> e a aceitação de animais de estimação refletem o profundo amor de Karl e Rita pelos animais. Agora é uma pousada como nenhuma outra porque reflete os valores mais profundos de Karl e Rita.
              </p>
            </div>
          </div>
        );
      case 'sustainability':
        const sustPoints = [
          { icon: Wind, title: "Decoração", desc: "Uso de bambu, madeira de demolição e artistas locais, preservando árvores, evitando o desmatamento e preservando a cultura local." },
          { icon: Zap, title: "Energia Solar", desc: "Painéis solares para aquecimento de água e aproveitamento de energia limpa." },
          { icon: Droplets, title: "Eficiência & Economia", desc: "Chuveiros, torneiras, eletrodomésticos e lâmpadas com alta eficiência de economia." },
          { icon: Recycle, title: "Água Cinza", desc: "Primeiro sistema certificado de reciclagem e tratamento no Brasil para reuso de água da lavanderia e chuveiros na jardinagem." },
          { icon: Waves, title: "Água da Chuva", desc: "Captação e reutilização para a rega da horta e plantas da pousada." },
          { icon: Leaf, title: "Verduras Orgânicas", desc: "Produzimos frutas, verduras e especiarias para usar em nossa própria cozinha e bar." },
          { icon: Trash2, title: "Compostagem", desc: "Produção de fertilizante natural com reutilização de todos os alimentos orgânicos." },
          { icon: CheckCircle2, title: "Limpeza Biodegradável", desc: "Utilização de linhas profissionais respeitosas com o meio ambiente utilizando unicamente produtos biodegradáveis." },
          { icon: Recycle, title: "Reciclagem Seletiva", desc: "Recoleta e reciclagem seletiva de lixo para um mundo menos contaminado." },
          { icon: Gamepad2, title: "Jogo Eco", desc: "Sistema de pontos durante sua estadia que podem ser resgatados por prêmios sustentáveis no check-out." },
        ];
        return (
          <div className="max-w-6xl mx-auto py-12 px-6">
            <div className="flex items-center gap-4 mb-4">
              <Leaf className="text-pousada-gold" size={40} />
              <h1 className="font-serif text-4xl font-bold text-pousada-green">Sustentabilidade</h1>
            </div>
            <p className="text-gray-500 mb-12 text-lg">Nossas 10 iniciativas principais para um turismo consciente em Búzios.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sustPoints.map((p, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-pousada-green">
                    <p.icon size={28} />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-3 uppercase tracking-wider text-sm">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'greenkey':
        return (
          <div className="max-w-4xl mx-auto py-12 px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="w-40 h-40 bg-pousada-green rounded-3xl flex items-center justify-center p-6 shadow-2xl">
                 <Key className="text-white" size={80} />
              </div>
              <div className="text-center md:text-left">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-pousada-green mb-2">Green Key Certification</h1>
                <p className="text-pousada-gold font-bold uppercase tracking-widest text-lg">Orgulho de ser o #1 do Brasil</p>
              </div>
            </div>

            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                A <strong>Green Key Certification</strong> é uma organização internacional com sede em Copenhagen, Dinamarca, que certifica meios de hospedagem que variam de hotéis a parques de campismo em sua sustentabilidade. 
              </p>
              <div className="bg-emerald-950 text-white p-8 rounded-3xl shadow-lg border-b-4 border-pousada-gold">
                <p className="text-xl font-serif">
                  "São mais de 3100 locais certificados pela Green Key e o <strong>Baía do João é o primeiro hostel certificado do Brasil</strong> e o segundo da América do Sul."
                </p>
              </div>
              <p>
                Fomos avaliados pelo nosso compromisso com o meio ambiente em diversos temas:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Gestão Ambiental", "Envolvimento do Funcionário", "Informações para Convidados", 
                  "Economia de Água", "Lavagem e Limpeza", "Gestão de Lixo", 
                  "Energia Renovável", "Comidas e Bebidas Orgânicas", "Envolvimento Interno",
                  "Áreas Verde", "Responsabilidade Social Corporativa", "Atividades Ecológicas"
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                    <CheckCircle2 size={18} className="text-pousada-gold" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p>
                Trabalhamos com muitas pessoas em Búzios e criamos uma infraestrutura para atender a todos os requisitos do Green Key, provando que é possível unir turismo de alta qualidade com responsabilidade planetária.
              </p>
            </div>
          </div>
        );
      case 'services':
        return (
          <div className="max-w-5xl mx-auto py-12 px-6">
            <div className="flex items-center gap-4 mb-12">
              <ConciergeBell className="text-pousada-gold" size={40} />
              <h1 className="font-serif text-4xl font-bold text-pousada-green">Nossos Serviços</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="w-16 h-16 bg-pousada-sand rounded-2xl flex items-center justify-center mb-6 text-pousada-green">
                    <Bus size={32} />
                  </div>
                  <h3 className="font-bold text-2xl mb-4 text-pousada-green">Transfer Especializado</h3>
                  <p className="text-gray-600 mb-6">Oferecemos traslados confortáveis e seguros (sob consulta) conectando Búzios aos principais aeroportos:</p>
                  <ul className="text-sm space-y-3 text-gray-500 font-medium">
                    <li className="flex items-center gap-2"><ChevronRight size={14} className="text-pousada-gold"/> Aeroporto Internacional Tom Jobim (Galeão)</li>
                    <li className="flex items-center gap-2"><ChevronRight size={14} className="text-pousada-gold"/> Aeroporto Santos Dumont</li>
                  </ul>
               </div>

               <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="w-16 h-16 bg-pousada-sand rounded-2xl flex items-center justify-center mb-6 text-pousada-green">
                    <Anchor size={32} />
                  </div>
                  <h3 className="font-bold text-2xl mb-4 text-pousada-green">Fotografia & Memórias</h3>
                  <p className="text-gray-600 mb-6">Serviço de fotografia profissional sob consulta para registrar seus melhores momentos na península de Búzios.</p>
                  <button className="text-pousada-gold font-bold uppercase tracking-widest text-xs flex items-center gap-2">Consultar Disponibilidade <ArrowRight size={14}/></button>
               </div>
            </div>

            <div className="mt-12 bg-pousada-sand p-10 md:p-16 rounded-[3rem] border border-pousada-gold/20 relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="font-serif text-3xl md:text-4xl font-bold text-pousada-green mb-8 text-center flex items-center justify-center gap-3">
                        <Heart className="text-red-400" size={32} /> Pacotes Romance
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { name: "Basic", items: ["Café da manhã no quarto", "Decoração especial"] },
                            { name: "Luxo", items: ["Café da manhã no quarto", "Decoração especial", "Espumante selecionado"] },
                            { name: "Premium", items: ["Café da manhã no quarto", "Decoração especial", "Espumante Premium", "Passeio Arraial do Cabo"] }
                        ].map(pkg => (
                            <div key={pkg.name} className="bg-white p-8 rounded-3xl shadow-sm border border-white flex flex-col h-full hover:scale-105 transition-transform">
                                <h4 className="font-bold text-pousada-gold uppercase tracking-widest text-sm mb-6 pb-2 border-b border-gray-100">PACOTE {pkg.name}</h4>
                                <ul className="space-y-4 flex-grow">
                                    {pkg.items.map(it => (
                                        <li key={it} className="text-xs text-gray-600 flex items-start gap-2">
                                            <CheckCircle2 size={14} className="text-pousada-green flex-shrink-0 mt-0.5" />
                                            {it}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute top-0 right-0 opacity-5 -translate-y-1/4 translate-x-1/4">
                    <Heart size={300} fill="currentColor" className="text-pousada-green" />
                </div>
            </div>
          </div>
        );
      case 'petfriendly':
        return (
          <div className="max-w-5xl mx-auto py-12 px-6">
            <div className="relative h-[400px] rounded-[3rem] overflow-hidden mb-16 shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&q=80&w=1200" 
                 className="w-full h-full object-cover" 
                 alt="Pet amigável"
               />
               <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-6 text-center">
                  <PawPrint size={80} className="mb-6 drop-shadow-lg" />
                  <h1 className="font-serif text-5xl md:text-7xl font-bold drop-shadow-xl">Pet Friendly</h1>
               </div>
            </div>

            <div className="bg-orange-50/50 p-12 md:p-20 rounded-[4rem] text-center border border-orange-100 relative">
               <h2 className="text-3xl font-bold text-pousada-green mb-6">Aceitamos seu Pet como acompanhante</h2>
               <p className="text-gray-700 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Na Pousada Baía do João, sabemos que pets são parte da família. Construímos um ambiente acolhedor para que eles também aproveitem as férias.
               </p>
               
               <div className="grid md:grid-cols-2 gap-8 text-left mb-12 max-w-3xl mx-auto">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
                     <p className="text-sm text-gray-600 italic">"A construção do Rocky’s Park e a aceitação de animais de estimação refletem o profundo amor de Karl e Rita pelos animais."</p>
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                     <div className="flex items-center gap-3 text-pousada-green font-bold uppercase tracking-widest text-xs">
                        <CheckCircle2 size={18} /> Sob consulta de taxas
                     </div>
                     <div className="flex items-center gap-3 text-pousada-green font-bold uppercase tracking-widest text-xs">
                        <CheckCircle2 size={18} /> Aviso prévio obrigatório
                     </div>
                  </div>
               </div>

               <button 
                 onClick={() => alert("Chame-nos no WhatsApp para consultar as taxas pet.")}
                 className="bg-pousada-green text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-pousada-gold transition-all shadow-xl hover:-translate-y-1"
               >
                  Consultar Taxas & Regras
               </button>
            </div>
          </div>
        );
      case 'policies':
        return (
          <div className="max-w-4xl mx-auto py-12 px-6">
            <h1 className="font-serif text-4xl font-bold text-pousada-green mb-12 flex items-center gap-4">
              <FileText className="text-pousada-gold" size={40} /> Políticas da Pousada
            </h1>
            
            <div className="space-y-6">
               {[
                 { q: "Check-in e Check-out", a: "Check-in a partir das 14h00 e Check-out até às 12h00. Late check-out sujeito a disponibilidade e taxas extras." },
                 { q: "Mínimo de Estadia", a: "Trabalhamos com o mínimo de 3 diárias para garantir que você aproveite o melhor da nossa infraestrutura." },
                 { q: "Reservas e Cancelamento", a: "Sua reserva é confirmada mediante pagamento antecipado. Consulte os prazos de reembolso na sua confirmação de reserva." },
                 { q: "Silêncio e Convivência", a: "Nosso foco é em casais e relaxamento. Pedimos silêncio após as 22h nas áreas comuns." },
                 { q: "Fumantes", a: "Não é permitido fumar dentro das suítes. Dispomos de áreas externas para fumantes." }
               ].map((item, i) => (
                 <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:border-pousada-gold/30 transition-colors">
                    <h3 className="font-bold text-xl text-pousada-green mb-3 flex items-center gap-3">
                       <span className="w-8 h-8 bg-pousada-sand text-pousada-gold rounded-full flex items-center justify-center text-xs">{i+1}</span>
                       {item.q}
                    </h3>
                    <p className="text-gray-600 leading-relaxed pl-11">{item.a}</p>
                 </div>
               ))}
            </div>
            
            <div className="mt-12 bg-gray-50 p-8 rounded-3xl border border-dashed border-gray-200 text-center">
               <p className="text-sm text-gray-500">Dúvidas específicas sobre as políticas? Fale com nossa recepção 24h.</p>
            </div>
          </div>
        );
      default:
        return (
          <div className="py-20 text-center">
             <h2 className="text-2xl font-bold">Página não encontrada</h2>
             <button onClick={onClose} className="text-pousada-green underline mt-4">Voltar para Home</button>
          </div>
        );
    }
  };

  return (
    <div className="bg-white animate-in fade-in duration-500">
      {/* Breadcrumb / Navigation */}
      <div className="bg-pousada-sand/50 border-b border-gray-100 px-6 py-4">
        <div className="container mx-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
          <button onClick={onClose} className="hover:text-pousada-green flex items-center gap-1">
             <Home size={12} /> Home
          </button>
          <ChevronRight size={12} />
          <span className="text-pousada-gold uppercase">{pageId}</span>
        </div>
      </div>

      <div className="min-h-screen">
        {renderContent()}
      </div>

      {/* Floating Back Button for convenience */}
      <button 
        onClick={onClose}
        className="fixed bottom-8 right-8 bg-pousada-green text-white p-4 rounded-full shadow-2xl hover:bg-pousada-gold transition-all z-40 group"
      >
        <ArrowRight className="rotate-180" size={24} />
        <span className="absolute right-full mr-4 bg-black/80 text-white px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Voltar para Home</span>
      </button>
    </div>
  );
};

// Satisfy Lucide icons with custom SVG if needed or rely on imports
const Heart = ({ className, size, fill }: { className?: string, size?: number, fill?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill || "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
  </svg>
);