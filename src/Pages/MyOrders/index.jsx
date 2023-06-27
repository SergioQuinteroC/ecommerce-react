import { useContext } from "react";
import { Link } from "react-router-dom";
import OrdersCard from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";

function MyOrders() {
  const { order } = useContext(ShoppingCartContext);
  
  return (
    <>
      <div className="flex items-center relative w-80 justify-center">
        <h1>My Orders</h1>
      </div>
      {order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </>
  );
}

export default MyOrders;
