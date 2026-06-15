const godziny = [
  { dni: "Poniedziałek – Piątek", czas: "8:00 – 17:00" },
  { dni: "Sobota", czas: "9:00 – 14:00" },
  { dni: "Niedziela", czas: "Nieczynne" },
];

export default function Godziny() {
  return (
    <section id="godziny" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-16 md:py-24">
        {/* Naglowek sekcji */}
        <div className="flex flex-col gap-3 text-center mb-10 md:mb-12">
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
            Godziny otwarcia
          </h2>
        </div>

        {/* Blok godzin */}
        <div
          className="mx-auto max-w-xl rounded-2xl border border-gold/30 bg-cream px-6 py-8 md:px-10 md:py-10"
          style={{ fontFamily: "var(--font-jost)" }}
        >
          <ul className="flex flex-col">
            {godziny.map((g, i) => (
              <li
                key={g.dni}
                className={
                  "flex items-center justify-between gap-4 py-4 " +
                  (i < godziny.length - 1 ? "border-b border-gold/20" : "")
                }
              >
                <span className="text-base md:text-lg text-green-marble font-medium">
                  {g.dni}
                </span>
                <span className="text-base md:text-lg text-gold-dark tracking-[1px]">
                  {g.czas}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
