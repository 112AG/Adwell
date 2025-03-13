import React, { useState } from "react";

function CustomFeedback() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    location: "",
    product: "",
    feedback: "",
    experience: "",
    allowPublish: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Feedback submitted successfully!");
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-8 px-4 bg-gray-100">
      <div className="max-w-3xl w-full p-6 bg-white shadow-xl rounded-lg">
        <h1 className="text-3xl pb-6 font-bold text-gray-800 text-center">
          Customer Feedback
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
          {[
            { name: "fullName", type: "text", placeholder: "Full Name" },
            { name: "email", type: "email", placeholder: "Email" },
            { name: "number", type: "number", placeholder: "Phone Number" },
            { name: "location", type: "text", placeholder: "Location" },
          ].map(({ name, type, placeholder }) => (
            <input
              key={name}
              type={type}
              name={name}
              placeholder={placeholder}
              value={formData[name]}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-400 transition"
            />
          ))}

          <div>
            <h2 className="text-lg font-semibold mb-2">Select a Product</h2>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {["Notebook", "Diary", "Writing Pad", "Journal", "Other"].map(
                (item) => (
                  <label
                    key={item}
                    className="flex items-center space-x-2 p-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
                  >
                    <input
                      type="radio"
                      name="product"
                      value={item}
                      checked={formData.product === item}
                      onChange={handleChange}
                      className="w-5 h-5 text-red-600 focus:ring-red-500"
                    />
                    <span className="text-gray-800">{item}</span>
                  </label>
                )
              )}
            </div>
          </div>

          <textarea
            name="feedback"
            placeholder="Share your feedback..."
            value={formData.feedback}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-3 w-full h-24 resize-none focus:outline-none focus:ring-2 focus:ring-red-400 transition"
          ></textarea>

          <div>
            <h2 className="text-lg font-semibold mb-2">Product Experience</h2>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {["Excellent", "Good", "Average", "Poor"].map((exp) => (
                <label
                  key={exp}
                  className="flex items-center space-x-2 p-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
                >
                  <input
                    type="radio"
                    name="experience"
                    value={exp}
                    checked={formData.experience === exp}
                    onChange={handleChange}
                    className="w-5 h-5 text-red-600 focus:ring-red-500"
                  />
                  <span className="text-gray-800">{exp}</span>
                </label>
              ))}
            </div>
          </div>

          <label className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg cursor-pointer hover:bg-gray-200">
            <input
              type="checkbox"
              name="allowPublish"
              checked={formData.allowPublish}
              onChange={handleChange}
              className="w-5 h-5 text-red-600 focus:ring-red-500"
            />
            <span className="text-gray-800">
              Allow us to publish this review on our website
            </span>
          </label>

          <button
            type="submit"
            className="bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition text-lg font-semibold"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}

export default CustomFeedback;
