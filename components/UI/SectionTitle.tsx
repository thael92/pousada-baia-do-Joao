import React from 'react';
import { Reveal } from './Reveal';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, alignment = 'center', light = false }) => {
  const alignClass = alignment === 'left' ? 'text-left items-start' : 'text-center items-center';
  const textColor = light ? 'text-white' : 'text-pousada-green';
  const subtitleColor = light ? 'text-gray-200' : 'text-gray-500';
  const lineColor = light ? 'bg-pousada-gold' : 'bg-pousada-gold';

  return (
    <Reveal>
      <div className={`flex flex-col ${alignClass} mb-12`}>
        <span className={`text-sm font-bold uppercase tracking-widest mb-2 ${lineColor} text-transparent bg-clip-text`}>
            {subtitle}
        </span>
        <h2 className={`font-serif text-3xl md:text-5xl font-semibold mb-4 ${textColor}`}>
          {title}
        </h2>
        <div className={`h-1 w-24 ${lineColor}`}></div>
      </div>
    </Reveal>
  );
};