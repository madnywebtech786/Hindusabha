"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import ToranDivider from "@/components/motifs/ToranDivider";

const ease = [0.22, 1, 0.36, 1];

/**
 * Masonry photo grid with a full-screen lightbox viewer (prev/next,
 * keyboard nav, Escape to close). Shared by the Gallery and In the News
 * pages — both are "browse a set of photos" experiences that only differ
 * in which photo set and hero copy they use.
 */
export default function PhotoGrid({ photos }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i - 1 + photos.length) % photos.length),
    [photos.length]
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i + 1) % photos.length),
    [photos.length]
  );

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close, showPrev, showNext]);

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="columns-2 gap-4 sm:columns-3 sm:gap-5 lg:columns-4">
          {photos.map((photo, i) => (
            <Reveal
              key={photo.src}
              delay={Math.min(i, 8) * 0.04}
              className="mb-4 break-inside-avoid sm:mb-5"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className="group relative block w-full overflow-hidden rounded-2xl ring-1 ring-inset ring-primary/10 transition-shadow duration-300 hover:ring-gold/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-label={`View photo ${i + 1} of ${photos.length}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={480}
                  height={640}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(42,24,16,0.35)_0%,rgba(42,24,16,0)_38%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-16">
          <ToranDivider />
        </Reveal>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <Lightbox
            photo={photos[activeIndex]}
            index={activeIndex}
            total={photos.length}
            onClose={close}
            onPrev={showPrev}
            onNext={showNext}
          />
        ) : null}
      </AnimatePresence>
    </section>
  );
}

function Lightbox({ photo, index, total, onClose, onPrev, onNext }) {
  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease }}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close photo viewer"
        className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-[0_8px_24px_-8px_rgba(0,0,0,0.6)] transition-transform hover:scale-105 sm:right-6 sm:top-6"
      >
        <X className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous photo"
        className="absolute left-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-[0_8px_24px_-8px_rgba(0,0,0,0.6)] transition-transform hover:scale-105 sm:left-6 sm:h-14 sm:w-14"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next photo"
        className="absolute right-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-[0_8px_24px_-8px_rgba(0,0,0,0.6)] transition-transform hover:scale-105 sm:right-6 sm:h-14 sm:w-14"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <motion.div
        key={photo.src}
        className="relative z-10 flex h-full w-full max-w-4xl items-center justify-center px-16 sm:px-24"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.3, ease }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          width={1200}
          height={1600}
          sizes="90vw"
          className="max-h-[85vh] w-auto rounded-lg object-contain"
          priority
        />
      </motion.div>

      <span className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 font-body text-xs font-semibold tracking-wide text-white/80">
        {index + 1} / {total}
      </span>
    </motion.div>
  );
}
