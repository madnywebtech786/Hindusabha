"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import KalashMark from "@/components/motifs/KalashMark";
import PressFeature from "@/components/sections/shared/PressFeature";

const ease = [0.22, 1, 0.36, 1];

const VALUES = [
  {
    devanagari: "धर्म",
    roman: "Dharma",
    gloss: "Righteous conduct",
    description: "Living and upholding right action in everyday life.",
  },
  {
    devanagari: "सेवा",
    roman: "Seva",
    gloss: "Selfless service",
    description: "Service to the community, offered without expectation.",
  },
  {
    devanagari: "एकता",
    roman: "Ekta",
    gloss: "Unity",
    description: "Bringing together every generation of the Hindu community.",
  },
  {
    devanagari: "संस्कृति",
    roman: "Sanskriti",
    gloss: "Heritage",
    description: "Preserving and passing on our traditions and festivals.",
  },
];

/**
 * The founding story, told once here rather than repeating the homepage's
 * mission quote — how the Society came to exist as the Canadian chapter,
 * beside a duotone portrait. The four values follow as what that founding
 * purpose looks like carried into daily practice.
 */
export default function OurStory() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease }}
          className="relative aspect-4/5 w-full overflow-hidden rounded-4xl shadow-[0_30px_60px_-24px_rgba(42,24,16,0.3)]"
        >
          <Image
            src="/images/pawan-kumar-sharma.webp"
            alt="Pawan Kumar Sharma, Prabhari, Canada"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-[50%_20%]"
          />
        </motion.div>
        <Reveal>
          <span className="flex items-center gap-3 font-body text-xs font-semibold uppercase tracking-[0.32em] text-secondary">
            <KalashMark className="h-6 w-6" />
            Our Story
          </span>
          <h2 className="mt-8 max-w-xl font-display text-4xl font-medium leading-[1.1] text-ink sm:text-5xl">
            A Calgary chapter of a much older lineage
          </h2>
          <div className="mt-8 max-w-xl space-y-5 font-body text-base leading-relaxed text-ink-muted sm:text-lg">
            <p>
              The Sant Mahasabha traces its mission to New Delhi, where
              Swami Chakrapani Ji Maharaj leads its spiritual and
              organizational work across India and the diaspora. As Hindu
              families settled across Alberta, that same mission needed a
              home here — a place for worship, for festivals, and for the
              everyday seva that keeps a community connected to itself.
            </p>
            <p>
              The Sant Mahasabha Society of Alberta was established as
              that home: the Canadian chapter, carrying the lineage&rsquo;s
              guidance forward from a Calgary office under the leadership
              of Pawan Kumar Sharma. What began as a small gathering of
              families has grown into a spiritual anchor for the Hindu
              community across the province.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Press citation: the founding story corroborated by outside coverage,
          not another testimonial card — a dated, sourced press clipping. */}
      <PressFeature tone="border-t border-primary/10 bg-cream/40" />

      {/* Values: the founding purpose, carried into practice */}
      <div className="border-t border-white/10 bg-ink">
        <div className="mx-auto max-w-7xl px-5 pt-16 sm:px-8">
          <Reveal>
            <span className="font-body text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">
              In Practice
            </span>
            <p className="mt-3 max-w-lg font-display text-2xl font-medium italic text-white sm:text-3xl">
              &ldquo;To nurture dharma, preserve heritage, and serve the
              community with an open heart.&rdquo;
            </p>
          </Reveal>
        </div>

        <div className="mx-auto grid max-w-7xl divide-y divide-white/10 px-5 pt-12 sm:px-8 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
          {VALUES.map((value, i) => (
            <Reveal
              key={value.roman}
              delay={i * 0.06}
              className="group flex items-start gap-6 py-10 sm:px-8 sm:py-14"
            >
              <span className="font-devanagari text-6xl leading-none text-primary/70 transition-colors duration-500 group-hover:text-primary sm:text-7xl">
                {value.devanagari}
              </span>
              <div className="pt-1">
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                    {value.roman}
                  </h3>
                  <span className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/80">
                    {value.gloss}
                  </span>
                </div>
                <p className="mt-2 max-w-xs font-body text-sm leading-relaxed text-white/55">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="border-t border-white/10 py-10 text-center">
          <p className="font-devanagari text-lg text-white/50">
            सर्वे भवन्तु सुखिनः &mdash; May all beings be happy
          </p>
        </div>
      </div>
    </section>
  );
}
