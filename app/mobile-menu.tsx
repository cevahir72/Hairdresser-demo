"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type NavItem = {
  href: string;
  label: string;
};

export function MobileMenu({ navItems }: { navItems: NavItem[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="relative z-90 flex items-center gap-3 md:hidden">
      <button
        type="button"
        aria-label="Menüyü aç"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="relative z-100 inline-flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-full border border-[#e8dfcf] bg-white text-neutral-800 shadow-sm transition-all duration-500 ease-out"
      >
        <span
          className={`block h-0.5 w-4 rounded bg-neutral-800 transition-transform duration-500 ease-out ${open ? "translate-y-1.5 rotate-45" : ""}`}
        />
        <span
          className={`block h-0.5 w-4 rounded bg-neutral-800 transition-all duration-500 ease-out ${open ? "opacity-0" : "opacity-100"}`}
        />
        <span
          className={`block h-0.5 w-4 rounded bg-neutral-800 transition-transform duration-500 ease-out ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
        />
      </button>

      {open && (
        <div className="fixed inset-0 z-999 md:hidden" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-[#2f5c44]/10" />
          <div
            className="absolute right-0 top-0 z-1000 flex min-h-dvh w-full max-w-sm flex-col overflow-y-auto bg-white px-6 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.10)] animate-[drawerSlideIn_1000ms_ease-out]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-neutral-200 pb-5">
              <span className="text-base font-semibold tracking-tight text-neutral-900">
                Menü
              </span>
              <button
                type="button"
                aria-label="Menüyü kapat"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-xl leading-none text-neutral-500 transition-all duration-300 hover:border-neutral-300 hover:text-neutral-900"
              >
                ×
              </button>
            </div>

            <nav className="mt-8 border-t border-neutral-200 text-lg font-medium text-neutral-900">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between border-b border-neutral-200 py-5 transition-all duration-300 ease-out hover:pl-2"
                >
                  <span className="transition-colors duration-300 group-hover:text-[var(--accent)]">
                    {item.label}
                  </span>
                  <span className="text-sm text-neutral-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent)]">
                    →
                  </span>
                </Link>
              ))}
            </nav>

            <div className="mt-10 border-t border-neutral-200 pt-6">
              <div className="space-y-5 text-sm text-neutral-700">
                <div className="border-b border-neutral-200 pb-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                    Telefon
                  </p>
                  <a
                    href="tel:05013672935"
                    className="mt-2 block text-base font-medium text-neutral-900 transition-colors duration-300 hover:text-[var(--accent)]"
                  >
                    0501 367 29 35
                  </a>
                </div>

                <div className="border-b border-neutral-200 pb-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/905013672935"
                    className="mt-2 block text-base font-medium text-neutral-900 transition-colors duration-300 hover:text-[var(--accent)]"
                  >
                    WhatsApp&apos;tan hızlı ulaşın
                  </a>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                    Çalışma Saatleri
                  </p>
                  <p className="mt-2 text-base font-medium text-neutral-900">
                    Pazartesi - Cumartesi
                  </p>
                  <p className="mt-1 text-sm text-neutral-600">09:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}