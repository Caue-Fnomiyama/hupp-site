import LogoSlider from './LogoSlider'; 
export default function Hero() {
  return (
    // 1. Container Principal: Altura total, imagem de fundo e PADDING/Centralização
    <section className="bg-[url('/3.jpg')] bg-cover bg-center relative h-[100vh] flex flex-col items-center justify-center text-center py-32 px-4 overflow-hidden">

     
    

      {/* 4. Conteúdo (Centralizado e com z-index para ficar acima do overlay) */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Título Principal */}
        <h1 className="text-5xl bg-gradient-to-r from-[#f5f5f5] via-[#fff] to-[#f5f5f5] bg-clip-text text-transparent  sm:text-7xl md:text-8xl lg:text-7xl font-extrabold leading-none mb-6 max-w-4xl drop-shadow-lg">
         Dê voz às <span className="bg-gradient-to-r from-[#003EBD] via-[#0295D5] to-[#003EBD] bg-clip-text text-transparent">ideias</span>. Dê poder às pessoas.
        </h1>

        {/* Parágrafo */}
        <p className="text-2xl md:text-2xl text-gray-200 leading-none max-w-2xl mb-12 drop-shadow-md">
          A Hupp conecta mentes criativas dentro de empresas, escolas e organizações — onde cada ideia pode mudar tudo.
        </p>
        
        {/* Container dos Botões */}
        <div className="flex items-center justify-center gap-[20px] sm:gap-[30px]">
          
          {/* Botão Primário (Gradiente Hupp) */}
          <button 
            className="reflect text-black bg-[#F0F0F0]
                       hover:scale-105 transition-transform duration-300 ease-out 
                       font-semibold py-2 px-4 rounded-full shadow-xl 
                       active:scale-95 hover:cursor-pointer"
          >
            Comece Agora →
          </button>
          
          {/* Botão Secundário (Borda ou Light) - Mantive o visual claro para contraste */}
          <button 
            className="reflect bg-[#fff] text-white flex align-center justify-center bg-black
                       hover:scale-105 transition-transform duration-300 ease-out 
                       font-semibold py-2 px-4 rounded-full shadow-xl 
                       active:scale-95 hover:cursor-pointer" 
          >
            <span className="text-underline">
              Saiba mais  →
            </span>
          </button>
          
        </div>
      </div>
      <div className='absolute bottom-[0] w-[100%] sm:w-[70%]'>
         <LogoSlider />
      </div>
    </section>
  );
}