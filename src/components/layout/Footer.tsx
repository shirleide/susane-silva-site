import Image from "next/image";
import {
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  SpotifyIcon,
  TikTokIcon,
  WhatsAppIcon,
  YouTubeIcon,
} from "@/components/ui/Icons";
import { siteConfig } from "@/data/site";

const footerLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Metodologia", href: "#metodo" },
  { label: "Depoimentos", href: "#depoimentos" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#contato",
    Icon: LinkedInIcon,
    className: "text-[#0A66C2]",
  },
  {
    label: "Instagram",
    href: siteConfig.instagram,
    Icon: InstagramIcon,
    className: "text-[#C13584]",
  },
  {
    label: "TikTok",
    href: "#contato",
    Icon: TikTokIcon,
    className: "text-[#111111]",
  },
  {
    label: "YouTube",
    href: siteConfig.youtube,
    Icon: YouTubeIcon,
    className: "text-[#FF0000]",
  },
  {
    label: "Spotify",
    href: siteConfig.spotify,
    Icon: SpotifyIcon,
    className: "text-[#1DB954]",
  },
];

export function Footer() {
  return (
    <footer className="bg-[#F2EEE9] px-5 py-8 text-[#2F2A27] md:px-8 lg:px-0">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid grid-cols-1 gap-10 border-b border-[#DDD4CC] pb-7 md:grid-cols-[1fr_180px_210px] md:gap-16">
          <div>
            <Image
              src="/assets/susane-silva-logo.png"
              alt="Susane Silva assessoria"
              width={243}
              height={48}
              className="h-auto w-[243px]"
            />
            <p className="mt-4 text-[13px] leading-5 text-[#2F2A27]">
              Consultoria &amp; Mentoria com estratégia, resultados e arrocho.
            </p>

            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map(({ Icon, ...item }) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-[0_1px_2px_rgba(43,33,30,0.08)]"
                >
                  <Icon className={`h-4 w-4 ${item.className}`} />
                </a>
              ))}
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="E-mail"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#596747] shadow-[0_1px_2px_rgba(43,33,30,0.08)]"
              >
                <MailIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:pt-1">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#6F625C]">
              Navegação
            </h3>
            <nav className="mt-4 grid gap-3">
              {footerLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[12px] leading-none text-[#2F2A27] transition hover:text-[#87452E]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:pt-1">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#6F625C]">
              Contato
            </h3>
            <div className="mt-4 grid gap-3 text-[12px] leading-none text-[#2F2A27]">
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition hover:text-[#87452E]"
              >
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-[#87452E]"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                81 999 551 785
              </a>
              <span>Pernambuco, Brasil</span>
            </div>
          </div>
        </div>

        <p className="pt-7 text-center text-[10px] text-[#8A817B]">
          © {new Date().getFullYear()} Susane Silva. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
