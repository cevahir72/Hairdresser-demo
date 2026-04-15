const services = [
  {
    title: "Cilt Bakımı",
    image: "/cilt.png",
    description:
      "Profesyonel cilt bakımı ve tedavileri ile cildinizi gençleştirin. Kişiye özel tedavi programları.",
    bullets: [
      "Cilt gençleştirme",
      "Leke tedavisi",
      "Anti-aging bakım",
      "Nemlendirme ve onarım",
    ],
  },
  {
    title: "Lazer Epilasyon",
    image: "/epilasyon.png",
    description:
      "Son teknoloji lazer cihazları ile ağrısız ve kalıcı epilasyon. Tüm bölgeler için uygun.",
    bullets: [
      "Kalıcı sonuçlar",
      "Ağrısız uygulama",
      "FDA onaylı cihazlar",
      "Tüm cilt tiplerine uygun",
    ],
  },
  {
    title: "Bölgesel İncelme",
    image: "/incelme.png",
    description:
      "Bölgesel yağ yakımı ve vücut şekillendirme ile istediğiniz forma kavuşun.",
    bullets: [
      "Hızlı sonuçlar",
      "Cerrahi olmayan yöntemler",
      "Vücut şekillendirme",
      "Selülit tedavisi",
    ],
  },
  {
    title: "Medikal Estetik",
    image: "/medikal_estetik.png",
    description:
      "Botoks, dolgu ve mezoterapi gibi medikal estetik uygulamalarla doğal güzelliğinizi ortaya çıkarın.",
    bullets: [
      "Doğal görünüm",
      "Uzman doktor uygulaması",
      "Güvenli ürünler",
      "Hızlı iyileşme",
    ],
  },
];

export default function HizmetlerimizPage() {
  return (
    <section className="mx-auto max-w-6xl space-y-10 px-6 pt-12 pb-84 md:py-20">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
          Hizmetlerimiz
        </h1>
        <p className="text-sm text-neutral-600 md:text-base">
          Size özel tedavi ve bakım hizmetlerimizle güzelliğinizi ortaya çıkarıyoruz.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <article
            key={service.title}
            className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_18px_38px_rgba(0,0,0,0.06)] ring-1 ring-[#ece5d8]"
          >
            <div
              className="h-52 w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${service.image})` }}
            />

            <div className="flex flex-1 flex-col gap-4 px-6 py-6 text-sm text-neutral-700">
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-neutral-900">
                  {service.title}
                </h2>
                <p className="leading-relaxed">{service.description}</p>
              </div>

              <ul className="space-y-1 text-xs text-neutral-700">
                {service.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 text-[#d19a3b]">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/905013672935?text=${encodeURIComponent(`Merhaba, ${service.title} hakkında bilgi almak istiyorum.`)}`}
                className="cta-primary mt-2 w-full rounded-xl"
              >
                Fiyat için İletişime Geçin
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="h-8 md:hidden" />
    </section>
  );
}
