"use client";

import { useState } from "react";

type FormValues = {
  name: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  phone: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Ad soyad alanını doldurun.";
    }

    if (!values.phone.trim()) {
      nextErrors.phone = "Telefon alanını doldurun.";
    }

    if (!values.message.trim()) {
      nextErrors.message = "Mesaj alanını doldurun.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    const whatsappMessage = `Merhaba ben ${values.name.trim()}, telefon numaram ${values.phone.trim()}. Merak ettiğim konu: ${values.message.trim()}. Teşekkürler.`;
    const whatsappUrl = `https://wa.me/905013672935?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-4 rounded-3xl bg-white p-6 text-sm text-neutral-700 shadow-[0_18px_38px_rgba(0,0,0,0.06)] ring-1 ring-[#ece5d8]"
    >
      <div className="space-y-1">
        <label htmlFor="name" className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
          Adınız Soyadınız
        </label>
        <input
          id="name"
          type="text"
          value={values.name}
          onChange={(event) => handleChange("name", event.target.value)}
          placeholder="Adınız Soyadınız"
          className="h-11 w-full rounded-xl border border-[#e8dfcf] bg-(--surface) px-3 text-sm outline-none transition-colors focus:border-(--accent)/35"
        />
        {errors.name ? <p className="text-xs text-[#b45353]">{errors.name}</p> : null}
      </div>

      <div className="space-y-1">
        <label htmlFor="phone" className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
          Telefon
        </label>
        <input
          id="phone"
          type="tel"
          value={values.phone}
          onChange={(event) => handleChange("phone", event.target.value)}
          placeholder="0501 234 56 78"
          className="h-11 w-full rounded-xl border border-[#e8dfcf] bg-(--surface) px-3 text-sm outline-none transition-colors focus:border-(--accent)/35"
        />
        {errors.phone ? <p className="text-xs text-[#b45353]">{errors.phone}</p> : null}
      </div>

      <div className="space-y-1">
        <label htmlFor="message" className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
          Mesajınız
        </label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(event) => handleChange("message", event.target.value)}
          placeholder="Nasıl yardımcı olabiliriz?"
          className="w-full rounded-xl border border-[#e8dfcf] bg-(--surface) px-3 py-3 text-sm outline-none transition-colors focus:border-(--accent)/35"
        />
        {errors.message ? <p className="text-xs text-[#b45353]">{errors.message}</p> : null}
      </div>

      <button
        type="submit"
        className="cta-whatsapp mt-4 w-full rounded-2xl"
      >
        WhatsApp&apos;tan Gönder
        <span className="ml-2 text-xs">✈</span>
      </button>
    </form>
  );
}