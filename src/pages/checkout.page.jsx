import { Link } from "react-router";

import { loadStripe } from "@stripe/stripe-js";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { setClientSecret } from "@/lib/features/paymentSlice";
import { useDispatch } from "react-redux";

function CheckoutPage() {
  const clientSecret = useSelector((state) => state.payment.value);
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:8000/api/payments/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(setClientSecret(data.clientSecret));
      });
  }, []);

  return (
    <main className="px-8">
      <h2 className="text-4xl font-bold">Checkout</h2>
      <div></div>
      {/* Form */}

      {/* Form */}
      <Link to="/shop/payment">Proceed to Payment</Link>
    </main>
  );
}

export default CheckoutPage;
