import React from "react";
import { Link } from "react-router-dom";

function Offer() {
  const offerData = [
    {
      "offer": "Free Shipping",
      "details": "If your order is above 1500 rupees, you can avail free shipping on your purchase."
    },
    {
      "offer": "10% Discount",
      "details": "If your order is between 3,000 to 5,000 rupees, you can avail a 10% discount on your purchase."
    },
    {
      "offer": "15% Discount",
      "details": "If your order is between 5,000 to 10,000 rupees, you can avail a 15% discount on your purchase."
    },
    {
      "offer": "20% Discount",
      "details": "If your order is between 10,000 to 15,000 rupees, you can avail a 20% discount on your purchase."
    },
    {
      "offer": "25% Discount",
      "details": "If your order is above 15,000 rupees, you can avail a 25% discount on your purchase."
    }
  ];
  
  return (
    <div className="w-full h-full flex flex-col justify-center ">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl pb-6 font-bold text-gray-800 text-center">
          Discount Offers
        </h1>
        <p className="text-center text-[14px]">
          Welcome to our website where you can find a wide range of notebooks,
          stationery, and diaries at discounted prices. We offer discounts for
          volume purchases.
          <br /><br />
          With our easy-to-navigate website, you can quickly find the products
          you need and take advantage of our discounts. Whether you’re a
          student, professional or just someone who loves to use quality
          stationery, our selection of notebooks, stationery, and diaries are
          sure to meet your needs. So, start shopping today and save big on your
          stationery needs.
        </p>
        <div className="px-2 py-6">
          {offerData.map((data, idx) => (
            <div key={idx} className="flex w-full sm:flex-row flex-col justify-between gap-2 py-4">
              <h1 className="text-red-900 font-semibold">{data.offer}</h1>
              <p className="sm:w-[70%]">{data.details}</p>
            </div>
          ))}
        </div>
      </div>
      <Link className="w-[134px] mb-6 bg-red-600 text-center py-1.5 transition text-white rounded font-semibold hover:bg-transparent border-2 border-red-600 hover:text-red-600 mx-auto">Available Offers</Link>

    </div>
  );
}

export default Offer;
