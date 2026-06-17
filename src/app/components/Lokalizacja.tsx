// Kolejnosc wyswietlania zdjec w galerii
import MapaConsent from "./MapaConsent";

const order = [6, 5, 7, 1, 2, 3, 4];

export default function Lokalizacja() {
  return (
    <section id="lokalizacja" className="bg-green-wash scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
        {/* Naglowek sekcji */}
        <div className="flex flex-col gap-3 text-center mb-12 md:mb-16">
          <p
            className="text-sm uppercase tracking-[3px] text-gold-dark"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            Nasza przychodnia
          </p>
          <h2
            className="text-3xl md:text-4xl text-green-marble font-medium"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            Lokalizacja
          </h2>
        </div>

        {/* Grid 3x3: mapa (2 komorki) + zdjecia */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {/* Mapa z consent gate (RODO) - iframe laduje sie dopiero po zgodzie */}
          <MapaConsent />

          {/* Miniatury - linki otwierajace lightbox */}
          {order.map((n) => (
            <a key={n} href={`#lb-${n}`} className="block cursor-pointer">
              <img
                src={`/galeria-${n}.webp`}
                alt={`Gabinet NowoDent w Kraśniku - wnętrze ${n}`}
                width={640}
                height={480}
                loading="lazy"
                className="h-full w-full rounded-xl object-cover shadow-lg transition-opacity hover:opacity-90"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Lightbox overlays - CSS only przez :target */}
      {order.map((n, i) => {
        const prev = order[(i - 1 + order.length) % order.length];
        const next = order[(i + 1) % order.length];
        return (
          <div key={n} id={`lb-${n}`} className="lightbox">
            <a href="#lokalizacja" className="lightbox__close" aria-label="Zamknij">×</a>
            <a href={`#lb-${prev}`} className="lightbox__nav lightbox__nav--prev" aria-label="Poprzednie">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </a>
            <img src={`/galeria-${n}-lg.webp`} alt={`Gabinet NowoDent w Kraśniku - wnętrze ${n}`} loading="lazy" />
            <a href={`#lb-${next}`} className="lightbox__nav lightbox__nav--next" aria-label="Następne">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          </div>
        );
      })}
    </section>
  );
}
