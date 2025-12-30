import type { StoryObj, Meta } from "@storybook/react";
import { FileUpload } from "../components/ui/FileUpload/FileUpload";

const meta: Meta = {
  title: "Example/FileUploadDragAndDrop",
  component: FileUpload,
  tags: ["autodocs"],
  argTypes: { handleSubmitFile: { action: "function" } },

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

type Story = StoryObj<typeof FileUpload>;

export const FileUploadDragAndDropDefault: Story = {
  args: {
    buttonTitle: "File Upload Drag and Drop Default",
    uiVariant: "dragAndDropContainer",
  },
};
export const FileUploadDragAndDropMultiple: Story = {
  args: {
    buttonTitle: "File Upload Drag and Drop Multiple upload files",
    uiVariant: "dragAndDropContainer",
    uploadVariant: "multiple",
    size: "small",
  },
};
export const FileUploadDragAndDropLarge: Story = {
  args: {
    buttonTitle: "File Upload Drag and Drop Large",
    uiVariant: "dragAndDropContainer",
    size: "large",
  },
};
export const FileUploadDragAndDropOnlyFiles: Story = {
  args: {
    buttonTitle: "File Upload Drag and Drop Type:Files",
    uiVariant: "dragAndDropContainer",
    size: "small",
    fileTypes: "files",
  },
};
