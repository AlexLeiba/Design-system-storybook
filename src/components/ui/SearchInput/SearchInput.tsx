import { useState, type ComponentProps } from "react";
import { labelInputVariants } from "../../../../lib/cvaVariants";
import { cn } from "../../../../lib/utilities";
import { cva } from "class-variance-authority";
import { Search, X } from "lucide-react";

const searchInputVariants = cva(
  [
    "w-full border border-gray-400  py-2  rounded-2xl px-12",
    "focus-within:outline-none focus-within:ring focus-within:ring-gray-400 ",
    "disabled:cursor-not-allowed disabled:opacity-50 disabled:ring   ",
  ],
  {
    variants: {
      sizeType: {
        small: "text-base",
        medium: "text-xl",
        large: "text-2xl",
      },
    },
    defaultVariants: {
      sizeType: "medium",
    },
  }
);

type Props = ComponentProps<"input"> & {
  handleChange: (searchValue: string) => void;
  sizeType?: "small" | "medium" | "large";
  disabled?: boolean;
  classNameTitle?: string;
  classNameInput?: string;
  classNameIconSearchIcon?: string;
  classNameXIcon?: string;
  label?: string;
};
export function SearchInput({
  handleChange,
  label,
  sizeType = "medium",
  classNameTitle = "",
  classNameInput = "",
  classNameIconSearchIcon = "",
  classNameXIcon = "",
  className = "",
  disabled = false,
  ...props
}: Props) {
  const [search, setSearch] = useState("");

  function handleSearch(e: string) {
    setSearch(e);
    handleChange(e);
  }

  return (
    <div
      className={cn(
        "inline-flex w-full flex-col",
        disabled ? "pointer-events-none" : "",
        className
      )}
    >
      {label && (
        <label htmlFor={label || "search"}>
          <p
            className={cn(
              labelInputVariants({
                errorState: false,
                successState: false,
                disabledState: disabled,
                sizeType,
              }),
              classNameTitle
            )}
          >
            {label}
          </p>
        </label>
      )}
      <div className="relative">
        <input
          id={label || "search"}
          disabled={disabled}
          className={cn(searchInputVariants({ sizeType }), classNameInput)}
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          {...props}
        />
        <Search
          className={cn(
            "absolute left-4 top-[50%] -translate-y-[50%]",
            disabled ? "opacity-50" : "",
            classNameIconSearchIcon
          )}
        />
        {search.length > 0 && (
          <button
            disabled={disabled}
            onClick={() => handleSearch("")}
            className={cn(
              "cursor-pointer absolute right-4 top-[50%] -translate-y-[50%]",
              disabled ? "opacity-50" : "",
              classNameXIcon
            )}
          >
            <X />
          </button>
        )}
      </div>
    </div>
  );
}
