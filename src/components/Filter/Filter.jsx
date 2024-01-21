import React, { useEffect, useState } from 'react';
import FoodBoutiqueApi from 'helpers/api-service';
import { FilterItem } from 'components/FilterItem/FilterItem';

const FoodBoutique = new FoodBoutiqueApi();

export const Filter = () => {
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    FoodBoutique.getFetchCategories().then(data => {
      setFilter(data);
    }, []);
  });

  return (
    <section>
      <input type="text" placeholder="Search for anything" />
      <select name="filter" id="">
        {/* <option value="categories" disabled selected hidden>
          Сategories
        </option> */}
        <FilterItem categories={filter} />
      </select>
      <select name="atoz" id="">
        <option>A to Z</option>
      </select>
    </section>
  );
};
