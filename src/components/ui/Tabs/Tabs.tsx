import React, {
  createContext,
  useContext,
  useState,
  type ComponentProps,
  type Dispatch,
  type SetStateAction,
} from "react";
import { cn } from "../../../../lib/utilities";
import { Button } from "../Button/Button";
import { cva } from "class-variance-authority";

const tabsListVariants = cva(
  "inline-flex gap-2 p-1 border-2 border-gray-400 rounded-2xl w-full",
  {
    variants: {
      position: {
        left: "flex flex-row justify-start",
        center: "flex flex-row justify-center",
        right: "flex flex-row justify-end",
      },
    },
  }
);

type ContextProps = {
  tabContent: string;
  setTabContent?: Dispatch<SetStateAction<string>>;
};
const TabsContext = createContext<ContextProps>({
  tabContent: "",
  setTabContent: () => {},
});

type PropsTabsWrapper = {
  defaultValue: string;
  fullWidth?: boolean;
  children: React.ReactNode;
};
function useTabsData() {
  return useContext(TabsContext);
}

// PARENT TABS
export function Tabs({
  defaultValue,
  fullWidth = false,
  children,
}: PropsTabsWrapper) {
  const [tabContent, setTabContent] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ tabContent, setTabContent }}>
      <div className={cn(fullWidth ? "flex flex-col" : "inline-flex flex-col")}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

type TabsListProps = ComponentProps<"div"> & {
  children: React.ReactNode;
  fullWidth?: boolean;
  position?: "left" | "center" | "right";
};
// CONTAINER OF TABS LIST, WILL TAKE TAB TRIGGERS AS CHILDREN
export function TabsList({
  children,
  className = "",
  fullWidth = false,
  position = "left",
  ...props
}: TabsListProps) {
  return (
    <div
      className={cn(
        tabsListVariants({ position }),

        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

type TabsTriggerProps = ComponentProps<"button"> & {
  value: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  loading?: boolean;
  customTitleClassName?: string;
};

// VALUE WILL BE PASSED AS PROPS AND TRIGGERED ON CLICK
export function TabsTrigger({
  value,
  children,
  variant,
  size,
  loading,
  className,
  customTitleClassName,
}: TabsTriggerProps) {
  const { setTabContent, tabContent } = useTabsData();
  return (
    <Button
      loading={loading}
      variant={tabContent === value ? variant || "primary" : "ghost"}
      size={size}
      onClick={() => setTabContent?.(value)}
      className={className}
      customTitleClassName={customTitleClassName}
    >
      {children}
    </Button>
  );
}

type TabsContentProps = {
  value: string;
  children: React.ReactNode;
};

// CONTENT DISPLAYED BASED ON SELECTED TAB  VALUE BY TabsTrigger
export function TabsContent({ value, children }: TabsContentProps) {
  const { tabContent } = useTabsData();
  return <div>{tabContent === value && children}</div>;
}
