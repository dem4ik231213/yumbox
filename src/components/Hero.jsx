import homehero from "../assets/home-hero.jpg";
export 
default function Hero({ onScrollToMenu }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[65px]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${homehero})`,
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(13,0,0,0.85) 0%, rgba(13,0,0,0.5) 50%, rgba(13,0,0,0.7) 100%)" }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Big title */}
        <h1
          className="text-white animate-fade-in-up animate-delay-1"
          style={{
            fontFamily: 'Bebas Neue',
            fontSize: 'clamp(80px, 18vw, 200px)',
            lineHeight: '0.9',
            letterSpacing: '4px',
            textShadow: '0 4px 40px rgba(0,0,0,0.6)',
          }}
        >
          YUM
          <span style={{ color: '#F5A623' }}>BOX</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/80 mt-4 text-lg font-medium tracking-widest uppercase animate-fade-in-up animate-delay-2">
          Хіти продажу
        </p>

        {/* Set badge */}
        <div className="mt-8 flex items-center justify-center gap-4 animate-fade-in-up animate-delay-3">
          <div className="bg-[#1A0A00] border border-[#F5A623]/40 rounded-2xl px-6 py-4 flex items-center gap-6">
            <div>
              <p className="text-white/60 text-xs uppercase tracking-widest">Спецпропозиція</p>
              <p className="text-white font-bold text-xl mt-0.5">СЕТ 21</p>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-white/40 text-sm line-through">554 грн</span>
              <span className="text-[#F5A623] font-bold text-2xl">334 грн</span>
            </div>
            <button
              onClick={onScrollToMenu}
              className="btn-orange px-6 py-2.5 text-sm"
            >
              Замовити
            </button>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-16 flex flex-col items-center gap-2 text-white/30 animate-fade-in-up animate-delay-3">
          <span className="text-xs uppercase tracking-widest">Дивитись меню</span>
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
            className="animate-bounce">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
