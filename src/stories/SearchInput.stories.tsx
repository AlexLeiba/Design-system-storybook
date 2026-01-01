import type { Meta, StoryObj } from "@storybook/react";
import { SearchInput } from "../components/ui/SearchInput/SearchInput";

const meta: Meta<typeof SearchInput> = {
  title: "Example/SearchInput",
  component: SearchInput,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text" },
    title: { control: "text" },

    sizeType: {
      control: "radio",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    handleChange: { control: "check" },
    disabled: { control: "boolean" },

    className: {
      control: "check",
      description: "SearchInput container className",
    },
    classNameTitle: { control: "check" },
    classNameInput: { control: "check" },
    classNameXIcon: { control: "check" },
    classNameIconSearchIcon: { control: "check" },
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

type Story = StoryObj<typeof SearchInput>;

export const DefaultInput: Story = {
  args: {
    title: "Search Input label",
    value: "search input placeholder...",
    sizeType: "medium",
    handleChange: (v) => console.log(v),
  },
};
export const SmallSearchInput: Story = {
  args: {
    title: "Search Input label",
    value: "search input placeholder...",
    sizeType: "small",
    handleChange: (v) => console.log(v),
  },
};
export const MediumSearchInput: Story = {
  args: {
    title: "Search Input label",
    value: "search input placeholder...",
    sizeType: "medium",
    handleChange: (v) => console.log(v),
  },
};
export const LargeSearchInput: Story = {
  args: {
    title: "Search Input label",
    value: "search input placeholder...",
    sizeType: "large",
    handleChange: (v) => console.log(v),
  },
};
export const DisabledSearchInput: Story = {
  args: {
    title: "Search Input label",
    value: "search input placeholder...",
    sizeType: "large",
    disabled: true,
    handleChange: (v) => console.log(v),
  },
};
