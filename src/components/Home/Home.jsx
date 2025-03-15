import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {

  const [data, setData] = useState([]);
  const diaries = [];

    useEffect(() => {
      async function fetchData() {
        try {
          const res = await fetch("/Data.json");
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          const jsonData = await res.json();
  
          Object.values(jsonData).forEach(category => {
            Object.values(category).forEach(subCategory => {
              if (Array.isArray(subCategory)) {
                diaries.push(...subCategory);
              }
            });
          });
  
          setData(diaries);
        //   console.log(Array.isArray(diaries));
        // console.log(diaries[0]?.dairyName); 
          return diaries;
        } catch (error) {
          console.error("Error fetching data:", error);
        } 
      }
  
      fetchData();
    }, []);

    if (data.length > 0) {
      console.log(data[0]);
    }

  return (
    <div className="h-full w-full">
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

      {/* <div className="h-[1.4px] w-full bg-black"></div> */}

      <div className="flex gap-4 justify-center py-8">
        <Link to='/shop' className="w-[324px] border rounded flex flex-col item-center justify-between p-3 hover:scale-105 transition overflow-hidden">
          <img
          className="hover:rotate-[6deg] transition "
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/diary-notebook/q/1/w/di-metallock-d13-makenstylecollection-original-imah6ymfkjc2zchs.jpeg?q=70"
            alt="image"
          />
          <h1 className="text-center text-xl font-semibold text-red-950">Writing Essentials</h1>
        </Link>
        <Link to='/shop' className="w-[324px] border rounded flex flex-col item-center justify-between p-3 hover:scale-105 transition overflow-hidden">
          <img
          className="hover:-translate-y-1 transition "
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/diary-notebook/f/o/a/buddha-print-100-recycled-handmade-paper-diary-with-lock-tvj-original-imagy5xmawybzcyy.jpeg?q=70"
            alt="image"
          />
          <h1 className="text-center text-xl font-semibold text-red-950">Business Supplies</h1>
        </Link>
        <Link to='/shop' className="w-[324px] border rounded flex flex-col item-center justify-between p-3 hover:scale-105 transition overflow-hidden">
          <img
          className="hover:-rotate-[6deg] transition "
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/diary-notebook/a/1/z/cc-t111-cc-t111-craft-club-original-imahyujhvag3hgr6.jpeg?q=70"
            alt="image"
          />
          <h1 className="text-center text-xl font-semibold text-red-950">Creative Stationaries</h1>
        </Link>
      </div>

      <div className="bg-gray-50 py-1">
        <h1 className="font-semibold text-3xl text-center">Artisan Notebooks</h1>
        <p className="font-medium text-[16px] text-center">Artistically Inspired Collections</p>
        <div className="w-full py-6 flex flex-nowrap overflow-x-scroll gap-4">
        {data.length>0 ? 
          data.map((data, id) => (
            <Link key={id} className="min-w-[318px] border-2 rounded-3xl transition hover:scale-97 ">
              <img src={data.image} alt="image" className="h-[300px] p-2 w-full object-cover rounded-3xl" />
              <div className="flex items-center justify-between px-3 py-1">
              <h1 className=" text-lg font-medium">{data.dairyName}</h1>
              <p>Size: {data.size}</p>
              </div>
            </Link>
          ))
        : <p>Wait....</p>}
        </div>
      </div>

      <div className="p-3 w-full flex ">
        <div className="w-1/2">
          <h1>Welcome in Style</h1>
          <p>Visitors Book</p>
          <p>Elevate your visitor experience with the Nightingale Visitor Entry Book. Designed to combine functionality with elegance, this book is an essential for any reception area, ensuring every guest feels valued from the moment they sign in.</p>
          <Link className="/shop">Shop Now</Link>
        </div>
        <div className="w-1/2">
          <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/diary-notebook/d/l/z/she-went-out-print-with-100-recycled-handmade-paper-cc-3001-original-imagqq2hz8e6tyhq.jpeg?q=70" className="h-full w-full overflow-hidden" alt="image" />
        </div>
      </div>


    </div>
  );
}

export default Home;
