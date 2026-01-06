import type { Meta, StoryObj } from "@storybook/react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/Tabs/Tabs";
import Label from "../components/ui/Label/Label";

type TabsContentProps = {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  loading?: boolean;
  disabled?: boolean;
  value?: string;
  defaultValue?: string;
  fullWidthContainer?: boolean;
  fullWidthTabs?: boolean;
  position?: "right" | "center" | "left";
};
export function TabsDefault({
  variant,
  size,
  loading,
  disabled,
  fullWidthContainer,
  fullWidthTabs,
  position = "left",
}: TabsContentProps) {
  return (
    <Tabs defaultValue={"tab1"} fullWidth={fullWidthContainer} className="">
      <TabsList position={position} className="mb-8">
        <TabsTrigger
          fullWidth={fullWidthTabs}
          variant={variant}
          size={size}
          loading={loading}
          value={"tab1"}
          disabled={disabled}
          className=""
        >
          Tab 1
        </TabsTrigger>
        <TabsTrigger
          fullWidth={fullWidthTabs}
          variant={variant}
          size={size}
          loading={loading}
          value={"tab2"}
          disabled={disabled}
          className=""
        >
          Tab 2
        </TabsTrigger>
        <TabsTrigger
          fullWidth={fullWidthTabs}
          variant={variant}
          size={size}
          loading={loading}
          value={"tab3"}
          disabled={disabled}
          className=""
        >
          Tab 3
        </TabsTrigger>
      </TabsList>
      <TabsContent value={"tab1"} className="">
        <Label>Content of Tab 1</Label>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vel
          cupiditate blanditiis exercitationem alias voluptas. Eius iusto quidem
          pariatur veniam.
        </p>
      </TabsContent>
      <TabsContent value={"tab2"}>
        <Label>Content of Tab 2</Label>
        <p>
          2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vel
          cupiditate blanditiis exercitationem alias voluptas. Eius iusto quidem
          pariatur veniam.
        </p>
      </TabsContent>
      <TabsContent value={"tab3"}>
        <Label>Content of Tab 3</Label>
        <p>
          3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vel
          cupiditate blanditiis exercitationem alias voluptas. Eius iusto quidem
          pariatur veniam.
        </p>
      </TabsContent>
    </Tabs>
  );
}

// component info.
const meta: Meta<typeof TabsDefault> = {
  title: "Example/Tabs",
  component: TabsDefault,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "check",
      description:
        "on <b>TabsTrigger</b> the <b>value</b> attribute represents the tab id, based on selected <b>value</b> the <b>TabsContent</b> will render its content.",
    },
    defaultValue: {
      control: "check",
      description: "Represents the default selected tab.",
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
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    fullWidthContainer: {
      control: "boolean",
      defaultValue: false,
    },
    fullWidthTabs: {
      control: "boolean",
      defaultValue: false,
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Check out the <b>code usage</b> and all <b>props</b>  by clicking the button below : <b>Show code</b>",
      },
    },
  },
};

export default meta;

type Story = Omit<StoryObj<typeof TabsDefault>, "children">;

export function TabsSecondaryFullWidth() {
  return (
    <Tabs defaultValue={"tab1"} fullWidth>
      <TabsList>
        <TabsTrigger
          fullWidth
          variant={"secondary"}
          size={"medium"}
          loading={false}
          value={"tab1"}
          disabled={false}
        >
          Tab 1
        </TabsTrigger>
        <TabsTrigger
          fullWidth
          variant={"secondary"}
          size={"medium"}
          loading={false}
          value={"tab2"}
          disabled={false}
        >
          Tab 2
        </TabsTrigger>
        <TabsTrigger
          fullWidth
          variant={"secondary"}
          size={"medium"}
          loading={false}
          value={"tab3"}
          disabled={false}
        >
          Tab 3
        </TabsTrigger>
      </TabsList>
      <TabsContent value={"tab1"}>
        <Label>Content of Tab 1</Label>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vel
          cupiditate blanditiis exercitationem alias voluptas. Eius iusto quidem
          pariatur veniam.
        </p>
      </TabsContent>
      <TabsContent value={"tab2"}>
        <Label>Content of Tab 2</Label>
        <p>
          2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vel
          cupiditate blanditiis exercitationem alias voluptas. Eius iusto quidem
          pariatur veniam.
        </p>
      </TabsContent>
      <TabsContent value={"tab3"}>
        <Label>Content of Tab 3</Label>
        <p>
          3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vel
          cupiditate blanditiis exercitationem alias voluptas. Eius iusto quidem
          pariatur veniam.
        </p>
      </TabsContent>
    </Tabs>
  );
}

export const TabsTertiaryCenter: Story = {
  render: () => (
    <Tabs defaultValue="tab1" fullWidth>
      <TabsList position="center" className=" ">
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
export const TabsTertiaryRight: Story = {
  render: () => (
    <Tabs defaultValue="tab1" fullWidth>
      <TabsList position="right" className=" ">
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
export const TabsLargeFullWidth: Story = {
  render: () => (
    <Tabs defaultValue="tab1" fullWidth>
      <TabsList>
        <TabsTrigger
          size="large"
          variant="secondary"
          value="tab1"
          className="w-full"
        >
          Tab 1
        </TabsTrigger>
        <TabsTrigger
          size="large"
          variant="tertiary"
          value="tab2"
          className="w-full"
        >
          Tab 2
        </TabsTrigger>
        <TabsTrigger
          size="large"
          variant="primary"
          value="tab3"
          className="w-full"
        >
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
