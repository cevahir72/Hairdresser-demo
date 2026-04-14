export default function Home() {
  return (
    <section className="relative overflow-hidden rounded-none bg-transparent px-0 py-20 md:py-28">
      {/* Arka plan görseli */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[url('/banner.png')] bg-cover bg-center" />
      {/* Yarı saydam #2596be katman */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#2596be]/65" />

      <div className="relative z-10 mx-auto flex min-h-[480px] max-w-6xl flex-col justify-center px-6">
        <div className="max-w-2xl space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-800">
            <div className="flex items-center gap-1 text-[#d19a3b]">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star}>★</span>
              ))}
            </div>
            <span className="text-xs text-neutral-500">5 · 34 değerlendirme</span>
          </div>

          <h1 className="text-3xl font-semibold leading-snug tracking-tight text-neutral-900 md:text-4xl md:leading-snug">
          Sağlığınız ve Güzelliğiniz İçin
          <br />
          Profesyonel Dokunuş
        </h1>

          <p className="max-w-lg text-sm leading-relaxed text-neutral-800 md:text-base">
          Uzman kadromuz ve son teknoloji cihazlarımız ile size özel bakım ve
          tedavi hizmetleri sunuyoruz.
        </p>

          <div className="mt-4 flex flex-col gap-3 text-sm font-medium sm:flex-row sm:items-center">
          <a
            href="https://wa.me/905013672935"
            className="inline-flex items-center justify-center rounded-full bg-[#1f7a4d] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#17603c]"
          >
            WhatsApp'tan Randevu Al
          </a>
            <button className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-neutral-800 transition-colors hover:bg-neutral-100">
              Hemen Ara
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
