import { BarChart3, Feather, UsersRound, Zap } from "lucide-react";

const steps = [
  {
    number: "ETAPA 01",
    title: "Diagnóstico Estratégico",
    description:
      "Mapeamento completo do cenário atual, objetivos, desafios e oportunidades. Através de um assessment e da sessão raio-X, identificamos padrões, gargalos e potenciais de crescimento com direcionamento estratégico personalizado.",
    icon: UsersRound,
    color: "bg-[#C77B59]",
  },
  {
    number: "ETAPA 02",
    title: "Análise de Problemas",
    description:
      "Realizamos uma análise estratégica baseada em dados, contexto e informações levantadas durante o processo para identificar os principais desafios que impactam performance, crescimento, posicionamento, cultura e tomada de decisão.",
    icon: BarChart3,
    color: "bg-[#596747]",
  },
  {
    number: "ETAPA 03",
    title: "Estratégia Utilizada",
    description:
      "Ao longo de todo o trabalho, mantemos o cliente no centro das decisões, com práticas como: escuta ativa, frameworks estratégicos e checkpoints contínuos para garantir melhoria constante e resultados alinhados aos objetivos desejados.",
    icon: Feather,
    color: "bg-[#A65F43]",
  },
  {
    number: "ETAPA 04",
    title: "Execução e Acompanhamento",
    description:
      "Ao longo de todo o trabalho, mantemos o cliente no centro das decisões, com práticas como: escuta ativa, frameworks estratégicos e checkpoints contínuos para garantir melhoria constante e resultados alinhados aos objetivos desejados.",
    icon: Zap,
    color: "bg-[#C77B59]",
  },
];

export function MethodologySection() {
  return (
    <section id="metodo" className="bg-white px-5 py-24 md:px-8 lg:px-0">
      <div className="mx-auto max-w-[900px]">
        <div className="text-center">
          <h2
            className="text-[34px] font-black leading-tight text-[#87452E] sm:text-[44px]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Como a gente trabalha junto
          </h2>
          <p className="mx-auto mt-5 max-w-[650px] text-[12px] leading-5 text-[#302D2A]">
            Não existe mágica, existe método. E o meu combina autoconhecimento
            real com estratégia de mercado.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="rounded-[3px] bg-[#F2EEE9] px-8 py-7"
              >
                <div className="flex gap-5">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white ${step.color}`}>
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <div>
                    <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-[#8C827B]">
                      {step.number}
                    </span>

                    <h3
                      className="mt-1 text-[16px] font-black leading-tight text-[#2B211E]"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {step.title}
                    </h3>

                    <p className="mt-4 text-[12px] leading-[1.55] text-[#4B423C]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
