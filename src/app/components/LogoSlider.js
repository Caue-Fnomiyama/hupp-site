// components/LogoSlider.js
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const logos = [
  { src: '/3m.svg', alt: '3M Logo' },
  { src: '/forbes.svg', alt: 'Forbes Logo' },
  { src: '/macys.svg', alt: 'Macy\'s Logo' },
];

const LogoSlider = () => {
  const logosRef = useRef(null);

  // Script de clonagem: Mantido para criar o efeito infinito suave.
  useEffect(() => {
    const logosContainer = logosRef.current;
    const logosSlide = logosContainer.querySelector('.logos-slide');
    if (logosSlide) {
      // Clona a div inteira
      const copy = logosSlide.cloneNode(true);
      copy.classList.add('logos-slide-copy');
      logosContainer.appendChild(copy);
    }
  }, []);

  // Duplicação da lista no React (3 logos se tornam 6)
  const allLogos = [...logos, ...logos]; 

  return (
    <div
      ref={logosRef}
      // Contêiner principal: REMOVIDO 'whitespace-nowrap'
      // Adicionando 'flex' e 'flex-nowrap' AQUI para forçar o slide original e o clone a ficarem LADO A LADO
      className="logos group overflow-hidden py-16 bg-black relative flex flex-nowrap"
    >
      {/* Fades (simulação de before/after) */}
      <div className="absolute top-0 left-0 w-10 sm:w-64 h-full z-10 pointer-events-none bg-gradient-to-l from-black/0 to-black"></div>
      <div className="absolute top-0 right-0 w-10 sm:w-64 h-full z-10 pointer-events-none bg-gradient-to-r from-black/0 to-black"></div>

      {/* Contêiner da rolagem: flex-nowrap w-max é crucial */}
      {/* w-max garante que a largura seja igual à soma de todas as logos e margens. */}
      <div className="logos-slide flex items-center flex-nowrap w-max">
        {allLogos.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            width={80} 
            height={32} 
            // flex-shrink-0 (NÃO ENCOLHER) e mx-8 (ESPAÇAMENTO)
            className="flex-shrink-0 h-8 w-auto mx-8"
            unoptimized
          />
        ))}
      </div>
      {/* O clone do logos-slide é adicionado pelo useEffect logo após este div. */}
    </div>
  );
};

export default LogoSlider;