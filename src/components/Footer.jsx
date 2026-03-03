import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-[#2a1500] px-6 md:px-12 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#F5A623] flex items-center justify-center">
            <span className="text-black font-bold text-xs" style={{ fontFamily: 'Bebas Neue' }}>YB</span>
          </div>
          <span className="text-white font-bold" style={{ fontFamily: 'Bebas Neue', fontSize: '20px', letterSpacing: '3px' }}>
            YUMBOX
          </span>
        </Link>

        <div className="flex gap-6 text-sm text-white/50">
          <Link to="/" className="hover:text-[#F5A623] transition-colors">Каталог</Link>
          <Link to="/about" className="hover:text-[#F5A623] transition-colors">Про нас</Link>
          <Link to="/delivery" className="hover:text-[#F5A623] transition-colors">Доставка</Link>
          <Link to="/contacts" className="hover:text-[#F5A623] transition-colors">Контакти</Link>
        </div>

        <div className="flex flex-col items-center md:items-end gap-1 text-white/40 text-sm">
          <a href="tel:+380938239293" className="hover:text-[#F5A623] transition-colors">+380 93 823 92 93</a>
          <a href="mailto:yumbox.lutsk@gmail.com" className="hover:text-[#F5A623] transition-colors">yumbox.lutsk@gmail.com</a>
        </div>
      </div>
      <div className="text-center text-white/20 text-xs mt-8">
        © {new Date().getFullYear()} YumBox. Всі права захищені.
      </div>
    </footer>
  );
}