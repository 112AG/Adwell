import React from 'react';

function AboutUs() {
  const tableData = [
    {
      title: "Paramount Leader",
      description:
        "From a humble beginning was born the pioneer in book printing technology with a legacy of over five decades",
    },
    {
      title: "International Footprint",
      description:
        "With an efficient supply chain management, we now export our products to all key markets across the globe.",
    },
    {
      title: "Innovation Ethos",
      description:
        "Our think tanks set the trends for the world to follow, transforming the publishing and book-printing technology industry while demonstrating what it takes to be the best of the best",
    },
    {
      title: "Mass Customisation",
      description:
        "A name synonymous to the finest craftsmanship in the printing industry, our manufacturing units can capably print and package millions of impressions",
    },
    {
      title: "ISO 9001:2015",
      description:
        "As a mark of the quality management system, we are an ISO 9001:2015 certified-company that understands the importance of team dynamics for success!",
    },
    {
      title: "ISO 14001",
      description:
        "As an ISO 14001 certified company, we have implemented an environmental management system",
    },
  ];

  return (
    <div className='w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8'>
      <div className='max-w-3xl w-full'>
        <h1 className='font-bold text-center text-4xl sm:text-5xl md:text-6xl text-blue-900 py-4'>About Us</h1>
        <p className='text-[#565050] text-center'>Welcome to Adwell Paper Products!</p>
        <br />
        <p className='text-[#565050] text-justify'>
          Adwell is a premium stationery brand, which has been in the market for over five decades. Srinivas Fine Arts Pvt. Ltd. is known for its innovative stationery with unique concepts and creative designs. The premium brand has created a niche in the global market and is a best-seller in key markets across Europe, USA, Middle East, Australia, Asia, and Africa.
        </p>
        <br />
        <p className='text-[#565050] text-justify'>
          Our products provide a sense of wonder and make you eager to explore just by turning the pages. Writing on our books will take you on a journey with a whole different feeling. With our premium-quality products, document your daily life, or start thinking about new topics and ideas. Our notebooks and journals are a great place to store favorite quotes, random facts, dreams, and ideas for the future.
        </p>
        <br />
        <p className='text-[#565050] text-center font-semibold'>
          “Leaf through our site to explore our extensive range of products and feel our passion for customers and products!”
        </p>
      </div>

      <br /><br />
      <h1 className='text-2xl sm:text-3xl font-semibold pb-5 text-blue-900'>Why Choose Us</h1>
      <div className='max-w-3xl w-full pb-4 sm:pb-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {tableData.map((data, idx) => (
            <div key={idx} className='p-4 border border-gray-300 rounded-lg shadow-sm bg-white'>
              <h2 className='text-lg font-bold text-red-700'>{data.title}</h2>
              <p className='text-[#565050] text-sm mt-2'>{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
