import Hero from "../components/Hero";
import Catalog from "../components/Catalog";

export default function Home({ onAddToCart }) {
  function scrollToMenu() {
    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Hero onScrollToMenu={scrollToMenu} />
      <Catalog onAddToCart={onAddToCart} />
    </>
  );
}