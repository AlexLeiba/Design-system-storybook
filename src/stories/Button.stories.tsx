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
    children: { control: "text", defaultValue: "Button", name: "Label" },
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
      control: "check",
      defaultValue: <ChevronLeft />,
    },
    iconRight: {
      control: "check",
      defaultValue: <ChevronRight />,
    },
    className: {
      control: "check",
      defaultValue: "",
    },
  },
};

export default meta;

type Story = Omit<StoryObj<typeof Button>, "iconRight" | "iconLeft">; //this is the type of the component

export const Primary: Story = {
  parameters: {
    docs: {
      description: {},
    },
  },
  args: {
    variant: "primary",
    size: "medium",
    children: <Label className="text-white">Button</Label>,
  },
};

export const Secondary: Story = {
  parameters: {
    docs: {
      description: {
        story: "This is a secondary button",
      },
    },
  },
  args: {
    variant: "secondary",
    size: "medium",
    children: "Button",
  },
};
export const Tertiary: Story = {
  parameters: {
    docs: {
      description: {
        story: "This is a secondary button",
      },
    },
  },
  args: {
    variant: "tertiary",
    size: "medium",
    children: "Button",
  },
};
export const Destructive: Story = {
  parameters: {
    docs: {
      description: {
        story: "This is a secondary button",
      },
    },
  },
  args: {
    variant: "destructive",
    size: "medium",
    children: "Button",
  },
};
export const Ghost: Story = {
  parameters: {
    docs: {
      description: {
        story: "This is a secondary button",
      },
    },
  },
  args: {
    variant: "ghost",
    size: "medium",
    children: "Button",
  },
};
export const Link: Story = {
  parameters: {
    docs: {
      description: {
        story: "This is a secondary button",
      },
    },
  },
  args: {
    variant: "link",
    size: "medium",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    //args is what is passed into the component as props

    size: "small",
    variant: "primary",
    children: "Button",
  },
};
export const Medium: Story = {
  args: {
    //args is what is passed into the component as props

    size: "medium",
    variant: "primary",
    children: "Button",
  },
};
export const Large: Story = {
  args: {
    //args is what is passed into the component as props

    size: "large",
    variant: "primary",
    children: "Button",
  },
};
export const Loading: Story = {
  args: {
    //args is what is passed into the component as props

    size: "large",
    variant: "primary",
    children: "Button",
    loading: true,
  },
};
export const Disabled: Story = {
  args: {
    //args is what is passed into the component as props

    size: "large",
    variant: "primary",
    children: "Button",
    disabled: true,
  },
};
export const WithIcons: Story = {
  args: {
    //args is what is passed into the component as props

    size: "large",
    variant: "primary",
    children: "Button",
    iconLeft: <ChevronLeft />,
    iconRight: <ChevronRight />,
  },
};
