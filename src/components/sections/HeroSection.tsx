import Image from "next/image";
import { Coffee } from "lucide-react";
import { heroStats } from "@/data/site";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#87452E] px-5 pb-10 pt-16 text-white md:px-8 lg:px-0 lg:pb-12 lg:pt-18"
    >
      <div className="mx-auto grid min-h-[580px] max-w-[1040px] grid-cols-1 items-center gap-10 lg:grid-cols-[0.92fr_1fr] lg:gap-12">
        <div className="mx-auto w-full max-w-[440px] lg:mx-0">
          <p
            className="text-[30px] font-semibold leading-tight text-white sm:text-[36px]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Desenvolvemos Pessoas.
          </p>

          <h1
            className="mt-4 text-[42px] font-black leading-[1.08] text-white sm:text-[56px] lg:text-[58px]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Revolucionamos Carreiras e Organizações.
          </h1>

          <p className="mt-7 max-w-[420px] text-[15px] leading-[1.75] text-white/90">
            Mais que consultoria: direção estratégica para pessoas, equipes e
            organizações que acreditam na revolução social através do
            desenvolvimento humano.
          </p>

          <a
            href="#contato"
            className="mt-7 inline-flex items-center justify-center gap-3 rounded-[4px] bg-white px-7 py-4 text-[13px] font-bold text-[#B56A4A] shadow-[0_10px_20px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(0,0,0,0.18)]"
          >
            <Coffee size={17} strokeWidth={1.8} />
            Agende um café
          </a>

          <div className="mt-7 grid max-w-[420px] grid-cols-3 border-t border-white/15 pt-6">
            {heroStats.map((item) => (
              <div key={item.label} className="text-center first:text-left last:text-right">
                <strong className="block text-[28px] font-black leading-none">
                  {item.value}
                </strong>

                <span className="mt-2 block text-[9px] font-medium leading-tight text-white/80">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px] lg:mx-0">
          <div className="relative aspect-[620/709] overflow-hidden rounded-[5px]">
            <Image
              src="/assets/susane-silva-consultora-carreira.png"
              alt="Susane Silva, consultora de carreira"
              width={620}
              height={709}
              priority
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
