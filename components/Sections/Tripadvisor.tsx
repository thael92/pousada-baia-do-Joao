import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { Reveal } from '../UI/Reveal';
import { ExternalLink } from 'lucide-react';

export const Tripadvisor: React.FC = () => {
  const tripAdvisorUrl = "https://www.tripadvisor.com.br/Hotel_Review-g303492-d660905-Reviews-Baia_Do_Joao_Buzios-Armacao_dos_Buzios_State_of_Rio_de_Janeiro-m11900.html";

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <SectionTitle title="Nossos Prêmios e Comentários" subtitle="Reconhecimento" />

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          {/* Awards Section */}
          <Reveal direction='right'>
            <div className="flex gap-6 justify-center">
                {/* Badge 2022 */}
                <div className="bg-[#00aa6c] w-40 h-52 p-4 flex flex-col items-center justify-center text-center shadow-lg hover:scale-105 transition-transform cursor-default">
                    <span className="text-white font-serif text-lg font-bold mb-1">2022</span>
                    <h3 className="text-white font-sans font-bold text-xl leading-tight mb-3 shadow-black drop-shadow-sm">Travelers'<br/>Choice™</h3>
                    <div className="bg-white rounded-full p-2 mb-3 w-16 h-16 flex items-center justify-center">
                        {/* Owl Eyes Mockup */}
                        <div className="flex gap-1">
                            <div className="w-4 h-4 rounded-full border-4 border-black bg-white flex items-center justify-center">
                                <div className="w-1 h-1 bg-black rounded-full"></div>
                            </div>
                            <div className="w-4 h-4 rounded-full border-4 border-black bg-white flex items-center justify-center">
                                <div className="w-1 h-1 bg-black rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    <span className="text-white font-bold tracking-wider text-sm">Tripadvisor</span>
                </div>

                {/* Badge 2021 */}
                <div className="bg-[#00aa6c] w-40 h-52 p-4 flex flex-col items-center justify-center text-center shadow-lg hover:scale-105 transition-transform cursor-default opacity-90">
                    <span className="text-white font-serif text-lg font-bold mb-1">2021</span>
                    <h3 className="text-white font-sans font-bold text-xl leading-tight mb-3 shadow-black drop-shadow-sm">Travelers'<br/>Choice™</h3>
                     <div className="bg-white rounded-full p-2 mb-3 w-16 h-16 flex items-center justify-center">
                        {/* Owl Eyes Mockup */}
                        <div className="flex gap-1">
                            <div className="w-4 h-4 rounded-full border-4 border-black bg-white flex items-center justify-center">
                                <div className="w-1 h-1 bg-black rounded-full"></div>
                            </div>
                            <div className="w-4 h-4 rounded-full border-4 border-black bg-white flex items-center justify-center">
                                <div className="w-1 h-1 bg-black rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    <span className="text-white font-bold tracking-wider text-sm">Tripadvisor</span>
                </div>
            </div>
          </Reveal>

          {/* Review Widget Card */}
          <Reveal direction='left'>
            <div className="border border-[#00aa6c] p-6 w-full max-w-sm bg-white shadow-sm rounded-sm">
                <div className="flex items-center gap-2 mb-3">
                    {/* Simple Logo Mockup */}
                    <div className="flex gap-0.5">
                         <div className="w-3 h-3 rounded-full border-2 border-[#00aa6c]"></div>
                         <div className="w-3 h-3 rounded-full border-2 border-[#00aa6c]"></div>
                    </div>
                    <span className="font-bold text-lg text-gray-800">Tripadvisor</span>
                </div>

                <a 
                    href={tripAdvisorUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-xl text-gray-900 hover:underline decoration-gray-400 block mb-1"
                >
                    Baía do João Pousada
                </a>

                <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-0.5">
                        {[1,2,3,4,5].map(i => (
                            <div key={i} className="w-4 h-4 rounded-full bg-[#00aa6c] border border-[#00aa6c]"></div>
                        ))}
                    </div>
                    <span className="text-sm text-gray-600">222 avaliações</span>
                </div>

                <div className="mb-4">
                    <p className="text-sm text-gray-600">
                        Ranking do Tripadvisor
                    </p>
                    <p className="font-bold text-[#00aa6c]">
                        #8 <span className="text-gray-600 font-normal">de 580 pousadas em Armação dos Búzios</span>
                    </p>
                </div>

                <div className="space-y-2 mb-6 border-t border-gray-100 pt-3">
                    <p className="text-xs text-gray-500 italic">"Ótimo ambiente para relaxar"</p>
                    <p className="text-xs text-gray-500 italic">"Excelente espaço."</p>
                    <p className="text-xs text-gray-500 italic">"Excelente hospedagem..."</p>
                    <p className="text-xs text-gray-500 italic">"Tudo maravilhoso!"</p>
                    <p className="text-xs text-gray-500 italic">"Excelente pousada"</p>
                </div>

                <div className="flex gap-4 text-sm font-semibold border-t border-gray-100 pt-3">
                    <a 
                        href={tripAdvisorUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-[#00aa6c] hover:underline flex items-center gap-1"
                    >
                        Leia avaliações <ExternalLink size={12}/>
                    </a>
                    <a 
                        href={tripAdvisorUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-[#00aa6c] hover:underline flex items-center gap-1"
                    >
                        Faça uma avaliação <ExternalLink size={12}/>
                    </a>
                </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};