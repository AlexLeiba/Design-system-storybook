import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "../components/ui/Pagination/Pagination";

const meta: Meta = {
  title: "Example/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  argTypes: {
    nrOfPages: {
      control: "number",
      defaultValue: 10,
    },
    currentPage: {
      control: "number",
      defaultValue: 1,
    },
    onChangePage: { action: "onChangePage" },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const PaginationDefault: Story = {
  render: (args) => (
    <Pagination {...args} onChangePage={(v) => console.log("input value", v)} />
  ),
};
