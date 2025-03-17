import React from "react";

function Contact() {
  return (
    <div className="flex items-center justify-center h-full w-full ">
      <div className="max-w-3xl flex flex-col text-center">
      <div className="p-6  mx-auto text-center">
  {/* Heading */}
  <h1 className="text-3xl pb-4 font-bold text-gray-800">Contact Us</h1>

  {/* Description */}
  <p className="text-gray-600 mt-2">
    We are here to help you with anything you need. Feel free to get in touch 
    <strong> Monday to Saturday</strong> from <strong>9:00 AM to 5:30 PM.</strong> 
    We’ll get back to you within 24 hours.
  </p>

  {/* Contact Info */}
  <div className="mt-4 flex items-center justify-center gap-4 text-gray-700 text-lg">
    <p className="flex items-center gap-2">
      <i className="ri-mail-fill text-blue-600"></i> corpcom@adwelldiaries.com
    </p>
    <span className="text-gray-400">|</span>
    <p className="flex items-center gap-2">
      <i className="ri-phone-fill text-green-600"></i> +91 7603062672
    </p>
  </div>
</div>


        <br />

        <form className="flex flex-col gap-4 max-w-3xl bg-white p-6 mb-8 rounded-lg shadow-md  mx-auto">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="number"
              placeholder="(+91)Phone Number"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <textarea
            placeholder="Your Message"
            rows="5"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-white text-blue-600 border-2 border-blue-600 font-semibold p-3 rounded-md hover:bg-blue-700 hover:text-white transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
