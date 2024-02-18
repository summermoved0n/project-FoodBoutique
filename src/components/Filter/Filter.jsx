import React, { useEffect, useState } from 'react';
import FoodBoutiqueApi from 'helpers/api-service';
import icons from '../../images/icons.svg';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { Selector } from 'components/Selector/Selector';
import { SelectByQuery } from 'components/SelectByQuery/SelectByQuery';

const FoodBoutique = new FoodBoutiqueApi();

export const Filter = ({
  setCategory,
  setKeyword,
  category,
  setSearchQuery,
  setSelectByQuery,
}) => {
  const [filter, setFilter] = useState([]);
  const [input, setInput] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isActiveByQuery, setIsActiveByQuery] = useState(false);

  useEffect(() => {
    FoodBoutique.getFetchCategories().then(data => {
      setFilter(data);
    });
  }, []);

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
          <Selector
            category={category}
            isActive={isActive}
            setIsActive={setIsActive}
            setCategory={setCategory}
            categories={filter}
          />
          {isActive ? (
            <IoIosArrowUp className="filter-icon-arrows" size={20} />
          ) : (
            <IoIosArrowDown className="filter-icon-arrows" size={20} />
          )}
        </div>
        <div className="filter-select-byquery-wraper">
          <SelectByQuery
            isActiveByQuery={isActiveByQuery}
            setIsActiveByQuery={setIsActiveByQuery}
            setSearchQuery={setSearchQuery}
            setSelectByQuery={setSelectByQuery}
          />
          {isActiveByQuery ? (
            <IoIosArrowUp className="filter-icon-arrows-byquery" size={20} />
          ) : (
            <IoIosArrowDown className="filter-icon-arrows-byquery" size={20} />
          )}
        </div>
      </form>
    </section>
  );
};
