import Uslugi from "./components/Uslugi";
import Godziny from "./components/Godziny";
import Lokalizacja from "./components/Lokalizacja";
import Kontakt from "./components/Kontakt";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative bg-white overflow-hidden">
        {/* Pasek marmurowy zafiksowany wzgledem kontenera - centralnie pod buttonem tel w headerze */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
          <div className="relative mx-auto h-full max-w-6xl px-4 md:px-6">
            <div
              className="marble-panel absolute -top-20 bottom-0 w-[200px] opacity-40"
              style={{ right: "-12px" }}
            />
          </div>
        </div>
        <div className="relative mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
            {/* Tekst */}
            <div className="flex flex-col gap-6 order-2 md:order-1">
              <p
                className="text-sm uppercase tracking-[3px] text-gold-dark"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                Stomatologia Kraśnik
              </p>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl leading-tight text-green-marble font-medium"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                Nowoczesna stomatologia w trosce o Twój uśmiech
              </h1>
              <p
                className="text-base md:text-lg leading-relaxed text-gold-dark"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                Gabinet NowoDent w Kraśniku łączy doświadczenie i nowoczesne metody
                leczenia. Zapewniamy kompleksową opiekę stomatologiczną dla dzieci
                i dorosłych, leczenie zachowawcze, endodoncję oraz zabiegi medycyny
                estetycznej. Pod opieką lek. dent. Magdaleny Nowomiejskiej każdy
                pacjent czuje się komfortowo i bezpiecznie.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">
                <a
                  href="tel:515038555"
                  className="inline-flex items-center justify-center rounded-lg bg-btn px-7 py-3 text-sm font-semibold tracking-[1px] text-white hover:bg-btn-hover transition-colors"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Umów wizytę
                </a>
                <a
                  href="#uslugi"
                  className="inline-flex items-center justify-center rounded-lg border border-gold px-7 py-3 text-sm font-semibold tracking-[1px] text-gold-dark hover:bg-cream transition-colors"
                  style={{ fontFamily: "var(--font-jost)" }}
                >
                  Zobacz usługi
                </a>
              </div>
            </div>

            {/* Zdjęcie - leży nad paskiem marmurowym */}
            <div className="order-1 md:order-2">
              <picture className="block">
                <source media="(max-width: 768px)" srcSet="/hero-mobile.webp" />
                <source media="(min-width: 769px)" srcSet="/hero-desktop.webp" />
                <img
                  src="/hero-desktop.webp"
                  alt="Wnętrze gabinetu stomatologicznego NowoDent w Kraśniku"
                  width={800}
                  height={1142}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* USLUGI */}
      <Uslugi />

      {/* GODZINY */}
      <Godziny />

      {/* LOKALIZACJA */}
      <Lokalizacja />

      {/* KONTAKT */}
      <Kontakt />
    </main>
  );
}
