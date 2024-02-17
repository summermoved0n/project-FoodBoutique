import React, { useEffect, useState } from 'react';
import FoodBoutiqueApi from 'helpers/api-service';
import { ProductsItem } from 'components/ProductsItem/ProductsItem';
import ReactPaginate from 'react-paginate';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { Oval } from 'react-loader-spinner';

const FoodBoutique = new FoodBoutiqueApi();

export default function Products({
  removeFromCart,
  itemsPerPage,
  modalClick,
  addToCart,
  keyword,
  category,
  addToOrder,
  removeFromOrder,
}) {
  const [products, setProducts] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    FoodBoutique.getFetchProduct(keyword, category).then(data => {
      const { results } = data;
      setProducts(results);
      window.localStorage.setItem(
        'filter',
        JSON.stringify([{ keyword, category }])
      );
      setIsLoading(true);
    });
  }, [category, keyword]);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {isLoading ? (
        <>
          {products.length > 0 ? (
            <div>
              <ul className="products-list">
                <ProductsItem
                  removeFromOrder={removeFromOrder}
                  addToOrder={addToOrder}
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
          ) : (
            <div className="products-empty-list">
              <h3 className="products-empty-list-title">
                Nothing was found for the selected <span>filters...</span>
              </h3>
              <p className="products-empty-list-text">
                Try adjusting your search parameters or browse our range by
                other criteria to find the perfect product fot you.
              </p>
            </div>
          )}
        </>
      ) : (
        <div className="product-loader">
          <Oval
            visible={true}
            height="80"
            width="80"
            strokeWidth="5"
            color="#6d8434"
            secondaryColor=""
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
    </>
  );
}
