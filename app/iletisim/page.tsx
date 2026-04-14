export default function IletisimPage() {
  return (
    <section className="mx-auto max-w-6xl space-y-10 px-6 py-12 md:py-20">
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
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-neutral-900">Adres</h2>
            <p className="max-w-xs leading-relaxed">
              Bağlıca Mahallesi, Bağlıca Bulvarı, Selçuk İş Merkezi, D:63/6, 06790
              Etimesgut / Ankara
            </p>
          </div>

          <div className="space-y-1">
            <h2 className="text-base font-semibold text-neutral-900">Telefon</h2>
            <p>0501 367 29 35</p>
          </div>

          <div className="space-y-1">
            <h2 className="text-base font-semibold text-neutral-900">
              Çalışma Saatleri
            </h2>
            <p>Pazartesi - Cumartesi: 09:00 - 18:00</p>
          </div>

          <div className="mt-4 h-64 w-full overflow-hidden rounded-xl bg-neutral-200/70 ring-1 ring-neutral-300">
            {/* Harita bileşeni daha sonra eklenecek */}
          </div>
        </div>

        {/* Sağ taraf: iletişim formu */}
        <form className="space-y-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 text-sm text-neutral-700">
          <div className="space-y-1">
            <label htmlFor="name" className="text-xs font-medium text-neutral-800">
              Adınız Soyadınız
            </label>
            <input
              id="name"
              type="text"
              placeholder="Adınız Soyadınız"
              className="h-10 w-full rounded-md border border-neutral-200 bg-[#faf7ee] px-3 text-sm outline-none ring-offset-0 focus:border-neutral-300 focus:ring-1 focus:ring-neutral-300"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="phone" className="text-xs font-medium text-neutral-800">
              Telefon
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="0501 234 56 78"
              className="h-10 w-full rounded-md border border-neutral-200 bg-[#faf7ee] px-3 text-sm outline-none ring-offset-0 focus:border-neutral-300 focus:ring-1 focus:ring-neutral-300"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="message" className="text-xs font-medium text-neutral-800">
              Mesajınız
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Nasıl yardımcı olabiliriz?"
              className="w-full rounded-md border border-neutral-200 bg-[#faf7ee] px-3 py-2 text-sm outline-none ring-offset-0 focus:border-neutral-300 focus:ring-1 focus:ring-neutral-300"
            />
          </div>

          <button
            type="submit"
            className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-neutral-300 bg-[#f5ebd9] px-6 py-3 text-sm font-semibold text-neutral-800 transition-colors hover:bg-[#efe2cc]"
          >
            WhatsApp'tan Gönder
            <span className="ml-2 text-xs">✈</span>
          </button>
        </form>
      </div>
    </section>
  );
}
