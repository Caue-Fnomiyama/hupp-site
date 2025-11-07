'use client'; 

import React from 'react';
import AnimateOnScroll from './AnimateOnScroll'; // <-- Componente de Animação Importado
// Para os ícones de redes sociais, vamos usar SVGs para evitar dependências externas.
// Substituindo o array de objetos para incluir SVGs completos.

const SocialIcons = [
    { name: 'Instagram', svg: 'M12 2.163c3.204 0 3.584.012 4.85.07c.974.057 1.442.191 1.944.385a3.832 3.832 0 011.696 1.696c.194.502.328.97.385 1.944.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.057.974-.191 1.442-.385 1.944a3.832 3.832 0 01-1.696 1.696c-.502.194-.97.328-1.944.385-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-.974-.057-1.442-.191-1.944-.385a3.832 3.832 0 01-1.696-1.696c-.194-.502-.328-.97-.385-1.944-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.057-.974.191-1.442.385-1.944a3.832 3.832 0 011.696-1.696c.502-.194.97-.328 1.944-.385 1.266-.058 1.646-.07 4.85-.07zm0 2.22c-3.11 0-3.414.012-4.664.07s-1.898.182-2.316.347c-.42.166-.757.382-1.077.702-.32.32-.536.657-.702 1.077-.165.418-.288.948-.347 2.316-.058 1.25-.07 1.554-.07 4.664s.012 3.414.07 4.664c.059 1.368.182 1.898.347 2.316.166.42.382.757.702 1.077.32.32.657.536 1.077.702.418.165.948.288 2.316.347 1.25.058 1.554.07 4.664.07s3.414-.012 4.664-.07c1.368-.059 1.898-.182 2.316-.347.42-.166.757-.382 1.077-.702.32-.32.536-.657.702-1.077.165-.418.288-.948.347-2.316.058-1.25.07-1.554.07-4.664s-.012-3.414-.07-4.664c-.059-1.368-.182-1.898-.347-2.316-.166-.42-.382-.757-.702-1.077-.32-.32-.657-.536-1.077-.702-.418-.165-.948-.288-2.316-.347-1.25-.058-1.554-.07-4.664-.07zm0 3.655a6.082 6.082 0 100 12.164 6.082 6.082 0 000-12.164zm0 2.22a3.862 3.862 0 110 7.724 3.862 3.862 0 010-7.724zm6.27-3.79a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z' },
    { name: 'LinkedIn', svg: 'M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.75s.784-1.75 1.75-1.75 1.75.79 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.632c0-1.34-.025-3.072-1.875-3.072-1.876 0-2.162 1.465-2.162 2.978v5.726h-3v-11h2.883v1.32h.04c.4-.75 1.366-1.536 2.812-1.536 3.012 0 3.566 1.98 3.566 4.557v6.651z' },
    { name: 'GitHub', svg: 'M12 2C6.477 2 2 6.477 2 12c0 4.42 2.868 8.164 6.84 9.493.5.09.682-.217.682-.483 0-.237-.008-.868-.013-1.7zM12 21.5c-4.42 0-8-3.58-8-8 0-4.42 3.58-8 8-8s8 3.58 8 8c0 4.42-3.58 8-8 8zm4-12H8v-2h8v2z' },
    { name: 'Dribbble', svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6 10c0 .9-.09 1.78-.26 2.62a8.04 8.04 0 01-1.34 2.1c-.8.8-1.73 1.39-2.77 1.77-.96.35-2.02.53-3.13.53-1.11 0-2.17-.18-3.13-.53-.5-.18-.98-.44-1.45-.77a7.9 7.9 0 01-1.32-1.35 8.04 8.04 0 01-1.34-2.1c-.17-.84-.26-1.72-.26-2.62 0-.9.09-1.78.26-2.62a8.04 8.04 0 011.34-2.1c.8-.8 1.73-1.39 2.77-1.77.96-.35 2.02-.53 3.13-.53 1.11 0 2.17.18 3.13.53.5.18.98.44 1.45.77a7.9 7.9 0 011.32 1.35 8.04 8.04 0 011.34 2.1c.17.84.26 1.72.26 2.62z' }
];

export default function Footer() {
    // Configurações da animação
    const initialClass = 'opacity-0 translate-y-6';
    const finalClass = 'opacity-100 translate-y-0';
    const transitionProps = 'transition-all duration-700 ease-out';
    
    // Animação para o Rodapé Final (mais suave)
    const subtleInitialClass = 'opacity-0';
    const subtleFinalClass = 'opacity-100';

    return (
        <footer className="bg-[#f4f4f4] border-t border-gray-200">
            <div className="mx-auto max-w-[80%] space-y-12 px-4 py-16 sm:px-6 lg:space-y-20 lg:px-8">
                
                {/* GRID PRINCIPAL */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    
                    {/* LOGO + DESCRIÇÃO (Grupo 1) - Delay 100ms */}
                    <AnimateOnScroll
                        classNameInitial={initialClass}
                        classNameFinal={finalClass}
                        transitionProps={`${transitionProps} delay-100`}
                    >
                        <img src="logo.png" className="rotate-[10deg] w-[80px] h-[80px]" alt="Logo Hupp" />

                        <p className="mt-4 max-w-xs text-black text-base leading-relaxed">
                            A Hupp transforma ideias em crescimento. Somos movidos por estratégia, design e tecnologia para acelerar resultados.
                        </p>

                        {/* Redes Sociais */}
                        <ul className="mt-8 flex gap-6">
                            {SocialIcons.map((social, i) => (
                                <li key={i}>
                                    <a
                                        href="#"
                                        className="text-black transition hover:text-[#0295D5]"
                                        aria-label={social.name}
                                    >
                                        <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d={social.svg}></path>
                                        </svg>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </AnimateOnScroll>

                    {/* LINKS (Grupo 2) - Delay 300ms */}
                    <AnimateOnScroll
                        classNameInitial={initialClass}
                        classNameFinal={finalClass}
                        transitionProps={`${transitionProps} delay-300`}
                        className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-2"
                    >
                        
                        {/* SOBRE */}
                        <div>
                            <p className="font-semibold text-black text-lg">Sobre</p>
                            <ul className="mt-6 space-y-3 text-sm">
                                <li><a href="#" className="text-gray-500 hover:text-black">Quem somos</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-black">Nossa missão</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-black">Time</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-black">Carreiras</a></li>
                            </ul>
                        </div>

                        {/* SERVIÇOS */}
                        <div>
                            <p className="font-semibold text-black text-lg">Serviços</p>
                            <ul className="mt-6 space-y-3 text-sm">
                                <li><a href="#" className="text-gray-500 hover:text-black">Branding & Design</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-black">Sites e Landing Pages</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-black">Gestão de Tráfego</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-black">Automação de Marketing</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-black">Consultoria Estratégica</a></li>
                            </ul>
                        </div>

                        {/* RECURSOS */}
                        <div>
                            <p className="font-semibold text-black text-lg">Recursos</p>
                            <ul className="mt-6 space-y-3 text-sm">
                                <li><a href="#" className="text-gray-500 hover:text-black">Blog</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-black">Guias e eBooks</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-black">Ferramentas</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-black">Estudos de caso</a></li>
                            </ul>
                        </div>

                        {/* CONTATO */}
                        <div>
                            <p className="font-semibold text-black text-lg">Contato</p>
                            <ul className="mt-6 space-y-3 text-sm">
                                <li><a href="#" className="text-gray-500 hover:text-black">Fale conosco</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-black">Trabalhe conosco</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-black">suporte@hupp.com</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-black">+55 (11) 99999-9999</a></li>
                            </ul>
                        </div>
                    </AnimateOnScroll>
                </div>

                {/* RODAPÉ FINAL (Copyright/Terms) (Grupo 3) - Delay 500ms (apenas Fade-in) */}
                <AnimateOnScroll
                    classNameInitial={subtleInitialClass}
                    classNameFinal={subtleFinalClass}
                    transitionProps={`${transitionProps} duration-1000 delay-500`}
                    className="pt-6 border-t border-gray-950 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500"
                >
                    <p>&copy; {new Date().getFullYear()} Hupp. Todos os direitos reservados.</p>
                    <div className="flex gap-4 mt-4 sm:mt-0">
                        <a href="#" className="hover:text-black">Política de Privacidade</a>
                        <a href="#" className="hover:text-black">Termos de Uso</a>
                        <a href="#" className="hover:text-black">Cookies</a>
                    </div>
                </AnimateOnScroll>
            </div>
        </footer>
    );
}