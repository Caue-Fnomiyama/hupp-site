// Crie este arquivo em: components/AnimateOnScroll.js
// Se estiver usando Next.js 13+ (App Router), adicione a diretiva 'use client'
// no topo, se o componente for usado dentro de um componente de servidor.

import React from 'react';
import { useInView } from './useInView'; // <-- VERIFIQUE ESTE CAMINHO

const AnimateOnScroll = ({
  classNameInitial = 'opacity-0 translate-y-10',
  classNameFinal = 'opacity-100 translate-y-0',
  transitionProps = 'transition-all duration-900 ease-out',
  ...props 
}) => {
  const [ref, inView] = useInView({
    rootMargin: '50px 0px -50px 0px', 
  });

  // Combina as classes
  const combinedClassName = `${props.className || ''} ${transitionProps} ${
    inView ? classNameFinal : classNameInitial
  }`;

  return (
    <div
      ref={ref}
      {...props} 
      className={combinedClassName}
    >
      {props.children}
    </div>
  );
};

export default AnimateOnScroll;