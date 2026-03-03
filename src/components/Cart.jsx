import { useState } from "react";

const DELIVERY = 50;
const DISCOUNT_THRESHOLD = 1000;
const DISCOUNT = 0.10;

export default function Cart({ isOpen, onClose, items, onRemove, onChangeQty }) {
  const [ordered, setOrdered] = useState(false);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const hasDiscount = subtotal >= DISCOUNT_THRESHOLD;
  const discountAmount = hasDiscount ? Math.round(subtotal * DISCOUNT) : 0;
  const discountedSubtotal = subtotal - discountAmount;
  const total = items.length > 0 ? discountedSubtotal + DELIVERY : 0;

  function handleOrder() {
    if (items.length === 0) return;

    const order = {
      items: items.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        qty: item.qty,
        total: item.price * item.qty,
      })),
      subtotal,
      discount: discountAmount,
      delivery: DELIVERY,
      total,
      date: new Date().toLocaleString("uk-UA"),
    };

    console.log("🛒 Нове замовлення:", order);
    setOrdered(true);
    setTimeout(() => setOrdered(false), 3000);
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm" onClick={onClose} />
      )}

      <div className={`fixed top-0 right-0 h-full w-full max-w-sm bg-[#0D0000] border-l border-[#2a1500] z-50 flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#2a1500]">
          <h2 className="text-white font-bold" style={{ fontFamily: 'Bebas Neue', letterSpacing: '2px', fontSize: '24px' }}>
            🛒 Кошик
          </h2>
          <button onClick={onClose} className="text-white/50 hover:text-white transition-colors">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-white/30 gap-4">
              <svg width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 6h12.8M7 13L5.4 5M17 19a1 1 0 100 2 1 1 0 000-2zm-8 0a1 1 0 100 2 1 1 0 000-2z" />
              </svg>
              <p className="text-sm">Кошик порожній</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-3 bg-[#1A0A00] rounded-xl p-3 border border-[#2a1500]">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm truncate">{item.name}</p>
                  <p className="text-white/50 text-xs">{item.description}</p>
                  <p className="text-[#F5A623] font-bold text-sm mt-1">{item.price} грн</p>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <button onClick={() => onRemove(item.id)} className="text-white/30 hover:text-red-400 transition-colors text-xs">✕</button>
                  <div className="flex items-center gap-2">
                    <button onClick={() => onChangeQty(item.id, -1)} className="w-6 h-6 rounded-full border border-[#F5A623]/40 text-[#F5A623] text-xs flex items-center justify-center hover:bg-[#F5A623]/10 transition">−</button>
                    <span className="text-white text-sm w-4 text-center">{item.qty}</span>
                    <button onClick={() => onChangeQty(item.id, 1)} className="w-6 h-6 rounded-full border border-[#F5A623]/40 text-[#F5A623] text-xs flex items-center justify-center hover:bg-[#F5A623]/10 transition">+</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-[#2a1500] flex flex-col gap-3">

            {/* Знижка 10% якщо від 1000 грн */}
            {hasDiscount && (
              <div className="bg-green-900/30 border border-green-500/30 rounded-xl px-4 py-2 text-green-400 text-xs text-center">
                🎉 Знижка 10% — ти заощадив {discountAmount} грн!
              </div>
            )}

            <div className="flex justify-between text-sm text-white/60">
              <span>Сума</span>
              <span className={hasDiscount ? "line-through text-white/30" : ""}>{subtotal} ₴</span>
            </div>

            {hasDiscount && (
              <div className="flex justify-between text-sm text-green-400">
                <span>Після знижки</span>
                <span>{discountedSubtotal} ₴</span>
              </div>
            )}

            <div className="flex justify-between text-sm text-white/60">
              <span>Доставка</span>
              <span>{DELIVERY} ₴</span>
            </div>

            <div className="flex justify-between text-white font-bold text-lg border-t border-[#2a1500] pt-3">
              <span>Разом</span>
              <span className="text-[#F5A623]">{total} ₴</span>
            </div>

            {ordered && (
              <div className="bg-green-900/30 border border-green-500/30 text-green-400 rounded-xl px-4 py-2 text-xs text-center">
                ✅ Замовлення оформлено! Дивись консоль.
              </div>
            )}

            <button onClick={handleOrder} className="btn-orange w-full py-3.5 text-base mt-1">
              Оформити за {total} ₴
            </button>
          </div>
        )}
      </div>
    </>
  );
}