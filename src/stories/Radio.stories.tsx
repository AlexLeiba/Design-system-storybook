import type { StoryObj, Meta } from "@storybook/react";
import { Radio } from "../components/ui/Radio/Radio";

const meta: Meta = {
  title: "Example/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    sizeType: {
      control: "radio",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },

    success: { control: "boolean" },
    error: { control: "text" },
    onChange: {
      action: "onChange",
      description:
        "onChange handler which will return the value stored under the key <b>name attribute</b> and accessible via event.target.value",
    },
    title: { control: "text", description: "Radio label" },
    value: {
      control: "text",
      description: "Radio <b>value</b> which will be stored in the form",
    },
    name: {
      control: "text",
      description:
        "Radio <b>unique name</b> which will represent the radio selected value in the submitted form",
    },

    className: { control: "check", description: "Radio container className" },
    classNameLabel: { control: "check" },
    classNameInput: { control: "check" },
    classNameError: { control: "check" },
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
type Story = StoryObj<typeof Radio>;

export const RadioDefault: Story = {
  args: {
    title: "Radio label default",
  },
};
export const RadioDefaultMedium: Story = {
  args: {
    title: "Radio label medium",
    sizeType: "medium",
  },
};
export const RadioDefaultLarge: Story = {
  args: {
    title: "Radio label large",
    sizeType: "large",
  },
};
export const RadioSuccess: Story = {
  args: {
    title: "Radio label success",
    success: true,
  },
};
export const RadioError: Story = {
  args: {
    title: "Rdio label error",
    error: "Error message",
  },
};
