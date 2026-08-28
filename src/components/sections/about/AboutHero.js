"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ArchFrame from "@/components/motifs/ArchFrame";
import OmMark from "@/components/motifs/OmMark";
import MandalaBackdrop from "@/components/motifs/MandalaBackdrop";
import DecorativeBorder from "@/components/motifs/DecorativeBorder";

const ease = [0.22, 1, 0.36, 1];

/**
 * About page opener, built on the same cream ground, decorative motif
 * system, and framed-portrait layout as the homepage Hero — its own
 * headline and copy, so the two heroes read as one visual language
 * rather than two different treatments.
 */
export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <DecorativeBorder />

      {/* ambient mandala field, matching the homepage hero */}
      <MandalaBackdrop className="pointer-events-none absolute -left-32 top-20 h-[460px] w-[460px] text-primary/[0.09] sm:h-[560px] sm:w-[560px]" />
      <MandalaBackdrop className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] text-secondary/[0.08]" />
      <OmMark
        strokeOnly
        className="pointer-events-none absolute left-[8%] top-[62%] h-10 w-10 text-gold/25 sm:h-14 sm:w-14"
      />
      <OmMark
        strokeOnly
        className="pointer-events-none absolute right-[6%] top-[14%] h-16 w-16 rotate-12 text-primary/15 sm:h-24 sm:w-24"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-3 rounded-full border border-primary/30 bg-white/70 px-4 py-1.5 shadow-sm backdrop-blur-sm"
          >
            <OmMark className="h-4 w-4" />
            <span className="font-body text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
              About the Society
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease }}
            className="mt-7 max-w-xl font-display text-5xl font-medium leading-[1.05] text-ink sm:text-6xl lg:text-[4.4rem]"
          >
            Faith, heritage, and{" "}
            <span className="text-gradient italic">community</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease }}
            className="mt-6 max-w-md font-body text-lg leading-relaxed text-ink-muted"
          >
            The Sant Mahasabha Society of Alberta carries a spiritual
            mission rooted in tradition and dedicated to service — under
            the guidance of Swami Chakrapani Ji Maharaj.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 font-devanagari text-lg text-ink-muted/80"
          >
            सर्वे भवन्तु सुखिनः — May all beings be happy
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="relative mx-auto w-full max-w-sm lg:mx-0"
        >
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-[linear-gradient(135deg,#ED6528_0%,#C1262C_100%)] opacity-10 blur-2xl" />
          <ArchFrame className="aspect-5/6 w-full">
            <Image
              src="/images/swami-chakrapani-ji-maharaj.webp"
              alt="Swami Chakrapani Ji Maharaj, President International, Sant Mahasabha"
              fill
              sizes="(max-width: 1024px) 384px, 420px"
              className="object-cover object-top"
              priority
            />
          </ArchFrame>
          <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-gold/40 bg-white px-5 py-2.5 shadow-[0_16px_36px_-14px_rgba(42,24,16,0.35)]">
            <OmMark className="h-4 w-4" />
            <span className="font-body text-xs font-semibold tracking-wide text-ink">
              Swami Chakrapani Ji Maharaj
            </span>
          </div>
        </motion.div>
      </div>

      <DecorativeBorder flip />
    </section>
  );
}
