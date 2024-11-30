import Navigation from "./../Navigation";
import Hero from "./../Hero";
import Products from "./../Products";

function HomePage() {
  const name = "Manupa";
  const cartCount = 2;

  return (
    <div>
      <Navigation name={name} cartCount={cartCount} />
      <Hero />
      <Products />
    </div>
  );
}

export default HomePage;
