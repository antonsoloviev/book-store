import { INextAndPrevPages } from '../components/Pagination/Pagination';

export const getNextAndPrevPages = (
  totalPages: number,
  currentPage: number
): INextAndPrevPages => {
  const prevPage = currentPage > 1 ? currentPage - 1 : currentPage;

  const nextPage = totalPages > currentPage ? currentPage + 1 : currentPage;

  return {
    prevPage,
    nextPage
  };
};
