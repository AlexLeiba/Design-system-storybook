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
    handleChange: {
      action: "handleChange",
      description:
        "handleChange will return the value stored under the attribute <b>value</b> which import styled from 'styled-components/native'; accessible via event.target.value",
    },
    title: { control: "text", description: "Radio label" },
    value: {
      control: "text",
      description:
        "Native radio attribute <b>value</b> which will be stored in the submitted form",
    },
    name: {
      control: "text",
      description:
        "Native radio attribute <b>name</b> which will be shared across all radio options in the same group",
    },

    classNameLabel: { control: "check" },
    classNameRadioInput: { control: "check" },
    classNameError: { control: "check" },
    classNameContainerCheckboxAndLabel: { control: "check" },
    className: { control: "check", description: "Radio container className" },
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

export const RadioUsage: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-2">
        <Radio
          {...args}
          defaultValue={"english"}
          label={args.label || "English"}
          name="language"
          value={"english"}
          handleChange={(v) => console.log(v)}
        />
        <Radio
          {...args}
          label={args.label || "French"}
          name="language"
          value={"french"}
          handleChange={(v) => console.log(v)}
        />
        <Radio
          {...args}
          label={args.label || "Spanish"}
          name="language"
          value={"spanish"}
          handleChange={(v) => console.log(v)}
        />
      </div>
    );
  },
};
export const RadioDefaultMedium: Story = {
  args: {
    label: "Radio label medium",
    sizeType: "medium",
  },
};
export const RadioDefaultLarge: Story = {
  args: {
    label: "Radio label large",
    sizeType: "large",
  },
};
export const RadioSuccess: Story = {
  args: {
    label: "Radio label success",
    success: true,
  },
};
export const RadioError: Story = {
  args: {
    label: "Radio label error",
    error: "Error message",
  },
};
