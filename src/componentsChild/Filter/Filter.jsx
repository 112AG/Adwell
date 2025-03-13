import React, { useState, useEffect } from "react";

function Filter({ data = [], onFilter }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!Array.isArray(data)) {
      console.error("Filter received invalid data:", data);
      return;
    }

    // Apply filter when query changes
    const filtered = query.trim()
      ? data.filter(diary =>
          diary.dairyName?.toLowerCase().includes(query.toLowerCase())
        )
      : data;

    onFilter(filtered);
  }, [query, data, onFilter]);

  return (
    <div className="mb-4">
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
