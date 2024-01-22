import React, { useEffect, useState } from 'react';
import FoodBoutiqueApi from 'helpers/api-service';
import { ProductsItem } from 'components/ProductsItem/ProductsItem';
import ReactPaginate from 'react-paginate';

const FoodBoutique = new FoodBoutiqueApi();

export default function Products({ itemsPerPage, modalClick, addToCart }) {
  const [products, setProducts] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    FoodBoutique.getFetchProduct().then(data => {
      const { results } = data;
      setProducts(results);
      window.localStorage.setItem('filter', JSON.stringify(results));
    });
  }, []);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(`Items from ${event.selected} to ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <>
      <ul className="products-list">
        <ProductsItem
          modalClick={modalClick}
          products={currentItems}
          addToCart={addToCart}
        />
      </ul>
      <div className="products-paginate-conteiner">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName="products-paginate-list"
        />
      </div>
    </>
  );
}
