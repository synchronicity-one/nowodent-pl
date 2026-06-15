import Image from "next/image";

const navLinks = [
  { href: "#uslugi", label: "Usługi" },
  { href: "#godziny", label: "Godziny" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-gold/20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Blok 1 - identyfikacja */}
          <div className="flex flex-col gap-4">
            <Image
              src="/logo-nd.webp"
              alt="NowoDent stomatologia Kraśnik"
              width={440}
              height={322}
              className="h-[120px] w-auto self-start"
            />
            <p
              className="text-sm text-gold-dark tracking-[1px]"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              lek. dent. Magdalena Nowomiejska
            </p>
          </div>

          {/* Blok 2 - kontakt */}
          <div className="flex flex-col gap-3" style={{ fontFamily: "var(--font-jost)" }}>
            <h3 className="text-sm uppercase tracking-[2px] text-green-marble font-bold">Kontakt</h3>
            <p className="text-sm text-gold-dark not-italic">
              ul. Lubelska 56A<br />23-200 Kraśnik
            </p>
            <a href="tel:515038555" className="text-sm text-gold-dark hover:text-green-marble transition-colors">
              tel. 515 038 555
            </a>
            <p className="text-sm text-gold-dark">
              pon.–pt. 8:00–17:00<br />sob. 9:00–14:00
            </p>
          </div>

          {/* Blok 3 - nawigacja */}
          <div className="flex flex-col gap-3" style={{ fontFamily: "var(--font-jost)" }}>
            <h3 className="text-sm uppercase tracking-[2px] text-green-marble font-bold">Nawigacja</h3>
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-gold-dark hover:text-green-marble transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Pasek dolny */}
        <div
          className="mt-10 flex flex-col gap-3 border-t border-gold/20 pt-6 text-xs text-gold-dark md:flex-row md:items-center md:justify-between"
          style={{ fontFamily: "var(--font-jost)" }}
        >
          <p>© 2026 NowoDent. Wszelkie prawa zastrzeżone.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-green-marble transition-colors">Polityka prywatności</a>
            <a href="#" className="hover:text-green-marble transition-colors">RODO</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
