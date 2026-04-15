import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { MobileMenu } from "./mobile-menu";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sağlık ve Güzellik Merkezi",
  description: "Sağlık ve güzellik merkeziniz için modern tanıtım sitesi",
  icons: {
    icon: "/logo2.png",
    shortcut: "/logo2.png",
    apple: "/logo2.png",
  },
};

const navItems = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full bg-white antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-white text-neutral-900">
        <header className="relative z-40 border-b border-[#e8dfcf] bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link
              href="/"
              className="flex max-w-52.5 items-center gap-2 rounded-2xl bg-white pr-2 text-sm font-semibold leading-tight tracking-tight text-neutral-900 transition-colors hover:text-(--accent) sm:max-w-none sm:gap-3 sm:pr-3 sm:text-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-[0_10px_30px_rgba(23,32,27,0.08)] ring-1 ring-[#ece5d8] sm:h-16 sm:w-16">
                <Image
                  src="/logo2.png"
                  alt="Sağlık ve Güzellik Merkezi logosu"
                  width={52}
                  height={52}
                  className="h-9 w-9 object-contain sm:h-13 sm:w-13"
                />
              </span>
              <span>Sağlık ve Güzellik Merkezi</span>
            </Link>

            {/* Masaüstü menü */}
            <nav className="hidden gap-8 text-sm font-medium text-neutral-700 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-(--accent)"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <a
              href="tel:05013672935"
              className="hidden items-center gap-2 rounded-full border border-[#e8dfcf] bg-(--surface) px-3 py-2 text-sm font-medium text-neutral-800 transition-colors hover:border-(--accent)/30 hover:text-(--accent) md:flex"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-neutral-300 text-xs">
                ☎
              </span>
              <span>0501 367 29 35</span>
            </a>

            {/* Mobil menü butonu */}
            <MobileMenu navItems={navItems} />
          </div>
        </header>
        <main className="flex-1 overflow-visible bg-white">{children}</main>
        <footer className="border-t border-[#e8dfcf] bg-white py-6 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Sağlık ve Güzellik Merkezi
        </footer>
      </body>
    </html>
  );
}
