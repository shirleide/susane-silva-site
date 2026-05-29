import { Heart, Sparkles, Star, TrendingUp } from "lucide-react";

const testimonials = [
  {
    name: "Mariana Oliveira",
    role: "Diretora de Marketing -> VP de Produto",
    text: "Estava há 8 anos na mesma empresa, sem perspectiva de crescimento. A Susane me ajudou a enxergar oportunidades que eu nem sabia que existiam. Em 4 meses, fiz a transição para uma VP de Produto em uma startup de tecnologia. A abordagem dela é direta, estratégica e sem enrolação.",
    icon: TrendingUp,
    color: "bg-[#D2A086]",
  },
  {
    name: "Carlos Fernandes",
    role: "Gerente Financeiro -> CFO",
    text: "Sempre tive dúvidas se estava no caminho certo. A mentoria me deu clareza sobre meus pontos fortes e como posicioná-los estrategicamente. Conquistei uma posição de CFO que nem achava possível naquele momento. O processo foi transformador.",
    icon: Star,
    color: "bg-[#596747]",
  },
  {
    name: "Ana Paula Costa",
    role: "Coordenadora de RH -> Head de People",
    text: "Estava travada na carreira e não sabia como sair do lugar. A Susane me mostrou caminhos que eu nem considerava. Seu olhar estratégico e humano fez toda diferença. Hoje sou Head de People em uma empresa que admiro.",
    icon: Heart,
    color: "bg-[#C77B59]",
  },
  {
    name: "Rafael Santos",
    role: "Consultor -> Empreendedor",
    text: "Queria empreender mas tinha medo de sair da zona de conforto. O processo com a Susane me deu estrutura e confiança para dar o passo. Hoje tenho minha própria consultoria e nunca estive tão realizado profissionalmente.",
    icon: Sparkles,
    color: "bg-[#A65F43]",
  },
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="bg-[#F2EEE9] px-5 py-24 md:px-8 lg:px-0">
      <div className="mx-auto max-w-[960px]">
        <div className="text-center">
          <h2
            className="mx-auto max-w-[620px] text-[34px] font-black leading-[1.08] text-[#87452E] sm:text-[48px]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            O que dizer as pessoas que seguiram nossa metodologia
          </h2>

          <p className="mt-5 text-[12px] leading-5 text-[#302D2A]">
            Acreditamos que nosso trabalho impulsiona resultados ágeis,
            concretos e transformadores.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => {
            const Icon = testimonial.icon;

            return (
              <article
                key={testimonial.name}
                className="rounded-[4px] bg-white p-8 shadow-[0_1px_6px_rgba(58,33,24,0.10)]"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white ${testimonial.color}`}
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <div>
                    <strong className="block text-[13px] text-[#2B211E]">
                      {testimonial.name}
                    </strong>
                    <span className="mt-1 block text-[11px] text-[#7E746D]">
                      {testimonial.role}
                    </span>
                  </div>
                </div>

                <p className="mt-6 text-[13px] leading-[1.65] text-[#3E3732]">
                  “{testimonial.text}”
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
