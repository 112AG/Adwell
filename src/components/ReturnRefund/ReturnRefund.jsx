import React from "react";

function ReturnRefund() {
  const orderPolicy = [
    {
      id: 1,
      question: "How do I cancel my order?",
      answer: "If you cancel your order before the payment gateway accepts the amount, there will be a full refund of the money paid by you. In all the other cases, including damage or incorrectly supplied goods, we may offer you a replacement (product)."
    },
    {
      id: 2,
      question: "I want to return a product, how do I proceed?",
      answer: "The following are the terms and conditions for return/replacement:",
      conditions: [
        "You agree to take reasonable care of the products that you wish to replace in its original condition.",
        "Only unused, unaltered, and unsoiled products will be accepted for refund.",
        "Replacements will be made based on the availability of the product on the website.",
        "When you return any product, you are responsible for any loss or damage to them in transit and, for this reason, we reserve the right to charge you for such loss or damage.",
        "Refunds will be made once you have returned the delivered products to us."
      ]
    },
    {
      id: 3,
      question: "How will I get a refund for the order I returned?",
      answer: "Any refund shall be made to the debit/credit card account provided by you when you place your order and will be subjected to our right to withhold an amount for products which are damaged upon return."
    }
  ];
  
  
    
  return (
    <div className="w-full h-full flex flex-col item-center justify-center py-2 sm:px-6 px-4">
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl pb-4 font-bold text-gray-800 text-center">
          Shipping Policy
        </h1>
          <p className="text-[18px] text-[#2f2c2c] py-1">• www.nightingaleshop.com attempts to provide as accurate a description as possible. However, www.nightingaleshop.com cannot guarantee that product description or other contents of this site, including the product prices, are accurate, complete, reliable, current, or error-free. If a product offered by www.nightingaleshop.com is not as per the description, you may return it in unused condition within seven working days for a full refund, as governed by this policy.</p>
          <p className="text-[18px] text-[#2f2c2c] py-1">• If the products you receive are damaged or incorrectly supplied on delivery, the details of the damage or error have to be noted and informed (by post, phone or email) within 72 hours of delivery and must be returned within seven working days in accordance with the Distance Selling Regulations 2000, beyond which, it will not be accepted.</p>
          <p className="text-[18px] text-[#2f2c2c] py-1 pb-3">• www.adwellshop.com will try to replace the specific product returned. However, we reserve the right to offer an alternative product in case the product is out of stock or discontinued by the manufacturer.</p>
      </div>
      <div className="max-w-4xl mx-auto p-4">
      {orderPolicy.map((item) => (
        <div key={item.id} className="mb-6">
          <h2 className="text-lg font-semibold text-red-800">{item.question}</h2>
          <p className="text-gray-600">{item.answer}</p>
          {item.conditions && (
            <ul className="list-disc list-inside mt-2 text-gray-600">
              {item.conditions.map((condition, index) => (
                <li key={index}>{condition}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
    </div>
  );
}

export default ReturnRefund;
