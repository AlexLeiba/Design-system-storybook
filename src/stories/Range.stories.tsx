import type { StoryObj, Meta } from "@storybook/react";
import { Range } from "../components/ui/Range/Range";
import { useState } from "react";

const meta: Meta = {
  title: "Example/Range",
  component: Range,
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
        "handleChange will return the value stored under the attribute <b>value</b>",
    },
    label: { control: "text", description: "Range label" },
    value: {
      control: "text",
      description:
        "Native Range attribute <b>value</b> which will represent the value in the submitted form",
    },
    name: {
      control: "text",
      description:
        "Native Range attribute <b>name</b> which will represent the range name in the submitted form",
    },

    classNameLabel: { control: "check" },
    classNameRangeInput: { control: "check" },
    classNameError: { control: "check" },
    className: { control: "check", description: "Range container className" },
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
type Story = StoryObj<typeof Range>;

export const RangeUsage: Story = {
  render: (args) => {
    const [audioVolume, setAudioVolume] = useState(50);
    const [videoVolume, setVideoVolume] = useState(10);

    return (
      <div className="flex flex-col gap-2">
        <Range
          {...args}
          defaultValueRange={50}
          label={args.label || "Audio volume"}
          name="audio-volume"
          value={audioVolume}
          handleChange={(v) => setAudioVolume(v)}
        />
        <Range
          {...args}
          defaultValueRange={10}
          label={args.label || "Radio volume"}
          name="video-volume"
          value={videoVolume}
          handleChange={(v) => setVideoVolume(v)}
        />
      </div>
    );
  },
};

export const RangeSuccess: Story = {
  args: {
    label: "Range success",
    success: true,
    defaultValueRange: 50,
  },
};
export const RangeError: Story = {
  args: {
    label: "Range error",
    error: "Error message",
    defaultValueRange: 90,
  },
};
export const RangeDisabled: Story = {
  args: {
    label: "Range disabled",
    defaultValueRange: 40,
    disabled: true,
  },
};
