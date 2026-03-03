import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Каталог",  path: "/" },
  { label: "Про нас",  path: "/about" },
  { label: "Доставка", path: "/delivery" },
  { label: "Контакти", path: "/contacts" },
];

export default function Navbar({ cartCount, onCartOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{
          background: "rgba(13,0,0,0.97)",
          borderBottom: menuOpen ? "1px solid #2a1500" : "1px solid transparent"
        }}
      >
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-[#F5A623] flex items-center justify-center">
            <span className="text-black font-bold text-xs" style={{ fontFamily: "Bebas Neue" }}>YB</span>
          </div>
          <span className="text-white font-bold" style={{ fontFamily: "Bebas Neue", fontSize: "22px", letterSpacing: "3px" }}>
            YUMBOX
          </span>
        </Link>

        {/* Десктоп меню */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map(({ label, path }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`text-sm font-medium transition-colors duration-200 relative ${isActive ? "text-[#F5A623]" : "text-white/80 hover:text-[#F5A623]"}`}
              >
                {label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#F5A623] rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <a href="tel:+380938239293" className="hidden lg:block text-white/70 hover:text-[#F5A623] text-sm transition-colors">
            +380 93 823 92 93
          </a>

          <button onClick={onCartOpen} className="relative flex items-center gap-2 btn-orange px-4 py-2 text-sm">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 6h12.8M7 13L5.4 5M17 19a1 1 0 100 2 1 1 0 000-2zm-8 0a1 1 0 100 2 1 1 0 000-2z" />
            </svg>
            Кошик
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>

          <button
            className="lg:hidden text-white w-9 h-9 flex items-center justify-center rounded-lg border border-[#2a1500] hover:border-[#F5A623]/40 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </nav>

      {/* Мобільне меню */}
      <div
        className="fixed left-0 right-0 z-40 lg:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          top: "65px",
          maxHeight: menuOpen ? "400px" : "0px",
          opacity: menuOpen ? 1 : 0,
        }}
      >
        <div className="bg-[#0D0000] border-b border-[#2a1500] px-6 py-4 flex flex-col">
          {navItems.map(({ label, path }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={`py-3 text-sm font-medium border-b border-[#2a1500] last:border-0 transition-colors flex items-center justify-between ${isActive ? "text-[#F5A623]" : "text-white/70 hover:text-[#F5A623]"}`}
              >
                {label}
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />}
              </Link>
            );
          })}

          
           <a href="tel:+380938239293"
            className="mt-3 flex items-center gap-2 text-[#F5A623] text-sm font-medium"
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +380 93 823 92 93
          </a>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}