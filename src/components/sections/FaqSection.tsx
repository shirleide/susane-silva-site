const faqs = [
  {
    question: "Como funciona a mentoria de reposicionamento profissional?",
    answer:
      "A mentoria é um programa de 3 meses com 12 sessões individuais de 60 minutos. Começamos com um diagnóstico profundo do seu perfil, seguido de análise de mercado, construção de estratégia de posicionamento e acompanhamento durante processos seletivos. Todo o trabalho é personalizado e baseado em suas competências, valores e objetivos.",
  },
  {
    question: "Qual a diferença entre mentoria e coaching de carreira?",
  },
  {
    question: "Para quem a mentoria é indicada?",
  },
  {
    question: "As sessões são online ou presenciais?",
  },
  {
    question: "Como funciona a primeira sessão?",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="bg-[#EDE7DF] px-5 py-20 md:px-8 lg:px-0 lg:py-24">
      <div className="mx-auto max-w-[620px]">
        <div className="text-center">
          <h2
            className="text-[34px] font-black leading-tight text-[#87452E] sm:text-[44px]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Dúvidas comuns
          </h2>
          <p className="mt-3 text-[12px] leading-5 text-[#302D2A]">
            As perguntas que todo mundo faz antes de começar
          </p>
        </div>

        <div className="mt-14 space-y-3">
          {faqs.map((item, index) => (
            <details
              key={item.question}
              open={index === 0}
              className="group rounded-[4px] bg-white px-6 py-5 shadow-[0_1px_2px_rgba(43,33,30,0.1)] open:shadow-[0_3px_8px_rgba(43,33,30,0.18)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[13px] font-bold leading-5 text-[#2B211E]">
                {item.question}
                <span className="shrink-0 text-[15px] font-medium leading-none text-[#2B211E] group-open:hidden">
                  +
                </span>
                <span className="hidden shrink-0 text-[15px] font-medium leading-none text-[#2B211E] group-open:inline">
                  -
                </span>
              </summary>
              {item.answer && (
                <p className="mt-8 max-w-[520px] text-[12px] leading-6 text-[#4B423C]">
                  {item.answer}
                </p>
              )}
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
