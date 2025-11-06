"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[80%] h-[8vh] z-50 backdrop-blur-lg bg-black/20 rounded-full shadow-lg flex items-center justify-between px-4 transition-all duration-500">
      
      {/* Logo inclinada 15° */}
      <div className="flex-shrink-0">
        <Link href="/">
          <div className="transform rotate-[15deg] filter invert-[1]">
            <Image src="/logo.png" alt="Hupp" width={50} height={50} />
          </div>
        </Link>
      </div>

      {/* Links desktop */}
      <div className="hidden md:flex space-x-8 items-center">
        <Link href="#features" className="text-white hover:text-blue-200 font-thin transition">
          Blog
        </Link>
        <Link href="#about" className="text-white hover:text-blue-200 font-thin transition">
          Como funciona
        </Link>
        <Link href="#contact" className="text-white hover:text-blue-200 font-thin transition">
          Planos
        </Link>
          <Link href="#features" className="text-white hover:text-blue-200 font-thin transition">
          Recursos
        </Link>
        <Link href="#about" className="text-white hover:text-blue-200 font-thin transition">
          Sobre
        </Link>
        <Link href="#contact" className="text-white hover:text-blue-200 font-thin transition">
          Contato
        </Link>

      </div>

      <div className="hidden md:flex space-x-8 items-center">

        <button className="px-4 py-2 rounded-full font-semibold transition-all duration-300 bg-[#F0F0F0] text-black  hover:scale-105 cursor-pointer">
          Login
        </button>
      </div>

      {/* Botão mobile */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:text-blue-300 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile flutuante */}
      {isOpen && (
        <div className="absolute top-[12vh] left-0 w-full bg-white/70 backdrop-blur-xl rounded-b-3xl shadow-lg flex flex-col items-center py-4 md:hidden">
          <Link href="#features" className="block px-4 py-2 text-gray-900 hover:text-blue-600">Recursos</Link>
          <Link href="#about" className="block px-4 py-2 text-gray-900 hover:text-blue-600">Sobre</Link>
          <Link href="#contact" className="block px-4 py-2 text-gray-900 hover:text-blue-600">Contato</Link>
          <button className="w-[90%] mt-2 py-2 rounded-full bg-gradient-to-l from-[#001033] via-[#0295D5] to-[#001033] text-white font-semibold hover:scale-105 transition-all">
            Comece Agora
          </button>
        </div>
      )}
    </nav>
  );
}
