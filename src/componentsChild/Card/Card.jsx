import React, { useState } from "react";
import { Link } from "react-router-dom";

function Card({ diary }) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);

  const description = diary.description || "";
  const truncatedDescription =
    description.length > 100 ? description.substring(0, 100) + "..." : description;

  return (
    <div className="w-[312px] border rounded shadow-md hover:scale-105 hover:shadow-2xl transition m-3 p-4 bg-white cursor-pointer">
      <img 
        src={diary.image} 
        alt={diary.dairyName} 
        className="w-full h-48 object-cover mb-4 rounded-t"
      />
      <div className="p-2 relative">
        <h2 className="text-xl font-bold mb-2">{diary.dairyName}</h2>
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
        <p className="text-gray-900 font-semibold">Price: ${diary.price}</p>
        <p className="text-gray-600 text-xs">Size: {diary.size}</p>
        <div className="flex border-2 rounded-full overflow-hidden w-[124px]  justify-between absolute bottom-2 right-0">
          <Link className="bg-red-500 hover:bg-red-600 text-center w-1/2 text-white font-semibold">Buy</Link>
          <Link className="bg-blue-500 hover:bg-blue-600 text-center w-1/2 text-white font-semibold">Cart</Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
