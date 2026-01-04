import { useEffect, useRef, useState, type HTMLAttributes } from "react";
import {
  errorMessageVariants,
  labelInputVariants,
} from "../../../../lib/cvaVariants";
import { cva, type VariantProps } from "class-variance-authority";
import { Checkbox } from "../Checkbox/Checkbox";

import { cn } from "../../../../lib/utilities";
import { Check } from "lucide-react";
import { SelectedItem } from "./SelectedItem";
import Label from "../Label/Label";

type OptionsType = {
  value: string;
  label: string;
};

const dropdownVariants = cva(
  [
    " w-full relative not-disabled:hover:opacity-70 cursor-pointer text-left",
    "disabled:cursor-not-allowed disabled:opacity-50 ",
    "focus-within:outline-none focus-within:ring  focus:ring-offset-2 focus:ring-offset-gray-100",
  ],
  {
    variants: {
      errorState: {
        false: "",
        true: "border-red-500!  pr-12",
      },
      successState: {
        false: "",
        true: "border-green-500! pr-12",
      },
      size: {
        small: "px-3 py-2",
        medium: "px-4 py-3",
        large: "px-5 py-3",
      },
      variant: {
        primary: "border rounded-xl border-gray-400",
        secondary: "border-2 rounded-3xl border-gray-400 disabled:bg-gray-200",
        ghost: "rounded-xs bg-gray-200",
      },
      openState: {
        false: "",
        true: "bg-gray-200",
      },
      disabled: {
        false: "",
        true: "text-gray-400 bg-gray-400 hover:not-[]:",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
      errorState: false,
      successState: false,
    },
  }
);

const optionVariants = cva(
  ["py-2 px-4 w-full hover:opacity-70 cursor-pointer "],
  {
    variants: {
      variant: {
        primary: " rounded-xl  bg-white",
        secondary: " rounded-3xl  disabled:bg-gray-200 bg-white",
        ghost: "rounded-3xl bg-gray-200 ",
      },
      selectType: {
        single: "",
        multiple: "flex  items-center gap-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      // size: "medium",
      selectType: "single",
    },
  }
);
const optionDropMenuTitleElementVariant = cva(" text-left ", {
  variants: {
    size: {
      small: "text-base px-2 ",
      medium: "text-xl py-1 px-2",
      large: "text-2xl py-2 px-4",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});
const optionSelectedLabelVariant = cva(" text-left ", {
  variants: {
    size: {
      small: "text-base ",
      medium: "text-xl ",
      large: "text-2xl ",
    },
    errorState: {
      false: "",
      true: "border-red-500!  pr-12",
    },
    successState: {
      false: "",
      true: "border-green-500! pr-12",
    },
    disabledState: {
      false: "",
      true: "text-gray-800 hover:not-[]:",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});
const containerOptionsVariants = cva(
  "flex flex-col gap-2 absolute z-50 top-[calc(100%+0.5rem)] w-[100%] left-0 right-0 ",
  {
    variants: {
      size: {
        small: " shadow-xs",
        medium: " shadow-md",
        large: " shadow-lg",
      },
      variant: {
        primary: " rounded-xl border-gray-400 bg-white ",
        secondary: " rounded-3xl border-gray-400 disabled:bg-gray-200 bg-white",
        ghost: "rounded-none bg-gray-200 ",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

type VariantsType = VariantProps<typeof dropdownVariants>;

type Props = VariantsType &
  HTMLAttributes<HTMLDivElement> & {
    options: OptionsType[];
    defaultSelectedSingleValue: OptionsType;
    defaultSelectedMultipleValues: OptionsType[];
    error?: string;
    success?: boolean;
    disabled?: boolean;
    label?: string;
    selectType?: "single" | "multiple";
    classNameLabel?: string;
    classNameError?: string;
    classNameDropMenuContainer?: string;
    classNameDropMenuElementButton?: string;
    classNameDropMenuElementTitle?: string;
    classNameContainerSelectedMultipleOptions?: string;
    classNamePlaceholder?: string;
    size?: "small" | "medium" | "large";
    placeholder?: string;
    handleSelectValue: (value: OptionsType) => void;
  };
export function Dropdown({
  options,
  defaultSelectedSingleValue = { value: "", label: "" },
  defaultSelectedMultipleValues = [],
  placeholder = "Select a value",
  error,
  success,
  disabled,
  variant = "primary",
  className = "",
  label,
  selectType = "single",
  classNameLabel = "",
  classNameError = "",
  classNameDropMenuContainer = "",
  classNameDropMenuElementButton = "",
  classNameDropMenuElementTitle = "",
  classNameContainerSelectedMultipleOptions = "",
  classNamePlaceholder = "",
  size = "medium",
  handleSelectValue,
}: Props) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [select, setSelect] = useState<OptionsType>({
    value: defaultSelectedSingleValue.value,
    label: defaultSelectedSingleValue.label,
  });
  const [selectMultiple, setSelectMultiple] = useState<OptionsType[]>(
    defaultSelectedMultipleValues
  );

  function handleSelect(
    selectedValue: OptionsType,
    type: "single" | "multiple"
  ) {
    if (type === "single") {
      setSelect(selectedValue);
      handleSelectValue(selectedValue);
      setOpen(false);
    }
    if (type === "multiple") {
      setSelectMultiple((prev) => {
        const alreadyExists = prev.find(
          (value) => value.value === selectedValue.value
        );

        if (alreadyExists) {
          return prev.filter((value) => value.value !== selectedValue.value);
        }
        return [...prev, selectedValue];
      });
    }
  }

  useEffect(() => {
    if (open && containerRef.current) {
      function clickOutside(e: PointerEvent) {
        if (!containerRef.current?.contains(e.target as Node)) {
          setOpen(false);
        }
      }

      document.addEventListener("click", (e) => clickOutside(e));

      return () => removeEventListener("click", clickOutside);
    }
  }, [open]);
  return (
    <div className="relative" ref={containerRef}>
      {label && (
        <Label
          label={label}
          error={error}
          success={success}
          disabled={disabled}
          size={size}
          classNameLabel={classNameLabel}
        >
          {label}
        </Label>
      )}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          dropdownVariants({
            variant,
            openState: open,
            disabled: disabled,
            successState: !!success,
            errorState: !!error,
            size: size,
          }),
          className
        )}
        disabled={disabled}
      >
        {/* SELECTED SINGLE ITEM */}
        {selectType === "single" && (
          <p
            className={cn(
              optionSelectedLabelVariant({
                errorState: !!error,
                successState: !!success,
                disabledState: disabled,
                size: size,
              }),
              classNameLabel
            )}
          >
            {(selectType === "single" && select.label) ||
              defaultSelectedSingleValue.label}
          </p>
        )}
        {/* SELECTED MULTIPLE ITEMS */}
        {selectType === "multiple" && (
          <div
            className={cn(
              "flex gap-2 h-[35px] items-center",
              classNameContainerSelectedMultipleOptions
            )}
          >
            {selectMultiple.length > 0 ? (
              selectMultiple.map((selectedValue) => {
                return (
                  <SelectedItem
                    selectedValue={selectedValue.label}
                    error={error}
                    disabled={disabled}
                    success={success}
                    size={size}
                  />
                );
              })
            ) : (
              // DEFAULT SELECTED MULTIPLE ITEM
              <p
                className={cn(
                  labelInputVariants({
                    errorState: !!error,
                    successState: !!success,
                    disabledState: disabled,
                    sizeType: size,
                  }),
                  classNamePlaceholder
                )}
              >
                {placeholder}
              </p>
            )}
          </div>
        )}
      </button>
      {open && (
        <>
          {/* SINGLE DROP OPTIONS */}
          {selectType === "single" ? (
            <div
              className={cn(
                containerOptionsVariants({
                  variant,
                  size: size,
                }),
                classNameDropMenuContainer
              )}
            >
              {options.map((option) => (
                <button
                  onClick={() => handleSelect(option, "single")}
                  className={cn(
                    optionVariants({ variant }),
                    "flex justify-between items-center",
                    classNameDropMenuElementButton
                  )}
                  key={option.value}
                >
                  <p
                    className={cn(
                      optionDropMenuTitleElementVariant({ size: size }),
                      classNameDropMenuElementTitle
                    )}
                  >
                    {option.label}
                  </p>
                  {select.value === option.value && <Check />}
                </button>
              ))}
            </div>
          ) : (
            // MULTIPLE DROP OPTIONS
            <div
              className={cn(
                containerOptionsVariants({
                  variant,
                  size: size,
                }),
                classNameDropMenuContainer
              )}
            >
              {options.map((option) => (
                <button
                  onClick={() => handleSelect(option, "multiple")}
                  className={cn(
                    optionVariants({
                      variant,

                      selectType,
                    }),
                    classNameDropMenuElementButton
                  )}
                  key={option.value}
                  title={""}
                >
                  <Checkbox
                    handleChange={() => {}}
                    onClick={() => handleSelect(option, "multiple")}
                    onChange={() => handleSelect(option, "multiple")}
                    checked={
                      !!selectMultiple.find(
                        (value) => value.value === option.value || false
                      )
                    }
                    sizeType={size || "medium"}
                  />
                  <p
                    className={cn(
                      optionDropMenuTitleElementVariant({ size: size }),
                      classNameDropMenuElementTitle
                    )}
                  >
                    {option.label}
                  </p>
                </button>
              ))}
            </div>
          )}
        </>
      )}
      {error && (
        <p
          className={cn(
            errorMessageVariants({
              sizeType: size,
            }),
            classNameError
          )}
        >
          {error}
        </p>
      )}
    </div>
  );
}
