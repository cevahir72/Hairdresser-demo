import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fbf7ec] text-neutral-900">
        <header className="border-b border-neutral-200 bg-[#fbf7ec]/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <div className="text-lg font-semibold tracking-tight text-neutral-900">
              Sağlık ve Güzellik Merkezi
            </div>
            <nav className="hidden gap-8 text-sm font-medium text-neutral-700 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-neutral-900"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="hidden items-center gap-2 text-sm font-medium text-neutral-800 md:flex">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-neutral-300 text-xs">
                ☎
              </span>
              <span>0501 367 29 35</span>
            </div>
          </div>
        </header>
        <main className="flex-1 bg-[#fbf7ec]">{children}</main>
        <footer className="border-t border-neutral-200 bg-[#fbf7ec] py-6 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Sağlık ve Güzellik Merkezi
        </footer>
      </body>
    </html>
  );
}
