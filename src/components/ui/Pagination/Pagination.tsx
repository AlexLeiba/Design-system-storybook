import { useState } from "react";
import { cn } from "../../../../lib/utilities";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PageButton from "./PageButton";

type PaginationProps = {
  nrOfPages: number;
  currentPage: number;
  onChangePage: (page: number) => void;
};

export function Pagination({
  nrOfPages,
  currentPage,
  onChangePage,
}: PaginationProps) {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState(1);
  const pages = Array.from({ length: nrOfPages }).map((_, index) => index + 1);

  function handleChangePage(page: number) {
    if (page <= nrOfPages && page > 0) {
      onChangePage(page);
    }

    if (showInput) {
      setShowInput(false);
    } else {
      setInputValue(page);
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
        title="previous page"
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
              title={page.toString()}
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
            title="1"
            onClick={() => handleChangePage(1)}
            isSelected={currentPage === 1}
          >
            1
          </PageButton>
          <PageButton
            title="2"
            onClick={() => handleChangePage(2)}
            isSelected={currentPage === 2}
          >
            2
          </PageButton>

          {showInput ? (
            <div className=" flex ">
              <input
                title="change page input"
                autoFocus
                type="number"
                className="py-1 px-3  w-[50px] bg-white  text-xl rounded-lg cursor-pointer hover:bg-black/80 hover:text-white transition-all"
                value={inputValue}
                onChange={(e) => setInputValue(Number(e.target.value))}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubmitNewPage();
                  }
                }}
              />
            </div>
          ) : (
            <PageButton
              title={
                currentPage > 2 && currentPage < pages.length - 1
                  ? currentPage.toString()
                  : ""
              }
              isSelected={currentPage > 2 && currentPage < pages.length - 1}
              onClick={() => setShowInput(true)}
              classNamePageButton="px-2 min-w-[52px]"
            >
              <span className="mr-1">..</span>
              {currentPage > 2 && currentPage < pages.length - 1 && currentPage}
              <span className="ml-1">..</span>
            </PageButton>
          )}

          {pages.slice(pages.length - 2).map((page) => {
            return (
              <div className="flex justify-center">
                <PageButton
                  title={page.toString()}
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
        title="next page"
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
