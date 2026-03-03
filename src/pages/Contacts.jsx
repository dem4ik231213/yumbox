import { useState } from "react";

export default function Contacts() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSent(true);
    setForm({ name: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <div className="min-h-screen bg-[#0D0000]">

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 md:px-12 text-center">
        <h1 className="text-white" style={{ fontFamily: "Bebas Neue", fontSize: "clamp(48px, 10vw, 100px)", letterSpacing: "4px" }}>
          Конта<span style={{ color: "#F5A623" }}>кти</span>
        </h1>
        <p className="text-white/50 mt-3 text-lg">Зв'яжись з нами — відповімо швидко!</p>
      </section>

      <section className="py-8 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">

          {/* Left — info */}
          <div className="flex flex-col gap-6">

            {/* Phone */}
            <div className="bg-[#1A0A00] border border-[#2a1500] rounded-2xl p-6 flex items-center gap-5 hover:border-[#F5A623]/40 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/30 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#F5A623" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Телефон</p>
                <a href="tel:+380938239293" className="text-white font-bold text-lg hover:text-[#F5A623] transition-colors">
                  +380 93 823 92 93
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="bg-[#1A0A00] border border-[#2a1500] rounded-2xl p-6 flex items-center gap-5 hover:border-[#F5A623]/40 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/30 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#F5A623" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:yumbox.lutsk@gmail.com" className="text-white font-bold text-lg hover:text-[#F5A623] transition-colors">
                  yumbox.lutsk@gmail.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="bg-[#1A0A00] border border-[#2a1500] rounded-2xl p-6 flex items-center gap-5 hover:border-[#F5A623]/40 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/30 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#F5A623" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Адреса</p>
                <p className="text-white font-bold text-lg">м. Луцьк</p>
                <p className="text-white/50 text-sm">Доставка по всьому місту</p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-[#2a1500]" style={{ height: "220px" }}>
              <iframe
                title="Луцьк на карті"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79699.10810068786!2d25.242163!3d50.747233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472639b9bcac5b79%3A0x4cf07c3b85e1e92b!2z0JvRg9GG0YzQug!5e0!3m2!1suk!2sua!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-[#1A0A00] border border-[#2a1500] rounded-2xl p-8">
            <h2 className="text-white mb-6" style={{ fontFamily: "Bebas Neue", fontSize: "32px", letterSpacing: "2px" }}>
              Напиши нам
            </h2>

            {sent && (
              <div className="mb-6 bg-green-900/30 border border-green-500/30 text-green-400 rounded-xl px-4 py-3 text-sm">
                ✅ Повідомлення надіслано! Ми зв'яжемось з вами найближчим часом.
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-white/50 text-xs uppercase tracking-widest block mb-2">Ваше ім'я *</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Олексій" required
                  className="w-full bg-[#0D0000] border border-[#2a1500] focus:border-[#F5A623]/60 rounded-xl px-4 py-3 text-white placeholder-white/20 outline-none transition-colors text-sm" />
              </div>

              <div>
                <label className="text-white/50 text-xs uppercase tracking-widest block mb-2">Номер телефону *</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+380 93 000 00 00" required
                  className="w-full bg-[#0D0000] border border-[#2a1500] focus:border-[#F5A623]/60 rounded-xl px-4 py-3 text-white placeholder-white/20 outline-none transition-colors text-sm" />
              </div>

              <div>
                <label className="text-white/50 text-xs uppercase tracking-widest block mb-2">Повідомлення</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Ваше запитання або побажання..." rows={5}
                  className="w-full bg-[#0D0000] border border-[#2a1500] focus:border-[#F5A623]/60 rounded-xl px-4 py-3 text-white placeholder-white/20 outline-none transition-colors text-sm resize-none" />
              </div>

              <button type="submit" className="btn-orange w-full py-3.5 text-base mt-2">
                Надіслати повідомлення
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="pb-8" />
    </div>
  );
}