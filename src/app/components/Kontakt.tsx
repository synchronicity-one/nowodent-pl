export default function Kontakt() {
  return (
    <section id="kontakt" className="relative bg-white scroll-mt-20 overflow-hidden">
      {/* Pasek marmurowy za prawa kolumna */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="relative mx-auto h-full max-w-6xl px-4 md:px-6">
          <div
            className="marble-panel absolute bottom-0 top-0 w-[200px] opacity-40"
            style={{ right: "-12px" }}
          />
        </div>
      </div>
      <div className="relative mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
        {/* Naglowek sekcji */}
        <div className="flex flex-col gap-3 text-center mb-12 md:mb-16">
          <p
            className="text-sm uppercase tracking-[3px] text-gold-dark"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            Zapraszamy
          </p>
          <h2
            className="text-3xl md:text-4xl text-green-marble font-medium"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            Kontakt
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-stretch">
          {/* Zdjecie kontaktowe - szersza kolumna 3/5 */}
          <div className="order-1 md:col-span-3">
            <picture className="block h-full">
              <img
                src="/kontakt-foto.webp"
                alt="Gabinet NowoDent w Kraśniku"
                width={640}
                height={800}
                loading="lazy"
                className="h-56 w-full rounded-xl object-cover shadow-lg md:h-full"
              />
            </picture>
          </div>

          {/* Box z danymi - wezsza kolumna 2/5 */}
          <div
            className="order-2 md:col-span-2 flex flex-col justify-center gap-8 rounded-xl bg-cream px-7 py-10 md:px-10 shadow-lg"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-sm uppercase tracking-[2px] text-green-marble font-bold">Adres</h3>
              <p className="text-base md:text-lg text-gold-dark">
                ul. Lubelska 56A<br />23-200 Kraśnik
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-sm uppercase tracking-[2px] text-green-marble font-bold">Telefon</h3>
              <a
                href="tel:515038555"
                className="inline-flex w-fit items-center justify-center rounded-lg bg-btn px-7 py-3 text-sm font-semibold tracking-[1px] text-white hover:bg-btn-hover transition-colors"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                515 038 555
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-sm uppercase tracking-[2px] text-green-marble font-bold">Godziny otwarcia</h3>
              <div className="flex flex-col gap-1 text-base md:text-lg text-gold-dark">
                <span>pon. – pt. 8:00 – 17:00</span>
                <span>sobota 9:00 – 14:00</span>
                <span>niedziela nieczynne</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-sm uppercase tracking-[2px] text-green-marble font-bold">Facebook</h3>
              <a
                href="https://www.facebook.com/Nowodent"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-3 text-base md:text-lg text-gold-dark hover:text-green-marble transition-colors"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gold/20 bg-white">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                    className="h-6 w-6"
                    fill="#1877F2"
                  >
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.412c0-3.007 1.792-4.669 4.533-4.669 1.313 0 2.686.235 2.686.235v2.953H16.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                  </svg>
                </span>
                NowoDent na Facebooku
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
