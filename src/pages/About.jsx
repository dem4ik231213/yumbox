import restaurant from "../assets/restaurant.jpg";
import restaurant2 from "../assets/restaurant2.jpg";
import chef1 from "../team/chef1.webp";
import maria from "../team/maria.webp";
import confectioner from "../team/confectioner.jpg";
import manager from "../team/manager.jpg";
import administrator from "../team/administrator.jpg";
import owner from "../team/owner.jpg";



const values = [
  {
    icon: "🍱",
    title: "Свіжі інгредієнти",
    desc: "Ми використовуємо тільки свіжі продукти від перевірених постачальників щодня.",
  },
  {
    icon: "⚡",
    title: "Швидка доставка",
    desc: "Доставляємо протягом 30–60 хвилин прямо до вашого порогу.",
  },
  {
    icon: "❤️",
    title: "Готуємо з душею",
    desc: "Кожна страва — це турбота про вас. Смак, який відчувається.",
  },
  {
    icon: "🏆",
    title: "Якість понад усе",
    desc: "Суворий контроль якості на кожному етапі приготування.",
  },
];

const team = [
  {
    name: "Олексій Коваль",
    role: "Шеф-кухар",
    image: chef1,
  },
  { name: "Марія Бондар",
    role: "Су-шеф",
    image: maria 
  },
  {
    name: "Софія Романюк",
    role: "Кондитер",
    image: confectioner,
  },
  {
    name: "Іван Мельник",
    role: "Менеджер",
    image: manager,
  },
  {
    name: "Наталія Гриценко",
    role: "Адміністратор",
    image: administrator,
  },
  {
    name: "Максим Кравченко",
    role: "Власник закладу",
    image: owner,
  },
];

const socials = [
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    url: "https://tiktok.com",
    icon: (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#0D0000]">

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${restaurant})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0000] via-transparent to-[#0D0000]" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-white" style={{ fontFamily: "Bebas Neue", fontSize: "clamp(48px, 10vw, 100px)", letterSpacing: "4px" }}>
            Про <span style={{ color: "#F5A623" }}>нас</span>
          </h1>
          <p className="text-white/60 mt-4 text-lg leading-relaxed">
            YumBox — це більше ніж доставка їжі. Це турбота, смак і тепло в кожній коробці.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-white mb-6" style={{ fontFamily: "Bebas Neue", fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "3px" }}>
              Наша <span style={{ color: "#F5A623" }}>історія</span>
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>YumBox народився у 2021 році з простої ідеї — зробити смачну ресторанну їжу доступною для кожного вдома. Ми починали з маленької кухні та великою мрією.</p>
              <p>Сьогодні ми щодня готуємо сотні замовлень, але принцип залишається незмінним: кожна страва — як для себе. Свіжі продукти, авторські рецепти, любов до справи.</p>
              <p>Луцьк — наше місто, і ми пишаємось бути частиною його кулінарного серця.</p>
            </div>
          </div>
          <div className="relative">
            <img
              src={restaurant2}
              alt="Наш ресторан"
              className="rounded-2xl w-full object-cover"
              style={{ height: "380px" }}
            />
            <div className="absolute -bottom-4 -left-4 bg-[#F5A623] rounded-2xl px-6 py-4 text-black font-bold">
              <span style={{ fontFamily: "Bebas Neue", fontSize: "32px" }}>2021</span>
              <p className="text-xs font-semibold mt-0.5">рік заснування</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-white text-center mb-12" style={{ fontFamily: "Bebas Neue", fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "3px" }}>
          Наші <span style={{ color: "#F5A623" }}>переваги</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-[#1A0A00] border border-[#2a1500] rounded-2xl p-6 text-center hover:border-[#F5A623]/40 transition-colors">
              <div className="text-4xl mb-4">{v.icon}</div>
              <h3 className="text-white font-bold text-sm mb-2">{v.title}</h3>
              <p className="text-white/40 text-xs leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-white text-center mb-12" style={{ fontFamily: "Bebas Neue", fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "3px" }}>
          Наша <span style={{ color: "#F5A623" }}>команда</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative w-36 h-36 mx-auto mb-4">
                <img src={member.image} alt={member.name} className="w-full h-full rounded-full object-cover border-2 border-[#F5A623]/40"
                style={{ objectPosition: member.name === "Наталія Гриценко" ? "center 15%" : "center center" }} />
              </div>
              <h3 className="text-white font-bold">{member.name}</h3>
              <p className="text-[#F5A623] text-sm mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Socials */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto text-center">
        <h2 className="text-white mb-6" style={{ fontFamily: "Bebas Neue", fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "3px" }}>
          Ми в <span style={{ color: "#F5A623" }}>соцмережах</span>
        </h2>
        <p className="text-white/50 mb-8">Слідкуй за нами — нові страви, акції та кухонні секрети</p>
        <div className="flex justify-center gap-4">
          {socials.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#1A0A00] border border-[#2a1500] hover:border-[#F5A623]/60 text-white/60 hover:text-[#F5A623] px-5 py-3 rounded-full transition-all duration-200">
              {s.icon}
              <span className="text-sm font-medium">{s.name}</span>
            </a>
          ))}
        </div>
      </section>

    </div>
  );
}