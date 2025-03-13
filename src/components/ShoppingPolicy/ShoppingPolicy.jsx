import React from "react";

function ShoppingPolicy() {
  const shippingInfo = [
    {
      section: "Shipping Locations",
      content: "We can ship our products to 200+ countries worldwide.",
    },
    {
      section: "Shipping Time",
      content: `The shipping transit days for air freight are as follows:
      • South India: 3 – 4 working days
      • North India: 4 – 6 working days
      • West India: 3 – 6 working days
      • East India: 7 – 8 working days
      
      The transit time may differ for bulk shipping as we dispatch the consignment through surface mode.`,
    },
    {
      section: "Delays in Delivery",
      content: `• The aforementioned shipping time is only indicative, and the items can be shipped earlier or later on a case-to-case basis.
      • Delivery time is subject to factors beyond our control, including unexpected travel delays from courier partners due to weather conditions and strikes. 
      • We will keep you informed about any delays. No refund, returns, replacement, or exchange will be entertained for this reason.`,
    },
    {
      section: "Important Information Regarding Address",
      content: `• Billing Address is where a customer receives their bills, and the shipping address is where they want to receive the shipment. Both addresses can be the same or different.
      • Address changes must be informed within 24 hours of placing the order. After 24 hours or after the parcel is shipped, no alterations are allowed.
      • To ship multiple products to different addresses, please place separate orders for each address.`,
    },
    {
      section: "Risk of Loss",
      content: `Any dispute or claim related to your visit or purchase through www.nightingaleshop.com will only be handled in competent courts of law at Srivilliputhur, Tamil Nadu.
      Arbitration under this agreement shall be conducted under the rules and prevailing laws.`,
    },
    {
      section: "Site Policies",
      content: `All items purchased from www.nightingaleshop.com are subject to the aforementioned shipping contract, meaning the risk of loss and title for such items pass to you upon our delivery to the carrier. 
      Nightingale Paper Products is not liable thereafter.`,
    },
  ];

  return (
    <div className="w-full h-full flex item-center justify-center py-2 sm:px-6 px-4">
      <div className="max-w-4xl">
        <h1 className="text-3xl pb-4 font-bold text-gray-800 text-center">
          Shipping Policy
        </h1>
        <p className="text-[18px] text-[#565050]">
          We render our services to your acceptance of the conditions mentioned
          below and therefore request you to read them carefully.
        </p>
        <p className="text-[18px] text-[#565050]">
          We despatch all our paper Products within 48 hours of receiving the
          order. We courier all domestic orders through reputed courier
          companies like Blue Dart Express Limited or DTDC (India) and
          international orders through DHL.
        </p>
        {shippingInfo.map((data, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row max-w-4xl bg-red-50 shadow-md rounded-lg p-4 md:p-6 my-4"
          >
            {/* Section Title */}
            <h1 className="text-red-800 font-semibold text-lg md:text-xl w-full md:w-1/3 mb-2 md:mb-0 pr-4">
              {data.section}
            </h1>

            {/* Content */}
            <p className="text-gray-700 text-sm md:text-base w-full md:w-2/3">
              {data.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingPolicy;
