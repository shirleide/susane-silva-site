type IconProps = {
  className?: string;
};

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M20 11.7a8 8 0 0 1-11.8 7l-4.2 1.1 1.1-4A8 8 0 1 1 20 11.7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 8.4c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.4.5c-.1.1-.2.3-.1.5.3.6.8 1.2 1.4 1.7.6.5 1.2.8 1.9 1 .2.1.4 0 .5-.2l.5-.6c.2-.2.4-.3.7-.2l1.5.7c.3.1.4.3.4.6 0 .5-.2 1.3-.7 1.7-.5.4-1.3.5-2.2.3-1.5-.3-3.2-1.2-4.6-2.6-1.4-1.4-2.3-3-2.6-4.4-.2-.8-.1-1.5.3-2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M4 6h16v12H4V6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect
        x="5"
        y="5"
        width="14"
        height="14"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.7" cy="7.6" r="1" fill="currentColor" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.7 8.7H3.8v10h2.9v-10Z" />
      <path d="M5.3 7.3a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4Z" />
      <path d="M20.2 13.1c0-3-1.6-4.6-4-4.6-1.8 0-2.7 1-3.1 1.7V8.7h-2.8v10h2.9v-5.5c0-1.4.8-2.3 2-2.3s2 .8 2 2.4v5.4h3v-5.6Z" />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.3 3.5c.3 2.4 1.7 3.8 4.1 4v2.8a7.5 7.5 0 0 1-4.1-1.2v5.9c0 3-2.2 5.4-5.5 5.4-3 0-5.2-2-5.2-4.8 0-3.2 2.5-5 5.8-5 .4 0 .7 0 1 .1v2.9a4.5 4.5 0 0 0-1.2-.2c-1.5 0-2.5.8-2.5 2.1 0 1.2.9 2 2.1 2 1.4 0 2.3-.9 2.3-2.6V3.5h3.2Z" />
    </svg>
  );
}

export function YouTubeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.2 7.6c-.2-.9-.9-1.5-1.8-1.8C17.9 5.4 12 5.4 12 5.4s-5.9 0-7.4.4c-.9.3-1.6.9-1.8 1.8-.4 1.6-.4 4.9-.4 4.9s0 3.3.4 4.9c.2.9.9 1.5 1.8 1.8 1.5.4 7.4.4 7.4.4s5.9 0 7.4-.4c.9-.3 1.6-.9 1.8-1.8.4-1.6.4-4.9.4-4.9s0-3.3-.4-4.9ZM10 15.2V9.8l5.2 2.7-5.2 2.7Z" />
    </svg>
  );
}

export function SpotifyIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3.2a8.8 8.8 0 1 0 0 17.6 8.8 8.8 0 0 0 0-17.6Zm4 12.7c-.2.3-.5.4-.8.2-2.1-1.3-4.8-1.6-7.9-.9-.3.1-.6-.1-.7-.4-.1-.4.1-.7.4-.8 3.4-.8 6.4-.4 8.8 1.1.3.2.4.5.2.8Zm1.1-2.4c-.2.3-.6.4-.9.2-2.4-1.5-6.1-1.9-8.9-1-.4.1-.7-.1-.8-.5-.1-.3.1-.7.5-.8 3.2-1 7.2-.5 10 1.2.3.2.4.6.1.9Zm.1-2.5c-2.9-1.7-7.6-1.9-10.3-1-.4.1-.9-.1-1-.5-.1-.5.1-.9.5-1.1 3.2-1 8.4-.8 11.7 1.2.4.2.5.7.3 1.1-.3.4-.8.5-1.2.3Z" />
    </svg>
  );
}

export function BriefcaseIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M9 7V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8V7"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4 8h16v10H4V8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M4 12h16M10 12v1h4v-1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GraduationIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="m3 9 9-4 9 4-9 4-9-4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M7 11.2V15c0 1.4 2.2 3 5 3s5-1.6 5-3v-3.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MegaphoneIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M5 13H3V8h2l9-3v11l-9-3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8 14l1 5h3l-1.5-4.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M17 8.5c1 .7 1.5 1.8 1.5 3S18 13.6 17 14.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M4 19c.7-2.5 2.4-4 5-4s4.3 1.5 5 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M15.5 10a2.5 2.5 0 1 0-1-4.8M15.8 15.3c2 .4 3.4 1.7 4.2 3.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
