type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.24em] text-[#B8704F]">
          {eyebrow}
        </span>
      )}

      <h2
        className="text-[36px] font-black leading-tight text-[#3A2118] sm:text-[44px] lg:text-[56px]"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-[#6F4A3C]">
          {description}
        </p>
      )}
    </div>
  );
}