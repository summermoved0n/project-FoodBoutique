import React, { useEffect, useState } from 'react';
import FoodBoutiqueApi from 'helpers/api-service';
import { ProductsItem } from 'components/ProductsItem/ProductsItem';
import ReactPaginate from 'react-paginate';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

const FoodBoutique = new FoodBoutiqueApi();

export default function Products({
  removeFromCart,
  itemsPerPage,
  modalClick,
  addToCart,
  keyword,
  category,
}) {
  const [products, setProducts] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    FoodBoutique.getFetchProduct(keyword, category).then(data => {
      const { results } = data;
      setProducts(results);
      window.localStorage.setItem(
        'filter',
        JSON.stringify([{ keyword, category }])
      );
    });
  }, [category, keyword]);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(`Items from ${event.selected} to ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <div>
      <ul className="products-list">
        <ProductsItem
          removeFromCart={removeFromCart}
          modalClick={modalClick}
          products={currentItems}
          addToCart={addToCart}
        />
      </ul>
      <div className="products-paginate-conteiner">
        <ReactPaginate
          breakLabel={<BiDotsHorizontalRounded />}
          breakLinkClassName="products-paginate-break"
          nextLabel={<IoIosArrowForward />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel={<IoIosArrowBack />}
          renderOnZeroPageCount={null}
          containerClassName="products-paginate-list"
          pageLinkClassName="products-paginate-item"
          activeLinkClassName="products-paginate-active"
          previousLinkClassName="products-paginate-previous"
          nextLinkClassName="products-paginate-next"
        />
      </div>
    </div>
  );
}
