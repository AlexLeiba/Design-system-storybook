import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "../components/ui/Pagination/Pagination";
import { useState } from "react";

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
    onChangePage: {
      action: "onChangePage",
      description:
        "onChange handler is a callback function which will return the page number",
    },
    disabled: { control: "boolean" },
    classNameButtonLeft: { control: "check" },
    classNameButtonRight: { control: "check" },
    classNamePageButton: { control: "check" },
    classNameInput: { control: "check" },
    className: { control: "check", description: "Pagination container class" },
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
type Story = StoryObj<typeof Pagination>;

export const PaginationDefault: Story = {
  render: (args) => {
    const [page, setPage] = useState(1);
    return (
      <Pagination
        {...args}
        nrOfPages={args.nrOfPages || 6}
        currentPage={page}
        onChangePage={(v) => setPage(v)}
      />
    );
  },
};
