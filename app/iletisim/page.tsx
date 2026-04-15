import { ContactForm } from "./contact-form";

export default function IletisimPage() {
  return (
    <section className="mx-auto max-w-6xl space-y-10 px-6 pt-12 pb-84 md:py-20">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
          İletişim
        </h1>
        <p className="text-sm text-neutral-600 md:text-base">
          Bize ulaşın, size yardımcı olalım.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.5fr)]">
        {/* Sol taraf: iletişim bilgileri */}
        <div className="space-y-8 text-sm text-neutral-700">
          <div className="space-y-3 rounded-3xl bg-(--surface) p-5 ring-1 ring-[#ece5d8]">
            <h2 className="text-base font-semibold text-neutral-900">Adres</h2>
            <p className="max-w-xs leading-relaxed">
              Bağlıca Mahallesi, Bağlıca Bulvarı, Selçuk İş Merkezi, D:63/6, 06790
              Etimesgut / Ankara
            </p>
          </div>

          <div className="space-y-1 rounded-3xl bg-(--surface) p-5 ring-1 ring-[#ece5d8]">
            <h2 className="text-base font-semibold text-neutral-900">Telefon</h2>
            <a href="tel:05013672935" className="transition-colors hover:text-(--accent)">
              0501 367 29 35
            </a>
          </div>

          <div className="space-y-1 rounded-3xl bg-(--surface) p-5 ring-1 ring-[#ece5d8]">
            <h2 className="text-base font-semibold text-neutral-900">
              Çalışma Saatleri
            </h2>
            <p>Pazartesi - Cumartesi: 09:00 - 18:00</p>
          </div>

          <div className="relative mt-4 h-64 w-full overflow-hidden rounded-3xl bg-(--surface) ring-1 ring-[#ece5d8]">
            <a
              href="https://www.google.com/maps/place/Dr+Fatma+Kurt/@39.8967914,32.6385934,18z/data=!4m8!3m7!1s0x14d33931cedbc3a1:0x2048ee197a1e27d5!8m2!3d39.896847!4d32.6387455!9m1!1b1!16s%2Fg%2F11q3qt987v?authuser=0&entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-4 top-4 z-10 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-neutral-900 shadow-[0_10px_25px_rgba(0,0,0,0.12)] ring-1 ring-[#e8dfcf] transition-colors hover:bg-(--surface)"
            >
              Yol Tarifi Al
            </a>
            <iframe
              title="Sağlık ve Güzellik Merkezi konumu"
              src="https://www.google.com/maps?q=39.896847,32.6387455(Dr%20Fatma%20Kurt)&z=19&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </div>
        </div>

        {/* Sağ taraf: iletişim formu */}
        <ContactForm />
      </div>

      <div className="h-8 md:hidden" />
    </section>
  );
}
