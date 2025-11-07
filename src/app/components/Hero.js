// Se estiver usando o App Router do Next.js (v13+), adicione a diretiva 'use client'
// Já que estamos usando hooks e eventos interativos.
'use client'; 

import LogoSlider from "./LogoSlider";
import AnimateOnScroll from './AnimateOnScroll'; // <-- Importação do seu componente de animação

export default function Hero() {
  // Define a transição base para todos os elementos (duração e easing)
  const baseTransition = 'transition-all duration-700 ease-out';
  // Define o estado INICIAL padrão (invisível e 10px abaixo)
  const initialClass = 'opacity-0 translate-y-20';
  // Define o estado FINAL padrão (visível na posição normal)
  const finalClass = 'opacity-100 translate-y-0';

  return (
    // 1. Container Principal: Altura total, imagem de fundo e PADDING/Centralização
    <section className="bg-[url('/3.jpg')] bg-cover bg-center relative h-[100vh] flex flex-col items-center justify-center text-center py-32 px-4 overflow-hidden">
      
      {/* 4. Conteúdo (Centralizado e com z-index para ficar acima do overlay) */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Título Principal: Aparece primeiro (Delay 0ms) */}
        <AnimateOnScroll
          classNameInitial={initialClass}
          classNameFinal={finalClass}
          transitionProps={`${baseTransition} delay-100`} // Delay de 100ms
          className="text-5xl bg-gradient-to-r from-[#f5f5f5] via-[#fff] to-[#f5f5f5] bg-clip-text text-transparent sm:text-7xl md:text-8xl lg:text-7xl font-extrabold leading-none mb-6 max-w-6xl mb-max-w-4xl drop-shadow-lg"
        >
          Dê voz às{" "}
          <span className="bg-gradient-to-r from-[#003EBD] via-[#0295D5] to-[#003EBD] bg-clip-text text-transparent">
            ideias
          </span>
          . Dê poder às pessoas.
        </AnimateOnScroll>

        {/* Parágrafo: Aparece em segundo (Delay 300ms) */}
        <AnimateOnScroll
          classNameInitial={initialClass}
          classNameFinal={finalClass}
          transitionProps={`${baseTransition} delay-300`} // Delay de 300ms
          className="text-1xl md:text-2xl text-gray-200 leading-none max-w-2xl mb-12 drop-shadow-md"
        >
          A Hupp conecta mentes criativas dentro de empresas, escolas e
          organizações — onde cada ideia pode mudar tudo.
        </AnimateOnScroll>

        {/* Container dos Botões: Aparece em terceiro (Delay 500ms) */}
        <AnimateOnScroll
          classNameInitial={initialClass}
          classNameFinal={finalClass}
          transitionProps={`${baseTransition} delay-500`} // Delay de 500ms
          className="flex items-center justify-center gap-[20px] sm:gap-[30px]"
        >
          {/* Botão Primário */}
          <button
            className="reflect text-black bg-[#F0F0F0]
                        hover:scale-105 transition-transform duration-300 ease-out 
                        font-semibold py-2 px-4 rounded-full shadow-xl 
                        active:scale-95 hover:cursor-pointer"
          >
            Comece Agora →
          </button>

          {/* Botão Secundário */}
          <button
            className="reflect bg-[#fff] text-white flex align-center justify-center bg-black
                        hover:scale-105 transition-transform duration-300 ease-out 
                        font-semibold py-2 px-4 rounded-full shadow-xl 
                        active:scale-95 hover:cursor-pointer"
          >
            <span className="text-underline">Saiba mais →</span>
          </button>
        </AnimateOnScroll>

      </div>
      
      {/* Slider de Logos: Aparece por último (Delay 700ms), usando Fade-in Puro */}
      <AnimateOnScroll
        classNameInitial="opacity-0" // Slide lateral fica estranho em sliders, melhor só Fade-in
        classNameFinal="opacity-100"
        transitionProps={`${baseTransition} duration-1000 delay-700`} // Mais lento e mais delay
        className="absolute bottom-[0] w-[100%] sm:w-[70%]"
      >
        <LogoSlider />
      </AnimateOnScroll>
      
    </section>
  );
}