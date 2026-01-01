import type { StoryObj, Meta } from "@storybook/react";
import { Checkbox } from "../components/ui/Checkbox/Checkbox";

const meta: Meta = {
  title: "Example/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    sizeType: {
      control: "radio",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    error: {
      control: "text",
    },
    success: {
      control: "boolean",
    },

    handleChange: {
      control: "check",
    },
    defaultChecked: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    name: {
      control: "text",
      description:
        "Checkbox <b>name</b> which will represent name of the checkbox value stored in the submitted form",
    },
    titleClassName: {
      control: "check",
    },
    errorClassName: {
      control: "check",
    },
    className: {
      control: "check",
      description: "Checkbox container class",
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

type Story = StoryObj<typeof Checkbox>;

export const CheckboxDefault: Story = {
  args: {
    title: "Checkbox label default",
    handleChange: (v) => console.log(v),
    defaultChecked: true,
  },
};
export const CheckboxMedium: Story = {
  args: {
    title: "Checkbox label medium",
    sizeType: "medium",
    handleChange: (v) => console.log(v),
    defaultChecked: true,
  },
};
export const CheckboxLarge: Story = {
  args: {
    title: "Checkbox label large",
    sizeType: "large",
    error: "Error message",
    handleChange: (v) => console.log(v),
    defaultChecked: true,
  },
};

export const CheckboxDefaultError: Story = {
  args: {
    title: "Checkbox label Error",
    error: "Error message",
    handleChange: (v) => console.log(v),
    defaultChecked: true,
  },
};

export const CheckboxDefaultSuccess: Story = {
  args: {
    title: "Checkbox label Success",
    success: true,
    handleChange: (v) => console.log(v),
    defaultChecked: true,
  },
};
