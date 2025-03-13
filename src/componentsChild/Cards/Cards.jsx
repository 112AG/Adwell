import React from 'react';
import Card from '../Card/Card';

function Cards({ diaries = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {diaries.map((diary, idx) => (
        <Card key={idx} diary={diary} />
      ))}
    </div>
  );
}

export default Cards;
