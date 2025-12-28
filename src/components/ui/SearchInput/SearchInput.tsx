import { useState, type ComponentProps } from "react";
import { labelInputVariants } from "../../../../lib/cvaVariants";
import { cn } from "../../../../lib/utilities";
import { cva } from "class-variance-authority";
import { Search, X } from "lucide-react";

const searchInputVariants = cva(
  [
    "w-full border border-gray-400  py-2  rounded-2xl px-12",
    "focus-within:outline-none focus-within:ring focus-within:ring-gray-400 ",
    "disabled:cursor-not-allowed disabled:opacity-50 disabled:ring disabled:ring-gray-400 disabled:ring-offset-2 disabled:ring-offset-gray-100 ",
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
  titleClassName?: string;
  sizeType?: "small" | "medium" | "large";
};
export function SearchInput({
  handleChange,
  title,
  sizeType = "medium",
  titleClassName = "",
  className = "",
  ...props
}: Props) {
  const [search, setSearch] = useState("");

  function handleSearch(e: string) {
    setSearch(e);
    handleChange(e);
  }

  return (
    <div className="inline-flex w-full flex-col">
      <label htmlFor="input">
        <p
          id="input"
          className={cn(
            labelInputVariants({
              errorState: false,
              successState: false,
              disabledState: props.disabled,
              sizeType,
            }),
            titleClassName
          )}
        >
          {title}
        </p>
      </label>
      <div className="relative">
        <input
          className={cn(searchInputVariants({ sizeType }), className)}
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Search className="cursor-pointer absolute left-4 top-[50%] -translate-y-[50%]" />
        {search.length > 0 && (
          <X
            onClick={() => handleSearch("")}
            className="cursor-pointer absolute right-4 top-[50%] -translate-y-[50%]"
          />
        )}
      </div>
    </div>
  );
}
