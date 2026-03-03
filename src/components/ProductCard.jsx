export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card bg-[#1A0A00] rounded-2xl overflow-hidden border border-[#2a1500] flex flex-col">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#F5A623] text-black text-xs font-bold px-2.5 py-1 rounded-full">
            {product.badge}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1 gap-2">
        <div>
          <h3 className="text-white font-bold text-base leading-tight"
              style={{ fontFamily: 'Montserrat', fontSize: '15px', fontWeight: '700' }}>{product.name}
          </h3>
          <p className="text-white/50 text-xs mt-0.5">{product.description}</p>
          {product.weight && (
            <p className="text-white/30 text-xs">{product.weight}</p>
          )}
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-auto pt-2">
          {product.oldPrice && (
            <span className="text-white/30 text-sm line-through">{product.oldPrice} грн</span>
          )}
          <span className="text-[#F5A623] font-bold text-lg">{product.price} грн</span>
        </div>

        {/* Button */}
        <button
          onClick={() => onAddToCart(product)}
          className="btn-outline w-full py-2 text-sm mt-1"
        >
          Додати в кошик
        </button>
      </div>
    </div>
  );
}
