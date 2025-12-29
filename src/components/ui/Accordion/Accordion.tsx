import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type Dispatch,
  type SetStateAction,
} from "react";
import { cn } from "../../../../lib/utilities";
import { ChevronDown } from "lucide-react";

type AccordionContextProps = {
  item: string;
  setItem: Dispatch<SetStateAction<string>>;
};
const AccordionContext = createContext<AccordionContextProps>({
  item: "",
  setItem: () => {},
});

function useAccordionContext() {
  const values = useContext(AccordionContext);

  return values;
}

type AccordionProps = ComponentProps<"div"> & {
  defaultExpandedTab?: string;
};
export function Accordion({
  defaultExpandedTab = "",
  className = "",
  children,
}: AccordionProps) {
  const [item, setItem] = useState(defaultExpandedTab);
  return (
    <AccordionContext.Provider value={{ item, setItem }}>
      <div className={cn("w-full p-2", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

type AccordionItemProps = ComponentProps<"button"> & {
  value: string;
  children: React.ReactNode;
  label: string;
  classNameTriggerLabel?: string;
  classNameTriggerLabelContainer?: string;
};
export function AccordionHeaderTrigger({
  value = "",
  children,
  className = "",
  classNameTriggerLabel = "",
  classNameTriggerLabelContainer = "",
  label,
}: AccordionItemProps) {
  const { item, setItem } = useAccordionContext();
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<number>();

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setSize(rect.height);
    }
  }, [item]);

  function handleExpandContent() {
    setItem((prev) => {
      if (prev === value) {
        return "";
      }

      return value;
    });
  }
  return (
    <div>
      <button
        className={cn(
          "hover:underline flex  text-xl w-full justify-between p-2 cursor-pointer",
          className
        )}
        onClick={handleExpandContent}
      >
        {label}
        <ChevronDown
          className={cn(
            "transition-all",
            item === value ? "rotate-180 " : "rotate-0"
          )}
        />
      </button>
      <div
        className={cn(
          "border-b-2 transition-all duration-200 overflow-hidden",
          classNameTriggerLabelContainer
        )}
        style={{ height: item === value ? size : 0 }}
      >
        <div ref={ref} className={cn("p-2", classNameTriggerLabel)}>
          {children}
        </div>
      </div>
    </div>
  );
}

type AccordionContentProps = ComponentProps<"div"> & {
  children: React.ReactNode;
};
export function AccordionContent({
  children,
  className = "",
}: AccordionContentProps) {
  return <div className={cn(className)}>{children}</div>;
}
