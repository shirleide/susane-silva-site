"use client";

import { useState } from "react";
import { Heart, Sparkles, Star, TrendingUp } from "lucide-react";

const testimonials = [
  {
    name: "Kelly Vaver",
    role: "Mestre em Biotecnologia (USP/Berlin)",
    text:
      "Hoje estou mais confiante sobre mim mesma. A mentoria me abriu para várias possibilidades além da carreira acadêmica.",
    result:
      "Fortalecimento da confiança profissional e ampliação das possibilidades de carreira.",
    icon: TrendingUp,
    color: "bg-[#D2A086]",
  },
  {
    name: "Keller Bernardo Santos",
    role: "Profissional em transição e desenvolvimento de carreira",
    text:
      "A assessoria foi maravilhosa. Me ajudou a encontrar uma recolocação no mercado em menos de 2 meses. Também me ajudou a ter mais confiança, foco e entender onde quero chegar.",
    result:
      "Recolocação profissional em menos de 2 meses e maior clareza de carreira.",
    icon: Star,
    color: "bg-[#596747]",
  },
  {
    name: "Eurico Valverde",
    role: "Mentorado MPA",
    text:
      "A Susane conseguiu me mostrar caminhos que eu não enxergava. Passei a me posicionar melhor profissionalmente.",
    result:
      "Melhor posicionamento profissional e direcionamento estratégico para a carreira.",
    icon: Heart,
    color: "bg-[#C77B59]",
  },
  {
    name: "Adelma Meneses",
    role: "Mentorada MPA",
    text:
      "A mentoria me ajudou a organizar meus objetivos e acreditar mais no meu potencial.",
    result: "Clareza profissional e fortalecimento da autoconfiança.",
    icon: Sparkles,
    color: "bg-[#A65F43]",
  },
  {
    name: "Depoimento sobre aumento salarial",
    role: "Mentorado(a) MPA",
    text:
      "Relato de evolução profissional culminando em uma oportunidade com remuneração significativamente superior.",
    result: "Crescimento financeiro e valorização profissional.",
    icon: TrendingUp,
    color: "bg-[#D2A086]",
  },
  {
    name: "Depoimento sobre transição para Agilidade",
    role: "Mentorado(a) MPA",
    text: "Relato de migração de área com apoio da mentoria.",
    result: "Transição profissional bem-sucedida para atuação em Agilidade.",
    icon: Star,
    color: "bg-[#596747]",
  },
  {
    name: "Depoimento sobre recolocação profissional",
    role: "Mentorado(a) MPA",
    text: "Relato de conquista de nova oportunidade após processo de mentoria.",
    result: "Recolocação profissional e retomada da confiança.",
    icon: Heart,
    color: "bg-[#C77B59]",
  },
];

export function TestimonialsSection() {
  const [showMoreTestimonials, setShowMoreTestimonials] = useState(false);
  const visibleTestimonials = showMoreTestimonials
    ? testimonials
    : testimonials.slice(0, 4);
  const hasMoreTestimonials = testimonials.length > 4;

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
          {visibleTestimonials.map((testimonial) => {
            const Icon = testimonial.icon;

            return (
              <article
                key={testimonial.name}
                className="relief-card flex flex-col rounded-[4px] bg-white p-8 shadow-[0_1px_6px_rgba(58,33,24,0.10)]"
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

                <div className="mt-6 border-t border-[#E5DDD6] pt-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#87452E]">
                    Resultado alcançado
                  </span>
                  <p className="mt-2 text-[12px] leading-5 text-[#4B423C]">
                    {testimonial.result}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {hasMoreTestimonials && (
          <div className="mt-9 text-center">
            <button
              type="button"
              onClick={() => setShowMoreTestimonials((current) => !current)}
              className="inline-flex items-center justify-center rounded-[4px] bg-[#302D2A] px-8 py-3 text-[12px] font-bold text-white shadow-[0_5px_12px_rgba(0,0,0,0.16)] transition hover:bg-[#1F1B18]"
            >
              {showMoreTestimonials ? "Carregar menos" : "Carregar mais"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
