import React, { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

export const ScrollUp = () => {
  const [upToTopButton, setUpToTopButton] = useState(false);

  useEffect(() => {
    const comeBackToTop = () => {
      if (window.scrollY > 100) {
        setUpToTopButton(true);
      } else {
        setUpToTopButton(false);
      }
    };

    window.addEventListener('scroll', comeBackToTop);
  }, [upToTopButton]);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {upToTopButton && (
        <button className="scrollup-btn" type="button" onClick={scrollUp}>
          <IoIosArrowUp className="scrollup-btn-icon" size={30} />
        </button>
      )}
    </>
  );
};
