import type { Meta, StoryObj } from "@storybook/react";
import { SearchInput } from "../components/ui/SearchInput/SearchInput";

const meta: Meta<typeof SearchInput> = {
  title: "Example/SearchInput",
  component: SearchInput,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "check" },
    title: { control: "text" },

    sizeType: {
      control: "radio",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    handleChange: { control: "check" },
    className: { control: "check" },

    titleClassName: { control: "check" },
  },
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const DefaultInput: Story = {
  args: {
    title: "Search Input label",
    value: "search input placeholder...",
    sizeType: "medium",
  },
};
export const SmallSearchInput: Story = {
  args: {
    title: "Search Input label",
    value: "search input placeholder...",
    sizeType: "small",
  },
};
export const MediumSearchInput: Story = {
  args: {
    title: "Search Input label",
    value: "search input placeholder...",
    sizeType: "medium",
  },
};
export const LargeSearchInput: Story = {
  args: {
    title: "Search Input label",
    value: "search input placeholder...",
    sizeType: "large",
  },
};
