const faqs = [
  {
    question: "Como funciona a mentoria da MPA Digital e para quem é indicada?",
    answer:
      "A mentoria oferece acompanhamento estratégico e personalizado para profissionais que desejam acelerar resultados, fortalecer posicionamento, desenvolver liderança, fazer transição de carreira ou conquistar novas oportunidades com mais clareza, direção e impacto profissional.",
  },
  {
    question: "Quais serviços a MPA Digital oferece?",
    answer:
      "A MPA Digital atua com mentoria de carreira, aceleração profissional, mentoria para especialistas em produtos digitais, soluções em tecnologia, posicionamento estratégico no LinkedIn, desenvolvimento humano, empoderamento, autoconfiança e apoio para profissionais que desejam migrar para áreas de projetos, produtos e tecnologia.",
  },
  {
    question: "Como funcionam os treinamentos e workshops?",
    answer:
      "Os treinamentos e workshops são experiências práticas e colaborativas para empresas, equipes, universidades e comunidades. As facilitações podem acontecer de forma online ou presencial em Pernambuco e região, conectando temas como agilidade, produto, software, liderança, comunicação e inovação.",
  },
  {
    question: "Como funcionam as palestras?",
    answer:
      "As palestras promovem reflexões e estratégias sobre carreira, liderança feminina, tecnologia, inovação e impacto social, podendo acontecer de forma remota ou presencial para eventos, empresas e instituições.",
  },
  {
    question: "Como funciona a consultoria para organizações?",
    answer:
      "A consultoria apoia organizações na construção de soluções mais inovadoras, humanas e estratégicas, fortalecendo processos, cultura ágil, tecnologia, diversidade, inclusão e preparação para o futuro do trabalho.",
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
              className="relief-card group rounded-[4px] bg-white px-6 py-5 shadow-[0_1px_2px_rgba(43,33,30,0.1)] open:shadow-[0_3px_8px_rgba(43,33,30,0.18)]"
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
