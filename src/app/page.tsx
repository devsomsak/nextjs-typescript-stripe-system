import Cart from "@/components/Cart";
import Product from "@/components/Product";
import productsData from "@/libs/productsData"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl">E-Commerce Cart System</h1>
        <div className="grid grid-cols-3 gap-4">
          {productsData.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <Cart />
      </div>
    </main>
  );
}

interface Props {
  key: string;
  product: Product;
}