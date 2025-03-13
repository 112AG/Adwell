import React, { useState } from "react";

function FAQ() {
  // Track open/closed state for each FAQ item
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I order online?",
      answer:
        "Add the products to the cart and enter your Billing & Shipping address and proceed to check out to pay and place your order online.",
    },
    {
      question: "How do I pay for my order?",
      answer:
        "You can pay for your order using credit cards, debit cards, Net Banking, UPI payments like GPay, Phone Pe etc.",
    },
    {
      question: "Do you have COD option?",
      answer: "We do not have COD option with us right now.",
    },
    {
      question: "Are Adwell Products available offline?",
      answer:
        "Yes, our products are available on several stationery stores across the length and breadth of India. Please email us at adwell@sfa.co.in or call us at +91 0987654321 to know the address of an available store or stockiest nearest to your location.",
    },
    {
      question: "Can I order online for International countries?",
      answer:
        "Yes, you can order online for international countries by paying only through International credit or debit cards.",
    },
    {
      question: "What should I do if my payment doesn't get through or fails?",
      answer:
        "If your payment transaction fails, please contact our Customer Service immediately on call or Whatsapp at +91 0987654321 or email us at adwell@sfa.co.in.",
    },
    {
      question: "Do I have to pay shipping charges?",
      answer:
        "Shipping is free within India for all orders above Rs. 1500/-. Orders of below Rs.1500/- will be charged a flat shipping fee of Rs.180 in India. For International shipping, the charges will be auto-calculated on our website once you add the product to the cart and enter the shipping address with the pin-code.",
    },
    {
      question: "By when will I receive the ordered products?",
      answer:
        "We process all orders within 24 working hours and ship them through the most reliable courier companies. We try to deliver the products to you within 3 to 7 working days in major cities. However, the duration of the delivery can take a maximum of 10 working days depending on your delivery location and other factors like weather conditions, strikes, etc.",
    },
  ];

  // Toggle function
  const handleClick = (idx) => {
    setOpenIndex((prevIndex) => (prevIndex === idx ? null : idx));
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-2 sm:px-6 px-4">
      <div className="w-full mx-auto p-4">
        <h1 className="text-3xl pb-4 font-bold text-gray-800 text-center">
          Frequently Asked Questions
        </h1>
        {faqs.map((data, idx) => (
          <div key={idx} className="border-b border-gray-300 py-2">
            <div
              className="flex justify-between text-lg font-semibold py-2 cursor-pointer"
              onClick={() => handleClick(idx)}
            >
              <h2 className="text-left text-red-950">{data.question}</h2>
              <i
                className={`ri-arrow-${openIndex === idx ? "up" : "down"}-s-line transition-transform duration-300`}
              ></i>
            </div>

            <div
              className={`overflow-hidden transition-all duration-600 ease-in-out ${
                openIndex === idx ? "max-h-40 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
              }`}
            >
              <p className="text-gray-700 mt-2">{data.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
