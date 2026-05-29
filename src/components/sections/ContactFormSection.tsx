"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import {
  InstagramIcon,
  SpotifyIcon,
  WhatsAppIcon,
  YouTubeIcon,
} from "@/components/ui/Icons";
import { siteConfig } from "@/data/site";

const socialLinks = [
  {
    label: "Instagram",
    href: siteConfig.instagram,
    Icon: InstagramIcon,
  },
  {
    label: "WhatsApp",
    href: siteConfig.whatsapp,
    Icon: WhatsAppIcon,
  },
  {
    label: "YouTube",
    href: siteConfig.youtube,
    Icon: YouTubeIcon,
  },
  {
    label: "Spotify",
    href: siteConfig.spotify,
    Icon: SpotifyIcon,
  },
];

const serviceOptions = [
  "Estratégia ágil",
  "Facilitação",
  "Gestão de Produtos Digitais",
  "Gestão e liderança",
  "Mentoria de carreira",
  "Outro assunto",
  "Palestras e eventos",
  "Treinamento",
  "Workshop",
];

const web3FormsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

type SubmitStatus = "idle" | "success" | "error" | "missing-key";

export function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const accessKey = web3FormsAccessKey;

    if (!accessKey) {
      setSubmitStatus("missing-key");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const service = String(formData.get("service") ?? "");
    const message = String(formData.get("message") ?? "");

    const payload = {
      access_key: accessKey,
      subject: `Solicitação pelo site - ${name}`,
      from_name: "Site Susane Silva",
      name,
      email,
      phone,
      service,
      message,
      to: siteConfig.email,
    };

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { success?: boolean };

      if (!response.ok || !result.success) {
        setSubmitStatus("error");
        return;
      }

      form.reset();
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contato" className="bg-[#87452E] px-5 py-20 text-white md:px-8 lg:px-0">
      <div className="mx-auto max-w-[470px]">
        <div className="text-center">
          <h2
            className="text-[34px] font-black leading-tight sm:text-[44px]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Vamos marcar uma conversa
          </h2>
          <p className="mx-auto mt-4 max-w-[360px] text-[13px] leading-5 text-white">
            Sua próxima transformação profissional ou organizacional começa com
            estratégia, direção e arrocho. Fale conosco!
          </p>
        </div>

        <form
          action="https://api.web3forms.com/submit"
          onSubmit={handleContactSubmit}
          method="post"
          className="relief-card mt-5 rounded-[4px] bg-white px-9 py-9 text-[#2B211E] shadow-[0_18px_45px_rgba(0,0,0,0.18)]"
        >
          <input type="hidden" name="access_key" value={web3FormsAccessKey} />
          <input type="hidden" name="subject" value="Solicitação pelo site - Susane Silva" />
          <input type="hidden" name="from_name" value="Site Susane Silva" />
          <input className="hidden" type="checkbox" name="botcheck" tabIndex={-1} />

          <p className="text-[10px] leading-5 text-[#6B625D]">
            Preencha os campos e eu retorno em até 24 horas
          </p>

          <label className="mt-4 block text-[11px] font-bold" htmlFor="name">
            Nome completo
          </label>
          <input
            id="name"
            name="name"
            className="mt-2 h-11 w-full rounded-[3px] border border-[#D8D1C9] px-4 text-[12px] outline-none placeholder:text-[#C8C0BA] focus:border-[#87452E]"
            placeholder="Seu nome"
            required
            type="text"
          />

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-[1fr_136px]">
            <div>
              <label className="block text-[11px] font-bold" htmlFor="email">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                className="mt-2 h-11 w-full rounded-[3px] border border-[#D8D1C9] px-4 text-[12px] outline-none placeholder:text-[#C8C0BA] focus:border-[#87452E]"
                placeholder="seu@email.com"
                required
                type="email"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold" htmlFor="phone">
                Telefone
              </label>
              <input
                id="phone"
                name="phone"
                className="mt-2 h-11 w-full rounded-[3px] border border-[#D8D1C9] px-4 text-[12px] outline-none placeholder:text-[#C8C0BA] focus:border-[#87452E]"
                placeholder="(00) 00000-0000"
                required
                type="tel"
              />
            </div>
          </div>

          <label className="mt-4 block text-[11px] font-bold" htmlFor="service">
            Serviço
          </label>
          <div className="relative mt-2">
            <select
              id="service"
              name="service"
              className="h-11 w-full appearance-none rounded-[3px] border border-[#D8D1C9] bg-white px-4 pr-10 text-[12px] text-[#C8C0BA] outline-none focus:border-[#87452E]"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Selecione o serviço desejado
              </option>
              {serviceOptions.map((service) => (
                <option key={service}>{service}</option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[15px] text-[#C8C0BA]">
              +
            </span>
          </div>

          <label className="mt-4 block text-[11px] font-bold" htmlFor="message">
            Conte um pouco sobre seu contexto
          </label>
          <textarea
            id="message"
            name="message"
            className="mt-2 min-h-28 w-full resize-none rounded-[3px] border border-[#D8D1C9] px-4 py-3 text-[12px] outline-none placeholder:text-[#C8C0BA] focus:border-[#87452E]"
            placeholder="Descreva brevemente sua situação atual e o que você busca..."
            required
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-5 h-12 w-full rounded-[4px] bg-[#CF9D83] px-5 text-[12px] font-bold text-[#2B211E] transition hover:bg-[#C18A6F] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Enviando..." : "Enviar solicitação"}
          </button>

          {submitStatus === "success" && (
            <p className="mt-4 rounded-[3px] bg-[#E9F5EA] px-4 py-3 text-center text-[11px] font-semibold leading-5 text-[#315E35]">
              Solicitação enviada com sucesso. Em breve entraremos em contato.
            </p>
          )}

          {submitStatus === "error" && (
            <p className="mt-4 rounded-[3px] bg-[#F8E7E1] px-4 py-3 text-center text-[11px] font-semibold leading-5 text-[#87452E]">
              Não foi possível enviar agora. Tente novamente em alguns instantes.
            </p>
          )}

          {submitStatus === "missing-key" && (
            <p className="mt-4 rounded-[3px] bg-[#F8E7E1] px-4 py-3 text-center text-[11px] font-semibold leading-5 text-[#87452E]">
              Configure a chave do Web3Forms para ativar o envio direto.
            </p>
          )}

          <p className="mt-8 text-center text-[10px] leading-4 text-[#8A817B]">
            Seus dados estão protegidos e não serão compartilhados
          </p>
        </form>

        <div className="mt-10 text-center">
          <p
            className="text-[17px] font-black leading-tight text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Nos acompanhe nas redes!
          </p>

          <div className="mt-5 flex items-center justify-center gap-7">
            {socialLinks.map(({ Icon, ...item }) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-6 w-6 items-center justify-center"
              >
                <Icon className="h-6 w-6 text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
