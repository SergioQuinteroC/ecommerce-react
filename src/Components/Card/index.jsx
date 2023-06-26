import React, { useContext } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";

const Card = ({
  id,
  title,
  price,
  category: { name },
  images,
  description,
}) => {
  const {
    count,
    setCount,
    openProductDetail,
    closeProductDetail,
    setProductToShow,
    cartProducts,
    setCartProducts,
    openCheckoutSideMenu,
  } = useContext(ShoppingCartContext);

  const showProduct = () => {
    openProductDetail();
    setProductToShow({ title, price, description, images });
  };

  const addProductsToCart = (event) => {
    event.stopPropagation();
    setCount(count + 1);
    const data = { id, title, price, description, images };
    setCartProducts([...cartProducts, data]);
    closeProductDetail();
    openCheckoutSideMenu();
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct()}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={images[0]}
          alt={title}
        />
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => addProductsToCart(event)}
        >
          <PlusIcon className="h-6 w-6 text-black-500" />
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-medium">{`$${price}`}</span>
      </p>
    </div>
  );
};

export default Card;
