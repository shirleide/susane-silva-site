import Image from "next/image";
import { Building2, Compass, Trophy } from "lucide-react";

const reasons = [
  {
    title: "Visão estratégica com olhar humano",
    description:
      "Unimos experiência em carreira, liderança e desenvolvimento com uma visão sociológica sobre trabalho, comportamento e transformação social, criando soluções mais humanas e conectadas à realidade.",
    icon: Building2,
  },
  {
    title: "Estratégia com experiência de mercado",
    description:
      "Com atuação em grandes empresas, multinacionais, instituições de pesquisa e universidades, além da experiência em gestão e metodologias ágeis, desenvolvemos soluções estratégicas mais humanas, eficientes e alinhadas aos desafios reais das organizações.",
    icon: Compass,
  },
  {
    title: "Resultados que importam",
    description:
      "Há mais de 6 anos atuando com agilidade, dados e desenvolvimento humano, impulsionamos lideranças, equipes e organizações a se posicionarem de forma estratégica. Conectando inovação, crescimento sustentável e impacto social.",
    icon: Trophy,
  },
];

const logos = [
  {
    src: "/assets/diagonal.png",
    alt: "Diagonal",
    width: 126,
    height: 28,
  },
  {
    src: "/assets/eng-logo.png",
    alt: "Eng",
    width: 91,
    height: 28,
  },
  {
    src: "/assets/ferreira-costa.png",
    alt: "Ferreira Costa",
    width: 84,
    height: 33,
  },
  {
    src: "/assets/google.png",
    alt: "Google",
    width: 32,
    height: 32,
  },
  {
    src: "/assets/ifpe.png",
    alt: "Instituto Federal de Pernambuco",
    width: 156,
    height: 32,
  },
  {
    src: "/assets/institutover.png",
    alt: "Instituto Ver",
    width: 108,
    height: 32,
  },
  {
    src: "/assets/ser-educacional.png",
    alt: "Ser Educacional",
    width: 82,
    height: 32,
  },
  {
    src: "/assets/pasquali-solution.png",
    alt: "Pasquali Solution",
    width: 109,
    height: 32,
  },
  {
    src: "/assets/true-change.png",
    alt: "True Change",
    width: 100,
    height: 19,
  },
];

export function WhyWorkWithUsSection() {
  return (
    <section id="sobre" className="bg-[#F2EEE9] px-5 py-24 md:px-8 lg:px-0">
      <div className="mx-auto max-w-[880px]">
        <div className="text-center">
          <h2
            className="text-[34px] font-black leading-tight text-[#87452E] sm:text-[44px]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Por que trabalhar conosco
          </h2>

          <p className="mt-5 text-[14px] leading-6 text-[#302A27]">
            Sem métodos vazios. Com estratégia, desenvolvimento humano e
            revolução social concreta.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="relief-card min-h-[320px] rounded-[4px] bg-white p-8 shadow-[0_1px_5px_rgba(58,33,24,0.10)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D8D1C9] text-[#87452E]">
                  <Icon size={18} strokeWidth={1.8} />
                </div>

                <h3
                  className="mt-7 text-[16px] font-black leading-tight text-[#201715]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {reason.title}
                </h3>

                <p className="mt-4 text-[13px] leading-[1.55] text-[#34302D]">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-7 border-t border-[#D8D1C9] pt-9">
          <p className="text-center text-[11px] text-[#3F3936]">
            Já orientei profissionais de
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-5">
            {logos.map((logo) => (
              <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-auto max-h-10 w-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
