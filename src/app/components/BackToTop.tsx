export default function BackToTop() {
  return (
    <a
      href="#top"
      aria-label="Powrót do góry"
      className="back-to-top fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 flex h-12 w-12 items-center justify-center rounded-lg border border-gold/40 bg-white/90 backdrop-blur-sm text-green-marble shadow-md hover:bg-cream transition-colors"
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </a>
  );
}
