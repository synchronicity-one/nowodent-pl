import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center gap-[30px] pt-[30px] pb-[60px] bg-white">
      <Image
        src="/logo.webp"
        alt="NowoDent stomatologia Kraśnik"
        width={400}
        height={400}
        priority
        className="w-[400px] h-auto"
      />

      <a
        href="tel:515038555"
        className="-mt-[30px] mb-[30px] font-semibold text-[26px] tracking-[3px] no-underline text-[#ad9576] hover:text-[#2D2D33] transition-colors"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        tel.: 515-038-555
      </a>

      <div
        className="font-medium text-[22px] tracking-[3px] uppercase"
        style={{ fontFamily: "var(--font-jost)" }}
      >
        Lubelska 56A<br />23-200 Kraśnik
      </div>

      <div
        className="px-[30px] py-[10px] rounded-[2px]"
        style={{ backgroundColor: "#37415133", transform: "skewX(-30deg)" }}
      >
        <div
          className="font-bold text-[22px] tracking-[3px] uppercase"
          style={{ fontFamily: "var(--font-jost)", transform: "skewX(30deg)" }}
        >
          zapraszamy
        </div>
      </div>
    </section>
  );
}
