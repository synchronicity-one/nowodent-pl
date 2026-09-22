import Image from "next/image";

// Mobile menu: pure CSS overlay driven by the URL hash (#menu, :target).
// No React state and no hydration. Tapping any link changes the hash,
// which closes the overlay by itself. Pattern already used on lektos.pl,
// documented in kb-nextjs file 17 section 7.

const navLinks = [
  { href: "/", label: "Start" },
  { href: "#uslugi", label: "Usługi" },
  { href: "#godziny", label: "Godziny otwarcia" },
  { href: "#lokalizacja", label: "Lokalizacja" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  return (
    <>
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

            {/* Facebook */}
            <a
              href="https://www.facebook.com/Nowodent"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NowoDent na Facebooku"
              className="ml-1 md:ml-3 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-gold/20 bg-white/80 backdrop-blur-sm transition-colors hover:bg-white"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
                className="h-6 w-6"
                fill="#1877F2"
              >
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.412c0-3.007 1.792-4.669 4.533-4.669 1.313 0 2.686.235 2.686.235v2.953H16.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
              </svg>
            </a>

            {/* Hamburger - opens the hash driven overlay */}
            <a
              href="#menu"
              aria-label="Otwórz menu"
              className="md:hidden ml-1 flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
            >
              <span className="block h-0.5 w-6 bg-gold-dark"></span>
              <span className="block h-0.5 w-6 bg-gold-dark"></span>
              <span className="block h-0.5 w-6 bg-gold-dark"></span>
            </a>
          </div>
        </div>
      </div>
    </header>

    {/* Mobile menu overlay - shown only while the hash is #menu */}
    <div
      id="menu"
      className="invisible fixed inset-0 z-[300] overflow-y-auto overscroll-contain bg-white opacity-0 transition-[opacity,visibility] duration-200 [&:target]:visible [&:target]:opacity-100 md:hidden"
    >
      <div className="mx-auto flex min-h-full max-w-6xl flex-col px-6 pb-10 pt-5">
        <div className="flex items-center justify-between">
          <Image
            src="/logo-nd.webp"
            alt=""
            width={440}
            height={322}
            className="h-[64px] w-auto"
          />
          <a
            href="#top"
            aria-label="Zamknij menu"
            className="-mr-2 flex h-11 w-11 items-center justify-center text-gold-dark"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </a>
        </div>

        <nav className="mt-6 flex flex-col">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="border-b border-gold/20 py-4 text-lg uppercase tracking-[2px] text-gold-dark"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto flex items-center gap-3 pt-10">
          <a
            href="tel:515038555"
            className="inline-flex flex-1 items-center justify-center rounded-lg bg-btn px-5 py-3 text-sm font-semibold tracking-[1px] text-white"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            515 038 555
          </a>
          <a
            href="https://www.facebook.com/Nowodent"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="NowoDent na Facebooku"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gold/20"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
              className="h-6 w-6"
              fill="#1877F2"
            >
              <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.412c0-3.007 1.792-4.669 4.533-4.669 1.313 0 2.686.235 2.686.235v2.953H16.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    </>
  );
}
