import React from "react";
import { Link } from "react-router-dom";

function Personalize() {
  return (
    <div className="w-full h-full flex flex-col justify-center ">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl pb-6 py-4 font-bold text-gray-800 text-center">
          Discount Offers
        </h1>
        <p className=" text-[16px] leading-tight text-left">
          Welcome to Nightingale, where we specialize in creating personalized
          corporate gifts that make a lasting impression. We understand the
          importance of showing appreciation to your clients, partners, and
          employees, and our range of personalized diaries and notebooks are
          designed to do just that.
          <br />
          <br />
          With our personalized corporate gifts, you can be sure that your
          clients, partners, and employees will appreciate your thoughtfulness
          and attention to detail. Our gifts have excellent longevity and are
          sure to leave a lasting brand impact.
          <br />
          <br />
          At Nightingale, we pride ourselves on our commitment to quality, and
          we use only the best materials and printing techniques to create our
          products. We also offer competitive pricing, making our personalized
          corporate gifts an affordable option for businesses of all sizes.
          <br />
          <br />
          So, whether you’re looking to reward your employees for their hard
          work or to thank your clients for their loyalty, Nightingale has the
          perfect gift for you. Contact us today to discuss your personalized
          corporate gift needs, and let us help you create a gift that will be
          cherished for years to come.
        </p>


        <div className="flex gap-6 py-8 justify-between md:flex-row flex-col">
          <div className="max-w-[324px] border border-red-800 py-4 px-3 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-104 bg-gradient-to-br from-red-300 to-white ">
          <div className="bg-red-600 text-white font-semibold w-[120px] text-center rotate-45 absolute -right-8 top-4">Popular</div>
            <h1 className="font-bold text-[24px] leading-snug text-center text-red-900 drop-shadow-md">
              Personalization on Readymade Products
            </h1>
            <p className="text-center text-[16px] text-gray-700 pb-2 italic">
              Minimum Order quantity ={" "}
              <span className="font-semibold">50 nos.</span>
            </p>
            <div className="h-[2px] w-full bg-red-900 mb-3"></div>
            <div className="flex flex-col items-center justify-center text-gray-800">
              <p className="text-[24px] font-semibold text-center text-red-700">
                Rs. 500 <br />
                <span className="text-[18px] text-gray-700">Per Order</span>
              </p>
              <br />
              <p className="border-b-2 border-red-400 w-fit px-2 py-1 text-gray-700">
                LOGO FOILING @Rs.20
              </p>
              <p className="border-b-2 border-red-400 w-fit px-2 py-1 text-gray-700">
                NAME FOILING @Rs.15
              </p>
              <p className="border-b-2 border-red-400 w-fit px-2 py-1 text-gray-700">
                PAGE INSERT @Rs.15
              </p>
              <br />
              <Link className="py-2 px-5 mt-3 bg-red-700 text-white rounded-lg hover:bg-red-800 shadow-md transition-all duration-300">
                GET A QUOTE
              </Link>
            </div>
            <p className="mt-4 text-center text-[15px] text-gray-700">
              Our range of customization options includes name and logo foiling,
              embossing, multicolor printing of the front cover, and
              personalized page inserts. We also offer premium packaging options
              to add a touch of luxury to your gift.
            </p>
          </div>

          <div className="relative max-w-[324px] overflow-hidden border border-red-800 py-4 px-3 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-104 bg-gradient-to-br from-red-300 to-white ">
            <div className="bg-red-600 text-white font-semibold w-[120px] text-center rotate-45 absolute -right-8 top-4">Popular</div>
            <h1 className="font-bold text-[24px] leading-snug text-center text-red-900 drop-shadow-md">
            Complete Product Customization
            </h1>
            <p className="text-center text-[16px] text-gray-700 pb-2 italic">
            minimum order quantities may vary based on specifications
            </p>
            <div className="h-[2px] w-full bg-red-900 mb-3"></div>
            <div className="flex flex-col items-center justify-center text-gray-800">
            <p className="mt-4 text-center text-[15px] text-gray-700">
              Our range of customization options includes name and logo foiling,
              embossing, multicolor printing of the front cover, and
              personalized page inserts. We also offer premium packaging options
              to add a touch of luxury to your gift.
            </p>
              <Link className="py-2 px-5 mt-3 bg-red-700 text-white rounded-lg hover:bg-red-800 shadow-md transition-all duration-300">
                GET A QUOTE
              </Link>
            </div>
            <p className="mt-4 text-center text-[15px] text-gray-700">
              Our range of customization options includes name and logo foiling,
              embossing, multicolor printing of the front cover, and
              personalized page inserts. We also offer premium packaging options
              to add a touch of luxury to your gift. We also offer premium packaging options
              to add a touch of luxury to your gift.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personalize;
