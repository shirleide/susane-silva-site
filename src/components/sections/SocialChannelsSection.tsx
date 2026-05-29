"use client";

import { useState } from "react";
import Image from "next/image";
import { CalendarDays, ClipboardList, ExternalLink, Mic2 } from "lucide-react";
import { siteConfig } from "@/data/site";

const channels = [
  {
    title: "Papo Mentora",
    description:
      "No nosso podcast compartilhamos experiências sobre carreira, inovação com novo jeito arrolhadíssimo.",
    icon: Mic2,
    featured: true,
  },
  {
    title: "LinkedIn",
    description:
      "Reflexões sobre mercado, carreira e aquilo que aprendi na prática.",
    icon: ClipboardList,
  },
  {
    title: "Na mídia",
    description:
      "Confira o que andam falando sobre nossa consultoria na mídia.",
    icon: CalendarDays,
  },
  {
    title: "Eventos",
    description: "Confira nossa agenda de eventos.",
    icon: CalendarDays,
  },
];

const pressItems = [
  {
    title: "Cultura Informa | 18.03.2026",
    source: "Rádio Cultura do Nordeste 96,5 FM",
    href: siteConfig.entrevistaCulturaInforma,
    featured: true,
  },
  {
    title:
      "1º de Maio: Saúde mental ganha protagonismo no debate sobre o futuro do trabalho no Brasil",
    source: "iNordeste Notícias",
    href: siteConfig.materiaPublicada,
    featured: true,
  },
  {
    title: "Entrevista ao vivo | 20/03",
    source: "Rádio Transamérica Recife 92.7",
    featured: false,
  },
];

export function SocialChannelsSection() {
  const [showMorePressLinks, setShowMorePressLinks] = useState(false);
  const visiblePressItems = showMorePressLinks
    ? pressItems
    : pressItems.filter((item) => item.featured);
  const hasMorePressLinks = pressItems.some((item) => !item.featured);

  return (
    <section className="bg-white px-5 py-24 md:px-8 lg:px-0">
      <div className="mx-auto max-w-[1140px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_560px] md:items-start">
          <div>
            <h2
              className="text-[34px] font-black leading-tight text-[#87452E] sm:text-[44px]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Onde me encontrar
            </h2>

            <p className="mt-4 max-w-[470px] text-[16px] leading-7 text-[#302D2A]">
              Compartilho o que aprendi sobre carreira, liderança e mercado. Sem
              filtro, sem jargão corporativo.
            </p>

            <div className="mt-7 space-y-4">
              {channels.map((channel) => {
                const Icon = channel.icon;

                return (
                  <article
                    key={channel.title}
                    className="relief-card flex items-start gap-4 rounded-[4px] bg-[#F2EEE9] p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#596747] text-white">
                      <Icon size={18} />
                    </div>

                    <div>
                      <h3
                        className="text-[16px] font-black leading-tight text-[#2B211E]"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {channel.title}
                      </h3>

                      <p className="mt-2 text-[13px] leading-5 text-[#4B423C]">
                        {channel.description}
                      </p>

                      {channel.featured && (
                        <div className="mt-4 flex flex-wrap gap-3">
                          <a
                            href={siteConfig.youtube}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-[4px] bg-[#FF0000] px-4 py-2 text-[12px] font-bold text-white"
                          >
                            <Image
                              src="/assets/vector-youtube.png"
                              alt=""
                              width={20}
                              height={14}
                              className="h-3.5 w-5"
                            />
                            YouTube
                          </a>
                          <a
                            href={siteConfig.spotify}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-[4px] bg-[#1DB954] px-4 py-2 text-[12px] font-bold text-black"
                          >
                            <Image
                              src="/assets/vector-spotify.png"
                              alt=""
                              width={16}
                              height={16}
                              className="h-4 w-4"
                            />
                            Spotify
                          </a>
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <a
                className="inline-flex min-w-0 items-center justify-center gap-2 rounded-[4px] bg-[#C13584] px-4 py-2 text-[12px] font-bold text-white"
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/assets/instagram.png"
                  alt=""
                  width={20}
                  height={20}
                  className="h-4 w-4"
                />
                Instagram
              </a>
              <a
                className="inline-flex min-w-0 items-center justify-center gap-2 rounded-[4px] bg-black px-4 py-2 text-[12px] font-bold text-white"
                href={siteConfig.tiktok}
                target={siteConfig.tiktok.startsWith("http") ? "_blank" : undefined}
                rel={siteConfig.tiktok.startsWith("http") ? "noreferrer" : undefined}
              >
                <Image
                  src="/assets/vector-tiktok.png"
                  alt=""
                  width={16}
                  height={18}
                  className="h-4 w-3.5"
                />
                TikTok
              </a>
              <a
                className="inline-flex min-w-0 items-center justify-center gap-2 rounded-[4px] bg-[#0A66C2] px-4 py-2 text-[12px] font-bold text-white"
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/assets/vector-linkedin.png"
                  alt=""
                  width={20}
                  height={18}
                  className="h-4 w-4"
                />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[4px] shadow-[0_18px_45px_rgba(58,33,24,0.14)]">
            <Image
              src="/assets/susane-silva-mic.png"
              alt="Susane Silva em uma gravação de podcast"
              width={653}
              height={816}
              className="aspect-[653/816] h-auto w-full object-cover"
            />
          </div>
        </div>

        <div id="imprensa" className="mx-auto mt-16 max-w-[960px]">
          <h2
            className="text-center text-[32px] font-black leading-tight text-[#596747] sm:text-[38px]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Imprensa
          </h2>

          <div className="mt-8 divide-y divide-[#E5DDD6] border-y border-[#E5DDD6]">
            {visiblePressItems.map((item) => (
              item.href ? (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="relief-row grid grid-cols-1 gap-2 py-5 text-[#302D2A] transition hover:text-[#87452E] sm:grid-cols-[minmax(0,1fr)_minmax(180px,0.8fr)_auto] sm:items-center sm:gap-8"
                >
                  <strong className="text-[12px] leading-5 text-[#87452E]">
                    {item.title}
                  </strong>
                  <span className="text-[12px] leading-5 text-[#4B423C]">
                    {item.source}
                  </span>
                  <ExternalLink className="h-4 w-4 text-[#596747]" />
                </a>
              ) : (
                <div
                  key={item.title}
                  className="grid grid-cols-1 gap-2 py-5 text-[#302D2A] sm:grid-cols-[minmax(0,1fr)_minmax(180px,0.8fr)_auto] sm:items-center sm:gap-8"
                >
                  <strong className="text-[12px] leading-5 text-[#87452E]">
                    {item.title}
                  </strong>
                  <span className="text-[12px] leading-5 text-[#4B423C]">
                    {item.source}
                  </span>
                  <span className="h-4 w-4" aria-hidden="true" />
                </div>
              )
            ))}
          </div>

          {hasMorePressLinks && (
            <div className="mt-7 text-center">
              <button
                type="button"
                onClick={() => setShowMorePressLinks((current) => !current)}
                className="inline-flex items-center justify-center rounded-[4px] bg-[#302D2A] px-8 py-3 text-[12px] font-bold text-white shadow-[0_5px_12px_rgba(0,0,0,0.16)] transition hover:bg-[#1F1B18]"
              >
                {showMorePressLinks ? "Carregar menos" : "Carregar mais"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
