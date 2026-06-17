"use client";

import { useState } from "react";

export default function MapaConsent() {
  const [zgoda, setZgoda] = useState(false);

  return (
    <div className="relative z-0 overflow-hidden rounded-xl shadow-lg sm:col-span-2 min-h-[260px] md:min-h-[300px]">
      {zgoda ? (
        <iframe
          title="Lokalizacja gabinetu NowoDent - Lubelska 56A, Kraśnik"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2514.984014944178!2d22.228582600000003!3d50.9240127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4722e90017024fa9%3A0x531a970430bd1894!2sNowoDent%20Stomatologia!5e0!3m2!1spl!2spl!4v1781538809586!5m2!1spl!2spl"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-cream px-6 py-8 text-center"
          style={{ fontFamily: "var(--font-jost)" }}
        >
          <p className="max-w-md text-sm md:text-base text-gold-dark leading-relaxed">
            Po kliknięciu w poniższy przycisk nasza strona załaduje mapę
            z zewnętrznego serwera Google. Google pozna Twój adres IP.
          </p>
          <button
            type="button"
            onClick={() => setZgoda(true)}
            className="inline-flex items-center justify-center rounded-lg bg-btn px-6 py-3 text-sm font-semibold tracking-[1px] text-white hover:bg-btn-hover transition-colors"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Wyrażam zgodę na wyświetlenie mapy Google
          </button>
        </div>
      )}
    </div>
  );
}
