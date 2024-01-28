import React from 'react';

export const FilterItem = ({ categories }) => {
  const noBreads = categories.filter(item => item !== 'Breads_&_Bakery');
  const noMeat = noBreads.filter(item => item !== 'Meat_&_Seafood');
  const newCategories = [...noMeat, 'Breads_%26_Bakery', 'Meat_%26_Seafood']
    .slice()
    .sort();
  return (
    <>
      {newCategories.map(category => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </>
  );
};
