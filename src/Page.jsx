import ProductBoard from "./components/productBoard/ProductBoard";
import CartProvider from "./providers/CartProvider";
import ProductsProvider from "./providers/ProductsProvider";

const Page = () => {
  return (
    <ProductsProvider>
      <CartProvider>
        <ProductBoard />
      </CartProvider>
    </ProductsProvider>
  );
};

export default Page;
