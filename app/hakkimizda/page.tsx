export default function HakkimizdaPage() {
  return (
    <section className="mx-auto max-w-6xl space-y-14 px-6 py-12 md:py-20">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="space-y-4 text-sm leading-relaxed text-neutral-700 md:text-[15px]">
          <h1 className="mb-2 text-3xl font-semibold tracking-tight text-neutral-900">
            Hakkımızda
          </h1>

          <p>
            Ankara Etimesgut'ta hizmet veren Sağlık ve Güzellik Merkezimiz, yılların
            deneyimi ve uzman kadrosuyla sizlere en kaliteli hizmeti sunmaktadır.
          </p>

          <p>
            Modern cihazlarımız ve steril ortamımızda, cilt bakımından lazer epilasyona,
            bölgesel incelme tedavilerinden medikal estetiğe kadar geniş bir yelpazede
            hizmet vermekteyiz.
          </p>

          <p>
            Müşteri memnuniyeti odaklı yaklaşımımızla, her bireyin ihtiyaçlarına özel
            tedavi planları oluşturuyor ve sonuç odaklı çalışıyoruz. 5 yıldız
            değerlendirmelerimiz, kalitemizin en büyük göstergesidir.
          </p>

          <div className="mt-6 space-y-4 text-sm">
            <div>
              <h2 className="text-[15px] font-semibold text-[#d19a3b]">Vizyonumuz</h2>
              <p className="mt-1 text-neutral-700">
                Ankara'nın en güvenilir ve tercih edilen sağlık ve güzellik merkezi
                olmak, sektörde standartları belirlemek.
              </p>
            </div>

            <div>
              <h2 className="text-[15px] font-semibold text-[#d19a3b]">Misyonumuz</h2>
              <p className="mt-1 text-neutral-700">
                En son teknoloji ve uzman kadromuzla müşterilerimize güvenli, etkili ve
                kişiye özel güzellik ve sağlık hizmetleri sunmak.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div
            className="aspect-4/3 w-full max-w-md rounded-3xl bg-cover bg-center shadow-md ring-1 ring-neutral-200"
            style={{ backgroundImage: "url('/about-room.jpg')" }}
          />
        </div>
      </div>

      <div className="border-t border-neutral-200 pt-10 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
          Sık Sorulan Sorular
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          Merak ettiklerinizin cevapları
        </p>
      </div>
    </section>
  );
}
