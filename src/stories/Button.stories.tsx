import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/ui/Button/Button";
import Label from "../components/ui/Label/Label";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Meta<typeof Button> takes care to pass only attributes that exists in Meta.
const meta: Omit<Meta<typeof Button>, "iconRight" | "iconLeft"> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"], //will generate docs in storybook local server
  argTypes: {
    children: {
      control: "text",
      defaultValue: "Click me",
      description:
        "You can pass any JSX value here or the button title for example.",
    },
    variant: {
      control: "radio",
      options: ["primary", "secondary", "tertiary", "ghost", "link"],
      defaultValue: "primary",
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    iconLeft: {
      control: "boolean",
      defaultValue: false,
    },
    iconRight: {
      control: "boolean",
      defaultValue: false,
    },

    loading: {
      control: "boolean",
      defaultValue: false,
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    className: {
      control: "check",
      defaultValue: "",
      description: "Button container className",
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

type Story = Omit<StoryObj<typeof Button>, "iconRight" | "iconLeft">; //this is the type of the component

export const Primary: Story = {
  render: (args) => (
    <Button
      {...args}
      children={args.children || "Click me"}
      iconLeft={args.iconLeft && <ChevronLeft />}
      iconRight={args.iconRight && <ChevronRight />}
    />
  ),
  // args: {
  //   variant: "primary",
  //   size: "medium",
  //   children: <Label>Click me</Label>,
  //   iconLeft: <ChevronLeft />,
  //   iconRight: <ChevronRight />,
  // },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    children: "Click me",
  },
};
export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    size: "medium",
    children: "Click me",
  },
};
export const Destructive: Story = {
  args: {
    variant: "destructive",
    size: "medium",
    children: "Click me",
  },
};
export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "medium",
    children: "Click me",
  },
};
export const Link: Story = {
  args: {
    variant: "link",
    size: "medium",
    children: "Click me",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    variant: "primary",
    children: "Click me",
  },
};
export const Medium: Story = {
  args: {
    size: "medium",
    variant: "primary",
    children: "Click me",
  },
};
export const Large: Story = {
  args: {
    size: "large",
    variant: "primary",
    children: "Click me",
  },
};
export const Loading: Story = {
  args: {
    size: "large",
    variant: "primary",
    children: "Click me",
    loading: true,
  },
};
export const Disabled: Story = {
  args: {
    size: "large",
    variant: "primary",
    children: "Click me",
    disabled: true,
  },
};
export const WithIcons: Story = {
  args: {
    size: "large",
    variant: "primary",
    children: "Click me",
    iconLeft: <ChevronLeft />,
    iconRight: <ChevronRight />,
  },
};
