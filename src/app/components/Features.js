import React from 'react';
import { Shield, Filter, CheckCircle } from 'lucide-react'; 

// =========================================================================
// ESTILOS DE BORDA
// =========================================================================
const borderThickness = 'p-[2px]';
const borderGradient = 'bg-[#000]';
const cardRadius = 'rounded-[4rem]'; 
const cardInnerRadius = 'rounded-[4rem]';

// =========================================================================
// ESTILOS CUSTOMIZADOS
// =========================================================================
const customCardStyles = {
  background: '#f4f4f4ff',
};

// =========================================================================
// COMPONENTE PRINCIPAL
// =========================================================================
export default function HuppCleanSectionsNoFeatures() {
  const gridGap = 'gap-5';

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      
      {/* CSS INLINE GLOBAL PARA ANIMAÇÃO */}
      <style>{`
        @keyframes scrollGridUp {
          from {
            background-position: 0 0, 0 0;
          }
          to {
            background-position: 0 -200px, 0 -200px;
          }
        }
      `}</style>

      {/* GRID PRINCIPAL */}
      <div className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 ${gridGap}`}>
        
        {/* ==============================================
            CARD 1 — CIRCULO COM FUNDO QUADRICULADO ANIMADO
            ============================================== */}
        <div className={`col-span-full relative ${borderThickness} ${borderGradient} ${cardRadius}`}>
          <div
            className={`${cardInnerRadius} p-8 lg:p-12 h-full flex flex-col lg:flex-row gap-12 items-center justify-between`}
            style={customCardStyles}
          >
            
            {/* 1. BLOCO DE TEXTO */}
            <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
              <h3 className="text-3xl sm:text-4xl font-bold text-black mb-6">
                Quantas boas{' '}
                <span className="bg-gradient-to-r from-[#003EBD] via-[#0295D5] to-[#003EBD] bg-clip-text text-transparent">
                  ideias
                </span>{' '}
                são ouvidas e executadas no seu ambiente?
              </h3>
              <p className="text-black text-xl mb-8">
                Empresas, escolas e instituições desperdiçam milhares de ideias todos os dias.
                As pessoas querem contribuir, mas ninguém escuta, nada muda, e a motivação desaparece.
              </p>
              <button className="bg-black text-white font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition">
                Saiba mais →
              </button>
            </div>

            {/* 2. BLOCO VISUAL CIRCULAR
              Modificado: Adicionado estilo inline para o efeito de máscara (fading edges)
            */}
            <div 
              className="relative flex items-center justify-center w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden opa transition-all duration-700 hover:bg-white/20 order-first lg:order-none"
              style={{
                // Máscara radial que desvanece suavemente o conteúdo (fundo quadriculado e logo)
                maskImage: 'radial-gradient(circle, white 60%, transparent 100%)',
                maskMode: 'alpha', // Para garantir que o gradiente controle a opacidade
              }}
            >
              
              {/* CAMADA DE FUNDO QUADRICULADO (ANIMADA APENAS NA BOLINHA) */}
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  background: `
                    linear-gradient(to right, rgba(0,0,0,0.12) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(0,0,0,0.12) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                  animation: 'scrollGridUp 6s linear infinite',
                }}
              ></div>

              {/* LOGO CENTRAL */}
              <img
                src="logo.png"
                alt="Logo"
                className=" deg relative w-1rem h-1rem object-contain z-10"
              />
            </div>
          </div>
        </div>

        {/* ==============================================
            CARD 2
            ============================================== */}
        <div className={`md:col-span-2 lg:col-span-4 relative ${borderThickness} ${borderGradient} ${cardRadius}`}>
          <div 
            className={`${cardInnerRadius} p-8 h-full flex flex-col items-center text-center`} 
            style={customCardStyles}
          >
            <div className="relative w-[130%] sm:w-[100%] h-full flex items-center justify-center mb-6">
              <img className="img w-[100%]" src="02.png" alt="Ilustração 02" />
            </div>
            
            <h3 className="text-2xl font-bold text-black mb-3">
              A plataforma que transforma.
            </h3>
            <p className="text-black text-xl">
              A Hupp é um sistema gamificado de ideias. Compartilhar ideias, ganhar pontos, subir no ranking e ver suas ideias se tornarem realidade.
            </p>
          </div>
        </div>

        {/* ==============================================
            CARD 3
            ============================================== */}
        <div className={`md:col-span-2 lg:col-span-2 relative ${borderThickness} ${borderGradient} ${cardRadius}`}>
          <div 
            className={`${cardInnerRadius} p-8 h-full flex flex-col items-center text-center`}
            style={customCardStyles}
          >
            <div className="relative w-[80%] sm:w-[80%] h-full flex items-center justify-center mb-6">
              <img className="img w-[100%]" src="03.png" alt="Ilustração 03" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-3">
              Inovação agora é um jogo.
            </h3>
            <p className="text-black text-xl">
              Quem posta ideias, ganha pontos e sobe no ranking.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}