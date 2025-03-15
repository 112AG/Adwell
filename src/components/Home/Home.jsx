import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const diaries = [];

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/Data.json");
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const jsonData = await res.json();

        Object.values(jsonData).forEach((category) => {
          Object.values(category).forEach((subCategory) => {
            if (Array.isArray(subCategory)) {
              diaries.push(...subCategory);
            }
          });
        });

        setData(diaries);
        return diaries;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  function handleLeft() {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : data.length - 1));
  }

  function handleRight() {
    setCurrentIndex((prevIndex) => (prevIndex < data.length - 1 ? prevIndex + 1 : 0));
  }

  if (data.length > 0) {
    console.log(data[0]);
  }

  return (
    <div className="h-full w-full overflow-x-hidden">
      <div className="w-full fade-in flex sm:flex-row flex-col sm:h-[100vh]">
        <img
          className="home-image h-full sm:w-1/2 object-cover object-center"
          src="https://www.incrediblegifts.in/wp-content/uploads/2022/09/2-3-1536x1536.jpg"
          alt="Image"
        />
        <div className="p-3 text-animation">
          <h1 className="font-bold text-3xl sm:text-5xl py-4 sm:pt-[120px] text-left">
            Capture Every Thought,
            <br /> Chase Every Dream.
          </h1>
          <p className="text-[16px] leading-tight text-center sm:text-left py-0 sm:py-4">
            At Adwell, We believe that every idea, plan, and dream deserves a
            place to be written. Our beautifully designed diaries are crafted to
            help you organize your thoughts, track your progress, and turn your
            goals into reality. Whether you're journaling your journey, planning
            your success, or capturing daily inspirations, our high-quality
            diaries are the perfect companion. Start writing today and make
            every page a step toward your future!
          </p>
        </div>
      </div>

      <div className="flex gap-4 justify-center py-8 px-2">
        <Link
          to="/shop"
          className="w-[324px] border rounded flex flex-col item-center justify-between p-3 hover:scale-105 transition overflow-hidden"
        >
          <img
            className="hover:rotate-[6deg] transition "
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/diary-notebook/q/1/w/di-metallock-d13-makenstylecollection-original-imah6ymfkjc2zchs.jpeg?q=70"
            alt="image"
          />
          <h1 className="text-center text-xl font-semibold text-red-950">
            Writing Essentials
          </h1>
        </Link>
        <Link
          to="/shop"
          className="w-[324px] border rounded flex flex-col item-center justify-between p-3 hover:scale-105 transition overflow-hidden"
        >
          <img
            className="hover:-translate-y-1 transition "
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/diary-notebook/f/o/a/buddha-print-100-recycled-handmade-paper-diary-with-lock-tvj-original-imagy5xmawybzcyy.jpeg?q=70"
            alt="image"
          />
          <h1 className="text-center text-xl font-semibold text-red-950">
            Business Supplies
          </h1>
        </Link>
        <Link
          to="/shop"
          className="w-[324px] border rounded flex flex-col item-center justify-between p-3 hover:scale-105 transition overflow-hidden"
        >
          <img
            className="hover:-rotate-[6deg] transition "
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/diary-notebook/a/1/z/cc-t111-cc-t111-craft-club-original-imahyujhvag3hgr6.jpeg?q=70"
            alt="image"
          />
          <h1 className="text-center text-xl font-semibold text-red-950">
            Creative Stationaries
          </h1>
        </Link>
      </div>

      <div className="bg-gray-50 py-1">
        <h1 className="font-semibold text-3xl text-center">
          Artisan Notebooks
        </h1>
        <p className="font-medium text-[16px] text-center">
          Artistically Inspired Collections
        </p>
        <div className="w-full py-6 flex flex-nowrap overflow-x-scroll gap-4">
          {data.length > 0 ? (
            data.map((data, id) => (
              <Link
                key={id}
                className="min-w-[216px] md:min-w-[318px] border-2 rounded-3xl transition hover:scale-97 "
              >
                <img
                  src={data.image}
                  alt="image"
                  className="h-[190px] md:h-[300px] p-1 md:p-2 w-full object-cover rounded-3xl"
                />
                <div className="flex items-center justify-between px-2 md:px-3 md:py-1 ">
                  <h1 className=" text-lg font-medium">{data.dairyName}</h1>
                  <p>Size: {data.size}</p>
                </div>
              </Link>
            ))
          ) : (
            <p>Wait....</p>
          )}
        </div>
      </div>

      <div className="p-3 w-full flex flex-col md:flex-row ">
        <div className="md:w-1/2 flex flex-col justify-start item-center py-18">
          <h1 className="font-bold text-center text-4xl py-1">
            Welcome in Style
          </h1>
          <p className="font-semibold text-center text-3xl py-1">
            Visitors Book
          </p>
          <p className="font-medium text-center text-xl ">
            Elevate your visitor experience with the Nightingale Visitor Entry
            Book. Designed to combine functionality with elegance, this book is
            an essential for any reception area, ensuring every guest feels
            valued from the moment they sign in.
          </p>
          <Link
            to="/shop"
            className="border-2 bg-red-600 border-red-600 text-white font-bold py-1 w-[120px] mx-auto text-center my-4 rounded"
          >
            Shop Now
          </Link>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/diary-notebook/d/l/z/she-went-out-print-with-100-recycled-handmade-paper-cc-3001-original-imagqq2hz8e6tyhq.jpeg?q=70"
            className="h-[80%] w-full overflow-hidden"
            alt="image"
          />
        </div>
      </div>

      <div className="bg-gray-50 py-1">
        <h1 className="font-semibold text-3xl text-center">Office Series</h1>
        <p className="font-medium text-[16px] text-center">
          Elevate Your Workspace with Professional Tools
        </p>

        <div className="flex items-center justify-center md:gap-4 gap-1 relative md:px-2 px-1 ">
          <i onClick={handleLeft} className="ri-arrow-left-s-line text-center md:text-3xl text-xl font-semibold z-50 cursor-pointer "></i>
          <div className="py-6 flex flex-nowrap gap-4 overflow-x-hidden">
            {data.length > 0 ? (
              data
                .slice(currentIndex, currentIndex + 3)
                .map((data, id) => (
                  <Link
                    key={id}
                    className="min-w-[216px] md:min-w-[318px] bg-white border hover:border-red-500 transition-all duration-300"
                  >
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={data.image}
                        alt="image"
                        className="h-[190px] md:h-[300px] w-full object-cover transform hover:scale-105 transition duration-500"
                      />
                      <div className="absolute top-2 right-2">
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                          {data.size}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h1 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-red-500">
                        {data.dairyName}
                      </h1>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          {/* Star */}
                          <svg
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-sm text-gray-600">Premium</span>
                        </div>
                        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg md:text-sm text-[8px] font-medium transition">
                          View More
                        </button>
                      </div>
                    </div>
                  </Link>
                ))
            ) : (
              <p className="text-center text-gray-500 font-medium">
                Loading...
              </p>
            )}
          </div>
          <i onClick={handleRight} className="ri-arrow-right-s-line text-center md:text-3xl text-xl font-semibold z-50 cursor-pointer "></i>
        </div>
      </div>
    </div>
  );
}

export default Home;
