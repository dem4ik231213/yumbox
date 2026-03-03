import ProductCard from "./ProductCard";

export default function Catalog({ products, onAddToCart }) {
  return (
    <section id="catalog" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section title */}
      <div className="text-center mb-12">
        <h2
          className="text-white"
          style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(36px, 6vw, 64px)', letterSpacing: '4px' }}
        >
          Наше {" "}
          <span style={{ color: '#F5A623' }}>Меню</span>
        </h2>
        <div className="w-16 h-0.5 bg-[#F5A623] mx-auto mt-4 opacity-60" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}
