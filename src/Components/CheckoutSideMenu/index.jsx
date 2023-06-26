import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";
import "./styles.css";

const CheckoutSideMenu = () => {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts } =
    useContext(ShoppingCartContext);

  console.log("CART: ", cartProducts);

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex flex-col fixed right-0 border border-black rounded`}
    >
      <div className="flex justify-between items-center p-6 ">
        <h2 className="font-medium text-xl">My Order</h2>
        <XMarkIcon
          className="h-6 w-6 text-black-500 cursor-pointer"
          onClick={() => closeCheckoutSideMenu()}
        />
      </div>
      <div className="px-6">
        {cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            images={product.images}
            price={product.price}
          />
        ))}
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
