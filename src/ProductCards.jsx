import ProductCard from "./ProductCard";

function ProductCards(props) {
  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      {props.products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
}

export default ProductCards;
