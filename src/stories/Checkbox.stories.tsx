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
    label: {
      control: "text",
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
        "Native checkbox attribute <b>name</b> which will represent name of the checkbox value stored in the submitted form",
    },
    classNameLabel: {
      control: "check",
    },
    classNameError: {
      control: "check",
    },
    classNameContainerCheckboxAndLabel: {
      control: "check",
    },
    classNameInputCheckbox: {
      control: "check",
    },
    className: {
      control: "check",
      description: "Checkbox container className",
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

export const CheckboxUsage: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-2">
        <Checkbox
          defaultChecked
          {...args}
          label={args.label || "English"}
          name="english"
          value={"english"}
          handleChange={(v) => console.log(v)}
        />
        <Checkbox
          {...args}
          label={args.label || "French"}
          name="french"
          value={"french"}
          handleChange={(v) => console.log(v)}
        />
        <Checkbox
          {...args}
          label={args.label || "Spanish"}
          name="spanish"
          value={"spanish"}
          handleChange={(v) => console.log(v)}
        />
      </div>
    );
  },
};
export const CheckboxMedium: Story = {
  args: {
    label: "Checkbox label medium",
    sizeType: "medium",
    handleChange: (v) => console.log(v),
    defaultChecked: true,
  },
};
export const CheckboxLarge: Story = {
  args: {
    label: "Checkbox label large",
    sizeType: "large",
    error: "Error message",
    handleChange: (v) => console.log(v),
    defaultChecked: true,
  },
};

export const CheckboxDefaultError: Story = {
  args: {
    label: "Checkbox label Error",
    error: "Error message",
    handleChange: (v) => console.log(v),
    defaultChecked: true,
  },
};

export const CheckboxDefaultSuccess: Story = {
  args: {
    label: "Checkbox label Success",
    success: true,
    handleChange: (v) => console.log(v),
    defaultChecked: true,
  },
};
