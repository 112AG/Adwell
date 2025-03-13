import React, { useState, useEffect } from "react";

function Filter({ data = [], onFilter }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!Array.isArray(data)) {
      console.error("Filter received invalid data:", data);
      return;
    }

    const filtered = query.trim()
      ? data.filter(diary =>
          diary.dairyName?.toLowerCase().includes(query.toLowerCase())
        )
      : data;

    onFilter(filtered);
  }, [query, data, onFilter]);

  return (
    <div className="my-4 mx-6 md:mx-[132px]">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by diary name..."
        className="p-2 border rounded w-full"
      />
    </div>
  );
}

export default Filter;
