import { X } from "lucide-react";
import React, {
  createContext,
  useContext,
  useRef,
  useState,
  type ComponentProps,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../../lib/utilities";
import { Button } from "../Button/Button";
import Label from "../Label/Label";

type ContextProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: () => void;
  handleCancel: () => void;
};
const DialogContext = createContext<ContextProps>({
  open: false,
  setOpen: () => {},
  handleSubmit: () => {},
  handleCancel: () => {},
});

export type DialogProps = ComponentProps<"div"> & {
  children: React.ReactNode;
  handleSubmit: () => void;
  handleCancel: () => void;
  isOpened?: boolean;
};

const dialogVariants = cva([
  "flex flex-col gap-8 justify-between bg-white z-50 p-4 rounded-2xl lg:mx-[25%] mx-[10%] w-full",
  ,
]);

export function Dialog({
  children,
  handleSubmit,
  handleCancel,
  isOpened = false,
  className = "",
}: DialogProps) {
  const [open, setOpen] = useState(isOpened);
  const refContainer = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (
        refContainer.current &&
        !refContainer.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, []);
  return (
    <DialogContext.Provider
      value={{ open, setOpen, handleSubmit, handleCancel }}
    >
      {/*  backdrop*/}
      <div
        className={cn(
          open ? "bg-black/50 fixed inset-0 flex items-center " : "hidden"
        )}
      >
        {/* modal body */}
        {open && (
          <div ref={refContainer} className={cn(dialogVariants(), className)}>
            {children}
          </div>
        )}
      </div>
    </DialogContext.Provider>
  );
}

function useDialog() {
  return useContext(DialogContext);
}

type DialogHeaderProps = ComponentProps<"div"> & {
  children: React.ReactNode;
  closeButtonClassName?: string;
};

export function DialogHeader({
  children,
  closeButtonClassName = "",
  ...props
}: DialogHeaderProps) {
  const { setOpen } = useDialog();

  return (
    <div className="relative" {...props}>
      <X
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "absolute top-0 right-0 cursor-pointer hover:opacity-80",
          closeButtonClassName
        )}
      />
      <div className="mt-6">{children}</div>
    </div>
  );
}

export function DialogBody({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

const footerVariants = cva(["flex w-full  gap-2"], {
  variants: {
    variant: {
      delete: "",
      submit: "",
    },
    buttonDirection: {
      row: "flex-row",
      column: "flex-col",
    },
    buttonPosition: {
      left: "justify-start",
      right: "justify-end",
    },
  },
  defaultVariants: {
    variant: "delete",
    buttonDirection: "row",
    buttonPosition: "right",
  },
});

export type DialogFooterProps = VariantProps<typeof footerVariants> &
  ComponentProps<"div"> & {
    variant?: "delete" | "submit";
    fullWidth?: boolean;
    cancelButtonTitle?: string;
    submitButtonTitle?: string;
    cancelButtonClassName?: string;
    submitButtonClassName?: string;
    loading?: boolean;
    disabled?: boolean;
  };

export function DialogFooter({
  variant,
  fullWidth,
  buttonDirection,
  cancelButtonTitle,
  submitButtonTitle,
  cancelButtonClassName = "",
  submitButtonClassName = "",
  loading,
  disabled,
  ...props
}: DialogFooterProps) {
  const { setOpen, handleCancel, handleSubmit } = useDialog();
  return (
    <div className="flex flex-col justify-end " {...props}>
      <div className={cn(footerVariants({ variant, buttonDirection }))}>
        <Button
          disabled={loading || disabled}
          fullWidth={fullWidth}
          //   variant={variant === "delete" ? "secondary" : "primary"}
          onClick={() => {
            handleCancel();
            setOpen(false);
          }}
          className={cn(cancelButtonClassName)}
        >
          <Label>{cancelButtonTitle || "Cancel"}</Label>
        </Button>
        <Button
          loading={loading}
          disabled={loading || disabled}
          className={cn(submitButtonClassName)}
          fullWidth={fullWidth}
          size={"medium"}
          variant={variant === "delete" ? "destructive" : "secondary"}
          onClick={handleSubmit}
        >
          <Label>{submitButtonTitle || "Submit"}</Label>
        </Button>
      </div>
    </div>
  );
}
