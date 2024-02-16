import React from 'react';

export function Selector({
  isActive,
  setIsActive,
  setCategory,
  categories,
  category,
}) {
  const noBreads = categories.filter(item => item !== 'Breads_&_Bakery');
  const noMeat = noBreads.filter(item => item !== 'Meat_&_Seafood');
  const newCategories = [...noMeat, 'Breads_%26_Bakery', 'Meat_%26_Seafood']
    .slice()
    .sort();

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
        {category === '' ? (
          <div>Categories</div>
        ) : (
          category.replace(/_/g, ' ').replace(/%26/g, '/')
        )}
      </div>
      {isActive && (
        <div className="dropdown-content">
          {newCategories.map(category => (
            <div
              key={category}
              id={category}
              onClick={e => {
                setCategory(e.target.id);
                setIsActive(!isActive);
              }}
              className="dropdown-item"
            >
              {category.replace(/_/g, ' ').replace(/%26/g, '/')}
            </div>
          ))}
          {category && (
            <div
              className="dropdown-item"
              onClick={() => {
                setCategory('');
                setIsActive(!isActive);
              }}
            >
              Show all
            </div>
          )}
        </div>
      )}
    </div>
  );
}
