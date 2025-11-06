import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-[#f4f4f4] text-gray-300 border-t border-gray-800">
            <div className="mx-auto max-w-[80%] space-y-12 px-4 py-16 sm:px-6 lg:space-y-20 lg:px-8">
                
                {/* GRID PRINCIPAL */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    
                    {/* LOGO + DESCRIÇÃO */}
                    <div>
                        <img src="logo.png" className="rotate-[10deg] w-[80px] h-[80px]" alt="Logo Hupp" />

                        <p className="mt-4 max-w-xs text-black text-base leading-relaxed">
                            A Hupp transforma ideias em crescimento. Somos movidos por estratégia, design e tecnologia para acelerar resultados.
                        </p>

                        {/* Redes Sociais */}
                        <ul className="mt-8 flex gap-6">
                            {[
                                { name: 'Instagram', icon: 'M12 2.163c3.204 0 ...' },
                                { name: 'LinkedIn', icon: 'M19 0h-14c-2.8...' },
                                { name: 'GitHub', icon: 'M12 2C6.477...' },
                                { name: 'Dribbble', icon: 'M12 2C6.48...' },
                            ].map((social, i) => (
                                <li key={i}>
                                    <a
                                        href="#"
                                        className="text-black transition hover:text-white"
                                        aria-label={social.name}
                                    >
                                        <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d={social.icon}></path>
                                        </svg>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* LINKS */}
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-2">
                        
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
                    </div>
                </div>

                {/* RODAPÉ FINAL */}
                <div className="pt-6 border-t border-gray-950 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Hupp. Todos os direitos reservados.</p>
                    <div className="flex gap-4 mt-4 sm:mt-0">
                        <a href="#" className="hover:text-white">Política de Privacidade</a>
                        <a href="#" className="hover:text-white">Termos de Uso</a>
                        <a href="#" className="hover:text-white">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
