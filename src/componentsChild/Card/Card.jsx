import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { add, remove } from "../../Redux/Slices/CartSlice";

function Card({ diary }) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);

  const description = diary.description || "";
  const truncatedDescription =
    description.length > 100
      ? description.substring(0, 100) + "..."
      : description;

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const isInCart = cart.some((p) => p.id === diary.id);

  function handleCart() {
    dispatch(add(diary));
    console.log("Item added to cart");
  }

  function handleRemove() {
    if (isInCart) {
      dispatch(remove(diary.id));
      console.log("Removed from Cart");
    }
  }

  return (
    <div className="w-[312px] border rounded shadow-md hover:scale-105 hover:shadow-2xl transition m-3 p-4 bg-white cursor-pointer">
      <img
        src={diary.image}
        alt={diary.dairyName}
        className="w-full h-48 object-cover mb-4 rounded-t"
      />
      <div className="p-2 relative">
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-2">{diary.dairyName}</h2>
          <p className="text-[14px] text-right mb-2">
            uniqueCode:{" "}
            <span className="text-green-600 font-medium">{diary.id}</span>
          </p>
        </div>
        <p className="text-gray-700 text-sm mb-2">
          {expanded ? description : truncatedDescription}
          {description.length > 100 && (
            <span
              onClick={toggleExpanded}
              className="text-blue-500 cursor-pointer ml-1"
            >
              {expanded ? "Show less" : "Show more"}
            </span>
          )}
        </p>

        <div className="flex justify-between items-center">
          <div>
            {" "}
            <p className="text-gray-900 font-semibold">
              Price: Rs {diary.price}
            </p>
            <p className="text-gray-600 text-xs">Size: {diary.size}</p>
          </div>

          <button
            onClick={isInCart ? handleRemove : handleCart}
            className="bg-blue-500 hover:bg-red-600 text-center w-1/2 text-[16px] py-1 rounded text-white font-semibold"
          >
            {isInCart ? "Remove Cart" : "Add Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
