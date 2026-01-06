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
  "inline-flex gap-2 p-1 border-2 border-gray-200 rounded-2xl",
  {
    variants: {
      position: {
        left: "inline-flex flex-row justify-start",
        center: "inline-flex flex-row justify-center",
        right: "inline-flex flex-row justify-end",
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

type PropsTabsWrapper = ComponentProps<"div"> & {
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
  className = "",
  ...props
}: PropsTabsWrapper) {
  const [tabContent, setTabContent] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ tabContent, setTabContent }}>
      <div
        className={cn(fullWidth ? "flex flex-col" : "", className)}
        {...props}
      >
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
    <div className={cn(tabsListVariants({ position }), className)} {...props}>
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
  fullWidth?: boolean;
};

// VALUE WILL BE PASSED AS PROPS AND TRIGGERED ON CLICK
export function TabsTrigger({
  value,
  children,
  variant,
  size,
  loading,
  className = "",
  fullWidth = false,
  ...props
}: TabsTriggerProps) {
  const { setTabContent, tabContent } = useTabsData();
  return (
    <Button
      loading={loading}
      variant={tabContent === value ? variant || "primary" : "ghost"}
      size={size}
      onClick={() => setTabContent?.(value)}
      className={cn(fullWidth ? "w-full" : "", className)}
      {...props}
    >
      {children}
    </Button>
  );
}

type TabsContentProps = ComponentProps<"div"> & {
  value: string;
  children: React.ReactNode;
};

// CONTENT DISPLAYED BASED ON SELECTED TAB  VALUE BY TabsTrigger
export function TabsContent({
  value,
  children,
  className = "",
  ...props
}: TabsContentProps) {
  const { tabContent } = useTabsData();
  return (
    <div className={cn(className)} {...props}>
      {tabContent === value && children}
    </div>
  );
}
