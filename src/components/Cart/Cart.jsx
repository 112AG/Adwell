import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../../componentsChild/CartItem/CartItem";
import { Link } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, curr) => acc + Number(curr.price), 0);
    setTotalAmount(total);
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <div className="flex w-full justify-between px-4 sm:px-6 flex-wrap py-6">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} itemIndex={item.id} />
            ))}
          </div>
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="flex items-center justify-center flex-col gap-2 border border-gray-200 p-5 my-8 min-w-[318px] rounded shadow-2xl hover:shadow-xl hover:scale-95 transition">
              <h1 className="font-bold text-2xl text-blue-900">Cart Summary</h1>
              <p className="text-xl font-semibold">
                Total Item : {cart.length}
              </p>
              <p>Total Amount : Rs. {totalAmount}</p>
              <Link  to='/buy' className="py-1 px-6 bg-blue-600 text-white font-semibold rounded-sm cursor-pointer hover:bg-blue-700">
                Pay Now
              </Link>
              <p className="text-red-600">Note : Copy uniqueCodes of your Cart products</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full py-50 w-full flex items-center justify-center flex-col gap-2">
          <h1 className="font-medium text-xl">Cart Empty</h1>
          <Link
            to="/shop"
            className="py-1 px-4 bg-red-600 font-semibold text-white rounded-xl"
          >
            Shop Now
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
