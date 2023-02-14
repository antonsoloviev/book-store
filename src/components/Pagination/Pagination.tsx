import React from 'react';
import { Link } from 'react-router-dom';

import { getNextAndPrevPages } from '../../helpers/getNextAndPrevPages';
import { ReactComponent as ArrowBackSVG } from '../../assets/images/icon-back.svg';
import { ReactComponent as ArrowForwardSVG } from '../../assets/images/icon-forward.svg';

import './Pagination.scss';

export interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  input?: string | undefined;
}
export interface INextAndPrevPages {
  prevPage: number | undefined;
  nextPage: number | undefined;
}

const getTotalPages = (totalPages: number): number[] =>
  Array.from({ length: totalPages }, (_, index) => index + 1);

const getSlicePages = (
  pages: number[],
  currentPage: number,
  slice: number
): number[] => {
  const indexPage = pages.indexOf(currentPage);

  if (indexPage === -1) {
    return [];
  }

  if (pages.length < 4) {
    return pages;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (currentPage > pages.at(-4)) {
    return pages.slice(pages[pages.length - 4], indexPage + slice);
  }

  return pages.slice(indexPage, indexPage + slice);
};

const Pagination = ({ currentPage, totalPages, input }: IPaginationProps) => {
  const isTotalPages = getTotalPages(totalPages);
  const { prevPage, nextPage } = getNextAndPrevPages(totalPages, currentPage);
  if (totalPages === 1) {
    return <></>;
  }

  const slicePages = getSlicePages(isTotalPages, currentPage, 3);

  return (
    <div className="pagination">
      <Link to={`/search/${input}/${prevPage}`} className="pagination-arrow">
        <ArrowBackSVG className="pagination-arrow"></ArrowBackSVG>
      </Link>

      <div className="pagination-group">
        {currentPage > 1 && totalPages > 4 && (
          <>
            <Link to={`/search/${input}/1`} className="link">
              1
            </Link>

            <div>...</div>
          </>
        )}

        <div className="pagination-group__links">
          {slicePages.map((page) => (
            <Link
              to={`/search/${input}/${page}`}
              key={page}
              className={currentPage === page ? 'active' : 'link'}
            >
              {page}
            </Link>
          ))}
        </div>

        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          slicePages.at(-1) < totalPages && '...'
        }

        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          slicePages.at(-1) < totalPages && (
            <Link
              to={`/search/${input}/${totalPages}`}
              className={currentPage === totalPages ? 'active' : 'link'}
            >
              {totalPages}
            </Link>
          )
        }
      </div>

      <Link to={`/search/${input}/${nextPage}`} className="pagination-arrow">
        <ArrowForwardSVG className="pagination-arrow"></ArrowForwardSVG>
      </Link>
    </div>
  );
};
export default Pagination;
