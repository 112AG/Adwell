import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../../Redux/Slices/CartSlice";

function CartItem({item}) {
const dispatch = useDispatch();

const removefromCart = () => {
    dispatch(remove(item.id));
    console.log('item-removed');
}
  return (
    <div className="max-w-sm my-4 bg-white mx-2 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
      <img
        src={item.image}
        alt="Product"
        className="w-full h-64 object-contain bg-gray-100 p-4"
      />
      <div className="p-5">
      <div className="flex flex-col">
        <h2 className="text-xl font-bold mb-2">{item.dairyName}</h2>
        <p className="text-[14px] text-right mb-2">uniqueCode: <span className="text-green-600 font-medium">{item.id}</span></p>
        </div>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {item.description}
        </p>
        <p className="text-lg font-bold text-gray-900 mt-3">Rs. {item.price}</p>
        <button onClick={removefromCart} className="mt-4 w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-red-600 transition-all duration-300">
          Remove{" "}
        </button>
      </div>
    </div>
  );
}

export default CartItem;
