import Image from "next/image";

const methodPillars = [
  {
    letter: "M",
    label: "Mentalidade\nProtagonista",
  },
  {
    letter: "P",
    label: "Posicionamento\nEstratégico",
  },
  {
    letter: "A",
    label: "Arrocho\ncom propósito",
  },
];

const mentorLogos = [
  {
    src: "/assets/mulheres-brasil.png",
    alt: "Grupo Mulheres do Brasil",
    width: 93,
    height: 64,
  },
  {
    src: "/assets/mulheres-agilistas.png",
    alt: "Mulheres Agilistas",
    width: 162,
    height: 64,
  },
  {
    src: "/assets/tech-woman.png",
    alt: "Tech Woman",
    width: 171,
    height: 64,
  },
];

export function SusaneProfileSection() {
  return (
    <section className="bg-white px-5 py-18 md:px-8 lg:px-0">
      <div className="mx-auto max-w-[1004px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[430px_1fr] md:items-center lg:gap-12">
          <div className="overflow-hidden rounded-[4px] shadow-[0_18px_50px_rgba(58,33,24,0.13)]">
            <Image
              src="/assets/susane-silva-profile.png"
              alt="Susane Silva sentada em um ambiente profissional"
              width={484}
              height={645}
              className="aspect-[484/645] h-auto w-full object-cover object-[center_36%]"
            />
          </div>

          <div>
            <h2
              className="text-[40px] font-black leading-tight text-[#87452E] sm:text-[48px]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Prazer, Susane Silva
            </h2>

            <p
              className="mt-5 max-w-[540px] text-[20px] font-black leading-[1.25] text-[#596747]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Desenvolver pessoas, movimentar espaços e transformar realidades.
              Esse é o nosso arrocho.
            </p>

            <div className="mt-6 max-w-[550px] space-y-6 text-[16px] leading-[1.55] text-[#302D2A]">
              <p>
                Sou uma pernambucana, socióloga e líder em gestão de projetos
                ágeis, consultora em organizações nacionais e internacionais.
              </p>

              <p>
                Apaixonada pela transformação que a educação pode fazer na
                realidade concreta das pessoas, uma educadora que traz leveza e
                resultados em grandes palcos da inovação.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-[14px] text-[#302D2A]">
                Desenvolvedora o método:
              </p>

              <div className="mt-5 grid max-w-[360px] grid-cols-3">
                {methodPillars.map((pillar, index) => (
                  <div
                    key={pillar.letter}
                    className={`flex flex-col items-center px-4 text-center ${
                      index > 0 ? "border-l border-[#E3D9D1]" : ""
                    }`}
                  >
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-[#596747] text-[26px] font-black text-white"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {pillar.letter}
                    </div>

                    <p className="mt-4 whitespace-pre-line text-[13px] leading-tight text-[#302D2A]">
                      {pillar.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#D8D1C9] pt-10">
          <p className="text-center text-[12px] text-[#302D2A]">
            Mentora
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
            {mentorLogos.map((logo) => (
              <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-auto max-h-16 w-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
