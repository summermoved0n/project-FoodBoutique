import React from 'react';

export function SelectByQuery({
  isActiveByQuery,
  setIsActiveByQuery,
  setSearchQuery,
  setSelectByQuery,
  selectText,
  setSelectText,
}) {
  return (
    <div className="dropdown-by-query">
      <div
        className="dropdown-btn-by-query"
        onClick={() => setIsActiveByQuery(!isActiveByQuery)}
      >
        {selectText ? <div>{selectText}</div> : <div>A to Z</div>}
      </div>
      {isActiveByQuery && (
        <div className="dropdown-content-by-query">
          <div
            className="dropdown-item-by-query"
            onClick={e => {
              setSearchQuery('byABC');
              setSelectByQuery(true);
              setSelectText(e.target.textContent);
              setIsActiveByQuery(!isActiveByQuery);
            }}
          >
            A to Z
          </div>
          <div
            className="dropdown-item-by-query"
            onClick={e => {
              setSearchQuery('byABC');
              setSelectByQuery(false);
              setSelectText(e.target.textContent);
              setIsActiveByQuery(!isActiveByQuery);
            }}
          >
            Z to A
          </div>
          <div
            className="dropdown-item-by-query"
            onClick={e => {
              setSearchQuery('byPrice');
              setSelectByQuery(true);
              setSelectText(e.target.textContent);
              setIsActiveByQuery(!isActiveByQuery);
            }}
          >
            Less than 10$
          </div>
          <div
            className="dropdown-item-by-query"
            onClick={e => {
              setSearchQuery('byPrice');
              setSelectByQuery(false);
              setSelectText(e.target.textContent);
              setIsActiveByQuery(!isActiveByQuery);
            }}
          >
            Greater than 10$
          </div>
          <div
            className="dropdown-item-by-query"
            onClick={e => {
              setSearchQuery('byPopularity');
              setSelectByQuery(false);
              setSelectText(e.target.textContent);
              setIsActiveByQuery(!isActiveByQuery);
            }}
          >
            Popular
          </div>
          <div
            className="dropdown-item-by-query"
            onClick={e => {
              setSearchQuery('byPopularity');
              setSelectByQuery(true);
              setSelectText(e.target.textContent);
              setIsActiveByQuery(!isActiveByQuery);
            }}
          >
            Not popular
          </div>
        </div>
      )}
    </div>
  );
}
