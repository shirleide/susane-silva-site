import {
  BriefcaseBusiness,
  Gem,
  HeartHandshake,
  MessageCircle,
  Rocket,
  Star,
  UserRound,
} from "lucide-react";
import { siteConfig } from "@/data/site";

const mpaFeatures = [
  "Acompanhamento individualizado anual.",
  "Curso da metodologia gravado e atividades de apoio.",
  "Uma comunidade de alunas mais arrochada do país.",
  "Estratégia de personal branding e presença no mercado de inovação.",
  "Equipe pedagógica com orientadora e mentores especialistas.",
  "Suporte contínuo via WhatsApp durante o programa.",
  "Sessão raio X para analisar seu contexto e criar um plano de ação focado.",
];

const services = [
  {
    title: "Mentoria Eixo",
    description:
      "Mentoria de carreira com acompanhamento exclusivo. Para quem exige um trabalho diferenciado, com altíssima proximidade com a mentora e direcionamento estratégico focado no seu momento.",
    button: "Agendar mentoria",
    icon: UserRound,
  },
  {
    title: "Palestra",
    description:
      "Palestras e treinamentos estratégicos sobre liderança, carreira, protagonismo, agilidade, inovação, desenvolvimento humano e transformação social para empresas, universidades e organizações.",
    button: "Solicite um orçamento",
    icon: BriefcaseBusiness,
  },
  {
    title: "Workshop ao vivo",
    description:
      "Capacitação sob medida, estruturada exatamente dentro do contexto da sua empresa e da sua equipe, para alinhar processos e acelerar resultados.",
    button: "Solicitar orçamento",
    icon: Star,
  },
  {
    title: "Gestão de Projetos",
    description:
      "Consultoria e treinamentos em gestão de projetos, cultura ágil, Data Driven e eficiência operacional para equipes, organizações e lideranças.",
    button: "Solicite orçamento",
    icon: Gem,
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-[#596747] px-5 py-24 text-white md:px-8 lg:px-0">
      <div className="mx-auto max-w-[840px]">
        <div className="text-center">
          <h2
            className="text-[34px] font-black leading-tight sm:text-[44px]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Como posso te ajudar
          </h2>

          <p className="mt-5 text-[12px] text-white/85">
            Nada de “cases perfeitos”. Aqui é estratégia real, execução
            arrochada e resultado de verdade.
          </p>
        </div>

        <article className="relief-card relative mt-16 rounded-[3px] border-2 border-[#87452E] bg-white px-6 py-6 text-[#302D2A] shadow-[0_8px_22px_rgba(0,0,0,0.12)] md:px-8">
          <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#87452E] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
            Mais procurado
          </span>

          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#596747] text-white">
              <Rocket size={18} />
            </div>

            <div className="min-w-0 flex-1">
              <h3
                className="text-[20px] font-black leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                MPA DIGITAL - Programa de aceleração de carreira
              </h3>

              <p className="mt-4 text-[12px] leading-5">
                Programa completo de 3 meses para profissionais em transição de
                carreira. Análise profunda de perfil, mapeamento de mercado,
                estratégia de posicionamento e acompanhamento contínuo.
              </p>

              <div className="mt-5 grid grid-cols-1 gap-x-10 gap-y-3 md:grid-cols-2">
                {mpaFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#D6B5A3] text-[10px] font-bold text-white">
                      ✓
                    </span>
                    <span className="text-[11px] leading-5">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href={siteConfig.jornadaProtagonistaMpa}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-[3px] bg-[#87452E] px-5 py-3 text-[12px] font-bold text-white transition hover:bg-[#6F3724]"
              >
                <MessageCircle size={14} />
                Saiba mais
              </a>
            </div>
          </div>
        </article>

        <div className="mt-8 grid grid-cols-1 gap-7 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="relief-card flex min-h-[336px] rounded-[3px] border-2 border-[#87452E] bg-white p-7 text-[#302D2A] shadow-[0_8px_22px_rgba(0,0,0,0.10)]"
              >
                <div className="flex w-full items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#596747] text-white">
                    <Icon size={18} />
                  </div>

                  <div className="flex min-h-full flex-1 flex-col">
                    <h3
                      className="text-[20px] font-black leading-tight"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {service.title}
                    </h3>

                    <p className="mt-4 text-[12px] leading-5">
                      {service.description}
                    </p>

                    <a
                      href="#contato"
                      className="mt-auto inline-flex w-fit items-center gap-2 rounded-[3px] bg-[#87452E] px-5 py-3 text-[12px] font-bold text-white transition hover:bg-[#6F3724]"
                    >
                      <MessageCircle size={14} />
                      {service.button}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex items-start gap-4 text-white">
            <HeartHandshake className="mt-1 h-7 w-7 shrink-0" />
            <div>
              <h3
                className="text-[20px] font-black"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Consultoria social
              </h3>
              <p className="mt-2 text-[12px] text-white/85">
                Rodas de conversa, mentoria e storytelling profissional.
              </p>
            </div>
          </div>

          <a
            href="#contato"
            className="inline-flex justify-center rounded-[3px] border border-white px-8 py-3 text-[12px] font-semibold text-white transition hover:bg-white hover:text-[#596747]"
          >
            Entre em contato
          </a>
        </div>
      </div>
    </section>
  );
}
