import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center gap-[30px] px-6 bg-white">
      <div
        className="font-bold text-[80px] leading-none"
        style={{ fontFamily: "var(--font-jost)", color: "#ad9576" }}
      >
        404
      </div>

      <div
        className="font-medium text-[22px] tracking-[3px] uppercase"
        style={{ fontFamily: "var(--font-jost)" }}
      >
        NowoDent
      </div>

      <div
        className="font-medium text-[18px] tracking-[2px] uppercase"
        style={{ fontFamily: "var(--font-jost)" }}
      >
        Strona nie została znaleziona
      </div>

      <Link
        href="/"
        className="font-semibold text-[18px] tracking-[3px] no-underline text-[#ad9576] hover:text-[#2D2D33] transition-colors"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        ← Wróć na stronę główną
      </Link>
    </section>
  );
}
