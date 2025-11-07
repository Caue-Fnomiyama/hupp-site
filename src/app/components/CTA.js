"use client"; // ESSENCIAL para que os Hooks do Accordion funcionem no Next.js App Router

import { Accordion, AccordionItem } from "@heroui/accordion";
import React from 'react'; // Adicionado, caso Next.js precise

export default function App() {
  const faqContent = [
    {
      key: "1",
      title: "1. O que é a HUPP e como ela ajuda minha empresa?",
      content: "A HUPP é uma plataforma inteligente que integra dados, automações e análise estratégica para acelerar o crescimento da sua empresa. Ela reduz tarefas manuais, melhora a tomada de decisão e cria uma operação mais rápida, previsível e lucrativa."
    },
    {
      key: "2",
      title: "2. Preciso ser uma empresa grande para usar a HUPP?",
      content: "Não. A HUPP foi criada para funcionar em qualquer porte, desde pequenos negócios até operações maiores. A plataforma se adapta ao seu tamanho, ao seu volume de dados e às suas necessidades — você cresce, e ela cresce junto."
    },
    {
      key: "3",
      title: "3. Quanto tempo demora para implementar a plataforma?",
      content: "A implementação é rápida. Em poucas horas você já está usando os recursos essenciais, e em poucos dias sua operação inteira já sente o impacto da automação, centralização e inteligência da HUPP."
    },
    {
      key: "4",
      title: "4. Quais problemas reais a HUPP resolve?",
      content: "Ela elimina retrabalho, reduz erros operacionais, organiza informações que ficam perdidas, gera relatórios claros e automáticos, melhora a comunicação e aumenta a produtividade geral. Resultado: menos caos, mais controle e mais crescimento."
    },
    {
      key: "5",
      title: "5. A HUPP é segura?",
      content: "Sim. Toda informação é protegida com padrões modernos de criptografia e camadas avançadas de segurança. Seus dados são tratados com total responsabilidade e transparência — você tem controle total sobre o que é compartilhado ou integrado."
    },
  ];

  return (
    // CONTÊINER PRINCIPAL: Fundo Preto com Padding
    <div className="py-16 bg-black min-h-screen">
      <div className="container mx-auto px-4 max-w-2xl">

        {/* TÍTULO */}
        <h2 className="text-4xl font-extrabold text-center text-white mb-10">
          Perguntas Frequentes sobre a HUPP
        </h2>

        {/* COMPONENTE ACCORDION DA BIBLIOTECA */}
        <Accordion
          // Adicione classes para estilizar o container do Accordion se a biblioteca permitir
          // Se sua biblioteca for NextUI, 'className' deve funcionar
          className="bg-black rounded-xl shadow-2xl" 
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                height: "auto",
                overflowY: "unset",
                transition: {
                  height: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    duration: 1,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 1,
                  },
                },
              },
              exit: {
                y: -10,
                opacity: 0,
                height: 0,
                overflowY: "hidden",
                transition: {
                  height: {
                    easings: "ease",
                    duration: 0.25,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 0.3,
                  },
                },
              },
            },
          }}
        >
          {faqContent.map((item) => (
            <AccordionItem 
              key={item.key} 
              aria-label={item.title} 
              title={item.title}
              // Você pode precisar de uma prop para customizar o estilo do item aqui.
              // Em muitas bibliotecas (como NextUI), você usa 'classNames' ou 'itemClasses'
              // classNames={{ title: "text-white hover:text-gray-200", content: "text-gray-300" }}
            >
              {item.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}