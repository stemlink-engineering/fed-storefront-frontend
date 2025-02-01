import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router";
import { clearCart } from "@/lib/features/cartSlice";

function PaymentPage() {
  const cart = useSelector((state) => state.cart.value);
  const { toast } = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <main className="px-8">
      <h2 className="text-4xl font-bold">Order Summary</h2>
      <div>
        {cart.map((item, index) => (
          <div key={index}>
            <p>{item.product.name}</p>
            <p>{item.product.price}</p>
            <p>{item.quantity}</p>
          </div>
        ))}
      </div>
      <h3>
        Total:{" "}
        {cart.reduce(
          (acc, item) => acc + item.product.price * item.quantity,
          0
        )}
      </h3>

      <div className="mt-4">
        <Button
          onClick={() => {
            toast({
              title: "Order Placed",
              description: "Your order has been placed successfully",
            });
            dispatch(clearCart());
          }}
        >
          Place Order
        </Button>
      </div>
    </main>
  );
}

export default PaymentPage;
