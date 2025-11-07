// Crie este arquivo em: hooks/useInView.js

import { useEffect, useRef, useState } from 'react';

/**
 * Hook customizado para usar a Intersection Observer API.
 */
export const useInView = (options) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // É importante usar o 'use client' no topo de qualquer arquivo que use Hooks de estado/efeito
    // ou certificar-se de que o componente pai está marcado como 'use client'.
    if (typeof window === 'undefined' || !ref.current) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      // Se o elemento estiver visível, define 'inView' como true
      if (entry.isIntersecting) {
        setInView(true);
        // Desobserva para executar a animação apenas uma vez
        observer.unobserve(ref.current); 
      }
    }, options);

    observer.observe(ref.current);

    // Função de limpeza
    return () => {
      if (ref.current) {
        // Verifica se ref.current existe antes de chamar unobserve
        observer.unobserve(ref.current);
      }
    };
  }, [options]); 

  return [ref, inView];
};