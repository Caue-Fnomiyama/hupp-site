"use client";
import { useEffect, useRef } from "react";

export default function BenefitsSection() {
  const galleryRef = useRef(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    // Duplicar os cards pra criar efeito infinito
    const cards = Array.from(gallery.children);
    cards.forEach((card) => {
      const clone = card.cloneNode(true);
      gallery.appendChild(clone);
    });

    let scrollX = 0;
    const speed = 0.8; // ajuste de velocidade (1 = rápido, 0.5 = suave)

    const animate = () => {
      scrollX += speed;
      if (scrollX >= gallery.scrollWidth / 2) scrollX = 0;
      gallery.style.transform = `translateX(-${scrollX}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen bg-[url('/fundo2.png')] bg-cover bg-center text-white overflow-hidden"
      id="benefits"
    >
      {/* Fade-in */}
      <div className="opacity-0 animate-fadeIn">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-16 text-center bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          Benefícios
        </h1>
      </div>

      {/* Carrossel infinito */}
      <div className="overflow-hidden w-full flex justify-center">
        <div
          ref={galleryRef}
          className="flex gap-6 w-max animate-none transition-transform duration-700 ease-linear"
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="w-[340px] h-[420px] flex flex-col justify-between items-center text-center rounded-[60px] flex-shrink-0 p-10 backdrop-blur-xl shadow-inner bg-[radial-gradient(58.69%_43.16%_at_50%_87.61%,rgba(1,64,190,0.4)_0%,rgba(0,0,0,0.5)_100%)] border border-[#0035bb50] hover:scale-[1.02] transition-transform duration-300"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-3">Impacto {i + 1}</h2>
                <p className="text-gray-200 text-sm">
                  A HUPP gera resultados reais — automação, dados e
                  transparência em cada decisão.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
