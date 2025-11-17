// @flow strict
'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Fechar menu ao mudar de rota
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  // Efeito de scroll para navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: "/#about", label: "SOBRE" },
    { href: "/#projects", label: "PROJETOS" },
    { href: "/#experience", label: "EXPERIÊNCIA" },
    { href: "/#skills", label: "SKILLS" },
    { href: "/#education", label: "FORMAÇÃO" },
  ];

  return (
    <nav className={`top-0 left-0 right-0 z-50 transition-all duration-300`}>
      <div className="container mx-auto ">
        <div className="mt-2 flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-[#16f2b3] text-2xl sm:text-3xl font-bold transition-transform duration-300 flex-shrink-0"
            onClick={closeMenu}
          >
            SAMUEL DAVI
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="relative px-3 py-2 lg:px-4 lg:py-2 group"
              >
                <div className="text-sm text-white transition-all duration-300 hover:text-[#16f2b3] font-medium">
                  {item.label}
                </div>
               
              </Link>
            ))}
          </div>

          {/* Botão Mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative focus:outline-none z-60"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1.5 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1.5 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"
              }`}
            ></span>
          </button>
        </div>

        {/* Menu Mobile */}
        <div
          className={`md:hidden fixed top-16 left-0 right-0 bg-gray-900/98 backdrop-blur-lg border-t border-gray-800 transition-all duration-300 ease-in-out z-50 ${
            isMenuOpen
              ? "max-h-96 opacity-100 py-4 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col items-center space-y-1 px-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="w-full text-center"
                onClick={closeMenu}
              >
                <div className="text-base text-white transition-all duration-300 font-medium border-b border-gray-800 py-4 active:bg-gray-800/50 active:text-[#16f2b3]">
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay para mobile */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40 md:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      />
    </nav>
  );
}

export default Navbar;