import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionContent,
  AccordionHeaderTrigger,
} from "../components/ui/Accordion/Accordion";

type AccordionExampleUiProps = {
  defaultValue?: string;
  value1: string;
  value2: string;
  value3: string;
  label1: string;
  label2: string;
  label3: string;
};
const AccordionExampleUi = ({
  value1,
  value2,
  value3,
  label1,
  label2,
  label3,
  defaultValue,
}: AccordionExampleUiProps) => {
  return (
    <Accordion defaultValue={defaultValue}>
      <AccordionHeaderTrigger value={value1} label={label1}>
        <AccordionContent>
          <h2 className="text-xl">Accordion Content 1</h2>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            quibusdam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            laudantium nisi illo, nihil ullam ex.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            laudantium nisi illo, nihil ullam ex.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            laudantium nisi illo, nihil ullam ex.
          </p>
        </AccordionContent>
      </AccordionHeaderTrigger>
      <AccordionHeaderTrigger value={value2} label={label2}>
        <AccordionContent>
          <h2 className="text-xl">Accordion Content 2</h2>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            quibusdam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            laudantium nisi illo, nihil ullam ex.
          </p>
        </AccordionContent>
      </AccordionHeaderTrigger>
      <AccordionHeaderTrigger value={value3} label={label3}>
        <AccordionContent>
          <h2 className="text-xl">Accordion Content 3</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            deserunt, necessitatibus recusandae eos molestiae expedita nulla
            dolorum iste, praesentium quidem veniam! Dolor et impedit
            consequatur quaerat eveniet officiis ducimus molestias praesentium
            aperiam expedita minus perspiciatis, voluptatibus ab hic labore
            nulla at facere a aliquam. Perspiciatis voluptatum quas similique
            dolores repellendus, tenetur consequuntur dolorem eligendi quae
            quibusdam exercitationem quos quo! Odit sunt quam, magni vel sint
            illum temporibus commodi non nemo maxime doloribus iste tenetur
            optio facere porro, sequi inventore! Perferendis explicabo
            consequatur corporis dolor eius, adipisci distinctio atque veritatis
            assumenda cum animi illo, aperiam enim ratione tempora pariatur.
            Facere, similique?
          </p>
          <p>d</p>
        </AccordionContent>
      </AccordionHeaderTrigger>
    </Accordion>
  );
};

const meta: Meta<typeof AccordionExampleUi> = {
  title: "Example/Accordion",
  component: AccordionExampleUi,
  tags: ["autodocs"],
  argTypes: {
    value1: { control: "text", defaultValue: "tab1" },
    value2: { control: "text", defaultValue: "tab2" },
    value3: { control: "text", defaultValue: "tab3" },
    label1: { control: "text", defaultValue: "Tab 1" },
    label2: { control: "text", defaultValue: "Tab 2" },
    label3: { control: "text", defaultValue: "Tab 3" },
    defaultValue: { control: "text", defaultValue: "tab1" },
  },
};

export default meta;

type Story = StoryObj<typeof AccordionExampleUi>;

export const AccordionUIExample: Story = {
  args: {
    value1: "tab1",
    value2: "tab2",
    value3: "tab3",
    label1: "Tab 1",
    label2: "Tab 2",
    label3: "Tab 3",
    defaultValue: "tab1",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The code doesn't show how to use it. If you want to see how to use it, check the code of the examples below.",
      },
    },
  },
};

export const AccordionCodeUsage: Story = {
  render: () => (
    <Accordion className="" defaultValue={"tab1"}>
      <AccordionHeaderTrigger
        value="tab1"
        label="Tab 1"
        className=""
        classNameTriggerLabel=""
        classNameTriggerLabelContainer=""
      >
        <AccordionContent className="">
          <h2 className="text-xl">Accordion Content 1</h2>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            quibusdam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            laudantium nisi illo, nihil ullam ex.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            laudantium nisi illo, nihil ullam ex.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            laudantium nisi illo, nihil ullam ex.
          </p>
        </AccordionContent>
      </AccordionHeaderTrigger>
      <AccordionHeaderTrigger
        value="tab2"
        label="Tab 2"
        classNameTriggerLabel=""
        classNameTriggerLabelContainer=""
        className=""
      >
        <AccordionContent className="">
          <h2 className="text-xl">Accordion Content 2</h2>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            quibusdam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            laudantium nisi illo, nihil ullam ex.
          </p>
        </AccordionContent>
      </AccordionHeaderTrigger>
      <AccordionHeaderTrigger
        value="tab3"
        label="Tab 3"
        classNameTriggerLabel=""
        classNameTriggerLabelContainer=""
        className=""
      >
        <AccordionContent>
          <h2 className="text-xl">Accordion Content 3</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            deserunt, necessitatibus recusandae eos molestiae expedita nulla
            dolorum iste, praesentium quidem veniam! Dolor et impedit
            consequatur quaerat eveniet officiis ducimus molestias praesentium
            aperiam expedita minus perspiciatis, voluptatibus ab hic labore
            nulla at facere a aliquam. Perspiciatis voluptatum quas similique
            dolores repellendus, tenetur consequuntur dolorem eligendi quae
            quibusdam exercitationem quos quo! Odit sunt quam, magni vel sint
            illum temporibus commodi non nemo maxime doloribus iste tenetur
            optio facere porro, sequi inventore! Perferendis explicabo
            consequatur corporis dolor eius, adipisci distinctio atque veritatis
            assumenda cum animi illo, aperiam enim ratione tempora pariatur.
            Facere, similique?
          </p>
          <p>d</p>
        </AccordionContent>
      </AccordionHeaderTrigger>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Check the code of the component with all its props by clicking on the 'Show Code' button.",
      },
    },
  },
};
