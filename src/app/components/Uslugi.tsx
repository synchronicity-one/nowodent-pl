const grupy = [
  {
    slug: "dziecieca",
    nazwa: "Stomatologia dziecięca",
    zabiegi: [
      "Gaz rozweselający (sedacja wziewna)",
      "Leczenie próchnicy zębów mlecznych i stałych",
      "Usuwanie zębów mlecznych",
      "Profilaktyka próchnicy: lakierowanie, lakowanie i lapisowanie",
      "Wizyty adaptacyjne",
    ],
  },
  {
    slug: "zachowawcza",
    nazwa: "Stomatologia zachowawcza",
    zabiegi: [
      "Leczenie próchnicy",
      "Wypełnienia kompozytowe",
      "Skaling",
      "Piaskowanie - usunięcie kamienia nazębnego",
      "Wybielanie",
    ],
  },
  {
    slug: "endodoncja",
    nazwa: "Endodoncja",
    zabiegi: ["Leczenie kanałowe"],
  },
  {
    slug: "estetyczna",
    nazwa: "Medycyna estetyczna",
    zabiegi: [
      "Toksyna botulinowa",
      "Usuwanie zmarszczek",
      "Kwas hialuronowy",
      "Stymulatory tkankowe",
      "Osocze bogatopłytkowe (wampirzy lifting)",
      "Fibryna bogatopłytkowa",
      "Mezoterapia skóry głowy",
      "Terapia łysienia",
    ],
  },
];

export default function Uslugi() {
  return (
    <section id="uslugi" className="bg-green-wash scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
        {/* Naglowek sekcji */}
        <div className="flex flex-col gap-3 text-center mb-12 md:mb-16">
          <p
            className="text-sm uppercase tracking-[3px] text-gold-dark"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            Zakres leczenia
          </p>
          <h2
            className="text-3xl md:text-4xl text-green-marble font-medium"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            Nasze usługi
          </h2>
        </div>

        {/* Bloki zig-zag */}
        <div className="flex flex-col gap-14 md:gap-20">
          {grupy.map((g, i) => {
            const odwrocony = i % 2 === 1;
            return (
              <div
                key={g.slug}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
              >
                {/* Zdjecie */}
                <div className={odwrocony ? "md:order-2" : "md:order-1"}>
                  <picture className="block">
                    <source media="(max-width: 768px)" srcSet={`/uslugi-${g.slug}-mobile.webp`} />
                    <source media="(min-width: 769px)" srcSet={`/uslugi-${g.slug}-desktop.webp`} />
                    <img
                      src={`/uslugi-${g.slug}-desktop.webp`}
                      alt={`NowoDent - ${g.nazwa.toLowerCase()}`}
                      width={720}
                      height={540}
                      loading="lazy"
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                  </picture>
                </div>

                {/* Tekst */}
                <div className={odwrocony ? "md:order-1" : "md:order-2"}>
                  <h3
                    className="text-2xl md:text-3xl text-green-marble font-medium mb-5"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    {g.nazwa}
                  </h3>
                  <ul className="flex flex-col gap-2.5" style={{ fontFamily: "var(--font-jost)" }}>
                    {g.zabiegi.map((z) => (
                      <li key={z} className="flex items-start gap-3 text-gold-dark">
                        <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        <span className="text-base md:text-lg leading-snug">{z}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
