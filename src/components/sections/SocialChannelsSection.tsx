import Image from "next/image";
import { CalendarDays, ClipboardList, Mic2 } from "lucide-react";
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

export function SocialChannelsSection() {
  return (
    <section className="bg-white px-5 py-24 md:px-8 lg:px-0">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-12 md:grid-cols-[1fr_560px] md:items-start">
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
                  className="flex items-start gap-4 rounded-[4px] bg-[#F2EEE9] p-4"
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

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-[4px] bg-[#C13584] px-4 py-2 text-[12px] font-bold text-white"
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
              className="inline-flex items-center gap-2 rounded-[4px] bg-black px-4 py-2 text-[12px] font-bold text-white"
              href="#contato"
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
              className="inline-flex items-center gap-2 rounded-[4px] bg-[#0A66C2] px-4 py-2 text-[12px] font-bold text-white"
              href="#contato"
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
    </section>
  );
}
