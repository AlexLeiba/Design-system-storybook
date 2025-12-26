import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../../../lib/utilities";
import { Check, ChevronLeft, ChevronRight, Plus, X } from "lucide-react";
import PageButton from "./PageButton";

type PaginationProps = {
  nrOfPages: number;
  currentPage: number;
  onChangePage: (page: number) => void;
};
// NR of pages
//
function Pagination({ nrOfPages, currentPage, onChangePage }: PaginationProps) {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState(1);
  const pages = Array.from({ length: nrOfPages }).map((_, index) => index + 1);

  function handleChangePage(page: number) {
    if (page <= nrOfPages && page > 0) {
      onChangePage(page);
    }
  }

  function handleSubmitNewPage() {
    if (inputValue <= nrOfPages) {
      onChangePage(inputValue);
    }
    setShowInput(false);
  }

  return (
    <div className="flex gap-1 ">
      <button
        className={cn(
          "py-1 px-3 rounded-lg cursor-pointer hover:bg-black/80 hover:text-white transition-all"
        )}
        onClick={() => handleChangePage(currentPage - 1)}
      >
        <ChevronLeft />
      </button>
      {pages.length <= 5 ? (
        pages.map((page) => {
          return (
            <button
              key={page}
              className={cn(
                "py-1 px-3 text-xl rounded-lg cursor-pointer hover:bg-black/80 hover:text-white transition-all",
                `${
                  page === currentPage ? "bg-black text-white" : " text-black"
                }`
              )}
              onClick={() => onChangePage(page)}
            >
              {page}
            </button>
          );
        })
      ) : (
        <>
          <PageButton
            onClick={() => handleChangePage(1)}
            isSelected={currentPage === 1}
          >
            1
          </PageButton>
          <PageButton
            onClick={() => handleChangePage(2)}
            isSelected={currentPage === 2}
          >
            2
          </PageButton>

          <PageButton
            isSelected={currentPage > 2 && currentPage < pages.length - 1}
            onClick={() => setShowInput(true)}
            classNamePageButton="px-4"
          >
            {`...`}
            {currentPage > 2 && currentPage < pages.length - 1 && currentPage}
            {`...`}
          </PageButton>
          {showInput && (
            <div className="absolute left-0 flex ">
              <input
                type="number"
                className="py-1 px-3  w-20 bg-white  text-xl rounded-lg cursor-pointer hover:bg-black/80 hover:text-white transition-all"
                value={inputValue}
                onChange={(e) => setInputValue(Number(e.target.value))}
              />
              <PageButton
                onClick={handleSubmitNewPage}
                classNamePageButton="bg-black text-white z-10"
              >
                <Check />
              </PageButton>
              <PageButton
                onClick={handleSubmitNewPage}
                classNamePageButton="bg-red-800 hover:bg-red-600 text-white z-10"
              >
                <X />
              </PageButton>
            </div>
          )}

          {pages.slice(pages.length - 2).map((page) => {
            return (
              <div className="flex justify-center">
                <PageButton
                  isSelected={currentPage === page}
                  onClick={() => handleChangePage(page)}
                >
                  {page}
                </PageButton>
              </div>
            );
          })}
        </>
      )}
      <button
        className={cn(
          "py-1 px-3 rounded-lg cursor-pointer hover:bg-black/80 hover:text-white transition-all"
        )}
        onClick={() => handleChangePage(currentPage + 1)}
      >
        <ChevronRight />
      </button>
    </div>
  );
}

export default Pagination;
