import Hero from "./Hero";
import Navigation from "./Navigation";
import Products from "./Products";

function App() {
  const name = "Manupa";
  const cartCount = 2;

  return (
    <main>
      <Navigation name={name} cartCount={cartCount} />
      <Hero />
      <Products />
    </main>
  );
}

export default App;
