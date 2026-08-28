"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/leadership", label: "Leadership" },
  { href: "/gallery", label: "Gallery" },
  { href: "/in-the-news", label: "In the News" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-[0_1px_0_rgba(193,38,44,0.12)] backdrop-blur-md"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.webp"
            alt="Sant Mahasabha Society of Alberta"
            width={503}
            height={119}
            priority
            className="h-9 w-auto sm:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative font-body text-[15px] font-medium text-ink transition-colors hover:text-secondary after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[linear-gradient(135deg,#ED6528,#C1262C)] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="tel:+14036812889"
            className="flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#ED6528_0%,#C1262C_100%)] px-5 py-2.5 font-body text-sm font-semibold text-white shadow-[0_6px_18px_-6px_rgba(193,38,44,0.55)] transition-transform hover:-translate-y-0.5"
          >
            <Phone className="h-3.5 w-3.5" strokeWidth={2.5} />
            403-681-2889
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="md:hidden">
          <nav className="flex flex-col gap-1 border-t border-primary/15 bg-white px-5 pb-6 pt-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-body text-base font-medium text-ink transition-colors hover:bg-cream hover:text-secondary"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+14036812889"
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#ED6528_0%,#C1262C_100%)] px-5 py-3 font-body text-sm font-semibold text-white"
            >
              <Phone className="h-3.5 w-3.5" strokeWidth={2.5} />
              403-681-2889
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
