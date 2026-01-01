import { useState, type ComponentProps } from "react";
import { cn } from "../../../../lib/utilities";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PageButton from "./PageButton";

type PaginationProps = ComponentProps<"div"> & {
  nrOfPages: number;
  currentPage: number;
  onChangePage: (page: number) => void;
  classNameButtonLeft?: string;
  classNameButtonRight?: string;
  classNamePageButton?: string;
  classNameInput?: string;
  disabled?: boolean;
};

export function Pagination({
  nrOfPages = 1,
  currentPage = 1,
  onChangePage,
  classNameButtonLeft = "",
  classNameButtonRight = "",
  classNamePageButton = "",
  classNameInput = "",
  disabled = false,
  className = "",
  ...props
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
    <div
      className={cn(
        "flex gap-1 ",
        disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "",
        className
      )}
      {...props}
    >
      <button
        disabled={disabled}
        title="previous page"
        className={cn(
          "py-1 px-3 rounded-lg cursor-pointer hover:bg-black/80 hover:text-white transition-all",
          classNameButtonLeft
        )}
        onClick={() => handleChangePage(currentPage - 1)}
      >
        <ChevronLeft />
      </button>
      {pages.length <= 5 ? (
        pages.map((page) => {
          return (
            <button
              disabled={disabled}
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
            disabled={disabled}
            classNamePageButton={classNamePageButton}
            title="1"
            onClick={() => handleChangePage(1)}
            isSelected={currentPage === 1}
          >
            1
          </PageButton>
          <PageButton
            disabled={disabled}
            classNamePageButton={classNamePageButton}
            title="2"
            onClick={() => handleChangePage(2)}
            isSelected={currentPage === 2}
          >
            2
          </PageButton>

          {showInput ? (
            <input
              disabled={disabled}
              title="change page value"
              autoFocus
              type="number"
              className={cn(
                "py-1 px-3  w-[50px] bg-white  text-xl rounded-lg cursor-pointer hover:bg-black/80 hover:text-white transition-all",
                classNameInput
              )}
              value={inputValue}
              onChange={(e) => setInputValue(Number(e.target.value))}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmitNewPage();
                }
              }}
            />
          ) : (
            <PageButton
              disabled={disabled}
              title="change page value"
              isSelected={currentPage > 2 && currentPage < pages.length - 1}
              onClick={() => setShowInput(true)}
              classNamePageButton={cn("px-2 min-w-[52px]", classNamePageButton)}
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
                  disabled={disabled}
                  title={page.toString()}
                  isSelected={currentPage === page}
                  onClick={() => handleChangePage(page)}
                  classNamePageButton={classNamePageButton}
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
          "py-1 px-3 rounded-lg cursor-pointer hover:bg-black/80 hover:text-white transition-all",
          classNameButtonRight
        )}
        onClick={() => handleChangePage(currentPage + 1)}
      >
        <ChevronRight />
      </button>
    </div>
  );
}
