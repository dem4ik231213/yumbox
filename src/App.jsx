import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import { products } from "./data/products";
import Delivery from "./pages/Delivery";


function Home({ onAddToCart }) {
  function scrollToMenu() {
    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Hero onScrollToMenu={scrollToMenu} />
      <Catalog products={products} onAddToCart={onAddToCart} />
    </>
  );
}

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const cartCount = cartItems.reduce((sum, i) => sum + i.qty, 0);

  function handleAddToCart(product) {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  }

  function handleRemove(id) {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  }

  function handleChangeQty(id, delta) {
    setCartItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i)).filter((i) => i.qty > 0)
    );
  }

  return (
    <div className="min-h-screen bg-[#0D0000]">
      <Navbar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />

      <Routes>
        <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/delivery" element={<Delivery />} />
      </Routes>

      <Footer />
      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemove={handleRemove}
        onChangeQty={handleChangeQty}
      />
    </div>
  );
}