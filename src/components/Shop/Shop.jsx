import React, { useEffect, useState } from "react";
import Cards from "../../componentsChild/Cards/Cards";
import Filter from "../../componentsChild/Filter/Filter";
import Spinner from "../../componentsChild/Spinner/Spinner";

function Shop() {
  const [data, setData] = useState([]); 
  const [filteredData, setFilteredData] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/Data.json");
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const jsonData = await res.json();

        const diaries = [];
        Object.values(jsonData).forEach(category => {
          Object.values(category).forEach(subCategory => {
            if (Array.isArray(subCategory)) {
              diaries.push(...subCategory);
            }
          });
        });

        setData(diaries);
        setFilteredData(diaries);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="h-full w-full">
      <div className="max-w-6xl mx-auto p-2">

        <Filter data={data} onFilter={setFilteredData} />
        <div className="flex items-start gap-4 flex-wrap justify-around">
          {loading ? (
            <div className="w-full flex items-center justify-center pt-12">
              <Spinner />
            </div>
          ) : filteredData.length > 0 ? (
            <Cards diaries={filteredData} />
          ) : (
            <div className="w-full text-center text-gray-500 pt-12">
              No Data
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Shop;
