"use client";

import { motion } from "framer-motion";
import OmMark from "@/components/motifs/OmMark";
import MandalaBackdrop from "@/components/motifs/MandalaBackdrop";

const ease = [0.22, 1, 0.36, 1];

/**
 * Contact page opener: same cream ground and decorative motif system as
 * the Leadership hero (no DecorativeBorder strip), text-only, centered.
 */
export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-cream">
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

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 py-24 text-center sm:px-8 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-3 rounded-full border border-primary/30 bg-white/70 px-4 py-1.5 shadow-sm backdrop-blur-sm"
        >
          <OmMark className="h-4 w-4" />
          <span className="font-body text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
            Contact
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease }}
          className="mt-7 max-w-3xl font-display text-5xl font-medium leading-[1.05] text-ink sm:text-6xl lg:text-[4.4rem]"
        >
          We would love to <span className="text-gradient italic">hear</span>{" "}
          from you
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease }}
          className="mt-6 max-w-xl font-body text-lg leading-relaxed text-ink-muted"
        >
          Reach out to our Calgary office directly, or connect with our
          international office in New Delhi.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 font-devanagari text-lg text-ink-muted/80"
        >
          अतिथि देवो भवः — The guest is akin to God
        </motion.p>
      </div>
    </section>
  );
}
