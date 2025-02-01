import { Button } from "@/components/ui/button";
import Navigation from "@/Navigation";
import { useSelector } from "react-redux";
import { Link } from "react-router";

function CartPage() {
  const cart = useSelector((state) => state.cart.value);

  return (
    <main className="px-8">
      <h2 className="text-4xl font-bold">My Cart</h2>
      <div>
        {cart.map((item, index) => (
          <div key={index}>
            <p>{item.product.name}</p>
            <p>{item.product.price}</p>
            <p>{item.quantity}</p>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <Button asChild>
          <Link to="/shop/checkout">Proceed to Checkout</Link>
        </Button>
      </div>
    </main>
  );
}

export default CartPage;
