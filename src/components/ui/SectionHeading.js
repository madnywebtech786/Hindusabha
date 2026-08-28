import LotusMark from "@/components/motifs/LotusMark";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}) {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`flex flex-col ${alignment} gap-4`}>
      {eyebrow ? (
        <span className="font-body text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="max-w-2xl text-4xl font-medium text-ink sm:text-5xl">
        {title}
      </h2>
      <LotusMark className="h-5 w-14 text-primary" />
      {description ? (
        <p className="max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
