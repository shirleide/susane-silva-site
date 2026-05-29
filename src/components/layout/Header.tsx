"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";
import { WhatsAppIcon } from "@/components/ui/Icons";

const navLinks = [
  {
    label: "Início",
    href: "#inicio",
  },
  {
    label: "Sobre",
    href: "#sobre",
  },
  {
    label: "Serviço",
    href: "#servicos",
  },
  {
    label: "Metodologia",
    href: "#metodo",
  },
  {
    label: "Depoimentos",
    href: "#depoimentos",
  },
  {
    label: "Imprensa",
    href: "#imprensa",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
  {
    label: "Contato",
    href: "#contato",
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappMessage = encodeURIComponent(
    "Olá, Susane! Vim pelo site e gostaria de solicitar meu projeto."
  );
  const whatsappUrl = `${siteConfig.whatsapp}?text=${whatsappMessage}`;

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#F1E7E1] bg-white text-[#241916]">
      <div className="mx-auto flex h-[64px] max-w-[1180px] items-center justify-between px-5 md:px-8 lg:px-0">
        <a href="#inicio" onClick={closeMenu} className="group">
          <Image
            src="/assets/susane-silva-logo.png"
            alt="Susane Silva assessoria"
            width={243}
            height={48}
            priority
            className="h-auto w-[190px] md:w-[243px]"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-[12px] font-medium text-[#1F1714] transition hover:text-[#87452E]"
            >
              {item.label}
              {item.href === "#inicio" && (
                <span className="absolute -bottom-1 left-0 h-px w-full bg-[#87452E]" />
              )}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden items-center justify-center rounded-[4px] bg-[#87452E] px-6 py-3 text-[12px] font-bold text-white transition hover:bg-[#6F3724] md:inline-flex"
        >
          Solicite seu Projeto
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-[#E7D4CA] text-[#87452E] lg:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[#F1E7E1] bg-white px-5 py-5 shadow-2xl lg:hidden">
          <nav className="mx-auto flex max-w-[1180px] flex-col gap-1">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="rounded-[4px] px-3 py-3 text-sm font-medium text-[#241916] transition hover:bg-[#FFF8F3] hover:text-[#87452E]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contato"
              onClick={closeMenu}
              className="mt-4 inline-flex items-center justify-center rounded-[4px] bg-[#87452E] px-5 py-4 text-sm font-bold text-white"
            >
              Solicite seu Projeto
            </a>
          </nav>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-white bg-[#2DBD4F] text-white shadow-[0_8px_24px_rgba(0,0,0,0.22)] transition hover:scale-105"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </header>
  );
}
