import React from 'react';

export function SelectByQuery({
  isActiveByQuery,
  setIsActiveByQuery,
  setSearchQuery,
  setSelectByQuery,
}) {
  return (
    <div className="dropdown-by-query">
      <div
        className="dropdown-btn-by-query"
        onClick={() => setIsActiveByQuery(!isActiveByQuery)}
      >
        A to Z
      </div>
      {isActiveByQuery && (
        <div className="dropdown-content-by-query">
          <div
            className="dropdown-item-by-query"
            onClick={() => {
              setSearchQuery('byABC');
              setSelectByQuery(true);
            }}
          >
            A to Z
          </div>
          <div
            className="dropdown-item-by-query"
            onClick={() => {
              setSearchQuery('byABC');
              setSelectByQuery(false);
            }}
          >
            Z to A
          </div>
          <div
            className="dropdown-item-by-query"
            onClick={() => {
              setSearchQuery('byPrice');
              setSelectByQuery(true);
            }}
          >
            Less than 10$
          </div>
          <div
            className="dropdown-item-by-query"
            onClick={() => {
              setSearchQuery('byPrice');
              setSelectByQuery(false);
            }}
          >
            Greater than 10$
          </div>
          <div
            className="dropdown-item-by-query"
            onClick={() => {
              setSearchQuery('byPopularity');
              setSelectByQuery(false);
            }}
          >
            Popular
          </div>
          <div
            className="dropdown-item-by-query"
            onClick={() => {
              setSearchQuery('byPopularity');
              setSelectByQuery(true);
            }}
          >
            Not popular
          </div>
        </div>
      )}
    </div>
  );
}
