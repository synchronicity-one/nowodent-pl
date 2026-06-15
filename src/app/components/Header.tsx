"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#uslugi", label: "Usługi" },
  { href: "#godziny", label: "Godziny otwarcia" },
  { href: "#lokalizacja", label: "Lokalizacja" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-transparent backdrop-blur-sm border-b border-gold/20 overflow-visible">
      <div className="mx-auto max-w-6xl pl-0 pr-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20 gap-3">
          {/* Logo - zakotwiczone gora, wystaje 20px ponizej headera */}
          <a href="/" className="relative z-10 shrink-0 self-start rounded-b-lg border border-gold/20 bg-white/80 backdrop-blur-sm px-2" aria-label="NowoDent - strona główna">
            <Image
              src="/logo-nd.webp"
              alt="NowoDent stomatologia Kraśnik"
              width={440}
              height={322}
              priority
              className="h-[84px] md:h-[100px] w-auto"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-gold-dark text-sm tracking-[2px] uppercase hover:text-green-marble transition-colors"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right cluster: phone button + hamburger */}
          <div className="flex items-center gap-2 md:gap-0">
            <a
              href="tel:515038555"
              className="inline-flex items-center whitespace-nowrap rounded-lg bg-btn px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-semibold tracking-[1px] text-white hover:bg-btn-hover transition-colors"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              515 038 555
            </a>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={open}
              className="md:hidden ml-1 flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
            >
              <span className="block h-0.5 w-6 bg-gold-dark"></span>
              <span className="block h-0.5 w-6 bg-gold-dark"></span>
              <span className="block h-0.5 w-6 bg-gold-dark"></span>
            </button>

            {/* Mobile menu panel */}
            {open && (
              <nav className="absolute left-0 right-0 top-full flex flex-col gap-3 border-b border-gold/20 bg-white px-4 py-8 shadow-[0_12px_30px_8px_rgba(0,0,0,0.08)] md:hidden">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="py-2.5 text-gold-dark text-sm tracking-[2px] uppercase"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
