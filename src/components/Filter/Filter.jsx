import React from 'react';

export const Filter = () => {
  return (
    <section>
      <input type="text" placeholder="Search for anything" />
      <select name="filter" id="">
        <option>categories</option>
      </select>
      <select name="atoz" id="">
        <option>A to Z</option>
      </select>
    </section>
  );
};
