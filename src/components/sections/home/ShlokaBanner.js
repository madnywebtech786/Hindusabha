import OmMark from "@/components/motifs/OmMark";
import MandalaBackdrop from "@/components/motifs/MandalaBackdrop";
import Reveal from "@/components/ui/Reveal";

export default function ShlokaBanner() {
  return (
    <section className="relative overflow-hidden bg-ink py-32 sm:py-44">
      <MandalaBackdrop className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 text-gold/[0.08]" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 px-5 text-center sm:px-8">
        <Reveal>
          <OmMark className="h-14 w-14 sm:h-16 sm:w-16" />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-devanagari text-4xl leading-relaxed text-cream-deep sm:text-5xl lg:text-6xl">
            वसुधैव कुटुम्बकम्
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="font-display text-2xl italic leading-relaxed text-white/80 sm:text-3xl lg:text-4xl">
            &ldquo;The whole world is one family.&rdquo;
          </p>
        </Reveal>
        <Reveal delay={0.26}>
          <div className="mt-3 h-px w-20 bg-[linear-gradient(90deg,#ED6528,#C1262C)]" />
        </Reveal>
      </div>
    </section>
  );
}
