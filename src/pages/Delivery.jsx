const deliveryMethods = [
  {
    icon: "🛵",
    title: "Доставка кур'єром",
    desc: "Доставляємо по всьому Луцьку протягом 30–60 хвилин після підтвердження замовлення.",
    price: "50 грн",
    time: "30–60 хв",
  },
  {
    icon: "🏃",
    title: "Самовивіз",
    desc: "Забери замовлення самостійно — швидко і безкоштовно.",
    price: "Безкоштовно",
    time: "15–20 хв",
  },
];

const paymentMethods = [
  { icon: "💵", title: "Готівка", desc: "Оплата кур'єру при отриманні." },
  { icon: "💳", title: "Карткою онлайн", desc: "Visa / Mastercard через захищений платіжний шлюз." },
  { icon: "📱", title: "Google Pay / Apple Pay", desc: "Швидка оплата через мобільний пристрій." },
];

const faq = [
  {
    q: "Яка мінімальна сума замовлення?",
    a: "Мінімальна сума замовлення — 200 грн.",
  },
  {
    q: "Чи є безкоштовна доставка?",
    a: "Так! При замовленні від 1000 грн доставка безкоштовна + знижка 10% на всі товари.",
  },
  {
    q: "Як довго чекати замовлення?",
    a: "В середньому 30–60 хвилин залежно від завантаженості кухні та відстані.",
  },
  {
    q: "Чи можна змінити або скасувати замовлення?",
    a: "Так, протягом 5 хвилин після оформлення. Телефонуй: +380 93 823 92 93.",
  },
];

export default function Delivery() {
  return (
    <div className="min-h-screen bg-[#0D0000]">

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 md:px-12 text-center">
        <h1 className="text-white" style={{ fontFamily: "Bebas Neue", fontSize: "clamp(48px, 10vw, 100px)", letterSpacing: "4px" }}>
          Доставка та <span style={{ color: "#F5A623" }}>оплата</span>
        </h1>
        <p className="text-white/50 mt-3 text-lg max-w-xl mx-auto">
          Швидко, зручно і смачно — прямо до твоїх дверей
        </p>
      </section>

      {/* Знижка банер */}
      <section className="px-6 md:px-12 max-w-4xl mx-auto mb-12">
        <div className="bg-[#F5A623]/10 border border-[#F5A623]/40 rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <span className="text-5xl">🎉</span>
          <div>
            <h2 className="text-[#F5A623] font-bold text-xl" style={{ fontFamily: "Bebas Neue", letterSpacing: "2px", fontSize: "28px" }}>
              Знижка 10% при замовленні від 1000 грн
            </h2>
            <p className="text-white/60 text-sm mt-1">
              Замовляй більше — плати менше. Знижка нараховується автоматично в кошику.
            </p>
          </div>
        </div>
      </section>

      {/* Способи доставки */}
      <section className="py-8 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-white text-center mb-10" style={{ fontFamily: "Bebas Neue", fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "3px" }}>
          Способи <span style={{ color: "#F5A623" }}>доставки</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {deliveryMethods.map((m) => (
            <div key={m.title} className="bg-[#1A0A00] border border-[#2a1500] rounded-2xl p-8 hover:border-[#F5A623]/40 transition-colors">
              <div className="text-5xl mb-4">{m.icon}</div>
              <h3 className="text-white font-bold text-xl mb-2" style={{ fontFamily: "Bebas Neue", letterSpacing: "1px", fontSize: "24px" }}>
                {m.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">{m.desc}</p>
              <div className="flex gap-6">
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-widest">Вартість</p>
                  <p className="text-[#F5A623] font-bold mt-1">{m.price}</p>
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-widest">Час</p>
                  <p className="text-white font-bold mt-1">{m.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Способи оплати */}
      <section className="py-8 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-white text-center mb-10" style={{ fontFamily: "Bebas Neue", fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "3px" }}>
          Способи <span style={{ color: "#F5A623" }}>оплати</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paymentMethods.map((p) => (
            <div key={p.title} className="bg-[#1A0A00] border border-[#2a1500] rounded-2xl p-6 text-center hover:border-[#F5A623]/40 transition-colors">
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="text-white font-bold mb-2" style={{ fontFamily: "Bebas Neue", letterSpacing: "1px", fontSize: "20px" }}>
                {p.title}
              </h3>
              <p className="text-white/40 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-8 px-6 md:px-12 max-w-3xl mx-auto pb-20">
        <h2 className="text-white text-center mb-10" style={{ fontFamily: "Bebas Neue", fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "3px" }}>
          Часті <span style={{ color: "#F5A623" }}>питання</span>
        </h2>
        <div className="flex flex-col gap-4">
          {faq.map((item) => (
            <div key={item.q} className="bg-[#1A0A00] border border-[#2a1500] rounded-2xl p-6 hover:border-[#F5A623]/40 transition-colors">
              <h3 className="text-white font-bold mb-2 text-sm">{item.q}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}