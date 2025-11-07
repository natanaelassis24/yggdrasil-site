"use client";

import Link from "next/link";
import Image from "next/image";
import { Home, Info, Cpu, FlaskConical } from "lucide-react";

export function Navbar() {
  const menuItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/sobre", icon: Info, label: "Sobre" },
    { href: "/projetos", icon: Cpu, label: "Projetos" },
    { href: "/laboratorio", icon: FlaskConical, label: "Laboratório" },
  ];

  return (
    <>
      {/* ===== NAVBAR SUPERIOR - DESKTOP ===== */}
      <nav className="hidden md:flex w-full bg-black/80 border-b border-[#bfa76f]/30 fixed top-0 left-0 z-50 backdrop-blur-md shadow-[0_2px_15px_rgba(191,167,111,0.15)]">
        <div className="max-w-7xl w-full mx-auto flex justify-between items-center px-10 py-4">
          {/* Logo + título */}
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Yggdrasil Logo"
              width={40}
              height={40}
              className="drop-shadow-[0_0_12px_rgba(191,167,111,0.6)]"
            />
            <h1 className="text-xl font-bold text-[#e6cc8c] tracking-wide select-none drop-shadow-[0_0_6px_rgba(191,167,111,0.8)]">
              Yggdrasil
            </h1>
          </div>

          {/* Links centralizados e mais visíveis */}
          <div className="flex space-x-12">
            {menuItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-[#f5d98b] font-semibold text-lg tracking-wide hover:text-[#fff3c6] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,230,150,0.9)]"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* ===== NAVBAR INFERIOR - MOBILE ===== */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-black/90 border-t border-[#bfa76f]/30 backdrop-blur-lg flex justify-around py-3 z-50">
        {menuItems.map(({ href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex flex-col items-center justify-center group"
          >
            <Icon
              size={26}
              className="text-[#f5d98b] drop-shadow-[0_0_10px_rgba(191,167,111,0.8)] group-hover:scale-110 transition-transform"
            />
          </Link>
        ))}
      </nav>
    </>
  );
}
