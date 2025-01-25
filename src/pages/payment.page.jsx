import PaymentCard from "@/components/PaymentCard";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Qg642JjbWEvglIUunVSk5GblZprXQRDDhQbqzznYNfxBD7am2n3p7Bs1WXDYpYNKkXkGJq6XacLIcb8wIMcoyGf0067uMtLrq"
);

function PaymentPage() {
  const clientSecret = useSelector((state) => state.payment.value);

  const appearance = {
    theme: "stripe",
  };
  // Enable the skeleton loader UI for optimal loading.
  const loader = "auto";

  return (
    <main>
      {clientSecret && (
        <Elements
          options={{ clientSecret, appearance, loader }}
          stripe={stripePromise}
        >
          <PaymentCard />
        </Elements>
      )}
    </main>
  );
}

export default PaymentPage;
