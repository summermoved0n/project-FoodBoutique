import React from 'react';

export const FilterItem = ({ categories }) => {
  return (
    <>
      {categories.map(category => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </>
  );
};
