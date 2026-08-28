import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-primary/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <Image
            src="/images/logo.webp"
            alt="Sant Mahasabha Society of Alberta"
            width={203}
            height={119}
            className="h-24 w-full"
          />
          <p className="max-w-xs font-body text-sm leading-relaxed text-ink-muted">
            Serving the Hindu community of Calgary and Alberta through
            spiritual guidance, cultural preservation, and seva.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-display text-lg font-semibold text-ink">
            Canada Office
          </h3>
          <div className="flex items-start gap-2.5 font-body text-sm text-ink-muted">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>4852, 50th Ave NE, Calgary, AB T3G 4L8</span>
          </div>
          <a
            href="tel:+14036812889"
            className="flex items-center gap-2.5 font-body text-sm text-ink-muted transition-colors hover:text-secondary"
          >
            <Phone className="h-4 w-4 shrink-0 text-primary" />
            403-681-2889
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-display text-lg font-semibold text-ink">
            International Office
          </h3>
          <div className="flex items-start gap-2.5 font-body text-sm text-ink-muted">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>Mandir Marg, New Delhi, India 110001</span>
          </div>
          <nav className="mt-2 flex flex-col gap-2 font-body text-sm">
            <Link href="/about" className="text-ink-muted transition-colors hover:text-secondary">
              About the Society
            </Link>
            <Link href="/leadership" className="text-ink-muted transition-colors hover:text-secondary">
              Leadership
            </Link>
            <Link href="/gallery" className="text-ink-muted transition-colors hover:text-secondary">
              Gallery
            </Link>
            <Link href="/in-the-news" className="text-ink-muted transition-colors hover:text-secondary">
              In the News
            </Link>
            <Link href="/donate" className="text-ink-muted transition-colors hover:text-secondary">
              Donate
            </Link>
            <Link href="/contact" className="text-ink-muted transition-colors hover:text-secondary">
              Contact
            </Link>
          </nav>
        </div>
      </div>

      <div className="border-t border-primary/10 px-5 py-6 sm:px-8">
        <p className="mx-auto max-w-7xl text-center font-body text-xs text-ink-muted">
          © {new Date().getFullYear()} Sant Mahasabha Society of Alberta. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
