import React, { useEffect, useState } from 'react';
import FoodBoutiqueApi from 'helpers/api-service';
import { FilterItem } from 'components/FilterItem/FilterItem';
import icons from '../../images/icons.svg';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

const FoodBoutique = new FoodBoutiqueApi();

export const Filter = ({ setCategory, setKeyword, category }) => {
  const [filter, setFilter] = useState([]);
  const [input, setInput] = useState('');
  const [onSelectClick, setOnSelectClick] = useState(false);

  useEffect(() => {
    FoodBoutique.getFetchCategories().then(data => {
      setFilter(data);
    });
  }, []);

  const handleSelectChange = e => {
    const { value } = e.target;
    setCategory(value);
  };

  const handleInputChange = e => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setKeyword(input);
  };

  return (
    <section className="filter-section">
      <p className="filter-text">Filters:</p>
      <form className="filter-form" onSubmit={handleSubmit}>
        <span className="filter-input-wraper">
          <input
            className="filter-input"
            type="text"
            value={input}
            placeholder="Search for anything"
            onChange={handleInputChange}
          />
          <button type="submit" className="filter-btn">
            <svg className="filter-icon">
              <use xlinkHref={`${icons}#icon-search`}></use>
            </svg>
          </button>
        </span>
        <div className="filter-select-wraper">
          <select
            onFocus={() => setOnSelectClick(true)}
            onBlur={() => setOnSelectClick(false)}
            className="filter-select"
            name="filter"
            id=""
            onChange={handleSelectChange}
            defaultValue="categories"
          >
            <option value="categories" hidden>
              Сategories
            </option>
            <FilterItem categories={filter} />
            {category && <option value="">Show All</option>}
          </select>
          {onSelectClick ? (
            <IoIosArrowUp className="filter-icon-arrows" size={20} />
          ) : (
            <IoIosArrowDown className="filter-icon-arrows" size={20} />
          )}
        </div>
      </form>
    </section>
  );
};
