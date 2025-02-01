import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useGetOrderQuery } from "@/lib/api";
import { useSearchParams } from "react-router";

function CompletePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");
  console.log(orderId);

  const { data, isLoading } = useGetOrderQuery(orderId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="px-8">
      <h2 className="text-4xl font-bold">Order Placed Successfully</h2>
      <div>
        {data.items.map((item, index) => (
          <div key={index}>
            <p>{item.product.name}</p>
            <p>{item.product.price}</p>
            <p>{item.quantity}</p>
          </div>
        ))}
      </div>
      <h3>
        Total:{" "}
        {data.items.reduce(
          (acc, item) => acc + item.product.price * item.quantity,
          0
        )}
      </h3>

      <div className="mt-4">
        <Button asChild>
          <Link to="/">Back to Shop</Link>
        </Button>
      </div>
    </main>
  );
}

export default CompletePage;
