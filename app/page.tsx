const reviews = [
  {
    text: "Kendisiyle yuz yüze iyi ki tanışmışım iyi ki kendisini tercih ettim. Çok sevecen cok güler yüzlü kesinlikle tavsiye ederim. Mutlaka sizler de gidin anlayacaksınız. Kendilerine cok teşekkür ederim ilgileri ve alakaları için. 🤲🙏",
  },
  {
    text: "Fatma hocam ile tanışalı 1 ay oldu eşimde bende çok memnunuz. Tecrübesi, bilgisi, güler yüzü, hoş sohbeti ile işini en iyi en güzel şekilde yapıyor. İlk hafta dizlere prp ile başladık ikinci hafta ozon yaptırmaya başladık üçüncü hafta kök hücreye karar verdik. 🤩Sanırım uzun yıllar ailemizin doktoru olacak. 🥰 İyi ki Fatma Kurt",
  },
  {
    text: "Sevgili Fatma Hocam ın yaptığı işlemlerden çok memnun kaldım. Kendisi hem güvenilir hem de eli çok hafif bir hekim. Ayrıca çok tatlı güler yüzlü bir insan...Size işe yarayacak ve yaramayacak tedavileri her yanıyla anlatıyor. İyi ki sizi tanımışım, Ankara da arkadaşlarımla tek adresimiz...Herkese tavsiye ederim💕",
  },
  {
    text: "Ankara' da güvenilir ve işinde uzman gördüğüm sevgili Dr.Fatma KURT hanım 💐 merkezinizde sağlık ve güzellik için yaptırdığım tüm işlemlerden memnuniyetim her geçen gün daha da artıyor. 💫Emeklerinize teşekkür ediyorum🙏 iyikiii tanıdım sizi... iyikiii varsınız.",
  },
  {
    text: "Dr Fatma hanıma her iki dizime PRP uygulaması yaptırdım. Diz ağrılarım geçti. Ayrıca Ozon tedavisi ile daha sağlıklı, zinde hissettim. Güleryüzü, ilgisi ve profesyonel yaklaşımı için teşekkür ederim.",
  },
];

export default function Home() {
  return (
    <section className="bg-white px-0 pt-12 pb-84 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
        <div className="max-w-2xl space-y-5 md:space-y-6">
          <div className="md:hidden">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-(--surface) p-2 shadow-[0_18px_40px_rgba(0,0,0,0.08)] ring-1 ring-[#ece5d8]">
              <div
                className="aspect-4/3 w-full rounded-[1.25rem] bg-cover bg-center"
                style={{ backgroundImage: "url('/banner.jpg')" }}
              />
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1 text-sm text-neutral-800">
            <div className="flex items-center gap-1 text-(--gold)">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star}>★</span>
              ))}
            </div>
            <span className="text-xs text-neutral-500">5 · 34 değerlendirme</span>
          </div>

          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-4xl md:leading-snug">
            Sağlığınız ve Güzelliğiniz İçin
            <br />
            Profesyonel Dokunuş
          </h1>

          <p className="max-w-lg text-sm leading-relaxed text-neutral-800 md:text-base">
            Uzman kadromuz ve son teknoloji cihazlarımız ile size özel bakım ve
            tedavi hizmetleri sunuyoruz.
          </p>

          <div className="flex flex-col gap-3 pt-2 text-sm font-medium sm:flex-row sm:items-center">
            <a
              href="https://wa.me/905013672935"
              className="cta-primary"
            >
              WhatsApp&apos;tan Randevu Al
            </a>
            <a
              href="tel:05013672935"
              className="cta-secondary"
            >
              Hemen Ara
            </a>
          </div>
        </div>

        <div className="hidden md:block md:shrink-0">
          <div
            className="aspect-square w-[320px] rounded-4xl bg-cover bg-center shadow-[0_20px_50px_rgba(0,0,0,0.1)] ring-1 ring-[#ece5d8] lg:w-95"
            style={{ backgroundImage: "url('/banner.jpg')" }}
          />
        </div>
      </div>

        <div className="space-y-6">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--gold)">
              Gerçek Yorumlar
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              Danışanlarımızın deneyimleri
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {reviews.map((review, index) => (
              <article
                key={index}
                className="flex h-full flex-col justify-between rounded-3xl bg-(--surface) p-6 shadow-[0_18px_38px_rgba(0,0,0,0.05)] ring-1 ring-[#ece5d8]"
              >
                <div className="mb-4 flex items-center gap-1 text-(--gold)">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-neutral-700">{review.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="h-8 md:hidden" />
    </section>
  );
}
