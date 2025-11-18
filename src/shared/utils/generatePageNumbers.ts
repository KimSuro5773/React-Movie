export const generatePageNumbers = (
  currentPage: number,
  totalPages: number,
  maxVisible: number = 7,
): (number | "ellipsis")[] => {
  if (totalPages <= maxVisible) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages: (number | "ellipsis")[] = [];

  pages.push(1);

  if (currentPage <= 2) {
    pages.push(2, 3);
    pages.push("ellipsis");
    pages.push(totalPages);
    return pages;
  }

  if (currentPage >= totalPages - 1) {
    pages.push("ellipsis");
    pages.push(totalPages - 2, totalPages - 1, totalPages);
    return pages;
  }

  pages.push("ellipsis");
  pages.push(currentPage - 1, currentPage, currentPage + 1);
  pages.push("ellipsis");
  pages.push(totalPages);

  return pages;
};
