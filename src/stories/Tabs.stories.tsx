import type { Meta, StoryObj } from "@storybook/react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/Tabs/Tabs";
import Label from "../components/ui/Label/Label";

type TabsContentProps = {
  defaultValue: string;
  value1: string;
  value2: string;
  value3: string;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  loading?: boolean;
};
const TabsComponentDefault = ({
  defaultValue,
  value1,
  value2,
  value3,
  variant,
  size,
  loading,
}: TabsContentProps) => {
  return (
    <Tabs defaultValue={defaultValue}>
      <TabsList>
        <TabsTrigger
          variant={variant}
          size={size}
          loading={loading}
          value={value1}
        >
          Tab 1
        </TabsTrigger>
        <TabsTrigger
          variant={variant}
          size={size}
          loading={loading}
          value={value2}
        >
          Tab 2
        </TabsTrigger>
        <TabsTrigger
          variant={variant}
          size={size}
          loading={loading}
          value={value3}
        >
          Tab 3
        </TabsTrigger>
      </TabsList>
      <TabsContent value={value1}>
        <Label>Content of Tab 1</Label>
      </TabsContent>
      <TabsContent value={value2}>
        <Label>Content of Tab 2</Label>
      </TabsContent>
      <TabsContent value={value3}>
        <Label>Content of Tab 3</Label>
      </TabsContent>
    </Tabs>
  );
};

// component info.
const meta: Meta<typeof TabsComponentDefault> = {
  title: "Example/Tabs",
  component: TabsComponentDefault,
  tags: ["autodocs"],
  argTypes: {
    value1: {
      control: "text",
      defaultValue: "tab1",
    },
    value2: {
      control: "text",
      defaultValue: "tab2",
    },
    value3: {
      control: "text",
      defaultValue: "tab3",
    },
    loading: {
      control: "boolean",
      defaultValue: false,
    },
    variant: {
      control: "radio",
      options: ["primary", "secondary", "tertiary"],
      defaultValue: "primary",
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
  },
};

export default meta;

type Story = Omit<StoryObj<typeof TabsComponentDefault>, "children">;

export const TabsDefaultPrimaryUsage: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Default usage of Tabs, the code doesn't show how to use it. If you want to see how to use it, check the code of the examples below.", //additional desc in the auto generated docs.
      },
    },
  },
  args: {
    defaultValue: "tab1",
    value1: "tab1",
    value2: "tab2",
    value3: "tab3",
    variant: "primary",
    size: "medium",
  },
};

export const TabsSecondary: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger variant="secondary" value="tab1">
          Tab 1
        </TabsTrigger>
        <TabsTrigger variant="secondary" value="tab2">
          Tab 2
        </TabsTrigger>
        <TabsTrigger variant="secondary" value="tab3">
          Tab 3
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <Label>Content of Tab 1</Label>
      </TabsContent>
      <TabsContent value="tab2">
        <Label>Content of Tab 2</Label>
      </TabsContent>
      <TabsContent value="tab3">
        <Label>Content of Tab 3</Label>
      </TabsContent>
    </Tabs>
  ),
};
export const TabsTertiary: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger variant="tertiary" value="tab1">
          Tab 1
        </TabsTrigger>
        <TabsTrigger variant="tertiary" value="tab2">
          Tab 2
        </TabsTrigger>
        <TabsTrigger variant="tertiary" value="tab3">
          Tab 3
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <Label>Content of Tab 1</Label>
      </TabsContent>
      <TabsContent value="tab2">
        <Label>Content of Tab 2</Label>
      </TabsContent>
      <TabsContent value="tab3">
        <Label>Content of Tab 3</Label>
      </TabsContent>
    </Tabs>
  ),
};
export const TabsFullWidth: Story = {
  render: () => (
    <Tabs defaultValue="tab1" fullWidth>
      <TabsList>
        <TabsTrigger variant="tertiary" value="tab1" className="w-full">
          Tab 1
        </TabsTrigger>
        <TabsTrigger variant="tertiary" value="tab2" className="w-full">
          Tab 2
        </TabsTrigger>
        <TabsTrigger variant="tertiary" value="tab3" className="w-full">
          Tab 3
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <Label>Content of Tab 1</Label>
      </TabsContent>
      <TabsContent value="tab2">
        <Label>Content of Tab 2</Label>
      </TabsContent>
      <TabsContent value="tab3">
        <Label>Content of Tab 3</Label>
      </TabsContent>
    </Tabs>
  ),
};
