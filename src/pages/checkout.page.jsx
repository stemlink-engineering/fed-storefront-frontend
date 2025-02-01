import { Button } from "@/components/ui/button";
import { useCreateOrderMutation } from "@/lib/api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useToast } from "@/hooks/use-toast";

function CheckoutPage() {
  const cart = useSelector((state) => state.cart.value);
  const [createOrder, { isLoading, isError, data }] = useCreateOrderMutation();
  const navigate = useNavigate();
  const { toast } = useToast();

  return (
    <main className="px-8">
      <h2 className="text-4xl font-bold">Checkout Page</h2>
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
        <Button
          type="button"
          onClick={() => {
            createOrder({
              items: cart,
              userId: "",
            });
            navigate("/shop/payment");
            toast({
              title: "Checkout Successful",
              description: "Redirecting to payment page",
            });
          }}
        >
          Proceed to Payment
        </Button>
      </div>
    </main>
  );
}

export default CheckoutPage;
